import "./refund.css";
import { Route, Link } from "react-router-dom";
import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const RefundPolicy = function () {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    return (
        <>
            <div className="refund-assurance">
                <div className="refund-assurance-inner">
                    <span className="refund-label">{translations.refund.badge}</span>
                    <span className="refund-detail">{translations.refund.badge_detail}</span>
                </div>
            </div>

            <main>
                <div className="refund-wrap">

                    <p className="refund-effective-note">{translations.refund.intro}</p>

                    <div className="refund-clause" id="overview">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">1</span>
                            <h2>{translations.refund.c1_title}</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>{translations.refund.c1_intro}</p>
                            <ul>
                                <li><strong>{translations.refund.c1_i1_b}</strong> {translations.refund.c1_i1} <span className="refund-tag refund-non-refundable">{translations.refund.c1_i1_tag}</span></li>
                                <li><strong>{translations.refund.c1_i2_b}</strong> {translations.refund.c1_i2}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="refund-clause" id="full-refund">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">2</span>
                            <h2>{translations.refund.c2_title}</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>{translations.refund.c2_intro}</p>
                            <div className="refund-scenario refund-full">
                                <span className="refund-title">{translations.refund.c2_s1_title}</span>
                                <p>{translations.refund.c2_s1_desc}</p>
                            </div>
                            <div className="refund-scenario refund-full">
                                <span className="refund-title">{translations.refund.c2_s2_title}</span>
                                <p>{translations.refund.c2_s2_desc}</p>
                            </div>
                            <div className="refund-scenario refund-full">
                                <span className="refund-title">{translations.refund.c2_s3_title}</span>
                                <p>{translations.refund.c2_s3_desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="refund-clause" id="partial-refund">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">3</span>
                            <h2>{translations.refund.c3_title}</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>{translations.refund.c3_intro}</p>
                            <div className="refund-scenario refund-partial">
                                <span className="refund-title">{translations.refund.c3_s1_title}</span>
                                <p>{translations.refund.c3_s1_desc}</p>
                            </div>
                            <div className="refund-scenario refund-partial">
                                <span className="refund-title">{translations.refund.c3_s2_title}</span>
                                <p>{translations.refund.c3_s2_desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="refund-clause" id="non-refundable">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">4</span>
                            <h2>{translations.refund.c4_title}</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>{translations.refund.c4_intro}</p>
                            <div className="refund-scenario refund-none">
                                <span className="refund-title">{translations.refund.c4_s1_title}</span>
                                <p>{translations.refund.c4_s1_desc}</p>
                            </div>
                            <div className="refund-scenario refund-none">
                                <span className="refund-title">{translations.refund.c4_s2_title}</span>
                                <p>{translations.refund.c4_s2_desc}</p>
                            </div>
                            <div className="refund-scenario refund-none">
                                <span className="refund-title">{translations.refund.c4_s3_title}</span>
                                <p>{translations.refund.c4_s3_desc}</p>
                            </div>
                            <div className="refund-scenario refund-none">
                                <span className="refund-title">{translations.refund.c4_s4_title}</span>
                                <p>{translations.refund.c4_s4_desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="refund-clause" id="timeline">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">5</span>
                            <h2>{translations.refund.c5_title}</h2>
                        </div>
                        <div className="refund-timeline">
                            <div className="refund-step">
                                <span className="refund-k">{translations.refund.c5_i1_label}</span>
                                <p className="refund-v">{translations.refund.c5_i1_value}</p>
                            </div>
                            <div className="refund-step">
                                <span className="refund-k">{translations.refund.c5_i2_label}</span>
                                <p className="refund-v">{translations.refund.c5_i2_value}</p>
                            </div>
                            <div className="refund-step">
                                <span className="refund-k">{translations.refund.c5_i3_label}</span>
                                <p className="refund-v">{translations.refund.c5_i3_value}</p>
                            </div>
                        </div>
                    </div>

                    <div className="refund-clause" id="how-to-file">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">6</span>
                            <h2>{translations.refund.c6_title}</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>{translations.refund.c6_intro}</p>
                            <ol className="refund-filing-steps">
                                <li>{translations.refund.c6_s1}</li>
                                <li>{translations.refund.c6_s2}</li>
                                <li>{translations.refund.c6_s3}</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default memo(RefundPolicy);