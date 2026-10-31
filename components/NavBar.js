"use client";
import { useState } from "react";
import "../app/pages.css";
import { T, LANGS } from "../lib/i18n";
import { NAV_ROOMS, WINDS_NAV } from "../lib/winds";
import { NAVX } from "../lib/guest";
import { NAV_PAGES } from "../lib/home";

export default function NavBar({ lang, current, path }) {
  const [open, setOpen] = useState(false);
  const t = T[lang];
  const labels = { ...t.nav, rooms: NAV_ROOMS[lang], winds: WINDS_NAV[lang], ...NAVX[lang] };
  return (
    <header id="top">
      <nav>
        <a className="brand" href={`/${lang}/`}><img src="/logo.png" alt="Pissoo House" height="48" /></a>
        <button className="burger" aria-label="menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <div className={"links" + (open ? " open" : "")} onClick={() => setOpen(false)}>
          {NAV_PAGES.map(([k, p]) => (
            <a key={k} href={`/${lang}/${p}`} className={k === current ? "cur" : undefined} aria-current={k === current ? "page" : undefined}>{labels[k]}</a>
          ))}
        </div>
        <div className="langs">
          {LANGS.map((l) => <a key={l} href={`/${l}/${path || ""}`} hrefLang={l} className={l === lang ? "on" : ""}>{l.toUpperCase()}</a>)}
        </div>
        <a className="btn sm" href={`/${lang}/contact/`}>{t.book}</a>
      </nav>
    </header>
  );
}
