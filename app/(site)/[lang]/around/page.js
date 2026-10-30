import Around from "../../../../components/Around";
import "../../../extra.css";
import { LANGS, SITE } from "../../../../lib/i18n";
import { metaFor } from "../../../../lib/guest";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  return metaFor("around", params.lang, "around/", SITE, LANGS);
}
export default function Page({ params }) {
  return <Around lang={params.lang} />;
}
