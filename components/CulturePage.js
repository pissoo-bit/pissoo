"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import "../app/culture.css";
import { T } from "../lib/i18n";
import { CULT_UI, parseVideo } from "../lib/culture";
import { Shell, PageHead, useLive } from "./PageKit";

const tr = (o, lang) => (o && (o[lang] || o.fa || o.en)) || "";

function Antenna() {
  return (
    <svg className="tvant" viewBox="0 0 200 64" aria-hidden="true" focusable="false" fill="none" stroke="#0b4a5a" strokeWidth="4" strokeLinecap="round">
      <path d="M100 62L44 6M100 62L156 6" />
      <circle cx="44" cy="6" r="5" fill="#e07a2f" /><circle cx="156" cy="6" r="5" fill="#e07a2f" />
      <path d="M76 62a24 14 0 0 1 48 0z" fill="#19c3c7" />
    </svg>
  );
}

export default function CulturePage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const u = CULT_UI[lang];
  const items = useMemo(
    () => (c.culture || []).map((it) => { const v = parseVideo(it.url); return { ...it, v, thumb: it.img || (v && v.thumb) || "" }; }),
    [c.culture]
  );
  const [idx, setIdx] = useState(0);
  const [play, setPlay] = useState(false);
  const [tick, setTick] = useState(0);
  const screen = useRef(null);
  const n = items.length;
  const cur = n ? items[Math.min(idx, n - 1)] : null;

  const pick = (i) => { setIdx((i + n) % n); setPlay(false); setTick((x) => x + 1); };
  const fullscreen = () => {
    const el = screen.current;
    if (!el) return;
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (req) req.call(el);
    else if (cur && cur.v) window.open(cur.v.page, "_blank", "noopener");
  };
  useEffect(() => { setPlay(false); }, [idx]);

  return (
    <Shell lang={lang} current="culture" path="culture/" s={c.settings}>
      <PageHead k="culture" title={u.h} sub={u.sub} />
      {!cur ? (
        <p className="pg-box">{u.empty}</p>
      ) : (
        <>
          <section className="pg-box">
            <div className="tvwrap">
              <div className="tv">
                <Antenna />
                <div className="tvbody">
                  <div className="tvscreen" ref={screen}>
                    {play && cur.v ? (
                      <iframe src={cur.v.embed} title={tr(cur.title, lang)} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                    ) : (
                      <button className="tvprev" onClick={() => cur.v && setPlay(true)} aria-label={`${u.play}: ${tr(cur.title, lang)}`}>
                        <span className="tvimg" style={cur.thumb ? { backgroundImage: `url(${cur.thumb})` } : null} />
                        <span className="tvplay" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff" /></svg></span>
                        <span className="tvcap">{tr(cur.title, lang)}</span>
                      </button>
                    )}
                    <i key={tick} className="tvstatic" aria-hidden="true" />
                    <span className="tvglass" aria-hidden="true" />
                  </div>
                  <div className="tvpanel">
                    <i className="led" aria-hidden="true" />
                    <button className="knob" onClick={() => pick(idx - 1)} aria-label={u.prev} title={u.prev} />
                    <button className="knob" onClick={() => pick(idx + 1)} aria-label={u.next} title={u.next} />
                    <span className="grille" aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>
                  </div>
                </div>
                <div className="tvlegs" aria-hidden="true"><i /><i /></div>
              </div>
              <div className="tvtools">
                {cur.v && !play && <button className="btn sm" onClick={() => setPlay(true)}>▶ {u.play}</button>}
                <button className="btn sm ghost dark" onClick={fullscreen}>⛶ {u.full}</button>
                {play && <button className="btn sm ghost dark" onClick={() => setPlay(false)}>✕ {u.close}</button>}
                {cur.v && <a className="btn sm ghost dark" href={cur.v.page} target="_blank" rel="noopener noreferrer">{u.open}</a>}
              </div>
              <div className="tvinfo">
                <h2>{tr(cur.title, lang)}</h2>
                <p>{tr(cur.desc, lang)}</p>
              </div>
            </div>
          </section>

          {n > 1 && (
            <section className="pg-box">
              <h2>{u.channels}</h2>
              <div className="chgrid">
                {items.map((it, i) => (
                  <button key={it.id} className={"chcard" + (i === idx ? " on" : "")} onClick={() => { pick(i); screen.current && screen.current.scrollIntoView({ behavior: "smooth", block: "center" }); }}>
                    <span className="tvimg" style={it.thumb ? { backgroundImage: `url(${it.thumb})` } : null} />
                    <span className="tvcap">{tr(it.title, lang)}</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </Shell>
  );
}
