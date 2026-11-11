const NAVY = "#234b6f";

export const metadata = {
  title: "Pissoo House — logo archive",
  robots: { index: false, follow: false },
  icons: { icon: "/logo/favicon.ico" },
};

const ITEMS = [
  { file: "logo-horizontal", name: "لوگوی افقی · Horizontal", use: "هدر سایت، امضای ایمیل، بنرهای افقی", w: 1236, h: 794, orig: "logo-horizontal-original.png" },
  { file: "logo-stacked", name: "لوگوی عمودی · Stacked", use: "فوتر سایت، پوستر، مهر، چاپ روی اشیاء", w: 1334, h: 1252, orig: "logo-stacked-original.png" },
  { file: "sign", name: "نشانه · Mark", use: "آیکون مرورگر، منوی موبایل، مهر و نشان کوچک", w: 656, h: 928, orig: "sign-original.png" },
  { file: "wordmark", name: "نوشتار · Wordmark", use: "جایی که نشانه جدا آمده یا ساده‌تر لازم است", w: 1690, h: 1690, orig: "wordmark-original.png" },
  { file: "profile-square", name: "پروفایل مربعی · Square profile", use: "پروفایل اینستاگرام، تلگرام، واتساپ، گوگل مپ", w: 1690, h: 1690, orig: "profile-square-original.png" },
];

const card = { background: "#fffaf0", border: `2.5px solid ${NAVY}`, borderRadius: 22, padding: 18, boxShadow: "0 8px 0 rgba(35,75,111,.15)" };
const btn = { display: "inline-block", padding: "6px 16px", border: `2px solid ${NAVY}`, borderRadius: 999, color: NAVY, textDecoration: "none", fontWeight: 700, background: "#fff", marginInlineEnd: 8 };

export default function Brand() {
  return (
    <main dir="rtl" style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 16px 60px", background: "#f7f0df", minHeight: "100vh", color: "#0b3a47", fontFamily: "Tahoma, system-ui, sans-serif", lineHeight: 1.9 }}>
      <h1 style={{ color: NAVY }}>آرشیو لوگوی خونه پیسو</h1>
      <p>همه نسخه‌های لوگو برای دانلود. «نسخه وب» سبک و مناسب سایت و شبکه‌هاست؛ «نسخه اصلی» با حداکثر کیفیت برای چاپ است.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
        {ITEMS.map((it) => (
          <section key={it.file} style={card}>
            <h2 style={{ fontSize: "1.1rem", color: NAVY, margin: "0 0 4px" }}>{it.name}</h2>
            <p style={{ margin: "0 0 10px", fontSize: ".9rem" }}>{it.use}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
              <div style={{ background: "#fff", border: "1px solid #e5d9bd", borderRadius: 14, padding: 10, display: "flex", alignItems: "center", justifyContent: "center", height: 150 }}>
                <img src={`/logo/${it.file}.png`} alt={it.name} style={{ maxWidth: "100%", maxHeight: 130 }} />
              </div>
              <div style={{ background: "#0b4a5a", borderRadius: 14, padding: 10, display: "flex", alignItems: "center", justifyContent: "center", height: 150 }}>
                <img src={`/logo/${it.file}.png`} alt="" style={{ maxWidth: "100%", maxHeight: 130, background: "#fffaf0", borderRadius: 8, padding: 6 }} />
              </div>
            </div>
            <a style={btn} href={`/logo/${it.file}.png`} download>نسخه وب</a>
            <a style={btn} href={`/logo/archive/${it.orig}`} download>نسخه اصلی ({it.w}×{it.h})</a>
          </section>
        ))}
      </div>
      <h2 style={{ color: NAVY, marginTop: 36 }}>رنگ‌های لوگو (تقریبی)</h2>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[["سرمه‌ای", "#234b6f"], ["نارنجی", "#f68b00"], ["آبی موج", "#0b82e5"]].map(([n, c]) => (
          <div key={c} style={{ ...card, display: "flex", alignItems: "center", gap: 10, padding: 12 }}>
            <i style={{ width: 36, height: 36, borderRadius: 10, background: c, display: "block", border: "2px solid #0b3a47" }} />
            <span>{n} <b dir="ltr">{c}</b></span>
          </div>
        ))}
      </div>
      <h2 style={{ color: NAVY, marginTop: 36 }}>آیکون‌ها و تصویر اشتراک</h2>
      <p>
        <a style={btn} href="/logo/favicon.ico" download>favicon.ico</a>
        <a style={btn} href="/logo/icon-192.png" download>icon-192.png</a>
        <a style={btn} href="/logo/icon-512.png" download>icon-512.png</a>
        <a style={btn} href="/logo/apple-touch-icon.png" download>apple-touch-icon.png</a>
        <a style={btn} href="/logo/og.png" download>og.png (1200×630)</a>
      </p>
    </main>
  );
}
