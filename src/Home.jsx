import logo from "./assets/logo.png";
import "./home.css";
import "./hero-image.css";
import { useContext } from "react";
import { Route, Link } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import whatsappPreview from "./assets/images/whatsapp-preview.jpeg";
import how_it_works1 from "./assets/images/how_it_works1.png";
import how_it_works2 from "./assets/images/how_it_works2.png";
import how_it_works3 from "./assets/images/how_it_works3.png";


export default function Home() {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    return (
        <>
            <section className="hero">
                <div className="wrap">
                    <div className="hero-copy">
                        <span className="eyebrow">{translations.home.eyebrow}</span>
                        <h1>{translations.home.hero_title_pre} <span className="accent">{translations.header.aarambh}</span> — <br />{translations.home.hero_title_post}</h1>
                        <p className="sub">{translations.home.hero_sub}</p>
                        <div className="hero-ctas">
                            <Link to="/services" className="btn btn-gold">{translations.home.cta_explore}</Link>
                            <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-cream">{translations.home.cta_talk_expert}</a>
                        </div>
                        <div className="stat-row">
                            <div className="stat"><b>85K+</b><span>{translations.home.stat_1_label}</span></div>
                            <div className="stat"><b>40+</b><span>{translations.home.stat_2_label}</span></div>
                            <div className="stat"><b>22</b><span>{translations.home.stat_3_label}</span></div>
                            <div className="stat"><b>4.8★</b><span>{translations.home.stat_4_label}</span></div>
                        </div>
                    </div>

                    <div className="path-graphic">
                        <div className="hero-image">
                            <img
                                src={whatsappPreview}
                                alt="Aarambh WhatsApp Service"
                                className="whatsapp-preview"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="trustbar">
                <div className="wrap">
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" stroke="#0A2A5E" strokeWidth="1.6" /></svg></div>
                        <div><h4>{translations.home.trust_1_title}</h4><p>{translations.home.trust_1_desc}</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="#0A2A5E" strokeWidth="1.6" /><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" stroke="#0A2A5E" strokeWidth="1.6" /></svg></div>
                        <div><h4>{translations.home.trust_2_title}</h4><p>{translations.home.trust_2_desc}</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="#0A2A5E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                        <div><h4>{translations.home.trust_3_title}</h4><p>{translations.home.trust_3_desc}</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9-9.5C1 7 3.5 3.5 7 4c2 .3 3.7 1.9 5 4 1.3-2.1 3-3.7 5-4 3.5-.5 6 3 4 7.5-2 5-9 9.5-9 9.5Z" stroke="#0A2A5E" strokeWidth="1.5" /></svg></div>
                        <div><h4>{translations.home.trust_4_title}</h4><p>{translations.home.trust_4_desc}</p></div>
                    </div>
                </div>
            </div>

            <section className="how-it-works">
                <div className="section-top">
                    <span className="badge">{translations.home.hiw_badge}</span>
                    <h2>{translations.home.hiw_title}</h2>
                    <p>
                        {translations.home.hiw_sub}
                    </p>
                </div>

                <div className="steps">

                    <div className="step">

                        <div className="step-image">
                            <img src={how_it_works1} alt="" />
                        </div>

                        <div className="step-content">
                            <div className="title-row">
                                <span className="number how_works_blue">1</span>
                                <h3>{translations.home.step1_title}</h3>
                            </div>

                            <p>
                                {translations.home.step1_desc_1}<br />
                                {translations.home.step1_desc_2}
                            </p>
                        </div>

                    </div>

                    <div className="arrow">
                        <svg width="180" height="24" viewBox="0 0 180 24">
                            <line
                                x1="0"
                                y1="12"
                                x2="160"
                                y2="12"
                                stroke="#2F80ED"
                                strokeWidth="3"
                                strokeDasharray="10 10"
                            />
                            <polygon
                                points="160,4 178,12 160,20"
                                fill="#2F80ED"
                            />
                        </svg>
                    </div>

                    <div className="step">

                        <div className="step-image">
                            <img src={how_it_works2} alt="" />
                        </div>

                        <div className="step-content">
                            <div className="title-row">
                                <span className="number how_works_green">2</span>
                                <h3>{translations.home.step2_title}</h3>
                            </div>

                            <p>
                                {translations.home.step2_desc_1}<br />
                                {translations.home.step2_desc_2}
                            </p>
                        </div>

                    </div>

                    <div className="arrow">
                        <svg width="180" height="24" viewBox="0 0 180 24">
                            <line
                                x1="0"
                                y1="12"
                                x2="160"
                                y2="12"
                                stroke="#2F80ED"
                                strokeWidth="3"
                                strokeDasharray="10 10"
                            />
                            <polygon
                                points="160,4 178,12 160,20"
                                fill="#2F80ED"
                            />
                        </svg>
                    </div>

                    <div className="step">

                        <div className="step-image">
                            <img src={how_it_works3} alt="" />
                        </div>

                        <div className="step-content">
                            <div className="title-row">
                                <span className="number how_works_purple">3</span>
                                <h3>{translations.home.step3_title}</h3>
                            </div>

                            <p>
                                {translations.home.step3_desc_1}<br />
                                {translations.home.step3_desc_2}
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <section className="trust-section">
                <div className="section-title">
                    <span></span>
                    <h4>{translations.home.why_title}</h4>
                    <span></span>
                </div>
                <div className="trust-container">
                    <div className="trust-card">
                        <div className="icon blue">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3>{translations.home.why_1_title}</h3>
                        <p>
                            {translations.home.why_1_desc}
                        </p>
                    </div>

                    <div className="trust-card">
                        <div className="icon green">
                            <i className="fa-solid fa-user-check"></i>
                        </div>
                        <h3>{translations.home.why_2_title}</h3>
                        <p>
                            {translations.home.why_2_desc}
                        </p>
                    </div>

                    <div className="trust-card">
                        <div className="icon gold">
                            <i className="fa-solid fa-building-columns"></i>
                        </div>
                        <h3>{translations.home.why_3_title}</h3>
                        <p>
                            {translations.home.why_3_desc}
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--cream)" }}>
                <div className="wrap">
                    <div className="section-head">
                        <span className="section-eyebrow">{translations.home.testimonials_eyebrow}</span>
                        <h2>{translations.home.testimonials_title}</h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="tcard">
                            <div className="stars">★★★★★</div>
                            <p>{translations.home.t1_text}</p>
                            <div className="tperson"><div className="avatar">S</div><div><div className="who">{translations.home.t1_name}</div><div className="role">{translations.home.t1_role}</div></div></div>
                        </div>
                        <div className="tcard">
                            <div className="stars">★★★★★</div>
                            <p>{translations.home.t3_text}</p>
                            <div className="tperson"><div className="avatar">A</div><div><div className="who">{translations.home.t3_name}</div><div className="role">{translations.home.t3_role}</div></div></div>
                        </div>
                        <div className="tcard">
                            <div className="stars">★★★★★</div>
                            <p>{translations.home.t4_text}</p>
                            <div className="tperson"><div className="avatar">A</div><div><div className="who">{translations.home.t4_name}</div><div className="role">{translations.home.t4_role}</div></div></div>
                        </div>
                        <div className="tcard">
                            <div className="stars">★★★★★</div>
                            <p>{translations.home.t2_text}</p>
                            <div className="tperson"><div className="avatar">R</div><div><div className="who">{translations.home.t2_name}</div><div className="role">{translations.home.t2_role}</div></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ctaband">
                <h2>{translations.home.cta_band_title}</h2>
                <p>{translations.home.cta_band_sub}</p>
                <div className="hero-ctas" style={{ justifyContent: "center" }}>
                    <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-cream">{translations.home.cta_band_whatsapp}</a>
                    <Link to="/services" className="btn btn-outline-cream">{translations.home.cta_band_browse}</Link>
                </div>
            </div>
        </>
    );
}