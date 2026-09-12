import "./contact_us.css";
import { Route, Link } from "react-router-dom";
import { memo, useContext } from "react";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "./LanguageContext";

const ContactUs = function () {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    const sendEmail = function() {
        console.log("sdfsdfsdfs");
    }
    return (
        <>
            <section className="contact_us-hero contact_us_heading">
                <div className="contact_us-hero-inner">
                    <div className="contact_us-tag-chip"><span className="contact_us-dot"></span>{translations.contact.chip}</div>
                    <h1>{translations.contact.hero_title_pre} <em>{translations.contact.hero_title_em}</em></h1>
                    <p className="contact_us-lead">{translations.contact.hero_lead}</p>
                </div>
            </section>

            <div className="contact_us-contact-cards contact_us_heading">
                <div className="contact_us-card-row">
                    <div className="contact_us-c-card">
                        <div className="contact_us-c-icon">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div>
                            <div className="contact_us-label">{translations.contact.call_label}</div>
                            <div className="contact_us-value">+{import.meta.env.VITE_WHATSAPP_NUMBER.replace(
                                /^(\d{2})(\d{5})(\d{5})$/,
                                "$1 $2 $3"
                            )}</div>
                            <div className="contact_us-sub">{translations.contact.call_sub}</div>
                        </div>
                    </div>
                    <div className="contact_us-c-card">
                        <div className="contact_us-c-icon">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
                        </div>
                        <div>
                            <div className="contact_us-label">{translations.contact.email_label}</div>
                            <div className="contact_us-value">{import.meta.env.VITE_AARAMBH_EMAIL}</div>
                            <div className="contact_us-sub">{translations.contact.email_sub}</div>
                        </div>
                    </div>
                    <div className="contact_us-c-card">
                        <div className="contact_us-c-icon">
                            <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-cream">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                            </a>
                        </div>
                        <div>
                            <div className="contact_us-label">{translations.contact.whatsapp_label}</div>
                            <div className="contact_us-value">{translations.contact.whatsapp_value}</div>
                            <div className="contact_us-sub">{translations.contact.whatsapp_sub}</div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="contact_us-contact-main contact_us_heading">
                <div className="contact_us-cm-inner">
                    <div className="contact_us-form-card" id="form">
                        <h2>{translations.contact.form_title}</h2>
                        <p>{translations.contact.form_sub}</p>
                        <div className="contact_us-form-grid">
                            <div className="contact_us-field">
                                <label>{translations.contact.field_name} <span className="contact_us-req">*</span></label>
                                <input type="text" name="user_name" placeholder={translations.contact.placeholder_name} />
                            </div>
                            <div className="contact_us-field">
                                <label>{translations.contact.field_phone} <span className="contact_us-req">*</span></label>
                                <input type="tel" name="user_mobile" placeholder={translations.contact.placeholder_phone} />
                            </div>
                            <div className="contact_us-field">
                                <label>{translations.contact.field_email} <span className="contact_us-req">*</span></label>
                                <input type="email" name="user_email" placeholder={translations.contact.placeholder_email} />
                            </div>
                            <div className="contact_us-field">
                                <label>{translations.contact.field_help}</label>
                                <select name="service_name">
                                    <option>{translations.contact.opt_select}</option>
                                    <option value="Government Scheme">{translations.contact.opt_scheme}</option>
                                    <option value="Essential Service / Document">{translations.contact.opt_service}</option>
                                    <option value="Education Form">{translations.contact.opt_edu}</option>
                                    <option value="Job Application">{translations.contact.opt_job}</option>
                                    <option value="Career Guidance">{translations.contact.opt_career}</option>
                                    <option value="Something else">{translations.contact.opt_other}</option>
                                </select>
                            </div>
                            <div className="contact_us-field full">
                                <label>{translations.contact.field_message} <span className="contact_us-req">*</span></label>
                                <textarea name="message" placeholder={translations.contact.placeholder_message}></textarea>
                            </div>
                        </div>
                        <button className="contact_us-submit-btn" type="button" onClick={sendEmail}>
                            {translations.contact.submit_btn}
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        </button>
                    </div>

                    <div className="contact_us-side-col">
                        <div className="contact_us-office-card">
                            <h2>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="var(--navy)" strokeWidth="1.8"><path d="M3 21h18M6 21V7l6-4 6 4v14M10 21v-6h4v6" /></svg>
                                {translations.contact.office_title}
                            </h2>
                            <div className="contact_us-office-row">
                                <div className="contact_us-oi"><svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                                <div>
                                    <div className="contact_us-label">{translations.contact.address_label}</div>
                                    <div className="contact_us-val">{translations.contact.address_value}</div>
                                </div>
                            </div>
                            <div className="contact_us-office-row">
                                <div className="contact_us-oi"><svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg></div>
                                <div>
                                    <div className="contact_us-label">{translations.contact.email_field_label}</div>
                                    <div className="contact_us-val">{import.meta.env.VITE_AARAMBH_EMAIL}</div>
                                </div>
                            </div>
                            <div className="contact_us-office-row">
                                <div className="contact_us-oi"><svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                                <div>
                                    <div className="contact_us-label">{translations.contact.phone_field_label}</div>
                                    <div className="contact_us-val">+{import.meta.env.VITE_WHATSAPP_NUMBER.replace(
                                        /^(\d{2})(\d{5})(\d{5})$/,
                                        "$1 $2 $3"
                                    )}</div>
                                </div>
                            </div>
                        </div>

                        <div className="contact_us-hours-card">
                            <h2>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="var(--gold-soft)" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                {translations.contact.hours_title}
                            </h2>
                            <div className="contact_us-hours-big">{translations.contact.hours_big}</div>
                            <p>{translations.contact.hours_desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact_us-faq contact_us_heading">
                <div className="contact_us-faq-inner">
                    <div className="contact_us-faq-head">
                        <div className="contact_us-story-label">{translations.contact.faq_label}</div>
                        <h2>{translations.contact.faq_title}</h2>
                    </div>
                    <div className="contact_us-faq-grid">
                        <div className="contact_us-faq-item">
                            <h3><span className="contact_us-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>{translations.contact.faq1_q}</h3>
                            <p>{translations.contact.faq1_a}</p>
                        </div>
                        <div className="contact_us-faq-item">
                            <h3><span className="contact_us-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>{translations.contact.faq2_q}</h3>
                            <p>{translations.contact.faq2_a}</p>
                        </div>
                        <div className="contact_us-faq-item">
                            <h3><span className="contact_us-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>{translations.contact.faq3_q}</h3>
                            <p>{translations.contact.faq3_a}</p>
                        </div>
                        <div className="contact_us-faq-item">
                            <h3><span className="contact_us-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>{translations.contact.faq4_q}</h3>
                            <p>{translations.contact.faq4_a}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact_us-badges contact_us_heading">
                <div className="contact_us-badge-row">
                    <div className="contact_us-badge">
                        <div className="contact_us-bi"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                        <div><div className="contact_us-bt">{translations.contact.badge1_title}</div><div className="contact_us-bs">{translations.contact.badge1_sub}</div></div>
                    </div>
                    <div className="contact_us-badge">
                        <div className="contact_us-bi"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                        <div><div className="contact_us-bt">{translations.contact.badge2_title}</div><div className="contact_us-bs">{translations.contact.badge2_sub}</div></div>
                    </div>
                    <div className="contact_us-badge">
                        <div className="contact_us-bi"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14M5 8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" /></svg></div>
                        <div><div className="contact_us-bt">{translations.contact.badge3_title}</div><div className="contact_us-bs">{translations.contact.badge3_sub}</div></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default memo(ContactUs);