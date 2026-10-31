import Site from "../../../components/Site";
import { CONTENT } from "../../../lib/content";
import { LANGS, SITE, T } from "../../../lib/i18n";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function Page({ params }) {
  const lang = params.lang;
  const t = T[lang];
  const ld = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: lang === "fa" ? "خونه بومگردی پیسو" : "Pissoo Eco-Lodge",
    alternateName: "Pissoo House",
    description: t.desc,
    url: `${SITE}/${lang}/`,
    logo: `${SITE}/logo.png`,
    image: `${SITE}/hero/hero-1.jpg`,
    telephone: "+989938338277",
    availableLanguage: ["fa", "en", "ar"],
    checkinTime: "14:00",
    checkoutTime: "12:00",
    petsAllowed: true,
    address: { "@type": "PostalAddress", streetAddress: "Bandar Rostami, Delvar, Tangestan", addressLocality: "Bandar Rostami", addressRegion: "Bushehr", addressCountry: "IR" },
    sameAs: ["https://wa.me/989938338277", "https://t.me/+989938338277", "https://instagram.com/Pissoo.Bushehr"],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Site lang={lang} initial={CONTENT} />
    </>
  );
}
