import "./terms_of_service.css";
import { Route, Link } from "react-router-dom";
import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const TermsOfService = () => {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    return (
        <>
            <div className="terms-assurance terms_heading">
                <div className="terms-assurance-inner">
                    <span className="terms-label">{translations.terms.badge}</span>
                    <span className="terms-detail">{translations.terms.badge_detail}</span>
                </div>
            </div>

            <main>
                <div className="terms-wrap terms_heading">

                    <p className="terms-effective-note">{translations.terms.intro}</p>

                    <div className="terms-clause" id="services-description">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">1</span>
                            <h2>{translations.terms.c1_title}</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>{translations.terms.c1_body_pre} <strong>{translations.terms.c1_body_not}</strong> {translations.terms.c1_body_post}</p>
                        </div>
                    </div>

                    <div className="terms-clause" id="user-representations">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">2</span>
                            <h2>{translations.terms.c2_title}</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>{translations.terms.c2_intro}</p>
                            <ul>
                                <li>{translations.terms.c2_i1}</li>
                                <li><strong>{translations.terms.c2_i2_b}</strong> {translations.terms.c2_i2}</li>
                                <li><strong>{translations.terms.c2_i3_b}</strong> {translations.terms.c2_i3}</li>
                            </ul>
                            <div className="terms-callout">{translations.terms.c2_callout}</div>
                        </div>
                    </div>

                    <div className="terms-clause" id="payment-fees">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">3</span>
                            <h2>{translations.terms.c3_title}</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>{translations.terms.c3_body}</p>
                        </div>
                    </div>

                    <div className="terms-clause" id="limitation-of-liability">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">4</span>
                            <h2>{translations.terms.c4_title}</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>{translations.terms.c4_intro_pre} <span className="terms-not-liable">{translations.terms.c4_intro_em}</span> {translations.terms.c4_intro_post}</p>
                            <ul>
                                <li>{translations.terms.c4_i1}</li>
                                <li>{translations.terms.c4_i2}</li>
                                <li>{translations.terms.c4_i3}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="terms-clause" id="intellectual-property">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">5</span>
                            <h2>{translations.terms.c5_title}</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>{translations.terms.c5_body}</p>
                        </div>
                    </div>

                    <div className="terms-clause" id="governing-law">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">6</span>
                            <h2>{translations.terms.c6_title}</h2>
                        </div>
                        <div className="terms-jurisdiction">
                            <div className="terms-item">
                                <span className="terms-k">{translations.terms.c6_law_label}</span>
                                <p className="terms-v">{translations.terms.c6_law_value}</p>
                            </div>
                            <div className="terms-item">
                                <span className="terms-k">{translations.terms.c6_juris_label}</span>
                                <p className="terms-v">{translations.terms.c6_juris_value}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default memo(TermsOfService);