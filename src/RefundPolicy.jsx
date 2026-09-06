import "./refund.css";
import { Route, Link } from "react-router-dom";
import { memo } from "react";

const RefundPolicy = function () {
    return (
        <>
            <div className="refund-assurance">
                <div className="refund-assurance-inner">
                    <span className="refund-label">Refund Guarantee</span>
                    <span className="refund-detail">We treat your documentation as our own. If we fail to file your application due to a verified platform error on our part, we provide a full reversal of professional fees.</span>
                </div>
            </div>

            <main>
                <div className="refund-wrap">

                    <p className="refund-effective-note">This policy applies to all documentation and filing services booked through Aarambh India.</p>

                    <div className="refund-clause" id="overview">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">1</span>
                            <h2>Policy Overview</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>Aarambh India is a private consultancy that simplifies complex government paperwork. Our fees consist of two distinct parts:</p>
                            <ul>
                                <li><strong>Government Fees</strong> — paid directly to the official state/central portals <span className="refund-tag refund-non-refundable">Non-Refundable</span></li>
                                <li><strong>Professional Service Fees</strong> — charges for document audit, expert guidance, and filing assistance.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="refund-clause" id="full-refund">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">2</span>
                            <h2>Eligibility for Full Refund</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>You are eligible for a 100% refund of the professional service fee under these conditions:</p>
                            <div className="refund-scenario refund-full">
                                <span className="refund-title">2-Hour Grace Period</span>
                                <p>Cancellation within 120 minutes of payment, provided no document audit has started.</p>
                            </div>
                            <div className="refund-scenario refund-full">
                                <span className="refund-title">Duplicate Orders</span>
                                <p>If you accidentally pay twice for the same service ID/transaction.</p>
                            </div>
                            <div className="refund-scenario refund-full">
                                <span className="refund-title">Execution Failure</span>
                                <p>If our delivery desk is unable to initiate the filing process due to internal technical limitations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="refund-clause" id="partial-refund">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">3</span>
                            <h2>Partial Refund Scenarios</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>In cases where partial work has been performed, we offer filtered refundability:</p>
                            <div className="refund-scenario refund-partial">
                                <span className="refund-title">Post-Audit Cancellation</span>
                                <p>If documents are audited but you cancel before portal submission, 50% of the service fee is refunded.</p>
                            </div>
                            <div className="refund-scenario refund-partial">
                                <span className="refund-title">Government Rejections</span>
                                <p>If an application is rejected for a minor fixable error, we refile for free. If you choose not to refile, the service fee remains non-refundable as the work was completed.</p>
                            </div>
                        </div>
                    </div>

                    <div className="refund-clause" id="non-refundable">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">4</span>
                            <h2>Strictly Non-Refundable Scenarios</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>We cannot offer any refunds in the following scenarios:</p>
                            <div className="refund-scenario refund-none">
                                <span className="refund-title">Portal Submission</span>
                                <p>Once the "Successfully Filed" status is generated on the government portal.</p>
                            </div>
                            <div className="refund-scenario refund-none">
                                <span className="refund-title">Document Fraud</span>
                                <p>If the government body identifies submitted documents as fake, forged, or altered.</p>
                            </div>
                            <div className="refund-scenario refund-none">
                                <span className="refund-title">User Inactivity</span>
                                <p>Orders pending for 15+ days due to the user not providing requested documents.</p>
                            </div>
                            <div className="refund-scenario refund-none">
                                <span className="refund-title">Change of Mind</span>
                                <p>Any request made after the document has been processed and delivered.</p>
                            </div>
                        </div>
                    </div>

                    <div className="refund-clause" id="timeline">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">5</span>
                            <h2>Timeline &amp; Method</h2>
                        </div>
                        <div className="refund-timeline">
                            <div className="refund-step">
                                <span className="refund-k">Verification Window</span>
                                <p className="refund-v">Requests are reviewed within 48 business hours by our billing desk.</p>
                            </div>
                            <div className="refund-step">
                                <span className="refund-k">Reversal Method</span>
                                <p className="refund-v">Refunds are processed to the original payment mode (Bank/UPI/Card).</p>
                            </div>
                            <div className="refund-step">
                                <span className="refund-k">Credit Completion</span>
                                <p className="refund-v">Funds typically reflect in your account within 5-7 working days.</p>
                            </div>
                        </div>
                    </div>

                    <div className="refund-clause" id="how-to-file">
                        <div className="refund-clause-head">
                            <span className="refund-clause-num">6</span>
                            <h2>How to File a Request</h2>
                        </div>
                        <div className="refund-body-text">
                            <p>To ensure a fast resolution, please follow this protocol:</p>
                            <ol className="refund-filing-steps">
                                <li>Note your Order ID from the confirmation WhatsApp/Email.</li>
                                <li>Message our billing desk with the reason for the refund request.</li>
                                <li>Attach the payment receipt or transaction ID for faster tracking.</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default memo(RefundPolicy);