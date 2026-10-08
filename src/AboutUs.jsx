import "./about_us.css";
import { NavLink } from "./i18nRouting";
import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import SEO from "./components/SEO";

/* ---------- small inline icons ---------- */
const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" };

const IconShield = () => (<svg {...svgProps}><path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3z" /><path d="m9 12 2 2 4-4" /></svg>);
const IconUsers = () => (<svg {...svgProps}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const IconGlobe = () => (<svg {...svgProps}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></svg>);
const IconTarget = () => (<svg {...svgProps}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>);
const IconBolt = () => (<svg {...svgProps}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>);
const IconHeart = () => (<svg {...svgProps}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);
const IconDoc = () => (<svg {...svgProps}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /></svg>);
const IconClock = () => (<svg {...svgProps}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>);
const IconCheckCircle = () => (<svg {...svgProps}><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></svg>);
const IconArrow = () => (<svg {...svgProps} strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);

const AboutUs = () => {
    const { translations } = useContext(LanguageContext);
    // Every new text uses translations.about?.<key> with an English fallback,
    // so the page works even before you add these keys to your translations file.
    const t = (key, fallback) => translations.about?.[key] || fallback;

    const trustItems = [
        { icon: <IconShield />, text: t("trust1", "Trusted Platform") },
        { icon: <IconUsers />, text: t("trust2", "Expert Assistance") },
        { icon: <IconShield />, text: t("trust3", "Secure & Verified") },
        { icon: <IconGlobe />, text: t("trust4", "Pan India Support") },
    ];

    const stickyItems = [
        t("sticky1", "Aadhaar"),
        t("sticky2", "PAN Card"),
        t("sticky3", "Passport"),
        t("sticky4", "GST"),
        t("sticky5", "and more..."),
    ];

    const coreValues = [
        { cls: "green", icon: <IconShield />, title: t("v1_title", "Trust"), desc: t("v1_desc", "We value your privacy and ensure complete security.") },
        { cls: "yellow", icon: <IconUsers />, title: t("v2_title", "Transparency"), desc: t("v2_desc", "No hidden charges, no false promises.") },
        { cls: "blue", icon: <IconBolt />, title: t("v3_title", "Efficiency"), desc: t("v3_desc", "Quick and reliable service delivery.") },
        { cls: "purple", icon: <IconHeart />, title: t("v4_title", "Customer First"), desc: t("v4_desc", "Your satisfaction is our top priority.") },
    ];

    // NOTE: names/roles/photos below are from the design mockup. Replace with your real team.
    const team = [
        { name: "Sudhir", role: "Founder & CEO", photo: "/images/team-1.jpg" },
        { name: "Priya Sharma", role: "Operations Head", photo: "/images/team-2.jpg" },
        { name: "Rohit Verma", role: "Tech & Support", photo: "/images/team-3.jpg" },
        { name: "Neha Gupta", role: "Customer Support", photo: "/images/team-4.jpg" },
    ];

    // NOTE: these numbers are from the design mockup. Replace with your real figures.
    const stats = [
        { icon: <IconUsers />, big: t("stat1_big", "10,000+"), label: t("stat1_label", "Happy Customers") },
        { icon: <IconDoc />, big: t("stat2_big", "50+"), label: t("stat2_label", "Government Services") },
        { icon: <IconClock />, big: t("stat3_big", "24x7"), label: t("stat3_label", "Support Available") },
        { icon: <IconShield />, big: t("stat4_big", "100%"), label: t("stat4_label", "Secure & Verified") },
    ];

    return (
        <div className="about_us-page about_us_heading">
            <SEO
                title={translations.about?.seo_title || "About Us"}
                description={translations.about?.hero_lead}
                path="/about-us"
            />

            {/* ---------- Hero ---------- */}
            <section className="about_us-hero">
                <div className="about_us-hero-inner">
                    <div className="about_us-hero-left">
                        <div className="about_us-tag-chip">{t("chip", "ABOUT AARAMBH")}</div>
                        <h1>{t("hero_title", "Bringing Government Services Closer to You")}</h1>
                        <p className="about_us-lead">
                            {t("hero_p", "Aarambh is a trusted platform dedicated to making government and essential services simple, fast and accessible for everyone. We bridge the gap between complex processes and everyday people by providing reliable assistance, expert guidance and end-to-end support.")}
                        </p>
                        <div className="about_us-trust-row">
                            {trustItems.map((item, i) => (
                                <div className="about_us-trust-item" key={i}>
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                        <a href="#mission" className="about_us-btn-primary">
                            {t("btn_mission", "Our Mission")} <IconArrow />
                        </a>
                    </div>

                    <div className="about_us-hero-right">
                        <div className="about_us-handwritten">{t("hero_handwritten", "Your Growth, Our Support!")}</div>
                        <div className="about_us-hero-circle"></div>
                        {/* Replace with a real photo (transparent PNG works best) */}
                        <img className="about_us-hero-img" src="/images/about-hero.png" alt="Aarambh support executive" />
                        <div className="about_us-sticky-note">
                            {stickyItems.map((item, i) => (
                                <div className="about_us-sticky-row" key={i}><IconCheckCircle /> <span>{item}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="about_us-wrap">
                {/* ---------- Story + Vision ---------- */}
                <section className="about_us-story-row" id="story">
                    <img className="about_us-story-img" src="/images/about-story.jpg" alt="Better services, better tomorrow" />

                    <div className="about_us-story-text">
                        <div className="about_us-label">{t("story_label", "OUR STORY")}</div>
                        <h2>{t("story_title", "How Aarambh Started")}</h2>
                        <p>{t("story_p1", "Aarambh was founded with a simple vision – to make government services easy, reliable and accessible to every citizen. We noticed that many people struggle with documentation, official processes and complex online forms.")}</p>
                        <p>{t("story_p2", "That's when we decided to create Aarambh – a one-stop solution where people can get the right information, expert help and complete support for all essential services under one roof.")}</p>
                        <NavLink to="/how-it-works" className="about_us-btn-soft">
                            {t("btn_learn", "Learn More About Us")} <IconArrow />
                        </NavLink>
                    </div>

                    <div className="about_us-vision-card">
                        <div className="about_us-vision-icon"><IconTarget /></div>
                        <h3>{t("vision_title", "Our Vision")}</h3>
                        <p>{t("vision_p", "To become India's most trusted and preferred platform for all government and essential services.")}</p>
                        <span className="about_us-underline"></span>
                    </div>
                </section>

                {/* ---------- Mission + Core values ---------- */}
                <section className="about_us-mission-row">
                    <div className="about_us-mission-card" id="mission">
                        <div className="about_us-label">{t("mission_label", "OUR MISSION")}</div>
                        <h2>{t("mission_title", "We Aim to Make It Simple")}</h2>
                        <p>{t("mission_p", "Our mission is to empower every individual with easy access to government and essential services, ensuring a hassle-free, transparent and secure experience.")}</p>
                        <a href="#values" className="about_us-btn-soft">
                            {t("btn_values", "Our Values")} <IconArrow />
                        </a>
                    </div>

                    <div className="about_us-values-block" id="values">
                        <div className="about_us-label">{t("values_label", "OUR CORE VALUES")}</div>
                        <div className="about_us-values-grid">
                            {coreValues.map((v, i) => (
                                <div className="about_us-value-item" key={i}>
                                    <div className={`about_us-value-icon ${v.cls}`}>{v.icon}</div>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------- Stats strip ---------- */}
                <section className="about_us-stats">
                    {stats.map((s, i) => (
                        <div className="about_us-stat" key={i}>
                            <div className="about_us-stat-icon">{s.icon}</div>
                            <div>
                                <div className="about_us-stat-big">{s.big}</div>
                                <div className="about_us-stat-label">{s.label}</div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* ---------- CTA ---------- */}
                <section className="about_us-cta-bar">
                    <div className="about_us-cta-text">
                        <h2>{t("cta_title", "Let's Make Government Services Easier Together!")}</h2>
                        <p>{t("cta_sub", "Get in touch with us for any query or assistance. We are just a click away!")}</p>
                    </div>
                    <NavLink to="/contact-us" className="about_us-cta-btn">
                        {t("cta_btn", "Contact Us")} <IconArrow />
                    </NavLink>
                    <div className="about_us-cta-handwritten">{t("cta_handwritten", "We are here to help!")}</div>
                </section>
            </div>
        </div>
    );
};

export default memo(AboutUs);
