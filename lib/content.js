import { DEFAULT_CONTENT } from "./defaults";
import { IG_URL, GMAP_URL } from "./guest";
import { ROOMS } from "./rooms";
import { CULTURE } from "./culture";
import { EXPERIENCES } from "./exp";

const L = (fa, en, ar) => ({ fa, en, ar });

export const CONTENT = {
  ...DEFAULT_CONTENT,
  settings: {
    ...DEFAULT_CONTENT.settings,
    instagram: IG_URL,
    mapUrl: GMAP_URL,
    address: L("بوشهر، تنگستان، دلوار، بندر رستمی", "Bandar Rostami, Delvar, Tangestan, Bushehr", "بندر رستمي، دلوار، تنگستان، بوشهر"),
  },
  gallery: ["/house/pissoo-1.jpg", "/house/pissoo-2.jpg", "/house/pissoo-3.jpg", "/house/pissoo-4.jpg"],
  rooms: ROOMS,
  culture: CULTURE,
  packages: EXPERIENCES,
};
