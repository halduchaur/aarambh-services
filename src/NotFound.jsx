import { useContext } from "react";
import { Link } from "./i18nRouting";
import { LanguageContext } from "./LanguageContext";
import SEO from "./components/SEO";
import "./services.css";

export default function NotFound() {
    const { language } = useContext(LanguageContext);
    const hi = language === "hi";
    return (
        <section className="services_hero service-body">
            <SEO title={hi ? "पेज नहीं मिला" : "Page Not Found"} noindex path="/404" />
            <div className="services_container" style={{ textAlign: "center", padding: "40px 0 100px" }}>
                <h1>{hi ? "पेज नहीं मिला" : "Page not found"}</h1>
                <p>{hi ? "आप जो पेज खोज रहे हैं वह मौजूद नहीं है या हटा दिया गया है।" : "The page you are looking for does not exist or has been moved."}</p>
                <Link to="/services" className="services_modal-cta" style={{ maxWidth: 280, margin: "24px auto 0" }}>
                    {hi ? "सभी सेवाएं देखें" : "Browse all services"}
                </Link>
            </div>
        </section>
    );
}
