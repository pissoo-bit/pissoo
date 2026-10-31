import { T } from "../lib/i18n";
import { G, IG_URL, GMAP_URL, NAVX } from "../lib/guest";
import { NAV_ROOMS, WINDS_NAV } from "../lib/winds";
import { CONTENT } from "../lib/content";
import { WhatsAppIcon, TelegramIcon, InstagramIcon, PhoneIcon } from "./Icons";
import { BigDolphin } from "./HeroScene";

const L = {
  fa: { strip: "خونه پیسو در یک نگاه", hours: "ساعت سرویس‌دهی", hoursV: "هر روز، ۸ صبح تا ۱۱ شب", where: "کجا", addr: "بوشهر، تنگستان، دلوار، بندر رستمی", route: "مسیر روی نقشه", site: "در سایت", tag: "خونه بوم‌گردی، دریا و دلفین‌ها", open: "مهمان پیسو باشی؛ از قبل هماهنگ کنیم", ig: "اینستاگرام پیسو" },
  en: { strip: "Pissoo at a glance", hours: "Service hours", hoursV: "Every day, 8:00 to 23:00", where: "Where", addr: "Bandar Rostami, Delvar, Tangestan, Bushehr", route: "Route on the map", site: "On this site", tag: "A house of sea, nature and dolphins", open: "Be Pissoo's guest — book ahead", ig: "Pissoo on Instagram" },
  ar: { strip: "بيسّو بنظرة", hours: "ساعات الخدمة", hoursV: "يومياً، من ٨ صباحاً حتى ١١ مساءً", where: "أين", addr: "بندر رستمي، دلوار، تنگستان، بوشهر", route: "الطريق على الخريطة", site: "في الموقع", tag: "بيت للبحر والطبيعة والدلافين", open: "كن ضيف بيسّو — احجز مسبقاً", ig: "بيسّو على إنستغرام" },
};
const ROT = ["-3deg", "2.5deg", "-2deg", "3deg"];

export default function SiteFooter({ lang, settings }) {
  const t = T[lang];
  const l = L[lang];
  const s = settings || CONTENT.settings;
  const gh = G[lang].house;
  const nx = NAVX[lang];
  const links = [
    [`/${lang}/#rooms`, NAV_ROOMS[lang]],
    [`/${lang}/food/`, nx.food],
    [`/${lang}/around/`, nx.around],
    [`/${lang}/winds/`, WINDS_NAV[lang]],
    [`/${lang}/rules/`, gh.rules],
  ];
  const wa = `https://wa.me/${s.whatsapp}`;
  const tg = `https://t.me/+${s.telegram}`;
  const ig = s.instagram || IG_URL;
  return (
    <footer className="sf">
      <div className="sf-wrap">
        <h3 className="sf-title">{l.strip}</h3>
        <div className="fstrip">
          {[1, 2, 3, 4].map((i) => (
            <figure className="pol" key={i} style={{ "--r": ROT[i - 1] }}>
              <div className="box">
                <i className="orig" style={{ backgroundImage: `url(/house/pissoo-${i}.jpg)` }} />
                <i className="art" style={{ backgroundImage: `url(/house/pissoo-${i}-art.jpg)` }} />
              </div>
            </figure>
          ))}
        </div>

        <div className="fcard">
          <BigDolphin className="fdol" />
          <div className="fgrid">
            <div className="fbrand">
              <img src="/logo.png" alt="Pissoo House" />
              <p className="fopen"><i aria-hidden="true" />{l.open}</p>
              <a className="fig" href={ig} target="_blank" rel="noopener noreferrer"><InstagramIcon size={20} /> {l.ig}</a>
            </div>
            <div className="fcol"><small>{l.hours}</small><b>{l.hoursV}</b></div>
            <div className="fcol"><small>{l.where}</small><b>{l.addr}</b><a href={s.mapUrl} target="_blank" rel="noopener noreferrer">{l.route} →</a></div>
            <div className="fcol"><small>{l.site}</small>{links.map(([h, x]) => <a key={h} href={h}>{x}</a>)}</div>
          </div>
          <svg className="fline" viewBox="0 0 40 130" aria-hidden="true" focusable="false">
            <path d="M20 0V84" stroke="#0b4a5a" strokeWidth="2" strokeDasharray="3 4" fill="none" />
            <g stroke="#0b4a5a" strokeWidth="2.5" strokeLinejoin="round" fill="#19c3c7">
              <path d="M20 84C16 98 14 108 6 124Q20 112 20 112Q20 112 34 124C26 108 24 98 20 84Z" />
            </g>
          </svg>
        </div>
      </div>

      <div className="fbar">
        <span className="ftext">{t.footer}</span>
        <span className="ficons">
          <a href={wa} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon size={22} /></a>
          <a href={tg} target="_blank" rel="noopener" aria-label="Telegram"><TelegramIcon size={22} /></a>
          <a href={ig} target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon size={22} /></a>
          <a href={`tel:${s.phone}`} aria-label="Phone"><PhoneIcon size={20} /></a>
        </span>
        <span className="copy" dir="ltr">pissoo.ir</span>
      </div>
    </footer>
  );
}
