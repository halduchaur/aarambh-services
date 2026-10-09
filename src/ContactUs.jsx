import "./contact_us.css";
import { Link } from "./i18nRouting";
import { memo, useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "./LanguageContext";
import SEO from "./components/SEO";

const generateCaptcha = () => Math.random().toString(36).substring(2, 6).toUpperCase();

const ContactUs = function () {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    const formRef = useRef();
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");

    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaError, setCaptchaError] = useState(false);

    const refreshCaptcha = function () {
        setCaptcha(generateCaptcha());
        setCaptchaInput("");
        setCaptchaError(false);
    };

    const sendEmail = async function (e) {
        e.preventDefault();
        if (sending) {
            return;
        }
        if (captchaInput.trim().toUpperCase() !== captcha) {
            setCaptchaError(true);
            return;
        }
        setCaptchaError(false);
        setSending(true);
        setStatus("");
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, }
            );
            setStatus("success");
            formRef.current.reset();
            refreshCaptcha();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            refreshCaptcha();
        } finally {
            setSending(false);
        }
    };

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const formattedPhone = "+" + whatsappNumber.replace(/^(\d{2})(\d{5})(\d{5})$/, "$1 $2 $3");
    const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`;
    const officeAddress = translations.contact?.address_value || "123, Business Hub, Near Metro Station, New Delhi - 110001";
    const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;
    const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

    return (
        <>
            <SEO
                title={translations.contact?.seo_title || "Contact Us"}
                description={translations.contact?.hero_lead}
                path="/contact-us"
            />

            {/* ---------- Hero ---------- */}
            <section className="contact_us-hero contact_us_heading">
                <div className="contact_us-hero-grid">
                    <div className="contact_us-hero-left">
                        <div className="contact_us-tag-chip">{translations.contact?.chip || "GET IN TOUCH"}</div>
                        <h1>{translations.contact?.hero_title_pre || "We're Here to Help You!"}</h1>
                        <p className="contact_us-lead">
                            {translations.contact?.hero_lead || "Have a question, need assistance, or want to know more about our services? Feel free to reach out. Our team at Aarambh is always ready to help you."}
                        </p>

                        <div className="contact_us-trust-row">
                            <div className="contact_us-trust-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3z" /><path d="m9 12 2 2 4-4" /></svg>
                                <span>{translations.contact?.trust1 || "Trusted & Secure"}</span>
                            </div>
                            <div className="contact_us-trust-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                <span>{translations.contact?.trust2 || "Quick Response"}</span>
                            </div>
                            <div className="contact_us-trust-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                <span>{translations.contact?.trust3 || "Dedicated Support Team"}</span>
                            </div>
                            <div className="contact_us-trust-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3z" /><path d="m9 12 2 2 4-4" /></svg>
                                <span>{translations.contact?.trust4 || "100% Genuine Government Services"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact_us-hero-right">
                        <div className="contact_us-handwritten">{translations.contact?.hero_handwritten || "Your Queries Matter to Us!"}</div>
                        {/* Illustration lives in public/images/contact-hero.svg (swap for a real photo anytime) */}
                        <img className="contact_us-hero-img" src="/contact-hero.svg" width="640" height="480" alt="Aarambh support team workspace" />
                        <div className="contact_us-sticky-note">
                            <span>{translations.contact?.sticky1 || "Ask"}</span>
                            <span>{translations.contact?.sticky2 || "Connect"}</span>
                            <span>{translations.contact?.sticky3 || "Get Support"}</span>
                            <span>{translations.contact?.sticky4 || "We're here!"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Info / Form / Map ---------- */}
            <section className="contact_us-main contact_us_heading">
                <div className="contact_us-main-grid">

                    {/* Column 1: Contact Information */}
                    <div className="contact_us-info-card">
                        <h2>{translations.contact?.info_title || "Contact Information"}</h2>
                        <p className="contact_us-card-sub">{translations.contact?.info_sub || "Reach out to us through any of the following channels."}</p>

                        <a className="contact_us-info-row" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                            <div className="contact_us-info-icon">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                            </div>
                            <div className="contact_us-info-text">
                                <div className="contact_us-info-title">{translations.contact?.whatsapp_label || "WhatsApp Us"}</div>
                                <div className="contact_us-info-desc">{translations.contact?.whatsapp_sub || "Get instant support for your queries."}</div>
                            </div>
                            <div className="contact_us-info-value">
                                {formattedPhone}
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </div>
                        </a>

                        <a className="contact_us-info-row" href={`mailto:${import.meta.env.VITE_AARAMBH_EMAIL}`}>
                            <div className="contact_us-info-icon">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
                            </div>
                            <div className="contact_us-info-text">
                                <div className="contact_us-info-title">{translations.contact?.email_label || "Email Us"}</div>
                                <div className="contact_us-info-desc">{translations.contact?.email_sub || "For detailed queries and document support."}</div>
                                <div className="contact_us-info-link">{import.meta.env.VITE_AARAMBH_EMAIL}</div>
                            </div>
                            <svg className="contact_us-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                        </a>

                        <a className="contact_us-info-row" href={`tel:+${whatsappNumber}`}>
                            <div className="contact_us-info-icon">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div className="contact_us-info-text">
                                <div className="contact_us-info-title">{translations.contact?.call_label || "Call Us"}</div>
                                <div className="contact_us-info-desc">{translations.contact?.call_sub || "Talk to our support team directly."}</div>
                                <div className="contact_us-info-link">{formattedPhone}</div>
                            </div>
                        </a>

                        <div className="contact_us-info-row">
                            <div className="contact_us-info-icon">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div className="contact_us-info-text">
                                <div className="contact_us-info-title">{translations.contact?.office_title || "Our Office"}</div>
                                <div className="contact_us-info-desc">{translations.contact?.office_sub || "Visit us at our office for in-person support."}</div>
                                <div className="contact_us-info-link">{officeAddress}</div>
                            </div>
                        </div>

                        <div className="contact_us-hours-box">
                            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                            <div>
                                <div className="contact_us-hours-title">{translations.contact?.hours_title || "Business Hours"}</div>
                                <div className="contact_us-hours-big">{translations.contact?.hours_big || "Mon - Sat : 9:00 AM - 7:00 PM"}</div>
                                <div className="contact_us-hours-sub">{translations.contact?.hours_desc || "(Sunday Closed)"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Send Us a Message */}
                    <div className="contact_us-form-card" id="form">
                        <h2>{translations.contact?.form_title || "Send Us a Message"}</h2>
                        <p>{translations.contact?.form_sub || "Fill out the form below and we'll get back to you as soon as possible."}</p>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <div className="contact_us-form-grid">
                                <div className="contact_us-field">
                                    <label>{translations.contact?.field_name || "Full Name"} <span className="contact_us-req">*</span></label>
                                    <input type="text" required name="user_name" placeholder={translations.contact?.placeholder_name || "Enter your full name"} />
                                </div>
                                <div className="contact_us-field">
                                    <label>{translations.contact?.field_email || "Email Address"} <span className="contact_us-req">*</span></label>
                                    <input type="email" required name="user_email" placeholder={translations.contact?.placeholder_email || "Enter your email"} />
                                </div>
                                <div className="contact_us-field">
                                    <label>{translations.contact?.field_phone || "Phone Number"} <span className="contact_us-req">*</span></label>
                                    <input type="tel" required name="user_mobile" placeholder={translations.contact?.placeholder_phone || "Enter your mobile number"} />
                                </div>
                                <div className="contact_us-field">
                                    <label>{translations.contact?.field_help || "Service Interested In"}</label>
                                    <select name="service_name" defaultValue="">
                                        <option value="">{translations.contact?.opt_select || "Select a service"}</option>
                                        <option value="Government Scheme">{translations.contact?.opt_scheme || "Government Scheme"}</option>
                                        <option value="Essential Service / Document">{translations.contact?.opt_service || "Essential Service / Document"}</option>
                                        <option value="Education Form">{translations.contact?.opt_edu || "Education Form"}</option>
                                        <option value="Job Application">{translations.contact?.opt_job || "Job Application"}</option>
                                        <option value="Career Guidance">{translations.contact?.opt_career || "Career Guidance"}</option>
                                        <option value="Something else">{translations.contact?.opt_other || "Something else"}</option>
                                    </select>
                                </div>
                                <div className="contact_us-field full">
                                    <label>{translations.contact?.field_message || "Your Message"} <span className="contact_us-req">*</span></label>
                                    <textarea name="message" required placeholder={translations.contact?.placeholder_message || "Write your query or requirement here..."}></textarea>
                                </div>
                            </div>

                            <div className="contact_us-captcha-row">
                                <div className="contact_us-captcha-code">
                                    {captcha.split("").map((ch, i) => (
                                        <span key={i} style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (6 + i * 2)}deg)` }}>{ch}</span>
                                    ))}
                                </div>
                                <button type="button" className="contact_us-captcha-refresh" onClick={refreshCaptcha} aria-label="Refresh captcha">
                                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                                </button>
                                <input
                                    type="text"
                                    className="contact_us-captcha-input"
                                    placeholder={translations.contact?.captcha_placeholder || "Enter captcha"}
                                    value={captchaInput}
                                    onChange={(e) => setCaptchaInput(e.target.value)}
                                    required
                                />
                            </div>
                            {captchaError && (<p className="contact_us-error">{translations.contact?.captcha_error || "Captcha does not match. Please try again."}</p>)}

                            <button className="contact_us-submit-btn" type="submit" disabled={sending}>
                                {sending ? (translations.contact?.sending || "Sending...") : (translations.contact?.submit_btn || "Send Message")}
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            </button>

                            <p className="contact_us-privacy-note">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                {translations.contact?.privacy_note || "Your information is safe with us. We respect your privacy."}
                            </p>

                            {status === "success" && (<p className="contact_us-success">{translations.contact?.form_success || "Message sent successfully!"}</p>)}
                            {status === "error" && (<p className="contact_us-error">{translations.contact?.form_error || "Failed to send message. Please try again."}</p>)}
                        </form>
                    </div>

                    {/* Column 3: Map + Why Contact Us */}
                    <div className="contact_us-side-col">
                        <div className="contact_us-map-card">
                            <h2>{translations.contact?.map_title || "Find Us on Map"}</h2>
                            <p className="contact_us-card-sub">{translations.contact?.map_sub || "Locate our office easily on Google Maps."}</p>
                            <div className="contact_us-map-frame">
                                <iframe
                                    title="Aarambh office location"
                                    src={mapEmbedSrc}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <a className="contact_us-map-btn" href={mapLinkHref} target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                {translations.contact?.map_btn || "View on Google Maps"}
                                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                        </div>

                        <div className="contact_us-why-card">
                            <h2>{translations.contact?.why_title || "Why Contact Aarambh?"}</h2>
                            <div className="contact_us-why-grid">
                                <div className="contact_us-why-item">
                                    <div className="contact_us-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
                                    <span>{translations.contact?.why1 || "Quick Resolution"}</span>
                                </div>
                                <div className="contact_us-why-item">
                                    <div className="contact_us-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                                    <span>{translations.contact?.why2 || "Expert Guidance"}</span>
                                </div>
                                <div className="contact_us-why-item">
                                    <div className="contact_us-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
                                    <span>{translations.contact?.why3 || "Accurate Information"}</span>
                                </div>
                                <div className="contact_us-why-item">
                                    <div className="contact_us-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3z" /><path d="m9 12 2 2 4-4" /></svg></div>
                                    <span>{translations.contact?.why4 || "Trusted Support"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Bottom CTA strip ---------- */}
            <section className="contact_us-cta-strip contact_us_heading">
                <div className="contact_us-cta-inner">
                    <div className="contact_us-cta-left">
                        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        <div>
                            <div className="contact_us-cta-title">{translations.contact?.cta_title || "Quick Queries?"}</div>
                            <div className="contact_us-cta-sub">{translations.contact?.cta_sub || "Check our detailed FAQ section for instant answers to common questions."}</div>
                        </div>
                    </div>
                    <div className="contact_us-cta-right">
                        {translations.contact?.cta_handwritten || "We're just a message away!"}
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </div>
                </div>
            </section>
        </>
    );
}

export default memo(ContactUs);
