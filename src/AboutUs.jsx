import "./about_us.css";
import { Route, Link, NavLink } from "react-router-dom";
import { memo, useContext } from "react";
import logo from "./assets/images/aarambh_logo.jpeg";
import { LanguageContext } from "./LanguageContext";

const AboutUs = () => {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    return (
        <>
            <section className="about_us-hero about_us_heading">
                <div className="about_us-hero-inner">
                    <div>
                        <div className="about_us-tag-chip"><span className="about_us-dot"></span>{translations.about.chip}</div>
                        <h1>{translations.about.hero_title_pre} <em>{translations.about.hero_title_em}</em> {translations.about.hero_title_post}</h1>
                        <p className="about_us-lead">{translations.about.hero_lead}</p>
                        <p className="about_us-hero-hindi">{translations.about.hero_hindi}</p>
                        <div className="about_us-hero-buttons">
                            <a href="#journey" className="about_us-btn-primary">{translations.about.btn_journey}</a>
                            <a href="#story" className="about_us-btn-ghost">{translations.about.btn_story}</a>
                        </div>
                    </div>
                    <div className="about_us-hero-art">
                        <img src={logo} alt="Aarambh Logo" />
                    </div>
                </div>
            </section>

            <section className="about_us-story about_us_heading" id="story">
                <div className="about_us-story-inner">
                    <div>
                        <div className="about_us-story-label">{translations.about.story_label}</div>
                        <h2>{translations.about.story_title}</h2>
                    </div>
                    <div className="about_us-story-text">
                        <p><strong>{translations.about.story_p1_pre}</strong> — {translations.about.story_p1_hindi} {translations.about.story_p1_post}</p>
                        <p>{translations.about.story_p2}</p>
                        <p>{translations.about.story_p3}</p>
                    </div>
                </div>
            </section>

            <section className="about_us-journey about_us_heading" id="journey">
                <div className="about_us-journey-inner">
                    <div className="about_us-journey-head">
                        <div className="about_us-story-label">{translations.about.journey_label}</div>
                        <h2>{translations.about.journey_title}</h2>
                        <p>{translations.about.journey_sub}</p>
                    </div>
                    <div className="about_us-path">
                        <div className="about_us-path-row">
                            <div className="about_us-stop">
                                <div className="about_us-marker">1</div>
                                <h3>{translations.about.j1_title}</h3>
                                <p>{translations.about.j1_desc}</p>
                            </div>
                            <div className="about_us-stop">
                                <div className="about_us-marker">2</div>
                                <h3>{translations.about.j2_title}</h3>
                                <p>{translations.about.j2_desc}</p>
                            </div>
                            <div className="about_us-stop">
                                <div className="about_us-marker">3</div>
                                <h3>{translations.about.j3_title}</h3>
                                <p>{translations.about.j3_desc}</p>
                            </div>
                            <div className="about_us-stop">
                                <div className="about_us-marker">4</div>
                                <h3>{translations.about.j4_title}</h3>
                                <p>{translations.about.j4_desc}</p>
                            </div>
                            <div className="about_us-stop">
                                <div className="about_us-marker">5</div>
                                <h3>{translations.about.j5_title}</h3>
                                <p>{translations.about.j5_desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_us-process about_us_heading" id="process">
                <div className="about_us-process-inner">
                    <div className="about_us-process-head">
                        <div className="about_us-story-label">{translations.about.process_label}</div>
                        <h2>{translations.about.process_title}</h2>
                    </div>
                    <div className="about_us-steps">
                        <div className="about_us-step">
                            <div className="about_us-num">01</div>
                            <h3>{translations.about.p1_title}</h3>
                            <p>{translations.about.p1_desc}</p>
                        </div>
                        <div className="about_us-step">
                            <div className="about_us-num">02</div>
                            <h3>{translations.about.p2_title}</h3>
                            <p>{translations.about.p2_desc}</p>
                        </div>
                        <div className="about_us-step">
                            <div className="about_us-num">03</div>
                            <h3>{translations.about.p3_title}</h3>
                            <p>{translations.about.p3_desc}</p>
                        </div>
                        <div className="about_us-step">
                            <div className="about_us-num">04</div>
                            <h3>{translations.about.p4_title}</h3>
                            <p>{translations.about.p4_desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_us-values about_us_heading" id="values">
                <div className="about_us-values-inner">
                    <div className="about_us-values-head">
                        <div className="story-label">{translations.about.values_label}</div>
                        <h2>{translations.about.values_title}</h2>
                    </div>
                    <div className="about_us-value-grid">
                        <div className="about_us-value-main">
                            <h3>{translations.about.v_main_title}</h3>
                            <p>{translations.about.v_main_desc}</p>
                        </div>
                        <div className="about_us-value-side">
                            <div className="about_us-value-card">
                                <h3>{translations.about.v1_title}</h3>
                                <p>{translations.about.v1_desc}</p>
                            </div>
                            <div className="about_us-value-card">
                                <h3>{translations.about.v2_title}</h3>
                                <p>{translations.about.v2_desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_us-cta about_us_heading">
                <div className="about_us-cta-inner">
                    <div className="about_us-cta-text">
                        <h2>{translations.about.cta_title}</h2>
                        <p>{translations.about.cta_sub}</p>
                    </div>
                    <NavLink to="/services" className="about_us-btn-primary">{translations.about.cta_btn}</NavLink>
                </div>
            </section>
        </>
    );
}

export default memo(AboutUs);