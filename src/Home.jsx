import logo from "./assets/logo.png";
import "./home.css";
import { Route, Link } from "react-router-dom";
import whatsappPreview from "./assets/images/whatsapp-preview.jpeg";
import how_it_works1 from "./assets/images/how_it_works1.png";
import how_it_works2 from "./assets/images/how_it_works2.png";
import how_it_works3 from "./assets/images/how_it_works3.png";


export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="wrap">
                    <div className="hero-copy">
                        <span className="eyebrow">🇮🇳 India's Trusted Guidance Platform</span>
                        <h1>Every citizen's <span className="accent">Aarambh</span> — <br />to schemes, services &amp; a better future.</h1>
                        <p className="sub">From government scheme enrolment to education forms, job applications to career direction — Aarambh gives you accurate information and expert hand-holding, end to end.</p>
                        <div className="hero-ctas">
                            <Link to="/services" className="btn btn-gold">Explore Services →</Link>
                            <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-cream" className="btn btn-outline-cream">Talk to an Expert</a>
                        </div>
                        <div className="stat-row">
                            <div className="stat"><b>85K+</b><span>Citizens Guided</span></div>
                            <div className="stat"><b>40+</b><span>Schemes &amp; Services</span></div>
                            <div className="stat"><b>22</b><span>States Covered</span></div>
                            <div className="stat"><b>4.8★</b><span>Average Rating</span></div>
                        </div>
                    </div>

                    <div className="path-graphic">
                        <svg viewBox="0 0 420 460" fill="none">
                            <path d="M40 420 C 60 300, 120 260, 180 250 C 260 236, 300 180, 320 60" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" />
                            <circle cx="40" cy="420" r="7" fill="#FAF7EF" />
                            <circle cx="150" cy="272" r="7" fill="#FAF7EF" />
                            <circle cx="255" cy="205" r="7" fill="#FAF7EF" />
                            <circle cx="320" cy="60" r="9" fill="#C9A227" />
                            <path d="M312 60 L320 44 L328 60 Z" fill="#C9A227" />
                        </svg>
                        <div className="hero-image">
                            <img
                                src={whatsappPreview}
                                alt="Aarambh WhatsApp Service"
                                className="whatsapp-preview"
                            />
                        </div>
                        <div className="milestone-label" style={{ left: "2%", bottom: "2%" }}><span className="dot"></span>Govt. Schemes</div>
                        <div className="milestone-label" style={{ left: "26%", bottom: "38%" }}><span className="dot"></span>Documentation</div>
                        <div className="milestone-label" style={{ left: "48%", bottom: "56%" }}><span className="dot"></span>Education Forms</div>
                        <div className="milestone-label" style={{ right: "6%", top: "6%", background: "#C9A227", color: "#071B3F" }}>★ Better Future</div>
                    </div>
                </div>
            </section>

            <div className="trustbar">
                <div className="wrap">
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" stroke="#0A2A5E" strokeWidth="1.6" /></svg></div>
                        <div><h4>Accurate Information</h4><p>Guidance cross-checked against the latest official notifications.</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke="#0A2A5E" strokeWidth="1.6" /><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" stroke="#0A2A5E" strokeWidth="1.6" /></svg></div>
                        <div><h4>Expert Guidance</h4><p>Trained counsellors and documentation specialists at every step.</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="#0A2A5E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                        <div><h4>Verified Process</h4><p>Every form and filing is reviewed twice before submission.</p></div>
                    </div>
                    <div className="trust-item">
                        <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9-9.5C1 7 3.5 3.5 7 4c2 .3 3.7 1.9 5 4 1.3-2.1 3-3.7 5-4 3.5-.5 6 3 4 7.5-2 5-9 9.5-9 9.5Z" stroke="#0A2A5E" strokeWidth="1.5" /></svg></div>
                        <div><h4>Pan-India Reach</h4><p>Support across 22 states in Hindi, English and regional languages.</p></div>
                    </div>
                </div>
            </div>

            <section className="how-it-works">
                <div className="section-top">
                    <span className="badge">SIMPLE PROCESS</span>
                    <h2>How It Works</h2>
                    <p>
                        Apply for any government service from your home in just
                        3 simple steps.
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
                                <h3>Browse Services</h3>
                            </div>

                            <p>
                                Pick from 55+ government services.<br />
                                Select, pay later & proceed instantly.
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
                                <h3>Chat on WhatsApp</h3>
                            </div>

                            <p>
                                Share documents securely on WhatsApp.<br />
                                Our experts verify everything.
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
                                <h3>Get Delivered</h3>
                            </div>

                            <p>
                                Your verified document / service arrives
                                at your doorstep.<br />
                                Rate us!
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <section className="trust-section">
                <div className="section-title">
                    <span></span>
                    <h4>WHY CITIZENS TRUST AARAMBH</h4>
                    <span></span>
                </div>
                <div className="trust-container">
                    <div className="trust-card">
                        <div className="icon blue">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3>100% Secure Documentation</h3>
                        <p>
                            Your personal documents are protected with bank-level
                            SSL encryption and strict privacy standards.
                        </p>
                    </div>

                    <div className="trust-card">
                        <div className="icon green">
                            <i className="fa-solid fa-user-check"></i>
                        </div>
                        <h3>Verified Expert Team</h3>
                        <p>
                            Every application is handled by experienced professionals
                            to ensure fast and accurate processing.
                        </p>
                    </div>

                    <div className="trust-card">
                        <div className="icon gold">
                            <i className="fa-solid fa-building-columns"></i>
                        </div>
                        <h3>Government Portal Processing</h3>
                        <p>
                            Applications are processed through official government
                            portals with complete transparency.
                        </p>
                    </div>

                    <div className="trust-card">
                        <div className="icon purple">
                            <i className="fa-solid fa-rotate"></i>
                        </div>
                        <h3>Service First, Payment Later*</h3>
                        <p>
                            Experience our trusted service first. Pay only after
                            successful completion of eligible services.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--cream)" }}>
                <div className="wrap">
                    <div className="section-head">
                        <span className="section-eyebrow">Real Stories</span>
                        <h2>What people say after their Aarambh</h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="tcard">
                            <div className="stars">★★★★★</div>
                            <p>"I had no idea I was eligible for a state scholarship until Aarambh's counsellor walked me through it. The form was filed within a week."</p>
                            <div className="tperson"><div className="avatar">S</div><div><div className="who">Sneha Kulkarni</div><div className="role">Student, Sholapur</div></div></div>
                        </div>
                        <div className="tcard">
                            <div className="stars">★★★★★</div>
                            <p>"Udyam registration for my workshop was done fully online. No agents, no running around offices — just clear steps."</p>
                            <div className="tperson"><div className="avatar">R</div><div><div className="who">Ramesh Patil</div><div className="role">Small Business Owner</div></div></div>
                        </div>
                        <div className="tcard">
                            <div className="stars">★★★★★</div>
                            <p>"The career guidance session actually helped my son choose a stream he was genuinely excited about — not just the popular one."</p>
                            <div className="tperson"><div className="avatar">A</div><div><div className="who">Anita Deshmukh</div><div className="role">Parent</div></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ctaband">
                <h2>Ready to begin your Aarambh?</h2>
                <p>Talk to a counsellor today — accurate information, the right direction, and a better future, one step closer.</p>
                <div className="hero-ctas" style={{ justifyContent: "center" }}>
                    <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-cream" className="btn btn-outline-cream">Chat on WhatsApp</a>
                    <Link to="/services" className="btn btn-outline-cream">Browse All Services →</Link>
                </div>
            </div>
        </>
    );
}