"use client";
import { useEffect, useState } from "react";

/* Persian (Shamsi) date picker built from three selects. Uses the browser's built-in Persian calendar (Intl), no library. */
const FMT = new Intl.DateTimeFormat("fa-IR-u-ca-persian-nu-latn", { year: "numeric", month: "numeric", day: "numeric" });

function toJ(date) {
  const o = { y: 0, m: 0, d: 0 };
  FMT.formatToParts(date).forEach((p) => {
    if (p.type === "year" || p.type === "relatedYear") o.y = parseInt(p.value, 10);
    if (p.type === "month") o.m = parseInt(p.value, 10);
    if (p.type === "day") o.d = parseInt(p.value, 10);
  });
  return o;
}
const cmp = (a, b) => (a.y - b.y) || (a.m - b.m) || (a.d - b.d);

function toG(y, m, d) {
  const off = (m <= 7 ? (m - 1) * 31 : 6 * 31 + (m - 7) * 30) + d - 1;
  const t = new Date(y + 621, 2, 21, 12);
  t.setDate(t.getDate() + off);
  const target = { y, m, d };
  for (let i = 0; i < 80; i++) {
    const c = cmp(target, toJ(t));
    if (c === 0) break;
    t.setDate(t.getDate() + (c > 0 ? 1 : -1));
  }
  return t;
}

export const J_MONTHS = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
const fa = (n) => Number(n).toLocaleString("fa-IR", { useGrouping: false });

export function monthLen(y, m) {
  if (m <= 6) return 31;
  if (m <= 11) return 30;
  const j = toJ(toG(y, 12, 30));
  return j.m === 12 && j.d === 30 ? 30 : 29;
}

// "۱۵ آبان ۱۴۰۵"
export function jText(v) {
  return v && v.y && v.m && v.d ? `${fa(v.d)} ${J_MONTHS[v.m - 1]} ${fa(v.y)}` : "";
}

export default function JalaliPicker({ value, onChange, label, required }) {
  const [yNow, setYNow] = useState(1405);
  useEffect(() => { setYNow(toJ(new Date()).y); }, []);
  const v = value || { y: 0, m: 0, d: 0 };
  const years = [yNow, yNow + 1, yNow + 2];
  const len = v.y && v.m ? monthLen(v.y, v.m) : 31;
  const set = (k, x) => {
    const nv = { ...v, [k]: Number(x) };
    if (nv.y && nv.m && nv.d > monthLen(nv.y, nv.m)) nv.d = monthLen(nv.y, nv.m);
    onChange(nv);
  };
  return (
    <div className="jp" role="group" aria-label={label}>
      <span className="jp-l">{label}</span>
      <div className="jp-row">
        <select required={required} value={v.d || ""} onChange={(e) => set("d", e.target.value)} aria-label="روز">
          <option value="">روز</option>
          {Array.from({ length: len }).map((_, i) => <option key={i} value={i + 1}>{fa(i + 1)}</option>)}
        </select>
        <select required={required} value={v.m || ""} onChange={(e) => set("m", e.target.value)} aria-label="ماه">
          <option value="">ماه</option>
          {J_MONTHS.map((n, i) => <option key={n} value={i + 1}>{n}</option>)}
        </select>
        <select required={required} value={v.y || ""} onChange={(e) => set("y", e.target.value)} aria-label="سال">
          <option value="">سال</option>
          {years.map((y) => <option key={y} value={y}>{fa(y)}</option>)}
        </select>
      </div>
    </div>
  );
}
