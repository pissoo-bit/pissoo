<?php
// Pissoo admin API — stores content in api/data/content.json (never overwritten by deploys).
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'secure' => $https, 'httponly' => true, 'samesite' => 'Strict']);
session_name('pissoo_admin');
session_start();

$data = __DIR__ . '/data';
$uploads = dirname(__DIR__) . '/uploads';
if (!is_dir($data)) { mkdir($data, 0750, true); }
file_put_contents($data . '/.htaccess', "Require all denied\nDeny from all\n");
if (!is_dir($uploads)) { mkdir($uploads, 0755, true); }
if (!file_exists($uploads . '/.htaccess')) {
  file_put_contents($uploads . '/.htaccess', "<FilesMatch \"\\.(php|phtml|phar|cgi|pl)$\">\nRequire all denied\n</FilesMatch>\n");
}

function out($d, int $c = 200): void { http_response_code($c); echo json_encode($d, JSON_UNESCAPED_UNICODE); exit; }
function body(): array { $j = json_decode((string)file_get_contents('php://input'), true); return is_array($j) ? $j : []; }
function guard(): void {
  if (($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') !== 'pissoo') out(['error' => 'forbidden'], 403);
  if (empty($_SESSION['admin'])) out(['error' => 'auth'], 401);
}
function load_json(string $f) { return is_file($f) ? json_decode((string)file_get_contents($f), true) : null; }
function put_json(string $f, $v): void {
  $tmp = $f . '.tmp';
  file_put_contents($tmp, json_encode($v, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);
  rename($tmp, $f);
}

$a = $_GET['a'] ?? '';
$adminFile = $data . '/admin.json';

if ($a === 'content') {
  header('Cache-Control: no-store');
  out(['content' => load_json($data . '/content.json')]);
}

if ($a === 'status') {
  out(['setup' => !is_file($adminFile), 'admin' => !empty($_SESSION['admin'])]);
}

if ($a === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  if (($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') !== 'pissoo') out(['error' => 'forbidden'], 403);
  $pw = (string)(body()['password'] ?? '');
  $att = load_json($data . '/attempts.json') ?: [];
  $ip = $_SERVER['REMOTE_ADDR'] ?? '0';
  $now = time();
  $att[$ip] = array_values(array_filter($att[$ip] ?? [], fn($t) => $t > $now - 900));
  if (count($att[$ip]) >= 8) out(['error' => 'locked'], 429);
  if (!is_file($adminFile)) {
    if (strlen($pw) < 8) out(['error' => 'short'], 400);
    put_json($adminFile, ['hash' => password_hash($pw, PASSWORD_DEFAULT)]);
    session_regenerate_id(true); $_SESSION['admin'] = true; out(['ok' => true]);
  }
  $adm = load_json($adminFile);
  if ($adm && password_verify($pw, $adm['hash'] ?? '')) {
    session_regenerate_id(true); $_SESSION['admin'] = true; out(['ok' => true]);
  }
  $att[$ip][] = $now; put_json($data . '/attempts.json', $att);
  sleep(1); out(['error' => 'bad'], 401);
}

if ($a === 'logout') { $_SESSION = []; session_destroy(); out(['ok' => true]); }

if ($a === 'save' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  guard();
  $c = body()['content'] ?? null;
  if (!is_array($c)) out(['error' => 'bad'], 400);
  $json = json_encode($c, JSON_UNESCAPED_UNICODE);
  if (strlen($json) > 1500000) out(['error' => 'too_big'], 413);
  $f = $data . '/content.json';
  if (is_file($f)) { copy($f, $data . '/content.bak.json'); }
  put_json($f, $c);
  out(['ok' => true]);
}

if ($a === 'upload' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  guard();
  $f = $_FILES['file'] ?? null;
  if (!$f || $f['error'] !== UPLOAD_ERR_OK) out(['error' => 'upload'], 400);
  if ($f['size'] > 6 * 1024 * 1024) out(['error' => 'too_big'], 413);
  $mime = (new finfo(FILEINFO_MIME_TYPE))->file($f['tmp_name']);
  $ext = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'][$mime] ?? null;
  if (!$ext || !@getimagesize($f['tmp_name'])) out(['error' => 'type'], 415);
  $name = date('Ymd') . '-' . bin2hex(random_bytes(5)) . '.' . $ext;
  if (!move_uploaded_file($f['tmp_name'], $uploads . '/' . $name)) out(['error' => 'move'], 500);
  out(['url' => '/uploads/' . $name]);
}

if ($a === 'passwd' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  guard();
  $b = body();
  $adm = load_json($adminFile);
  if (!$adm || !password_verify((string)($b['cur'] ?? ''), $adm['hash'] ?? '')) out(['error' => 'bad'], 401);
  if (strlen((string)($b['next'] ?? '')) < 8) out(['error' => 'short'], 400);
  put_json($adminFile, ['hash' => password_hash((string)$b['next'], PASSWORD_DEFAULT)]);
  out(['ok' => true]);
}

out(['error' => 'not_found'], 404);
