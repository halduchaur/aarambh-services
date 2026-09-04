import "./about_us.css";
import { Route, Link } from "react-router-dom";
import { memo } from "react";
import logo from "./assets/images/aarambh_logo.jpeg";

const AboutUs = () => {
    return (
        <>
            <section className="about_us-hero about_us_heading">
                <div className="about_us-hero-inner">
                    <div>
                        <div className="about_us-tag-chip"><span className="about_us-dot"></span>सही जानकारी · सही दिशा · बेहतर भविष्य</div>
                        <h1>Every beginning deserves the <em>right</em> direction.</h1>
                        <p className="about_us-lead">Aarambh helps people across India find their footing — from government schemes and everyday paperwork to education forms, job openings, and the career guidance to make sense of it all.</p>
                        <p className="about_us-hero-hindi">आरंभ का अर्थ है शुरुआत — और हर सही शुरुआत के लिए सही जानकारी और सही दिशा ज़रूरी है। यही हमारा काम है।</p>
                        <div className="about_us-hero-buttons">
                            <a href="#journey" className="about_us-btn-primary">See what we guide</a>
                            <a href="#story" className="about_us-btn-ghost">Read our story</a>
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
                        <div className="about_us-story-label">Our Beginning</div>
                        <h2>Named for the first step, not the finish line.</h2>
                    </div>
                    <div className="about_us-story-text">
                        <p><strong>Aarambh</strong> — आरंभ — means beginning. It's the name we chose because most people don't get stuck on the big decisions in life. They get stuck at the start: which form to fill, which scheme they actually qualify for, which office to walk into, or which career path even makes sense for them.</p>
                        <p>Government processes, admission forms, and job listings in India are scattered across departments, websites, and word-of-mouth. Good information exists — it's just hard to find, harder to trust, and often written in language that assumes you already know the system.</p>
                        <p>Aarambh exists to close that gap. We bring together government schemes, essential services, education paperwork, job openings, and career guidance in one place, explained in plain language, so the first step never feels like the hardest one.</p>
                    </div>
                </div>
            </section>

            <section className="about_us-journey about_us_heading" id="journey">
                <div className="about_us-journey-inner">
                    <div className="about_us-journey-head">
                        <div className="about_us-story-label">What We Guide You Through</div>
                        <h2>One platform, five parts of the same journey.</h2>
                        <p>From your first scheme application to your first job offer, Aarambh stays with you at every stage.</p>
                    </div>
                    <div className="about_us-path">
                        <div className="about_us-path-row">
                            <div className="about_us-stop">
                                <div className="about_us-marker">1</div>
                                <h3>Govt. Schemes</h3>
                                <p>Find schemes you're eligible for, explained in plain language — not government notification format.</p>
                            </div>
                            <div className="about_us-stop">
                                <div className="about_us-marker">2</div>
                                <h3>Essential Services</h3>
                                <p>PAN, Aadhaar, income and caste certificates, and other everyday documentation, handled without the queue.</p>
                            </div>
                            <div className="about_us-stop">
                                <div className="about_us-marker">3</div>
                                <h3>Education Forms</h3>
                                <p>Admissions, scholarships, and exam forms — deadlines tracked and paperwork checked before you submit.</p>
                            </div>
                            <div className="about_us-stop">
                                <div className="about_us-marker">4</div>
                                <h3>Jobs</h3>
                                <p>Government and private openings matched to your qualifications, not buried in a hundred tabs.</p>
                            </div>
                            <div className="about_us-stop">
                                <div className="about_us-marker">5</div>
                                <h3>Career Guidance</h3>
                                <p>One-on-one direction on what to study, apply for, or pursue next — from people, not just a form.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_us-process about_us_heading" id="process">
                <div className="about_us-process-inner">
                    <div className="about_us-process-head">
                        <div className="about_us-story-label">How It Works</div>
                        <h2>Simple by design, thorough underneath.</h2>
                    </div>
                    <div className="about_us-steps">
                        <div className="about_us-step">
                            <div className="about_us-num">01</div>
                            <h3>Tell us your goal</h3>
                            <p>Share what you're trying to do — a scheme, a form, a job, or just direction — in your own words.</p>
                        </div>
                        <div className="about_us-step">
                            <div className="about_us-num">02</div>
                            <h3>Get matched, not overwhelmed</h3>
                            <p>We narrow down the schemes, forms, or roles that actually apply to your situation.</p>
                        </div>
                        <div className="about_us-step">
                            <div className="about_us-num">03</div>
                            <h3>We check before you submit</h3>
                            <p>Our team reviews your documents so applications go in complete the first time.</p>
                        </div>
                        <div className="about_us-step">
                            <div className="about_us-num">04</div>
                            <h3>Track it through</h3>
                            <p>Real status updates until it's resolved — no guessing, no repeat visits to an office.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_us-values about_us_heading" id="values">
                <div className="about_us-values-inner">
                    <div className="about_us-values-head">
                        <div className="story-label">What We Stand For</div>
                        <h2>The principles behind Aarambh</h2>
                    </div>
                    <div className="about_us-value-grid">
                        <div className="about_us-value-main">
                            <h3>Plain language over paperwork jargon</h3>
                            <p>If a scheme or form can't be explained in a sentence a first-time applicant understands, we haven't done our job yet. We rewrite government language into instructions people can actually follow.</p>
                        </div>
                        <div className="about_us-value-side">
                            <div className="about_us-value-card">
                                <h3>Access for everyone</h3>
                                <p>City or small town, first-generation graduate or seasoned applicant — the guidance should be the same quality for all of them.</p>
                            </div>
                            <div className="about_us-value-card">
                                <h3>Guidance, not just filing</h3>
                                <p>We don't just submit your form. We help you understand why it matters and what comes next.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_us-cta about_us_heading">
                <div className="about_us-cta-inner">
                    <div className="about_us-cta-text">
                        <h2>Ready to take your first step?</h2>
                        <p>Whether it's a scheme, a form, or your next career move — Aarambh is where you begin.</p>
                    </div>
                    <a href="#" className="about_us-btn-primary">Start with Aarambh</a>
                </div>
            </section>
        </>
    );
}

export default memo(AboutUs);