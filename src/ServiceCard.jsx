import ServiceIcon from './ServiceIcon';
import { memo, useContext } from "react";
import { Link } from "./i18nRouting";
import { LanguageContext } from "./LanguageContext";

const ServiceCard = function ({ service, setSelectedService, language }) {
    const { translations } = useContext(LanguageContext);

    const waMessage = `Namaste Aarambh! Mujhe "${service.name?.[language]}" service ke baare mein jaankari chahiye.`;
    const whatsappHref = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

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
                    <a
                        className="services_card-cta"
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >{translations.services.apply_now}
                    </a>
                </div>
            </div>
        </Link>
    )
}

export default memo(ServiceCard);
