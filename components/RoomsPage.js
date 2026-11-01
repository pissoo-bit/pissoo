"use client";
import "../app/extra.css";
import "../app/pages.css";
import "../app/rooms.css";
import { T, META } from "../lib/i18n";
import { G, AMEN } from "../lib/guest";
import { nf } from "../lib/winds";
import { FLOOR, WALL, CEIL, OPEN, BATH, BED, ROOM_UI } from "../lib/rooms";
import { Shell, PageHead, useLive } from "./PageKit";
import SpecIcon from "./SpecIcons";

const tr = (o, lang) => (o && (o[lang] || o.fa || o.en)) || "";
const waUrl = (s, text) => `https://wa.me/${s.whatsapp}?text=${encodeURIComponent(text)}`;

function specRows(r, lang) {
  const sp = r.spec;
  const u = ROOM_UI[lang];
  const n = (x) => nf(x, lang);
  return [
    ["cap", u.cap, u.capText(r.capMin, r.capMax, n)],
    ["floor", u.floor, tr(FLOOR[sp.floor], lang)],
    ["size", u.size, `${n(sp.size[0])} × ${n(sp.size[1])} ${u.unit}`],
    ["bed", u.bed, tr(BED[sp.bed], lang)],
    ["wall", u.wall, tr(WALL[sp.wall], lang)],
    ["ceil", u.ceil, tr(CEIL[sp.ceil], lang)],
    ["open", u.open, tr(OPEN[sp.open], lang)],
    ["bath", u.bath, tr(BATH[sp.bath], lang)],
    ["ac", u.ac, u.split],
    ["fridge", u.fridge, u.has],
  ];
}

export default function RoomsPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const gh = G[lang].house;
  const gr = G[lang].room;
  const u = ROOM_UI[lang];
  const s = c.settings;
  const fmt = (n) => Number(n).toLocaleString(META[lang].num);
  return (
    <Shell lang={lang} current="rooms" path="rooms/" s={s}>
      <PageHead k="rooms" title={t.rooms_t} sub={t.rooms_sub} />
      <section className="pg-box">
        <div className="rgrid">
          {c.rooms.map((r) => {
            const cMin = r.capMin ?? r.capacity ?? 0;
            const cMax = r.capMax ?? r.capacity ?? 0;
            return (
              <article key={r.id} className="card rcard">
                {r.tier === "eco" && <span className="reco"><SpecIcon k="eco" />{u.eco}</span>}
                <div className="rmedia" style={r.img ? { backgroundImage: `url(${r.img})` } : null}>
                  {!r.img && <span className="rph"><b aria-hidden="true">{r.emoji || "🏠"}</b>{u.photo}</span>}
                </div>
                <div className="body">
                  <div className="rhead">
                    {r.num != null && <span className="rnum">{nf(r.num, lang)}</span>}
                    <div>
                      <h3>{r.pet ? tr(r.pet, lang) : tr(r.name, lang)}</h3>
                      {r.meaning && <p className="rmean"><span aria-hidden="true">{r.emoji}</span> {tr(r.meaning, lang)}</p>}
                    </div>
                  </div>
                  {r.spec ? (
                    <ul className="rspecs">
                      {specRows(r, lang).map(([k, label, val]) => (
                        <li key={k} className="rs"><SpecIcon k={k} /><span><small>{label}</small><b>{val}</b></span></li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p>{tr(r.desc, lang)}</p>
                      {r.amen && r.amen.length > 0 && <ul className="amen">{r.amen.filter((k) => AMEN[k]).map((k) => <li key={k}><span aria-hidden="true">{AMEN[k].i}</span>{AMEN[k][lang]}</li>)}</ul>}
                      <div className="meta"><span>👥 {cMax > cMin ? `${fmt(cMin)}–${fmt(cMax)}` : fmt(cMax)} {t.guests}</span></div>
                    </>
                  )}
                  <ul className="prices">
                    {r.price ? <li><span>{gr.p2}</span><b>{fmt(r.price)} {t.currency}</b></li> : <li><span>{t.ask_price}</span></li>}
                    {r.extra > 0 && <li><span>{gr.extra}</span><b>{fmt(r.extra)} {t.currency}</b></li>}
                    {r.single > 0 && <li><span>{gr.single}</span><b>{fmt(r.single)} {t.currency}</b></li>}
                  </ul>
                  <a className="btn sm" target="_blank" rel="noopener" href={waUrl(s, `${t.wa_book}: ${tr(r.name, lang)}`)}>{t.request}</a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="rnote">{u.note}</p>
      </section>
      <section className="pg-box">
        <h2>{gh.t}</h2>
        <p className="hnotice">{gh.notice}</p>
        <ul className="hgrid">{gh.items.map(([ic, x]) => <li key={x}><span aria-hidden="true">{ic}</span><span>{x}</span></li>)}</ul>
        <div className="hlinks">
          <a className="btn sm" href={`/${lang}/rules/`}>{gh.rules}</a>
          <a className="btn sm ghost dark" href={`/${lang}/contact/`}>{t.book}</a>
        </div>
        <p className="rnote">{gh.rulesP}</p>
      </section>
    </Shell>
  );
}
