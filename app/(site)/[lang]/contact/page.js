import ContactPage from "../../../../components/ContactPage";
import { CONTENT } from "../../../../lib/content";
import { LANGS, SITE } from "../../../../lib/i18n";
import { metaFor2 } from "../../../../lib/home";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  return metaFor2("contact", params.lang, "contact/", SITE);
}
export default function Page({ params }) {
  return <ContactPage lang={params.lang} initial={CONTENT} />;
}
