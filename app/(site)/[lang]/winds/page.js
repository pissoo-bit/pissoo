import Winds from "../../../../components/Winds";
import "./winds.css";
import { LANGS, SITE } from "../../../../lib/i18n";
import { WINDS_META } from "../../../../lib/winds";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const lang = params.lang;
  const m = WINDS_META[lang];
  const languages = Object.fromEntries(LANGS.map((l) => [l, `${SITE}/${l}/winds/`]));
  languages["x-default"] = `${SITE}/fa/winds/`;
  return {
    title: m.title,
    description: m.desc,
    alternates: { canonical: `${SITE}/${lang}/winds/`, languages },
    openGraph: { title: m.title, description: m.desc, url: `${SITE}/${lang}/winds/`, siteName: "Pissoo", type: "article", images: [{ url: "/hero/hero-1.jpg" }] },
  };
}

export default function Page({ params }) {
  return <Winds lang={params.lang} />;
}
