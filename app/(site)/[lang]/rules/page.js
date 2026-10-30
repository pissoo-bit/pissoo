import Rules from "../../../../components/Rules";
import "../../../extra.css";
import { LANGS, SITE } from "../../../../lib/i18n";
import { metaFor } from "../../../../lib/guest";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  return metaFor("rules", params.lang, "rules/", SITE, LANGS);
}
export default function Page({ params }) {
  return <Rules lang={params.lang} />;
}
