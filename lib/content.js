import { DEFAULT_CONTENT } from "./defaults";
import { IG_URL, GMAP_URL } from "./guest";
import { ROOMS } from "./rooms";
import { CULTURE } from "./culture";

const L = (fa, en, ar) => ({ fa, en, ar });

export const CONTENT = {
  ...DEFAULT_CONTENT,
  settings: {
    ...DEFAULT_CONTENT.settings,
    instagram: IG_URL,
    mapUrl: GMAP_URL,
    address: L("بوشهر، تنگستان، دلوار، بندر رستمی", "Bandar Rostami, Delvar, Tangestan, Bushehr", "بندر رستمي، دلوار، تنگستان، بوشهر"),
  },
  rooms: ROOMS,
  culture: CULTURE,
  packages: [
    ...DEFAULT_CONTENT.packages,
    { id: "p6", name: L("گشت دریایی با قایق", "Sea boat tour", "جولة بحرية بالقارب"), desc: L("با هماهنگی قبلی", "By prior arrangement", "بتنسيق مسبق"), duration: L("نیم‌روز", "Half day", "نصف يوم"), price: 0, img: "" },
    { id: "p7", name: L("موج‌سواری پارویی (SUP) با آموزش", "Stand-up paddle boarding (SUP) with instruction", "ركوب الأمواج بالمجداف (SUP) مع تدريب"), desc: L("اجاره یک ساعت ۸۰۰٬۰۰۰ تومان، آموزش اولیه ۴۰۰٬۰۰۰ تومان", "One hour rental 800,000 toman; basic lesson 400,000 toman", "إيجار ساعة ٨٠٠٬٠٠٠ تومان، تدريب تمهيدي ٤٠٠٬٠٠٠ تومان"), duration: L("یک ساعت", "One hour", "ساعة"), price: 0, img: "" },
  ],
};
