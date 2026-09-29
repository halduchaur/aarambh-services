import { useParams } from "react-router-dom";
import { Link } from "./i18nRouting";
import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import servicesData from "./servicesData";
import SEO from "./components/SEO";
import { serviceSchemas } from "./seoSchemas";
import { applyForService } from "./chatbot";
import "./services.css";
import "./service_page.css";

const Arrow = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

const Check = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12l5 5L20 6" /></svg>
);

export default function ServiceDetail() {
    const { slug } = useParams();
    const { language, translations } = useContext(LanguageContext);
    const t = translations.servicepage;
    const service = servicesData.find((s) => s.id === slug);

    const [openFaq, setOpenFaq] = useState(0);
    const [showBar, setShowBar] = useState(false);
    const ctaRef = useRef(null);

    // show the sticky "Apply" bar once the hero button has scrolled out of view
    useEffect(() => {
        const el = ctaRef.current;
        if (!el || typeof IntersectionObserver === "undefined") return;
        const io = new IntersectionObserver(
            ([entry]) => setShowBar(!entry.isIntersecting && entry.boundingClientRect.top < 0),
            { threshold: 0 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [slug]);


    const handleWhatsappClick = (e) => {
        // 1. WhatsApp के डिफ़ॉल्ट लिंक ओपन होने के बिहेवियर को रोकें (अगर आप सिर्फ चैटबॉट खोलना चाहते हैं)
        e.preventDefault(); 

        // 2. index.html से launcher-ring क्लास वाले एलिमेंट को ढूंढें
        const chatbotButton = document.querySelector('.launcher-ring');
        
        // 3. अगर बटन मिल जाता है, तो उसपर ऑटोमैटिक क्लिक ट्रिगर करें
        if (chatbotButton) {
            chatbotButton.click();
        } else {
            console.error("Chatbot launcher button not found!");
        }
    };

    useEffect(() => {
        document.body.classList.toggle("has-sticky-cta", showBar);
        return () => document.body.classList.remove("has-sticky-cta");
    }, [showBar]);

    if (!service) {
        return (
            <section className="services_hero service-body">
                <SEO title="Service Not Found" noindex path={`/services/${slug}`} />
                <div className="services_container" style={{ textAlign: "center", padding: "40px 0 80px" }}>
                    <h1>{translations.services?.not_found_title || "Service not found"}</h1>
                    <p>{translations.services?.not_found_sub || "This service may have been renamed or removed."}</p>
                    <Link to="/services" className="services_modal-cta" style={{ maxWidth: 280, margin: "24px auto 0" }}>
                        {t.back}
                    </Link>
                </div>
            </section>
        );
    }

    const name = service.name?.[language];
    const summary = service.summary?.[language];
    const price = service.price?.[language];
    const category = service.category?.[language];
    const benefits = service.benefits?.[language] || [];
    const faqs = service.faqs?.[language] || [];
    const home = translations.home;

    const related = servicesData
        .filter((s) => s.id !== service.id && s.category?.en === service.category?.en)
        .slice(0, 6);

    const waMessage = `Namaste Aarambh! Mujhe "${name}" service ke baare mein jaankari chahiye.`;
    const whatsappHref = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    const apply = () => applyForService(service, language);
    const jsonLd = serviceSchemas(service, language, translations);

    const features = [
        { title: t.f1_title, sub: t.f1_sub, icon: <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3Zm-3 9l2.2 2.2L15.5 10" /> },
        { title: t.f2_title, sub: t.f2_sub, icon: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2M9.5 3h5" /></> },
        { title: t.f3_title, sub: t.f3_sub, icon: <><rect x="5" y="10.5" width="14" height="10" rx="2.2" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14.5v2.5" /></> },
    ];

    const steps = [
        { title: t.s1_title, sub: t.s1_sub },
        { title: t.s2_title, sub: t.s2_sub },
        { title: t.s3_title, sub: t.s3_sub },
        { title: t.s4_title, sub: t.s4_sub },
    ];

    return (
        <>
            <SEO
                title={name}
                description={summary}
                path={`/services/${service.id}`}
                image={service.image}
                jsonLd={jsonLd}
            />

            <section className="services_hero service-body">
                <div className="services_container">
                    <nav className="sd-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">{translations.header?.nav_home || "Home"}</Link>
                        <span aria-hidden="true">/</span>
                        <Link to="/services">{translations.header?.nav_services || "Services"}</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">{name}</span>
                    </nav>
                </div>
            </section>

            <div className="sp-page">
                <div className="sp-wrap">
                    {/* ---------- HERO ---------- */}
                    <section className="sp-hero">
                        <span className="sp-decor sp-decor-a" aria-hidden="true"></span>
                        <span className="sp-decor sp-decor-b" aria-hidden="true"></span>

                        <div className="sp-hero-copy">
                            <span className="sp-chip">{category}</span>
                            <h1>{name}</h1>
                            <p className="sp-lead">{summary}</p>

                            <div className="sp-price">
                                <span>{t.starting_at}</span>
                                <strong>{price}</strong>
                            </div>

                            <div className="sp-cta-row" ref={ctaRef}>
                                <button type="button" className="sp-btn sp-btn-primary" onClick={apply}>
                                    {t.apply_now} <Arrow />
                                </button>
                                <a className="sp-btn sp-btn-ghost" href={whatsappHref} target="_blank" rel="noreferrer">
                                    {t.ask_whatsapp}
                                </a>
                            </div>
                        </div>

                        <div className="sp-hero-media">
                            <div className="sp-media-card">
                                <img src={service.image} alt={name} />
                            </div>
                            <span className="sp-float">
                                <span className="sp-float-ic"><Check /></span>
                                {t.expert_badge}
                            </span>
                        </div>
                    </section>

                    {/* ---------- TRUST STRIP ---------- */}
                    <section className="sp-trust" aria-label="Why trust Aarambh">
                        <div className="sp-trust-item">
                            <div className="sp-trust-ic">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3 3-4.8 5.5-4.8s4.9 1.8 5.5 4.8" /><path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 14.6c1.6.7 2.7 2.1 3 4.4" /></svg>
                            </div>
                            <div><strong>{home.stat_1_num}</strong><span>{home.stat_1_label}</span></div>
                        </div>
                        <div className="sp-trust-item">
                            <div className="sp-trust-ic">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3Z" /><path d="M9 12l2.2 2.2L15.5 10" /></svg>
                            </div>
                            <div><strong>{t.trust_price_title}</strong><span>{t.trust_price_sub}</span></div>
                        </div>
                        <div className="sp-trust-item">
                            <div className="sp-trust-ic">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.2l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.6l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8L12 3.2Z" /></svg>
                            </div>
                            <div><strong>{home.stat_4_num}</strong><span>{t.trust_rating_label}</span></div>
                        </div>
                    </section>

                    {/* ---------- FEATURES ---------- */}
                    <section className="sp-features">
                        {features.map((f, i) => (
                            <div className="sp-feature" key={i}>
                                <div className="sp-feature-ic">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                                </div>
                                <div>
                                    <h3>{f.title}</h3>
                                    <p>{f.sub}</p>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* ---------- HOW IT WORKS ---------- */}
                    <section className="sp-how">
                        <div className="sp-section-head">
                            <h2>{t.how_title}</h2>
                            <p>{t.how_sub}</p>
                        </div>
                        <ol className="sp-steps">
                            {steps.map((s, i) => (
                                <li key={i}>
                                    <span className="sp-step-num">{i + 1}</span>
                                    <h3>{s.title}</h3>
                                    <p>{s.sub}</p>
                                </li>
                            ))}
                        </ol>
                        <div className="sp-how-cta">
                            <button type="button" className="sp-btn sp-btn-primary" onClick={handleWhatsappClick}>
                                {t.apply_now} <Arrow />
                            </button>
                        </div>
                    </section>

                    {/* ---------- DETAILS ---------- */}
                    <div className="sp-content">
                        <div className="sp-main">
                            <h2 className="sp-about-title">{t.about_title} <em>{name}</em></h2>
                            <p className="sp-about-text">{summary}</p>

                            {benefits.length > 0 && (
                                <>
                                    <h3 className="sp-sub-title">{t.benefits_title}</h3>
                                    <ul className="sp-benefits">
                                        {benefits.map((b, i) => (
                                            <li key={i}><span className="sp-tick"><Check /></span><span>{b}</span></li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {faqs.length > 0 && (
                                <>
                                    <h3 className="sp-sub-title">{t.faq_title}</h3>
                                    <div className="sp-faq">
                                        {faqs.map((faq, i) => (
                                            <div key={i} className={`sp-faq-item${openFaq === i ? " is-open" : ""}`}>
                                                <button
                                                    type="button"
                                                    className="sp-faq-q"
                                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                                    aria-expanded={openFaq === i}
                                                >
                                                    <span>{faq.q}</span>
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                </button>
                                                <div className="sp-faq-a"><p>{faq.a}</p></div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {related.length > 0 && (
                                <>
                                    <h3 className="sp-sub-title">{t.related_title}</h3>
                                    <div className="sp-related">
                                        {related.map((r) => (
                                            <Link key={r.id} to={`/services/${r.id}`} className="sp-related-chip">
                                                {r.name?.[language]}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}

                            <p className="sp-back"><Link to="/services">&larr; {t.back}</Link></p>
                        </div>

                        <aside className="sp-side">
                            <div className="sp-side-card">
                                <span className="sp-chip sp-chip-dark">{category}</span>
                                <h3>{t.side_title}</h3>
                                <p className="sp-side-name">{name}</p>
                                <div className="sp-price sp-price-side">
                                    <span>{t.starting_at}</span>
                                    <strong>{price}</strong>
                                </div>
                                <button onClick={handleWhatsappClick} type="button" className="sp-btn sp-btn-primary sp-btn-block">
                                    {t.apply_now} <Arrow />
                                </button>
                                <p className="sp-side-note">{t.side_note}</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            {/* ---------- STICKY APPLY BAR ---------- */}
            <div className={`sp-sticky${showBar ? " is-visible" : ""}`} aria-hidden={!showBar}>
                <div className="sp-sticky-inner">
                    <div className="sp-sticky-text">
                        <strong>{t.sticky_title} <span>{name}</span></strong>
                        <small>{t.sticky_sub}</small>
                    </div>
                    <button type="button" className="sp-btn sp-btn-light" onClick={handleWhatsappClick} tabIndex={showBar ? 0 : -1}>
                        {t.apply_now} <Arrow />
                    </button>
                </div>
            </div>
        </>
    );
}
