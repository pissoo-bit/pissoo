import { T, LANGS } from "../lib/i18n";
import { NAV_ROOMS, WINDS_NAV } from "../lib/winds";
import { NAVX } from "../lib/guest";
import SiteFooter from "./SiteFooter";

const SEP = { food: "food/", around: "around/", winds: "winds/" };
const IDS = ["story", "rooms", "exp", "food", "around", "shop", "winds", "gallery", "contact"];

export function SubHeader({ lang, current, path }) {
  const t = T[lang];
  const labels = { ...t.nav, rooms: NAV_ROOMS[lang], winds: WINDS_NAV[lang], ...NAVX[lang] };
  const href = (k) => (SEP[k] ? `/${lang}/${SEP[k]}` : `/${lang}/#${k}`);
  return (
    <header id="top">
      <nav className="nav-simple">
        <a className="brand" href={`/${lang}/`}><img src="/logo.png" alt="Pissoo House" height="48" /></a>
        <div className="links">
          {IDS.map((k) => <a key={k} href={href(k)} aria-current={k === current ? "page" : undefined} className={k === current ? "cur" : undefined}>{labels[k]}</a>)}
        </div>
        <div className="langs">
          {LANGS.map((l) => <a key={l} href={`/${l}/${path || ""}`} hrefLang={l} className={l === lang ? "on" : ""}>{l.toUpperCase()}</a>)}
        </div>
      </nav>
    </header>
  );
}

export function SubFooter({ lang }) {
  return <SiteFooter lang={lang} />;
}
