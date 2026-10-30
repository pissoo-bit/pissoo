import { DEFAULT_CONTENT } from "./defaults";
import { IG_URL, GMAP_URL } from "./guest";

const L = (fa, en, ar) => ({ fa, en, ar });

const rd = (a, b) => ({ fa: a, en: b });
void rd;

export const CONTENT = {
  ...DEFAULT_CONTENT,
  settings: {
    ...DEFAULT_CONTENT.settings,
    instagram: IG_URL,
    mapUrl: GMAP_URL,
    address: L("بوشهر، تنگستان، دلوار، بندر رستمی", "Bandar Rostami, Delvar, Tangestan, Bushehr", "بندر رستمي، دلوار، تنگستان، بوشهر"),
  },
  rooms: [
    {
      id: "r1",
      name: L("اتاق‌های ۱ تا ۴", "Rooms 1–4", "الغرف ١–٤"),
      desc: L("طبقه دوم؛ درب و پنجره‌ها رو به تراس مشرف به دریا. کف‌خواب؛ رختخواب به تعداد موجود.", "Second floor; door and windows open onto the terrace overlooking the sea. Floor beds, with bedding for each guest.", "الطابق الثاني؛ الباب والنوافذ تطل على الشرفة المشرفة على البحر. فراش أرضي مع فراش بعدد النزلاء."),
      amen: ["terrace", "floorbed", "fridge", "bathShared", "ac"],
      capMin: 2, capMax: 6, price: 3800000, extra: 1600000, single: 2000000, img: "",
    },
    {
      id: "r6",
      name: L("اتاق ۶", "Room 6", "الغرفة ٦"),
      desc: L("در حیاط؛ یک تخت یک‌نفره و سه نفر کف‌خواب (رختخواب به تعداد موجود).", "In the courtyard; one single bed plus three guests on floor beds (bedding provided).", "في الفناء؛ سرير مفرد واحد وثلاثة نزلاء على فراش أرضي (الفراش متوفر)."),
      amen: ["yard", "singlebed", "floorbed", "fridge", "bathShared", "ac"],
      capMin: 1, capMax: 4, price: 3800000, extra: 1600000, single: 2000000, img: "",
    },
    {
      id: "r7",
      name: L("اتاق ۷", "Room 7", "الغرفة ٧"),
      desc: L("طبقه دوم؛ درب اتاق به تراس مشرف به دریا باز می‌شود. تخت دو نفره، یخچال و مستر (سرویس و حمام داخل اتاق). نفر اضافه کف‌خواب.", "Second floor; the door opens onto the terrace overlooking the sea. Double bed, fridge and private bathroom. Extra guests sleep on floor beds.", "الطابق الثاني؛ يفتح باب الغرفة على الشرفة المشرفة على البحر. سرير مزدوج وثلاجة وحمام خاص. النزيل الإضافي ينام على فراش أرضي."),
      amen: ["terrace", "doublebed", "floorbed", "fridge", "bathPrivate", "ac"],
      capMin: 2, capMax: 4, price: 5600000, extra: 2000000, single: 0, img: "",
    },
    {
      id: "r8",
      name: L("سراچه ۸", "Sarache 8", "سراچة ٨"),
      desc: L("طبقه دوم؛ درب اتاق به تراس مشرف به دریا باز می‌شود. تخت دو نفره، یخچال و مستر (سرویس و حمام داخل اتاق). نفر اضافه کف‌خواب.", "Second floor; the door opens onto the terrace overlooking the sea. Double bed, fridge and private bathroom. Extra guests sleep on floor beds.", "الطابق الثاني؛ يفتح باب الغرفة على الشرفة المشرفة على البحر. سرير مزدوج وثلاجة وحمام خاص. النزيل الإضافي ينام على فراش أرضي."),
      amen: ["terrace", "doublebed", "floorbed", "fridge", "bathPrivate", "ac"],
      capMin: 2, capMax: 5, price: 6000000, extra: 2000000, single: 0, img: "",
    },
  ],
  packages: [
    ...DEFAULT_CONTENT.packages,
    { id: "p6", name: L("گشت دریایی با قایق", "Sea boat tour", "جولة بحرية بالقارب"), desc: L("با هماهنگی قبلی", "By prior arrangement", "بتنسيق مسبق"), duration: L("نیم‌روز", "Half day", "نصف يوم"), price: 0, img: "" },
    { id: "p7", name: L("موج‌سواری پارویی (SUP) با آموزش", "Stand-up paddle boarding (SUP) with instruction", "ركوب الأمواج بالمجداف (SUP) مع تدريب"), desc: L("اجاره یک ساعت ۸۰۰٬۰۰۰ تومان، آموزش اولیه ۴۰۰٬۰۰۰ تومان", "One hour rental 800,000 toman; basic lesson 400,000 toman", "إيجار ساعة ٨٠٠٬٠٠٠ تومان، تدريب تمهيدي ٤٠٠٬٠٠٠ تومان"), duration: L("یک ساعت", "One hour", "ساعة"), price: 0, img: "" },
  ],
};
