import "./delivery.css";
import { Route, Link } from "react-router-dom";
import { memo } from "react";

const DeliveryPolicy = function DeliveryPolicy() {
    return (
        <>
            <div className="delivery-assurance">
                <div className="delivery-assurance-inner">
                    <span className="delivery-label">100% Digital Delivery</span>
                    <span className="delivery-detail">Aarambh India is a fully online platform. All our services and documents are delivered digitally via WhatsApp and Email. We do not ship any physical items.</span>
                </div>
            </div>

            <main>
                <div className="delivery-wrap">

                    <p className="delivery-effective-note">This policy applies to how documents and certificates are delivered for all services booked through Aarambh India.</p>

                    <div className="delivery-clause" id="how-we-deliver">
                        <div className="delivery-clause-head">
                            <span className="delivery-clause-num">1</span>
                            <h2>How We Deliver Your Documents</h2>
                        </div>
                        <div className="delivery-body-text">
                            <p>Aarambh India operates entirely online. Once the government portal generates your certificate or document, we deliver it to you digitally:</p>
                        </div>
                        <div className="delivery-channels">
                            <div className="delivery-channel-row">
                                <span className="delivery-via">WhatsApp Delivery</span>
                                <p>The final approved document is sent directly to your registered WhatsApp number as a high-quality PDF.</p>
                            </div>
                            <div className="delivery-channel-row">
                                <span className="delivery-via">Email Delivery</span>
                                <p>A copy of the document is sent to your registered email address for secure backup.</p>
                            </div>
                        </div>
                        <div className="delivery-body-text">
                            <span className="delivery-turnaround">Turnaround Time: 24–48 working hours after government portal approval</span>
                        </div>
                    </div>

                    <div className="delivery-clause" id="no-physical-shipping">
                        <div className="delivery-clause-head">
                            <span className="delivery-clause-num">2</span>
                            <h2>No Physical Shipping</h2>
                        </div>
                        <div className="delivery-body-text">
                            <p>Aarambh India does not provide any physical shipping or courier services. We are a digital-only consultancy platform. If a specific government service also issues a physical copy (e.g., Physical PAN Card, Aadhaar PVC Card), the physical dispatch is handled entirely by the respective government department (such as NSDL, UIDAI, or India Post) and is outside our control.</p>
                            <ul>
                                <li>For any physical documents issued by the government, the tracking and delivery is managed directly by the government's courier partner (India Post).</li>
                            </ul>
                            <div className="delivery-callout">Aarambh India has no role in physical shipping logistics and is not responsible for delays or issues in government postal delivery.</div>
                        </div>
                    </div>

                    <div className="delivery-clause" id="service-scope">
                        <div className="delivery-clause-head">
                            <span className="delivery-clause-num">3</span>
                            <h2>What You Can Expect From Aarambh India</h2>
                        </div>
                        <div className="delivery-body-text">
                            <p>Our service scope includes:</p>
                            <ul>
                                <li>Expert document verification and application filing on official government portals.</li>
                                <li>Digital delivery of all generated certificates, acknowledgements, and documents via WhatsApp and Email.</li>
                                <li>Real-time application status updates via WhatsApp.</li>
                                <li>Dedicated support throughout the process.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default memo(DeliveryPolicy);