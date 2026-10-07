import logo from "./assets/logo.png";
import "./home.css";
import { useContext, useState } from "react";
import { Link } from "./i18nRouting";
import { LanguageContext } from "./LanguageContext";
import SEO from "./components/SEO";
import { orgSchemas } from "./seoSchemas";
import how_it_works1 from "./assets/images/how_it_works1.png";
import how_it_works2 from "./assets/images/how_it_works2.png";
import how_it_works3 from "./assets/images/how_it_works3.png";


export default function Home() {
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const [expandedTestimonial, setExpandedTestimonial] = useState(null);

    const orgJsonLd = orgSchemas(translations.home.hero_sub);

    return (
        <>
            <SEO
                title={null}
                description={translations.home.hero_sub}
                path="/"
                jsonLd={orgJsonLd}
            />
            <section className="hero">
                <div className="wrap">
                    <div className="hero-copy">
                        <span className="eyebrow">{translations.home.eyebrow}</span>
                        <h1>{translations.home.hero_title_pre} <span className="accent">{translations.header.aarambh}</span> —{translations.home.hero_title_post}</h1>
                        <p className="sub">{translations.home.hero_sub}</p>

                        <div className="hero-features">
                            <div className="hf-item">
                                <div className="hf-ic hf-ic-chat">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.3-3.5A7.96 7.96 0 0 1 4 12Z" stroke="#DFB16B" strokeWidth="1.7" strokeLinejoin="round" />
                                        <path d="M8.5 11.3l2 2 4.5-4.6" stroke="#DFB16B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>{translations.home.feature_wa_title}</h4>
                                    <ul>
                                        <li>{translations.home.feature_wa_b1}</li>
                                        <li>{translations.home.feature_wa_b2}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="hf-item">
                                <div className="hf-ic hf-ic-forms">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <rect x="5" y="3" width="14" height="18" rx="2" stroke="#DFB16B" strokeWidth="1.7" />
                                        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="#DFB16B" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>{translations.home.feature_forms_title}</h4>
                                    <ul>
                                        <li>{translations.home.feature_forms_b1}</li>
                                        <li>{translations.home.feature_forms_b2}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="hf-item">
                                <div className="hf-ic hf-ic-call">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 4h3.2l1.4 4.2-2 1.6a12 12 0 0 0 5.6 5.6l1.6-2L19 15v3.2c0 1-.9 1.8-1.9 1.6C10.6 18.9 5.1 13.4 4.2 6.9 4 5.9 4.8 5 5.8 5Z" stroke="#DFB16B" strokeWidth="1.6" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>{translations.home.feature_call_title}</h4>
                                    <ul>
                                        <li>{translations.home.feature_call_b1}</li>
                                        <li>{translations.home.feature_call_b2}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="hero-ctas">
                            <Link to="/services" className="btn btn-gold btn-lg">
                                {translations.home.cta_explore}
                            </Link>
                            <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-cream">{translations.home.cta_talk_expert}</a>
                        </div>
                    </div>

                    <div className="path-graphic">
                        <div className="hero-showcase">
                            <div className="hs-decor hs-decor-1"></div>
                            <div className="hs-decor hs-decor-2"></div>

                            <div className="hs-window">
                                <div className="hs-window-bar">
                                    <span className="hs-dot hs-dot-r"></span>
                                    <span className="hs-dot hs-dot-y"></span>
                                    <span className="hs-dot hs-dot-g"></span>
                                    <span className="hs-window-title">{translations.home.showcase_window_title}</span>
                                </div>
                                <div className="hs-window-body">
                                    <div className="hs-tile">
                                        <div className="hs-tile-ic hs-tile-ic-a">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3c3.5 0 6 2 6 5.2 0 4.4-3 8.4-6 12.3-3-3.9-6-7.9-6-12.3C6 5 8.5 3 12 3Z" stroke="#076140" strokeWidth="1.5" /><circle cx="12" cy="8.4" r="2.1" stroke="#076140" strokeWidth="1.4" /></svg>
                                        </div>
                                        <span>{translations.home.showcase_tile_aadhaar}</span>
                                    </div>
                                    <div className="hs-tile">
                                        <div className="hs-tile-ic hs-tile-ic-b">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="#C3872D" strokeWidth="1.5" /><circle cx="8" cy="12" r="1.8" stroke="#C3872D" strokeWidth="1.3" /><path d="M13 10h5M13 14h5" stroke="#C3872D" strokeWidth="1.3" strokeLinecap="round" /></svg>
                                        </div>
                                        <span>{translations.home.showcase_tile_pan}</span>
                                    </div>
                                    <div className="hs-tile">
                                        <div className="hs-tile-ic hs-tile-ic-c">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7.5" stroke="#076140" strokeWidth="1.5" /><path d="M12 8v4l3 2" stroke="#076140" strokeWidth="1.4" strokeLinecap="round" /></svg>
                                        </div>
                                        <span>{translations.home.showcase_tile_pension}</span>
                                    </div>
                                    <div className="hs-tile">
                                        <div className="hs-tile-ic hs-tile-ic-d">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="3.5" width="16" height="17" rx="2" stroke="#C3872D" strokeWidth="1.5" /><path d="M7.5 8h9M7.5 11.5h9M7.5 15h5.5" stroke="#C3872D" strokeWidth="1.3" strokeLinecap="round" /></svg>
                                        </div>
                                        <span>{translations.home.showcase_tile_certificate}</span>
                                    </div>
                                    <div className="hs-tile">
                                        <div className="hs-tile-ic hs-tile-ic-e">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="14" rx="2" stroke="#076140" strokeWidth="1.5" /><path d="M7 15l2.5-3 2 2L15 10l2.5 3" stroke="#076140" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <span>{translations.home.showcase_tile_voter}</span>
                                    </div>
                                    <div className="hs-tile">
                                        <div className="hs-tile-ic hs-tile-ic-f">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 9h14l-1.3 9.2a2 2 0 0 1-2 1.8H8.3a2 2 0 0 1-2-1.8L5 9Z" stroke="#C3872D" strokeWidth="1.5" strokeLinejoin="round" /><path d="M9 9V7a3 3 0 0 1 6 0v2" stroke="#C3872D" strokeWidth="1.4" /></svg>
                                        </div>
                                        <span>{translations.home.showcase_tile_ration}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hs-flow">
                                <div className="hs-flow-node">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="4" y="3.5" width="16" height="17" rx="2" stroke="#076140" strokeWidth="1.6" /><path d="M7.5 8h9M7.5 11.5h9M7.5 15h5.5" stroke="#076140" strokeWidth="1.4" strokeLinecap="round" /></svg>
                                </div>
                                <span className="hs-flow-txt">{translations.home.showcase_flow_1}</span>
                                <span className="hs-flow-line"></span>
                                <div className="hs-flow-node hs-flow-node-active">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                                <span className="hs-flow-txt">{translations.home.showcase_flow_2}</span>
                                <span className="hs-flow-line"></span>
                                <div className="hs-flow-node">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.3-3.5A7.96 7.96 0 0 1 4 12Z" stroke="#076140" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                                </div>
                                <span className="hs-flow-txt">{translations.home.showcase_flow_3}</span>
                            </div>

                            <div className="hs-seal">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12l5 5L20 6" stroke="#05412B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>{translations.home.stat_4_num}</span>
                            </div>

                            <div className="hs-endorse">
                                <div className="hs-endorse-label">{translations.home.showcase_endorse_label}</div>
                                <div className="hs-endorse-stats">
                                    <div className="hs-stat"><b>{translations.home.stat_1_num}</b><span>{translations.home.stat_1_label}</span></div>
                                    <div className="hs-stat"><b>{translations.home.stat_2_num}</b><span>{translations.home.stat_2_label}</span></div>
                                    <div className="hs-stat"><b>{translations.home.stat_3_num}</b><span>{translations.home.stat_3_label}</span></div>
                                    <div className="hs-stat"><b>{translations.home.stat_4_num}</b><span>{translations.home.stat_4_label}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="trustbar">
                <div className="wrap">
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" stroke="#076140" strokeWidth="1.6" /></svg></div>
                        <div><h4>{translations.home.trust_1_title}</h4><p>{translations.home.trust_1_desc}</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="#076140" strokeWidth="1.6" /><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" stroke="#076140" strokeWidth="1.6" /></svg></div>
                        <div><h4>{translations.home.trust_2_title}</h4><p>{translations.home.trust_2_desc}</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="#076140" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                        <div><h4>{translations.home.trust_3_title}</h4><p>{translations.home.trust_3_desc}</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9-9.5C1 7 3.5 3.5 7 4c2 .3 3.7 1.9 5 4 1.3-2.1 3-3.7 5-4 3.5-.5 6 3 4 7.5-2 5-9 9.5-9 9.5Z" stroke="#076140" strokeWidth="1.5" /></svg></div>
                        <div><h4>{translations.home.trust_4_title}</h4><p>{translations.home.trust_4_desc}</p></div>
                    </div>
                </div>
            </div>

            {/* <section className="how-it-works">
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
            </section> */}

            {/* <section className="trust-section">
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
            </section> */}

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

                            <p className={expandedTestimonial === "t2" ? "expanded" : "collapsed"}>
                                {translations.home.t2_text}
                            </p>

                            <button
                                className="read-more-btn"
                                onClick={() =>
                                    setExpandedTestimonial(
                                        expandedTestimonial === "t2" ? null : "t2"
                                    )
                                }
                            >
                                {expandedTestimonial === "t2" ? translations.home.show_less : translations.home.show_more}
                            </button>

                            <div className="tperson">
                                <div className="avatar">R</div>

                                <div>
                                    <div className="who">
                                        {translations.home.t2_name}
                                    </div>

                                    <div className="role">
                                        {translations.home.t2_role}
                                    </div>
                                </div>
                            </div>
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