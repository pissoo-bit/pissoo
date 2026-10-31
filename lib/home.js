import { T, LANGS } from "./i18n";

export const NAV_PAGES = [["story", "about/"], ["rooms", "rooms/"], ["exp", "experiences/"], ["food", "food/"], ["around", "around/"], ["shop", "shop/"], ["winds", "winds/"], ["gallery", "gallery/"], ["contact", "contact/"]];

// summary cards on the home page: key, page path, animated icon
export const CARDS = [
  { k: "story", p: "about/", i: "story" },
  { k: "rooms", p: "rooms/", i: "rooms" },
  { k: "exp", p: "experiences/", i: "exp" },
  { k: "food", p: "food/", i: "food" },
  { k: "around", p: "around/", i: "around" },
  { k: "shop", p: "shop/", i: "shop" },
  { k: "winds", p: "winds/", i: "winds" },
  { k: "gallery", p: "gallery/", i: "gallery" },
  { k: "rules", p: "rules/", i: "rules" },
  { k: "contact", p: "contact/", i: "contact" },
];

export const MORE = { fa: "بیشتر ←", en: "Read more →", ar: "المزيد ←" };

export const BLURB = {
  fa: {
    story: "«پیسو» یعنی دلفین؛ قصه خانه‌ای که برای دلفین‌ها و فرهنگ ساحل ساخته شد.",
    rooms: "اتاق‌های رو به دریا با تراس، قیمت و امکانات هر اتاق و اطلاعات اقامت.",
    exp: "گشت دریایی، ماهیگیری محلی، SUP و تورهای نیم‌روزه و یک‌روزه.",
    food: "غذای خانگی و محلی از آشپزهای روستا؛ نام و شماره برای هماهنگی.",
    around: "نقشه، فاصله تا دلوار و بوشهر، جاذبه‌های نزدیک و تفریحات.",
    shop: "صنایع دستی چوبی، حصیری، صدفی و محصولات بومی ساحل.",
    winds: "تقویم بادهای بوشهر و خلیج فارس؛ لکیذب، لیمهر، کوس و بقیه.",
    gallery: "قاب‌هایی از خونه پیسو، غروب و ساحل.",
    rules: "مرام‌نامه، شرایط رزرو و کنسلی و فرم تایید پذیرش.",
    contact: "رزرو در واتساپ، تلفن، تلگرام، اینستاگرام و آدرس.",
  },
  en: {
    story: "“Pissoo” means dolphin — the story of a house built for the dolphins and the culture of the coast.",
    rooms: "Sea-view rooms with terraces: prices, amenities for each room and stay information.",
    exp: "Boat tours, local fishing, SUP and half-day and full-day tours.",
    food: "Home-cooked local food from the village cooks; names and numbers to arrange meals.",
    around: "Map, distances to Delvar and Bushehr, nearby attractions and activities.",
    shop: "Wooden, wicker and shell handicrafts and local products of the coast.",
    winds: "A calendar of the winds of Bushehr and the Persian Gulf: Lakizab, Limehr, Kaus and more.",
    gallery: "Frames from Pissoo, the sunsets and the beach.",
    rules: "House rules, booking and cancellation terms, and the acceptance form.",
    contact: "Book on WhatsApp, phone, Telegram, Instagram and the address.",
  },
  ar: {
    story: "«بيسّو» تعني الدلفين — قصة بيت بُني للدلافين وثقافة الساحل.",
    rooms: "غرف بشرفات تطل على البحر: أسعار ومزايا كل غرفة ومعلومات الإقامة.",
    exp: "جولات بحرية وصيد محلي وركوب الأمواج بالمجداف وجولات نصف يوم ويوم كامل.",
    food: "طعام منزلي محلي من طاهيات القرية؛ أسماء وأرقام للتنسيق.",
    around: "خريطة ومسافات إلى دلوار وبوشهر ومعالم قريبة وأنشطة.",
    shop: "حرف يدوية خشبية ومن الخوص والأصداف ومنتجات محلية من الساحل.",
    winds: "تقويم رياح بوشهر والخليج الفارسي: لكيذب وليمهر وكوس وغيرها.",
    gallery: "لقطات من بيسّو والغروب والشاطئ.",
    rules: "قوانين البيت وشروط الحجز والإلغاء ونموذج الموافقة.",
    contact: "الحجز عبر واتساب والهاتف وتلغرام وإنستغرام والعنوان.",
  },
};

export const PAGEMETA2 = {
  about: {
    fa: { title: "قصه پیسو | خونه بوم‌گردی پیسو", desc: "قصه خونه بوم‌گردی پیسو: خانه‌ای برای دلفین‌های کوهان‌دار و فرهنگ ساحل بندر رستمی بوشهر." },
    en: { title: "The story of Pissoo | Pissoo Eco-Lodge", desc: "The story of Pissoo Eco-Lodge: a house for the humpback dolphins and the coastal culture of Bandar Rostami, Bushehr." },
    ar: { title: "قصة بيسّو | نزل بيسّو البيئي", desc: "قصة نزل بيسّو البيئي: بيت للدلافين ذات الحدبة وثقافة ساحل بندر رستمي ببوشهر." },
  },
  rooms: {
    fa: { title: "اتاق‌ها و قیمت‌ها | خونه بوم‌گردی پیسو", desc: "اتاق‌های خونه پیسو با امکانات، ظرفیت و قیمت، به‌همراه ساعت ورود و خروج و شرایط اقامت." },
    en: { title: "Rooms & prices | Pissoo Eco-Lodge", desc: "Pissoo rooms with amenities, capacity and prices, plus check-in and check-out times and stay terms." },
    ar: { title: "الغرف والأسعار | نزل بيسّو البيئي", desc: "غرف بيسّو مع المزايا والسعة والأسعار، مع مواعيد الوصول والمغادرة وشروط الإقامة." },
  },
  experiences: {
    fa: { title: "تجربه‌ها و تورها | خونه بوم‌گردی پیسو", desc: "گشت دریایی، ماهیگیری محلی، موج‌سواری پارویی و تورهای نیم‌روزه و یک‌روزه با مراحل رزرو." },
    en: { title: "Experiences & tours | Pissoo Eco-Lodge", desc: "Sea boat tours, local fishing, stand-up paddle boarding and half-day and full-day tours, with the booking steps." },
    ar: { title: "التجارب والجولات | نزل بيسّو البيئي", desc: "جولات بحرية وصيد محلي وركوب الأمواج بالمجداف وجولات نصف يوم ويوم كامل، مع خطوات الحجز." },
  },
  shop: {
    fa: { title: "فروشگاه صنایع دستی و محصولات بومی | پیسو", desc: "صنایع دستی چوبی، حصیری و صدفی و محصولات بومی ساحل بوشهر؛ سفارش از طریق واتساپ." },
    en: { title: "Handicrafts & local products shop | Pissoo", desc: "Wooden, wicker and shell handicrafts and local products of the Bushehr coast; order via WhatsApp." },
    ar: { title: "متجر الحرف اليدوية والمنتجات المحلية | بيسّو", desc: "حرف يدوية خشبية ومن الخوص والأصداف ومنتجات محلية من ساحل بوشهر؛ الطلب عبر واتساب." },
  },
  gallery: {
    fa: { title: "گالری تصاویر | خونه بوم‌گردی پیسو", desc: "تصاویر خونه بوم‌گردی پیسو، غروب و ساحل بندر رستمی." },
    en: { title: "Photo gallery | Pissoo Eco-Lodge", desc: "Photos of Pissoo Eco-Lodge, the sunsets and the beach of Bandar Rostami." },
    ar: { title: "معرض الصور | نزل بيسّو البيئي", desc: "صور نزل بيسّو البيئي والغروب وشاطئ بندر رستمي." },
  },
  contact: {
    fa: { title: "تماس و رزرو | خونه بوم‌گردی پیسو", desc: "رزرو اقامت در خونه پیسو: فرم رزرو، واتساپ، تلگرام، تلفن، اینستاگرام و نشانی." },
    en: { title: "Contact & booking | Pissoo Eco-Lodge", desc: "Book a stay at Pissoo: booking form, WhatsApp, Telegram, phone, Instagram and address." },
    ar: { title: "التواصل والحجز | نزل بيسّو البيئي", desc: "احجز إقامتك في بيسّو: نموذج الحجز وواتساب وتلغرام وهاتف وإنستغرام والعنوان." },
  },
};

export function metaFor2(key, lang, path, SITE) {
  const m = PAGEMETA2[key][lang];
  const languages = Object.fromEntries(LANGS.map((l) => [l, `${SITE}/${l}/${path}`]));
  languages["x-default"] = `${SITE}/fa/${path}`;
  return {
    title: m.title,
    description: m.desc,
    alternates: { canonical: `${SITE}/${lang}/${path}`, languages },
    openGraph: { title: m.title, description: m.desc, url: `${SITE}/${lang}/${path}`, siteName: "Pissoo", type: "website", images: [{ url: "/hero/hero-1.jpg" }] },
  };
}

export const HOME_TAG = { fa: T.fa.nav.story, en: T.en.nav.story, ar: T.ar.nav.story };
