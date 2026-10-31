"use client";
import { useEffect, useMemo, useState } from "react";
import "../app/extra.css";
import { T, META, LANGS } from "../lib/i18n";
import { CATS, CAT_ICON } from "../lib/defaults";
import { NAV_ROOMS, WINDS_NAV } from "../lib/winds";
import { NAVX, AMEN, G } from "../lib/guest";
import { WhatsAppIcon, TelegramIcon, PhoneIcon, CartIcon, InstagramIcon } from "./Icons";
import HeroScene from "./HeroScene";
import SiteFooter from "./SiteFooter";

const tr = (o, lang) => (o && (o[lang] || o.fa || o.en)) || "";
const HERO_TAG = { fa: "خونه بوم‌گردی در بندر رستمی بوشهر", en: "Eco-lodge in Bandar Rostami, Bushehr", ar: "نزل بيئي في بندر رستمي، بوشهر" };

export default function Site({ lang, initial }) {
  const t = T[lang];
  const gh = G[lang].house;
  const gr = G[lang].room;
  const [c, setC] = useState(initial);
  const [cat, setCat] = useState("all");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", inD: "", outD: "", guests: "2", note: "" });
  const s = c.settings;
  const fmt = (n) => Number(n).toLocaleString(META[lang].num);

  // live content from the admin panel (PHP API); falls back to built-in defaults
  useEffect(() => {
    fetch("/api/?a=content", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => j && j.content && setC((p) => ({ ...p, ...j.content, settings: { ...p.settings, ...(j.content.settings || {}) } })))
      .catch(() => {});
    try { setCart(JSON.parse(localStorage.getItem("pissoo-cart") || "[]")); } catch (e) {}
  }, []);
  useEffect(() => { try { localStorage.setItem("pissoo-cart", JSON.stringify(cart)); } catch (e) {} }, [cart]);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
    document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [c, cat]);

  const wa = (text) => `https://wa.me/${s.whatsapp}?text=${encodeURIComponent(text)}`;
  const tg = `https://t.me/+${s.telegram}`;
  const products = useMemo(() => c.products.filter((p) => cat === "all" || p.cat === cat), [c.products, cat]);

  const addToCart = (id) => { setCart((cu) => (cu.find((x) => x.id === id) ? cu.map((x) => (x.id === id ? { ...x, q: x.q + 1 } : x)) : [...cu, { id, q: 1 }])); setCartOpen(true); };
  const setQty = (id, d) => setCart((cu) => cu.map((x) => (x.id === id ? { ...x, q: x.q + d } : x)).filter((x) => x.q > 0));
  const lines = cart.map((x) => ({ ...x, p: c.products.find((p) => p.id === x.id) })).filter((x) => x.p);
  const count = lines.reduce((a, x) => a + x.q, 0);
  const total = lines.reduce((a, x) => a + x.q * (x.p.price || 0), 0);
  const orderText = () =>
    `${t.cart} — pissoo.ir\n` + lines.map((x) => `• ${tr(x.p.name, lang)} × ${x.q}${x.p.price ? " — " + fmt(x.p.price * x.q) + " " + t.currency : ""}`).join("\n") + (total ? `\n${t.total}: ${fmt(total)} ${t.currency}` : "");

  const sendBooking = (e) => {
    e.preventDefault();
    const txt = `${t.wa_book}\n${t.f_name}: ${form.name}\n${t.f_in}: ${form.inD}\n${t.f_out}: ${form.outD}\n${t.f_guests}: ${form.guests}\n${form.note ? t.f_note + ": " + form.note : ""}`;
    window.open(wa(txt), "_blank", "noopener");
  };
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const ids = ["story", "rooms", "exp", "food", "around", "shop", "winds", "gallery", "contact"];
  const navT = { ...t.nav, rooms: NAV_ROOMS[lang], winds: WINDS_NAV[lang], ...NAVX[lang] };
  const sub = { food: "food/", around: "around/", winds: "winds/" };

  return (
    <>
      <header id="top">
        <nav>
          <a className="brand" href={`/${lang}/`}><img src="/logo.png" alt="Pissoo House" height="48" /></a>
          <button className="burger" aria-label="menu" onClick={() => setMenu(!menu)}>☰</button>
          <div className={"links" + (menu ? " open" : "")} onClick={() => setMenu(false)}>
            {ids.map((k) => <a key={k} href={sub[k] ? `/${lang}/${sub[k]}` : `#${k}`}>{navT[k]}</a>)}
          </div>
          <div className="langs">
            {LANGS.map((l) => <a key={l} href={`/${l}/`} hrefLang={l} className={l === lang ? "on" : ""}>{l.toUpperCase()}</a>)}
          </div>
          <a className="btn sm" href="#book">{t.book}</a>
        </nav>
      </header>

      <div className="hero">
        <HeroScene />
        <div className="hero-content">
          <span className="hero-tag">{HERO_TAG[lang]}</span>
          <h1>{t.tagline}</h1>
          <p>{t.sub}</p>
          <div className="hero-actions">
            <a className="btn" href="#book">{t.book}</a>
            <a className="btn ghost" href="#gallery">{t.nav.gallery}</a>
          </div>
        </div>
      </div>

      <section id="story" className="rv narrow">
        <h2>{t.story_t}</h2>
        {t.story_p.map((p, i) => <p key={i} className="lead">{p}</p>)}
        <ul className="facts">{t.facts.map((f) => <li key={f}>{f}</li>)}</ul>
      </section>

      <section id="rooms" className="alt"><div className="wrap">
        <h2 className="rv">{t.rooms_t}</h2><p className="sub rv">{t.rooms_sub}</p>
        <div className="grid">
          {c.rooms.map((r) => {
            const cMin = r.capMin ?? r.capacity ?? 0;
            const cMax = r.capMax ?? r.capacity ?? 0;
            return (
              <article key={r.id} className="card rv">
                <div className="media" style={r.img ? { backgroundImage: `url(${r.img})` } : null}>{!r.img && "🛏️"}</div>
                <div className="body">
                  <h3>{tr(r.name, lang)}</h3><p>{tr(r.desc, lang)}</p>
                  {r.amen && r.amen.length > 0 && (
                    <ul className="amen">{r.amen.filter((k) => AMEN[k]).map((k) => <li key={k}><span aria-hidden="true">{AMEN[k].i}</span>{AMEN[k][lang]}</li>)}</ul>
                  )}
                  <div className="meta"><span>👥 {cMax > cMin ? `${fmt(cMin)}–${fmt(cMax)}` : fmt(cMax)} {t.guests}</span></div>
                  <ul className="prices">
                    {r.price ? <li><span>{gr.p2}</span><b>{fmt(r.price)} {t.currency}</b></li> : <li><span>{t.ask_price}</span></li>}
                    {r.extra > 0 && <li><span>{gr.extra}</span><b>{fmt(r.extra)} {t.currency}</b></li>}
                    {r.single > 0 && <li><span>{gr.single}</span><b>{fmt(r.single)} {t.currency}</b></li>}
                  </ul>
                  <a className="btn sm" target="_blank" rel="noopener" href={wa(`${t.wa_book}: ${tr(r.name, lang)}`)}>{t.request}</a>
                </div>
              </article>
            );
          })}
        </div>
      </div></section>

      <section id="house"><div className="wrap">
        <h2 className="rv">{gh.t}</h2>
        <p className="hnotice rv">{gh.notice}</p>
        <ul className="hgrid">{gh.items.map(([ic, x]) => <li key={x} className="rv"><span aria-hidden="true">{ic}</span><span>{x}</span></li>)}</ul>
        <div className="hlinks">
          <a className="btn sm" href={`/${lang}/rules/`}>{gh.rules}</a>
          <a className="btn sm ghost dark" href={`/${lang}/food/`}>{gh.food}</a>
          <a className="btn sm ghost dark" href={`/${lang}/around/`}>{gh.around}</a>
        </div>
        <p className="rnote">{gh.rulesP}</p>
      </div></section>

      <section id="exp"><div className="wrap">
        <h2 className="rv">{t.exp_t}</h2><p className="sub rv">{t.exp_sub}</p>
        <div className="grid">
          {c.packages.map((p) => (
            <article key={p.id} className="card rv">
              <div className="media" style={p.img ? { backgroundImage: `url(${p.img})` } : null}>{!p.img && "🐬"}</div>
              <div className="body">
                <span className="chip">{tr(p.duration, lang)}</span>
                <h3>{tr(p.name, lang)}</h3><p>{tr(p.desc, lang)}</p>
                <div className="meta"><b>{p.price ? `${fmt(p.price)} ${t.currency}` : t.ask_price}</b></div>
                <a className="btn sm" target="_blank" rel="noopener" href={wa(`${t.wa_book}: ${tr(p.name, lang)}`)}>{t.inquire}</a>
              </div>
            </article>
          ))}
        </div>
        <h3 className="steps-t rv">{t.steps_t}</h3>
        <ol className="steps">{t.steps.map(([a, b]) => <li key={a} className="rv"><b>{a}</b><span>{b}</span></li>)}</ol>
      </div></section>

      <section id="shop" className="alt"><div className="wrap">
        <h2 className="rv">{t.shop_t}</h2><p className="sub rv">{t.shop_sub}</p>
        <div className="chips">
          {["all", ...CATS].map((k) => (
            <button key={k} className={cat === k ? "on" : ""} onClick={() => setCat(k)}>{k === "all" ? t.all : `${CAT_ICON[k]} ${t.cats[k]}`}</button>
          ))}
          <button className="cartbtn" onClick={() => setCartOpen(true)}><CartIcon size={18} /> {t.cart}{count > 0 && <i>{count}</i>}</button>
        </div>
        <div className="grid prod">
          {products.map((p) => (
            <article key={p.id} className="card rv">
              <div className="media sq" style={p.img ? { backgroundImage: `url(${p.img})` } : null}>{!p.img && CAT_ICON[p.cat]}</div>
              <div className="body">
                <small className="tag">{t.cats[p.cat]}</small>
                <h3>{tr(p.name, lang)}</h3><p>{tr(p.desc, lang)}</p>
                <div className="meta"><b>{p.price ? `${fmt(p.price)} ${t.currency}` : t.call_price}</b></div>
                {p.soldout ? <button className="btn sm dis" disabled>{t.sold}</button> : <button className="btn sm" onClick={() => addToCart(p.id)}>{t.add}</button>}
              </div>
            </article>
          ))}
        </div>
      </div></section>

      <section id="gallery"><div className="wrap">
        <h2 className="rv">{t.nav.gallery}</h2>
        <div className="masonry">{c.gallery.map((g, i) => <img key={g + i} className="rv" loading="lazy" src={g} alt={`${t.nav.gallery} ${i + 1}`} />)}</div>
      </div></section>

      {c.reviews && c.reviews.length > 0 && (
        <section className="alt"><div className="wrap">
          <h2 className="rv">{t.reviews_t}</h2>
          <div className="grid">{c.reviews.map((r) => <blockquote key={r.id} className="card rv quote"><p>“{tr(r.text, lang)}”</p><cite>— {r.author}</cite></blockquote>)}</div>
        </div></section>
      )}

      <section id="book" className="alt"><div className="wrap two">
        <div className="rv">
          <h2>{t.form_t}</h2>
          <form onSubmit={sendBooking} className="form">
            <input required placeholder={t.f_name} value={form.name} onChange={upd("name")} />
            <div className="row"><label>{t.f_in}<input type="date" required value={form.inD} onChange={upd("inD")} /></label><label>{t.f_out}<input type="date" required value={form.outD} onChange={upd("outD")} /></label></div>
            <input type="number" min="1" placeholder={t.f_guests} value={form.guests} onChange={upd("guests")} />
            <textarea rows="3" placeholder={t.f_note} value={form.note} onChange={upd("note")} />
            <button className="btn" type="submit"><WhatsAppIcon size={20} /> {t.f_send}</button>
          </form>
          <p className="rnote"><a href={`/${lang}/rules/`}>{gh.rules}</a> · {gh.items[gh.items.length - 1][1]}</p>
        </div>
        <div id="contact" className="rv">
          <h2>{t.map_t}</h2><p>{t.map_p}</p>
          <p><b>{t.address_l}:</b> {tr(s.address, lang)}</p>
          <div className="contacts">
            <a href={`tel:${s.phone}`} className="ct"><PhoneIcon /> <span dir="ltr">{s.phone}</span></a>
            <a href={wa(t.wa_book)} target="_blank" rel="noopener" className="ct wa"><WhatsAppIcon /> WhatsApp</a>
            <a href={tg} target="_blank" rel="noopener" className="ct tg"><TelegramIcon /> Telegram</a>
            {s.instagram && <a href={s.instagram} target="_blank" rel="noopener" className="ct"><InstagramIcon /> Instagram</a>}
          </div>
          <a className="btn ghost dark" href={s.mapUrl} target="_blank" rel="noopener">{t.map_btn}</a>
          <a className="btn ghost dark" href={`/${lang}/around/`}>{gh.around}</a>
        </div>
      </div></section>

      <SiteFooter lang={lang} settings={s} />

      <div className="float">
        <a className="fab tg" href={tg} target="_blank" rel="noopener" aria-label="Telegram"><TelegramIcon /></a>
        <a className="fab wa" href={wa(t.wa_book)} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon /></a>
      </div>

      {cartOpen && <div className="scrim" onClick={() => setCartOpen(false)} />}
      <aside className={"drawer" + (cartOpen ? " open" : "")} aria-hidden={!cartOpen}>
        <div className="dh"><b>{t.cart}</b><button onClick={() => setCartOpen(false)} aria-label={t.close}>✕</button></div>
        {lines.length === 0 ? <p className="empty">{t.cart_empty}</p> : (
          <>
            <ul>{lines.map((x) => (
              <li key={x.id}><span>{tr(x.p.name, lang)}</span>
                <span className="qty"><button onClick={() => setQty(x.id, -1)}>−</button>{x.q}<button onClick={() => setQty(x.id, 1)}>+</button></span>
              </li>))}</ul>
            {total > 0 && <div className="tot">{t.total}: <b>{fmt(total)} {t.currency}</b></div>}
            <a className="btn" target="_blank" rel="noopener" href={wa(orderText())}><WhatsAppIcon size={20} /> {t.order_wa}</a>
          </>
        )}
      </aside>
    </>
  );
}
