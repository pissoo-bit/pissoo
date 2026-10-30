const L = (fa, en, ar) => ({ fa, en, ar });

export const NUMLOC = { fa: "fa-IR", en: "en-US", ar: "ar-EG" };
export const nf = (n, lang) => Number(n).toLocaleString(NUMLOC[lang], { useGrouping: false });

export const NAV_ROOMS = L("اتاق‌ها", "Rooms", "الغرف");
export const WINDS_NAV = L("بادهای بوشهر", "Bushehr winds", "رياح بوشهر");

export const WINDS_META = {
  fa: { title: "بادهای بوشهر و خلیج فارس | خونه بوم‌گردی پیسو", desc: "تقویم بادهای بوشهر و خلیج فارس: لکیذب، لیمهر، کوس، شمال و بادهای دیگر با بازه زمانی و منبع." },
  en: { title: "Winds of Bushehr and the Persian Gulf | Pissoo Eco-Lodge", desc: "A calendar of the winds of Bushehr and the Persian Gulf: Lakizab, Limehr, Kaus, the shamal and more, with their time spans and sources." },
  ar: { title: "رياح بوشهر والخليج الفارسي | نزل بيسّو البيئي", desc: "تقويم رياح بوشهر والخليج الفارسي: لكيذب وليمهر وكوس والشمال وغيرها مع فتراتها الزمنية ومصادرها." },
};

export const UI = {
  fa: {
    h: "بادهای بوشهر و خلیج فارس",
    intro: "مردم ساحل بوشهر روزگاری زمان کار دریا را با باد می‌سنجیدند. نخست دو باد پاییزیِ هلیله را بشناسید و با هم اشتباه نگیرید؛ سپس بادهای دیگر خلیج فارس را با بازهٔ زمانی و منبع ببینید.",
    chart_t: "بادها در طول سال", cal_t: "تقویم سال",
    tag: "باد محلی", aka: "با نام‌های", tip: "نکته", src: "منبع", srcs: "منبع‌ها",
    weak: "خفیف", strong: "تند", colDate: "تاریخ", colWind: "باد", colAbout: "دربارهٔ آن", approx: "حدود",
    note: ["تاریخ بادهای محلی بر پایهٔ روایت دریانوردان است و هر سال چند روز جابه‌جا می‌شود. پیش از رفتن به دریا، هشدار هواشناسی دریایی را ببینید. تاریخ میلادی تقریبی است.", "اطلاعات کوس، سهیلی و شمال برای کل خلیج فارس است، نه فقط بوشهر."],
    back: "بازگشت به خانه",
  },
  en: {
    h: "Winds of Bushehr and the Persian Gulf",
    intro: "The people of Bushehr's coast once measured the sea's working calendar by the wind. First learn the two autumn winds of Helileh and do not confuse them; then see the other winds of the Persian Gulf with their time spans and sources.",
    chart_t: "Winds through the year", cal_t: "Calendar of the year",
    tag: "Local wind", aka: "Also known as", tip: "Tip", src: "Source", srcs: "Sources",
    weak: "Mild", strong: "Strong", colDate: "Date", colWind: "Wind", colAbout: "About", approx: "About",
    note: ["The dates of the local winds follow the accounts of sailors and shift by a few days each year. Check the marine weather warning before going to sea. Gregorian dates are approximate.", "The information on Kaus, Suhaili and the shamal covers the whole Persian Gulf, not only Bushehr."],
    back: "Back to home",
  },
  ar: {
    h: "رياح بوشهر والخليج الفارسي",
    intro: "كان أهل ساحل بوشهر يقيسون زمن العمل في البحر بالرياح. تعرّفوا أولاً على ريحَي الخريف في هليلة ولا تخلطوا بينهما؛ ثم اطّلعوا على رياح الخليج الفارسي الأخرى مع فتراتها الزمنية ومصادرها.",
    chart_t: "الرياح على مدار السنة", cal_t: "تقويم السنة",
    tag: "ريح محلية", aka: "تُعرف أيضاً بـ", tip: "ملاحظة", src: "المصدر", srcs: "المصادر",
    weak: "خفيفة", strong: "شديدة", colDate: "التاريخ", colWind: "الريح", colAbout: "نبذة", approx: "نحو",
    note: ["تواريخ الرياح المحلية مبنية على روايات البحّارة وتتحرك بضعة أيام كل سنة. اطّلعوا على تحذير الأرصاد البحرية قبل الخروج إلى البحر. التواريخ الميلادية تقريبية.", "معلومات كوس وسهيلي والشمال تخص الخليج الفارسي كلّه، لا بوشهر وحدها."],
    back: "العودة إلى الرئيسية",
  },
};

export const MONTHS = {
  fa: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
  en: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
  ar: ["فروردين", "أرديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "إسفند"],
};
export const GREG = {
  fa: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
};
export const SEASONS = {
  fa: ["بهار", "تابستان", "پاییز", "زمستان"],
  en: ["Spring", "Summer", "Autumn", "Winter"],
  ar: ["الربيع", "الصيف", "الخريف", "الشتاء"],
};
export const SEASON_COLOR = ["#5aab6b", "#e9a23b", "#dc6a47", "#3a73b8"];

const MLEN = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
const CUM = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
const GL = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// approximate Gregorian date: Nowruz (1 Farvardin) = 21 March
export function greg(m, d) {
  let doy = (79 + CUM[m - 1] + (d - 1)) % 365;
  let mo = 0;
  while (doy >= GL[mo]) { doy -= GL[mo]; mo++; }
  return { mo, day: doy + 1 };
}

export function rangeText(w, lang) {
  const [m1, d1] = w.from; const [m2, d2] = w.to; const M = MONTHS[lang]; const n = (x) => nf(x, lang);
  if (w.approx) return `${UI[lang].approx} ${n(d1)} ${M[m1 - 1]}`;
  if (m1 === m2) return `${n(d1)}–${n(d2)} ${M[m1 - 1]}`;
  return `${n(d1)} ${M[m1 - 1]} – ${n(d2)} ${M[m2 - 1]}`;
}
export function gregText(w, lang) {
  const a = greg(...w.from); const b = greg(...w.to); const G = GREG[lang]; const n = (x) => nf(x, lang);
  if (w.approx) return `≈ ${n(a.day)} ${G[a.mo]}`;
  if (a.mo === b.mo) return `≈ ${n(a.day)}–${n(b.day)} ${G[a.mo]}`;
  return `≈ ${n(a.day)} ${G[a.mo]} – ${n(b.day)} ${G[b.mo]}`;
}
// chart bars in percent of the 12-month track (two bars when the range wraps past Esfand)
export function bars(w) {
  const [m1, d1] = w.from; const [m2, d2] = w.to;
  const s = ((m1 - 1 + (d1 - 1) / MLEN[m1 - 1]) / 12) * 100;
  const e = ((m2 - 1 + d2 / MLEN[m2 - 1]) / 12) * 100;
  if (e >= s) return [{ l: s, w: Math.max(e - s, 1.6) }];
  return [{ l: s, w: Math.max(100 - s, 1.6) }, { l: 0, w: Math.max(e, 1.6) }];
}

export const SOURCES = {
  helileh: { label: L("روایت اهالی هلیله", "Oral account of Helileh locals", "رواية أهالي هليلة") },
  kenin: { href: "https://persiangulf1382.blogfa.com/post/149", label: L("عبدالحسین کنین، «جغرافیای استان بوشهر» (به نقل از بلاگ «خلیج فارس ۱۳۸۲»)", "Abdolhossein Kenin, “Geography of Bushehr Province” (via the blog “Persian Gulf 1382”)", "عبدالحسين كنين، «جغرافيا محافظة بوشهر» (نقلاً عن مدوّنة «الخليج الفارسي 1382»)") },
  nasir: { href: encodeURI("https://nasirboushehronline.ir/ضربهلحیمر،لیمر،لهیمر،لحمیر/"), label: L("ناصر بوشهر آنلاین: ضربهٔ لحیمر، به نقل از ناخدایان", "Nasir Bushehr Online: the Lahimar blow, quoting sea captains", "ناصر بوشهر أونلاين: ضربة لحيمر، نقلاً عن الربابنة") },
  globalsec: { href: "https://www.globalsecurity.org/military/world/iran/shamal.htm", label: L("GlobalSecurity: «Persian Gulf Weather: Shamal»", "GlobalSecurity: “Persian Gulf Weather: Shamal”", "GlobalSecurity: «Persian Gulf Weather: Shamal»") },
  wiki: { href: "https://en.wikipedia.org/wiki/Shamal_(wind)", label: L("ویکی‌پدیا: Shamal (wind)", "Wikipedia: Shamal (wind)", "ويكيبيديا: Shamal (wind)") },
  ut: { href: "https://jphgr.ut.ac.ir/article_57033_en.html", label: L("مجلهٔ پژوهش‌های جغرافیای طبیعی (دانشگاه تهران)، دورهٔ ۴۸، شمارهٔ ۱، بهار ۱۳۹۵: باد شمال در سواحل شمال‌غربی خلیج فارس، بوشهر", "Physical Geography Research (University of Tehran), vol. 48, no. 1, spring 1395 (2016): the Shamal wind on the north-western Persian Gulf coast, Bushehr", "مجلة بحوث الجغرافيا الطبيعية (جامعة طهران)، المجلد 48، العدد 1، ربيع 1395: ريح الشمال على السواحل الشمالية الغربية للخليج الفارسي، بوشهر") },
};

export const WINDS = [
  { id: "pirzan", from: [1, 10], to: [1, 13], src: ["kenin"],
    t: L("باد پیرزن (بردالعجوز)", "Pirzan (Bard al-Ajuz)", "باد بيرزن (برد العجوز)"),
    d: L("نخستین باد آغاز فصل گرم؛ شدتش زیاد نیست و برای صید ماهی مفید است.", "The first wind of the warm season; it is not strong and is good for fishing.", "أول رياح بداية الفصل الدافئ؛ شدتها ليست كبيرة وهي مفيدة لصيد الأسماك.") },
  { id: "tarazu", from: [3, 3], to: [3, 3], approx: true, src: ["kenin"],
    t: L("شمال ترازو", "Shomal Tarazu", "شمال ترازو"),
    d: L("حدود ۶۵ روز پس از نوروز می‌وزد؛ نسبتاً ملایم است و در صید ماهی نقش مهمی دارد.", "Blows about 65 days after Nowruz; fairly mild, and it matters a lot for fishing.", "تهب بعد نحو ٦٥ يوماً من النوروز؛ معتدلة نسبياً ولها دور مهم في صيد الأسماك.") },
  { id: "barih", from: [3, 11], to: [4, 24], src: ["globalsec", "ut"],
    t: L("شمال تابستانی (بارح)", "Summer shamal (Barih)", "الشمال الصيفي (البارح)"),
    d: L("باد خشک شمال‌غربی که تقریباً پیوسته در خرداد و بخشی از تیر می‌وزد و گاهی گردوخاک بیابان‌های بین‌النهرین را می‌آورد. بیشتر آرام تا متوسط است؛ پژوهش‌ها نشان داده‌اند در بوشهر الگوی نسیم دریا را به هم می‌زند.", "A dry north-westerly wind that blows almost continuously through Khordad and part of Tir, sometimes carrying dust from the Mesopotamian deserts. It is mostly calm to moderate; studies show it disrupts the sea-breeze pattern in Bushehr.", "رياح شمالية غربية جافة تهب شبه متواصلة في خرداد وجزء من تير، وتحمل أحياناً غبار صحارى بلاد الرافدين. وهي في الغالب هادئة إلى معتدلة؛ وتُظهر الدراسات أنها تخلّ بنمط نسيم البحر في بوشهر.") },
  { id: "lakizab", from: [7, 23], to: [7, 28], src: ["helileh", "kenin"], strength: "weak", big: true,
    t: L("باد لکیذب", "Lakizab (Lachizab)", "باد لكيذب"),
    d: L("بادی ناگهانی و کوتاه که شبیه لیمهر است اما خفیف‌تر؛ به همین خاطر «باد گول‌زن» نامیده می‌شود و گاهی با لیمهر اشتباه گرفته می‌شود.", "A sudden, short-lived wind that resembles Limehr but is milder — which is why it is called the “deceiving wind” and is sometimes mistaken for Limehr.", "ريح مفاجئة وقصيرة تشبه ليمهر لكنها أخفّ؛ ولذلك تُسمّى «الريح الخادعة» وتُخلط أحياناً مع ليمهر."),
    aka: L("لکیذب، لچیذب (لپچزب)، «باد گول‌زن»", "Lakizab, Lachizab (Lapchezab), the “deceiving wind”", "لكيذب، لچيذب (لبچزب)، «الريح الخادعة»"),
    tip: L("وزشش کوتاه است و زود فروکش می‌کند؛ لیمهر ماندگارتر است و چند روز دریا را به هم می‌ریزد.", "It blows briefly and dies down quickly; Limehr lasts longer and stirs the sea for several days.", "هبوبها قصير وتهدأ سريعاً؛ أما ليمهر فأطول أمداً وتضطرب به البحر عدة أيام."),
    note: L("تاریخ مهر روایت اهالی هلیله است؛ در منبع مکتوب (کنین) باد مشابهی با نام‌های «لپچزب / الکیزب / گول‌زن» در ۱۵ تا ۲۵ آبان آمده است.", "The Mehr dates come from the account of Helileh locals; the written source (Kenin) lists a similar wind, named “Lapchezab / Alkizab / Gol-zan”, on 15–25 Aban.", "تاريخ مهر هو رواية أهالي هليلة؛ وفي المصدر المكتوب (كنين) ترد ريح مشابهة بأسماء «لبچزب / الكيزب / گول‌زن» في 15–25 آبان.") },
  { id: "limehr", from: [8, 23], to: [8, 28], src: ["helileh", "nasir", "kenin"], strength: "strong", big: true,
    t: L("باد لیمهر", "Limehr (Limar, Lahimar)", "باد ليمهر"),
    d: L("از شناخته‌شده‌ترین بادهای ساحل بوشهر و نشانهٔ پایان گرما و آغاز سرمای سال. در روایت دریانوردان «باد سرخ» است که از سمت عربستان می‌آید. وزش اصلی حدود یک هفته می‌ماند، موج را بلند و آب را گل‌آلود می‌کند و پس از فروکش، معمولاً صید خوب می‌شود.", "One of the best-known winds of the Bushehr coast and a sign that the heat is over and the year's cold is beginning. In the sailors' account it is the “red wind”, coming from the direction of Arabia. The main blow lasts about a week, raising high waves and muddying the water; after it dies down, fishing is usually good.", "من أشهر رياح ساحل بوشهر وعلامة على انتهاء الحر وبداية برد السنة. وفي رواية البحّارة هي «الريح الحمراء» التي تأتي من جهة الجزيرة العربية. تدوم هبّتها الرئيسية نحو أسبوع، فتُعلي الموج وتعكّر الماء، وبعد أن تهدأ يكون الصيد عادةً جيداً."),
    aka: L("لیمهر، لیمر، لحیمر، لهیمر", "Limehr, Limar, Lahimar, Lahimar", "ليمهر، ليمر، لحيمر، لهيمر"),
    tip: L("پیش از وزش، ابرهای عمودی و تغییر ناگهانی هوا دیده می‌شود. دو سه روز اول را به دریا نزنید؛ بعد از فروکش‌کردن، دریا معمولاً پرصید است.", "Vertical clouds and a sudden change in the weather are seen before it blows. Stay off the sea for the first two or three days; after it subsides the sea is usually rich in fish.", "تُرى قبل هبوبها غيوم عمودية وتغيّر مفاجئ في الطقس. لا تنزلوا إلى البحر في اليومين أو الأيام الثلاثة الأولى؛ وبعد أن تهدأ يكون البحر عادةً غزير الصيد."),
    note: L("تاریخ ۲۳ تا ۲۸ آبان روایت اهالی هلیله است؛ در منابع مکتوب (کنین و ناخدایان) آغاز آن حدود ۱۵ آبان و تا نیمهٔ دوم آبان گفته شده و هر سال جابه‌جا می‌شود.", "The 23–28 Aban dates come from the account of Helileh locals; written sources (Kenin and sea captains) put its start around 15 Aban and into the second half of Aban, and it shifts from year to year.", "تاريخ ٢٣–٢٨ آبان هو رواية أهالي هليلة؛ وفي المصادر المكتوبة (كنين والربابنة) يُذكر أن بدايتها نحو ١٥ آبان وحتى النصف الثاني من آبان، وتتحرك كل سنة.") },
  { id: "kaus", from: [9, 10], to: [1, 31], src: ["globalsec", "kenin"],
    t: L("باد کوس (قوس، جنوب‌شرقی)", "Kaus (Qaws, south-easterly)", "باد كوس (قوس، جنوبي شرقي)"),
    d: L("باد زمستانیِ جنوب‌شرقی که بین آذر و فروردین به‌نوبت با شمال می‌وزد. کمتر از سه روز می‌ماند، هوا را گرفته و بارانی می‌کند و گاهی رعدوبرق دارد.", "A south-easterly winter wind that alternates with the shamal between Azar and Farvardin. It lasts less than three days, makes the weather overcast and rainy, and sometimes brings thunder and lightning.", "رياح شتوية جنوبية شرقية تتناوب مع الشمال بين آذر وفروردين. تدوم أقل من ثلاثة أيام وتجعل الجو ملبداً وماطراً، وتصحبها أحياناً رعود وبروق.") },
  { id: "wshamal", from: [9, 10], to: [12, 29], src: ["wiki", "globalsec", "ut"],
    t: L("شمال زمستانی", "Winter shamal", "الشمال الشتوي"),
    d: L("پس از عبور هوای سرد از شمال می‌وزد؛ معمولاً از یک تا پنج روز می‌ماند و در زمستان هر چند روز بازمی‌گردد. دریا را مواج می‌کند و گاهی با رگبار و رعدوبرق همراه است.", "Blows after a cold air mass passes from the north; it usually lasts one to five days and returns every few days in winter. It makes the sea choppy and is sometimes accompanied by showers and thunderstorms.", "تهب بعد مرور كتلة هواء باردة من الشمال؛ وتدوم عادةً من يوم إلى خمسة أيام وتعود كل بضعة أيام في الشتاء. تجعل البحر مائجاً وتصحبها أحياناً زخات مطر ورعود وبروق.") },
  { id: "suhaili", from: [10, 1], to: [12, 29], src: ["globalsec"],
    t: L("باد سهیلی (جنوب‌غربی)", "Suhaili (south-westerly)", "باد سهيلي (جنوبي غربي)"),
    d: L("باد کمیاب زمستانی که چند ساعت می‌وزد و اغلب پس از کوس می‌آید. با باران همراه است و پیش از آن ابرهای جنوبی و برق دیده می‌شود؛ لنگرگاه‌های ساحلی را ناآرام می‌کند.", "A rare winter wind that blows for a few hours and often follows Kaus. It brings rain, preceded by southern clouds and lightning, and unsettles coastal anchorages.", "رياح شتوية نادرة تهب بضع ساعات وتأتي غالباً بعد الكوس. يصحبها مطر، وتسبقها غيوم جنوبية وبرق؛ وتُقلق المراسي الساحلية.") },
  { id: "tobiyeh", from: [11, 20], to: [11, 30], src: ["kenin"],
    t: L("باد توبیه", "Tobiyeh", "باد توبية"),
    d: L("آخرین باد بزرگ شمالی سال؛ سرد و همراه رعدوبرق. ناخداها در این روزها کمتر به دریا می‌زنند.", "The last big northerly wind of the year; cold and accompanied by thunder and lightning. Captains go out to sea less often on these days.", "آخر رياح شمالية كبيرة في السنة؛ باردة وتصحبها رعود وبروق. يقلّ خروج الربابنة إلى البحر في هذه الأيام.") },
];
