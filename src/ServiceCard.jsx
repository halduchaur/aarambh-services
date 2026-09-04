import ServiceIcon from './ServiceIcon';
import { memo } from "react";

const ServiceCard = function ({ service, setSelectedService }) {
    return (
        <div className="services_service-card" onClick={() => setSelectedService(service)} >
            {/* <div className="services_card-media" style={{backgroundImage: `url(${service.image})`}}>
                {service.tag && (
                    <span className={`services_card-tag ${service.tag === "New"
                        ? "services_tag-new"
                        : "services_tag-fast"}`}>
                        {service.tag}
                    </span>
                )}
                <ServiceIcon category={service.category} />
            </div> */}

            <div className="services_card-body">
                <img src={service.image} alt={service.name} className="services_card-image"/>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <div className="services_card-foot">
                    <div className="services_card-price">
                        <span>Starting at</span>
                        <strong>{service.price}</strong>
                    </div>
                    <button
                        className="services_card-cta" onClick={(e) => { e.stopPropagation(); setSelectedService(service); }} >Apply Now →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(ServiceCard);