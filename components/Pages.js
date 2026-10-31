"use client";
import { useMemo, useState, useEffect } from "react";
import "../app/extra.css";
import "../app/pages.css";
import { T, META } from "../lib/i18n";
import { CATS, CAT_ICON } from "../lib/defaults";
import { NAV_ROOMS, WINDS_NAV } from "../lib/winds";
import { NAVX, AMEN, G } from "../lib/guest";
import { CARDS, BLURB, MORE } from "../lib/home";
import { WhatsAppIcon, TelegramIcon, PhoneIcon, CartIcon, InstagramIcon } from "./Icons";
import HeroScene from "./HeroScene";
import PageIcon from "./PageIcons";
import { Shell, PageHead, useLive } from "./PageKit";

const tr = (o, lang) => (o && (o[lang] || o.fa || o.en)) || "";
const HERO_TAG = { fa: "خونه بوم‌گردی در بندر رستمی بوشهر", en: "Eco-lodge in Bandar Rostami, Bushehr", ar: "نزل بيئي في بندر رستمي، بوشهر" };
const waUrl = (s, text) => `https://wa.me/${s.whatsapp}?text=${encodeURIComponent(text)}`;

/* ------------------------------ home: hero + page summaries ------------------------------ */
export function HomePage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const gh = G[lang].house;
  const labels = { story: t.story_t, rooms: NAV_ROOMS[lang], exp: t.nav.exp, shop: t.nav.shop, gallery: t.nav.gallery, contact: t.nav.contact, winds: WINDS_NAV[lang], food: NAVX[lang].food, around: NAVX[lang].around, rules: gh.rules };
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
          {CARDS.map((cd) => (
            <a key={cd.k} className="hcard rv" href={`/${lang}/${cd.p}`}>
              <div className="hc-ic"><PageIcon k={cd.i} /></div>
              <h3>{labels[cd.k]}</h3>
              <p>{BLURB[lang][cd.k]}</p>
              <span className="more">{MORE[lang]}</span>
            </a>
          ))}
        </div>
      </section>
    </Shell>
  );
}

/* ------------------------------ about ------------------------------ */
export function AboutPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  return (
    <Shell lang={lang} current="story" path="about/" s={c.settings}>
      <PageHead k="story" title={t.story_t} />
      <section className="pg-box narrow">
        {t.story_p.map((p, i) => <p key={i} className="lead">{p}</p>)}
        <ul className="facts">{t.facts.map((f) => <li key={f}>{f}</li>)}</ul>
        <p><a className="btn" href={`/${lang}/rooms/`}>{NAV_ROOMS[lang]}</a></p>
      </section>
      {c.reviews && c.reviews.length > 0 && (
        <section className="pg-box">
          <h2>{t.reviews_t}</h2>
          <div className="grid">{c.reviews.map((r) => <blockquote key={r.id} className="card quote"><p>“{tr(r.text, lang)}”</p><cite>— {r.author}</cite></blockquote>)}</div>
        </section>
      )}
    </Shell>
  );
}

/* ------------------------------ rooms ------------------------------ */
export function RoomsPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const gh = G[lang].house;
  const gr = G[lang].room;
  const s = c.settings;
  const fmt = (n) => Number(n).toLocaleString(META[lang].num);
  return (
    <Shell lang={lang} current="rooms" path="rooms/" s={s}>
      <PageHead k="rooms" title={t.rooms_t} sub={t.rooms_sub} />
      <section className="pg-box">
        <div className="grid">
          {c.rooms.map((r) => {
            const cMin = r.capMin ?? r.capacity ?? 0;
            const cMax = r.capMax ?? r.capacity ?? 0;
            return (
              <article key={r.id} className="card">
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
                  <a className="btn sm" target="_blank" rel="noopener" href={waUrl(s, `${t.wa_book}: ${tr(r.name, lang)}`)}>{t.request}</a>
                </div>
              </article>
            );
          })}
        </div>
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

/* ------------------------------ experiences ------------------------------ */
export function ExpPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const s = c.settings;
  const fmt = (n) => Number(n).toLocaleString(META[lang].num);
  return (
    <Shell lang={lang} current="exp" path="experiences/" s={s}>
      <PageHead k="exp" title={t.exp_t} sub={t.exp_sub} />
      <section className="pg-box">
        <div className="grid">
          {c.packages.map((p) => (
            <article key={p.id} className="card">
              <div className="media" style={p.img ? { backgroundImage: `url(${p.img})` } : null}>{!p.img && "🐬"}</div>
              <div className="body">
                <span className="chip">{tr(p.duration, lang)}</span>
                <h3>{tr(p.name, lang)}</h3><p>{tr(p.desc, lang)}</p>
                <div className="meta"><b>{p.price ? `${fmt(p.price)} ${t.currency}` : t.ask_price}</b></div>
                <a className="btn sm" target="_blank" rel="noopener" href={waUrl(s, `${t.wa_book}: ${tr(p.name, lang)}`)}>{t.inquire}</a>
              </div>
            </article>
          ))}
        </div>
        <h2 className="steps-t">{t.steps_t}</h2>
        <ol className="steps">{t.steps.map(([a, b]) => <li key={a}><b>{a}</b><span>{b}</span></li>)}</ol>
      </section>
    </Shell>
  );
}

/* ------------------------------ shop (with cart) ------------------------------ */
export function ShopPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const s = c.settings;
  const [cat, setCat] = useState("all");
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const fmt = (n) => Number(n).toLocaleString(META[lang].num);
  useEffect(() => { try { setCart(JSON.parse(localStorage.getItem("pissoo-cart") || "[]")); } catch (e) {} }, []);
  useEffect(() => { try { localStorage.setItem("pissoo-cart", JSON.stringify(cart)); } catch (e) {} }, [cart]);
  const products = useMemo(() => c.products.filter((p) => cat === "all" || p.cat === cat), [c.products, cat]);
  const add = (id) => { setCart((cu) => (cu.find((x) => x.id === id) ? cu.map((x) => (x.id === id ? { ...x, q: x.q + 1 } : x)) : [...cu, { id, q: 1 }])); setOpen(true); };
  const setQty = (id, d) => setCart((cu) => cu.map((x) => (x.id === id ? { ...x, q: x.q + d } : x)).filter((x) => x.q > 0));
  const lines = cart.map((x) => ({ ...x, p: c.products.find((p) => p.id === x.id) })).filter((x) => x.p);
  const count = lines.reduce((a, x) => a + x.q, 0);
  const total = lines.reduce((a, x) => a + x.q * (x.p.price || 0), 0);
  const orderText = () => `${t.cart} — pissoo.ir\n` + lines.map((x) => `• ${tr(x.p.name, lang)} × ${x.q}${x.p.price ? " — " + fmt(x.p.price * x.q) + " " + t.currency : ""}`).join("\n") + (total ? `\n${t.total}: ${fmt(total)} ${t.currency}` : "");
  return (
    <Shell lang={lang} current="shop" path="shop/" s={s}>
      <PageHead k="shop" title={t.shop_t} sub={t.shop_sub} />
      <section className="pg-box">
        <div className="chips">
          {["all", ...CATS].map((k) => (
            <button key={k} className={cat === k ? "on" : ""} onClick={() => setCat(k)}>{k === "all" ? t.all : `${CAT_ICON[k]} ${t.cats[k]}`}</button>
          ))}
          <button className="cartbtn" onClick={() => setOpen(true)}><CartIcon size={18} /> {t.cart}{count > 0 && <i>{count}</i>}</button>
        </div>
        <div className="grid prod">
          {products.map((p) => (
            <article key={p.id} className="card">
              <div className="media sq" style={p.img ? { backgroundImage: `url(${p.img})` } : null}>{!p.img && CAT_ICON[p.cat]}</div>
              <div className="body">
                <small className="tag">{t.cats[p.cat]}</small>
                <h3>{tr(p.name, lang)}</h3><p>{tr(p.desc, lang)}</p>
                <div className="meta"><b>{p.price ? `${fmt(p.price)} ${t.currency}` : t.call_price}</b></div>
                {p.soldout ? <button className="btn sm dis" disabled>{t.sold}</button> : <button className="btn sm" onClick={() => add(p.id)}>{t.add}</button>}
              </div>
            </article>
          ))}
        </div>
      </section>
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
      <aside className={"drawer" + (open ? " open" : "")} aria-hidden={!open}>
        <div className="dh"><b>{t.cart}</b><button onClick={() => setOpen(false)} aria-label={t.close}>✕</button></div>
        {lines.length === 0 ? <p className="empty">{t.cart_empty}</p> : (
          <>
            <ul>{lines.map((x) => (
              <li key={x.id}><span>{tr(x.p.name, lang)}</span>
                <span className="qty"><button onClick={() => setQty(x.id, -1)}>−</button>{x.q}<button onClick={() => setQty(x.id, 1)}>+</button></span>
              </li>))}</ul>
            {total > 0 && <div className="tot">{t.total}: <b>{fmt(total)} {t.currency}</b></div>}
            <a className="btn" target="_blank" rel="noopener" href={waUrl(s, orderText())}><WhatsAppIcon size={20} /> {t.order_wa}</a>
          </>
        )}
      </aside>
    </Shell>
  );
}

/* ------------------------------ gallery ------------------------------ */
export function GalleryPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  return (
    <Shell lang={lang} current="gallery" path="gallery/" s={c.settings}>
      <PageHead k="gallery" title={t.nav.gallery} />
      <section className="pg-box">
        <div className="masonry">{c.gallery.map((g, i) => <img key={g + i} loading="lazy" src={g} alt={`${t.nav.gallery} ${i + 1}`} />)}</div>
      </section>
    </Shell>
  );
}

/* ------------------------------ contact & booking ------------------------------ */
export function ContactPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const gh = G[lang].house;
  const s = c.settings;
  const [form, setForm] = useState({ name: "", inD: "", outD: "", guests: "2", note: "" });
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const txt = `${t.wa_book}\n${t.f_name}: ${form.name}\n${t.f_in}: ${form.inD}\n${t.f_out}: ${form.outD}\n${t.f_guests}: ${form.guests}\n${form.note ? t.f_note + ": " + form.note : ""}`;
    window.open(waUrl(s, txt), "_blank", "noopener");
  };
  return (
    <Shell lang={lang} current="contact" path="contact/" s={s}>
      <PageHead k="contact" title={t.form_t} sub={t.map_p} />
      <section className="pg-box two">
        <div>
          <h2>{t.form_t}</h2>
          <form onSubmit={send} className="form">
            <input required placeholder={t.f_name} value={form.name} onChange={upd("name")} />
            <div className="row"><label>{t.f_in}<input type="date" required value={form.inD} onChange={upd("inD")} /></label><label>{t.f_out}<input type="date" required value={form.outD} onChange={upd("outD")} /></label></div>
            <input type="number" min="1" placeholder={t.f_guests} value={form.guests} onChange={upd("guests")} />
            <textarea rows="3" placeholder={t.f_note} value={form.note} onChange={upd("note")} />
            <button className="btn" type="submit"><WhatsAppIcon size={20} /> {t.f_send}</button>
          </form>
          <p className="rnote"><a href={`/${lang}/rules/`}>{gh.rules}</a> · {gh.items[gh.items.length - 1][1]}</p>
        </div>
        <div>
          <h2>{t.map_t}</h2>
          <p><b>{t.address_l}:</b> {tr(s.address, lang)}</p>
          <div className="contacts">
            <a href={`tel:${s.phone}`} className="ct"><PhoneIcon /> <span dir="ltr">{s.phone}</span></a>
            <a href={waUrl(s, t.wa_book)} target="_blank" rel="noopener" className="ct wa"><WhatsAppIcon /> WhatsApp</a>
            <a href={`https://t.me/+${s.telegram}`} target="_blank" rel="noopener" className="ct tg"><TelegramIcon /> Telegram</a>
            {s.instagram && <a href={s.instagram} target="_blank" rel="noopener" className="ct"><InstagramIcon /> Instagram</a>}
          </div>
          <a className="btn ghost dark" href={s.mapUrl} target="_blank" rel="noopener">{t.map_btn}</a>
          <a className="btn ghost dark" href={`/${lang}/around/`}>{gh.around}</a>
        </div>
      </section>
    </Shell>
  );
}
