import "./terms_of_service.css";
import { Route, Link } from "react-router-dom";
import { memo } from "react";

const TermsOfService = () => {
    return (
        <>
            <div className="terms-assurance terms_heading">
                <div className="terms-assurance-inner">
                    <span className="terms-label">A Legally Binding Agreement</span>
                    <span className="terms-detail">By using Aarambh India, you agree to comply with these terms and conditions. If you do not agree, please do not use our services.</span>
                </div>
            </div>

            <main>
                <div className="terms-wrap terms_heading">

                    <p className="terms-effective-note">These terms govern your use of all documentation and filing services offered through Aarambh India.</p>

                    <div className="terms-clause" id="services-description">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">1</span>
                            <h2>Services Description</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>Aarambh India provides documentation assistance and filing services for various government applications in India. We act as a private consultancy and are <strong>NOT</strong> affiliated with any government body. Our services include form filing, document verification, and official portal submission.</p>
                        </div>
                    </div>

                    <div className="terms-clause" id="user-representations">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">2</span>
                            <h2>User Representations</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>By using our services, you represent and warrant that:</p>
                            <ul>
                                <li>You are at least 18 years of age and have the legal capacity to enter into this agreement.</li>
                                <li><strong>Accuracy:</strong> All information and documents you provide are accurate, current, and true.</li>
                                <li><strong>Legality:</strong> The documents you provide are genuine and issued by the respective authorities.</li>
                            </ul>
                            <div className="terms-callout">You agree that Aarambh India shall not be liable for any rejections or legal issues arising from the submission of false or inaccurate information by you.</div>
                        </div>
                    </div>

                    <div className="terms-clause" id="payment-fees">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">3</span>
                            <h2>Payment &amp; Fees</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>All fees for our services are listed on the respective service pages. Payment must be made in full before we initiate the filing process. Fees include our professional service charges and, where applicable, the government portal fees.</p>
                        </div>
                    </div>

                    <div className="terms-clause" id="limitation-of-liability">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">4</span>
                            <h2>Limitation of Liability</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>Aarambh India acts as an intermediary for official document filing. While we take every precaution to ensure success, we are <span className="terms-not-liable">NOT liable</span> for:</p>
                            <ul>
                                <li>Delays caused by government portal maintenance or server outages.</li>
                                <li>Final decisions made by government authorities regarding your application.</li>
                                <li>Technical glitches on the respective official government websites.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="terms-clause" id="intellectual-property">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">5</span>
                            <h2>Intellectual Property</h2>
                        </div>
                        <div className="terms-body-text">
                            <p>The content on Aarambh India, including the logo, design, text, and graphics, is the intellectual property of Aarambh India and is protected by copyright laws. No part of this portal may be reproduced without our written permission.</p>
                        </div>
                    </div>

                    <div className="terms-clause" id="governing-law">
                        <div className="terms-clause-head">
                            <span className="terms-clause-num">6</span>
                            <h2>Governing Law</h2>
                        </div>
                        <div className="terms-jurisdiction">
                            <div className="terms-item">
                                <span className="terms-k">Applicable Law</span>
                                <p className="terms-v">Republic of India</p>
                            </div>
                            <div className="terms-item">
                                <span className="terms-k">Jurisdiction</span>
                                <p className="terms-v">Courts of Pune, Maharashtra</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default memo(TermsOfService);