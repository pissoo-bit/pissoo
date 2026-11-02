import { LANGS } from "./i18n";
import { NAV_PAGES, CARDS, BLURB } from "./home";

const L = (fa, en, ar) => ({ fa, en, ar });

export const CULTURE_NAV = L("فرهنگ بوشهری", "Bushehri culture", "الثقافة البوشهرية");

// navigation and home cards with the new culture page inserted after "around"
export const NAV_PAGES2 = [...NAV_PAGES.slice(0, 5), ["culture", "culture/"], ...NAV_PAGES.slice(5)];
export const CARDS2 = [...CARDS.slice(0, 5), { k: "culture", p: "culture/", i: "culture" }, ...CARDS.slice(5)];
export const BLURB2 = {
  fa: { ...BLURB.fa, culture: "آیین‌ها، رسوم و مراسم بوشهری در قاب یک تلویزیون قدیمی: عکس و فیلم." },
  en: { ...BLURB.en, culture: "Bushehri rituals, customs and ceremonies on an old TV set: photos and films." },
  ar: { ...BLURB.ar, culture: "طقوس وعادات ومراسم بوشهرية على تلفاز قديم: صور وأفلام." },
};

export const CULT_UI = {
  fa: { h: "فرهنگ بوشهری", sub: "آیین‌ها، رسوم و مراسم بوشهری در قاب یک تلویزیون قدیمی. ماوس را روی تصویر ببرید تا رنگی شود و کلیک کنید تا پخش شود.", play: "پخش", full: "تمام صفحه", close: "بستن ویدیو", open: "مشاهده در سایت مبدا", channels: "کانال‌ها", next: "کانال بعدی", prev: "کانال قبلی", empty: "هنوز مطلبی اضافه نشده است." },
  en: { h: "Bushehri culture", sub: "Bushehri rituals, customs and ceremonies on an old TV set. Hover the picture to bring it to colour, click to play.", play: "Play", full: "Fullscreen", close: "Close video", open: "Watch on the original site", channels: "Channels", next: "Next channel", prev: "Previous channel", empty: "Nothing has been added yet." },
  ar: { h: "الثقافة البوشهرية", sub: "طقوس وعادات ومراسم بوشهرية على تلفاز قديم. مرّر الماوس على الصورة لتتلوّن وانقر للتشغيل.", play: "تشغيل", full: "ملء الشاشة", close: "إغلاق الفيديو", open: "المشاهدة على الموقع الأصلي", channels: "القنوات", next: "القناة التالية", prev: "القناة السابقة", empty: "لم تُضف مواد بعد." },
};

export const CULTURE = [
  {
    id: "c1",
    url: "https://www.aparat.com/v/MQC6A",
    img: "",
    title: L("مراسم سرتراشون", "Sartarashoon ceremony (head shaving)", "مراسم «سرتراشون» (حلاقة الرأس)"),
    desc: L(
      "آئین سرتراشون یکی از رسومات گذشته عروسی‌هاست. آئینی که امروزه به شکل نمادین گاهی می‌بینیم، بخشی از این رسوم اصیل است.",
      "The Sartarashoon ceremony is one of the old wedding customs. A ritual we still see now and then today in a symbolic form, it is part of this authentic tradition.",
      "«سرتراشون» من عادات الأعراس القديمة. طقس نراه اليوم أحياناً بشكل رمزي، وهو جزء من هذا التقليد الأصيل."
    ),
  },
];

// accepts an Aparat link (aparat.com/v/ID) or a YouTube link; returns the embed address and, for YouTube, the preview picture
export function parseVideo(url) {
  if (!url) return null;
  let m = url.match(/aparat\.com\/v\/([A-Za-z0-9]+)/) || url.match(/videohash\/([A-Za-z0-9]+)/);
  if (m) return { kind: "aparat", id: m[1], embed: `https://www.aparat.com/video/video/embed/videohash/${m[1]}/vt/frame`, thumb: "", page: `https://www.aparat.com/v/${m[1]}` };
  m = url.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([\w-]{11})/);
  if (m) return { kind: "youtube", id: m[1], embed: `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0&autoplay=1`, thumb: `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg`, page: `https://www.youtube.com/watch?v=${m[1]}` };
  return null;
}

export const CULT_META = {
  fa: { title: "فرهنگ بوشهری: آیین‌ها و مراسم | خونه بوم‌گردی پیسو", desc: "آیین‌ها، رسوم و مراسم بوشهری با عکس و فیلم، مانند سرتراشون در عروسی‌های قدیم." },
  en: { title: "Bushehri culture: rituals and ceremonies | Pissoo Eco-Lodge", desc: "Bushehri rituals, customs and ceremonies in photos and films, such as the Sartarashoon of old weddings." },
  ar: { title: "الثقافة البوشهرية: طقوس ومراسم | نزل بيسّو البيئي", desc: "طقوس وعادات ومراسم بوشهرية بالصور والأفلام، مثل «سرتراشون» في الأعراس القديمة." },
};

export function metaCulture(lang, SITE) {
  const m = CULT_META[lang];
  const languages = Object.fromEntries(LANGS.map((l) => [l, `${SITE}/${l}/culture/`]));
  languages["x-default"] = `${SITE}/fa/culture/`;
  return {
    title: m.title,
    description: m.desc,
    alternates: { canonical: `${SITE}/${lang}/culture/`, languages },
    openGraph: { title: m.title, description: m.desc, url: `${SITE}/${lang}/culture/`, siteName: "Pissoo", type: "website", images: [{ url: "/hero/hero-1.jpg" }] },
  };
}
