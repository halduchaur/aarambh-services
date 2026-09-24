import ServiceIcon from './ServiceIcon';
import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const ServiceModal = ({ selectedService, language, setSelectedService }) => {
    const { translations } = useContext(LanguageContext);

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
                    <a
                        className="services_view-btn"
                        href={`https://wa.me{import.meta.env.VITE_WHATSAPP_NUMBER}?text=I want to apply for ${selectedService.name?.[language]}`}
                        onClick={handleWhatsappClick}
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