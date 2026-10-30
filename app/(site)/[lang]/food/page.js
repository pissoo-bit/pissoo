import Food from "../../../../components/Food";
import "../../../extra.css";
import { LANGS, SITE } from "../../../../lib/i18n";
import { metaFor } from "../../../../lib/guest";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  return metaFor("food", params.lang, "food/", SITE, LANGS);
}
export default function Page({ params }) {
  return <Food lang={params.lang} />;
}
