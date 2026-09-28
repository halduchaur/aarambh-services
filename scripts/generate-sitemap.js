/* ==========================================================================
   AARAMBH — sitemap.xml generator (English + Hindi with hreflang)
   Run: npm run sitemap   (also runs automatically after `npm run build`)
   Writes to public/sitemap.xml AND dist/sitemap.xml (if dist exists).
   ========================================================================== */
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { SITE_URL } from "../src/seoConfig.js";
import { withLang } from "../src/i18nPaths.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const STATIC_ROUTES = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/services", changefreq: "weekly", priority: "0.9" },
  { loc: "/about-us", changefreq: "monthly", priority: "0.6" },
  { loc: "/contact-us", changefreq: "monthly", priority: "0.6" },
  { loc: "/privacy", changefreq: "yearly", priority: "0.2" },
  { loc: "/terms", changefreq: "yearly", priority: "0.2" },
  { loc: "/refund", changefreq: "yearly", priority: "0.2" },
  { loc: "/delivery", changefreq: "yearly", priority: "0.2" },
];

function getServiceSlugs() {
  const text = readFileSync(path.join(ROOT, "src", "servicesData.js"), "utf8");
  const startIdx = text.indexOf("const SERVICES = [");
  const scan = startIdx === -1 ? text : text.slice(startIdx);
  return [...new Set([...scan.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]))];
}

function entry(loc, changefreq, priority, today) {
  const en = SITE_URL + withLang(loc, "en");
  const hi = SITE_URL + withLang(loc, "hi");
  const alt = `    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="hi" href="${hi}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />`;
  return [en, hi].map((u) => `  <url>
    <loc>${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alt}
  </url>`).join("\n");
}

export function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const slugs = getServiceSlugs();
  const urls = [
    ...STATIC_ROUTES.map((r) => entry(r.loc, r.changefreq, r.priority, today)),
    ...slugs.map((s) => entry(`/services/${s}`, "monthly", "0.7", today)),
  ];
  return {
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`,
    count: (STATIC_ROUTES.length + slugs.length) * 2,
    slugs: slugs.length,
  };
}

const { xml, count, slugs } = buildSitemap();
for (const dir of ["public", "dist"]) {
  const d = path.join(ROOT, dir);
  if (dir === "public" && !existsSync(d)) mkdirSync(d, { recursive: true });
  if (existsSync(d)) writeFileSync(path.join(d, "sitemap.xml"), xml, "utf8");
}
console.log(`✓ sitemap.xml: ${count} URLs (${slugs} services × EN+HI + static pages)`);
