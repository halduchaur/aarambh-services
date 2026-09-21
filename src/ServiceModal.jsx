import ServiceIcon from './ServiceIcon';
import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const ServiceModal = ({ selectedService, language, setSelectedService }) => {
    const { translations } = useContext(LanguageContext);

    return (
        <div
            className="services_modal-overlay"
            onClick={() => setSelectedService(null)}
        >
            <div
                className="services_modal"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="services_close"
                    onClick={() => setSelectedService(null)}
                >
                    ✕
                </button>

                {/* SCROLLABLE CONTENT */}
                <div className="services_modal-content">

                    <h2>{selectedService.name?.[language]}</h2>

                    <p>{selectedService.summary?.[language]}</p>

                    <h3>{translations.modal.benefits}</h3>

                    <ul className="benefits">
                        {
                            selectedService.benefits?.[language].map((benefit, index) => (
                                <li key={index}>
                                    ✔ {benefit}
                                </li>
                            ))
                        }
                    </ul>

                    <h3>{translations.modal.faqs}</h3>

                    {
                        selectedService.faqs?.[language].map((faq, index) => (
                            <details key={index}>
                                <summary>{faq.q}</summary>
                                <p>{faq.a}</p>
                            </details>
                        ))
                    }

                </div>

                <div className="services_action-buttons">

                    {
                        // selectedService.apply_form ?
                        //     <a
                        //         className="services_apply_form-btn"
                        //         onClick={() =>
                        //             window.location.href =
                        //             selectedService.apply_form
                        //         }
                        //     >
                        //         {translations.modal.apply_form}
                        //     </a>
                        //     : null
                    }

                    <a
                        className="services_view-btn"
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=I want to apply for ${selectedService.name?.[language]}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {translations.modal.apply_whatsapp}
                    </a>

                </div>

            </div>
        </div>
    )
}

export default memo(ServiceModal);