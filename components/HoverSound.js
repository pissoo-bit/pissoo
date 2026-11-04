"use client";
import { useEffect, useRef, useState } from "react";
import "../app/sound.css";

/* A single soft wood-block "tok" whenever the pointer enters a clickable element.
   Synthesised with the Web Audio API (no sound file). Browsers only allow audio after the first click, tap or key press. */
const SEL = 'a[href],button:not(:disabled),summary,[role="button"],select,input[type="submit"],.chcard,.knob';
const LABEL = { fa: ["صدا روشن", "صدا خاموش"], en: ["Sound on", "Sound off"], ar: ["الصوت مفعّل", "الصوت مكتوم"] };

export default function HoverSound({ lang }) {
  const [on, setOn] = useState(true);
  const ctx = useRef(null);
  const last = useRef(0);
  const onRef = useRef(true);

  useEffect(() => {
    try { if (localStorage.getItem("pissoo-sound") === "off") { setOn(false); onRef.current = false; } } catch (e) {}
  }, []);
  useEffect(() => {
    onRef.current = on;
    try { localStorage.setItem("pissoo-sound", on ? "on" : "off"); } catch (e) {}
  }, [on]);

  useEffect(() => {
    const unlock = () => {
      if (!ctx.current) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctx.current = new AC();
      }
      if (ctx.current.state === "suspended") ctx.current.resume();
    };
    const tok = () => {
      const c = ctx.current;
      if (!c || c.state !== "running" || !onRef.current) return;
      const t = c.currentTime;
      const f = 700 * (0.96 + Math.random() * 0.08);
      // body of the hit: a fast falling sine
      const o = c.createOscillator(); const g = c.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(f * 1.7, t);
      o.frequency.exponentialRampToValueAtTime(f, t + 0.035);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.15, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.17);
      o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + 0.19);
      // bright overtone, like a marimba bar
      const o2 = c.createOscillator(); const g2 = c.createGain();
      o2.type = "triangle"; o2.frequency.value = f * 3.9;
      g2.gain.setValueAtTime(0.05, t);
      g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      o2.connect(g2); g2.connect(c.destination); o2.start(t); o2.stop(t + 0.08);
      // tiny stick click
      const len = Math.floor(c.sampleRate * 0.02);
      const buf = c.createBuffer(1, len, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
      const src = c.createBufferSource(); src.buffer = buf;
      const hp = c.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 1800;
      const g3 = c.createGain(); g3.gain.value = 0.07;
      src.connect(hp); hp.connect(g3); g3.connect(c.destination); src.start(t);
    };
    const over = (e) => {
      const el = e.target && e.target.closest ? e.target.closest(SEL) : null;
      if (!el || el.classList.contains("snd-toggle")) return;
      if (e.relatedTarget && el.contains(e.relatedTarget)) return;
      const now = performance.now();
      if (now - last.current < 70) return;
      last.current = now;
      tok();
    };
    document.addEventListener("mouseover", over, { passive: true });
    const evs = ["pointerdown", "keydown", "touchstart"];
    evs.forEach((ev) => window.addEventListener(ev, unlock, { passive: true }));
    return () => {
      document.removeEventListener("mouseover", over);
      evs.forEach((ev) => window.removeEventListener(ev, unlock));
    };
  }, []);

  const lab = LABEL[lang] || LABEL.en;
  return (
    <button type="button" className="snd-toggle" onClick={() => setOn(!on)} aria-label={on ? lab[1] : lab[0]} title={on ? lab[1] : lab[0]} aria-pressed={on}>
      {on ? "🔊" : "🔇"}
    </button>
  );
}
