import "../app/pages.css";
import { T } from "../lib/i18n";
import { G, IG_URL, NAVX } from "../lib/guest";
import { NAV_ROOMS, WINDS_NAV } from "../lib/winds";
import { CONTENT } from "../lib/content";
import { WhatsAppIcon, TelegramIcon, InstagramIcon, PhoneIcon } from "./Icons";
import Logo from "./Logo";

const L = {
  fa: { strip: "خونه پیسو در یک نگاه", hours: "ساعت سرویس‌دهی", hoursV: "هر روز، ۸ صبح تا ۱۱ شب", where: "کجا", addr: "بوشهر، تنگستان، دلوار، بندر رستمی", route: "مسیر روی نقشه", site: "در سایت", open: "مهمان پیسو باشی؛ از قبل هماهنگ کنیم", ig: "اینستاگرام پیسو" },
  en: { strip: "Pissoo at a glance", hours: "Service hours", hoursV: "Every day, 8:00 to 23:00", where: "Where", addr: "Bandar Rostami, Delvar, Tangestan, Bushehr", route: "Route on the map", site: "On this site", open: "Be Pissoo's guest — book ahead", ig: "Pissoo on Instagram" },
  ar: { strip: "بيسّو بنظرة", hours: "ساعات الخدمة", hoursV: "يومياً، من ٨ صباحاً حتى ١١ مساءً", where: "أين", addr: "بندر رستمي، دلوار، تنگستان، بوشهر", route: "الطريق على الخريطة", site: "في الموقع", open: "كن ضيف بيسّو — احجز مسبقاً", ig: "بيسّو على إنستغرام" },
};
const ROT = ["-3deg", "2.5deg", "-2deg", "3deg"];

function wavePath(y, amp) {
  let d = `M0 ${y}`;
  for (let i = 0; i < 24; i++) d += i === 0 ? `Q60 ${y - amp} 120 ${y}` : `T${120 * (i + 1)} ${y}`;
  return `${d}V80H0Z`;
}

// a humpback dolphin surfacing: dark back with a hump and dorsal fin, pale belly
function Surfacing({ x, y, rot, scale, cls }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <g className={"sd " + cls}>
        <g transform="translate(-23 -10)" stroke="#0b4a5a" strokeWidth=".9" strokeLinejoin="round">
          <path d="M4 13L-4 5Q-1 13-4 21Z" fill="#6a7078" />
          <path d="M4 13C9 5 22 3 33 7C39 9 44 10 50 11C46 14 41 14 37 16C29 21 12 21 4 13Z" fill="#6a7078" />
          <path d="M8 14C16 19 28 19 36 15C30 13 14 13 8 14Z" fill="#ecd3cf" strokeWidth=".5" />
          <path d="M12 6.5C16 .5 25 -1 31 7.5Z" fill="#5d636b" />
          <path d="M19 3.6L24-4L29 5Z" fill="#4f555d" />
          <path d="M27 16L24 23L31 17Z" fill="#8a8f96" />
        </g>
      </g>
    </g>
  );
}

export default function SiteFooter({ lang, settings }) {
  const t = T[lang];
  const l = L[lang];
  const s = settings || CONTENT.settings;
  const gh = G[lang].house;
  const nx = NAVX[lang];
  const links = [
    [`/${lang}/rooms/`, NAV_ROOMS[lang]],
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
      </div>

      <div className="sea">
        <svg className="sw sw-back" viewBox="0 0 2880 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d={wavePath(26, 16)} fill="#43c9d0" />
        </svg>
        <svg className="sea-dol" viewBox="0 0 1440 140" aria-hidden="true" focusable="false">
          <Surfacing x={250} y={76} rot={-24} scale={1.9} cls="sd1" />
          <Surfacing x={720} y={76} rot={-38} scale={2.6} cls="sd2" />
          <Surfacing x={1170} y={76} rot={-18} scale={2.1} cls="sd3" />
        </svg>
        <svg className="sw sw-front" viewBox="0 0 2880 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d={wavePath(30, 18)} fill="#0e90a0" />
        </svg>

        <div className="sea-body">
          <div className="sf-wrap">
            <div className="fgrid">
              <div className="fbrand">
                <a href={`/${lang}/`} aria-label="Pissoo House" className="flogo"><Logo variant="stacked" height={112} /></a>
                <p className="fopen"><i aria-hidden="true" />{l.open}</p>
                <a className="fig" href={ig} target="_blank" rel="noopener noreferrer"><InstagramIcon size={20} /> {l.ig}</a>
              </div>
              <div className="fcol"><small>{l.hours}</small><b>{l.hoursV}</b></div>
              <div className="fcol"><small>{l.where}</small><b>{l.addr}</b><a href={s.mapUrl} target="_blank" rel="noopener noreferrer">{l.route} →</a></div>
              <div className="fcol"><small>{l.site}</small>{links.map(([h, x]) => <a key={h} href={h}>{x}</a>)}</div>
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
        </div>
      </div>
    </footer>
  );
}
