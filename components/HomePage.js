"use client";
import "../app/extra.css";
import "../app/pages.css";
import { T } from "../lib/i18n";
import { NAV_ROOMS, WINDS_NAV } from "../lib/winds";
import { NAVX, G } from "../lib/guest";
import { MORE } from "../lib/home";
import { CARDS2, BLURB2, CULTURE_NAV } from "../lib/culture";
import HeroScene from "./HeroScene";
import PageIcon from "./PageIcons";
import { Shell, useLive } from "./PageKit";

const HERO_TAG = { fa: "خونه بوم‌گردی در بندر رستمی بوشهر", en: "Eco-lodge in Bandar Rostami, Bushehr", ar: "نزل بيئي في بندر رستمي، بوشهر" };

export default function HomePage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const gh = G[lang].house;
  const labels = { story: t.story_t, rooms: NAV_ROOMS[lang], exp: t.nav.exp, shop: t.nav.shop, gallery: t.nav.gallery, contact: t.nav.contact, winds: WINDS_NAV[lang], food: NAVX[lang].food, around: NAVX[lang].around, rules: gh.rules, culture: CULTURE_NAV[lang] };
  return (
    <Shell lang={lang} current="" path="" s={c.settings}>
      <div className="hero">
        <HeroScene />
        <div className="hero-content">
          <span className="hero-tag">{HERO_TAG[lang]}</span>
          <h1>{t.tagline}</h1>
          <p>{t.sub}</p>
          <div className="hero-actions">
            <a className="btn" href={`/${lang}/contact/`}>{t.book}</a>
            <a className="btn ghost" href={`/${lang}/rooms/`}>{NAV_ROOMS[lang]}</a>
          </div>
        </div>
      </div>
      <section className="hcards">
        <div className="hgrid2">
          {CARDS2.map((cd) => (
            <a key={cd.k} className="hcard rv" href={`/${lang}/${cd.p}`}>
              <div className="hc-ic"><PageIcon k={cd.i} /></div>
              <h3>{labels[cd.k]}</h3>
              <p>{BLURB2[lang][cd.k]}</p>
              <span className="more">{MORE[lang]}</span>
            </a>
          ))}
        </div>
      </section>
    </Shell>
  );
}
