import ServiceIcon from './ServiceIcon';
import { memo } from "react";

const ServiceModal = ({ selectedService, setSelectedService }) => {
    return (
        <div className="services_modal-overlay" onClick={() => setSelectedService(null)} >
            <div className="services_modal" onClick={(e) => e.stopPropagation()} >
                <button className="services_close" onClick={() => setSelectedService(null)} >
                    ✕
                </button>
                <div className="services_service-icon">
                    <ServiceIcon category={selectedService.category} />
                </div>
                <h2>{selectedService.name}</h2>
                <p>{selectedService.summary}</p>
                {/* <div className="price-card">

                                <span>Starting Price</span>

                                <h3>{selectedService.price}</h3>

                            </div> */}
                <h3>Benefits</h3>
                <ul className="benefits">
                    {
                        selectedService.benefits.map((benefit, index) => (
                            <li key={index}>
                                ✔ {benefit}
                            </li>
                        ))
                    }
                </ul>

                <h3>Frequently Asked Questions</h3>
                {
                    selectedService.faqs.map((faq, index) => (
                        <details key={index}>
                            <summary>{faq.q}</summary>
                            <p>{faq.a}</p>
                        </details>
                    ))
                }
                <div className="services_action-buttons">
                    {
                        selectedService.apply_form ?
                            <a className="services_apply_form-btn" onClick={() => window.location.href = selectedService.apply_form}>
                                Apply via Form
                            </a> : null
                    }
                    <a
                        className="services_view-btn"
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=I want to apply for ${selectedService.name}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Apply on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}

export default memo(ServiceModal)