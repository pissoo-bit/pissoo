"use client";
import { useState } from "react";
import "../app/extra.css";
import "../app/pages.css";
import { T } from "../lib/i18n";
import { G } from "../lib/guest";
import { WhatsAppIcon, TelegramIcon, PhoneIcon, InstagramIcon } from "./Icons";
import { Shell, PageHead, useLive } from "./PageKit";
import JalaliPicker, { jText } from "./JalaliPicker";

const tr = (o, lang) => (o && (o[lang] || o.fa || o.en)) || "";
const waUrl = (s, text) => `https://wa.me/${s.whatsapp}?text=${encodeURIComponent(text)}`;

export default function ContactPage({ lang, initial }) {
  const c = useLive(initial);
  const t = T[lang];
  const gh = G[lang].house;
  const s = c.settings;
  const isFa = lang === "fa";
  const [form, setForm] = useState({ name: "", inD: isFa ? null : "", outD: isFa ? null : "", guests: "2", note: "" });
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const dIn = isFa ? jText(form.inD) : form.inD;
    const dOut = isFa ? jText(form.outD) : form.outD;
    const txt = `${t.wa_book}\n${t.f_name}: ${form.name}\n${t.f_in}: ${dIn}\n${t.f_out}: ${dOut}\n${t.f_guests}: ${form.guests}\n${form.note ? t.f_note + ": " + form.note : ""}`;
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
            {isFa ? (
              <>
                <JalaliPicker required label={t.f_in} value={form.inD} onChange={(v) => setForm({ ...form, inD: v })} />
                <JalaliPicker required label={t.f_out} value={form.outD} onChange={(v) => setForm({ ...form, outD: v })} />
              </>
            ) : (
              <div className="row"><label>{t.f_in}<input type="date" required value={form.inD} onChange={upd("inD")} /></label><label>{t.f_out}<input type="date" required value={form.outD} onChange={upd("outD")} /></label></div>
            )}
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
