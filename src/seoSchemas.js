import { SITE_URL, SITE_NAME, ORG_PHONE, ORG_ADDRESS, ORG_EMAIL } from "./seoConfig.js";
import { withLang } from "./i18nPaths.js";

/* Pure structured-data builders — used by the React pages AND by
   scripts/prerender.js, so what Google reads in the raw HTML is identical to
   what the app injects after load. */

export function orgSchemas(description) {
  return [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og-default.jpg`,
      description,
      telephone: ORG_PHONE,
      email: ORG_EMAIL,
      address: ORG_ADDRESS,
      areaServed: { "@type": "Country", name: "India" },
      priceRange: "₹₹",
      sameAs: ["https://www.instagram.com/aarambhindia2026"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: ["en-IN", "hi-IN"],
    },
  ];
}

export function serviceSchemas(service, language, t) {
  const name = service.name?.[language];
  const summary = service.summary?.[language];
  const category = service.category?.[language];
  const faqs = service.faqs?.[language] || [];
  const priceMatch = String(service.price?.en || "").match(/(\d[\d,]*)/);
  const priceNumber = priceMatch ? priceMatch[1].replace(/,/g, "") : null;
  const pageUrl = SITE_URL + withLang(`/services/${service.id}`, language);

  const out = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name,
      description: summary,
      url: pageUrl,
      inLanguage: language === "hi" ? "hi-IN" : "en-IN",
      areaServed: { "@type": "Country", name: "India" },
      serviceType: category,
      provider: { "@id": `${SITE_URL}/#organization` },
      ...(priceNumber
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: priceNumber,
              url: pageUrl,
              availability: "https://schema.org/InStock",
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.header?.nav_home || "Home", item: SITE_URL + withLang("/", language) },
        { "@type": "ListItem", position: 2, name: t.header?.nav_services || "Services", item: SITE_URL + withLang("/services", language) },
        { "@type": "ListItem", position: 3, name, item: pageUrl },
      ],
    },
  ];

  if (faqs.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return out;
}
