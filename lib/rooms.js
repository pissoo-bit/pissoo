const L = (fa, en, ar) => ({ fa, en, ar });

export const FLOOR = {
  2: L("طبقه دوم", "Second floor", "الطابق الثاني"),
  0: L("همکف", "Ground floor", "الطابق الأرضي"),
};
export const WALL = {
  clay: L("کاهگلی", "Clay-and-straw plaster", "طين وتبن (كاهكل)"),
  white: L("گچ سفید", "White plaster", "جص أبيض"),
};
export const CEIL = {
  bolivo: L("بولیو (حصیری)", "Bolivo (woven reed mats)", "بوليو (حصير منسوج)"),
  bolivoChandal: L("بولیو (حصیری) و چندل", "Bolivo (woven reed) with chandal poles", "بوليو (حصير) مع جندل"),
  redwood: L("چوب و چهارتراش سرخ قدیمی", "Wood with old red squared beams", "خشب وعوارض حمراء مربعة قديمة"),
};
export const OPEN = {
  terrace: L("درب و پنجره‌های چوبی ساج قدیمی؛ رو به شناشیر (تراس) و خلیج فارس باز می‌شود", "Old teak wooden doors and windows opening onto the shanashir (terrace) and the Persian Gulf", "أبواب ونوافذ خشبية من الساج القديم تُفتح على الشناشير (الشرفة) والخليج الفارسي"),
  yard: L("درب و پنجره‌های چوبی ساج قدیمی؛ رو به حیاط و حوض باز می‌شود", "Old teak wooden doors and windows opening onto the courtyard and the pond", "أبواب ونوافذ خشبية من الساج القديم تُفتح على الفناء والحوض"),
  five: L("پنج‌دری چوبی ساج قدیمی با هلال؛ رو به شناشیر (تراس) و خلیج فارس باز می‌شود", "Old teak five-leaf wooden door with a crescent fanlight, opening onto the terrace and the Persian Gulf", "باب خشبي خماسي من الساج القديم بهلال علوي يُفتح على الشرفة والخليج الفارسي"),
};
export const BATH = {
  shared: L("سرویس بهداشتی عمومی در حیاط", "Shared toilet and shower in the yard", "حمام ومرحاض مشتركان في الفناء"),
  private: L("سرویس و حمام داخل اتاق", "Private bathroom inside the room", "حمام ومرحاض داخل الغرفة"),
};
export const BED = {
  floor: L("کف‌خواب (رختخواب به تعداد نفرات)", "Floor beds (bedding for every guest)", "فراش أرضي (الفراش بعدد النزلاء)"),
  single: L("یک تخت تک‌نفره؛ بقیه کف‌خواب", "One single bed; the other guests on floor beds", "سرير مفرد واحد والباقي على فراش أرضي"),
  double: L("تخت خواب دو نفره (دابل)", "Double bed", "سرير مزدوج (دابل)"),
};

export const ROOM_UI = {
  fa: { cap: "ظرفیت", floor: "طبقه", size: "اندازه", unit: "متر", bed: "خواب", wall: "دیوار", ceil: "سقف", open: "درب و پنجره", bath: "سرویس بهداشتی", ac: "سرمایش و گرمایش", split: "اسپلیت", fridge: "یخچال", has: "دارد", eco: "اقتصادی", photo: "عکس اتاق به‌زودی", note: "در اتاق‌های کف‌خواب، رختخواب به تعداد نفرات موجود است.", capText: (a, m, n) => `ظرفیت پایه ${n(a)} نفر؛ قابل افزایش تا ${n(m)} نفر (${n(a)} پایه + ${n(m - a)} نفر اضافه)` },
  en: { cap: "Capacity", floor: "Floor", size: "Size", unit: "m", bed: "Sleeping", wall: "Walls", ceil: "Ceiling", open: "Doors & windows", bath: "Bathroom", ac: "Cooling & heating", split: "Split unit", fridge: "Fridge", has: "Yes", eco: "Economy", photo: "Room photo coming soon", note: "In floor-bed rooms, bedding is provided for every guest.", capText: (a, m, n) => `Base capacity ${n(a)}; up to ${n(m)} guests (${n(a)} base + ${n(m - a)} extra)` },
  ar: { cap: "السعة", floor: "الطابق", size: "المساحة", unit: "م", bed: "النوم", wall: "الجدران", ceil: "السقف", open: "الأبواب والنوافذ", bath: "الحمام", ac: "التبريد والتدفئة", split: "سبليت", fridge: "ثلاجة", has: "متوفرة", eco: "اقتصادية", photo: "صورة الغرفة قريباً", note: "في غرف الفراش الأرضي، الفراش متوفر بعدد النزلاء.", capText: (a, m, n) => `السعة الأساسية ${n(a)}؛ تصل إلى ${n(m)} (${n(a)} أساسي + ${n(m - a)} إضافي)` },
};

const BASE = { price: 3800000, extra: 1600000, single: 2000000 };
const floorRoom = (num, emoji, pet, meaning) => ({
  id: `r${num}`, num, emoji, tier: "eco",
  name: L(`اتاق ${num} · ${pet[0]}`, `Room ${num} · ${pet[1]}`, `الغرفة ${num} · ${pet[2]}`),
  pet: L(pet[0], pet[1], pet[2]), meaning,
  desc: L("اتاق سنتی کف‌خواب، طبقه دوم، رو به شناشیر و خلیج فارس", "Traditional floor-bed room on the second floor, facing the shanashir and the Persian Gulf", "غرفة تقليدية بفراش أرضي في الطابق الثاني تطل على الشناشير والخليج الفارسي"),
  amen: [], capMin: 2, capMax: 6, ...BASE, img: "",
  spec: { floor: 2, size: [2.8, 6.5], bed: "floor", wall: "clay", ceil: "bolivo", open: "terrace", bath: "shared", ac: true, fridge: true },
});

export const ROOMS = [
  floorRoom(1, "🐦", ["پِلیسوک", "Pelisook", "بيليسوك"], L("یعنی پرستو در گویش بوشهری", "Means swallow in the Bushehri dialect", "تعني السنونو في اللهجة البوشهرية")),
  floorRoom(2, "🦋", ["پَرپَروک", "Parparook", "بربروك"], L("یعنی شاهپرک (پروانه) در گویش بوشهری", "Means butterfly in the Bushehri dialect", "تعني الفراشة في اللهجة البوشهرية")),
  floorRoom(3, "🦇", ["شُوپَر", "Shoopar", "شوبر"], L("یعنی خفاش در گویش بوشهری", "Means bat in the Bushehri dialect", "تعني الخفاش في اللهجة البوشهرية")),
  floorRoom(4, "🌸", ["کاکِیسو", "Kakisu", "كاكيسو"], L("یعنی یاکریم در گویش بوشهری", "Means lilac (yakarim) in the Bushehri dialect", "تعني الليلك (ياكريم) في اللهجة البوشهرية")),
  {
    id: "r6", num: 6, emoji: "🐥", tier: "eco",
    name: L("اتاق 6 · بوچیل", "Room 6 · Boochil", "الغرفة 6 · بوشيل"),
    pet: L("بوچیل", "Boochil", "بوشيل"),
    meaning: L("یعنی جوجه مرغ در گویش بوشهری", "Means chick in the Bushehri dialect", "تعني الكتكوت في اللهجة البوشهرية"),
    desc: L("طبقه همکف، رو به حیاط و حوض؛ دارای یک تخت تک‌نفره", "Ground floor, facing the courtyard and pond, with one single bed", "الطابق الأرضي، تطل على الفناء والحوض، بسرير مفرد واحد"),
    amen: [], capMin: 2, capMax: 4, ...BASE, img: "",
    spec: { floor: 0, size: [3, 4], bed: "single", wall: "white", ceil: "bolivoChandal", open: "yard", bath: "shared", ac: true, fridge: true },
  },
  {
    id: "r7", num: 7, emoji: "🧣", tier: "",
    name: L("اتاق 7 · مِینار", "Room 7 · Meynar", "الغرفة 7 · مينار"),
    pet: L("مِینار", "Meynar", "مينار"),
    meaning: L("شال رنگ‌روشن و نازک (توری) که خانم‌های جوان بر سر می‌گذارند", "A light-coloured, thin lace shawl that young women wear on their heads", "وشاح خفيف شفاف فاتح اللون ترتديه الشابات على رؤوسهن"),
    desc: L("طبقه دوم، تخت دو نفره دابل، سرویس و حمام داخل اتاق، رو به شناشیر و خلیج فارس", "Second floor, double bed, private bathroom, facing the shanashir and the Persian Gulf", "الطابق الثاني، سرير مزدوج، حمام خاص، يطل على الشناشير والخليج الفارسي"),
    amen: [], capMin: 2, capMax: 4, price: 5600000, extra: 2000000, single: 2000000, img: "",
    spec: { floor: 2, size: [3.5, 7], bed: "double", wall: "white", ceil: "redwood", open: "five", bath: "private", ac: true, fridge: true },
  },
  {
    id: "r8", num: 8, emoji: "🌊", tier: "",
    name: L("اتاق 8 · مُرمما", "Room 8 · Mormama", "الغرفة 8 · مُرمما"),
    pet: L("مُرمما", "Mormama", "مُرمما"),
    meaning: L("حالتی از جریان موج دریا که ماشوهه (قایق پارویی تک‌نفره کوچک) یا هر شناور دیگر را گهواره‌وار تکان می‌دهد و آرامشی خاص می‌بخشد", "A way the sea's waves move that rocks a mashooheh (a small one-person rowing boat) or any other vessel like a cradle, giving a special calm", "حالة من حركة موج البحر تهزّ الماشوهة (قارب تجديف صغير لشخص واحد) أو أي مركب كأنها مهد، وتمنح هدوءاً خاصاً"),
    desc: L("طبقه دوم، بزرگ‌ترین اتاق؛ تخت دو نفره دابل، سرویس و حمام داخل اتاق، رو به شناشیر و خلیج فارس", "Second floor, the largest room; double bed, private bathroom, facing the shanashir and the Persian Gulf", "الطابق الثاني، أكبر غرفة؛ سرير مزدوج، حمام خاص، تطل على الشناشير والخليج الفارسي"),
    amen: [], capMin: 2, capMax: 4, price: 6000000, extra: 2000000, single: 2000000, img: "",
    spec: { floor: 2, size: [4.5, 7], bed: "double", wall: "white", ceil: "redwood", open: "five", bath: "private", ac: true, fridge: true },
  },
];
