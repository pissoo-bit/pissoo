"use client";
import { useState } from "react";
import { WhatsAppIcon } from "./Icons";

export default function RuleForm({ labels, wa }) {
  const [f, setF] = useState({ name: "", phone: "", inD: "", ok: false });
  const send = (e) => {
    e.preventDefault();
    const msg = `${labels.waMsg}\n${labels.fName}: ${f.name}\n${labels.fPhone}: ${f.phone}\n${labels.fIn}: ${f.inD}`;
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };
  return (
    <form className="gp-form" onSubmit={send}>
      <input required placeholder={labels.fName} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <input required type="tel" dir="ltr" placeholder={labels.fPhone} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
      <label>{labels.fIn}<input required type="date" value={f.inD} onChange={(e) => setF({ ...f, inD: e.target.value })} /></label>
      <label className="ok"><input required type="checkbox" checked={f.ok} onChange={(e) => setF({ ...f, ok: e.target.checked })} /> {labels.fOk}</label>
      <button className="btn" type="submit"><WhatsAppIcon size={20} /> {labels.fSend}</button>
    </form>
  );
}
