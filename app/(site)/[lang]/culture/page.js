import CulturePage from "../../../../components/CulturePage";
import { CONTENT } from "../../../../lib/content";
import { LANGS, SITE } from "../../../../lib/i18n";
import { metaCulture } from "../../../../lib/culture";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  return metaCulture(params.lang, SITE);
}
export default function Page({ params }) {
  return <CulturePage lang={params.lang} initial={CONTENT} />;
}
