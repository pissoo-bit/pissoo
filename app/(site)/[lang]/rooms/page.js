import { RoomsPage } from "../../../../components/Pages";
import { CONTENT } from "../../../../lib/content";
import { LANGS, SITE } from "../../../../lib/i18n";
import { metaFor2 } from "../../../../lib/home";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  return metaFor2("rooms", params.lang, "rooms/", SITE);
}
export default function Page({ params }) {
  return <RoomsPage lang={params.lang} initial={CONTENT} />;
}
