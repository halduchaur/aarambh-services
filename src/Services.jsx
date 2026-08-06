import "./services.css";
import { Route, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import servicesData from "./servicesData";
import ServiceIcon from './ServiceIcon';
import ServiceCard from './ServiceCard';
import ServiceModal from "./ServiceModal";

export default function Services() {

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedService, setSelectedService] = useState(null);

    const categories = useMemo(() => {
        return ["All", ...new Set(servicesData.map(item => item.category))];
    }, []);

    const filteredServices = useMemo(() => {
        return servicesData.filter(service => {
            const matchesSearch = service.summary.toLowerCase().includes(search.toLowerCase());

            const matchesCategory =
                selectedCategory === "All" ||
                service.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [search, selectedCategory]);

    return (
        <>
            <section className="services_hero service-body">
                <div className="services_container">
                    <div className="services_hero-eyebrow"><span className="services_dot"></span> Complete Directory</div>
                    <h1>All <em>Services</em></h1>
                    <p>Browse Aarambh's complete range of 55+ government documentation aur scheme services. Har cheez ek jagah — sahi jankari, sahi disha ke saath.</p>

                    <svg className="services_hero-signature" viewBox="0 0 220 26" fill="none">
                        <path d="M2 20 C 40 20, 55 4, 90 4 C 125 4, 140 20, 178 20 C 195 20, 205 12, 218 12" stroke="#C79A44" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="90" cy="4" r="4" fill="#C79A44" />
                    </svg>

                    <div className="services_finder">
                        <div className="services_search-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>

                            <input placeholder="Search for PAN Card, Passport, GST, Aadhaar..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>

                        <div className="services_filters">
                            {
                                categories.map(category => (
                                    <button
                                        key={category}
                                        className={
                                            selectedCategory === category
                                                ? "services_chip services_active"
                                                : "services_chip"
                                        }
                                        onClick={() => setSelectedCategory(category)} >
                                        {category}
                                    </button>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="services_container">
                <div className="services_results-bar">
                    <span className="services_results-count">Showing <strong id="resultCount">{filteredServices.length}</strong> of <strong>{servicesData.length}</strong> services</span>
                </div>

                <div className="services_grid">
                    {
                        filteredServices.map((service, index) => {
                            return <ServiceCard key={index} service={service} setSelectedService={setSelectedService} />
                        })
                    }
                </div>
                {
                    filteredServices.length === 0 && (
                        <div className="services_no-results">
                            <h3>No service found</h3>
                        </div>
                    )
                }
            </section>

            <a className="services_wa-float" id="floatWhatsapp" href="#" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.79 2.4a8.2 8.2 0 0 1 2.42 5.85c0 4.56-3.71 8.27-8.27 8.27a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.32a8.18 8.18 0 0 1-1.26-4.38c0-4.56 3.71-8.25 8.31-8.25Zm-3.99 4.4c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.72 4.2 3.7 2.08.82 2.5.66 2.95.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.36-.76-1.85-.2-.48-.4-.42-.55-.42h-.47Z" /></svg>
            </a>
            {
                selectedService && (
                    <ServiceModal selectedService={selectedService} setSelectedService={setSelectedService} />
                )
            }
        </>
    );
}