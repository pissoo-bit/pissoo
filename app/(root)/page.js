const script = `(function(){var l=(navigator.language||"fa").slice(0,2);var t=l==="ar"?"ar":l==="en"?"en":"fa";location.replace("/"+t+"/");})();`;
export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "80px 16px" }}>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p><a href="/fa/">فارسی</a> · <a href="/en/">English</a> · <a href="/ar/">العربية</a></p>
    </main>
  );
}
