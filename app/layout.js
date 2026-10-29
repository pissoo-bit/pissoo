import "./globals.css";
export const metadata = {
  title: "خونه بومگردی پیسو - خانه ساحلی بوشهر",
  description: "خونه بومگردی پیسو؛ اقامتگاه ساحلی در بوشهر، گالری، تورها و محصولات محلی",
};
export default function RootLayout({ children }) {
  return (<html lang="fa" dir="rtl"><body>{children}</body></html>);
}
