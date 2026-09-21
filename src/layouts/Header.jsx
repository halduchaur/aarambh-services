import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../assets/images/aarambh_logo.jpeg";
import { LanguageContext } from "../LanguageContext";
import { useContext } from "react";

const Header = function () {
    const { language, setLanguage, translations } = useContext(LanguageContext);

    return (<>
        <div className="topstrip">
            <div className="marquee">
                <span>
                    <b>{translations.header.marquee}</b>
                </span>
            </div>
        </div>

        <header>
            <div className="navbar">
                <div className="brand">
                    <img
                        src={logo}
                        alt="Aarambh Logo"
                        className="brand-logo"
                    />
                    <div className="brand-text">
                        <span className="name">{translations.header.aarambh}</span>
                        <span className="tagline">{translations.header.tagline}</span>
                    </div>
                </div>
                <nav className="links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>{translations.header.nav_home}</NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>{translations.header.nav_services}</NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>{translations.header.nav_about}</NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) => isActive ? "active" : ""}>{translations.header.nav_contact}</NavLink>
                </nav>
                <div className="nav-actions">
                    {/* Language Switch */}
                    <div className="language-switch">
                        <button
                            className={language === "en" ? "language-active" : ""}
                            onClick={() => setLanguage("en")}
                        >
                            English1
                        </button>

                        <span>|</span>

                        <button
                            className={language === "hi" ? "language-active" : ""}
                            onClick={() => setLanguage("hi")}
                        >
                            हिंदी
                        </button>
                    </div>
                    <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold">{translations.header.whatsapp_btn}</a>
                </div>
            </div>
        </header>
    </>);
}

export default Header;