const L = (fa, en, ar) => ({ fa, en, ar });

export const DEFAULT_CONTENT = {
  settings: {
    phone: "09938338277",
    whatsapp: "989938338277",
    telegram: "989938338277",
    instagram: "",
    mapUrl: "https://neshan.org/maps/search/خونه بومگردی پیسو بوشهر",
    heroVideo: "",
    address: L("بوشهر، بندر رستمی", "Bandar Rostami, Bushehr", "بوشهر، بندر رستمي"),
  },
  hero: ["/hero/hero-1.jpg", "/hero/hero-2.jpg", "/hero/hero-3.jpg", "/hero/hero-4.jpg"],
  gallery: ["/hero/hero-1.jpg", "/hero/hero-2.jpg", "/hero/hero-3.jpg", "/hero/hero-4.jpg"],
  rooms: [
    { id: "r1", name: L("اتاق رو به دریا", "Sea-view room", "غرفة بإطلالة بحرية"), desc: L("اتاقی آرام با تراس و نگاه به دریا", "A calm room with a terrace facing the sea", "غرفة هادئة بشرفة تطل على البحر"), capacity: 2, price: 0, img: "" },
    { id: "r2", name: L("اتاق خانوادگی", "Family room", "غرفة عائلية"), desc: L("مناسب خانواده‌ها، با فضای نشیمن", "For families, with a sitting area", "مناسبة للعائلات مع منطقة جلوس"), capacity: 4, price: 0, img: "" },
    { id: "r3", name: L("اتاق سنتی", "Traditional room", "غرفة تقليدية"), desc: L("با فرش، حصیر و چوب بومی", "With rugs, wicker and local wood", "بالسجاد والخوص والخشب المحلي"), capacity: 3, price: 0, img: "" },
  ],
  packages: [
    { id: "p1", name: L("دو شب اقامت و گشت ساحلی", "Two nights & coast tour", "ليلتان وجولة ساحلية"), desc: L("اقامت در پیسو به همراه گشت ساحلی و غروب دریا", "Stay at Pissoo with a coast tour and sea sunset", "إقامة في بيسّو مع جولة ساحلية وغروب البحر"), duration: L("۲ شب", "2 nights", "ليلتان"), price: 0, img: "" },
    { id: "p2", name: L("تجربه ماهیگیری محلی", "Local fishing experience", "تجربة صيد محلية"), desc: L("یک صبح همراه ماهیگیران محلی", "A morning with local fishermen", "صباح مع الصيادين المحليين"), duration: L("نیم‌روز", "Half day", "نصف يوم"), price: 0, img: "" },
    { id: "p3", name: L("شب غذای بوشهری", "Bushehri food night", "ليلة المأكولات البوشهرية"), desc: L("سفره‌ای از طعم‌های جنوب", "A table of southern flavours", "مائدة من نكهات الجنوب"), duration: L("یک شب", "One evening", "أمسية"), price: 0, img: "" },
    { id: "p4", name: L("تور روستا و ساحل دلوار", "Village & Delvar coast tour", "جولة القرية وساحل دلوار"), desc: L("آشنایی با روستا، فرهنگ و ساحل", "Village life, culture and the coast", "التعرف على القرية والثقافة والساحل"), duration: L("یک روز", "Full day", "يوم كامل"), price: 0, img: "" },
    { id: "p5", name: L("تور تماشای دلفین", "Dolphin watching tour", "جولة مشاهدة الدلافين"), desc: L("برای زمان‌بندی و رزرو تماس بگیرید", "Contact us for timing and booking", "اتصل بنا للمواعيد والحجز"), duration: L("نیم‌روز", "Half day", "نصف يوم"), price: 0, img: "" },
  ],
  products: [
    { id: "s1", cat: "wood", name: L("ظرف چوبی دست‌ساز", "Handmade wooden bowl", "وعاء خشبي يدوي"), desc: L("چوب بومی، ساخت صنعتگر محلی", "Local wood, by a local artisan", "خشب محلي بصنع حرفي محلي"), price: 0, img: "", soldout: false },
    { id: "s2", cat: "wood", name: L("چوب‌دستی و ماکت لنج", "Wooden dhow model", "نموذج لنج خشبي"), desc: L("ماکت سنتی لنج جنوب", "Traditional southern dhow", "نموذج لنج جنوبي تقليدي"), price: 0, img: "", soldout: false },
    { id: "s3", cat: "wicker", name: L("سبد حصیری", "Wicker basket", "سلة من الخوص"), desc: L("بافته‌شده از برگ نخل", "Woven from palm leaves", "منسوجة من سعف النخيل"), price: 0, img: "", soldout: false },
    { id: "s4", cat: "wicker", name: L("زیرانداز حصیری", "Wicker mat", "حصيرة من الخوص"), desc: L("حصیر دست‌باف جنوب", "Hand-woven southern mat", "حصيرة منسوجة يدوياً"), price: 0, img: "", soldout: false },
    { id: "s5", cat: "shell", name: L("گردنبند صدفی", "Shell necklace", "قلادة من الأصداف"), desc: L("صدف‌های ساحل خلیج فارس", "Shells of the Persian Gulf coast", "أصداف ساحل الخليج الفارسي"), price: 0, img: "", soldout: false },
    { id: "s6", cat: "shell", name: L("قاب صدفی", "Shell frame", "إطار من الأصداف"), desc: L("هنر دست با صدف", "Shell handicraft", "حرفة يدوية بالأصداف"), price: 0, img: "", soldout: false },
    { id: "s7", cat: "native", name: L("خرمای محلی", "Local dates", "تمر محلي"), desc: L("سوغات خوراکی بوشهر", "An edible Bushehr souvenir", "هدية غذائية من بوشهر"), price: 0, img: "", soldout: false },
    { id: "s8", cat: "native", name: L("ادویه جنوبی", "Southern spices", "بهارات الجنوب"), desc: L("ادویه و چاشنی‌های بومی", "Local spices and seasonings", "بهارات ونكهات محلية"), price: 0, img: "", soldout: false },
  ],
  reviews: [],
};

export const CATS = ["wood", "wicker", "shell", "native"];
export const CAT_ICON = { wood: "🪵", wicker: "🧺", shell: "🐚", native: "🌴" };
