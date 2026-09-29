import ServiceIcon from './ServiceIcon';
import { memo, useContext } from "react";
import { Link } from "./i18nRouting";
import { LanguageContext } from "./LanguageContext";
import { applyForService } from "./chatbot";

const ServiceCard = function ({ service, setSelectedService, language }) {
    const { translations } = useContext(LanguageContext);

    return (
        <Link to={`/services/${service.id}`} className="services_service-card">
            <div className="services_card-body">
                <img src={service.image} alt={service.name?.[language] || ""} className="services_card-image" loading="lazy" />
                <h3>{service.name?.[language]}</h3>
                <p>{service.summary?.[language]}</p>
                <div className="services_card-foot">
                    <div className="services_card-price">
                        <span>{translations.services.starting_at}</span>
                        <strong>{service.price?.[language]}</strong>
                    </div>
                    <button
                        type="button"
                        className="services_card-cta"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); applyForService(service, language); }}
                    >{translations.services.apply_now}
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default memo(ServiceCard);
