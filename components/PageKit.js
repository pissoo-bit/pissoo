"use client";
import { useEffect, useState } from "react";
import { T } from "../lib/i18n";
import NavBar from "./NavBar";
import SiteFooter from "./SiteFooter";
import PageIcon from "./PageIcons";
import { WhatsAppIcon, TelegramIcon } from "./Icons";

// lists that must never come back empty: if the admin panel saved an empty list, keep the built-in defaults
const NONEMPTY = ["rooms", "packages", "products", "hero", "gallery"];

export function mergeContent(base, saved) {
  const out = { ...base, ...saved, settings: { ...base.settings, ...(saved.settings || {}) } };
  NONEMPTY.forEach((k) => {
    if (!Array.isArray(saved[k]) || saved[k].length === 0) out[k] = base[k];
  });
  return out;
}

// live content from the admin panel (PHP API); falls back to the built-in defaults
export function useLive(initial) {
  const [c, setC] = useState(initial);
  useEffect(() => {
    fetch("/api/?a=content", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => j && j.content && setC((p) => mergeContent(p, j.content)))
      .catch(() => {});
  }, []);
  return c;
}

export function Shell({ lang, current, path, s, children }) {
  const t = T[lang];
  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
    const run = () => document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));
    run();
    const id = setTimeout(run, 800);
    return () => { clearTimeout(id); io.disconnect(); };
  }, []);
  return (
    <>
      <NavBar lang={lang} current={current} path={path} />
      <main className="pg">{children}</main>
      <SiteFooter lang={lang} settings={s} />
      <div className="float">
        <a className="fab tg" href={`https://t.me/+${s.telegram}`} target="_blank" rel="noopener" aria-label="Telegram"><TelegramIcon /></a>
        <a className="fab wa" href={`https://wa.me/${s.whatsapp}?text=${encodeURIComponent(t.wa_book)}`} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon /></a>
      </div>
    </>
  );
}

export function PageHead({ k, title, sub }) {
  return (
    <section className="pg-head">
      <div className="pg-ic"><PageIcon k={k} /></div>
      <h1>{title}</h1>
      {sub && <p>{sub}</p>}
    </section>
  );
}
