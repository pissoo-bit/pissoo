import "../../globals.css";
import "../../theme.css";
import { Vazirmatn, Lalezar } from "next/font/google";
import { LANGS, META, SITE, T } from "../../../lib/i18n";
import DolphinTrail from "../../../components/DolphinTrail";
import HoverSound from "../../../components/HoverSound";

const font = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap", variable: "--font" });
const display = Lalezar({ subsets: ["arabic", "latin"], weight: "400", display: "swap", variable: "--font-display" });

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const lang = params.lang;
  const t = T[lang];
  const languages = Object.fromEntries(LANGS.map((l) => [l, `${SITE}/${l}/`]));
  languages["x-default"] = `${SITE}/fa/`;
  return {
    metadataBase: new URL(SITE),
    title: t.title,
    description: t.desc,
    alternates: { canonical: `${SITE}/${lang}/`, languages },
    icons: {
      icon: [{ url: "/logo/favicon.ico" }, { url: "/logo/icon-32.png", sizes: "32x32", type: "image/png" }, { url: "/logo/icon-192.png", sizes: "192x192", type: "image/png" }],
      apple: [{ url: "/logo/apple-touch-icon.png", sizes: "180x180" }],
    },
    openGraph: { title: t.title, description: t.desc, url: `${SITE}/${lang}/`, siteName: "Pissoo", locale: META[lang].locale, type: "website", images: [{ url: "/logo/og.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: t.title, description: t.desc, images: ["/logo/og.png"] },
    robots: { index: true, follow: true },
  };
}

export default function Layout({ children, params }) {
  const lang = params.lang;
  return (
    <html lang={lang} dir={META[lang].dir}>
      <body className={`${font.variable} ${display.variable}`}>
        {children}
        <DolphinTrail />
        <HoverSound lang={lang} />
      </body>
    </html>
  );
}
