import { useParams } from "react-router-dom";
import { Link } from "./i18nRouting";
import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import servicesData from "./servicesData";
import SEO from "./components/SEO";
import { serviceSchemas } from "./seoSchemas";
import "./services.css";

export default function ServiceDetail() {
    const { slug } = useParams();
    const { language, translations } = useContext(LanguageContext);
    const service = servicesData.find((s) => s.id === slug);

    const [openFaq, setOpenFaq] = useState(0);

    if (!service) {
        return (
            <section className="services_hero service-body">
                <SEO title="Service Not Found" noindex path={`/services/${slug}`} />
                <div className="services_container" style={{ textAlign: "center", padding: "40px 0 80px" }}>
                    <h1>{translations.services?.not_found_title || "Service not found"}</h1>
                    <p>{translations.services?.not_found_sub || "This service may have been renamed or removed."}</p>
                    <Link to="/services" className="services_modal-cta" style={{ maxWidth: 280, margin: "24px auto 0" }}>
                        {translations.services?.title_pre || "Browse all services"}
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

    const related = servicesData
        .filter((s) => s.id !== service.id && s.category?.en === service.category?.en)
        .slice(0, 6);

    const waMessage = `Namaste Aarambh! Mujhe "${name}" service ke baare mein jaankari chahiye.`;
    const whatsappHref = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

    const jsonLd = serviceSchemas(service, language, translations);


    const handleWhatsappClick = (e) => {
        // 1. WhatsApp के डिफ़ॉल्ट लिंक ओपन होने के बिहेवियर को रोकें (अगर आप सिर्फ चैटबॉट खोलना चाहते हैं)
        e.preventDefault(); 

        // 2. index.html से launcher-ring क्लास वाले एलिमेंट को ढूंढें
        const chatbotButton = document.querySelector('.launcher-ring');
        
        // 3. अगर बटन मिल जाता है, तो उसपर ऑटोमैटिक क्लिक ट्रिगर करें
        if (chatbotButton) {
            chatbotButton.click();
            
            // (ऑप्शनल) चैटबॉट खुलने के बाद आप इस सर्विस मोडल को बंद भी कर सकते हैं
            setSelectedService(null); 
        } else {
            console.error("Chatbot launcher button not found!");
        }
    };

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

            <section className="services_container sd-wrap">
                <div className="services_modal-hero sd-hero">
                    <div className="services_modal-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M4 12l5 5L20 6" />
                        </svg>
                    </div>
                    <span className="sd-category">{category}</span>
                    <h1>{name}</h1>
                    <p>{summary}</p>
                    <div className="services_modal-price-badge">{price}</div>
                </div>

                <div className="services_modal-body sd-body">
                    {benefits.length > 0 && (
                        <div className="services_modal-section">
                            <h4>{translations.modal?.benefits || "What you get"}</h4>
                            <ul className="services_benefit-list">
                                {benefits.map((b, i) => (
                                    <li key={i}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 12l5 5L20 6" />
                                        </svg>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {faqs.length > 0 && (
                        <div className="services_modal-section">
                            <h4>{translations.modal?.faqs || "Frequently Asked Questions"}</h4>
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`services_faq-item${openFaq === i ? " services_open" : ""}`}
                                >
                                    <button
                                        className="services_faq-q"
                                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                        aria-expanded={openFaq === i}
                                    >
                                        {faq.q}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div className="services_faq-a">
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <a className="services_modal-cta" href={whatsappHref} onClick={handleWhatsappClick} target="_blank" rel="noreferrer">
                        {translations.modal?.apply_whatsapp || "Apply on WhatsApp"}
                    </a>

                    {related.length > 0 && (
                        <div className="services_modal-section sd-related">
                            <h4>{language === "hi" ? "संबंधित सेवाएं" : "Related services"}</h4>
                            <div className="sd-related-list">
                                {related.map((r) => (
                                    <Link key={r.id} to={`/services/${r.id}`} className="sd-related-chip">
                                        {r.name?.[language]}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <p className="services_modal-note">
                        <Link to="/services">&larr; {translations.header?.nav_services || "Services"}</Link>
                    </p>
                </div>
            </section>
        </>
    );
}
