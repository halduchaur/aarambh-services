import "./privacy.css";
import { Route, Link } from "react-router-dom";
import { memo } from "react";
import logo from "./assets/images/aarambh_logo.jpeg";

const Privacy = function () {
    return (
        <>
            <div className="privacy-assurance privacy_heading">
                <div className="privacy-assurance-inner">
                    <span className="privacy-label">100% Encrypted Environment</span>
                    <span className="privacy-detail">Documents are protected with AES-256 bank-grade encryption and are automatically purged from our servers once filing is complete.</span>
                </div>
            </div>

            <main>
                <div className="privacy-wrap privacy_heading">

                    <p className="privacy-consent-note">By using Aarambh India, you consent to the data practices described in this policy. If you do not agree with these terms, please do not use our services.</p>

                    <div className="privacy-clause" id="introduction">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">1</span>
                            <h2>Introduction</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>Welcome to Aarambh India. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share your data when you use our documentation services.</p>
                        </div>
                    </div>

                    <div className="privacy-clause" id="information-we-collect">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">2</span>
                            <h2>Information We Collect</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>We only collect information that is necessary to fulfill your government service requests:</p>
                            <ul>
                                <li><strong>Identity Documents:</strong> Aadhaar Cards, PAN Cards, Passports, and photos for official filing.</li>
                                <li><strong>Contact Details:</strong> Your name, phone number, and email address for order updates and official correspondence.</li>
                                <li><strong>Service Preferences:</strong> Information about the specific government service you are applying for.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="privacy-clause" id="how-we-use">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">3</span>
                            <h2>How We Use Your Information</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>The information we collect is used exclusively for:</p>
                            <ul>
                                <li>Processing and filing your applications on official government portals.</li>
                                <li>Communicating with you via WhatsApp, phone, or email regarding your application status.</li>
                                <li>Verifying the validity of your documents to ensure a 0% rejection rate.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="privacy-clause" id="retention">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">4</span>
                            <h2>Data Retention &amp; Deletion</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>We take your data security seriously. We do not store your identity documents indefinitely. Once your service is completed and delivered:</p>
                            <ul>
                                <li>Original document copies are automatically deleted within 15 days of successful delivery.</li>
                                <li>Only your basic contact info and order history are kept for future support and accounting.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="privacy-clause" id="third-party">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">5</span>
                            <h2>Third-Party Sharing</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>Aarambh India <span className="privacy-no-sell">never</span> sells or rents your personal data to third-party marketing companies. We only share your data with:</p>
                            <ul>
                                <li><strong>Government Entities:</strong> Data is shared with the respective government portals during the filing process.</li>
                                <li><strong>Payment Processors:</strong> We use secure gateways like Cashfree/Razorpay to process your payments.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="privacy-clause" id="updates">
                        <div className="privacy-clause-head">
                            <span className="privacy-clause-num">6</span>
                            <h2>Updates to This Policy</h2>
                        </div>
                        <div className="privacy-body-text">
                            <p>We may update our Privacy Policy from time to time to remain compliant with changing Indian laws. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default memo(Privacy);