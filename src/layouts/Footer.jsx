import "./footer.css";
import { NavLink, Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import { useContext } from "react";

export default function Footer() {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    return (<>
        <footer>
            <div className="wrap">
                <div className="foot-grid">
                    <div className="foot-brand">
                        <div className="name">{translations.header.aarambh}</div>
                        <p className="hindi">सही जानकारी | सही दिशा | बेहतर भविष्य</p>
                        <p>{translations.footer.desc}</p>
                    </div>
                    <div className="foot-col">
                        <h5>{translations.footer.quick_links}</h5>
                        <ul>
                            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>{translations.header.nav_home}</NavLink></li>
                            <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>{translations.header.nav_services}</NavLink></li>
                            <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>{translations.header.nav_about}</NavLink></li>
                            <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? "active" : ""}>{translations.header.nav_contact}</NavLink></li>
                        </ul>
                    </div>
                    <div className="foot-col">
                        <h5>{translations.footer.legal}</h5>
                        <ul>
                            <li><NavLink to="/privacy" end className={({ isActive }) => isActive ? "active" : ""}>{translations.footer.privacy}</NavLink></li>
                            <li><NavLink to="/terms" end className={({ isActive }) => isActive ? "active" : ""}>{translations.footer.terms}</NavLink></li>
                            <li><NavLink to="/refund" end className={({ isActive }) => isActive ? "active" : ""}>{translations.footer.refund}</NavLink></li>
                            <li><NavLink to="/delivery" end className={({ isActive }) => isActive ? "active" : ""}>{translations.footer.delivery}</NavLink></li>
                        </ul>
                    </div>
                    <div className="foot-col">
                        <h5>{translations.footer.contact}</h5>
                        <ul>
                            <li>{import.meta.env.VITE_AARAMBH_EMAIL}</li>
                            <li>+{import.meta.env.VITE_WHATSAPP_NUMBER.replace(
                                /^(\d{2})(\d{5})(\d{5})$/,
                                "$1 $2 $3"
                            )}</li>
                            <li>{import.meta.env.VITE_AARAMBH_ADDRESS}</li>
                        </ul>
                    </div>
                </div>
                <div className="foot-bottom social-links">
                    <span>{translations.footer.copyright}</span>
                    <a
                        href={import.meta.env.VITE_INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="disclaimer-strip">
                {translations.footer.disclaimer}
            </div>
            <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE}`}
                className="floating-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </footer>
    </>);
}