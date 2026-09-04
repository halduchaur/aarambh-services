import "./contact_us.css";
import { Route, Link } from "react-router-dom";
import { memo } from "react";
import logo from "./assets/images/aarambh_logo.jpeg";

const ContactUs = function() {
    return (
        <>
            <section className="contact_us-hero contact_us_heading">
                <div className="contact_us-hero-inner">
                    <div className="contact_us-tag-chip"><span className="contact_us-dot"></span>हम आपकी मदद के लिए हैं</div>
                    <h1>Stuck somewhere? <em>Talk to us.</em></h1>
                    <p className="contact_us-lead">Whether it's a scheme you're unsure about, a form that's due tomorrow, or a career decision you need direction on — Aarambh's team is a message away, any time of day.</p>
                </div>
            </section>

            <div className="contact_us-contact-cards contact_us_heading">
                <div className="contact_us-card-row">
                    <div className="contact_us-c-card">
                        <div className="contact_us-c-icon">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div>
                            <div className="contact_us-label">CALL US</div>
                            <div className="contact_us-value">+91 90967 59855</div>
                            <div className="contact_us-sub">Available 24×7</div>
                        </div>
                    </div>
                    <div className="contact_us-c-card">
                        <div className="contact_us-c-icon">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
                        </div>
                        <div>
                            <div className="contact_us-label">EMAIL US</div>
                            <div className="contact_us-value">aarambhindia89@gmail.com</div>
                            <div className="contact_us-sub">We reply the same day</div>
                        </div>
                    </div>
                    <div className="contact_us-c-card">
                        <div className="contact_us-c-icon">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                        </div>
                        <div>
                            <div className="contact_us-label">WHATSAPP</div>
                            <div className="contact_us-value">Chat with Us</div>
                            <div className="contact_us-sub">Fastest way to reach us</div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="contact_us-contact-main contact_us_heading">
                <div className="contact_us-cm-inner">
                    <div className="contact_us-form-card" id="form">
                        <h2>Send us a message</h2>
                        <p>Fill in the form below and our team will get back to you the same day.</p>
                        <div className="contact_us-form-grid">
                            <div className="contact_us-field">
                                <label>Full Name <span className="contact_us-req">*</span></label>
                                <input type="text" placeholder="Enter your full name" />
                            </div>
                            <div className="contact_us-field">
                                <label>Phone Number <span className="contact_us-req">*</span></label>
                                <input type="tel" placeholder="+91 XXXXX XXXXX" />
                            </div>
                            <div className="contact_us-field">
                                <label>Email Address <span className="contact_us-req">*</span></label>
                                <input type="email" placeholder="you@example.com" />
                            </div>
                            <div className="contact_us-field">
                                <label>What do you need help with?</label>
                                <select>
                                    <option>Select an option</option>
                                    <option>Government Scheme</option>
                                    <option>Essential Service / Document</option>
                                    <option>Education Form</option>
                                    <option>Job Application</option>
                                    <option>Career Guidance</option>
                                    <option>Something else</option>
                                </select>
                            </div>
                            <div className="contact_us-field full">
                                <label>Your Message <span className="contact_us-req">*</span></label>
                                <textarea placeholder="Describe what you need help with..."></textarea>
                            </div>
                        </div>
                        <button className="contact_us-submit-btn" type="button">
                            Send Message
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        </button>
                    </div>

                    <div className="contact_us-side-col">
                        <div className="contact_us-office-card">
                            <h2>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="var(--navy)" strokeWidth="1.8"><path d="M3 21h18M6 21V7l6-4 6 4v14M10 21v-6h4v6" /></svg>
                                Our Office
                            </h2>
                            <div className="contact_us-office-row">
                                <div className="contact_us-oi"><svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                                <div>
                                    <div className="contact_us-label">ADDRESS</div>
                                    <div className="contact_us-val">In front of Radheshyam Gym, Agrasen Nagar Road, Ramnagar, Jalna, Maharashtra – 431203</div>
                                </div>
                            </div>
                            <div className="contact_us-office-row">
                                <div className="contact_us-oi"><svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg></div>
                                <div>
                                    <div className="contact_us-label">EMAIL</div>
                                    <div className="contact_us-val">aarambhindia89@gmail.com</div>
                                </div>
                            </div>
                            <div className="contact_us-office-row">
                                <div className="contact_us-oi"><svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                                <div>
                                    <div className="contact_us-label">PHONE</div>
                                    <div className="contact_us-val">+91 90967 59855</div>
                                </div>
                            </div>
                        </div>

                        <div className="contact_us-hours-card">
                            <h2>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="var(--gold-soft)" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                Business Hours
                            </h2>
                            <div className="contact_us-hours-big">24 × 7</div>
                            <p>Someone from Aarambh is reachable every day, including weekends and holidays — deadlines don't wait, and neither do we.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact_us-faq contact_us_heading">
                <div className="contact_us-faq-inner">
                    <div className="contact_us-faq-head">
                        <div className="contact_us-story-label">Frequently Asked</div>
                        <h2>Before you write in</h2>
                    </div>
                    <div className="contact_us-faq-grid">
                        <div className="contact_us-faq-item">
                            <h3><span className="contact_us-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>How soon will I hear back?</h3>
                            <p>Calls and WhatsApp messages are answered as they come in, 24×7. Emails and form submissions get a reply the same day.</p>
                        </div>
                        <div className="contact_us-faq-item">
                            <h3><span className="contact_us-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Do I need to visit the office in person?</h3>
                            <p>Not for most schemes, forms, or guidance — those are handled remotely. Visit us in Jalna if you'd prefer to sit down and talk it through.</p>
                        </div>
                        <div className="contact_us-faq-item">
                            <h3><span className="contact_us-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Can I ask about career guidance without a specific form in mind?</h3>
                            <p>Yes — a lot of people write in just to figure out their next step. Tell us where you are and where you'd like to go.</p>
                        </div>
                        <div className="contact_us-faq-item">
                            <h3><span className="contact_us-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>What if I'm not sure which service I need?</h3>
                            <p>Leave "Service Needed" blank and describe your situation in the message — our team will point you to the right one.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact_us-badges contact_us_heading">
                <div className="contact_us-badge-row">
                    <div className="contact_us-badge">
                        <div className="contact_us-bi"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                        <div><div className="contact_us-bt">Always Reachable</div><div className="contact_us-bs">24×7 phone &amp; WhatsApp</div></div>
                    </div>
                    <div className="contact_us-badge">
                        <div className="contact_us-bi"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                        <div><div className="contact_us-bt">Real People</div><div className="contact_us-bs">A team, not a bot</div></div>
                    </div>
                    <div className="contact_us-badge">
                        <div className="contact_us-bi"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14M5 8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" /></svg></div>
                        <div><div className="contact_us-bt">Hindi &amp; English</div><div className="contact_us-bs">Ask in whichever you're comfortable with</div></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default memo(ContactUs);