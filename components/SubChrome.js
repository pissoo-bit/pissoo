import NavBar from "./NavBar";
import SiteFooter from "./SiteFooter";

export function SubHeader({ lang, current, path }) {
  return <NavBar lang={lang} current={current} path={path} />;
}

export function SubFooter({ lang }) {
  return <SiteFooter lang={lang} />;
}
