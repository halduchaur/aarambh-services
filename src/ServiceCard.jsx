import ServiceIcon from './ServiceIcon';
import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const ServiceCard = function ({ service, setSelectedService, language }) {
    const { translations } = useContext(LanguageContext);

    return (
        <div className="services_service-card" onClick={() => setSelectedService(service)} >
            <div className="services_card-body">
                <img src={service.image} alt={service.name} className="services_card-image"/>
                <h3>{service.name?.[language]}</h3>
                <p>{service.summary?.[language]}</p>
                <div className="services_card-foot">
                    <div className="services_card-price">
                        <span>{translations.services.starting_at}</span>
                        <strong>{service.price?.[language]}</strong>
                    </div>
                    <button
                        className="services_card-cta" onClick={(e) => { e.stopPropagation(); setSelectedService(service); }} >{translations.services.apply_now}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(ServiceCard);