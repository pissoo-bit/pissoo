"use client";
import { useEffect, useRef, useState } from "react";

/* Two dolphins that swim calmly after the cursor.
   Preferred: the 3D humpback-dolphin model (/models/dolphin.glb, three.js loaded lazily on the first pointer move).
   Fallback (no WebGL, model missing, or load error): flat SVG dolphins. Disabled for prefers-reduced-motion. */

const LEN = [124, 96]; // body length in px for the 3D dolphins
const LEAD_EASE = 0.028; // how quickly the first dolphin closes in on the cursor (lower = lazier)
const FOLLOW_EASE = 0.045; // how quickly the second follows the first
const MAX_STEP = 3.2; // top speed in px per frame at 60 fps (~190 px/s)

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch (e) {
    return false;
  }
}

function Trail3D({ onFail }) {
  const ref = useRef(null);

  useEffect(() => {
    let dead = false;
    let raf = 0;
    let started = false;
    let cleanup = () => {};
    const mouse = { x: 0, y: 0, seen: false, last: 0 };

    const onMove = (e) => {
      const p = e.touches && e.touches[0] ? e.touches[0] : e;
      mouse.x = p.clientX; mouse.y = p.clientY; mouse.last = performance.now();
      if (!mouse.seen) mouse.seen = true;
      if (!started) { started = true; boot(); }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchstart", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });

    async function boot() {
      try {
        const THREE = await import("three");
        const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
        const gltf = await new GLTFLoader().loadAsync("/models/dolphin.glb");
        if (dead) return;

        const canvas = ref.current;
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        let W = window.innerWidth; let H = window.innerHeight;
        renderer.setSize(W, H, false);
        // pixel-space camera: world (x, -y) = screen (x, y)
        const cam = new THREE.OrthographicCamera(0, W, 0, -H, -2000, 2000);
        const scene = new THREE.Scene();
        scene.add(new THREE.AmbientLight(0xffffff, 1.7));
        const key = new THREE.DirectionalLight(0xffffff, 2.4); key.position.set(-0.5, 1, 1.4); scene.add(key);
        const fill = new THREE.DirectionalLight(0x9ce6e8, 0.9); fill.position.set(1, -0.4, 0.6); scene.add(fill);

        gltf.scene.traverse((o) => {
          if (!o.isMesh) return;
          o.frustumCulled = false;
          (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => {
            if (m.vertexColors && m.color) m.color.setScalar(1.7);
            if (m.emissive) { m.emissive.setHex(0x0b4a5a); m.emissiveIntensity = 0.2; }
          });
        });

        const dols = LEN.map((len, i) => {
          const A = new THREE.Group(); const B = new THREE.Group(); const C = new THREE.Group();
          const model = gltf.scene.clone(true);
          model.scale.setScalar(len / 2.8);
          C.add(model); B.add(C); A.add(B); scene.add(A);
          B.rotation.x = 0.38; // tilt a little so the back is visible
          const morphs = [];
          model.traverse((o) => { if (o.isMesh && o.morphTargetInfluences) morphs.push(o); });
          return { A, B, C, morphs, x: 0, y: 0, a: 0, yaw: 0, ph: i * 1.7, sp: 0, len, ready: false };
        });

        const onResize = () => {
          W = window.innerWidth; H = window.innerHeight;
          renderer.setSize(W, H, false);
          cam.right = W; cam.bottom = -H; cam.updateProjectionMatrix();
        };
        window.addEventListener("resize", onResize);

        let last = performance.now();
        const tick = (t) => {
          raf = requestAnimationFrame(tick);
          const dt = Math.min(0.05, (t - last) / 1000 || 0.016); last = t;
          const idle = t - mouse.last > 4500;
          canvas.style.opacity = idle ? "0.35" : "0.97";
          const f = dt * 60;
          dols.forEach((d, i) => {
            if (!d.ready) { d.x = mouse.x - 70 - i * 40; d.y = mouse.y + 44; d.ready = true; }
            const lead = i === 0 ? mouse : dols[i - 1];
            const gap = i === 0 ? 70 : d.len * 0.6 + 10;
            const dx = lead.x - d.x; const dy = lead.y - d.y;
            const dist = Math.hypot(dx, dy) || 1;
            const tx = lead.x - (dx / dist) * gap; const ty = lead.y - (dy / dist) * gap;
            const k = 1 - Math.pow(1 - (i === 0 ? LEAD_EASE : FOLLOW_EASE), f);
            let sx = (tx - d.x) * k; let sy = (ty - d.y) * k;
            const sl = Math.hypot(sx, sy); const cap = MAX_STEP * f;
            if (sl > cap) { sx = (sx / sl) * cap; sy = (sy / sl) * cap; }
            d.x += sx; d.y += sy;
            const sp = Math.hypot(sx, sy) / Math.max(f, 0.001);
            d.sp += (sp - d.sp) * 0.06;
            if (sp > 0.12) {
              const target = Math.atan2(sy, sx);
              let diff = target - d.a; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
              d.a += diff * Math.min(1, 0.05 * f);
            }
            const left = Math.cos(d.a) < 0;
            d.yaw += ((left ? Math.PI : 0) - d.yaw) * Math.min(1, 0.05 * f);
            const heading = left ? d.a - Math.PI : d.a;
            d.A.position.set(d.x, -d.y + Math.sin(t / 700 + i) * 3, 0);
            d.A.rotation.z = -heading;
            d.C.rotation.y = d.yaw;
            d.ph += dt * (2.4 + Math.min(d.sp, 3.2) * 0.45);
            const w = Math.sin(d.ph) * 0.9;
            d.morphs.forEach((m) => { m.morphTargetInfluences[0] = w; });
          });
          renderer.render(scene, cam);
        };
        raf = requestAnimationFrame(tick);

        cleanup = () => {
          window.removeEventListener("resize", onResize);
          cancelAnimationFrame(raf);
          gltf.scene.traverse((o) => {
            if (o.geometry) o.geometry.dispose();
            (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); });
          });
          renderer.dispose();
        };
      } catch (e) {
        if (!dead) onFail();
      }
    }

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onMove);
      window.removeEventListener("touchmove", onMove);
      cleanup();
    };
  }, [onFail]);

  return <canvas ref={ref} className="dtrail3d" aria-hidden="true" style={{ opacity: 0 }} />;
}

/* ---------- flat SVG fallback ---------- */
const SIZES = [46, 36];
const COLORS = ["#0b7f8c", "#2dc2c6"];

function Dolphin({ w, c }) {
  return (
    <svg width={w} height={w / 2} viewBox="-6 -3 56 28" aria-hidden="true" focusable="false">
      <path d="M4 13L-4 6Q-1 13-4 20Z" fill={c} />
      <path d="M4 13C9 5 22 3 33 7C39 9 44 10 50 11C46 14 41 14 37 16C29 21 12 21 4 13Z" fill={c} />
      <path d="M8 14C16 19 28 19 36 15C30 13 14 13 8 14Z" fill="#e9fdfd" opacity=".85" />
      <path d="M19 5.2L23-2L28 6Z" fill={c} />
      <path d="M27 16L24 22L31 17Z" fill={c} />
      <circle cx="38" cy="11.2" r="1.1" fill="#073b44" />
    </svg>
  );
}

function Trail2D() {
  const refs = useRef([]);
  useEffect(() => {
    const n = SIZES.length;
    const mouse = { x: 0, y: 0, seen: false, last: 0 };
    const P = SIZES.map(() => ({ x: 0, y: 0, a: 0, flip: 1, flipT: 1, op: 0 }));
    const onMove = (e) => {
      const p = e.touches && e.touches[0] ? e.touches[0] : e;
      mouse.x = p.clientX; mouse.y = p.clientY; mouse.last = performance.now();
      if (!mouse.seen) { mouse.seen = true; P.forEach((d, i) => { d.x = mouse.x - 50 - i * 30; d.y = mouse.y + 36; }); }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchstart", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    let raf;
    const tick = (t) => {
      raf = requestAnimationFrame(tick);
      if (!mouse.seen) return;
      const idle = t - mouse.last > 4500;
      for (let i = 0; i < n; i++) {
        const d = P[i]; const el = refs.current[i];
        if (!el) continue;
        const lead = i === 0 ? mouse : P[i - 1];
        const gap = i === 0 ? 56 : SIZES[i] * 0.9 + 10;
        const dx = lead.x - d.x; const dy = lead.y - d.y;
        const dist = Math.hypot(dx, dy) || 1;
        const tx = lead.x - (dx / dist) * gap; const ty = lead.y - (dy / dist) * gap;
        const k = i === 0 ? 0.03 : 0.045;
        let sx = (tx - d.x) * k; let sy = (ty - d.y) * k;
        const sl = Math.hypot(sx, sy);
        if (sl > 3) { sx = (sx / sl) * 3; sy = (sy / sl) * 3; }
        d.x += sx; d.y += sy;
        const sp = Math.hypot(sx, sy);
        if (sp > 0.1) {
          const target = Math.atan2(sy, sx);
          let diff = target - d.a; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          d.a += diff * 0.06; d.flipT = Math.cos(d.a) < 0 ? -1 : 1;
        }
        d.flip += (d.flipT - d.flip) * 0.08;
        const calm = Math.min(1, 0.35 + sp);
        const bob = Math.sin(t / 650 + i * 1.3) * 3 * calm;
        const wig = Math.sin(t / 320 + i) * 5 * Math.min(1, 0.3 + sp * 0.5);
        const w = SIZES[i];
        d.op += ((idle ? 0.3 : 0.92) - d.op) * 0.05;
        el.style.opacity = d.op.toFixed(3);
        el.style.transform = `translate3d(${(d.x - w / 2).toFixed(1)}px, ${(d.y - w / 4 + bob).toFixed(1)}px, 0) rotate(${((d.a * 180) / Math.PI + wig).toFixed(1)}deg) scaleY(${d.flip.toFixed(2)})`;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);
  return (
    <div className="dtrail" aria-hidden="true">
      {SIZES.map((w, i) => (
        <div key={i} className="dt" ref={(el) => { refs.current[i] = el; }} style={{ width: w, height: w / 2, opacity: 0 }}>
          <Dolphin w={w} c={COLORS[i]} />
        </div>
      ))}
    </div>
  );
}

export default function DolphinTrail() {
  const [mode, setMode] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setMode("off"); return; }
    setMode(hasWebGL() ? "3d" : "2d");
  }, []);
  if (mode === "3d") return <Trail3D onFail={() => setMode("2d")} />;
  if (mode === "2d") return <Trail2D />;
  return null;
}
