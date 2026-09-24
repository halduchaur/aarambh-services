import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../assets/images/aarambh_logo.jpeg";
import { LanguageContext } from "../LanguageContext";
import { useContext, useEffect, useState } from "react";

const Header = function () {
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close the mobile menu whenever the route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Lock background scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const navClass = ({ isActive }) => isActive ? "active" : "";

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

                <nav className={"links" + (menuOpen ? " open" : "")}>
                    <NavLink to="/" end className={navClass}>{translations.header.nav_home}</NavLink>
                    <NavLink to="/services" className={navClass}>{translations.header.nav_services}</NavLink>
                    <NavLink to="/about-us" className={navClass}>{translations.header.nav_about}</NavLink>
                    <NavLink to="/contact-us" className={navClass}>{translations.header.nav_contact}</NavLink>

                    {/* Shown only inside the mobile dropdown */}
                    <div className="mobile-nav-actions">
                        <div className="language-switch">
                            <button
                                className={language === "en" ? "language-active" : ""}
                                onClick={() => setLanguage("en")}
                            >
                                English
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
                </nav>

                <div className="nav-actions">
                    {/* Language Switch */}
                    <div className="language-switch">
                        <button
                            className={language === "en" ? "language-active" : ""}
                            onClick={() => setLanguage("en")}
                        >
                            English
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

                <button
                    className={"menu-btn" + (menuOpen ? " open" : "")}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(o => !o)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)}></div>}
        </header>
    </>);
}

export default Header;
