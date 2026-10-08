import "./services_directory.css";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "./i18nRouting";
import { LanguageContext } from "./LanguageContext";
import SEO from "./components/SEO";
import servicesData from "./servicesData";
import pageCopy from "./services_page_copy";
import CategoryGlyph from "./CategoryGlyph";
import ServiceEntry from "./ServiceEntry";

const SORTS = ["recommended", "price-asc", "price-desc", "name"];

const priceOf = (service) => {
    const m = service.price?.en?.match(/₹\s*([\d,]+)/);
    return m ? Number(m[1].replace(/,/g, "")) : Infinity;
};

// Search text for each service (both languages), built once — the data is static.
const INDEXED = servicesData.map((service) => ({
    service,
    hay: [
        service.id?.replace(/-/g, " "),
        service.name?.en, service.name?.hi,
        service.summary?.en, service.summary?.hi,
        service.category?.en, service.category?.hi,
    ].filter(Boolean).join(" ").toLowerCase(),
}));

// Categories in order of first appearance in servicesData.
const CATEGORIES = (() => {
    const seen = new Map();
    servicesData.forEach((s) => {
        if (s.category?.en && !seen.has(s.category.en)) seen.set(s.category.en, s.category);
    });
    return [...seen.values()];
})();

const waHref = (text) =>
    `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export default function Services() {
    const { language } = useContext(LanguageContext);
    const copy = pageCopy[language] || pageCopy.en;

    // Filters live in the URL so "back" from a service page keeps your place
    // and a filtered view can be shared.
    const [params, setParams] = useSearchParams();
    const catParam = params.get("cat") || "all";
    const activeCat = CATEGORIES.some((c) => c.en === catParam) ? catParam : "all";
    const urlQuery = params.get("q") || "";
    const sortParam = params.get("sort");
    const sort = SORTS.includes(sortParam) ? sortParam : "recommended";

    // Always read the *latest* params (the debounce timer below outlives renders).
    const paramsRef = useRef(params);
    useEffect(() => { paramsRef.current = params; });

    const updateParams = (patch) => {
        const next = new URLSearchParams(paramsRef.current);
        Object.entries(patch).forEach(([key, value]) => {
            const isDefault = !value || value === "all" || (key === "sort" && value === "recommended");
            if (isDefault) next.delete(key);
            else next.set(key, value);
        });
        setParams(next, { replace: true });
    };

    // The input keeps its own state (smooth typing, Hindi IME safe); the URL
    // follows a moment later.
    const [query, setQuery] = useState(urlQuery);
    const [seenUrlQuery, setSeenUrlQuery] = useState(urlQuery);
    if (urlQuery !== seenUrlQuery) {
        // URL changed from outside (back/forward, reset) — adopt it.
        setSeenUrlQuery(urlQuery);
        setQuery(urlQuery);
    }
    useEffect(() => {
        if (query === urlQuery) return undefined;
        const id = setTimeout(() => {
            const latest = paramsRef.current.get("q") || "";
            if (latest !== query) updateParams({ q: query.trim() ? query : "" });
        }, 300);
        return () => clearTimeout(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const needle = query.trim().toLowerCase();

    const searchMatched = useMemo(() => {
        const words = needle.split(/\s+/).filter(Boolean);
        return words.length ? INDEXED.filter(({ hay }) => words.every((w) => hay.includes(w))) : INDEXED;
    }, [needle]);

    const counts = useMemo(() => {
        const c = { all: searchMatched.length };
        searchMatched.forEach(({ service }) => {
            const key = service.category?.en;
            c[key] = (c[key] || 0) + 1;
        });
        return c;
    }, [searchMatched]);

    const visible = useMemo(() => {
        const list = searchMatched
            .filter(({ service }) => activeCat === "all" || service.category?.en === activeCat)
            .map(({ service }) => service);
        const byPrice = (dir) => (a, b) => {
            const pa = priceOf(a), pb = priceOf(b);
            return pa === pb ? 0 : dir * (pa - pb);
        };
        if (sort === "price-asc") return [...list].sort(byPrice(1));
        if (sort === "price-desc") return [...list].sort(byPrice(-1));
        if (sort === "name") {
            const locale = language === "hi" ? "hi" : "en";
            return [...list].sort((a, b) => (a.name?.[language] || "").localeCompare(b.name?.[language] || "", locale));
        }
        return list;
    }, [searchMatched, activeCat, sort, language]);

    const filtersActive = Boolean(needle) || activeCat !== "all" || sort !== "recommended";
    const resetAll = () => {
        setQuery("");
        setParams(new URLSearchParams(), { replace: true });
    };

    const askAbout = needle
        ? `Namaste Aarambh! Mujhe "${query.trim()}" ke baare mein jaankari chahiye.`
        : import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE;

    return (
        <div className="sv-page" lang={language}>
            <SEO title={copy.seo_title} description={copy.seo_description} path="/services" />

            {/* ---------- intro ---------- */}
            <section className="sv-hero">
                <div className="sv-wrap sv-hero-grid">
                    <div>
                        <span className="sv-kicker">{copy.kicker}</span>
                        <h1 className="sv-h1">{copy.h1_pre} <em>{copy.h1_em}</em></h1>
                        <p className="sv-lead">{copy.lead(servicesData.length)}</p>
                    </div>

                    <div className="sv-howto">
                        <h2 className="sv-howto-title">{copy.steps_title}</h2>
                        <ol className="sv-steps">
                            {copy.steps.map((step, i) => (
                                <li className="sv-step" key={step.title}>
                                    <span className="sv-step-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                                    <div>
                                        <b>{step.title}</b>
                                        <span>{step.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* ---------- directory ---------- */}
            <section className="sv-dir">
                <div className="sv-wrap sv-dir-grid">
                    <aside className="sv-rail">
                        <h2 className="sv-rail-title" id="sv-cat-title">{copy.rail_title}</h2>
                        <ul className="sv-cats" aria-labelledby="sv-cat-title">
                            {[{ en: "all", label: copy.rail_all }, ...CATEGORIES.map((c) => ({ en: c.en, label: c[language] ?? c.en }))].map((c) => (
                                <li key={c.en}>
                                    <button
                                        type="button"
                                        className={"sv-cat" + ((counts[c.en] ?? 0) === 0 ? " is-empty" : "")}
                                        aria-pressed={activeCat === c.en}
                                        onClick={() => updateParams({ cat: c.en })}
                                    >
                                        <CategoryGlyph category={c.en} />
                                        <span className="sv-cat-name">{c.label}</span>
                                        <span className="sv-cat-count">{counts[c.en] ?? 0}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="sv-help">
                            <h3>{copy.help_title}</h3>
                            <p>{copy.help_text}</p>
                            <a href={waHref(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)} target="_blank" rel="noopener noreferrer" className="sv-help-link">
                                {copy.help_cta}
                            </a>
                        </div>
                    </aside>

                    <div className="sv-main">
                        <div className="sv-toolbar" role="search">
                            <div className="sv-search">
                                <label className="sv-sr" htmlFor="sv-search-input">{copy.search_label}</label>
                                <svg className="sv-search-ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.6-3.6" /></svg>
                                <input
                                    id="sv-search-input"
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={copy.search_placeholder}
                                    autoComplete="off"
                                    enterKeyHint="search"
                                />
                                {query && (
                                    <button type="button" className="sv-search-clear" onClick={() => setQuery("")} aria-label={copy.search_clear}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
                                    </button>
                                )}
                            </div>

                            <div className="sv-sort">
                                <label htmlFor="sv-sort-select">{copy.sort_label}</label>
                                <select id="sv-sort-select" value={sort} onChange={(e) => updateParams({ sort: e.target.value })}>
                                    {SORTS.map((key) => (
                                        <option key={key} value={key}>{copy.sort_options[key]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="sv-results">
                            <p aria-live="polite">{copy.count(visible.length, servicesData.length)}</p>
                            {filtersActive && (
                                <button type="button" className="sv-reset" onClick={resetAll}>{copy.reset}</button>
                            )}
                        </div>

                        {visible.length > 0 ? (
                            <div className="sv-grid">
                                {visible.map((service) => (
                                    <ServiceEntry key={service.id} service={service} language={language} copy={copy} />
                                ))}
                            </div>
                        ) : (
                            <div className="sv-empty">
                                <h3>{copy.empty_title}</h3>
                                <p>{copy.empty_text}</p>
                                <div className="sv-empty-actions">
                                    <button type="button" className="sv-btn sv-btn-ghost" onClick={resetAll}>{copy.empty_clear}</button>
                                    <a className="sv-btn sv-btn-solid" href={waHref(askAbout)} target="_blank" rel="noopener noreferrer">{copy.empty_ask}</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ---------- what to expect ---------- */}
            <section className="sv-promise">
                <div className="sv-wrap">
                    <ul className="sv-promise-list">
                        {copy.promise.map((item, i) => (
                            <li key={item.title}>
                                <span className="sv-promise-ico" aria-hidden="true">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                        {[
                                            <path key="a" d="M7 5h10M7 9.5h10M9.5 5c4 0 5.5 1.6 5.5 4.2S13 13.4 9.5 13.4L16 20" />,
                                            <path key="b" d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-7l-4.5 3.5V16.5H5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5Z" />,
                                            <g key="c"><rect x="3.5" y="6" width="17" height="12" rx="2" /><path d="m4 7.5 8 6 8-6" /></g>,
                                            <g key="d"><circle cx="12" cy="12" r="8.5" /><path d="M7.5 15.5 10 8.5l2.5 7M8.3 13.4h3.4M14.6 9.5h3M16.1 9.5v.2c0 2-1 3.4-2.6 4.3" /></g>,
                                        ][i]}
                                    </svg>
                                </span>
                                <div>
                                    <b>{item.title}</b>
                                    <span>{item.text}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="sv-ask">
                <div className="sv-wrap sv-ask-inner">
                    <div>
                        <h2>{copy.ask_title}</h2>
                        <p>{copy.ask_text}</p>
                    </div>
                    <div className="sv-ask-actions">
                        <a className="sv-btn sv-btn-solid" href={waHref(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)} target="_blank" rel="noopener noreferrer">{copy.ask_wa}</a>
                        <Link className="sv-btn sv-btn-ghost" to="/contact-us">{copy.ask_contact}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
