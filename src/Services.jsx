import logo from "./assets/logo.png";
import { Route, Link } from "react-router-dom";


export default function Services() {
    return (
        <>
            <section className="trust-section">
                <div className="section-title">
                    <span></span>
                    <h4>WHY CITIZENS TRUST AARAMBH</h4>
                    <span></span>
                </div>
                <div className="trust-container">
                    <div className="trust-card">
                        <div className="icon blue">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3>100% Secure Documentation</h3>
                        <p>
                            Your personal documents are protected with bank-level
                            SSL encryption and strict privacy standards.
                        </p>
                    </div>

                    <div className="trust-card">
                        <div className="icon green">
                            <i className="fa-solid fa-user-check"></i>
                        </div>
                        <h3>Verified Expert Team</h3>
                        <p>
                            Every application is handled by experienced professionals
                            to ensure fast and accurate processing.
                        </p>
                    </div>

                    <div className="trust-card">
                        <div className="icon gold">
                            <i className="fa-solid fa-building-columns"></i>
                        </div>
                        <h3>Government Portal Processing</h3>
                        <p>
                            Applications are processed through official government
                            portals with complete transparency.
                        </p>
                    </div>

                    <div className="trust-card">
                        <div className="icon purple">
                            <i className="fa-solid fa-rotate"></i>
                        </div>
                        <h3>Service First, Payment Later*</h3>
                        <p>
                            Experience our trusted service first. Pay only after
                            successful completion of eligible services.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}