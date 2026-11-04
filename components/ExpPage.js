"use client";
import "../app/extra.css";
import "../app/pages.css";
import { T, META } from "../lib/i18n";
import { Shell, PageHead, useLive } from "./PageKit";

const tr = (o, lang) => (o && (o[lang] || o.fa || o.en)) || "";
const waUrl = (s, text) => `https://wa.me/${s.whatsapp}?text=${encodeURIComponent(text)}`;
const PHOTO = { fa: "عکس به‌زودی", en: "Photo soon", ar: "الصورة قريباً" };

export default function ExpPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const s = c.settings;
  const fmt = (n) => Number(n).toLocaleString(META[lang].num);
  return (
    <Shell lang={lang} current="exp" path="experiences/" s={s}>
      <PageHead k="exp" title={t.exp_t} sub={t.exp_sub} />
      <section className="pg-box">
        <div className="grid">
          {c.packages.map((p) => (
            <article key={p.id} className="card">
              <div className="media" style={p.img ? { backgroundImage: `url(${p.img})` } : null}>
                {!p.img && <span className="rph"><b aria-hidden="true">{p.emoji || "🐬"}</b>{PHOTO[lang]}</span>}
              </div>
              <div className="body">
                {tr(p.duration, lang) && <span className="chip">{tr(p.duration, lang)}</span>}
                <h3>{tr(p.name, lang)}</h3>
                {p.host && tr(p.host, lang) && <p className="xhost">👤 {tr(p.host, lang)}</p>}
                <p>{tr(p.desc, lang)}</p>
                <div className="meta"><b>{p.price ? `${fmt(p.price)} ${t.currency}` : t.ask_price}</b></div>
                <a className="btn sm" target="_blank" rel="noopener" href={waUrl(s, `${t.wa_book}: ${tr(p.name, lang)}`)}>{t.inquire}</a>
              </div>
            </article>
          ))}
        </div>
        <h2 className="steps-t">{t.steps_t}</h2>
        <ol className="steps">{t.steps.map(([a, b]) => <li key={a}><b>{a}</b><span>{b}</span></li>)}</ol>
      </section>
    </Shell>
  );
}
