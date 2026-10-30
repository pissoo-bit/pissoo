import { SubHeader, SubFooter } from "./SubChrome";
import RuleForm from "./RuleForm";
import { G, GMAP_URL } from "../lib/guest";

export default function Rules({ lang }) {
  const g = G[lang].rules;
  return (
    <div className="gp">
      <SubHeader lang={lang} path="rules/" />
      <main>
        <section className="gp-head">
          <h1>{g.h}</h1>
          <p>{g.lead}</p>
        </section>

        <section className="gp-wrap">
          <div className="gp-card conf">
            <h2>{g.confT}</h2>
            <p>{g.confP}</p>
            <a href={GMAP_URL} target="_blank" rel="noopener noreferrer">{g.locL}</a>
          </div>
        </section>

        <section className="gp-wrap">
          <h2>{g.rulesT}</h2>
          <p className="gp-note">{g.tourNote}</p>
          <ol className="rules">{g.rules.map((r) => <li key={r}>{r}</li>)}</ol>
          <h3>{g.bringT}</h3>
          <ul className="bring">{g.bring.map((b) => <li key={b}>{b}</li>)}</ul>
        </section>

        <section className="gp-wrap">
          <h2>{g.cancelT}</h2>
          <div className="gp-two">
            <div className="gp-card">
              <h3>{g.c1T}</h3>
              <ul>{g.c1.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <div className="gp-card">
              <h3>{g.c2T}</h3>
              <h4>{g.c2BookT}</h4>
              <ul>{g.c2Book.map((c) => <li key={c}>{c}</li>)}</ul>
              <h4>{g.c2CancelT}</h4>
              <ul>{g.c2Cancel.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="gp-wrap narrowf">
          <h2>{g.formT}</h2>
          <RuleForm wa="989938338277" labels={{ waMsg: g.waMsg, fName: g.fName, fPhone: g.fPhone, fIn: g.fIn, fOk: g.fOk, fSend: g.fSend }} />
          <p className="sign">{g.sign}</p>
        </section>
      </main>
      <SubFooter lang={lang} />
    </div>
  );
}
