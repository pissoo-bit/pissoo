const NONEMPTY_NOTE = 0;
void NONEMPTY_NOTE;
const SITE = "https://pissoo.ir";
const LANGS = ["fa", "en", "ar"];
const PATHS = ["", "about/", "rooms/", "experiences/", "food/", "around/", "culture/", "shop/", "winds/", "gallery/", "rules/", "contact/"];

export const dynamic = "force-static";

export default function sitemap() {
  return PATHS.flatMap((p) =>
    LANGS.map((l) => ({
      url: `${SITE}/${l}/${p}`,
      lastModified: new Date(),
      alternates: { languages: { ...Object.fromEntries(LANGS.map((x) => [x, `${SITE}/${x}/${p}`])), "x-default": `${SITE}/fa/${p}` } },
    }))
  );
}
