import { SubHeader, SubFooter } from "./SubChrome";
import { G, ROUTES, dur, GMAP_URL, IG_URL } from "../lib/guest";
import { nf } from "../lib/winds";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

function RouteMap({ lang }) {
  const a = G[lang].around;
  const km = G[lang].dur.km;
  const pos = { bushehr: [300, 50], delvar: [300, 130], kangan: [300, 282], siraf: [300, 352], khormoj: [470, 200] };
  const label = (id) => `${nf(ROUTES.find((r) => r.id === id).km, lang)} ${km} · ${dur(ROUTES.find((r) => r.id === id).min, lang)}`;
  const seaParts = a.sea.split(" — ");
  return (
    <svg className="rmap" viewBox="0 0 600 400" role="img" aria-label={a.mapT} style={{ direction: "ltr" }}>
      <rect width="600" height="400" rx="24" fill="#f6f0e4" />
      <path d="M0 0 H150 Q172 60 142 120 T152 240 T142 330 T162 400 H0Z" fill="#7fc0e6" />
      <path className="rw" d="M0 0 H120 Q142 60 112 120 T122 240 T112 330 T132 400 H0Z" fill="#5fb0e8" opacity=".6" />
      <text x="72" y="180" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0a3e66">{seaParts[0]}</text>
      <text x="72" y="202" textAnchor="middle" fontSize="12" fill="#0a3e66">{seaParts[1] || ""}</text>
      <g stroke="#0a3e66" strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" opacity=".5">
        <line x1="300" y1="34" x2="300" y2="366" />
        <line x1="300" y1="200" x2="500" y2="200" />
        <line x1="300" y1="200" x2="160" y2="200" />
      </g>
      <text x="300" y="18" textAnchor="middle" fontSize="13" fill="#0a3e66" opacity=".7">▲ {a.north}</text>
      <text x="300" y="394" textAnchor="middle" fontSize="13" fill="#0a3e66" opacity=".7">▼ {a.south}</text>
      <text x="592" y="184" textAnchor="end" fontSize="13" fill="#0a3e66" opacity=".7">{a.east} ▶</text>
      <text x="166" y="184" textAnchor="start" fontSize="13" fill="#0a3e66" opacity=".7">◀ {a.west}</text>
      {Object.entries(pos).map(([id, [x, y]]) => (
        <g key={id}>
          <circle cx={x} cy={y} r="9" fill="#0a6fb5" stroke="#fff" strokeWidth="3" />
          {id === "khormoj" ? (
            <>
              <text x={x} y={y + 30} textAnchor="middle" fontSize="16" fontWeight="700" fill="#0a3e66">{a.places[id]}</text>
              <text x={x} y={y + 48} textAnchor="middle" fontSize="13" fill="#0a3e66">{label(id)}</text>
            </>
          ) : (
            <>
              <text x={x + 18} y={y - 2} textAnchor="start" fontSize="16" fontWeight="700" fill="#0a3e66">{a.places[id]}</text>
              <text x={x + 18} y={y + 16} textAnchor="start" fontSize="13" fill="#0a3e66">{label(id)}</text>
            </>
          )}
        </g>
      ))}
      <circle cx="300" cy="200" r="24" fill="#0a3e66" stroke="#fff" strokeWidth="4" />
      <text x="300" y="208" textAnchor="middle" fontSize="22">🐬</text>
      <text x="300" y="242" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0a3e66">{a.pissoo}</text>
    </svg>
  );
}

export default function Around({ lang }) {
  const a = G[lang].around;
  const km = G[lang].dur.km;
  const seaName = a.sea.split(" — ")[0];
  return (
    <div className="gp">
      <SubHeader lang={lang} current="around" path="around/" />
      <main>
        <section className="gp-head">
          <h1>{a.h}</h1>
          <p>{a.intro}</p>
        </section>

        <section className="gp-wrap">
          <h2>{a.mapT}</h2>
          <div className="gp-card mapcard">
            <RouteMap lang={lang} />
            <p className="gp-note">{a.mapNote}</p>
          </div>
          <div className="tscroll">
            <table className="rt">
              <thead><tr><th scope="col">{a.tDir}</th><th scope="col">{a.tDest}</th><th scope="col">{a.tDist}</th><th scope="col">{a.tTime}</th></tr></thead>
              <tbody>
                {ROUTES.map((r) => (
                  <tr key={r.id}>
                    <td>{a.dirs[r.dir]}</td><th scope="row">{a.places[r.id]}</th>
                    <td>{nf(r.km, lang)} {km}</td><td>{dur(r.min, lang)}</td>
                  </tr>
                ))}
                <tr><td>{a.west}</td><th scope="row">{seaName}</th><td>{nf(0, lang)} {km}</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="gp-wrap">
          <h2>{a.nearT}</h2>
          <div className="near">
            {a.near.map(([name, d]) => (
              <div className="gp-card nitem" key={name}>
                <span>{name}</span>
                {d && <b>{d}</b>}
              </div>
            ))}
          </div>
          <p className="gp-note">{a.nearMore}</p>
        </section>

        <section className="gp-wrap">
          <h2>{a.actT}</h2>
          <p className="gp-note">{a.actNote}</p>
          <div className="acts">
            {a.acts.map(([ic, t, p]) => (
              <article className="gp-card act" key={t}>
                <div className="aic" aria-hidden="true">{ic}</div>
                <h3>{t}</h3><p>{p}</p>
              </article>
            ))}
          </div>
          <div className="gp-card sup">
            <h3>{a.supT}</h3>
            <p>{a.supP}</p>
            <h4>{a.rateT}</h4>
            <ul className="rates">
              {a.rates.map(([label, price]) => <li key={label}><span>{label}</span><b>{nf(price, lang).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {lang === "en" ? "Toman" : "تومان"}</b></li>)}
            </ul>
          </div>
        </section>

        <section className="gp-wrap">
          <h2>{a.addrT}</h2>
          <div className="gp-card">
            <p>{a.addr}</p>
            <p className="gp-note">{a.search}</p>
            <div className="cbtns">
              <a className="btn sm" href={GMAP_URL} target="_blank" rel="noopener noreferrer">{a.gmap}</a>
              <a className="btn sm ig" href={IG_URL} target="_blank" rel="noopener noreferrer"><InstagramIcon size={18} /> {a.ig}</a>
              <a className="btn sm wa" href="https://wa.me/989938338277" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> {a.wa}</a>
            </div>
          </div>
        </section>
      </main>
      <SubFooter lang={lang} />
    </div>
  );
}
