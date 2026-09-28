import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* ==========================================================================
   AARAMBH — Analytics + search-engine verification (all optional)
   --------------------------------------------------------------------------
   Put these in your .env file (see .env.example) — nothing loads if empty:
     VITE_GA_MEASUREMENT_ID   = G-XXXXXXXXXX     (Google Analytics 4)
     VITE_GSC_VERIFICATION    = token from Google Search Console (HTML tag method)
     VITE_BING_VERIFICATION   = token from Bing Webmaster Tools
   SPA page views are sent automatically on every route change.
   ========================================================================== */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GSC = import.meta.env.VITE_GSC_VERIFICATION;
const BING = import.meta.env.VITE_BING_VERIFICATION;

function addMeta(name, content) {
  if (!content || document.head.querySelector(`meta[name="${name}"]`)) return;
  const m = document.createElement("meta");
  m.name = name;
  m.content = content;
  document.head.appendChild(m);
}

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    addMeta("google-site-verification", GSC);
    addMeta("msvalidate.01", BING);

    if (!GA_ID || window.gtag) return;
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
  }, []);

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);

  return null;
}
