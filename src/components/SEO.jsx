import { useContext, useEffect } from "react";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_TITLE_HI,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
} from "../seoConfig";
import { LanguageContext } from "../LanguageContext";
import { withLang } from "../i18nPaths";

/* ==========================================================================
   AARAMBH — <SEO /> component
   --------------------------------------------------------------------------
   Dependency-free replacement for react-helmet. Updates document.title and
   <meta>/<link> tags whenever a page mounts or its props change.

   `path` is the LANGUAGE-NEUTRAL path (e.g. "/services/pan-card"). The
   component builds the correct canonical for the current language
   (/hi/... for Hindi) plus hreflang alternates (en, hi, x-default).

     <SEO title="Aadhaar Address Update" description="..." path="/services/x"
          image={url} jsonLd={obj | [obj]} noindex />
   ========================================================================== */

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("data-seo", "true");
  el.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]:not([hreflang])`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("data-seo", "true");
  el.setAttribute("href", href);
}

function setAlternates(alts) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  alts.forEach(({ hreflang, href }) => {
    const el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hreflang);
    el.setAttribute("href", href);
    el.setAttribute("data-seo", "true");
    document.head.appendChild(el);
  });
}

function setJsonLd(jsonLd) {
  document.head
    .querySelectorAll('script[type="application/ld+json"][data-seo="true"]')
    .forEach((el) => el.remove());
  if (!jsonLd) return;
  const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  items.forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "true");
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
  noindex = false,
  jsonLd = null,
}) {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : (language === "hi" ? DEFAULT_TITLE_HI : DEFAULT_TITLE);
    const enUrl = SITE_URL + withLang(path, "en");
    const hiUrl = SITE_URL + withLang(path, "hi");
    const canonicalUrl = language === "hi" ? hiUrl : enUrl;
    const ogImage = image
      ? image.startsWith("http") ? image : `${SITE_URL}${image}`
      : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

    document.documentElement.lang = language;
    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1");

    setLinkTag("canonical", canonicalUrl);
    if (noindex) setAlternates([]);
    else setAlternates([
      { hreflang: "en", href: enUrl },
      { hreflang: "hi", href: hiUrl },
      { hreflang: "x-default", href: enUrl },
    ]);

    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:locale", language === "hi" ? "hi_IN" : "en_IN");

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    setJsonLd(jsonLd);
  }, [title, description, path, image, noindex, jsonLd, language]);

  return null;
}
