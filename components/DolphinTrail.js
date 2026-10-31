"use client";
import { useEffect, useRef } from "react";

const SIZES = [46, 38, 31, 25];
const COLORS = ["#0b7f8c", "#16a2ad", "#2dc2c6", "#5fd8da"];

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

export default function DolphinTrail() {
  const refs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const n = SIZES.length;
    const mouse = { x: 0, y: 0, seen: false, last: 0 };
    const P = SIZES.map(() => ({ x: 0, y: 0, a: 0, flip: 1, flipT: 1, op: 0 }));

    const onMove = (e) => {
      const p = e.touches && e.touches[0] ? e.touches[0] : e;
      mouse.x = p.clientX; mouse.y = p.clientY; mouse.last = performance.now();
      if (!mouse.seen) {
        mouse.seen = true;
        P.forEach((d, i) => { d.x = mouse.x - 40 - i * 18; d.y = mouse.y + 30; });
      }
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
        const d = P[i];
        const el = refs.current[i];
        if (!el) continue;
        const lead = i === 0 ? mouse : P[i - 1];
        const gap = i === 0 ? 48 : SIZES[i] * 0.9 + 8;
        const dx = lead.x - d.x; const dy = lead.y - d.y;
        const dist = Math.hypot(dx, dy) || 1;
        const tx = lead.x - (dx / dist) * gap;
        const ty = lead.y - (dy / dist) * gap;
        const k = i === 0 ? 0.07 : 0.11;
        const px = d.x; const py = d.y;
        d.x += (tx - d.x) * k;
        d.y += (ty - d.y) * k;
        const vx = d.x - px; const vy = d.y - py;
        const sp = Math.hypot(vx, vy);
        if (sp > 0.15) {
          const target = Math.atan2(vy, vx);
          let diff = target - d.a;
          diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          d.a += diff * 0.12;
          d.flipT = Math.cos(d.a) < 0 ? -1 : 1;
        }
        d.flip += (d.flipT - d.flip) * 0.15;
        const calm = Math.min(1, 0.35 + sp);
        const bob = Math.sin(t / 420 + i * 1.3) * 3 * calm;
        const wig = Math.sin(t / 170 + i) * 5 * Math.min(1, 0.3 + sp * 0.6);
        const w = SIZES[i];
        d.op += ((idle ? 0.3 : 0.92) - d.op) * 0.06;
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
