import { useContext } from "react";
import { Link as RRLink, NavLink as RRNavLink } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import { withLang } from "./i18nPaths";

/* ==========================================================================
   AARAMBH — URL based language helpers
   English lives at   /services/pan-card
   Hindi lives at     /hi/services/pan-card
   The URL is the single source of truth for the language (this is what lets
   Google index both versions separately and use hreflang).
   Pure helpers live in ./i18nPaths.js
   ========================================================================== */

function useLocalizedTo(to) {
  const { language } = useContext(LanguageContext);
  if (typeof to === "string" && to.startsWith("/")) return withLang(to, language);
  return to;
}

export function Link({ to, ...rest }) {
  return <RRLink to={useLocalizedTo(to)} {...rest} />;
}

export function NavLink({ to, ...rest }) {
  return <RRNavLink to={useLocalizedTo(to)} {...rest} />;
}
