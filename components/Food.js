import { SubHeader, SubFooter } from "./SubChrome";
import { G, COOK_PHONES, IG_REEL } from "../lib/guest";
import { PhoneIcon } from "./Icons";

export default function Food({ lang }) {
  const g = G[lang].food;
  return (
    <div className="gp">
      <SubHeader lang={lang} current="food" path="food/" />
      <main>
        <section className="gp-head">
          <h1>{g.h}</h1>
          <p>{g.intro}</p>
        </section>

        <section className="gp-wrap">
          <h2>{g.cooksT}</h2>
          <div className="cooks">
            {g.cooks.map(([name, note], i) => (
              <article className="gp-card cook" key={COOK_PHONES[i]}>
                <div className="cav" aria-hidden="true">🍲</div>
                <h3>{name}</h3>
                {note && <p className="cnote">{note}</p>}
                <a className="btn sm" href={`tel:${COOK_PHONES[i]}`}><PhoneIcon size={18} /> {g.call} <span dir="ltr">{COOK_PHONES[i]}</span></a>
              </article>
            ))}
          </div>
          <ul className="gp-list">{g.notes.map((n) => <li key={n}>{n}</li>)}</ul>
        </section>

        <section className="gp-wrap">
          <div className="gp-card conf">
            <h2>{g.igT}</h2>
            <p>{g.igP}</p>
            <a className="btn sm" href={IG_REEL} target="_blank" rel="noopener noreferrer">{g.igBtn}</a>
          </div>
        </section>
      </main>
      <SubFooter lang={lang} />
    </div>
  );
}
