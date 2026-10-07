import { memo, useContext } from "react";
import { Link } from "./i18nRouting";
import { LanguageContext } from "./LanguageContext";
import { applyForService } from "./chatbot";

const ServiceCard = function ({ service, language }) {
    const { translations } = useContext(LanguageContext);

    return (
        <Link to={`/services/${service.id}`} className="svc-card">
            <div className="svc-card-media">
                <span className="svc-card-category">{service.category?.[language]}</span>
                <span className="svc-card-seal" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12l5 5L20 6" />
                    </svg>
                </span>
                <div className="svc-card-photo">
                    <img src={service.image} alt={service.name?.[language] || ""} loading="lazy" />
                </div>
            </div>

            <div className="svc-card-body">
                <h3>{service.name?.[language]}</h3>
                <p>{service.summary?.[language]}</p>
            </div>

            <div className="svc-card-foot">
                <div className="svc-card-price">
                    <span>{translations.services.starting_at}</span>
                    <strong>{service.price?.[language]}</strong>
                </div>
                <button
                    type="button"
                    className="svc-card-cta"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); applyForService(service, language); }}
                >
                    {translations.services.apply_now}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
            </div>
        </Link>
    );
};

export default memo(ServiceCard);
