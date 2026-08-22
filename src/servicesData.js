/* ==========================================================================
   AARAMBH — Services Data
   --------------------------------------------------------------------------
   Edit this file to add / remove / update services. Every card on the
   services page is generated from this array, so you don't need to touch
   the HTML to change content.

   IMPORTANT — before going live, replace:
   1) WHATSAPP_NUMBER below with your real WhatsApp Business number
      (with country code, no + or spaces, e.g. "919876543210")
   ========================================================================== */

const WHATSAPP_NUMBER = "919999999999"; // TODO: replace with real number

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
    ]
  },
  {
    id: "aadhaar-pan-link",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Link nahi kiya to kya hoga?", a: "PAN inoperative ho sakta hai, jisse banking aur tax filing mein dikkat aayegi." },
      { q: "Late fee kitni hai?", a: "Income Tax portal ke current rules ke hisaab se, hum aapko exact amount bata denge." }
    ]
  },
  {
    id: "aadhaar-pvc-card",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Delivery kahan hoti hai?", a: "UIDAI registered address par speed post se, poore India mein." },
      { q: "Kya mobile number registered hona zaroori hai?", a: "Nahi, unregistered mobile number se bhi order ho sakta hai — hum guide karenge." }
    ]
  },
  {
    id: "new-pan-card",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kaunse documents chahiye?", a: "Identity proof, address proof aur date of birth proof (Aadhaar, passport, etc.)." },
      { q: "PAN card kitne din mein aayega?", a: "e-PAN 2–3 din mein email par, physical card 15 din mein address par." }
    ]
  },
  {
    id: "pan-card-correction",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Correction ke liye kitna time lagta hai?", a: "Typically 15–20 working days, physical card delivery samet." },
      { q: "Kya PAN number badal jayega?", a: "Nahi, sirf details update hoti hain — PAN number same rehta hai." }
    ]
  },
  {
    id: "reprint-pan",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Reprint aur correction mein kya farak hai?", a: "Reprint mein details same rehti hain, sirf naya card banta hai; correction mein details update hoti hain." }
    ]
  },
  {
    id: "new-voter-card",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Minimum age kya hai?", a: "Application ke saal 1 January tak 18 saal ki age honi chahiye." },
      { q: "Card banne mein kitna time lagta hai?", a: "Typically 30–45 din, BLO verification ke baad." }
    ]
  },
  {
    id: "voter-card-correction",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Address change bhi ho sakta hai?", a: "Haan, naye address ke proof ke saath constituency transfer bhi karwa sakte hain." }
    ]
  },
  {
    id: "apaar-id",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Apaar ID kis ke liye hai?", a: "School aur college students ke liye, unke academic records digitally track karne ke liye." },
      { q: "Parent consent chahiye kya?", a: "Minor students ke liye parent/guardian consent zaroori hai." }
    ]
  },

  // ---------------- CERTIFICATES (9) ----------------
  {
    id: "caste-certificate-haryana",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Banne mein kitna time lagta hai?", a: "Typically 15–21 working days, tehsil verification ke baad." },
      { q: "Documents kya chahiye?", a: "Aadhaar, address proof, family caste proof (parent's certificate ho to fast hota hai)." }
    ]
  },
  {
    id: "caste-certificate-maharashtra",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kaunsa portal use hota hai?", a: "Maharashtra government ka Aaple Sarkar (aaplesarkar.mahaonline.gov.in) portal." }
    ]
  },
  {
    id: "domicile-certificate-maharashtra",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Eligibility kya hai?", a: "Aavedak Maharashtra mein minimum required years se reside karta ho, proof ke saath." }
    ]
  },
  {
    id: "income-certificate-haryana",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Validity kitni hoti hai?", a: "Aam taur par 1 saal, uske baad renewal karwana padta hai." }
    ]
  },
  {
    id: "income-certificate-maharashtra",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kaunse documents chahiye?", a: "Salary slip / Form 16 / self-declaration + Aadhaar aur address proof." }
    ]
  },
  {
    id: "senior-citizen-card-ap",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Minimum age kya hai?", a: "60 saal ya usse zyada, valid age proof ke saath." }
    ]
  },
  {
    id: "senior-citizen-card-assam",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kaunse documents lagenge?", a: "Age proof (Aadhaar/birth certificate) aur Assam address proof." }
    ]
  },
  {
    id: "senior-citizen-card-karnataka",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Portal kaunsa use hota hai?", a: "Karnataka government ka Seva Sindhu portal." }
    ]
  },
  {
    id: "senior-citizen-card-maharashtra",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Minimum age kya hai?", a: "60 saal ya usse zyada." }
    ]
  },

  // ---------------- BUSINESS COMPLIANCE (6) ----------------
  {
    id: "fssai-new-license",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Konsa license category chahiye mujhe?", a: "Turnover ke basis par — 12L tak Basic, 12L–20Cr State, usse zyada Central. Hum sahi category suggest karte hain." },
      { q: "License banne mein kitna time lagta hai?", a: "Basic 7–10 din, State/Central 30–60 din tak le sakta hai." }
    ]
  },
  {
    id: "fssai-renewal",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Renewal kab karwana chahiye?", a: "Expiry date se 30 din pehle apply karna best hai, taaki gap na aaye." }
    ]
  },
  {
    id: "gstin-verification",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Yeh service kis kaam aati hai?", a: "Naye vendor/supplier onboard karte waqt GSTIN genuine hai ya nahi, verify karne ke liye." }
    ]
  },
  {
    id: "gst-registration",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Registration mandatory kab hota hai?", a: "Goods ke liye ₹40L aur services ke liye ₹20L turnover cross karne par (state ke hisaab se vary karta hai)." },
      { q: "Registration mein kitna time lagta hai?", a: "Typically 7–15 working days, document verification ke baad." }
    ]
  },
  {
    id: "udyam-registration",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Udyam registration free hai kya?", a: "Govt portal par free hai; hum aapke liye documentation aur filing handle karte hain taaki galti na ho." },
      { q: "Certificate kab milta hai?", a: "Application submit hote hi e-certificate turant generate ho jaata hai." }
    ]
  },
  {
    id: "itr-filing",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "ITR filing deadline kya hai?", a: "Aam taur par 31 July (non-audit cases), lekin govt notification ke hisaab se badal sakti hai — hum update karte rahenge." },
      { q: "Late filing par kya penalty hai?", a: "Income Tax Act ke hisaab se late fee lagti hai; jitni jaldi file karein utna better." }
    ]
  },

  // ---------------- TRANSPORT & VEHICLE (12) ----------------
  {
    id: "dl-aadhaar-link",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kyu zaroori hai yeh?", a: "Digital DL verification aur duplicate license fraud rokne ke liye." }
    ]
  },
  {
    id: "dl-address-change",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kitne din lagte hain?", a: "Typically 15–20 working days, RTO processing ke hisaab se." }
    ]
  },
  {
    id: "duplicate-dl",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kya FIR zaroori hai license khone par?", a: "Kuch states mein required hota hai; hum aapko state-specific requirement bata denge." }
    ]
  },
  {
    id: "learners-license",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Minimum age kya hai?", a: "Gearless two-wheeler ke liye 16 saal (parent consent ke saath), baaki vehicles ke liye 18 saal." }
    ]
  },
  {
    id: "permanent-dl",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "LL ke kitne din baad permanent DL apply kar sakte hain?", a: "Minimum 30 din baad, LL ki validity ke andar (typically 6 mahine)." }
    ]
  },
  {
    id: "idp",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "IDP kitne din chalta hai?", a: "Aam taur par issue date se 1 saal tak valid." },
      { q: "Existing DL zaroori hai kya?", a: "Haan, valid Indian driving license hona mandatory hai." }
    ]
  },
  {
    id: "rc-aadhaar-link",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Yeh mandatory hai kya?", a: "Digital RC verification ko strengthen karne ke liye recommended hai." }
    ]
  },
  {
    id: "hsrp",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "HSRP kyu mandatory hai?", a: "Vehicle theft rokne aur uniform identification ke liye govt ne mandatory kiya hai." }
    ]
  },
  {
    id: "color-code-sticker",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Yeh alag se lagana zaroori hai?", a: "Haan, HSRP ke saath color-coded fuel sticker bhi mandatory hai." }
    ]
  },
  {
    id: "vehicle-challan-payment",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Sabhi challans online pay ho sakte hain?", a: "Zyadatar ho jaate hain; kuch court-referred cases mein physical hearing zaroori ho sakti hai — hum guide karenge." }
    ]
  },
  {
    id: "vehicle-tax",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Tax na bharne par kya hota hai?", a: "Penalty aur vehicle-related services (RC transfer, fitness, etc.) mein rukavat aa sakti hai." }
    ]
  },
  {
    id: "fastag-kyv",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "KYV pending kyu hota hai?", a: "Vehicle registration details FASTag issuer ke records se match na hone par." }
    ]
  },
  {
    id: "fastag-annual-pass",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Yeh pass kaunse vehicles ke liye hai?", a: "Private, non-commercial vehicles (car/jeep/van) ke liye applicable, government scheme ke rules ke hisaab se." }
    ]
  },

  // ---------------- TRAVEL & PASSPORT (4) ----------------
  {
    id: "new-passport",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Normal vs Tatkal mein kya farak hai?", a: "Tatkal mein passport jaldi milta hai (typically 1–3 din processing), lekin extra govt fee lagti hai." },
      { q: "Documents kya chahiye?", a: "Address proof, DOB proof, aur Aadhaar — hum poori list share karte hain application se pehle." }
    ]
  },
  {
    id: "passport-renewal",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kitne pehle renewal karwana chahiye?", a: "Expiry se 6–12 mahine pehle apply karna best rehta hai, especially agar travel plan ho." }
    ]
  },
  {
    id: "fti-ttp",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Yeh kis ke liye useful hai?", a: "Frequent flyers jo baar-baar international travel karte hain, unke liye immigration process fast ho jaata hai." }
    ]
  },

  // ---------------- INSURANCE & PENSION (3) ----------------
  {
    id: "atal-pension-yojana",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Age eligibility kya hai?", a: "18 se 40 saal ke beech koi bhi bank account holder enroll kar sakta hai." },
      { q: "Pension kab se milna shuru hoti hai?", a: "60 saal ki age poori hone ke baad, guaranteed monthly pension." }
    ]
  },
  {
    id: "pmjjby",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Age eligibility kya hai?", a: "18 se 50 saal, bank account ke saath enroll kar sakte hain." },
      { q: "Claim process kaisa hai?", a: "Nominee ko bank branch mein required documents ke saath claim file karna hota hai; hum guide kar sakte hain." }
    ]
  },
  {
    id: "pmsby",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "PMJJBY aur PMSBY mein kya farak hai?", a: "PMJJBY life insurance hai (kisi bhi reason se death), PMSBY accidental insurance hai (accident se hone wali death/disability)." }
    ]
  },

  // ---------------- EMPLOYMENT (3) ----------------
  {
    id: "e-shram-card",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Kaun eligible hai?", a: "16–59 age ke unorganised sector workers (daily wage, gig workers, etc.)." },
      { q: "Card se kya benefit milta hai?", a: "Accident insurance cover aur future government welfare schemes ka access." }
    ]
  },
  {
    id: "uan-activation",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "UAN activate na ho to kya problem hai?", a: "PF balance check, online claim aur transfer jaisi services access nahi ho paatin." }
    ]
  },
  {
    id: "pm-internship",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Eligibility kya hai?", a: "21–24 age group, non-working, non-studying full-time — exact criteria scheme guidelines ke hisaab se." }
    ]
  },

  // ---------------- TEMPLE DARSHAN BOOKING (5) ----------------
  {
    id: "kashi-vishwanath-darshan",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Advance booking kitne din pehle karni chahiye?", a: "Peak season (Shravan, festivals) mein kam se kam 2–3 hafte pehle recommend karte hain." }
    ]
  },
  {
    id: "mahakaleshwar-darshan",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Bhasma Aarti ke liye kitne pehle book karein?", a: "Bhasma Aarti demand zyada hone se, hum recommend karte hain minimum 1 mahina pehle." }
    ]
  },
  {
    id: "sai-baba-darshan",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "VIP pass ka charge alag hai kya?", a: "Haan, mandir trust ke rules ke hisaab se VIP pass ka alag donation/charge hota hai — hum details share karte hain." }
    ]
  },
  {
    id: "srisaila-darshan",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Booking kitne pehle karni chahiye?", a: "Weekends aur festival season mein 2–3 hafte pehle recommend karte hain." }
    ]
  },
  {
    id: "vitthal-rukmini-darshan",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Ekadashi ke time booking mushkil hoti hai kya?", a: "Haan, bahut bheed hoti hai — hum jitni jaldi ho sake advance booking recommend karte hain." }
    ]
  },

  // ---------------- HEALTH & WELFARE (3) ----------------
  {
    id: "abha-service",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "ABHA ID kis kaam aati hai?", a: "Aapke health records ek digital ID se link hote hain, jise hospitals easily access kar paate hain (aapki permission se)." }
    ]
  },
  {
    id: "ayushman-service",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "Eligibility kaise check hoti hai?", a: "SECC 2011 database ke basis par; hum aapka Aadhaar/ration card number se eligibility check kar dete hain." },
      { q: "Cover kitna milta hai?", a: "Prati parivaar per year ₹5 lakh tak ka cashless treatment cover." }
    ]
  },
  {
    id: "udid-service",
    apply_form: "/aarambh-aadhaar-form.html",
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
      { q: "UDID card se kya benefit milta hai?", a: "Disability certificate as proof, govt job reservation, scholarship, aur travel concessions ke liye." },
      { q: "Medical board verification zaroori hai kya?", a: "Haan, disability certify karne ke liye government medical board assessment hota hai." }
    ]
  },
];


export default SERVICES;