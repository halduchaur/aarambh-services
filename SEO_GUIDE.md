# Aarambh — SEO Guide (Phase 2 complete)

## What is implemented
**Indexing & structure**
- 54 real service pages: `/services/<slug>` (English) and `/hi/services/<slug>` (Hindi)
- Every page exists in English AND Hindi with separate URLs (`/hi/...`), `hreflang` (en, hi, x-default), correct canonical and `og:locale`
- The language toggle now switches the URL (same page, other language)
- **Static prerender**: `npm run build` writes 124 real HTML files (62 pages x 2 languages) with title, description, canonical, hreflang, Open Graph, Twitter tags, JSON-LD and a text snapshot, so Google, WhatsApp, Facebook and LinkedIn previews work without JavaScript
- `sitemap.xml` (124 URLs with hreflang alternates), `robots.txt`, 404 page with `noindex`

**Structured data (schema.org)**
- Home: Organization + LocalBusiness (Jalna, Maharashtra, phone, email) + WebSite
- Each service: Service (+ price Offer in INR), BreadcrumbList, FAQPage

**Ranking helpers**
- Related-services links on every service page (internal linking)
- Route-based code splitting (main JS ~967 KB -> ~330 KB), long-cache headers in `vercel.json`
- Fragile CSS `@import` font loading removed; all fonts load once from `index.html`
- Optional Google Analytics 4 + Search Console + Bing verification via `.env` (see `.env.example`), with SPA page-view tracking

## MUST DO before going live
1. Replace `https://www.aarambhindia.com` with your real domain in: `src/seoConfig.js`, `public/robots.txt`, `index.html`, then run `npm run build`
2. Deploy the `dist/` folder as-is. Always build with `npm run build` (it runs sitemap + prerender itself).

## Manual steps (need your accounts)
1. Google Search Console: add site, put the verification token in `.env` as `VITE_GSC_VERIFICATION`, rebuild, Verify, submit `/sitemap.xml`
2. Google Analytics 4: put `G-XXXX` in `.env` as `VITE_GA_MEASUREMENT_ID`
3. Bing Webmaster Tools: `VITE_BING_VERIFICATION`
4. Google Business Profile (Jalna): biggest local-SEO boost; collect Google reviews
5. Test with Rich Results Test and PageSpeed Insights

## Adding / editing services
Edit `src/servicesData.js` (unique `id`). Pages, sitemap, hreflang, schema and prerender update on the next build.

## Growth ideas (content + off-page, code cannot do these)
- Blog/guides in Hindi + English linked to service pages
- Listings: Justdial, Sulekha, IndiaMart, local directories; Instagram/YouTube tutorials linking to service pages
- Backlinks from local sites, consistent name/phone/address everywhere
