/* ==========================================================================
   AARAMBH — SEO Configuration
   --------------------------------------------------------------------------
   Central place for site-wide SEO constants. Update SITE_URL once you know
   your real production domain — every other SEO file (sitemap generator,
   robots.txt reference, canonical URLs, structured data) reads from here.
   ========================================================================== */

// TODO: replace with your real, live production domain (no trailing slash)
export const SITE_URL = "https://www.aarambhindia.com";

export const SITE_NAME = "Aarambh";

export const DEFAULT_TITLE =
  "Aarambh | India's Trusted Helpdesk for Government Services";

export const DEFAULT_DESCRIPTION =
  "Aarambh helps you complete Aadhaar, PAN, certificates, pension, passport and 50+ government services online — guided WhatsApp support, simple web forms and expert help, end to end.";

// TODO: add a real 1200x630px image at public/og-default.jpg for social share previews
export const DEFAULT_OG_IMAGE = "/og-default.jpg";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/aarambhindia2026",
};

export const ORG_EMAIL = "aarambhindia89@gmail.com";

/* ---- Business details used for LocalBusiness structured data ---- */
export const ORG_PHONE = "+919096759855";
export const ORG_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Jalna",
  addressRegion: "Maharashtra",
  addressCountry: "IN",
};

export const DEFAULT_TITLE_HI = "आरंभ | सरकारी सेवाओं के लिए भारत का भरोसेमंद हेल्पडेस्क";
