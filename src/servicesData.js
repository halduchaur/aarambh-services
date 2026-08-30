const WHATSAPP_NUMBER = "919999999999"; // TODO: replace with real number
import aarambhLogo from "./assets/images/aarambh_logo.jpeg";

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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Aadhaar Address Update",
    category: "identity",
    tag: "Popular",
    price: "₹149 onwards",
    summary: "Update your Aadhaar address online or offline — banking, SIM aur admission ke liye zaroori.",
    benefits: [
      "Address correction online ya nearest center ke through",
      "Supporting document guidance included (electricity bill, rent agreement, etc.)",
      "Updated e-Aadhaar PDF turant milta hai",
      "SMS/status tracking tak poora support"
    ],
    faqs: [
      { q: "What is Aadhaar Address Update?", a: "Updating/correcting the current residential address in Aadhaar card." },
      { q: "Who needs Aadhaar Address Update?", a: "Any Indian resident who needs to obtain, update, or correct this identity document, typically for KYC, banking, government scheme, or verification purposes." },
      { q: "What documents are required for Aadhaar Address Update?", a: "The key documents typically required are: Address proof (electricity bill, rent agreement, passport, bank statement), Aadhaar number. Original documents are usually not required upfront; Clear scanned or photographed copies are generally sufficient for application submission." },
      { q: "What is the process for Aadhaar Address Update?", a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until it is approved or issued by the concerned department or portal."},
      { q: "How long does Aadhaar Address Update take to process?", a: "The typical processing time is 7-15 days (after online request). This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."},
      { q: "What are the charges involved in Aadhaar Address Update?", a: "There is an official government fee (where applicable) set by the concerned department, which is separate from the service facilitation charge. Since government fees are revised periodically, the current applicable amount is shared with the client before proceeding."},
      { q: "What happens if my Aadhaar Address Update application is rejected or delayed?", a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, unclear document copies, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue."},
      { q: "How does Aarambh India help with Aadhaar Address Update?", a: "Aarambh India verifies that all documents are complete and correctly formatted, accurately fills and submits the application on the client's behalf, and provides regular status updates over WhatsApp until the process is completed - saving the client repeated visits to offices or portals."},
    ]
  },
  {
    id: "aadhaar-npci-link",
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Aadhaar NPCI Link",
    category: "identity",
    price: "₹99 onwards",
    summary: "Aadhaar ko NPCI (bank account) se link karwayein — DBT scheme benefits seedha account mein.",
    benefits: [
      "Government subsidy aur DBT payments directly bank mein",
      "Bank branch visit ki zaroorat nahi",
      "Linking status verification included",
      "LPG subsidy, PM-Kisan jaisi schemes ke liye zaroori"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Aadhaar–PAN Link",
    category: "identity",
    tag: "Popular",
    price: "₹99 onwards",
    summary: "PAN ko Aadhaar se link karwayein — ITR filing aur banking ke liye mandatory.",
    benefits: [
      "PAN ko inoperative hone se bachayein",
      "Late fee payment guidance (agar applicable ho)",
      "Instant linking status check",
      "ITR filing se pehle zaroori compliance"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Aadhaar PVC Card",
    category: "identity",
    tag: "Fast",
    price: "₹79 onwards",
    summary: "Durable, credit-card size PVC Aadhaar — QR code aur security features ke saath.",
    benefits: [
      "ATM-card jaisa mazboot aur pocket-friendly",
      "QR code, hologram aur ghost image security",
      "Order ke 5–7 din mein speed post se delivery",
      "Purane paper Aadhaar se zyada durable"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "New PAN Card",
    category: "identity",
    tag: "Popular",
    price: "₹199 onwards",
    summary: "Naya PAN Card apply karein — banking, income tax filing aur investment ke liye zaroori document.",
    benefits: [
      "Fresh PAN application, NSDL/UTIITSL dono ke through",
      "Form-filling aur document verification hum karte hain",
      "e-PAN turant, physical card 15 din mein",
      "Minors ke liye bhi apply ho sakta hai"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "PAN Card Correction",
    category: "identity",
    price: "₹199 onwards",
    summary: "Naam, DOB, photo ya signature mein correction — updated PAN card seedha ghar tak.",
    benefits: [
      "Naam, spelling, address, photo — sab correction possible",
      "Supporting document guidance included",
      "Old card automatically cancel ho jata hai",
      "Correction status tracking support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Reprint PAN",
    category: "identity",
    price: "₹99 onwards",
    summary: "PAN card khoya ya kharaab ho gaya? Same details ke saath duplicate card mangwayein.",
    benefits: [
      "Same PAN number, sirf naya physical/plastic card",
      "Lost, damaged ya torn card ke liye ideal",
      "e-PAN copy turant mil jaati hai",
      "No fresh KYC ki zaroorat"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "New Voter Card",
    category: "identity",
    price: "₹149 onwards",
    summary: "18+ ho gaye? Naya EPIC (Voter ID) card apply karein aur vote karne ka apna haq paayein.",
    benefits: [
      "Form 6 filing aur document verification included",
      "BLO follow-up hum manage karte hain",
      "Digital voter card download support",
      "Physical card delivery tracking"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Voter Card Correction",
    category: "identity",
    price: "₹149 onwards",
    summary: "Naam, address ya photo galat hai? Voter ID mein correction karwayein Form 8 ke zariye.",
    benefits: [
      "Form 8 filing hum handle karte hain",
      "Address change/constituency shift bhi possible",
      "Digital + physical dono card options",
      "End-to-end status tracking"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Apaar ID",
    category: "identity",
    tag: "New",
    price: "₹99 onwards",
    summary: "Students ke liye APAAR ID (One Nation One Student ID) — academic records ek jagah.",
    benefits: [
      "School/college ke through fast registration",
      "Academic credits aur records digitally linked",
      "Aadhaar-linked verification support",
      "Future scholarships aur admissions ke liye useful"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Caste Certificate – Haryana",
    category: "certificates",
    price: "₹299 onwards",
    summary: "Haryana state ke liye caste certificate — reservation, scholarship aur govt jobs ke liye zaroori.",
    benefits: [
      "SC/ST/OBC category ke hisaab se application",
      "Tehsildar office follow-up hum karte hain",
      "Required affidavit aur documents guidance",
      "Digital + signed hard copy dono"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Caste Certificate – Maharashtra",
    category: "certificates",
    price: "₹299 onwards",
    summary: "Maharashtra state ke liye caste certificate — Aaple Sarkar portal ke through processed.",
    benefits: [
      "Aaple Sarkar portal application hum file karte hain",
      "SDO/Tehsildar level follow-up",
      "Scholarship aur admission ke liye ready document",
      "Status tracking support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Domicile Certificate – Maharashtra",
    category: "certificates",
    price: "₹249 onwards",
    summary: "Maharashtra residency proof certificate — admissions aur govt jobs ke liye zaroori.",
    benefits: [
      "State residency proof, admissions ke liye valid",
      "15 saal ke residence proof ki guidance",
      "Tehsil office coordination included",
      "Digital copy jaldi milti hai"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Income Certificate – Haryana",
    category: "certificates",
    price: "₹249 onwards",
    summary: "Haryana income certificate — scholarship, fee waiver aur govt schemes ke liye zaroori.",
    benefits: [
      "Annual income proof, saral portal ke through",
      "Fee concession aur scholarship ke liye valid",
      "Patwari/Tehsildar verification hum manage karte hain",
      "1 saal validity ke saath fresh certificate"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Income Certificate – Maharashtra",
    category: "certificates",
    price: "₹249 onwards",
    summary: "Maharashtra income certificate — Aaple Sarkar ke through fast processing.",
    benefits: [
      "Aaple Sarkar portal se application",
      "Scholarship, loan aur scheme eligibility ke liye valid",
      "Tehsil-level verification follow-up",
      "Digital copy download support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Senior Citizen Card – Andhra Pradesh",
    category: "certificates",
    price: "₹199 onwards",
    summary: "60+ AP residents ke liye senior citizen card — travel discounts aur scheme benefits.",
    benefits: [
      "Railway/bus fare concession ke liye valid proof",
      "State welfare scheme eligibility",
      "Age aur address proof verification included",
      "Fast issuance support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Senior Citizen Card – Assam",
    category: "certificates",
    price: "₹199 onwards",
    summary: "Assam ke senior citizens ke liye official ID card — benefits aur concessions ke liye.",
    benefits: [
      "State-recognized senior citizen proof",
      "Healthcare aur travel scheme benefits",
      "Application aur verification support",
      "Fast turnaround"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Senior Citizen Card – Karnataka",
    category: "certificates",
    price: "₹199 onwards",
    summary: "Karnataka senior citizens ke liye ID card — Seva Sindhu portal ke through.",
    benefits: [
      "Seva Sindhu portal application hum file karte hain",
      "Bus, healthcare aur scheme discounts",
      "Age proof verification support",
      "Digital + physical card"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Senior Citizen Card – Maharashtra",
    category: "certificates",
    price: "₹199 onwards",
    summary: "Maharashtra senior citizens ke liye card — state benefits aur discounts ke liye.",
    benefits: [
      "State transport aur scheme discounts",
      "Aaple Sarkar portal ke through application",
      "Age aur residency proof verification",
      "Fast processing support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "FSSAI New Food License",
    category: "business",
    tag: "Popular",
    price: "₹1,499 onwards",
    summary: "Food business shuru kar rahe hain? FSSAI license mandatory hai — Basic, State ya Central.",
    benefits: [
      "Business turnover ke hisaab se sahi license category select",
      "Document preparation aur online filing",
      "Govt fee guidance included",
      "Application status tracking tak support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "FSSAI Food License Renewal",
    category: "business",
    price: "₹999 onwards",
    summary: "FSSAI license expire hone se pehle renew karwayein — penalty se bachein.",
    benefits: [
      "Expiry se pehle timely renewal reminder",
      "Late fee se bachne ki guidance",
      "Document update (agar business details badle ho)",
      "Renewed certificate digitally + hard copy"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "GSTIN Verification",
    category: "business",
    price: "₹99 onwards",
    summary: "Kisi bhi GSTIN ki authenticity verify karwayein — vendor onboarding aur compliance ke liye.",
    benefits: [
      "GSTIN validity aur business details check",
      "Fake/cancelled GSTIN detection",
      "Vendor due-diligence ke liye useful",
      "Turnaround same-day"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "GST Registration",
    category: "business",
    tag: "Popular",
    price: "₹999 onwards",
    summary: "Naya GST registration — turnover threshold cross kar gaye hain ya business formalize karna hai.",
    benefits: [
      "Document collection aur application filing",
      "HSN/SAC code selection guidance",
      "ARN tracking tak poora support",
      "GSTIN mile ke baad basic compliance guidance"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Udyam Registration",
    category: "business",
    tag: "Popular",
    price: "₹299 onwards",
    summary: "MSME/Udyam registration — govt tenders, loans aur subsidy benefits ke liye zaroori.",
    benefits: [
      "Aadhaar-based online registration",
      "MSME loan aur subsidy eligibility",
      "Govt tender participation ke liye valid proof",
      "Instant e-certificate"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "ITR Filing",
    category: "business",
    tag: "Popular",
    price: "₹499 onwards",
    summary: "Income Tax Return filing — salaried, business ya freelancer, sabke liye assistance.",
    benefits: [
      "Sahi ITR form select karke filing",
      "Deductions aur exemptions maximize karne ki guidance",
      "Refund status tracking support",
      "Form 16/26AS reconciliation included"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "DL Aadhaar Link",
    category: "transport",
    price: "₹99 onwards",
    summary: "Driving License ko Aadhaar se link karwayein — digital verification ke liye zaroori.",
    benefits: [
      "Parivahan portal ke through online linking",
      "Fast eKYC verification",
      "No RTO visit zaroori",
      "Linking confirmation SMS"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "DL Address Change",
    category: "transport",
    price: "₹299 onwards",
    summary: "Driving License par address update karwayein naye address proof ke saath.",
    benefits: [
      "Online application, RTO coordination included",
      "New address proof verification guidance",
      "Updated DL digitally + physical copy",
      "Status tracking support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Duplicate Driving License",
    category: "transport",
    tag: "Fast",
    price: "₹399 onwards",
    summary: "DL kho gaya ya kharaab ho gaya? Duplicate license mangwayein bina hassle ke.",
    benefits: [
      "Lost/damaged DL ke liye fresh copy",
      "FIR/affidavit guidance (agar zaroori ho)",
      "Same license number retain hota hai",
      "RTO follow-up hum karte hain"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Learners License",
    category: "transport",
    tag: "Popular",
    price: "₹299 onwards",
    summary: "Naya Learner's License — online test slot booking aur application, dono mein support.",
    benefits: [
      "Online LL test slot booking assistance",
      "Form 2 filing aur document verification",
      "Test preparation tips (traffic rules)",
      "Approved LL digitally turant mil jaata hai"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Permanent DL",
    category: "transport",
    tag: "Popular",
    price: "₹499 onwards",
    summary: "Learner's License ke baad permanent DL — driving test slot booking sahit poora process.",
    benefits: [
      "RTO driving test slot booking assistance",
      "Document aur form preparation",
      "Test date reminder aur guidance",
      "Approved DL card home delivery"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "International Driving License Permit (IDP)",
    category: "travel",
    price: "₹1,499 onwards",
    summary: "Videsh mein drive karna hai? International Driving Permit apply karwayein aasani se.",
    benefits: [
      "RTO application aur document preparation",
      "Valid Indian DL ke basis par processing",
      "1 saal ki international validity",
      "Travel se pehle timely delivery"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "RC Aadhaar Link",
    category: "transport",
    price: "₹99 onwards",
    summary: "Vehicle RC ko Aadhaar se link karwayein — ownership verification ke liye.",
    benefits: [
      "Parivahan portal ke through online linking",
      "Fast eKYC based verification",
      "No RTO visit zaroori",
      "Confirmation status share kiya jaata hai"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "HSRP",
    category: "transport",
    tag: "Fast",
    price: "₹399 onwards",
    summary: "High Security Registration Plate — 2 aur 4 wheelers ke liye mandatory compliance.",
    benefits: [
      "Booking aur installation slot ka poora arrangement",
      "State-wise compliance guidance",
      "Tamper-proof, laser-branded plate",
      "Old vs new vehicles dono ke liye eligible"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Color Code Sticker",
    category: "transport",
    tag: "Fast",
    price: "₹149 onwards",
    summary: "Fuel-type color coded sticker (Petrol/Diesel/CNG) — HSRP ke saath mandatory.",
    benefits: [
      "Fuel type ke hisaab se correct color sticker",
      "HSRP ke saath ek hi visit mein install",
      "Compliance challan se bachaav",
      "Fast issuance"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Vehicle Challan Payment",
    category: "transport",
    price: "₹49 onwards service charge",
    summary: "Pending traffic challans check aur pay karwayein — bina RTO ya court visit ke.",
    benefits: [
      "Vehicle number se pending challan check",
      "Online payment assistance",
      "Court-referred challan guidance (agar applicable)",
      "Payment confirmation receipt"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Vehicle Tax",
    category: "transport",
    price: "₹99 onwards service charge",
    summary: "Road tax payment aur renewal — state RTO rules ke hisaab se timely compliance.",
    benefits: [
      "Due tax amount calculation",
      "Online payment assistance",
      "Interstate vehicle tax transfer guidance",
      "Payment receipt aur record"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Fastag KYV",
    category: "transport",
    tag: "Fast",
    price: "₹99 onwards",
    summary: "FASTag KYV (Know Your Vehicle) update — blacklist hone se bachne ke liye zaroori.",
    benefits: [
      "KYV pending status resolve karte hain",
      "Vehicle-FASTag mapping correction",
      "Blacklisting se bachaav",
      "Same-day processing"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "FASTag One Year Pass",
    category: "transport",
    tag: "New",
    price: "₹149 onwards service charge",
    summary: "National highway ke liye FASTag annual pass — baar-baar toll payment se chhutkara.",
    benefits: [
      "Annual pass activation assistance",
      "Multiple toll crossing ek pass mein",
      "Vehicle eligibility check",
      "Fast activation support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "New Passport",
    category: "travel",
    tag: "Popular",
    price: "₹699 onwards service charge",
    summary: "Fresh passport application — Tatkal available, appointment booking included.",
    benefits: [
      "Form filling aur document checklist guidance",
      "Passport Seva Kendra appointment booking",
      "Tatkal option available (jaldi ke liye)",
      "Police verification process guidance"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Passport Renewal",
    category: "travel",
    price: "₹699 onwards service charge",
    summary: "Passport expire ho raha hai ya ho chuka hai? Renewal application aasani se karwayein.",
    benefits: [
      "Expired/expiring passport ke liye renewal filing",
      "Appointment booking included",
      "Address/name change bhi saath mein ho sakta hai",
      "Tatkal renewal option available"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "FTI-TTP Registration",
    category: "travel",
    tag: "New",
    price: "₹1,999 onwards",
    summary: "Trusted Traveller Programme registration — immigration counters par fast, automated clearance.",
    benefits: [
      "Application form aur biometric appointment guidance",
      "Fast-track immigration eligibility",
      "Document checklist aur verification support",
      "Frequent international travellers ke liye ideal"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Atal Pension Yojana",
    category: "insurance",
    price: "₹99 onwards enrollment assistance",
    summary: "Retirement ke liye guaranteed pension scheme — 18–40 age group ke liye.",
    benefits: [
      "Bank account-linked enrollment assistance",
      "Pension amount (₹1,000–₹5,000/month) selection guidance",
      "Auto-debit setup ke through easy contribution",
      "Government co-contribution eligibility check"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "PMJJBY",
    category: "insurance",
    price: "₹49 onwards enrollment assistance",
    summary: "Pradhan Mantri Jeevan Jyoti Bima Yojana — sasta life insurance cover, ₹2 lakh tak.",
    benefits: [
      "Low-cost life insurance enrollment (~₹436/year premium)",
      "Bank account-linked auto-debit setup",
      "₹2 lakh life cover ki guidance",
      "Nominee details filing support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "PMSBY",
    category: "insurance",
    price: "₹49 onwards enrollment assistance",
    summary: "Pradhan Mantri Suraksha Bima Yojana — accidental insurance cover, ₹2 lakh tak, minimal premium.",
    benefits: [
      "Low-cost accidental insurance enrollment (~₹20/year premium)",
      "Bank account-linked auto-debit setup",
      "Accidental death/disability cover guidance",
      "Nominee details filing support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "e-Shram Card",
    category: "employment",
    tag: "Popular",
    price: "₹99 onwards",
    summary: "Unorganised sector workers ke liye e-Shram card — social security scheme benefits ke liye.",
    benefits: [
      "Aadhaar-based registration on eshram.gov.in",
      "Accident insurance cover eligibility",
      "Future govt scheme benefits ke liye valid ID",
      "Instant UAN-based card generation"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "UAN Activation",
    category: "employment",
    price: "₹99 onwards",
    summary: "EPF ka Universal Account Number activate karwayein — PF balance check aur withdrawal ke liye.",
    benefits: [
      "EPFO portal ke through UAN activation",
      "Mobile/Aadhaar linking assistance",
      "PF balance check access enable",
      "Withdrawal/transfer ke liye pre-requisite complete"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "PM Internship Registration",
    category: "employment",
    tag: "New",
    price: "₹99 onwards",
    summary: "PM Internship Scheme mein registration — top companies mein hands-on experience ka mauka.",
    benefits: [
      "Eligibility check aur profile registration",
      "Resume/document preparation guidance",
      "Portal-based application filing",
      "Status tracking support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Kashi Vishwanath Darshan Booking",
    category: "darshan",
    price: "₹99 onwards service charge",
    summary: "Varanasi ke Kashi Vishwanath Mandir mein Sugam Darshan/VIP slot booking assistance.",
    benefits: [
      "Online slot booking, date aur time ke saath",
      "Sugam Darshan/special entry guidance",
      "Group booking assistance available",
      "Booking confirmation instantly share"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Mahakaleshwar Darshan Booking",
    category: "darshan",
    price: "₹99 onwards service charge",
    summary: "Ujjain ke Mahakaleshwar Jyotirlinga mein Bhasma Aarti/Darshan slot booking.",
    benefits: [
      "Bhasma Aarti slot booking assistance",
      "General Darshan pass booking",
      "Peak-time date planning guidance",
      "Booking confirmation share instantly"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Sai Baba Darshan Booking",
    category: "darshan",
    price: "₹99 onwards service charge",
    summary: "Shirdi Sai Baba Mandir mein Darshan/VIP pass booking assistance.",
    benefits: [
      "Online Darshan slot booking",
      "VIP/special pass guidance",
      "Group aur family booking assistance",
      "Confirmation instantly share"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Srisaila Devasthanam Darshan Booking",
    category: "darshan",
    price: "₹99 onwards service charge",
    summary: "Srisailam Mallikarjuna Jyotirlinga mandir mein Darshan slot booking assistance.",
    benefits: [
      "Online Darshan slot booking",
      "Special entry pass guidance",
      "Accommodation info (agar chahiye ho)",
      "Confirmation instantly share"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Vitthal Rukmini Darshan Booking",
    category: "darshan",
    price: "₹99 onwards service charge",
    summary: "Pandharpur ke Vitthal Rukmini Mandir mein Darshan slot booking assistance.",
    benefits: [
      "Online Darshan slot booking",
      "Ashadhi/Kartiki Ekadashi special guidance",
      "Group booking assistance",
      "Confirmation instantly share"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "ABHA Service",
    category: "health",
    tag: "New",
    price: "₹49 onwards",
    summary: "Ayushman Bharat Health Account (ABHA ID) create karwayein — digital health records ke liye.",
    benefits: [
      "Aadhaar/mobile-based instant ABHA ID creation",
      "Digital health record linking",
      "Hospital OPD registration fast ho jaati hai",
      "ABHA card download support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "Ayushman Service",
    category: "health",
    tag: "Popular",
    price: "₹99 onwards",
    summary: "Ayushman Bharat (PM-JAY) card banwayein — ₹5 lakh tak free treatment cover ke liye.",
    benefits: [
      "Eligibility check (SECC database ke hisaab se)",
      "Card generation assistance",
      "Empanelled hospital list guidance",
      "Family member addition support"
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
    apply_form: "/aarambh-aadhaar-form.html",
    image:aarambhLogo,
    name: "UDID Service",
    category: "health",
    price: "₹149 onwards",
    summary: "Unique Disability ID (UDID) card — disability certificate aur benefits ke liye zaroori.",
    benefits: [
      "Online application filing on swavlambancard.gov.in",
      "Medical assessment appointment guidance",
      "Disability certificate + UDID card, dono",
      "Govt scheme aur reservation eligibility"
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