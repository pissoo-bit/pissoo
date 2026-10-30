import { T, LANGS } from "../lib/i18n";
import { WINDS, SOURCES, UI, MONTHS, SEASONS, SEASON_COLOR, NAV_ROOMS, WINDS_NAV, nf, rangeText, gregText, bars } from "../lib/winds";

const pick = (o, l) => (o && (o[l] || o.fa)) || "";

function Art({ id, strong }) {
  const sky = strong ? ["#5b6b86", "#1d3f6b"] : ["#8fc4e6", "#2f7fc0"];
  const ys = strong ? [30, 48, 66, 84] : [42, 64];
  return (
    <svg className={"art" + (strong ? " s" : "")} viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs><linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={sky[0]} /><stop offset="1" stopColor={sky[1]} /></linearGradient></defs>
      <rect width="400" height="150" fill={`url(#sky-${id})`} />
      <g className="cl c1" fill="#fff" opacity=".85"><ellipse cx="80" cy="26" rx="32" ry="10" /><ellipse cx="102" cy="20" rx="20" ry="11" /></g>
      <g className="cl c2" fill="#fff" opacity=".7"><ellipse cx="310" cy="40" rx="30" ry="9" /><ellipse cx="330" cy="34" rx="18" ry="10" /></g>
      {ys.map((y, i) => (
        <path key={i} className="wl" style={{ animationDelay: `${i * -0.5}s` }} d={`M${30 + i * 28} ${y} H${190 + i * 18} q14 0 14 -9 q0 -8 -9 -8`} fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".9" />
      ))}
      <path className="wv" d="M0 112 Q50 100 100 112 T200 112 T300 112 T400 112 V150 H0Z" fill="#2b6da3" opacity=".8" />
      <path d="M0 124 Q50 112 100 124 T200 124 T300 124 T400 124 V150 H0Z" fill="#0a3e66" />
      <g className="boat"><path d="M168 118 H232 L222 132 H178Z" fill="#7a4b2a" /><path d="M200 116 V70" stroke="#4a2f1b" strokeWidth="3" /><path d="M202 72 L202 112 L236 112Z" fill="#fff" /><path d="M198 80 L198 112 L172 112Z" fill="#f6f0e4" /></g>
    </svg>
  );
}

function Sources({ ids, lang }) {
  const u = UI[lang];
  return (
    <div className="wsrc">
      <b>{ids.length > 1 ? u.srcs : u.src}</b>
      <ul>
        {ids.map((k) => {
          const s = SOURCES[k];
          const label = pick(s.label, lang);
          return <li key={k}>{s.href ? <a href={s.href} target="_blank" rel="noopener noreferrer">{label}</a> : label}</li>;
        })}
      </ul>
    </div>
  );
}

function Card({ w, lang }) {
  const u = UI[lang];
  const strong = w.strength === "strong";
  const [m, d1] = w.from; const d2 = w.to[1];
  return (
    <article className={"wcard" + (strong ? " strong" : "")}>
      <div className="wart">
        <Art id={w.id} strong={strong} />
        <span className={"wlevel " + (strong ? "hi" : "lo")}>{strong ? u.strong : u.weak}</span>
      </div>
      <div className="wbody">
        <div className="wbadge">
          <b>{nf(d1, lang)}–{nf(d2, lang)}</b>
          <span>{MONTHS[lang][m - 1]}</span>
          <small>{gregText(w, lang)}</small>
        </div>
        <h3>{pick(w.t, lang)}</h3>
        <p className="waka"><b>{u.aka}:</b> {pick(w.aka, lang)}</p>
        <p>{pick(w.d, lang)}</p>
        <div className="wtip"><b>{u.tip}:</b> {pick(w.tip, lang)}</div>
        <p className="wnote">{pick(w.note, lang)}</p>
        <Sources ids={w.src} lang={lang} />
      </div>
    </article>
  );
}

export default function Winds({ lang }) {
  const t = T[lang];
  const u = UI[lang];
  const bigs = WINDS.filter((w) => w.big);
  const groups = {};
  WINDS.forEach((w) => { const m = w.from[0]; if (!groups[m]) groups[m] = []; groups[m].push(w); });
  const months = Object.keys(groups).map(Number).sort((a, b) => a - b);
  const nav = [["story", t.nav.story], ["rooms", NAV_ROOMS[lang]], ["exp", t.nav.exp], ["shop", t.nav.shop], ["gallery", t.nav.gallery]];

  return (
    <div className="wpage">
      <header id="top">
        <nav className="nav-simple">
          <a className="brand" href={`/${lang}/`}><img src="/logo.png" alt="Pissoo House" height="48" /></a>
          <div className="links">
            {nav.map(([k, label]) => <a key={k} href={`/${lang}/#${k}`}>{label}</a>)}
            <a href={`/${lang}/winds/`} aria-current="page" className="cur">{WINDS_NAV[lang]}</a>
            <a href={`/${lang}/#contact`}>{t.nav.contact}</a>
          </div>
          <div className="langs">
            {LANGS.map((l) => <a key={l} href={`/${l}/winds/`} hrefLang={l} className={l === lang ? "on" : ""}>{l.toUpperCase()}</a>)}
          </div>
        </nav>
      </header>

      <main>
        <section className="whead">
          <h1>{u.h}</h1>
          <p>{u.intro}</p>
        </section>

        <section className="wwrap">
          <div className="wcards">{bigs.map((w) => <Card key={w.id} w={w} lang={lang} />)}</div>
        </section>

        <section className="wwrap">
          <h2>{u.chart_t}</h2>
          <div className="chart" role="group" aria-label={u.chart_t}>
            <div className="crow chead" aria-hidden="true">
              <div className="cname" />
              <div>
                <div className="heads hm">{MONTHS[lang].map((mn) => <span key={mn}>{mn}</span>)}</div>
                <div className="heads hs">{SEASONS[lang].map((s, i) => <span key={s} style={{ color: SEASON_COLOR[i] }}>{s}</span>)}</div>
              </div>
            </div>
            {WINDS.map((w) => (
              <div className="crow" key={w.id}>
                <div className="cname">{pick(w.t, lang)}</div>
                <div className="ctrack" title={rangeText(w, lang)}>
                  {Array.from({ length: 12 }).map((_, i) => <i key={i} />)}
                  {bars(w).map((b, i) => (
                    <span key={i} className={"bar" + (w.id === "limehr" ? " red" : "")} style={{ insetInlineStart: `${b.l}%`, width: `${b.w}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="wwrap">
          <h2>{u.cal_t}</h2>
          <table className="cal">
            <caption className="sr">{u.cal_t}</caption>
            <thead>
              <tr><th scope="col">{u.colDate}</th><th scope="col">{u.colWind}</th><th scope="col">{u.colAbout}</th></tr>
            </thead>
            {months.map((m) => (
              <tbody key={m}>
                <tr className="mh" style={{ "--sc": SEASON_COLOR[Math.floor((m - 1) / 3)] }}><th colSpan={3} scope="colgroup">{MONTHS[lang][m - 1]}</th></tr>
                {groups[m].map((w) => (
                  <tr className="wr" key={w.id}>
                    <th scope="row" className="d"><b>{nf(w.from[1], lang)}</b><small>{gregText(w, lang)}</small></th>
                    <td className="e"><strong>{pick(w.t, lang)}</strong> <span className="tag">{u.tag}</span><div className="rg">{rangeText(w, lang)}</div></td>
                    <td className="a"><p>{pick(w.d, lang)}</p><Sources ids={w.src} lang={lang} /></td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </section>

        <section className="wwrap wfinal">
          {u.note.map((n) => <p key={n}>{n}</p>)}
          <p><a href={`/${lang}/`}>← {u.back}</a></p>
        </section>
      </main>

      <footer>
        <img className="footer-logo" src="/logo.png" alt="Pissoo House" />
        <div>{t.footer}</div>
        <div className="copy" dir="ltr">pissoo.ir</div>
      </footer>
    </div>
  );
}
