import "./footer.css";
import { NavLink, Link } from "react-router-dom";

export default function Footer() {
    return (<>
        <footer>
            <div className="wrap">
                <div className="foot-grid">
                    <div className="foot-brand">
                        <div className="name">Aarambh</div>
                        <p className="hindi">सही जानकारी | सही दिशा | बेहतर भविष्य</p>
                        <p>India's guidance platform for government schemes, documentation, education and career direction.</p>
                    </div>
                    <div className="foot-col">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                            <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
                            <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
                            <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="foot-col">
                        <h5>Legal</h5>
                        <ul>
                            <li><NavLink to="/privacy" end className={({ isActive }) => isActive ? "active" : ""}>Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms" end className={({ isActive }) => isActive ? "active" : ""}>Terms of Service</NavLink></li>
                            <li><NavLink to="/refund" end className={({ isActive }) => isActive ? "active" : ""}>Refund Policy</NavLink></li>
                            <li><NavLink to="/delivery" end className={({ isActive }) => isActive ? "active" : ""}>Delivery Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className="foot-col">
                        <h5>Contact</h5>
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
                    <span>© 2026 Aarambh. All rights reserved.</span>
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
                Disclaimer: Aarambh is an independent private guidance and documentation consultancy. We are not affiliated with any government body. Official services are available on respective government portals.
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