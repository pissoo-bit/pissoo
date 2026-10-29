import "../../globals.css";
export const metadata = { title: "پنل مدیریت پیسو", robots: { index: false, follow: false } };
export default function AdminLayout({ children }) {
  return (<html lang="fa" dir="rtl"><body>{children}</body></html>);
}
