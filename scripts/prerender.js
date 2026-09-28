/* ==========================================================================
   AARAMBH — static prerender (no extra packages needed)
   --------------------------------------------------------------------------
   Runs after `vite build`. For every page x language (EN + Hindi) it writes a
   real HTML file (dist/services/<slug>/index.html, dist/hi/...) containing:
     - the correct <title>, meta description, canonical, hreflang, Open Graph,
       Twitter tags and JSON-LD structured data
     - a text snapshot of the page (h1, summary, benefits, FAQs, links)
   So Google, WhatsApp, Facebook, LinkedIn etc. see the right content and
   preview WITHOUT running JavaScript. React then takes over in the browser
   and replaces the snapshot.
   ========================================================================== */
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, unlinkSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import {
  SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_TITLE_HI, DEFAULT_OG_IMAGE,
} from "../src/seoConfig.js";
import { withLang } from "../src/i18nPaths.js";
import { orgSchemas, serviceSchemas } from "../src/seoSchemas.js";
import en from "../src/locales/en.js";
import hi from "../src/locales/hi.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

if (!existsSync(path.join(DIST, "index.html"))) {
  console.error("dist/index.html not found — run `vite build` first.");
  process.exit(1);
}

/* ---- load services data (image imports -> plain URL strings) ---- */
async function loadServices() {
  let src = readFileSync(path.join(ROOT, "src", "servicesData.js"), "utf8");
  const images = [];
  src = src.replace(/^import\s+(\w+)\s+from\s+"\.\/assets\/service_images\/([^"]+)";?\s*$/gm, (m, v, f) => {
    images.push(f);
    return `const ${v} = "/service-images/${f}";`;
  });
  if (/^import\s/m.test(src)) throw new Error("servicesData.js has an unexpected import — update scripts/prerender.js");
  const tmp = path.join(__dirname, ".tmp-servicesData.mjs");
  writeFileSync(tmp, src, "utf8");
  try {
    const mod = await import(pathToFileURL(tmp).href);
    return { services: mod.default, images };
  } finally {
    unlinkSync(tmp);
  }
}

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const jsonScript = (obj) =>
  `<script type="application/ld+json" data-seo="true">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

const LEGAL = {
  "/privacy": {
    en: ["Privacy Policy", "Read how Aarambh collects, uses and protects your personal information and documents when you use our government service guidance."],
    hi: ["गोपनीयता नीति", "आरंभ आपकी व्यक्तिगत जानकारी और दस्तावेज़ों को कैसे एकत्र, उपयोग और सुरक्षित करता है, जानें।"],
  },
  "/terms": {
    en: ["Terms of Service", "Terms and conditions for using Aarambh's guidance, documentation and government service assistance."],
    hi: ["सेवा की शर्तें", "आरंभ की मार्गदर्शन, दस्तावेज़ीकरण और सरकारी सेवा सहायता के उपयोग की नियम व शर्तें।"],
  },
  "/refund": {
    en: ["Refund Policy", "Aarambh's refund and cancellation policy for service facilitation charges."],
    hi: ["रिफंड नीति", "आरंभ की सेवा सुविधा शुल्क के लिए रिफंड और रद्दीकरण नीति।"],
  },
  "/delivery": {
    en: ["Delivery Policy", "How Aarambh delivers service updates, documents and application status to you, and expected timelines."],
    hi: ["डिलीवरी नीति", "आरंभ आपको सेवा अपडेट, दस्तावेज़ और आवेदन स्थिति कैसे और कब भेजता है।"],
  },
};

const SR_ONLY =
  "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";

function buildHead({ lang, path: p, title, description, image, jsonLd }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : lang === "hi" ? DEFAULT_TITLE_HI : DEFAULT_TITLE;
  const enUrl = SITE_URL + withLang(p, "en");
  const hiUrl = SITE_URL + withLang(p, "hi");
  const canonical = lang === "hi" ? hiUrl : enUrl;
  const img = image || `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  return [
    `<title>${esc(fullTitle)}</title>`,
    `<meta name="description" content="${esc(description)}" data-seo="true" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" data-seo="true" />`,
    `<link rel="canonical" href="${canonical}" data-seo="true" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}" data-seo="true" />`,
    `<link rel="alternate" hreflang="hi" href="${hiUrl}" data-seo="true" />`,
    `<link rel="alternate" hreflang="x-default" href="${enUrl}" data-seo="true" />`,
    `<meta property="og:type" content="website" data-seo="true" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" data-seo="true" />`,
    `<meta property="og:title" content="${esc(fullTitle)}" data-seo="true" />`,
    `<meta property="og:description" content="${esc(description)}" data-seo="true" />`,
    `<meta property="og:url" content="${canonical}" data-seo="true" />`,
    `<meta property="og:image" content="${img}" data-seo="true" />`,
    `<meta property="og:locale" content="${lang === "hi" ? "hi_IN" : "en_IN"}" data-seo="true" />`,
    `<meta name="twitter:card" content="summary_large_image" data-seo="true" />`,
    `<meta name="twitter:title" content="${esc(fullTitle)}" data-seo="true" />`,
    `<meta name="twitter:description" content="${esc(description)}" data-seo="true" />`,
    `<meta name="twitter:image" content="${img}" data-seo="true" />`,
    ...(jsonLd || []).map(jsonScript),
  ].join("\n  ");
}

function render(template, lang, headHtml, bodyHtml) {
  let html = template
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta name="(description|robots)"[\s\S]*?\/>\s*/gi, "")
    .replace(/<meta property="og:[^>]*>\s*/gi, "")
    .replace(/<meta name="twitter:[^>]*>\s*/gi, "")
    .replace(/<link rel="canonical"[^>]*>\s*/gi, "");
  html = html.replace("</head>", `  ${headHtml}\n</head>`);
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root"><div id="prerender" style="${SR_ONLY}">${bodyHtml}</div></div>`);
  return html;
}

function writePage(routePath, lang, html) {
  const urlPath = withLang(routePath, lang); // "/hi/services/x"
  const dir = urlPath === "/" ? DIST : path.join(DIST, ...urlPath.split("/").filter(Boolean));
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "index.html"), html, "utf8");
}

const links = (services, lang) =>
  `<ul>${services.map((s) => `<li><a href="${withLang("/services/" + s.id, lang)}">${esc(s.name[lang])}</a> — ${esc(s.summary[lang])}</li>`).join("")}</ul>`;

const nav = (t, lang) =>
  `<nav><a href="${withLang("/", lang)}">${esc(t.header.nav_home)}</a> <a href="${withLang("/services", lang)}">${esc(t.header.nav_services)}</a> <a href="${withLang("/about-us", lang)}">${esc(t.header.nav_about)}</a> <a href="${withLang("/contact-us", lang)}">${esc(t.header.nav_contact)}</a></nav>`;

async function main() {
  const template = readFileSync(path.join(DIST, "index.html"), "utf8");
  if (template.includes('id="prerender"')) {
    console.error("dist/index.html is already prerendered — run `npm run build` (not just `npm run prerender`) again.");
    process.exit(1);
  }
  const { services, images } = await loadServices();

  // copy service images so og:image can point at a stable URL
  const imgDir = path.join(DIST, "service-images");
  mkdirSync(imgDir, { recursive: true });
  for (const f of new Set(images)) {
    const from = path.join(ROOT, "src", "assets", "service_images", f);
    if (existsSync(from)) copyFileSync(from, path.join(imgDir, f));
  }

  let count = 0;
  for (const lang of ["en", "hi"]) {
    const t = lang === "hi" ? hi : en;

    // Home
    {
      const head = buildHead({ lang, path: "/", title: null, description: t.home.hero_sub, jsonLd: orgSchemas(t.home.hero_sub) });
      const body = `${nav(t, lang)}<h1>${esc(`${t.home.hero_title_pre} ${t.header.aarambh} —${t.home.hero_title_post}`)}</h1><p>${esc(t.home.hero_sub)}</p><h2>${esc(t.header.nav_services)}</h2>${links(services, lang)}`;
      writePage("/", lang, render(template, lang, head, body)); count++;
    }
    // Services list
    {
      const title = t.services.seo_title;
      const head = buildHead({ lang, path: "/services", title, description: t.services.seo_description });
      const body = `${nav(t, lang)}<h1>${esc(`${t.services.title_pre} ${t.services.title_em}`)}</h1><p>${esc(t.services.sub)}</p>${links(services, lang)}`;
      writePage("/services", lang, render(template, lang, head, body)); count++;
    }
    // About / Contact
    for (const [p, sec] of [["/about-us", t.about], ["/contact-us", t.contact]]) {
      const head = buildHead({ lang, path: p, title: sec.seo_title, description: sec.hero_lead });
      const h1 = `${sec.hero_title_pre || ""} ${sec.hero_title_em || ""} ${sec.hero_title_post || ""}`.replace(/\s+/g, " ").trim();
      const body = `${nav(t, lang)}<h1>${esc(h1)}</h1><p>${esc(sec.hero_lead)}</p>`;
      writePage(p, lang, render(template, lang, head, body)); count++;
    }
    // Legal
    for (const [p, v] of Object.entries(LEGAL)) {
      const [title, desc] = v[lang];
      const head = buildHead({ lang, path: p, title, description: desc });
      const body = `${nav(t, lang)}<h1>${esc(title)}</h1><p>${esc(desc)}</p>`;
      writePage(p, lang, render(template, lang, head, body)); count++;
    }
    // Every service
    for (const s of services) {
      const p = `/services/${s.id}`;
      const file = (String(s.image).match(/service-images\/(.+)$/) || [])[1];
      const head = buildHead({
        lang, path: p, title: s.name[lang], description: s.summary[lang],
        image: file ? `${SITE_URL}/service-images/${file}` : undefined,
        jsonLd: serviceSchemas(s, lang, t),
      });
      const related = services.filter((x) => x.id !== s.id && x.category.en === s.category.en).slice(0, 6);
      const body =
        `${nav(t, lang)}<h1>${esc(s.name[lang])}</h1><p>${esc(s.category[lang])} — ${esc(s.price[lang])}</p><p>${esc(s.summary[lang])}</p>` +
        `<h2>${esc(t.modal.benefits)}</h2><ul>${s.benefits[lang].map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` +
        `<h2>${esc(t.modal.faqs)}</h2>${s.faqs[lang].map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}` +
        (related.length ? `<h2>${lang === "hi" ? "संबंधित सेवाएं" : "Related services"}</h2><ul>${related.map((r) => `<li><a href="${withLang("/services/" + r.id, lang)}">${esc(r.name[lang])}</a></li>`).join("")}</ul>` : "");
      writePage(p, lang, render(template, lang, head, body)); count++;
    }
  }
  console.log(`✓ prerendered ${count} static HTML pages (EN + HI) into dist/`);
}

main().catch((e) => { console.error(e); process.exit(1); });
