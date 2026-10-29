"use client";
import { useEffect, useState } from "react";
import { DEFAULT_CONTENT, CATS } from "../lib/defaults";

async function api(a, { json, body } = {}) {
  const r = await fetch(`/api/?a=${a}`, {
    method: json || body ? "POST" : "GET",
    credentials: "same-origin",
    headers: { "X-Requested-With": "pissoo", ...(json ? { "Content-Type": "application/json" } : {}) },
    body: json ? JSON.stringify(json) : body,
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw Object.assign(new Error(j.error || "error"), { status: r.status });
  return j;
}
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
const CATN = { wood: "چوبی", wicker: "حصیری", shell: "صدفی", native: "محصولات بومی" };
const FIELDS = {
  rooms: [["name", "i18n", "نام"], ["desc", "i18nl", "توضیح"], ["capacity", "num", "ظرفیت (نفر)"], ["price", "num", "قیمت هر شب (تومان؛ ۰ = استعلام)"], ["img", "img", "عکس"]],
  packages: [["name", "i18n", "نام"], ["desc", "i18nl", "توضیح"], ["duration", "i18n", "مدت"], ["price", "num", "قیمت (۰ = استعلام)"], ["img", "img", "عکس"]],
  products: [["cat", "cat", "دسته‌بندی"], ["name", "i18n", "نام"], ["desc", "i18nl", "توضیح"], ["price", "num", "قیمت (تومان؛ ۰ = تماس بگیرید)"], ["img", "img", "عکس"], ["soldout", "bool", "ناموجود"]],
  reviews: [["author", "text", "نام مسافر"], ["text", "i18nl", "متن نظر"]],
};
const TABS = [["settings", "تنظیمات و تماس"], ["rooms", "اتاق‌ها"], ["packages", "تجربه‌ها و تورها"], ["products", "فروشگاه"], ["media", "تصاویر"], ["reviews", "نظرات"], ["account", "رمز عبور"]];
const blank = (k) => ({ id: uid(), ...Object.fromEntries(FIELDS[k].map(([f, ty]) => [f, ty === "i18n" || ty === "i18nl" ? { fa: "", en: "", ar: "" } : ty === "num" ? 0 : ty === "bool" ? false : ty === "cat" ? "wood" : ""])) });

function Img({ value, onChange }) {
  const [busy, setBusy] = useState(false);
  const up = async (e) => {
    const f = e.target.files[0]; if (!f) return;
    const fd = new FormData(); fd.append("file", f); setBusy(true);
    try { const j = await api("upload", { body: fd }); onChange(j.url); } catch (er) { alert("آپلود ناموفق: " + er.message); }
    setBusy(false); e.target.value = "";
  };
  return (
    <div className="adm-img">
      {value ? <img src={value} alt="" /> : <span>—</span>}
      <label className="adm-btn">{busy ? "..." : "آپلود"}<input type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={up} /></label>
      {value && <button type="button" className="adm-btn danger" onClick={() => onChange("")}>حذف</button>}
    </div>
  );
}

function Field({ type, value, onChange }) {
  if (type === "i18n" || type === "i18nl") {
    const Tag = type === "i18nl" ? "textarea" : "input";
    return ["fa", "en", "ar"].map((l) => (
      <div className="adm-l" key={l}><em>{l.toUpperCase()}</em>
        <Tag dir={l === "en" ? "ltr" : "rtl"} rows={2} value={(value && value[l]) || ""} onChange={(e) => onChange({ ...(value || {}), [l]: e.target.value })} />
      </div>
    ));
  }
  if (type === "num") return <input type="number" min="0" value={value ?? 0} onChange={(e) => onChange(Number(e.target.value))} />;
  if (type === "bool") return <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />;
  if (type === "cat") return <select value={value} onChange={(e) => onChange(e.target.value)}>{CATS.map((c) => <option key={c} value={c}>{CATN[c]}</option>)}</select>;
  if (type === "img") return <Img value={value} onChange={onChange} />;
  return <input value={value || ""} onChange={(e) => onChange(e.target.value)} />;
}

function Collection({ k, items, setItems }) {
  const set = (i, f, v) => setItems(items.map((it, j) => (j === i ? { ...it, [f]: v } : it)));
  const move = (i, d) => { const a = [...items]; const j = i + d; if (j < 0 || j >= a.length) return; [a[i], a[j]] = [a[j], a[i]]; setItems(a); };
  return (
    <div>
      {items.map((it, i) => (
        <details key={it.id} className="adm-card">
          <summary>{(it.name && it.name.fa) || it.author || "(بدون نام)"}
            <span className="adm-ops" onClick={(e) => e.preventDefault()}>
              <button type="button" onClick={() => move(i, -1)}>↑</button><button type="button" onClick={() => move(i, 1)}>↓</button>
              <button type="button" className="danger" onClick={() => confirm("حذف شود؟") && setItems(items.filter((_, j) => j !== i))}>حذف</button>
            </span>
          </summary>
          {FIELDS[k].map(([f, ty, label]) => (
            <label className="adm-f" key={f}><b>{label}</b><Field type={ty} value={it[f]} onChange={(v) => set(i, f, v)} /></label>
          ))}
        </details>
      ))}
      <button type="button" className="adm-btn" onClick={() => setItems([...items, blank(k)])}>+ افزودن</button>
    </div>
  );
}

function ImageList({ items, setItems }) {
  return (
    <div className="adm-imgs">
      {items.map((u, i) => (
        <div key={u + i} className="adm-thumb"><img src={u} alt="" />
          <button type="button" className="adm-btn danger" onClick={() => setItems(items.filter((_, j) => j !== i))}>حذف</button></div>
      ))}
      <div className="adm-thumb"><Img value="" onChange={(u) => u && setItems([...items, u])} /></div>
    </div>
  );
}

export default function Admin() {
  const [st, setSt] = useState(null);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [c, setC] = useState(DEFAULT_CONTENT);
  const [tab, setTab] = useState("settings");
  const [msg, setMsg] = useState("");
  const [pw2, setPw2] = useState({ cur: "", next: "" });

  const load = async () => {
    try {
      const j = await api("content");
      if (j.content) setC({ ...DEFAULT_CONTENT, ...j.content, settings: { ...DEFAULT_CONTENT.settings, ...(j.content.settings || {}) } });
    } catch (e) {}
  };
  useEffect(() => { api("status").then((j) => { setSt(j); if (j.admin) load(); }).catch(() => setSt({ error: true })); }, []);

  const login = async (e) => {
    e.preventDefault(); setErr("");
    try { await api("login", { json: { password: pw } }); setSt({ admin: true }); setPw(""); load(); }
    catch (er) { setErr(er.message === "locked" ? "تلاش‌های زیاد؛ کمی بعد دوباره امتحان کنید" : er.message === "short" ? "رمز حداقل ۸ کاراکتر باشد" : "رمز اشتباه است"); }
  };
  const save = async () => {
    setMsg("در حال ذخیره...");
    try { await api("save", { json: { content: c } }); setMsg("✓ ذخیره شد؛ تغییرات روی سایت اعمال شد"); }
    catch (e) { setMsg(e.status === 401 ? "نشست منقضی شده؛ دوباره وارد شوید" : "خطا در ذخیره: " + e.message); }
  };
  const setS = (f, v) => setC({ ...c, settings: { ...c.settings, [f]: v } });

  if (!st) return <div className="adm-box">...</div>;
  if (st.error) return <div className="adm-box"><p>API در دسترس نیست. این پنل فقط روی هاست (با PHP) کار می‌کند.</p></div>;
  if (!st.admin)
    return (
      <form className="adm-box" onSubmit={login}>
        <h1>پنل مدیریت پیسو</h1>
        <p>{st.setup ? "اولین ورود: یک رمز عبور قوی (حداقل ۸ کاراکتر) انتخاب کنید." : "رمز عبور را وارد کنید."}</p>
        <input type="password" autoFocus value={pw} onChange={(e) => setPw(e.target.value)} placeholder="رمز عبور" />
        {err && <p className="adm-err">{err}</p>}
        <button className="adm-btn pri" type="submit">{st.setup ? "ثبت رمز و ورود" : "ورود"}</button>
      </form>
    );

  return (
    <div className="adm">
      <header className="adm-top">
        <b>پنل مدیریت پیسو</b>
        <span>{msg}</span>
        <a className="adm-btn" href="/fa/" target="_blank">مشاهده سایت</a>
        <button className="adm-btn pri" onClick={save}>ذخیره تغییرات</button>
        <button className="adm-btn" onClick={async () => { await api("logout", { json: {} }); setSt({ admin: false }); }}>خروج</button>
      </header>
      <div className="adm-tabs">{TABS.map(([k, n]) => <button key={k} className={tab === k ? "on" : ""} onClick={() => setTab(k)}>{n}</button>)}</div>
      <main className="adm-main">
        {tab === "settings" && (
          <div>
            {[["phone", "شماره تلفن (نمایشی)"], ["whatsapp", "شماره واتساپ (بین‌المللی بدون +؛ مثل 989938338277)"], ["telegram", "شماره تلگرام (بین‌المللی بدون +)"], ["instagram", "آدرس اینستاگرام (اختیاری)"], ["mapUrl", "لینک نقشه"], ["heroVideo", "ویدیوی بالای سایت (مسیر mp4، مثل /hero/sea.mp4؛ خالی = اسلایدشو)"]].map(([f, l]) => (
              <label className="adm-f" key={f}><b>{l}</b><input dir="ltr" value={c.settings[f] || ""} onChange={(e) => setS(f, e.target.value)} /></label>
            ))}
            <label className="adm-f"><b>نشانی</b><Field type="i18n" value={c.settings.address} onChange={(v) => setS("address", v)} /></label>
          </div>
        )}
        {FIELDS[tab] && <Collection k={tab} items={c[tab] || []} setItems={(v) => setC({ ...c, [tab]: v })} />}
        {tab === "media" && (
          <div>
            <h3>تصاویر اسلایدشوی بالای سایت</h3><ImageList items={c.hero} setItems={(v) => setC({ ...c, hero: v })} />
            <h3>گالری</h3><ImageList items={c.gallery} setItems={(v) => setC({ ...c, gallery: v })} />
          </div>
        )}
        {tab === "account" && (
          <div>
            <label className="adm-f"><b>رمز فعلی</b><input type="password" value={pw2.cur} onChange={(e) => setPw2({ ...pw2, cur: e.target.value })} /></label>
            <label className="adm-f"><b>رمز جدید (حداقل ۸ کاراکتر)</b><input type="password" value={pw2.next} onChange={(e) => setPw2({ ...pw2, next: e.target.value })} /></label>
            <button className="adm-btn pri" onClick={async () => { try { await api("passwd", { json: pw2 }); setMsg("✓ رمز تغییر کرد"); setPw2({ cur: "", next: "" }); } catch (e) { setMsg("رمز فعلی اشتباه است یا رمز جدید کوتاه است"); } }}>تغییر رمز</button>
          </div>
        )}
      </main>
    </div>
  );
}
