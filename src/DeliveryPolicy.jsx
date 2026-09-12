import "./delivery.css";
import { Route, Link } from "react-router-dom";
import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const DeliveryPolicy = function DeliveryPolicy() {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    return (
        <>
            <div className="delivery-assurance">
                <div className="delivery-assurance-inner">
                    <span className="delivery-label">{translations.delivery.badge}</span>
                    <span className="delivery-detail">{translations.delivery.badge_detail}</span>
                </div>
            </div>

            <main>
                <div className="delivery-wrap">

                    <p className="delivery-effective-note">{translations.delivery.intro}</p>

                    <div className="delivery-clause" id="how-we-deliver">
                        <div className="delivery-clause-head">
                            <span className="delivery-clause-num">1</span>
                            <h2>{translations.delivery.c1_title}</h2>
                        </div>
                        <div className="delivery-body-text">
                            <p>{translations.delivery.c1_intro}</p>
                        </div>
                        <div className="delivery-channels">
                            <div className="delivery-channel-row">
                                <span className="delivery-via">{translations.delivery.c1_wa_title}</span>
                                <p>{translations.delivery.c1_wa_desc}</p>
                            </div>
                            <div className="delivery-channel-row">
                                <span className="delivery-via">{translations.delivery.c1_email_title}</span>
                                <p>{translations.delivery.c1_email_desc}</p>
                            </div>
                        </div>
                        <div className="delivery-body-text">
                            <span className="delivery-turnaround">{translations.delivery.c1_turnaround}</span>
                        </div>
                    </div>

                    <div className="delivery-clause" id="no-physical-shipping">
                        <div className="delivery-clause-head">
                            <span className="delivery-clause-num">2</span>
                            <h2>{translations.delivery.c2_title}</h2>
                        </div>
                        <div className="delivery-body-text">
                            <p>{translations.delivery.c2_body}</p>
                            <ul>
                                <li>{translations.delivery.c2_i1}</li>
                            </ul>
                            <div className="delivery-callout">{translations.delivery.c2_callout}</div>
                        </div>
                    </div>

                    <div className="delivery-clause" id="service-scope">
                        <div className="delivery-clause-head">
                            <span className="delivery-clause-num">3</span>
                            <h2>{translations.delivery.c3_title}</h2>
                        </div>
                        <div className="delivery-body-text">
                            <p>{translations.delivery.c3_intro}</p>
                            <ul>
                                <li>{translations.delivery.c3_i1}</li>
                                <li>{translations.delivery.c3_i2}</li>
                                <li>{translations.delivery.c3_i3}</li>
                                <li>{translations.delivery.c3_i4}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default memo(DeliveryPolicy);