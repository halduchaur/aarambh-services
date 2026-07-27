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
                        </ul>
                    </div>
                    <div className="foot-col">
                        <h5>Legal</h5>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>
                    <div className="foot-col">
                        <h5>Contact</h5>
                        <ul>
                            <li>aarambhindia89@gmail.com</li>
                            <li>+91 8796589855</li>
                            <li>Jalna, Maharashtra, India</li>
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