import { NavLink } from "react-router-dom";
import "./header.css";

const Header = function () {
    return (<>
        <div className="topstrip">
            <div className="marquee">
                <span>
                    <b>We are an Non- government / private  platform committed to deliver successful services</b>. 100% encrypted.
                </span>
            </div>
        </div>

        <header>
            <div className="navbar">
                <div className="brand">
                    <div className="mark">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L21 20H3L12 3Z" stroke="#C9A227" strokeWidth="1.6" strokeLinejoin="round" /><path d="M7 20c2-5 3-8 5-13 2 5 3 8 5 13" stroke="#FAF7EF" strokeWidth="1.2" opacity=".6" /><circle cx="12" cy="12.5" r="1.6" fill="#C9A227" /></svg>
                    </div>
                    <div className="brand-text">
                        <span className="name">Aarambh</span>
                        <span className="tagline">Guidance you can trust</span>
                    </div>
                </div>
                <nav className="links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink>
                </nav>
                <div className="nav-actions">
                    <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Chat on WhatsApp</a>
                </div>
            </div>
        </header>
    </>);
}

export default Header;