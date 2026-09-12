import "./privacy.css";
import { Route, Link } from "react-router-dom";
import { memo, useContext } from "react";
import logo from "./assets/images/aarambh_logo.jpeg";
import { LanguageContext } from "./LanguageContext";

const Privacy = function () {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    return (
        <>
            <div className="privacy-assurance privacy_heading">
                <div className="privacy-assurance-inner">
                    <span className="privacy-label">{translations.privacy.badge}</span>
                    <span className="privacy-detail">{translations.privacy.badge_detail}</span>
                </div>
            </div>

            <main>
                <div className="privacy-wrap privacy_heading">

                    <p className="privacy-consent-note">{translations.privacy.consent}</p>

                    <div className="privacy-clause" id="introduction">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">1</span>
                            <h2>{translations.privacy.c1_title}</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>{translations.privacy.c1_body}</p>
                        </div>
                    </div>

                    <div className="privacy-clause" id="information-we-collect">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">2</span>
                            <h2>{translations.privacy.c2_title}</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>{translations.privacy.c2_intro}</p>
                            <ul>
                                <li><strong>{translations.privacy.c2_i1_b}</strong> {translations.privacy.c2_i1}</li>
                                <li><strong>{translations.privacy.c2_i2_b}</strong> {translations.privacy.c2_i2}</li>
                                <li><strong>{translations.privacy.c2_i3_b}</strong> {translations.privacy.c2_i3}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="privacy-clause" id="how-we-use">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">3</span>
                            <h2>{translations.privacy.c3_title}</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>{translations.privacy.c3_intro}</p>
                            <ul>
                                <li>{translations.privacy.c3_i1}</li>
                                <li>{translations.privacy.c3_i2}</li>
                                <li>{translations.privacy.c3_i3}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="privacy-clause" id="retention">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">4</span>
                            <h2>{translations.privacy.c4_title}</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>{translations.privacy.c4_intro}</p>
                            <ul>
                                <li>{translations.privacy.c4_i1}</li>
                                <li>{translations.privacy.c4_i2}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="privacy-clause" id="third-party">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">5</span>
                            <h2>{translations.privacy.c5_title}</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>{translations.privacy.c5_intro_pre} <span className="privacy-no-sell">{translations.privacy.c5_intro_em}</span> {translations.privacy.c5_intro_post}</p>
                            <ul>
                                <li><strong>{translations.privacy.c5_i1_b}</strong> {translations.privacy.c5_i1}</li>
                                <li><strong>{translations.privacy.c5_i2_b}</strong> {translations.privacy.c5_i2}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="privacy-clause" id="updates">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">6</span>
                            <h2>{translations.privacy.c6_title}</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>{translations.privacy.c6_body}</p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default memo(Privacy);