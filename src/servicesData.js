/* ==========================================================================
   AARAMBH — Services Data
   --------------------------------------------------------------------------
   Edit this file to add / remove / update services. Every card on the
   services page is generated from this array, so you don't need to touch
   the HTML to change content.

   IMPORTANT — before going live, replace:
   1) WHATSAPP_NUMBER below with your real WhatsApp Business number
      (with country code, no + or spaces, e.g. "919096759855")
   ========================================================================== */

const WHATSAPP_NUMBER = "919096759855"; // TODO: replace with real number

import aadhar from "./assets/service_images/aadhar.png";
import aadhar_pan from "./assets/service_images/aadhar_pan.jpg";
import abha from "./assets/service_images/ABHA.jpg";
import aadhar_pvc from "./assets/service_images/aadhar_pvc.jpg";
import aayushman from "./assets/service_images/aayushman.jpg";
import apaar from "./assets/service_images/apaar.jpg";
import atalpension from "./assets/service_images/Atalpension.jpg";
import caste from "./assets/service_images/caste.jpg";
import colour_sticker from "./assets/service_images/Colour_sticker.jpg";
import dl from "./assets/service_images/DL.jpg";
import dl_aadhar from "./assets/service_images/DL_aadhar.jpg";
import domicile from "./assets/service_images/domicile.jpg";
import eshram from "./assets/service_images/eshram.jpg";
import fastag from "./assets/service_images/fastag.jpg";
import fssai from "./assets/service_images/fssai.jpg";
import ftittp from "./assets/service_images/FTITTP.jpg";
import gst_collections from "./assets/service_images/GST_collections.png";
import hsrp from "./assets/service_images/HSRP.jpg";
import idp from "./assets/service_images/IDP.jpg";
import income from "./assets/service_images/income.jpg";
import itr_blog from "./assets/service_images/itr_BLOG.png";
import ll from "./assets/service_images/LL.jpg";
import npci from "./assets/service_images/NPCI.jpg";
import pan from "./assets/service_images/pan.jpg";
import passport from "./assets/service_images/passport.jpg";
import pmintern from "./assets/service_images/PMintern.jpg";
import pmjjby from "./assets/service_images/PMJJBY.jpg";
import pmsby from "./assets/service_images/PMSBY.jpg";
import rc_aadhar from "./assets/service_images/RC_aadhar.jpg";
import senior_citizen from "./assets/service_images/senior_citizen.jpg";
import temple_darshan from "./assets/service_images/temple_darshan.jpg";
import uan from "./assets/service_images/UAN.jpg";
import udid from "./assets/service_images/UDID.jpg";
import udyam from "./assets/service_images/udyam.jpg";
import vehicle_challan from "./assets/service_images/Vehicle_challan.jpg";
import vehicle_tax from "./assets/service_images/vehicle_tax.jpg";
import vitthal from "./assets/service_images/vitthal.jpg";
import voter from "./assets/service_images/voter.jpg";

/* Categories shown as filter chips, in display order */
const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "identity", label: "Identity & Cards", icon: "id" },
  { id: "certificates", label: "Certificates", icon: "certificate" },
  { id: "business", label: "Business Compliance", icon: "business" },
  { id: "transport", label: "Transport & Vehicle", icon: "vehicle" },
  { id: "travel", label: "Travel & Passport", icon: "travel" },
  { id: "insurance", label: "Insurance & Pension", icon: "insurance" },
  { id: "employment", label: "Employment", icon: "employment" },
  { id: "darshan", label: "Temple Darshan Booking", icon: "darshan" },
  { id: "health", label: "Health & Welfare", icon: "health" },
];

/* Helper: builds the WhatsApp deep link with a pre-filled message per service */
function waLink(serviceName) {
  const msg = `Namaste Aarambh! Mujhe "${serviceName}" service ke baare mein jaankari chahiye.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ==========================================================================
   SERVICES — 55 total
   ========================================================================== */
const SERVICES = [

  // ---------------- IDENTITY & CARDS (10) ----------------
  {
    id: "aadhaar-address-update",
    image:aadhar,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Aadhaar Address Update",
    category: "identity",
    tag: "Popular",
    price: "₹149 onwards",
    summary: "Update your Aadhaar address online or offline with ease — essential for banking, SIM verification, admissions, and other important services.",
    benefits: [
      "Accurate identification and correction of the address fields required for a valid Aadhaar update.",
      "Guidance on choosing between online self-service and physical Aadhaar Seva Kendra submission.",
      "Careful review of address proof documents to avoid mismatch-related rejections.",
      "Faster approval by ensuring the request is submitted in the correct, error-free format.",
      "Your updated address reflects automatically across linked banking, mobile, and utility KYC records.",
      "Continuous WhatsApp status updates until the address change is reflected on your Aadhaar."
    ],
    faqs: [
      { q: "What is Aadhaar Address Update?", a: "Updating/correcting the current residential address in Aadhaar card." },
      { q: "Who needs Aadhaar Address Update?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for Aadhaar Address Update?", a: "The key documents typically required are: Address proof (electricity bill, rent agreement, passport, bank statement), Aadhaar number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Aadhaar Address Update?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Aadhaar Address Update take to process?", a: "The typical processing time is 7-15 days (after online request). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Aadhaar Address Update?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Aadhaar Address Update application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with Aadhaar Address Update?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "aadhaar-npci-link",
    image:npci,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Aadhaar NPCI Link",
    category: "identity",
    price: "₹99 onwards",
    summary: "Link your Aadhaar with your bank account through NPCI to help receive eligible government scheme benefits directly via DBT (Direct Benefit Transfer).",
    benefits: [
      "Enables eligible government subsidies and scheme payments (DBT) to be credited directly to your bank account.",
      "Verification that your Aadhaar is correctly seeded with your active bank account in the NPCI mapper.",
      "Prevents subsidy failures caused by an outdated or incorrectly linked bank account.",
      "Assistance identifying and correcting any existing incorrect Aadhaar-bank seeding.",
      "No need to visit your bank branch for this linking.",
      "Confirmation and status tracking once the mapping is successfully updated."
    ],
    faqs: [
      { q: "What is Aadhaar NPCI Link?", a: "Linking Aadhaar with NPCI mapper so that DBT (Direct Benefit Transfer) subsidy and government payments can come directly into the bank account." },
      { q: "Who needs Aadhaar NPCI Link?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for Aadhaar NPCI Link?", a: "The key documents typically required are: Aadhaar number, Bank account passbook/statement. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Aadhaar NPCI Link?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Aadhaar NPCI Link take to process?", a: "The typical processing time is 3-7 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Aadhaar NPCI Link?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Aadhaar NPCI Link application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with Aadhaar NPCI Link?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "aadhaar-pan-link",
    image:aadhar_pan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Aadhaar–PAN Link",
    category: "identity",
    tag: "Popular",
    price: "₹1099 onwards",
    summary: "Link your PAN with Aadhaar — important for ITR filing, banking, and other financial services.",
    benefits: [
      "Keeps your PAN active and valid for filing Income Tax Returns without penalty.",
      "A required compliance step for most banking, investment, and high-value financial transactions.",
      "Avoids the risk of your PAN becoming inoperative due to non-linking.",
      "Quick verification of Aadhaar and PAN details before submission to prevent mismatch errors.",
      "Guidance on the applicable late fee, if any, before payment.",
      "Confirmation once the linking status is reflected on the Income Tax portal."
    ],
    faqs: [
      { q: "What is Aadhaar-PAN Link?", a: "Linking Aadhaar with PAN card under Income Tax rules, so that PAN does not become inactive." },
      { q: "Who needs Aadhaar-PAN Link?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for Aadhaar-PAN Link?", a: "The key documents typically required are: Aadhaar card, PAN card. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Aadhaar-PAN Link?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Aadhaar–PAN Link take to process?", a: "The typical processing time is 24-48 hours (online), sometimes a few days extra. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Aadhaar–PAN Link?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Aadhaar–PAN Link application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with Aadhaar-PAN Link?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "aadhaar-pvc-card",
    image:aadhar_pvc,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Aadhaar PVC Card",
    category: "identity",
    tag: "Fast",
    price: "₹149 onwards",
    summary: "Get your durable, credit-card-sized PVC Aadhaar with a secure QR code and enhanced security features — convenient to carry and easy to use.",
    benefits: [
      "A durable, credit-card-sized Aadhaar that is easier to carry and store than the paper printout.",
      "Enhanced security features, including a secure QR code, hologram, and ghost image.",
      "Convenient for daily use as ID proof at banks, offices, and verification counters.",
      "Assistance placing the order using your existing Aadhaar number or enrolment ID.",
      "Doorstep delivery tracking so you know exactly when your card will arrive.",
      "Support if the card is undelivered, damaged in transit, or needs a reorder."
    ],
    faqs: [
      { q: "What is Aadhaar PVC Card?", a: "Ordering a durable, ATM-card-like PVC version of Aadhaar that is easy to carry." },
      { q: "Who needs Aadhaar PVC Card?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for Aadhaar PVC Card?", a: "The key documents typically required are: Aadhaar number or EID, registered mobile number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Aadhaar PVC Card?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Aadhaar PVC Card take to process?", a: "The typical processing time is 5-7 working days (including courier). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Aadhaar PVC Card?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Aadhaar PVC Card application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with Aadhaar PVC Card?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "new-pan-card",
    image:pan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "New PAN Card",
    category: "identity",
    tag: "Popular",
    price: "₹249 onwards",
    summary: "Apply for a new PAN Card — an essential document for banking, income tax filing, investments, and other financial transactions.",
    benefits: [
      "Issues your Permanent Account Number, a mandatory document for banking, taxation, and investments.",
      "Careful review of your application to avoid errors that commonly cause rejection or delay.",
      "Assistance choosing the correct applicant category and supporting documents.",
      "Guidance on e-PAN versus physical PAN card options based on your need.",
      "Regular status updates from submission until the PAN is issued.",
      "Support with linking your new PAN to Aadhaar once received."
    ],
    faqs: [
      { q: "What is New PAN Card?", a: "Getting a new Permanent Account Number (PAN) card made, which is required for income tax and financial transactions." },
      { q: "Who needs a new PAN card?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for New PAN Card?", a: "The key documents typically required are: Aadhaar card, Photo, Address proof, Date of birth proof. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for New PAN Card?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does New PAN Card take to process?", a: "The typical processing time is 10-15 working days (for physical cards). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in New PAN Card?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my New PAN Card application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with New PAN Card?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "pan-card-correction",
    image:pan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "PAN Card Correction",
    category: "identity",
    price: "₹249 onwards",
    summary: "Update your PAN Card with corrections to your name, date of birth, photograph, or signature — and get your updated PAN Card delivered to your doorstep.",
    benefits: [
      "Corrects errors in your name, date of birth, photograph, or signature on your existing PAN.",
      "Prevents downstream issues in banking and tax filing caused by mismatched PAN details.",
      "Guidance on the supporting proof required for each type of correction.",
      "Careful form-filling to avoid resubmission due to formatting errors.",
      "Doorstep delivery of your updated, corrected PAN card.",
      "Status tracking until the correction is approved and dispatched."
    ],
    faqs: [
      { q: "What is PAN Card Correction?", a: "To correct/update details like name, date of birth, photo, signature or address in PAN card." },
      { q: "Who needs PAN Card Correction?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for PAN Card Correction?", a: "The key documents typically required are: Existing PAN card copy, Aadhaar, Supporting proof of correction. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for PAN Card Correction?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does PAN Card Correction take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in PAN Card Correction?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my PAN Card Correction application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with PAN Card Correction?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "reprint-pan",
    image:pan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Reprint PAN",
    category: "identity",
    price: "₹149 onwards",
    summary: "Lost or damaged your PAN Card? Get a reprinted PAN Card with the same details, delivered conveniently to your doorstep.",
    benefits: [
      "Issues a duplicate PAN card with your existing, unchanged PAN details.",
      "Useful when your original card is lost, stolen, or physically damaged.",
      "No need to reapply from scratch or repeat the full verification process.",
      "Assistance verifying your existing PAN number and registered details before applying.",
      "Doorstep delivery of the reprinted card.",
      "Status tracking from application to dispatch."
    ],
    faqs: [
      { q: "What is Reprint PAN?", a: "To get a physical reprint of the PAN card after it is lost, damaged or updated." },
      { q: "Who needs Reprint PAN?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for Reprint PAN?", a: "The key documents typically required are: PAN number, Aadhaar-linked mobile number, Address proof. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Reprint PAN?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Reprint PAN take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Reprint PAN?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Reprint PAN application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with Reprint PAN?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "new-voter-card",
    image:voter,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "New Voter Card",
    category: "identity",
    price: "₹149 onwards",
    summary: "Turned 18? Apply for your new EPIC (Voter ID) Card and exercise your right to vote.",
    benefits: [
      "Enables first-time voters aged 18 and above to register and exercise their right to vote.",
      "Guidance on age and residency eligibility before applying.",
      "Careful form-filling (Form 6) to avoid common rejection reasons.",
      "Assistance gathering the correct age and address proof documents.",
      "Support tracking your application status with the Electoral Registration Office.",
      "Confirmation once your name appears in the electoral roll."
    ],
    faqs: [
      { q: "What is New Voter Card?", a: "First get a Voter ID (EPIC) card made so that you can vote in the elections." },
      { q: "Who needs a new voter card?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for New Voter Card?", a: "The key documents typically required are: Age proof (18+), Address proof, Passport size photo. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for New Voter Card?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does New Voter Card take to process?", a: "The typical processing time is 3-4 weeks (after Form 6 process). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in New Voter Card?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my New Voter Card application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with New Voter Card?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "voter-card-correction",
    image:voter,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Voter Card Correction",
    category: "identity",
    price: "₹149 onwards",
    summary: "Incorrect name, address, or photo on your Voter ID? Get it corrected through Form 8 and keep your voter details updated.",
    benefits: [
      "Corrects inaccurate name, address, or photograph on your existing Voter ID.",
      "Ensures your voter details match your current Aadhaar and address records.",
      "Filed correctly through Form 8, avoiding common documentation errors.",
      "Guidance on the proof required to support each type of correction.",
      "Prevents issues at the polling booth caused by mismatched or outdated details.",
      "Status updates until the corrected Voter ID is issued."
    ],
    faqs: [
      { q: "What is Voter Card Correction?", a: "To correct mistakes like name, address, photo or date of birth in the Voter ID card." },
      { q: "Who needs Voter Card Correction?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for Voter Card Correction?", a: "The key documents typically required are: Existing Voter ID, Correction proof, Address/age proof. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Voter Card Correction?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Voter Card Correction take to process?", a: "The typical processing time is 3-4 hours. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Voter Card Correction?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Voter Card Correction application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with Voter Card Correction?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "apaar-id",
    image:apaar,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Apaar ID",
    category: "identity",
    tag: "New",
    price: "₹99 onwards",
    summary: "Get your APAAR ID — the “One Nation, One Student ID” that helps you securely manage and access your academic records digitally in one place.",
    benefits: [
      "Creates a single, permanent academic ID (APAAR) linked to your Aadhaar under the \"One Nation, One Student ID\" initiative.",
      "Consolidates your academic records, marksheets, and credits in one secure digital repository.",
      "Simplifies transfers between schools, colleges, and institutions with verified digital records.",
      "Guidance on parental or institutional consent requirements for minors.",
      "Assistance with the linking process through your school or education portal.",
      "Support resolving any Aadhaar or student-detail mismatch during registration."
    ],
    faqs: [
      { q: "What is Appar ID?", a: "Automated Permanent Academic Account Registry ID - A unique education ID of students that tracks their academic history." },
      { q: "Who needs Appar ID?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for Apaar ID?", a: "The key documents typically required are: Aadhaar card, School/College enrollment detail, parent consent (for minors). Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Apaar ID?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Apaar ID take to process?", a: "The typical processing time is 5-10 days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Apaar ID?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Apaar ID application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue." },
      { q: "How does Aarambh India help with Apaar ID?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },

  // ---------------- CERTIFICATES (9) ----------------
  {
    id: "caste-certificate-haryana",
    image:caste,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Caste Certificate – Haryana",
    category: "certificates",
    price: "₹299 onwards",
    summary: "Get your Haryana Caste Certificate — an essential document for availing reservation benefits, scholarships, government jobs, and other eligible government schemes.",
    benefits: [
      "Official proof of caste category, required for reservation benefits, scholarships, and government job applications in Haryana.",
      "Guidance on the correct category and supporting documents applicable to your case.",
      "Careful, error-free form submission on the Haryana government portal.",
      "Assistance if additional verification, such as a tehsildar enquiry, is required.",
      "Regular status updates until the certificate is approved and issued.",
      "Support obtaining a certified copy or reprint if needed later."
    ],
    faqs: [
      { q: "What is Caste Certificate – Haryana?", a: "To get SC/ST/OBC caste certificate made for Haryana state, which is necessary for reservation and schemes." },
      { q: "Who needs Caste Certificate – Haryana?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Caste Certificate – Haryana?", a: "The key documents typically required are: Aadhaar, Domicile proof, Ration card, Family caste proof (if available). Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Caste Certificate – Haryana?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Caste Certificate – Haryana take to process?", a: "The typical processing time is 15-21 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Caste Certificate – Haryana?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Caste Certificate – Haryana application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Caste Certificate – Haryana?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "caste-certificate-maharashtra",
    image:caste,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Caste Certificate – Maharashtra",
    category: "certificates",
    price: "₹499 onwards",
    summary: "Get Your Maharashtra Caste Certificate — Processed through the official Aaple Sarkar portal.",
    benefits: [
      "Official caste certificate processed through the Aaple Sarkar portal, valid for scholarships, reservations, and government employment in Maharashtra.",
      "Guidance on the eligible category and the specific documents your application requires.",
      "Careful, accurate form submission to avoid rejection or field-level enquiry delays.",
      "Assistance coordinating with the concerned Sub-Divisional Officer, if required.",
      "Regular status tracking until the certificate is issued.",
      "Support obtaining duplicate copies if the original is lost."
    ],
    faqs: [
      { q: "What is Caste Certificate – Maharashtra?", a: "To get caste certificate made for Maharashtra state, useful for education and job reservation." },
      { q: "Who needs Caste Certificate – Maharashtra?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Caste Certificate – Maharashtra?", a: "The key documents typically required are: Aadhaar, School leaving certificate, Domicile proof, Family caste record. Original documents are usually not required upfront; clear scanned or Photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Caste Certificate – Maharashtra?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Caste Certificate – Maharashtra take to process?", a: "The typical processing time is 21-30 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Caste Certificate – Maharashtra?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Caste Certificate – Maharashtra application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Caste Certificate – Maharashtra?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "domicile-certificate-maharashtra",
    image:domicile,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Domicile Certificate – Maharashtra",
    category: "certificates",
    price: "₹249 onwards",
    summary: "Get Your Maharashtra Residency Certificate — Essential for admissions, government jobs, and other official requirements.",
    benefits: [
      "Official proof of Maharashtra residency, required for college admissions and government job eligibility.",
      "Guidance on the minimum residency period and proof required to qualify.",
      "Careful application filing through the Aaple Sarkar portal to prevent avoidable rejections.",
      "Assistance gathering supporting documents such as residence and school records.",
      "Regular status updates until the certificate is approved.",
      "Support if additional local verification is requested by the authority."
    ],
    faqs: [
      { q: "What is Domicile Certificate – Maharashtra?", a: "To get a domicile certificate of being a resident of Maharashtra, which is required for state schemes/admissions." },
      { q: "Who needs Domicile Certificate – Maharashtra?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Domicile Certificate – Maharashtra?", a: "The key documents typically required are: Aadhaar, Residence proof (15 years), School certificate. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Domicile Certificate – Maharashtra?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Domicile Certificate – Maharashtra take to process?", a: "The typical processing time is 15-21 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Domicile Certificate – Maharashtra?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the Current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Domicile Certificate – Maharashtra application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Domicile Certificate – Maharashtra?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "income-certificate-haryana",
    image:income,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Income Certificate – Haryana",
    category: "certificates",
    price: "₹249 onwards",
    summary: "Get your Haryana Income Certificate — an essential document for scholarships, fee waivers, government schemes, and other official purposes.",
    benefits: [
      "Official proof of family income, required for scholarships, fee waivers, and various government schemes in Haryana.",
      "Guidance on the correct income calculation and supporting proof to submit.",
      "Careful, accurate application filing to avoid delays from incomplete details.",
      "Assistance if a field verification or additional document is requested.",
      "Regular status tracking from submission to issuance.",
      "Support obtaining a renewed certificate once the current one expires."
    ],
    faqs: [
      { q: "What is Income Certificate – Haryana?", a: "Official certificate of annual family income from Haryana state, required for scholarship/schemes." },
      { q: "Who needs Income Certificate – Haryana?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Income Certificate – Haryana?", a: "The key documents typically required are: Aadhaar, Salary slip/Form 16 or self-declaration, Address proof. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Income Certificate – Haryana?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Income Certificate – Haryana take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Income Certificate – Haryana?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Income Certificate – Haryana application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Income Certificate – Haryana?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "income-certificate-maharashtra",
    image:income,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Income Certificate – Maharashtra",
    category: "certificates",
    price: "₹249 onwards",
    summary: "Get your Maharashtra Income Certificate — Fast processing through the official Aaple Sarkar portal.",
    benefits: [
      "Official income certificate processed through the Aaple Sarkar portal for scholarships, subsidies, and scheme eligibility in Maharashtra.",
      "Guidance on the correct income proof and category applicable to your case.",
      "Accurate, complete application submission to minimise processing delays.",
      "Assistance coordinating with the concerned Tehsil office if further verification is needed.",
      "Regular status updates until the certificate is issued.",
      "Support with renewal once your current certificate expires."
    ],
    faqs: [
      { q: "What is Income Certificate – Maharashtra?", a: "Income certificate from Maharashtra state, which is used in schemes, scholarships and admissions." },
      { q: "Who needs Income Certificate – Maharashtra?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Income Certificate – Maharashtra?", a: "The key documents typically required are: Aadhaar, Income proof, Ration card. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Income Certificate – Maharashtra?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Income Certificate – Maharashtra take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Income Certificate – Maharashtra?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Income Certificate – Maharashtra application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Income Certificate – Maharashtra?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "senior-citizen-card-ap",
    image:senior_citizen,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Senior Citizen Card – Andhra Pradesh",
    category: "certificates",
    price: "₹199 onwards",
    summary: "Get Your Senior Citizen Card for Andhra Pradesh Residents Aged 60+ — Unlock eligible travel discounts, government scheme benefits, and other senior citizen benefits.",
    benefits: [
      "Official Andhra Pradesh senior citizen ID, useful for travel concessions and scheme benefits for residents aged 60 and above.",
      "Guidance on the age and residency proof required for eligibility.",
      "Careful, complete application filing to avoid processing delays.",
      "Assistance with the applicable state portal or office procedure.",
      "Regular status updates until the card is issued.",
      "Support with reissue if the card is lost or damaged."
    ],
    faqs: [
      { q: "What is Senior Citizen Card – Andhra Pradesh?", a: "Senior citizen identity card issued by the Andhra Pradesh government for citizens above 60 years of age, which entitles them to pension and discounts." },
      { q: "Who needs Senior Citizen Card – Andhra Pradesh?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Senior Citizen Card – Andhra Pradesh?", a: "The key documents typically required are: Aadhaar, Age proof, Address proof, Photo. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Senior Citizen Card – Andhra Pradesh?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Senior Citizen Card – Andhra Pradesh take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Senior Citizen Card – Andhra Pradesh?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Senior Citizen Card – Andhra Pradesh application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Senior Citizen Card – Andhra Pradesh?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "senior-citizen-card-assam",
    image:senior_citizen,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Senior Citizen Card – Assam",
    category: "certificates",
    price: "₹199 onwards",
    summary: "Get Your Assam Senior Citizen ID Card — An essential document for eligible benefits, concessions, and senior citizen welfare schemes.",
    benefits: [
      "Official Assam senior citizen ID card providing access to state benefits and concessions.",
      "Guidance on eligibility criteria and required supporting documents.",
      "Accurate, complete application submission to prevent avoidable delays.",
      "Assistance navigating the relevant state department process.",
      "Regular status tracking from submission to card issuance.",
      "Support with reissue in case of loss or damage."
    ],
    faqs: [
      { q: "What is Senior Citizen Card – Assam?", a: "Special identity card for senior citizens in Assam to access government benefits." },
      { q: "Who needs Senior Citizen Card – Assam?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Senior Citizen Card – Assam?", a: "The key documents typically required are: Aadhaar, Age proof, Address proof, Photo. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Senior Citizen Card – Assam?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Senior Citizen Card – Assam take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Senior Citizen Card – Assam?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Senior Citizen Card – Assam application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Senior Citizen Card – Assam?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "senior-citizen-card-karnataka",
    image:senior_citizen,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Senior Citizen Card – Karnataka",
    category: "certificates",
    price: "₹99 onwards",
    summary: "Get Your Karnataka Senior Citizen ID Card — Apply conveniently through the official Seva Sindhu portal.",
    benefits: [
      "Official Karnataka senior citizen ID processed via the Seva Sindhu portal for state benefits and concessions.",
      "Guidance on eligibility and the documents required for a smooth application.",
      "Careful, error-free online submission to avoid rejection.",
      "Assistance tracking your application status on the portal.",
      "Regular updates until the card is issued.",
      "Support with card reissue if lost or damaged."
    ],
    faqs: [
      { q: "What is Senior Citizen Card – Karnataka?", a: "Card for 60+ citizens in Karnataka, which is useful in travel concessions and welfare schemes." },
      { q: "Who needs Senior Citizen Card – Karnataka?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Senior Citizen Card – Karnataka?", a: "The key documents typically required are: Aadhaar, Age proof, Address proof, Photo. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Senior Citizen Card – Karnataka?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Senior Citizen Card – Karnataka take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Senior Citizen Card – Karnataka?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Senior Citizen Card – Karnataka application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Senior Citizen Card – Karnataka?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "senior-citizen-card-maharashtra",
    image:senior_citizen,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Senior Citizen Card – Maharashtra",
    category: "certificates",
    price: "₹199 onwards",
    summary: "Get Your Maharashtra Senior Citizen Card — Access eligible state benefits, discounts, concessions, and senior citizen welfare schemes.",
    benefits: [
      "Official Maharashtra senior citizen ID card, giving access to state discounts and welfare benefits.",
      "Guidance on eligibility criteria and the documents required.",
      "Careful, accurate application submission to avoid delays.",
      "Assistance with the relevant state office or portal procedure.",
      "Regular status updates until the card is issued.",
      "Support with reissue if the card is lost or damaged."
    ],
    faqs: [
      { q: "What is Senior Citizen Card – Maharashtra?", a: "Official identity card for senior citizens in Maharashtra, which provides various concessions." },
      { q: "Who needs Senior Citizen Card – Maharashtra?", a: "Residents of the respective state who require this certificate for education, employment, reservation benefits, or eligibility verification under various government schemes." },
      { q: "What documents are required for Senior Citizen Card – Maharashtra?", a: "The key documents typically required are: Aadhaar, Age proof, Address proof, Photo. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Senior Citizen Card – Maharashtra?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Senior Citizen Card – Maharashtra take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Senior Citizen Card – Maharashtra?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Senior Citizen Card – Maharashtra application is rejected or delayed?", a: "Applications are commonly rejected due to insufficient proof of residence, missing family records, or discrepancies between submitted documents. A corrected application can be resubmitted through the same department." },
      { q: "How does Aarambh India help with Senior Citizen Card – Maharashtra?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },

  // ---------------- BUSINESS COMPLIANCE (6) ----------------
  {
    id: "fssai-new-license",
    image:fssai,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "FSSAI New Food License",
    category: "business",
    tag: "Popular",
    price: "₹299 onwards",
    summary: "Starting a Food Business? Get Your FSSAI License — Basic, State, or Central, as applicable to your business.",
    benefits: [
      "Issues the FSSAI licence mandatory for legally operating any food business in India.",
      "Guidance on the correct licence type — Basic, State, or Central — based on your business turnover and scale.",
      "Assistance preparing the required documents, layout plan, and declarations.",
      "Careful, accurate application filing to reduce the chance of queries or rejection.",
      "Regular status updates from submission through to licence issuance.",
      "Support understanding your ongoing compliance and renewal obligations."
    ],
    faqs: [
      { q: "What is FSSAI New Food License?", a: "To start a new food business, you need to obtain FSSAI (Food Safety) registration or license, which is legally mandatory." },
      { q: "Who needs FSSAI New Food License?", a: "Business owners, proprietors, and entities who need to meet statutory or regulatory requirements to legally operate, expand, or avail government benefits." },
      { q: "What documents are required for FSSAI New Food License?", a: "The key documents typically required are: Aadhaar/PAN, Business address proof, Food business ka nature/photos, NOC (if applicable). Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for FSSAI New Food License?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does FSSAI New Food License take to process?", a: "The typical processing time is 7-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in FSSAI New Food License?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my FSSAI New Food License application is rejected or delayed?", a: "Rejections typically occur due to mismatched business details, incomplete KYC, or missing supporting documents. These can be corrected and the application resubmitted." },
      { q: "How does Aarambh India help with FSSAI New Food License?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "fssai-renewal",
    image:fssai,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "FSSAI Food License Renewal",
    category: "business",
    price: "₹249 onwards",
    summary: "**Renew your FSSAI License before it expires — avoid penalties and keep your food business compliant.",
    benefits: [
      "Renews your FSSAI licence before expiry, helping you avoid penalties and business disruption.",
      "Reminder-based guidance so renewal is filed within the required timeline.",
      "Assistance verifying your existing licence details and current business information.",
      "Careful, accurate renewal filing to prevent delays or additional scrutiny.",
      "Regular status tracking until the renewed licence is issued.",
      "Support upgrading your licence category if your business has grown."
    ],
    faqs: [
      { q: "What is FSSAI Food License Renewal?", a: "Get the existing FSSAI license/registration renewed before its validity expires, so that the business can run legally." },
      { q: "Who needs FSSAI Food License Renewal?", a: "Business owners, proprietors, and entities who need to meet statutory or regulatory requirements to legally operate, expand, or avail government benefits." },
      { q: "What documents are required for FSSAI Food License Renewal?", a: "The key documents typically required are: Existing FSSAI license, Aadhaar/PAN, Business details. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for FSSAI Food License Renewal?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does FSSAI Food License Renewal take to process?", a: "The typical processing time is 7-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in FSSAI Food License Renewal?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my FSSAI Food License Renewal application is rejected or delayed?", a: "Rejections typically occur due to mismatched business details, incomplete KYC, or missing supporting documents. These can be corrected and the application resubmitted." },
      { q: "How does Aarambh India help with FSSAI Food License Renewal?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "gstin-verification",
    image:gst_collections,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "GSTIN Verification",
    category: "business",
    price: "₹29 onwards",
    summary: "Verify the Authenticity of Any GSTIN — Essential for vendor onboarding, compliance, and business verification.",
    benefits: [
      "Confirms whether a given GSTIN is genuine, active, and correctly registered.",
      "Useful for vendor onboarding, due diligence, and compliance checks before a business transaction.",
      "Cross-verification of the business name and registration details linked to the GSTIN.",
      "Quick turnaround so verification does not delay your business decision.",
      "Guidance on next steps if a discrepancy or inactive status is found.",
      "Written confirmation you can retain for your compliance or audit records."
    ],
    faqs: [
      { q: "What is GSTIN Verification?", a: "To verify the authenticity of any GST number and business details, which is used to check the vendor/partner." },
      { q: "Who needs GSTIN Verification?", a: "Business owners, proprietors, and entities who need to meet statutory or regulatory requirements to legally operate, expand, or avail government benefits." },
      { q: "What documents are required for GSTIN Verification?", a: "The key documents typically required are: GSTIN number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for GSTIN Verification?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does GSTIN Verification take to process?", a: "The typical processing time is usually 1-2 days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in GSTIN Verification?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my GSTIN Verification application is rejected or delayed?", a: "Rejections typically occur due to mismatched business details, incomplete KYC, or missing supporting documents. These can be corrected and the application resubmitted." },
      { q: "How does Aarambh India help with GSTIN Verification?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "gst-registration",
    image:gst_collections,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "GST Registration",
    category: "business",
    tag: "Popular",
    price: "₹499 onwards",
    summary: "Get Your New GST Registration — Ideal for businesses crossing the applicable turnover threshold or looking to formalize their business.",
    benefits: [
      "Registers your business for GST, a legal requirement once you cross the applicable turnover threshold.",
      "Guidance on the correct registration category based on your business type and turnover.",
      "Assistance preparing and organising the required documents before submission.",
      "Careful, accurate application filing to minimise queries from the GST department.",
      "Regular status updates until your GSTIN is issued.",
      "Support understanding your ongoing GST filing and compliance obligations."
    ],
    faqs: [
      { q: "What is GST Registration?", a: "Getting Goods and Services Tax (GST) registration done for the business, which becomes mandatory once the turnover threshold is crossed." },
      { q: "Who needs GST Registration?", a: "Business owners, proprietors, and entities who need to meet statutory or regulatory requirements to legally operate, expand, or avail government benefits." },
      { q: "What documents are required for GST Registration?", a: "The key documents typically required are: PAN, Aadhaar, Business address proof, Bank account details, Photo. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for GST Registration?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does GST Registration take to process?", a: "The typical processing time is 5-7 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in GST Registration?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my GST Registration application is rejected or delayed?", a: "Rejections typically occur due to mismatched business details, incomplete KYC, or missing supporting documents. These can be corrected and the application resubmitted." },
      { q: "How does Aarambh India help with GST Registration?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "udyam-registration",
    image:udyam,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Udyam Registration",
    category: "business",
    tag: "Popular",
    price: "₹299 onwards",
    summary: "Get Your MSME/Udyam Registration — Essential for accessing eligible government tenders, business loans, subsidies, and other MSME benefits.",
    benefits: [
      "Registers your business under Udyam (MSME), unlocking access to government tenders, subsidies, and priority loans.",
      "Guidance on the correct enterprise classification — micro, small, or medium — based on investment and turnover.",
      "Assistance completing the Aadhaar-based online registration accurately.",
      "Careful review to avoid common data-entry errors that delay certificate issuance.",
      "Regular status tracking until your Udyam certificate is generated.",
      "Support understanding the schemes and benefits your registration makes you eligible for."
    ],
    faqs: [
      { q: "What is Udyam Registration?", a: "Getting MSME (Udyam) registration done, so that the business gets the benefit of government schemes, loans and subsidies." },
      { q: "Who needs Udyam Registration?", a: "Business owners, proprietors, and entities who need to meet statutory or regulatory requirements to legally operate, expand, or avail government benefits." },
      { q: "What documents are required for Udyam Registration?", a: "The key documents typically required are: Aadhaar, PAN, Business details, Bank account. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Udyam Registration?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Udyam Registration take to process?", a: "The typical processing time is 1-3 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Udyam Registration?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Udyam Registration application is rejected or delayed?", a: "Rejections typically occur due to mismatched business details, incomplete KYC, or missing supporting documents. These can be corrected and the application resubmitted." },
      { q: "How does Aarambh India help with Udyam Registration?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "itr-filing",
    image:itr_blog,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "ITR Filing",
    category: "business",
    tag: "Popular",
    price: "₹999 onwards",
    summary: "Get Expert Assistance with Income Tax Return Filing — For salaried individuals, business owners, freelancers, and more.",
    benefits: [
      "Files your Income Tax Return accurately, whether you are salaried, self-employed, or a business owner.",
      "Guidance on the correct ITR form applicable to your income sources.",
      "Careful computation of income, deductions, and applicable tax liability or refund.",
      "Assistance gathering Form 16, investment proofs, and other required documents.",
      "Timely filing support to help you avoid late-filing penalties.",
      "Regular updates until your return is filed and acknowledged by the Income Tax Department."
    ],
    faqs: [
      { q: "What is ITR (Income Tax Return)?", a: "Individual or business annual income tax return filing, which is required for income proof and loan/ visa applications." },
      { q: "Who needs ITR (Income Tax Return)?", a: "Business owners, proprietors, and entities who need to meet statutory or regulatory requirements to legally operate, expand, or avail government benefits." },
      { q: "What documents are required for ITR (Income Tax Return)?", a: "The key documents typically required are: PAN, Aadhaar, Form 16/income proof, Bank statements, Investment proofs. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for ITR (Income Tax Return)?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does ITR (Income Tax Return) take to process?", a: "The typical processing time is 3-7 working days (for filing). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in ITR (Income Tax Return)?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my ITR (Income Tax Return) application is rejected or delayed?", a: "Rejections typically occur due to mismatched business details, incomplete KYC, or missing supporting documents. These can be corrected and the application resubmitted." },
      { q: "How does Aarambh India help with ITR (Income Tax Return)?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },

  // ---------------- TRANSPORT & VEHICLE (12) ----------------
  {
    id: "dl-aadhaar-link",
    image:dl_aadhar,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "DL Aadhaar Link",
    category: "transport",
    price: "₹99 onwards",
    summary: "Link Your Driving License with Aadhaar — Simplify digital verification and access eligible online services with ease.",
    benefits: [
      "Links your Driving License with Aadhaar, supporting faster digital verification at RTO and enforcement checks.",
      "Guidance on the online linking process and required details.",
      "Careful data matching to prevent mismatch-related rejections.",
      "Assistance resolving any existing discrepancy between DL and Aadhaar records.",
      "Status tracking until the linking is confirmed.",
      "Support with related RTO services once your DL and Aadhaar are linked."
    ],
    faqs: [
      { q: "What is DL Aadhaar Link?", a: "Linking Driving License with Aadhaar, so that KYC is verified and records remain seamless." },
      { q: "Who needs DL Aadhaar Link?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for DL Aadhaar Link?", a: "The key documents typically required are: DL number, Aadhaar number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for DL Aadhaar Link?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does DL Aadhaar Link take to process?", a: "The typical processing time is 3-7 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in DL Aadhaar Link?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my DL Aadhaar Link application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with DL Aadhaar Link?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "dl-address-change",
    image:dl,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "DL Address Change",
    category: "transport",
    price: "₹399 onwards",
    summary: "Update the Address on Your Driving License — Get your new address updated with valid address proof.",
    benefits: [
      "Updates the address on your Driving License to match your current residence.",
      "Guidance on the address proof documents accepted by your RTO.",
      "Careful, accurate application filing to avoid processing delays.",
      "Assistance with the online submission and appointment process, where applicable.",
      "Regular status updates until your updated DL is issued.",
      "Support with doorstep delivery tracking of the revised licence."
    ],
    faqs: [
      { q: "What is DL Address Change?", a: "Getting the new address updated in the Driving License when you shift." },
      { q: "Who needs DL Address Change?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for DL Address Change?", a: "The key documents typically required are: Old DL, New address proof, Aadhaar. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for DL Address Change?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does DL Address Change take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in DL Address Change?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my DL Address Change application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with DL Address Change?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "duplicate-dl",
    image:dl,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Duplicate Driving License",
    category: "transport",
    tag: "Fast",
    price: "₹399 onwards",
    summary: "Lost or Damaged Driving License? Get a Duplicate DL — Quick, Hassle-Free Assistance.",
    benefits: [
      "Issues a duplicate Driving License when the original is lost, stolen, or damaged.",
      "Guidance on filing the required declaration for a lost licence.",
      "Careful verification of your existing licence details before reapplication.",
      "Assistance with the RTO application process without the need for a fresh test.",
      "Regular status tracking from application to issuance.",
      "Support with doorstep delivery of your duplicate licence."
    ],
    faqs: [
      { q: "What is Duplicate Driving License?", a: "To get a duplicate copy of DL issued in case of loss, theft or damage." },
      { q: "Who needs Duplicate Driving License?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for Duplicate Driving License?", a: "The key documents typically required are: FIR/lost declaration, Aadhaar, Old DL number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Duplicate Driving License?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Duplicate Driving License take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Duplicate Driving License?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Duplicate Driving License application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with Duplicate Driving License?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "learners-license",
    image:ll,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Learners License",
    category: "transport",
    tag: "Popular",
    price: "₹499 onwards",
    summary: "Get Your New Learner’s License — Assistance with the online application and test slot booking process.",
    benefits: [
      "Issues your Learner's License, the first legal step toward driving on Indian roads.",
      "Assistance booking your online learner's test slot at a convenient time.",
      "Guidance on preparing for the RTO's online theory test.",
      "Careful, accurate application filing to avoid appointment or document rejections.",
      "Regular status updates from application through to test day.",
      "Support proceeding to your Permanent License once the learner period is complete."
    ],
    faqs: [
      { q: "What is Learners License?", a: "For new drivers, get a Learner's License (LL), which is the first step before a permanent DL." },
      { q: "Who needs Learners License?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for Learners License?", a: "The key documents typically required are: Aadhaar, Age proof, Address proof, Photo. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Learners License?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Learners License take to process?", a: "The typical processing time is 3-7 working days (after testing). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Learners License?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Learners License application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with Learners License?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "permanent-dl",
    image:dl,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Permanent DL",
    category: "transport",
    tag: "Popular",
    price: "₹999 onwards",
    summary: "Get Your Permanent Driving License After Your Learner’s License — Complete process assistance, including driving test slot booking.",
    benefits: [
      "Converts your Learner's License into a full Permanent Driving License.",
      "Assistance booking your driving test slot at the RTO.",
      "Guidance on the eligibility waiting period and required documents.",
      "Careful, accurate application filing to avoid avoidable delays.",
      "Regular status tracking from test booking through to licence issuance.",
      "Support with doorstep delivery tracking of your permanent licence."
    ],
    faqs: [
      { q: "What is Permanent DL?", a: "After getting Learner's License, get Permanent Driving License (DL) by passing the driving test." },
      { q: "Who needs Permanent DL?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for Permanent DL?", a: "The key documents typically required are: Learner's License, Aadhaar, Address proof, Driving test clearance. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Permanent DL?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Permanent DL take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Permanent DL?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Permanent DL application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with Permanent DL?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "idp",
    image:idp,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "International Driving License Permit (IDP)",
    category: "travel",
    price: "₹499 onwards",
    summary: "Planning to Drive Abroad? Apply for an International Driving Permit (IDP) — Easy and Hassle-Free Assistance.",
    benefits: [
      "Issues an International Driving Permit, allowing you to legally drive in many foreign countries.",
      "Guidance on which countries recognise the IDP alongside your Indian licence.",
      "Assistance preparing the required documents, including your passport and valid DL.",
      "Careful, accurate application filing to avoid rejection or delay.",
      "Regular status updates until the permit is ready.",
      "Support understanding the validity period and renewal process for future trips."
    ],
    faqs: [
      { q: "What is International Driving License Permit (IDP)?", a: "To drive abroad, get an International Driving Permit, which is valid along with the existing Indian DL." },
      { q: "Who needs International Driving License Permit (IDP)?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for International Driving License Permit (IDP)?", a: "The key documents typically required are: Valid Indian DL, Passport, Visa/ticket copy, Photos. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for International Driving License Permit (IDP)?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does International Driving License Permit (IDP) take to process?", a: "The typical processing time is 5-10 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in International Driving License Permit (IDP)?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my International Driving License Permit (IDP) application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with International Driving License Permit (IDP)?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "rc-aadhaar-link",
    image:rc_aadhar,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "RC Aadhaar Link",
    category: "transport",
    price: "₹99 onwards",
    summary: "Link Your Vehicle RC with Aadhaar — Simplify ownership verification and digital vehicle-related services.",
    benefits: [
      "Links your vehicle's Registration Certificate with Aadhaar, supporting faster ownership verification.",
      "Guidance on the online linking process and required vehicle details.",
      "Careful data matching to prevent mismatch-related issues.",
      "Assistance resolving discrepancies between RC and Aadhaar records, if any.",
      "Status tracking until the linking is confirmed.",
      "Support with related RC services once linking is complete."
    ],
    faqs: [
      { q: "What is RC Aadhaar Link?", a: "Linking Vehicle Registration Certificate (RC) with Aadhaar, for records verification." },
      { q: "Who needs RC Aadhaar Link?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for RC Aadhaar Link?", a: "The key documents typically required are: RC number, Aadhaar number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for RC Aadhaar Link?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does RC Aadhaar Link take to process?", a: "The typical processing time is 3-7 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in RC Aadhaar Link?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my RC Aadhaar Link application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with RC Aadhaar Link?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "hsrp",
    image:hsrp,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "2 Wheeler HSRP",
    category: "transport",
    tag: "Fast",
    price: "₹649 onwards",
    summary: "Get Your High-Security Registration Plate (HSRP) — Mandatory compliance for eligible 2-wheelers and 4-wheelers.",
    benefits: [
      "Issues the High Security Registration Plate mandatory for both two- and four-wheelers.",
      "Guidance on the applicable HSRP rules and deadlines for your state.",
      "Assistance booking your fitment appointment at a convenient centre.",
      "Careful, accurate application filing using your existing RC details.",
      "Regular status updates from booking to plate fitment.",
      "Support ensuring compliance to avoid fines for a missing or invalid HSRP."
    ],
    faqs: [
      { q: "What is HSRP?", a: "Getting a High Security Registration Plate installed, which has now been made mandatory for old vehicles." },
      { q: "Who needs HSRP?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for HSRP?", a: "The key documents typically required are: RC copy, Aadhaar, Vehicle chassis/engine number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for HSRP?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does HSRP take to process?", a: "The typical processing time is 7-15 working days (including fitment appointment). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in HSRP?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my HSRP application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with HSRP?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "hsrp",
    image:hsrp,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "4 Wheeler HSRP",
    category: "transport",
    tag: "Fast",
    price: "₹999 onwards",
    summary: "Get Your High-Security Registration Plate (HSRP) — Mandatory compliance for eligible 2-wheelers and 4-wheelers.",
    benefits: [
      "Issues the High Security Registration Plate mandatory for both two- and four-wheelers.",
      "Guidance on the applicable HSRP rules and deadlines for your state.",
      "Assistance booking your fitment appointment at a convenient centre.",
      "Careful, accurate application filing using your existing RC details.",
      "Regular status updates from booking to plate fitment.",
      "Support ensuring compliance to avoid fines for a missing or invalid HSRP."
    ],
    faqs: [
      { q: "What is HSRP?", a: "Getting a High Security Registration Plate installed, which has now been made mandatory for old vehicles." },
      { q: "Who needs HSRP?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for HSRP?", a: "The key documents typically required are: RC copy, Aadhaar, Vehicle chassis/engine number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for HSRP?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does HSRP take to process?", a: "The typical processing time is 7-15 working days (including fitment appointment). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in HSRP?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my HSRP application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with HSRP?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "color-code-sticker",
    image:colour_sticker,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Color Code Sticker",
    category: "transport",
    tag: "Fast",
    price: "₹399 onwards",
    summary: "Get Your Fuel-Type Color-Coded Sticker (Petrol/Diesel/CNG) — Mandatory for eligible vehicles along with HSRP.",
    benefits: [
      "Issues the mandatory fuel-type colour-coded sticker (Petrol/Diesel/CNG) alongside your HSRP.",
      "Guidance on the applicable colour code for your vehicle's fuel type.",
      "Assistance coordinating the sticker fitment with your HSRP appointment.",
      "Careful application filing using your correct vehicle and RC details.",
      "Regular status updates until the sticker is fitted.",
      "Support ensuring compliance to avoid penalties for a missing sticker."
    ],
    faqs: [
      { q: "What is Color Coded Sticker?", a: "Affixing colour-coded stickers according to the fuel type of the vehicle (petrol/CNG - blue, diesel - orange), which is necessary for compliance." },
      { q: "Who needs Color Coded Sticker?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for Color Coded Sticker?", a: "The key documents typically required are: RC copy, Vehicle details. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Color Coded Sticker?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Color Coded Sticker take to process?", a: "The typical processing time is 5-10 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Color Coded Sticker?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Color Coded Sticker application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with Color Coded Sticker?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "vehicle-challan-payment",
    image:vehicle_challan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Vehicle Challan Payment",
    category: "transport",
    price: "₹49 onwards service charge",
    summary: "Check and Pay Your Pending Traffic Challans — Convenient assistance without the need to visit an RTO or court.",
    benefits: [
      "Checks for pending traffic challans linked to your vehicle or licence.",
      "Assistance clearing dues online without needing to visit the RTO or traffic court.",
      "Guidance on disputing a challan you believe was incorrectly issued.",
      "Careful verification of challan details before payment to avoid duplicate charges.",
      "Confirmation and receipt once payment is successfully processed.",
      "Support checking for any further pending dues after clearance."
    ],
    faqs: [
      { q: "What is Vehicle Challan Payment?", a: "Check traffic challans and make online payment to avoid penalties/court cases." },
      { q: "Who needs Vehicle Challan Payment?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for Vehicle Challan Payment?", a: "The key documents typically required are: Vehicle number or challan number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Vehicle Challan Payment?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Vehicle Challan Payment take to process?", a: "The typical processing time is Turant. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Vehicle Challan Payment?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Vehicle Challan Payment application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with Vehicle Challan Payment?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "vehicle-tax",
    image:vehicle_tax,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Vehicle Tax",
    category: "transport",
    price: "₹99 onwards service charge",
    summary: "Road Tax Payment & Renewal — Stay compliant with applicable state RTO rules and ensure timely payment or renewal.",
    benefits: [
      "Assistance with timely road tax payment and renewal as per your state's RTO rules.",
      "Guidance on the applicable tax amount and category for your vehicle type.",
      "Careful, accurate filing to avoid penalty for delayed or missed payment.",
      "Support gathering the required vehicle and ownership documents.",
      "Confirmation and receipt once the tax payment is processed.",
      "Reminder-based guidance so future renewals are not missed."
    ],
    faqs: [
      { q: "What is Vehicle Tax?", a: "Road tax payment or renewal, which is mandatory as per RTO records." },
      { q: "Who needs Vehicle Tax?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for Vehicle Tax?", a: "The key documents typically required are: RC copy, Vehicle details, Previous tax receipt (for renewal). Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Vehicle Tax?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Vehicle Tax take to process?", a: "The typical processing time is 5-10 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Vehicle Tax?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the Current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Vehicle Tax application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with Vehicle Tax?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "fastag-kyv",
    image:fastag,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Fastag KYV",
    category: "transport",
    tag: "Fast",
    price: "₹149 onwards",
    summary: "Update Your FASTag KYV (Know Your Vehicle) Details — Essential to help avoid FASTag blacklisting and ensure uninterrupted usage.",
    benefits: [
      "Updates your FASTag's Know Your Vehicle (KYV) details, preventing blacklisting and transaction failures.",
      "Guidance on the documents required to complete KYV verification.",
      "Careful review of existing FASTag and vehicle records to identify mismatches.",
      "Assistance correcting any outdated or incorrect vehicle information linked to your tag.",
      "Regular status updates until KYV is successfully completed.",
      "Support avoiding toll-plaza delays caused by an unverified FASTag."
    ],
    faqs: [
      { q: "What is Fastag KYV?", a: "Get the Know Your Vehicle (KYV) of FASTag updated, so that the tag is active and toll payments remain smooth." },
      { q: "Who needs Fastag KYV?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for Fastag KYV?", a: "The key documents typically required are: FASTag ID, RC copy, Aadhaar/PAN. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Fastag KYV?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Fastag KYV take to process?", a: "The typical processing time is 3-5 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Fastag KYV?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Fastag KYV application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with Fastag KYV?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "fastag-annual-pass",
    image:fastag,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "FASTag One Year Pass",
    category: "transport",
    tag: "New",
    price: "₹549 onwards service charge",
    summary: "Get Your FASTag Annual Pass for National Highways — Enjoy hassle-free toll travel without repeated toll payments.",
    benefits: [
      "Assistance activating the FASTag annual pass for unlimited national highway travel within the plan.",
      "Guidance on eligibility and the applicable pass validity terms.",
      "Careful application filing using your existing FASTag and vehicle details.",
      "Reduces the need for repeated toll payments and top-ups throughout the year.",
      "Status updates until the annual pass is successfully activated.",
      "Support renewing the pass before it expires."
    ],
    faqs: [
      { q: "What is FASTag One Year Pass?", a: "Activate unlimited toll pass for one year (under the new annual pass scheme), so that frequent recharges can be avoided." },
      { q: "Who needs FASTag One Year Pass?", a: "Vehicle owners and drivers who need to complete this requirement to remain compliant with Road Transport Office (RTO) and traffic regulations." },
      { q: "What documents are required for FASTag One Year Pass?", a: "The key documents typically required are: FASTag ID, RC copy, Vehicle details. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for FASTag One Year Pass?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does FASTag One Year Pass take to process?", a: "The typical processing time is 3-5 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in FASTag One Year Pass?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my FASTag One Year Pass application is rejected or delayed?", a: "Common reasons for rejection include mismatched RC/DL details, unclear document scans, or unpaid dues. These issues can be resolved and the request resubmitted." },
      { q: "How does Aarambh India help with FASTag One Year Pass?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },

  // ---------------- TRAVEL & PASSPORT (4) ----------------
  {
    id: "new-passport",
    image:passport,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "New Passport",
    category: "travel",
    tag: "Popular",
    price: "₹2699 onwards service charge",
    summary: "Get Your Fresh Passport — Tatkal assistance available, including appointment booking and application support.",
    benefits: [
      "Assistance with a fresh passport application, including Tatkal processing for urgent needs.",
      "Guidance on the correct application category and required supporting documents.",
      "Assistance booking your Passport Seva Kendra appointment.",
      "Careful, accurate form-filling to avoid police verification or documentation delays.",
      "Regular status updates from application through to passport dispatch.",
      "Support resolving any document discrepancy flagged during verification."
    ],
    faqs: [
      { q: "What is New Passport?", a: "First time getting a passport made, which is required for international travel, visa and ID proof." },
      { q: "Who needs a new passport?", a: "Indian citizens who are planning domestic or international travel and require valid travel documentation." },
      { q: "What documents are required for New Passport?", a: "The key documents typically required are: Aadhaar, Address proof, Date of birth proof, Photos. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for New Passport?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does New Passport take to process?", a: "The typical processing time is 15-30 working days (including police verification). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in New Passport?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my New Passport application is rejected or delayed?", a: "Applications may be delayed or rejected due to incomplete address proof, police verification issues, or document mismatches. These can typically be resolved with correct supporting evidence." },
      { q: "How does Aarambh India help with New Passport?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "passport-renewal",
    image:passport,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Passport Renewal",
    category: "travel",
    price: "₹2699 onwards service charge",
    summary: "Is Your Passport Expiring Soon or Already Expired? Get Your Passport Renewal Application Done with Ease.",
    benefits: [
      "Assistance renewing your passport before or after expiry, keeping your international travel documents valid.",
      "Guidance on whether your renewal qualifies for the simplified Tatkal or normal process.",
      "Assistance booking your appointment at the Passport Seva Kendra.",
      "Careful, accurate application filing to prevent avoidable delays.",
      "Regular status tracking from submission through to dispatch.",
      "Support addressing any address or document mismatch flagged during processing."
    ],
    faqs: [
      { q: "What is Passport Renewal?", a: "To renew the passport which is about to expire or has already expired." },
      { q: "Who needs Passport Renewal?", a: "Indian citizens who are planning domestic or international travel and require valid travel documentation." },
      { q: "What documents are required for Passport Renewal?", a: "The key documents typically required are: Old passport, Aadhaar, Address proof, Photos. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Passport Renewal?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Passport Renewal take to process?", a: "The typical processing time is 15-30 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Passport Renewal?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Passport Renewal application is rejected or delayed?", a: "Applications may be delayed or rejected due to incomplete address proof, police verification issues, or document mismatches. These can typically be resolved with correct supporting evidence." },
      { q: "How does Aarambh India help with Passport Renewal?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "fti-ttp",
    image:ftittp,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "FTI-TTP Registration",
    category: "travel",
    tag: "New",
    price: "₹199 onwards",
    summary: "Get Registered for the Trusted Traveller Programme (FTI-TTP) — Enjoy faster, automated immigration clearance at participating airports.",
    benefits: [
      "Registers you for the Trusted Traveller Programme, enabling faster, automated immigration clearance.",
      "Guidance on eligibility criteria for the programme.",
      "Assistance preparing the required travel and identity documents.",
      "Careful, accurate application filing to avoid rejection or delay.",
      "Regular status updates until your registration is approved.",
      "Support understanding how to use the e-gates once enrolled."
    ],
    faqs: [
      { q: "What is FTI-TTP Registration?", a: "Registering with the Fast Track Immigration - Trusted Traveller Programme, which speeds up immigration clearance at airports." },
      { q: "Who needs FTI-TTP Registration?", a: "Indian citizens who are planning domestic or international travel and require valid travel documentation." },
      { q: "What documents are required for FTI-TTP Registration?", a: "The key documents typically required are: Passport, Aadhaar, Biometric enrolment. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for FTI-TTP Registration?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does FTI-TTP Registration take to process?", a: "The typical processing time is 10-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in FTI-TTP Registration?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my FTI-TTP Registration application is rejected or delayed?", a: "Applications may be delayed or rejected due to incomplete address proof, police verification issues, or document mismatches. These can typically be resolved with correct supporting evidence." },
      { q: "How does Aarambh India help with FTI-TTP Registration?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },

  // ---------------- INSURANCE & PENSION (3) ----------------
  {
    id: "atal-pension-yojana",
    image:atalpension,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Atal Pension Yojana",
    category: "insurance",
    price: "₹99 onwards enrollment assistance",
    summary: "Plan for Your Retirement with the Atal Pension Yojana (APY) — Available for eligible individuals aged 18–40, with guaranteed pension benefits based on the chosen plan.",
    benefits: [
      "Enrols you in a government-backed guaranteed pension scheme for the 18–40 age group.",
      "Guidance on choosing a monthly pension amount that fits your retirement goals.",
      "Assistance linking the scheme to your bank account for auto-debit contributions.",
      "Careful, accurate enrolment to ensure your pension benefit is correctly recorded.",
      "Clear explanation of contribution amounts based on your age and chosen pension.",
      "Ongoing support with contribution tracking and nominee updates."
    ],
    faqs: [
      { q: "What is Atal Pension Yojana?", a: "A government-backed pension scheme for people in the 18-40 age group, which provides a fixed monthly pension after 60 years." },
      { q: "Who needs Atal Pension Yojana?", a: "Individuals, typically within the scheme's specified age bracket, who want affordable government-backed insurance or pension coverage." },
      { q: "What documents are required for Atal Pension Yojana?", a: "The key documents typically required are: Aadhaar, Bank account, Age proof. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Atal Pension Yojana?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Atal Pension Yojana take to process?", a: "The typical processing time is 7-10 working days (through bank enrollment). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Atal Pension Yojana?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Atal Pension Yojana application is rejected or delayed?", a: "Enrollment may fail due to incorrect bank details or KYC mismatch. This can be corrected and the enrollment reattempted through the linked bank." },
      { q: "How does Aarambh India help with Atal Pension Yojana?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "pmjjby",
    image:pmjjby,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "PMJJBY",
    category: "insurance",
    price: "₹99 onwards enrollment assistance",
    summary: "Get PMJJBY Life Insurance Cover — Affordable life insurance coverage of up to ₹2 lakh for eligible individuals.",
    benefits: [
      "Enrols you in an affordable life insurance cover of up to ₹2 lakh under a government scheme.",
      "Guidance on eligibility criteria and the annual premium applicable to you.",
      "Assistance linking the policy to your bank account for auto-debit renewal.",
      "Careful, accurate enrolment to avoid claim-related issues later.",
      "Support ensuring your nominee details are correctly recorded.",
      "Guidance on the claims process should the need ever arise."
    ],
    faqs: [
      { q: "What is PMJJBY?", a: "Pradhan Mantri Jeevan Jyoti Bima Yojana - A low-premium life insurance cover of one year, in which the nominee gets a fixed amount on death." },
      { q: "Who needs PMJJBY?", a: "Individuals, typically within the scheme's specified age bracket, who want affordable government-backed insurance or pension coverage." },
      { q: "What documents are required for PMJJBY?", a: "The key documents typically required are: Aadhaar, Bank account (for auto-debit). Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for PMJJBY?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does PMJJBY take to process?", a: "The typical processing time is 3-7 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in PMJJBY?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my PMJJBY application is rejected or delayed?", a: "Enrollment may fail due to incorrect bank details or KYC mismatch. This can be corrected and the enrollment reattempted through the linked bank." },
      { q: "How does Aarambh India help with PMJJBY?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "pmsby",
    image:pmsby,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "PMSBY",
    category: "insurance",
    price: "₹99 onwards enrollment assistance",
    summary: "Get PM Suraksha Bima Yojana (PMSBY) — Affordable accidental insurance cover of up to ₹2 lakh for eligible individuals.",
    benefits: [
      "Enrols you in an affordable accidental insurance cover of up to ₹2 lakh at a minimal annual premium.",
      "Guidance on eligibility criteria and the coverage this scheme provides.",
      "Assistance linking the policy to your bank account for auto-debit renewal.",
      "Careful, accurate enrolment to avoid issues at the time of a claim.",
      "Support ensuring your nominee details are correctly recorded.",
      "Guidance on the claims process in the event of an accident."
    ],
    faqs: [
      { q: "What is PMSBY?", a: "Pradhan Mantri Suraksha Bima Yojana - low-premium insurance scheme for accidental death/disability." },
      { q: "Who needs PMSBY?", a: "Individuals, typically within the scheme's specified age bracket, who want affordable government-backed insurance or pension coverage." },
      { q: "What documents are required for PMSBY?", a: "The key documents typically required are: Aadhaar, Bank account (for auto-debit). Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for PMSBY?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does PMSBY take to process?", a: "The typical processing time is 3-7 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in PMSBY?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my PMSBY application is rejected or delayed?", a: "Enrollment may fail due to incorrect bank details or KYC mismatch. This can be corrected and the enrollment reattempted through the linked bank." },
      { q: "How does Aarambh India help with PMSBY?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },

  // ---------------- EMPLOYMENT (3) ----------------
  {
    id: "e-shram-card",
    image:eshram,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "e-Shram Card",
    category: "employment",
    tag: "Popular",
    price: "₹149 onwards",
    summary: "Get Your e-Shram Card — Essential for eligible unorganised sector workers to access social security schemes and other government benefits.",
    benefits: [
      "Registers unorganised sector workers for social security scheme benefits under the e-Shram initiative.",
      "Guidance on eligibility and the documents required for registration.",
      "Careful, accurate data entry to ensure your record is correctly maintained.",
      "Assistance understanding the insurance and welfare benefits linked to your card.",
      "Regular status updates until your e-Shram card is issued.",
      "Support updating your details if your occupation or address changes later."
    ],
    faqs: [
      { q: "What is e-Shram Card?", a: "Registration in the national database for unorganized sector workers, which provides benefits of social security schemes." },
      { q: "Who needs e-Shram Card?", a: "Workers, job seekers, and employees who need this registration for social security benefits, provident fund access, or employment scheme participation." },
      { q: "What documents are required for e-Shram Card?", a: "The key documents typically required are: Aadhaar, Bank account, Mobile number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for e-Shram Card?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does e-Shram Card take to process?", a: "The typical processing time is 1-3 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in e-Shram Card?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my e-Shram Card application is rejected or delayed?", a: "Registration issues usually arise from Aadhaar-mobile mismatch or incomplete KYC, and can be resolved by updating the relevant linked details." },
      { q: "How does Aarambh India help with e-Shram Card?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "uan-activation",
    image:uan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "UAN Activation",
    category: "employment",
    price: "₹99 onwards",
    summary: "Activate Your EPF Universal Account Number (UAN) — Easily manage your PF account, check your balance, and access eligible withdrawal services.",
    benefits: [
      "Activates your EPF Universal Account Number, enabling PF balance checks and withdrawal requests.",
      "Guidance on retrieving your UAN if you don't already have it on hand.",
      "Assistance completing KYC seeding — Aadhaar, PAN, bank details — needed for smooth PF transactions.",
      "Careful, accurate activation process to avoid login or verification issues later.",
      "Support checking your PF balance and passbook once activated.",
      "Guidance on the process for future PF withdrawal or transfer requests."
    ],
    faqs: [
      { q: "What is UAN Activation?", a: "To activate Universal Account Number (UAN) of EPFO, so that PF balance check and withdrawal can be done online." },
      { q: "Who needs UAN Activation?", a: "Workers, job seekers, and employees who need this registration for social security benefits, provident fund access, or employment scheme participation." },
      { q: "What documents are required for UAN Activation?", a: "The key documents typically required are: UAN number, Aadhaar, Registered mobile number. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for UAN Activation?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does UAN Activation take to process?", a: "The typical processing time is 1-2 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in UAN Activation?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my UAN Activation application is rejected or delayed?", a: "Registration issues usually arise from Aadhaar-mobile mismatch or incomplete KYC, and can be resolved by updating the relevant linked details." },
      { q: "How does Aarambh India help with UAN Activation?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "pm-internship",
    image:pmintern,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "PM Internship Registration",
    category: "employment",
    tag: "New",
    price: "₹99 onwards",
    summary: "Register for the PM Internship Scheme — Gain valuable hands-on experience and internship opportunities with leading companies.",
    benefits: [
      "Registers you for the PM Internship Scheme, offering hands-on experience with top companies.",
      "Guidance on eligibility criteria and the application timeline.",
      "Assistance preparing your profile and required documents for registration.",
      "Careful, accurate application filing to improve your chances of selection.",
      "Regular status updates from registration through to placement outcome.",
      "Support understanding the stipend and benefits associated with the scheme."
    ],
    faqs: [
      { q: "What is PM Internship Registration?", a: "Registration on the portal under PM Internship Scheme, through which youth get the opportunity to do internship in top companies." },
      { q: "Who needs PM Internship Registration?", a: "Workers, job seekers, and employees who need this registration for social security benefits, provident fund access, or employment scheme participation." },
      { q: "What documents are required for PM Internship Registration?", a: "The key documents typically required are: Aadhaar, Educational certificates, Bank account. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for PM Internship Registration?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does PM Internship Registration take to process?", a: "The typical processing time is 5-7 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in PM Internship Registration?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my PM Internship Registration application is rejected or delayed?", a: "Registration issues usually arise from Aadhaar-mobile mismatch or incomplete KYC, and can be resolved by updating the relevant linked details." },
      { q: "How does Aarambh India help with PM Internship Registration?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },

  // ---------------- TEMPLE DARSHAN BOOKING (5) ----------------
  {
    id: "kashi-vishwanath-darshan",
    image:temple_darshan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Kashi Vishwanath Darshan Booking",
    category: "darshan",
    price: "₹299 onwards service charge",
    summary: "Get Sugam Darshan / VIP Darshan Slot Assistance at Kashi Vishwanath Temple, Varanasi — Convenient booking support for a hassle-free temple visit.",
    benefits: [
      "Assistance booking Sugam Darshan or VIP slots at the Kashi Vishwanath Mandir, Varanasi.",
      "Guidance on choosing the most suitable slot and package for your visit.",
      "Reduces the need to stand in long queues or coordinate bookings on arrival.",
      "Careful handling of your booking details to avoid date or slot errors.",
      "Confirmation sent well ahead of your visit for peace of mind.",
      "Rescheduling assistance if your travel plans change."
    ],
    faqs: [
      { q: "What is Kashi Vishwanath Darshan Booking?", a: "Book VIP/Sugaam darshan slot in advance at Kashi Vishwanath temple in Varanasi to avoid long queues." },
      { q: "Who needs Kashi Vishwanath Darshan Booking?", a: "Devotees and pilgrims who wish to visit the temple and prefer a confirmed, queue-free time slot instead of a walk-in visit." },
      { q: "What documents are required for Kashi Vishwanath Darshan Booking?", a: "The key documents typically required are: Aadhaar/ID proof, Visit date preference. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Kashi Vishwanath Darshan Booking?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Kashi Vishwanath Darshan Booking take to process?", a: "The typical processing time is 1-3 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Kashi Vishwanath Darshan Booking?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Kashi Vishwanath Darshan Booking application is rejected or delayed?", a: "Slot bookings may fail during high-demand periods (festivals) due to limited availability. In such cases, alternate dates or time slots are suggested." },
      { q: "How does Aarambh India help with Kashi Vishwanath Darshan Booking?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "mahakaleshwar-darshan",
    image:temple_darshan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Mahakaleshwar Darshan Booking",
    category: "darshan",
    price: "₹99 onwards service charge",
    summary: "Get Bhasma Aarti / Darshan Slot Booking Assistance at Mahakaleshwar Jyotirlinga, Ujjain — Convenient booking support for a hassle-free temple visit.",
    benefits: [
      "Assistance booking Bhasma Aarti or Darshan slots at the Mahakaleshwar Jyotirlinga, Ujjain.",
      "Guidance on the limited-availability Bhasma Aarti booking process and requirements.",
      "Reduces the uncertainty of securing a slot during high-demand periods.",
      "Careful handling of your booking details to avoid date or slot errors.",
      "Confirmation shared well ahead of your visit.",
      "Suggestions for alternate slots if your preferred timing is unavailable."
    ],
    faqs: [
      { q: "What is Mahakaleshwar Darshan Booking?", a: "To book a Shighra darshan or Bhasma Aarti slot at Mahakaleshwar Jyotirlinga in Ujjain." },
      { q: "Who needs Mahakaleshwar Darshan Booking?", a: "Devotees and pilgrims who wish to visit the temple and prefer a confirmed, queue-free time slot instead of a walk-in visit." },
      { q: "What documents are required for Mahakaleshwar Darshan Booking?", a: "The key documents typically required are: Aadhaar/ID proof, Visit date preference. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Mahakaleshwar Darshan Booking?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Mahakaleshwar Darshan Booking take to process?", a: "The typical processing time is 1-3 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Mahakaleshwar Darshan Booking?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Mahakaleshwar Darshan Booking application is rejected or delayed?", a: "Slot bookings may fail during high-demand periods (festivals) due to limited availability. In such cases, alternate dates or time slots are suggested." },
      { q: "How does Aarambh India help with Mahakaleshwar Darshan Booking?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "sai-baba-darshan",
    image:temple_darshan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Sai Baba Darshan Booking",
    category: "darshan",
    price: "₹99 onwards service charge",
    summary: "Get Darshan / VIP Pass Booking Assistance at Shirdi Sai Baba Temple — Convenient booking support for a hassle-free temple visit.",
    benefits: [
      "Assistance booking Darshan or VIP pass slots at the Shirdi Sai Baba Mandir.",
      "Guidance on choosing the most suitable slot for your visit dates.",
      "Reduces long queue waiting time, especially during festival periods.",
      "Careful handling of your booking details to avoid date or slot errors.",
      "Confirmation shared well ahead of your visit.",
      "Rescheduling assistance if your travel plans change."
    ],
    faqs: [
      { q: "What is Sai Baba Darshan Booking?", a: "Advance booking of darshan slot or VIP pass in Shirdi Sai Baba temple." },
      { q: "Who needs Sai Baba Darshan Booking?", a: "Devotees and pilgrims who wish to visit the temple and prefer a confirmed, queue-free time slot instead of a walk-in visit." },
      { q: "What documents are required for Sai Baba Darshan Booking?", a: "The key documents typically required are: Aadhaar/ID proof, Visit date preference. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Sai Baba Darshan Booking?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Sai Baba Darshan Booking take to process?", a: "The typical processing time is 1-3 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Sai Baba Darshan Booking?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Sai Baba Darshan Booking application is rejected or delayed?", a: "Slot bookings may fail during high-demand periods (festivals) due to limited availability. In such cases, alternate dates or time slots are suggested." },
      { q: "How does Aarambh India help with Sai Baba Darshan Booking?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "srisaila-darshan",
    image:temple_darshan,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Srisaila Devasthanam Darshan Booking",
    category: "darshan",
    price: "₹299 onwards service charge",
    summary: "Get Darshan Slot Booking Assistance at Srisailam Mallikarjuna Jyotirlinga Temple — Convenient booking support for a hassle-free temple visit.",
    benefits: [
      "Assistance booking Darshan slots at the Srisailam Mallikarjuna Jyotirlinga temple.",
      "Guidance on choosing the most suitable slot for your visit.",
      "Reduces uncertainty around slot availability during peak pilgrimage periods.",
      "Careful handling of your booking details to avoid date or slot errors.",
      "Confirmation shared well ahead of your visit.",
      "Suggestions for alternate dates if your preferred slot is unavailable."
    ],
    faqs: [
      { q: "What is Srisaila Devasthanam Darshan Booking?", a: "Darshan slot booking in Srisailam Mallikarjuna temple (Andhra Pradesh)." },
      { q: "Who needs Srisaila Devasthanam Darshan Booking?", a: "Devotees and pilgrims who wish to visit the temple and prefer a confirmed, queue-free time slot instead of a walk-in visit." },
      { q: "What documents are required for Srisaila Devasthanam Darshan Booking?", a: "The key documents typically required are: Aadhaar/ID proof, Visit date preference. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Srisaila Devasthanam Darshan Booking?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Srisaila Devasthanam Darshan Booking take to process?", a: "The typical processing time is 1-3 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Srisaila Devasthanam Darshan Booking?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Srisaila Devasthanam Darshan Booking application is rejected or delayed?", a: "Slot bookings may fail during high-demand periods (festivals) due to limited availability. In such cases, alternate dates or time slots are suggested." },
      { q: "How does Aarambh India help with Srisaila Devasthanam Darshan Booking?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "vitthal-rukmini-darshan",
    image:vitthal,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Vitthal Rukmini Darshan Booking",
    category: "darshan",
    price: "₹99 onwards service charge",
    summary: "Get Darshan Slot Booking Assistance at Vitthal Rukmini Temple, Pandharpur — Convenient booking support for a hassle-free temple visit.",
    benefits: [
      "Assistance booking Darshan slots at the Vitthal Rukmini Mandir, Pandharpur.",
      "Guidance on choosing the most suitable slot, especially during festival (Wari) periods.",
      "Reduces long queue waiting time on the day of your visit.",
      "Careful handling of your booking details to avoid date or slot errors.",
      "Confirmation shared well ahead of your visit.",
      "Suggestions for alternate slots if availability is limited."
    ],
    faqs: [
      { q: "What is Vitthal Rukmini Darshan Booking?", a: "Advance booking of darshan slot in Vitthal Rukmini temple of Pandharpur." },
      { q: "Who needs Vitthal Rukmini Darshan Booking?", a: "Devotees and pilgrims who wish to visit the temple and prefer a confirmed, queue-free time slot instead of a walk-in visit." },
      { q: "What documents are required for Vitthal Rukmini Darshan Booking?", a: "The key documents typically required are: Aadhaar/ID proof, Visit date preference. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Vitthal Rukmini Darshan Booking?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Vitthal Rukmini Darshan Booking take to process?", a: "The typical processing time is 1-3 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Vitthal Rukmini Darshan Booking?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Vitthal Rukmini Darshan Booking application is rejected or delayed?", a: "Slot bookings may fail during high-demand periods (festivals) due to limited availability. In such cases, alternate dates or time slots are suggested." },
      { q: "How does Aarambh India help with Vitthal Rukmini Darshan Booking?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },

  // ---------------- HEALTH & WELFARE (3) ----------------
  {
    id: "abha-service",
    image:abha,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "ABHA Service",
    category: "health",
    tag: "New",
    price: "₹99 onwards",
    summary: "Get Your Ayushman Bharat Health Account (ABHA ID) — Create your digital health ID and securely manage your digital health records.",
    benefits: [
      "Creates your Ayushman Bharat Health Account (ABHA ID), consolidating your health records in one digital place.",
      "Instant, Aadhaar or mobile-based ID creation with minimal paperwork.",
      "Assistance linking your existing health records to your ABHA account.",
      "Speeds up hospital OPD registration at participating facilities.",
      "Support downloading and saving your ABHA card for future use.",
      "Guidance on how to share your health records securely when needed."
    ],
    faqs: [
      { q: "What is ABHA Service?", a: "Creating an Ayushman Bharat Health Account (ABHA), which links digital health records into one place." },
      { q: "Who needs ABHA Service?", a: "Eligible individuals and families seeking healthcare benefits or welfare identification under government health schemes." },
      { q: "What documents are required for ABHA Service?", a: "The key documents typically required are: Aadhaar, Mobile number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for ABHA Service?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does ABHA Service take to process?", a: "The typical processing time is usually 1-2 days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in ABHA Service?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my ABHA Service application is rejected or delayed?", a: "Applications may require additional verification if family or income details do not match existing records; these can be corrected and resubmitted." },
      { q: "How does Aarambh India help with ABHA Service?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "ayushman-service",
    image:aayushman,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "Ayushman Service",
    category: "health",
    tag: "Popular",
    price: "₹99 onwards",
    summary: "Get Your Ayushman Bharat (PM-JAY) Card — Access eligible healthcare coverage of up to ₹5 lakh per family per year.",
    benefits: [
      "Assistance obtaining your Ayushman Bharat (PM-JAY) card for treatment cover of up to ₹5 lakh.",
      "Eligibility check against the SECC database before you apply.",
      "Guidance on the empanelled hospitals where your card can be used.",
      "Careful, accurate application filing to avoid documentation-related delays.",
      "Support adding eligible family members to your card.",
      "Regular status updates until your card is issued."
    ],
    faqs: [
      { q: "What is Ayushman Service?", a: "Making Ayushman Bharat (PM-JAY) card, through which eligible families get free treatment up to Rs 5 lakh." },
      { q: "Who needs Ayushman Service?", a: "Eligible individuals and families seeking healthcare benefits or welfare identification under government health schemes." },
      { q: "What documents are required for Ayushman Service?", a: "The key documents typically required are: Aadhaar, Ration card/family ID, Income proof (if required). Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Ayushman Service?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does Ayushman Service take to process?", a: "The typical processing time is 7-15 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in Ayushman Service?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my Ayushman Service application is rejected or delayed?", a: "Applications may require additional verification if family or income details do not match existing records; these can be corrected and resubmitted." },
      { q: "How does Aarambh India help with Ayushman Service?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
  {
    id: "udid-service",
    image:udid,
    apply_form: "/aarambh-aadhaar-form.html",
    name: "UDID Service",
    category: "health",
    price: "₹149 onwards",
    summary: "Get Your Unique Disability ID (UDID) Card — An essential document for disability certification, eligible benefits, and government welfare schemes.",
    benefits: [
      "Assistance obtaining your Unique Disability ID (UDID) card and disability certificate.",
      "Guidance on the online application process via the Swavlambancard portal.",
      "Support scheduling your required medical assessment appointment.",
      "Careful, accurate application filing to avoid processing delays.",
      "Explains the government scheme and reservation benefits your UDID unlocks.",
      "Regular status updates from application through to card issuance."
    ],
    faqs: [
      { q: "What is UDID Service?", a: "Making a Unique Disability ID card for Divyang (Persons with Disabilities), which is necessary for government benefits." },
      { q: "Who needs UDID Service?", a: "Eligible individuals and families seeking healthcare benefits or welfare identification under government health schemes." },
      { q: "What documents are required for UDID Service?", a: "The key documents typically required are: Aadhaar, Disability certificate, Photo. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for UDID Service?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal." },
      { q: "How long does UDID Service take to process?", a: "The typical processing time is 15-21 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee." },
      { q: "What are the charges involved in UDID Service?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding." },
      { q: "What happens if my UDID Service application is rejected or delayed?", a: "Applications may require additional verification if family or income details do not match existing records; these can be corrected and resubmitted." },
      { q: "How does Aarambh India help with UDID Service?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals." },
    ]
  },
];


export default SERVICES;