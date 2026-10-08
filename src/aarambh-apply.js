/* Aarambh — Apply popup (plain JavaScript, no dependencies).
   Inline (inside a page):  window.mountAarambhApply(element, { id: "hsrp", lang: "en" })   and   window.unmountAarambhApply()
   Popup (optional):        window.openAarambhApply({ id: "hsrp", lang: "en" })
   Both return true if the service has a form, false otherwise.
   Optional config (define BEFORE this script):
     window.AARAMBH_APPLY_CONFIG = { sheetUrl: "...", whatsapp: "91XXXXXXXXXX" }                                  */
(function () {
  if (window.openAarambhApply) return;
  var DATA = {"F": {"name": ["Full Name", "t", "As per official ID"], "email": ["Email ID", "e", "you@example.com"], "aadhaar": ["Aadhaar Number", "a", "12-digit Aadhaar number"], "amob": ["Aadhaar Linked Mobile Number", "m", "10-digit mobile"], "mob": ["Mobile Number", "m", "10-digit mobile"], "addr": ["Address", "x", "House no., street, city, state, PIN"], "naddr": ["New Address", "x", "House no., street, city, state, PIN"], "baddr": ["Business Address", "x", "Full business address"], "bank": ["Bank Name", "t"], "acc": ["Bank Account Number", "c"], "ifsc": ["IFSC Code", "i", "e.g. SBIN0001234"], "pan": ["PAN Number", "p", "ABCDE1234F"], "dob": ["Date of Birth", "d"], "fname": ["Father's Name", "t"], "fh": ["Father's / Husband's Name", "t"], "fm": ["Father's / Mother's Name", "t"], "corr": ["Field to Correct", "t", "e.g. Name, Date of Birth, Address"], "cdet": ["Correct Details", "x", "Write the corrected details"], "vid": ["Voter ID Number", "t"], "bg": ["Blood Group", "s", "A+|A-|B+|B-|AB+|AB-|O+|O-"], "vc": ["Vehicle Class", "t", "e.g. MCWG, LMV"], "edu": ["Education Qualification", "t"], "llno": ["Learner's License Number", "t"], "dl": ["Driving License Number", "t"], "reason": ["Reason for Duplicate", "s", "Lost|Stolen|Damaged|Other"], "pp": ["Passport Number", "t"], "tc": ["Travel Country", "t"], "reg": ["Vehicle Registration Number", "r", "e.g. MH12AB1234"], "ch5": ["Last 5 Digits of Chassis Number", "f"], "en5": ["Last 5 Digits of Engine Number", "f"], "pin": ["Current City PIN Code", "z", "6-digit PIN"], "emg": ["Emergency Contact Name & Number", "t"], "fid": ["Family ID Number", "t"], "caste": ["Caste", "t"], "purp": ["Purpose of Certificate", "t"], "ainc": ["Family Annual Income (\u20b9)", "n"], "isrc": ["Income Source", "t"], "fy": ["Financial Year", "t", "e.g. 2025-26"], "occ": ["Occupation", "t"], "qual": ["Qualification", "t"], "sch": ["School / College Name", "t"], "dis": ["Disability Type / Percentage", "t"], "names": ["Full Name(s) of All Visitors", "x", "One name per line"], "idn": ["ID Proof Number", "t"], "vdate": ["Visit Date", "d"], "np": ["Number of Persons", "n"], "bn": ["Business Name", "t"], "org": ["Type of Organisation", "s", "Proprietorship|Partnership|Pvt Ltd|Public Ltd|LLP"], "bsd": ["Business Starting Date", "d"], "nob": ["Nature of Business", "t"], "gstin": ["GSTIN Number", "g", "15-character GSTIN"], "turn": ["Annual Turnover (\u20b9)", "n"], "tob": ["Type of Business", "s", "Hotel|Cloud Kitchen|Restaurant|Trader|Retailer|Hawker|Tea and Snack Shop"], "yrs": ["Number of Years to Apply", "s", "1|2|3|4|5"], "ofl": ["Old FSSAI License Number", "t"]}, "D": {"aad": "Aadhaar copy", "ph": "Passport size photo", "sig": "Signature", "rc": "Vehicle RC copy", "pan": "PAN card copy", "adp": "Address proof", "adp1": "Address proof (any one: electricity bill / rent agreement / bank passbook)", "dobp": "Date of birth proof (School Leaving Certificate / Voter ID / Birth Certificate)", "vpar": "Parents' Voter ID", "vid": "Voter ID copy", "supp": "Supporting proof", "ll": "Learner's License copy", "olddl": "Old DL copy (if any)", "dlc": "DL copy", "nadp": "New address proof (Aadhaar / electricity bill / rent agreement / bank passbook)", "pass": "Passport copy", "fp": "Front number plate photo", "rp": "Rear number plate photo", "vf": "Vehicle photo \u2013 front", "vs": "Vehicle photo \u2013 side", "dom": "Domicile / residence proof", "oc": "Old caste certificate (if any)", "slc": "School Leaving Certificate", "fidc": "Family ID card", "incp": "Income proof / salary slip", "agep": "Age proof (PAN card / School Leaving Certificate / Birth Certificate)", "bap": "Business address proof (electricity bill / rent agreement / consent letter)", "bap2": "Business address proof (rent agreement / electricity bill)", "bk": "Bank passbook", "f16": "Form 16 / income proof", "bs": "Bank statement", "rat": "Ration card", "idall": "Aadhaar / ID copy of all visitors", "ofc": "Old FSSAI license copy"}, "R": {"aadhaar-address-update": [75, 74, 149, "name email aadhaar naddr amob", "adp1", ""], "aadhaar-npci-link": [0, 99, 99, "name email aadhaar bank acc ifsc mob", "", ""], "aadhaar-pan-link": [1000, 99, 1099, "aadhaar pan name email dob amob", "", ""], "aadhaar-pvc-card": [75, 74, 149, "aadhaar name email mob", "", ""], "new-pan-card": [106, 143, 249, "name dob fname addr mob email", "aad ph sig dobp", ""], "pan-card-correction": [106, 143, 249, "pan corr cdet name dob fname addr mob email", "aad ph sig dobp pan", ""], "reprint-pan": [50, 99, 149, "aadhaar pan name mob email", "", ""], "new-voter-card": [0, 149, 149, "name dob addr fh mob email", "aad ph adp vpar", ""], "voter-card-correction": [0, 149, 149, "vid corr cdet mob", "vid aad supp", ""], "apaar-id": [0, 99, 99, "name dob sch aadhaar mob email", "aad", ""], "caste-certificate-haryana": [null, null, 399, "name fname fid caste addr mob email", "aad dom oc slc fidc", ""], "caste-certificate-maharashtra": [null, null, 399, "name fname caste addr mob email", "aad dom oc slc", ""], "domicile-certificate-maharashtra": [null, null, 249, "name addr dob mob email purp", "aad dom slc", ""], "income-certificate-haryana": [null, null, 249, "name mob email fid ainc purp", "aad incp adp ph sig fidc", ""], "income-certificate-maharashtra": [null, null, 249, "name mob email ainc purp", "aad incp adp ph sig", ""], "senior-citizen-card-ap": [null, null, 199, "name dob addr mob email", "aad ph agep", ""], "senior-citizen-card-assam": [null, null, 199, "name dob addr mob email", "aad ph agep vid", ""], "fssai-new-license": [100, 149, 249, "name mob email bn addr turn tob yrs", "pan aad bap2 ph", "y"], "fssai-renewal": [100, 149, 249, "name mob email ofl bn addr turn tob yrs", "pan aad bap2 ph ofc", "y"], "gstin-verification": [0, 99, 99, "gstin", "", ""], "gst-registration": [0, 499, 499, "name mob email bn org baddr bsd nob", "pan aad bap ph", ""], "udyam-registration": [0, 249, 249, "name mob email bn org baddr bsd nob", "aad pan bk", ""], "itr-filing": [0, 999, 999, "pan aadhaar isrc fy mob", "pan aad f16 bs", ""], "dl-aadhaar-link": [0, 99, 99, "dl aadhaar name mob email", "", ""], "dl-address-change": [300, 199, 499, "dl naddr name mob email", "dlc nadp", "s"], "duplicate-dl": [300, 199, 499, "dl name reason mob email", "aad olddl ph", "s"], "learners-license": [350, 149, 499, "name dob addr bg vc edu mob email", "aad ph adp sig", "s"], "permanent-dl": [300, 199, 499, "llno name dob addr mob email", "ll aad ph sig", "s"], "idp": [300, 199, 499, "dl pp tc name mob email", "dlc pass aad ph sig", "s"], "rc-aadhaar-link": [0, 99, 99, "reg aadhaar name mob email", "rc", ""], "hsrp": [531, 118, 649, "reg name mob email ch5 en5 pin", "rc", ""], "hsrp-4-wheeler": [880, 119, 999, "reg name mob email ch5 en5 pin", "rc", ""], "color-code-sticker": [290, 109, 399, "reg name mob email ch5 en5 pin", "rc fp rp", ""], "vehicle-challan-payment": [0, 49, 49, "reg name mob email", "", ""], "vehicle-tax": [0, 49, 49, "reg name mob email", "", ""], "fastag-kyv": [0, 199, 199, "reg name mob email", "rc aad vf vs", ""], "fastag-annual-pass": [400, 199, 599, "reg name mob email", "rc aad vf vs", ""], "new-passport": [2500, 199, 2699, "name dob addr fm mob email emg", "aad pan", ""], "passport-renewal": [2500, 199, 2699, "name dob addr fm mob email emg", "aad pan", ""], "fti-ttp": [0, 199, 199, "name pp dob addr mob email", "pass ph", ""], "atal-pension-yojana": [0, 99, 99, "name dob aadhaar acc mob email", "aad bk", ""], "pmjjby": [0, 99, 99, "name dob aadhaar acc mob email", "aad bk", ""], "pmsby": [0, 99, 99, "name dob aadhaar acc mob email", "aad bk", ""], "e-shram-card": [0, 99, 99, "name aadhaar occ mob email", "aad bk", ""], "pm-internship": [0, 99, 99, "name dob qual aadhaar mob email", "aad ph", ""], "kashi-vishwanath-darshan": [300, 99, 399, "names idn vdate np mob", "idall", ""], "mahakaleshwar-darshan": [0, 99, 99, "names idn vdate np mob", "idall", ""], "sai-baba-darshan": [200, 99, 299, "names idn vdate np mob", "idall", ""], "srisaila-darshan": [0, 99, 99, "names idn vdate np mob", "idall", ""], "vitthal-rukmini-darshan": [0, 99, 99, "names idn vdate np mob", "idall", ""], "abha-service": [0, 99, 99, "name dob aadhaar mob email", "aad", ""], "ayushman-service": [0, 99, 99, "name aadhaar mob email", "aad rat", ""], "udid-service": [0, 99, 99, "name dob dis addr mob email", "aad ph", ""]}}, META = {"aadhaar-address-update": ["Aadhaar Address Update", "आधार पता अपडेट", "Identity", "पहचान", "₹149 onwards"], "aadhaar-npci-link": ["Aadhaar NPCI Link", "आधार–NPCI लिंक", "Identity", "पहचान", "₹99 onwards"], "aadhaar-pan-link": ["Aadhaar–PAN Link", "आधार–PAN लिंक", "Identity", "पहचान", "₹1099 onwards"], "aadhaar-pvc-card": ["Aadhaar PVC Card", "आधार PVC कार्ड", "Identity", "पहचान", "₹149 onwards"], "new-pan-card": ["New PAN Card", "नया PAN कार्ड", "Identity", "पहचान", "₹249 onwards"], "pan-card-correction": ["PAN Card Correction", "PAN कार्ड सुधार", "Identity", "पहचान", "₹249 onwards"], "reprint-pan": ["Reprint PAN", "PAN कार्ड रीप्रिंट", "Identity", "पहचान", "₹149 onwards"], "new-voter-card": ["New Voter Card", "नया वोटर कार्ड", "Identity", "पहचान", "₹149 onwards"], "voter-card-correction": ["Voter Card Correction", "वोटर कार्ड सुधार", "Identity", "पहचान", "₹149 onwards"], "apaar-id": ["APAAR ID", "APAAR ID", "Identity", "पहचान", "₹99 onwards"], "caste-certificate-haryana": ["Caste Certificate – Haryana", "जाति प्रमाण पत्र – हरियाणा", "Certificates", "प्रमाण पत्र", "₹299 onwards"], "caste-certificate-maharashtra": ["Caste Certificate – Maharashtra", "जाति प्रमाण पत्र – महाराष्ट्र", "Certificates", "प्रमाण पत्र", "₹499 onwards"], "domicile-certificate-maharashtra": ["Domicile Certificate – Maharashtra", "अधिवास प्रमाण पत्र – महाराष्ट्र", "Certificates", "प्रमाण पत्र", "₹249 onwards"], "income-certificate-haryana": ["Income Certificate – Haryana", "आय प्रमाण पत्र – हरियाणा", "Certificates", "प्रमाण पत्र", "₹249 onwards"], "income-certificate-maharashtra": ["Income Certificate – Maharashtra", "आय प्रमाण पत्र – महाराष्ट्र", "Certificates", "प्रमाण पत्र", "₹249 onwards"], "senior-citizen-card-ap": ["Senior Citizen Card – Andhra Pradesh", "वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश", "Certificates", "प्रमाण पत्र", "₹199 onwards"], "senior-citizen-card-assam": ["Senior Citizen Card – Assam", "वरिष्ठ नागरिक कार्ड – असम", "Certificates", "प्रमाण पत्र", "₹199 onwards"], "fssai-new-license": ["FSSAI New Food License", "नया FSSAI फूड लाइसेंस", "Business", "व्यवसाय", "₹299 onwards"], "fssai-renewal": ["FSSAI Food License Renewal", "FSSAI फूड लाइसेंस नवीनीकरण", "Business", "व्यवसाय", "₹249 onwards"], "gstin-verification": ["GSTIN Verification", "GSTIN सत्यापन", "Business", "व्यवसाय", "₹29 onwards"], "gst-registration": ["GST Registration", "GST रजिस्ट्रेशन", "Business", "व्यवसाय", "₹499 onwards"], "udyam-registration": ["Udyam Registration", "उद्यम रजिस्ट्रेशन", "Business", "व्यवसाय", "₹299 onwards"], "itr-filing": ["ITR Filing", "ITR फाइलिंग", "Business", "व्यवसाय", "₹999 onwards"], "dl-aadhaar-link": ["DL Aadhaar Link", "ड्राइविंग लाइसेंस–आधार लिंक", "Transport", "परिवहन", "₹99 onwards"], "dl-address-change": ["DL Address Change", "ड्राइविंग लाइसेंस में पता परिवर्तन", "Transport", "परिवहन", "₹399 onwards"], "duplicate-dl": ["Duplicate Driving License", "डुप्लीकेट ड्राइविंग लाइसेंस", "Transport", "परिवहन", "₹399 onwards"], "learners-license": ["Learner's Licence", "लर्नर ड्राइविंग लाइसेंस", "Transport", "परिवहन", "₹499 onwards"], "permanent-dl": ["Permanent Driving Licence", "स्थायी ड्राइविंग लाइसेंस", "Transport", "परिवहन", "₹999 onwards"], "idp": ["International Driving Permit (IDP)", "अंतरराष्ट्रीय ड्राइविंग परमिट (IDP)", "Travel", "यात्रा", "₹499 onwards"], "rc-aadhaar-link": ["RC Aadhaar Link", "वाहन RC–आधार लिंक", "Transport", "परिवहन", "₹99 onwards"], "hsrp": ["2-Wheeler HSRP Number Plate", "2-व्हीलर HSRP नंबर प्लेट", "Transport", "परिवहन", "₹649 onwards"], "hsrp-4-wheeler": ["4-Wheeler HSRP Number Plate", "4-व्हीलर HSRP नंबर प्लेट", "Transport", "परिवहन", "₹999 onwards"], "color-code-sticker": ["Color-Coded Fuel Sticker", "ईंधन रंग-कोडेड स्टिकर", "Transport", "परिवहन", "₹399 onwards"], "vehicle-challan-payment": ["Vehicle Challan Payment", "वाहन चालान भुगतान", "Transport", "परिवहन", "₹49 onwards service charge"], "vehicle-tax": ["Vehicle Tax", "वाहन टैक्स", "Transport", "परिवहन", "₹99 onwards service charge"], "fastag-kyv": ["FASTag KYV", "FASTag KYV", "Transport", "परिवहन", "₹149 onwards"], "fastag-annual-pass": ["FASTag One Year Pass", "FASTag एक वर्ष का पास", "Transport", "परिवहन", "₹549 onwards service charge"], "new-passport": ["New Passport", "नया पासपोर्ट", "Travel", "यात्रा", "₹2699 onwards service charge"], "passport-renewal": ["Passport Renewal", "पासपोर्ट नवीनीकरण", "Travel", "यात्रा", "₹2699 onwards service charge"], "fti-ttp": ["FTI-TTP Registration", "FTI-TTP पंजीकरण", "Travel", "यात्रा", "₹199 onwards"], "atal-pension-yojana": ["Atal Pension Yojana", "अटल पेंशन योजना", "Insurance", "बीमा", "₹99 onwards enrollment assistance"], "pmjjby": ["PMJJBY", "PMJJBY", "Insurance", "बीमा", "₹99 onwards enrollment assistance"], "pmsby": ["PMSBY", "PMSBY", "Insurance", "बीमा", "₹99 onwards enrollment assistance"], "e-shram-card": ["e-Shram Card", "ई-श्रम कार्ड", "Employment", "रोज़गार", "₹149 onwards"], "pm-internship": ["PM Internship Registration", "PM इंटर्नशिप पंजीकरण", "Employment", "रोज़गार", "₹99 onwards"], "kashi-vishwanath-darshan": ["Kashi Vishwanath Darshan Booking", "काशी विश्वनाथ दर्शन बुकिंग", "Darshan", "दर्शन", "₹299 onwards service charge"], "mahakaleshwar-darshan": ["Mahakaleshwar Darshan Booking", "महाकालेश्वर दर्शन बुकिंग", "Darshan", "दर्शन", "₹99 onwards service charge"], "sai-baba-darshan": ["Sai Baba Darshan Booking", "साईं बाबा दर्शन बुकिंग", "Darshan", "दर्शन", "₹99 onwards service charge"], "srisaila-darshan": ["Srisaila Devasthanam Darshan Booking", "श्रीशैल देवस्थानम दर्शन बुकिंग", "Darshan", "दर्शन", "₹299 onwards service charge"], "vitthal-rukmini-darshan": ["Vitthal Rukmini Darshan Booking", "विठ्ठल रुक्मिणी दर्शन बुकिंग", "Darshan", "दर्शन", "₹99 onwards service charge"], "abha-service": ["ABHA Service", "ABHA सेवा", "Health", "स्वास्थ्य", "₹99 onwards"], "ayushman-service": ["Ayushman Bharat (PM-JAY) Card", "आयुष्मान भारत (PM-JAY) कार्ड", "Health", "स्वास्थ्य", "₹99 onwards"], "udid-service": ["UDID Card Service", "UDID कार्ड सेवा", "Health", "स्वास्थ्य", "₹149 onwards"]}, CSS = "/* ==========================================================================\n   AARAMBH \u2014 Apply popup (ServiceApplyModal)\n   Self-contained: variables are scoped to .sa_overlay so the popup looks the\n   same on every page, whether or not services.css is loaded.\n   ========================================================================== */\n.sa_overlay {\n  --sa-navy: #0E412E; --sa-deep: #083222; --sa-gold: #C29249; --sa-gold-d: #9F7436; --sa-gold-light: #E5BC7E;\n  --sa-cream: #FBF7EF; --sa-cream2: #F3ECDD; --sa-ink: #153B2D; --sa-soft: #557B6D;\n  --sa-line: #E4DECE; --sa-ok: #1F7A4F; --sa-okbg: #E8F4EC; --sa-bad: #B3382F; --sa-badbg: #FBECEA;\n  position: fixed; inset: 0; z-index: 100000;\n  display: flex; align-items: center; justify-content: center; padding: 24px;\n  background: rgba(4, 36, 24, .72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);\n  animation: sa_fade .2s ease;\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; color: var(--sa-ink);\n}\n.sa_overlay *, .sa_overlay *::before, .sa_overlay *::after { box-sizing: border-box; }\n@keyframes sa_fade { from { opacity: 0 } to { opacity: 1 } }\n@keyframes sa_rise { from { opacity: 0; transform: translateY(14px) scale(.985) } to { opacity: 1; transform: none } }\n\n.sa_modal {\n  position: relative; width: 100%; max-width: 640px; max-height: min(92vh, 860px);\n  display: flex; flex-direction: column; overflow: hidden;\n  background: #fff; border-radius: 18px; box-shadow: 0 28px 70px rgba(4, 36, 24, .38);\n  animation: sa_rise .25s ease; outline: none;\n}\n\n/* header */\n.sa_head {\n  display: flex; align-items: flex-start; justify-content: space-between; gap: 14px;\n  padding: 20px 22px 16px; background: var(--sa-navy); color: #fff;\n  border-bottom: 3px solid var(--sa-gold);\n}\n.sa_head h2 { margin: 0; font: 600 21px/1.25 'Playfair Display', serif; }\n.sa_price { margin: 6px 0 0; font-size: 12.5px; color: #CFE0D8; line-height: 1.5; }\n.sa_price b { color: var(--sa-gold-light, #E5BC7E); font-weight: 700; }\n.sa_dot { display: inline-block; width: 4px; height: 4px; border-radius: 50%; background: var(--sa-gold); margin: 0 9px; vertical-align: middle; }\n.sa_x {\n  flex-shrink: 0; width: 34px; height: 34px; border: 0; border-radius: 50%; cursor: pointer;\n  background: rgba(255, 255, 255, .12); color: #fff; font-size: 15px; line-height: 1;\n}\n.sa_x:hover { background: rgba(255, 255, 255, .22); }\n\n/* stepper */\n.sa_steps { list-style: none; margin: 0; padding: 14px 22px 12px; display: flex; background: var(--sa-cream); border-bottom: 1px solid var(--sa-line); }\n.sa_steps li { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px; position: relative; }\n.sa_steps li::after { content: \"\"; position: absolute; top: 14px; left: calc(50% + 18px); right: calc(-50% + 18px); height: 2px; background: var(--sa-line); }\n.sa_steps li:last-child::after { display: none; }\n.sa_n {\n  width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 1;\n  font-size: 12px; font-weight: 700; color: var(--sa-soft); background: #fff; border: 2px solid var(--sa-line);\n}\n.sa_l { font-size: 11px; font-weight: 600; color: var(--sa-soft); }\n.sa_steps .sa_on .sa_n { background: var(--sa-navy); border-color: var(--sa-navy); color: #fff; box-shadow: 0 0 0 4px rgba(14, 65, 46, .12); }\n.sa_steps .sa_on .sa_l { color: var(--sa-navy); }\n.sa_steps .sa_ok .sa_n { background: var(--sa-ok); border-color: var(--sa-ok); color: transparent; position: relative; }\n.sa_steps .sa_ok .sa_n::after { content: \"\u2713\"; position: absolute; color: #fff; font-size: 13px; }\n.sa_steps .sa_ok::after { background: var(--sa-ok); }\n\n/* body */\n.sa_body { flex: 1; min-height: 0; overflow-y: auto; padding: 22px; }\n.sa_h { margin: 0 0 4px; font: 600 19px/1.3 'Playfair Display', serif; color: var(--sa-navy); }\n.sa_sub { margin: 0 0 16px; font-size: 13px; line-height: 1.55; color: var(--sa-soft); }\n.sa_center { text-align: center; }\n.sa_note { margin: 0 0 14px; padding: 10px 12px; border-radius: 9px; font-size: 12.5px; line-height: 1.5; background: #FFF6E4; border: 1px solid #F0DDB2; color: #6F5214; }\n.sa_sec { margin: 18px 0 2px; font-size: 13px; font-weight: 700; color: var(--sa-gold-d); }\n.sa_sec:first-of-type { margin-top: 4px; }\n\n/* fields */\n.sa_grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }\n.sa_wide { grid-column: 1 / -1; }\n.sa_fg label { display: block; margin-bottom: 5px; font-size: 12.5px; font-weight: 600; color: var(--sa-navy); }\n.sa_fg input, .sa_fg select, .sa_fg textarea {\n  width: 100%; padding: 11px 12px; font: inherit; font-size: 14px; color: var(--sa-ink);\n  background: var(--sa-cream); border: 1.5px solid var(--sa-line); border-radius: 9px; transition: border-color .15s, background .15s;\n}\n.sa_fg textarea { resize: vertical; min-height: 78px; }\n.sa_fg input:focus, .sa_fg select:focus, .sa_fg textarea:focus { outline: none; border-color: var(--sa-navy); background: #fff; box-shadow: 0 0 0 3px rgba(14, 65, 46, .1); }\n.sa_fg .sa_bad { border-color: var(--sa-bad); background: var(--sa-badbg); }\n.sa_err { margin-top: 5px; font-size: 12px; color: var(--sa-bad); }\n\n/* review list */\n.sa_rl { list-style: none; margin: 0; padding: 0; }\n.sa_rl li { display: flex; justify-content: space-between; gap: 16px; padding: 9px 0; border-bottom: 1px solid var(--sa-line); font-size: 13px; }\n.sa_rl li:last-child { border-bottom: 0; }\n.sa_rk { color: var(--sa-soft); }\n.sa_rv { font-weight: 600; text-align: right; overflow-wrap: anywhere; }\n.sa_chk { display: flex; gap: 10px; align-items: flex-start; margin-top: 10px; padding: 12px; border: 1px solid var(--sa-line); border-radius: 9px; background: var(--sa-cream); font-size: 12px; line-height: 1.55; color: var(--sa-soft); cursor: pointer; }\n.sa_chk input { flex-shrink: 0; width: 17px; height: 17px; margin-top: 1px; accent-color: var(--sa-navy); }\n\n/* payment */\n.sa_sum { padding: 18px; border-radius: 12px; background: var(--sa-navy); color: #fff; margin-bottom: 18px; }\n.sa_sr { display: flex; justify-content: space-between; gap: 14px; padding: 6px 0; font-size: 13px; color: #CFE0D8; }\n.sa_sr span:last-child { color: #fff; font-weight: 600; text-align: right; }\n.sa_tot { margin-top: 6px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, .22); font-size: 16px; font-weight: 700; color: #fff; }\n.sa_tot span:last-child { color: var(--sa-gold-light, #E5BC7E); }\n.sa_fine { margin: 8px 0 0; font-size: 11.5px; line-height: 1.5; color: #B5CCC2; }\n.sa_fine:empty { display: none; }\n.sa_fine.sa_dark { color: var(--sa-soft); }\n.sa_paylbl { margin-bottom: 8px; font-size: 12.5px; font-weight: 600; color: var(--sa-navy); }\n.sa_chips { display: flex; flex-wrap: wrap; gap: 8px; }\n.sa_chips span { padding: 8px 13px; border: 1.5px solid var(--sa-line); border-radius: 8px; font-size: 12px; font-weight: 600; color: var(--sa-soft); background: #fff; }\n.sa_secure { margin: 14px 0 0; text-align: center; font-size: 11.5px; color: var(--sa-soft); }\n\n/* documents */\n.sa_doc { margin-bottom: 10px; padding: 13px 14px; border: 1px solid var(--sa-line); border-radius: 10px; background: var(--sa-cream); }\n.sa_dt { margin-bottom: 9px; font-size: 13px; font-weight: 600; color: var(--sa-navy); line-height: 1.4; }\n.sa_dt i { font-weight: 400; font-style: normal; color: var(--sa-soft); }\n.sa_pick { display: inline-block; padding: 9px 15px; border: 1.5px dashed #B9C9C1; border-radius: 8px; background: #fff; font-size: 12.5px; font-weight: 600; color: var(--sa-navy); cursor: pointer; }\n.sa_pick:hover, .sa_pick:focus-within { border-color: var(--sa-navy); background: var(--sa-cream2); }\n.sa_pick input { position: absolute; width: 1px; height: 1px; opacity: 0; overflow: hidden; }\n.sa_file { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 9px 12px; border: 1px solid #BFDDCB; border-radius: 8px; background: var(--sa-okbg); font-size: 12.5px; color: var(--sa-ok); overflow-wrap: anywhere; }\n.sa_file button { flex-shrink: 0; border: 0; background: none; font-size: 12px; font-weight: 600; color: var(--sa-bad); cursor: pointer; }\n\n/* busy + done */\n.sa_busy { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 46px 10px; text-align: center; font-size: 12.5px; color: var(--sa-soft); }\n.sa_busy strong { font-size: 15px; color: var(--sa-navy); }\n.sa_spin { width: 40px; height: 40px; margin-bottom: 8px; border-radius: 50%; border: 4px solid var(--sa-cream2); border-top-color: var(--sa-navy); animation: sa_spin .8s linear infinite; }\n@keyframes sa_spin { to { transform: rotate(360deg) } }\n.sa_tick { width: 66px; height: 66px; margin: 2px auto 14px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 3px solid var(--sa-ok); background: var(--sa-okbg); color: var(--sa-ok); }\n.sa_receipt { padding: 6px 16px; border: 1px dashed #C7D3CC; border-radius: 12px; background: var(--sa-cream); }\n\n/* footer */\n.sa_foot { display: flex; gap: 10px; padding: 14px 22px; border-top: 1px solid var(--sa-line); background: #fff; }\n.sa_btn {\n  flex: 1; display: inline-flex; align-items: center; justify-content: center; padding: 13px 16px;\n  border: 0; border-radius: 10px; font: 700 14px/1.2 'Inter', sans-serif; text-decoration: none; cursor: pointer; text-align: center;\n  transition: transform .15s, box-shadow .15s;\n}\n.sa_btn:hover { transform: translateY(-1px); }\n.sa_primary { background: var(--sa-navy); color: #fff; box-shadow: 0 8px 18px rgba(14, 65, 46, .25); }\n.sa_gold { background: var(--sa-gold); color: var(--sa-deep); box-shadow: 0 8px 18px rgba(194, 146, 73, .35); }\n.sa_ghost { background: #fff; color: var(--sa-navy); border: 1.5px solid var(--sa-line); }\n.sa_wa { background: #25D366; color: #fff; }\n.sa_overlay :focus-visible { outline: 3px solid var(--sa-gold); outline-offset: 2px; }\n\n/* mobile: bottom sheet */\n@media (max-width: 600px) {\n  .sa_overlay { padding: 0; align-items: flex-end; }\n  .sa_modal { max-width: 100%; max-height: 94vh; border-radius: 20px 20px 0 0; }\n  .sa_head { padding: 18px 18px 14px; }\n  .sa_head h2 { font-size: 18px; }\n  .sa_body { padding: 18px; }\n  .sa_foot { padding: 12px 18px calc(12px + env(safe-area-inset-bottom, 0px)); }\n  .sa_grid { grid-template-columns: 1fr; }\n  .sa_steps { padding: 12px 14px 10px; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sa_overlay, .sa_modal { animation: none; }\n  .sa_spin { animation-duration: 2.4s; }\n}\n\n/* inline mode: the form sits inside the service page */\n.sa_overlay.sa_inline{position:relative;inset:auto;z-index:auto;display:block;padding:0;background:none;backdrop-filter:none;-webkit-backdrop-filter:none;animation:none;scroll-margin-top:96px}\n.sa_inline .sa_modal{max-width:100%;max-height:none;overflow:hidden;border:1px solid var(--sa-line);box-shadow:0 10px 30px rgba(8,50,34,.10);animation:none;border-radius:18px}\n.sa_inline .sa_body{overflow:visible}\n.sa_inline .sa_x{display:none}\n@media (max-width:600px){.sa_overlay.sa_inline{padding:0}.sa_inline .sa_modal{border-radius:16px;max-height:none}}\n";
  var F = DATA.F, D = DATA.D, R = DATA.R;
  var CFG = Object.assign({
    sheetUrl: "https://script.google.com/macros/s/AKfycbzIllQ6WBvJOLEqDnYsVSNKv81MvQ-rKxFNHaXY1THpwQjpnRP6RMPGyygd5soE68eg/exec",
    whatsapp: "919096759855", maxMB: 5, tat: "24-48 Hours"
  }, window.AARAMBH_APPLY_CONFIG || {});

  var RULES = {
    t: function (v) { return v.length >= 2; }, e: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); },
    m: function (v) { return /^[6-9]\d{9}$/.test(v); }, a: function (v) { return /^\d{12}$/.test(v); },
    p: function (v) { return /^[A-Z]{5}\d{4}[A-Z]$/.test(v); }, i: function (v) { return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(v); },
    d: function (v) { return !!v; }, n: function (v) { return Number(v) >= 1; }, x: function (v) { return v.length >= 5; },
    s: function (v) { return !!v; }, c: function (v) { return /^\d{9,18}$/.test(v); }, r: function (v) { return v.length >= 6; },
    f: function (v) { return /^[A-Z0-9]{5}$/.test(v); }, z: function (v) { return /^\d{6}$/.test(v); }, g: function (v) { return /^[0-9A-Z]{15}$/.test(v); }
  };
  function mask(t, v) {
    var dg = v.replace(/\D/g, "");
    switch (t) {
      case "m": return dg.slice(0, 10); case "z": return dg.slice(0, 6); case "a": return dg.slice(0, 12); case "c": return dg.slice(0, 18);
      case "f": return v.toUpperCase().slice(0, 5); case "g": return v.toUpperCase().slice(0, 15); case "p": return v.toUpperCase().slice(0, 10);
      case "i": return v.toUpperCase().slice(0, 11); case "r": return v.toUpperCase().slice(0, 12); default: return v;
    }
  }

  var T = {
    en: {
      steps: ["Details", "Confirm", "Payment", "Documents"], close: "Close", again: "Start a new application", turnaround: "Turnaround", allIncl: "all-inclusive", from: "From",
      govtYear: "govt / year", govt: "Govt", service: "service", select: "Select…", invalid: "Please enter a valid",
      h1: "Your details", p1: "Enter details exactly as per your official documents.", cont: "Continue",
      h2: "Confirm your application", p2: "Check everything carefully before payment.", secSvc: "Service", secDet: "Your details", amount: "Amount payable", cat: "Category",
      docsLater: function (n) { return "After payment you will upload " + n + " document" + (n > 1 ? "s" : "") + ". You can also choose “Skip for now” and send them later."; },
      noDocs: "No documents are required for this service.",
      d1: "I confirm that the information and documents I provide are genuine and accurate. Final approval depends on the concerned government department / authority.",
      d2: "I agree to Aarambh's Terms & Conditions and Privacy Policy.", dErr: "Please accept both declarations to continue.",
      edit: "Edit details", toPay: "Proceed to payment", back: "Back", h3: "Payment", p3: "Pay now to move on to document upload.",
      govtCharges: "Government charges", yr: "yr", nil: "Nil", svcCharge: "Aarambh service charge", total: "Total payable now",
      stateNote: "Government charges vary by state. Any additional state charges will be communicated to you separately.",
      inclNote: "This is the all-inclusive price for this service.", payUsing: "Pay using", pay: "Pay",
      saving: "Saving your details…", saveErr: "Could not save your details. Please check your internet and try again.", subErr: "Could not submit. Please try again.",
      secure: "Secured checkout · Card details are never stored by Aarambh", paying: "Processing your payment…", submitting: "Submitting your application…", wait: "Please do not close this window.",
      h4: "Upload documents", p4: "Payment received. Upload clear photos or scans, or skip and send them later.", p4none: "Payment received. No documents are required for this service.",
      choose: "Choose file", remove: "Remove", optional: "optional", formats: "JPG, PNG or PDF · Max 5 MB per file", big: "File is over 5 MB. Please choose a smaller file.",
      docErr: "Upload all required documents, or choose “Skip for now”.", skip: "Skip for now", submit: "Submit application",
      done: "Application submitted", doneOk: "Thank you for choosing Aarambh.", donePending: "Payment received. Please send your documents on WhatsApp to start processing.",
      appId: "Application ID", name: "Customer name", paid: "Amount paid", status: "Payment status", paidV: "Paid", docsRow: "Documents", pending: "Pending", received: "Received", notReq: "Not required", date: "Date",
      wa: "Contact Aarambh on WhatsApp", leave: "Your application is not submitted yet. Close this window?", leavePaid: "Payment is done. You can send documents later on WhatsApp. Close this window?",
      waMsg: function (s, a, id, p) { return "Hello Aarambh, my payment of " + a + " for " + s + " is successful. Application ID: " + id + "." + (p ? " I will share my documents here." : " Please confirm and share the next steps."); }
    },
    hi: {
      steps: ["विवरण", "पुष्टि", "भुगतान", "दस्तावेज़"], close: "बंद करें", again: "नया आवेदन शुरू करें", turnaround: "समय", allIncl: "सभी शुल्क सहित", from: "शुरू",
      govtYear: "सरकारी / वर्ष", govt: "सरकारी", service: "सेवा", select: "चुनें…", invalid: "कृपया सही दर्ज करें:",
      h1: "आपका विवरण", p1: "विवरण अपने आधिकारिक दस्तावेज़ों के अनुसार ही भरें।", cont: "आगे बढ़ें",
      h2: "आवेदन की पुष्टि करें", p2: "भुगतान से पहले सब कुछ ध्यान से जांच लें।", secSvc: "सेवा", secDet: "आपका विवरण", amount: "देय राशि", cat: "श्रेणी",
      docsLater: function (n) { return "भुगतान के बाद आपको " + n + " दस्तावेज़ अपलोड करने होंगे। चाहें तो “अभी छोड़ें” चुनकर बाद में भेज सकते हैं।"; },
      noDocs: "इस सेवा के लिए किसी दस्तावेज़ की आवश्यकता नहीं है।",
      d1: "मैं पुष्टि करता/करती हूं कि मेरे द्वारा दी गई जानकारी और दस्तावेज़ सही हैं। अंतिम स्वीकृति संबंधित सरकारी विभाग / प्राधिकारी पर निर्भर है।",
      d2: "मैं Aarambh की नियम व शर्तों और प्राइवेसी पॉलिसी से सहमत हूं।", dErr: "आगे बढ़ने के लिए दोनों घोषणाओं को स्वीकार करें।",
      edit: "विवरण बदलें", toPay: "भुगतान करें", back: "वापस", h3: "भुगतान", p3: "दस्तावेज़ अपलोड करने के लिए अभी भुगतान करें।",
      govtCharges: "सरकारी शुल्क", yr: "वर्ष", nil: "शून्य", svcCharge: "Aarambh सेवा शुल्क", total: "अभी देय कुल राशि",
      stateNote: "सरकारी शुल्क राज्य के अनुसार अलग होते हैं। कोई अतिरिक्त राज्य शुल्क होने पर आपको अलग से बताया जाएगा।",
      inclNote: "यह इस सेवा का सभी शुल्क सहित मूल्य है।", payUsing: "भुगतान का तरीका", pay: "भुगतान करें",
      saving: "आपका विवरण सेव हो रहा है…", saveErr: "विवरण सेव नहीं हो सका। कृपया इंटरनेट जांचकर दोबारा कोशिश करें।", subErr: "जमा नहीं हो सका। कृपया दोबारा कोशिश करें।",
      secure: "सुरक्षित चेकआउट · कार्ड की जानकारी Aarambh कभी सेव नहीं करता", paying: "आपका भुगतान प्रोसेस हो रहा है…", submitting: "आपका आवेदन जमा हो रहा है…", wait: "कृपया यह विंडो बंद न करें।",
      h4: "दस्तावेज़ अपलोड करें", p4: "भुगतान प्राप्त हुआ। साफ फोटो या स्कैन अपलोड करें, या छोड़कर बाद में भेजें।", p4none: "भुगतान प्राप्त हुआ। इस सेवा के लिए किसी दस्तावेज़ की आवश्यकता नहीं है।",
      choose: "फाइल चुनें", remove: "हटाएं", optional: "वैकल्पिक", formats: "JPG, PNG या PDF · प्रति फाइल अधिकतम 5 MB", big: "फाइल 5 MB से बड़ी है। कृपया छोटी फाइल चुनें।",
      docErr: "सभी जरूरी दस्तावेज़ अपलोड करें, या “अभी छोड़ें” चुनें।", skip: "अभी छोड़ें", submit: "आवेदन जमा करें",
      done: "आवेदन जमा हो गया", doneOk: "Aarambh चुनने के लिए धन्यवाद।", donePending: "भुगतान प्राप्त हुआ। प्रोसेसिंग शुरू करने के लिए कृपया अपने दस्तावेज़ WhatsApp पर भेजें।",
      appId: "आवेदन आईडी", name: "ग्राहक का नाम", paid: "भुगतान की राशि", status: "भुगतान स्थिति", paidV: "भुगतान हुआ", docsRow: "दस्तावेज़", pending: "बाकी", received: "प्राप्त", notReq: "आवश्यक नहीं", date: "तारीख",
      wa: "WhatsApp पर Aarambh से संपर्क करें", leave: "आपका आवेदन अभी जमा नहीं हुआ है। विंडो बंद करें?", leavePaid: "भुगतान हो चुका है। दस्तावेज़ बाद में WhatsApp पर भेज सकते हैं। विंडो बंद करें?",
      waMsg: function (s, a, id, p) { return "नमस्ते Aarambh, मैंने " + s + " के लिए " + a + " का भुगतान कर दिया है। आवेदन आईडी: " + id + "।" + (p ? " मैं अपने दस्तावेज़ यहां भेजूंगा/भेजूंगी।" : " कृपया पुष्टि करें और अगले कदम बताएं।"); }
    }
  };

  var S = null, root = null, prevOverflow = "";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]; }); };
  var rs = function (n) { return "₹" + Number(n).toLocaleString("en-IN"); };
  var optDoc = function (k) { return /\(if any\)/.test(D[k]); };
  var docName = function (k) { return D[k].replace(" (if any)", ""); };

  function cfgOf(id) {
    var r = R[id]; if (!r) return null;
    return { govt: r[0], aarambh: r[1], total: r[2], fields: r[3].split(" "), docs: r[4] ? r[4].split(" ") : [], flag: r[5] || "" };
  }
  function price() {
    var c = S.cfg, g = c.govt, t = c.total;
    if (c.flag === "y") { g = c.govt * (Number(S.vals.yrs) || 1); t = g + c.aarambh; }
    return { govt: g, aarambh: c.aarambh, total: t };
  }
  function svcName() { return META[S.id][S.lang === "hi" ? 1 : 0]; }

  /* ---------- open / close ---------- */
  function newState(opts, cfg, lang) {
    return { id: opts.id, cfg: cfg, lang: lang, t: T[lang], step: 1, vals: {}, errs: {}, agree: [false, false], agreeErr: false,
      paid: false, payId: "", files: {}, fileErr: {}, docErr: false, busy: "", done: null,
      appId: "AAR-" + new Date().getFullYear() + "-" + Math.floor(10000 + Math.random() * 89999) };
  }

  function injectCss() {
    if (!document.getElementById("sa-css")) { var st = document.createElement("style"); st.id = "sa-css"; st.textContent = CSS; document.head.appendChild(st); }
  }

  /* ---------- inline mode: the form lives inside a page (no popup) ---------- */
  function mount(container, opts) {
    opts = opts || {};
    var cfg = cfgOf(opts.id);
    if (!cfg || !container) return false;
    if (root) { if (S && S.inline) unmount(); else close(); }
    var lang = opts.lang === "hi" ? "hi" : "en";
    S = newState(opts, cfg, lang); S.inline = true;
    injectCss();
    root = container; root.classList.add("sa_overlay", "sa_inline");
    root.addEventListener("click", onClick); root.addEventListener("input", onInput); root.addEventListener("change", onChange);
    render();
    return true;
  }
  function unmount() {
    if (!root || !S || !S.inline) return;
    root.removeEventListener("click", onClick); root.removeEventListener("input", onInput); root.removeEventListener("change", onChange);
    root.classList.remove("sa_overlay", "sa_inline"); root.innerHTML = ""; root = null; S = null;
  }
  function again() { var c = root, id = S.id, lang = S.lang; unmount(); mount(c, { id: id, lang: lang }); if (c.scrollIntoView) c.scrollIntoView({ behavior: "smooth", block: "start" }); }

  function open(opts) {
    opts = opts || {};
    var cfg = cfgOf(opts.id);
    if (!cfg) return false;
    if (root) close(true);
    var lang = opts.lang === "hi" ? "hi" : "en";
    S = newState(opts, cfg, lang);
    injectCss();
    root = document.createElement("div");
    root.className = "sa_overlay";
    root.addEventListener("mousedown", function (e) { if (e.target === root) askClose(); });
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onChange);
    document.body.appendChild(root);
    prevOverflow = document.body.style.overflow; document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    if (window.gtag) window.gtag("event", "apply_click", { service_id: opts.id, language: lang });
    render();
    var dlg = root.querySelector(".sa_modal"); if (dlg) dlg.focus();
    return true;
  }
  function close() { if (!root) return; if (S && S.inline) { unmount(); return; } root.remove(); root = null; S = null; document.body.style.overflow = prevOverflow; document.removeEventListener("keydown", onKey); }
  function askClose() {
    if (!S || S.busy) return;
    if (S.done || S.step === 1 || window.confirm(S.step >= 4 ? S.t.leavePaid : S.t.leave)) close();
  }
  function onKey(e) { if (e.key === "Escape") askClose(); }

  /* ---------- render ---------- */
  function li(k, v) { return '<li><span class="sa_rk">' + esc(k) + '</span><span class="sa_rv">' + esc(v || "—") + "</span></li>"; }
  function fieldHtml(k) {
    var f = F[k], label = f[0], type = f[1], extra = f[2] || "", id = "sa_f_" + k, bad = S.errs[k], v = esc(S.vals[k] || "");
    var cls = bad ? ' class="sa_bad" aria-invalid="true"' : "", inp;
    if (type === "s") {
      inp = '<select id="' + id + '" data-f="' + k + '"' + cls + '><option value="">' + S.t.select + "</option>" +
        extra.split("|").map(function (o) { return "<option" + (S.vals[k] === o ? " selected" : "") + ">" + esc(o) + "</option>"; }).join("") + "</select>";
    } else if (type === "x") {
      inp = '<textarea id="' + id + '" data-f="' + k + '" rows="3" placeholder="' + esc(extra) + '"' + cls + ">" + v + "</textarea>";
    } else {
      var ht = type === "e" ? "email" : type === "d" ? "date" : type === "n" ? "number" : "text";
      inp = '<input id="' + id + '" data-f="' + k + '" type="' + ht + '"' + (type === "n" ? ' min="1"' : "") + ("mzac".indexOf(type) > -1 ? ' inputmode="numeric"' : "") +
        ' placeholder="' + esc(extra) + '" autocomplete="off" value="' + v + '"' + cls + ">";
    }
    return '<div class="sa_fg' + (type === "x" ? " sa_wide" : "") + '"><label for="' + id + '">' + esc(label) + "</label>" + inp +
      (bad ? '<div class="sa_err">' + S.t.invalid + " " + esc(label.toLowerCase()) + ".</div>" : "") + "</div>";
  }

  function render() {
    var t = S.t, c = S.cfg, p = price(), name = svcName(), stepIdx = S.done ? 5 : S.step;
    var priceLine = c.govt == null ? "<b>" + rs(c.total) + "</b> " + t.allIncl
      : c.flag === "y" ? "<b>" + t.from + " " + rs(c.total) + "</b> (" + rs(c.govt) + " " + t.govtYear + " + " + rs(c.aarambh) + " " + t.service + ")"
      : "<b>" + rs(c.total) + "</b> (" + t.govt + " " + rs(c.govt) + " + " + t.service + " " + rs(c.aarambh) + ")";

    var h = '<div class="sa_modal" role="dialog" aria-modal="true" aria-labelledby="sa_title" tabindex="-1">' +
      '<header class="sa_head"><div><h2 id="sa_title">' + esc(name) + '</h2><p class="sa_price">' + priceLine + '<span class="sa_dot"></span>' + t.turnaround + ": <b>" + CFG.tat + '</b></p></div>' +
      '' + (S.inline ? "" : '<button type="button" class="sa_x" data-act="close" aria-label="' + t.close + '">✕</button>') + '</header>';

    if (!S.done && !S.busy) {
      h += '<ol class="sa_steps">' + t.steps.map(function (s, i) {
        return '<li class="' + (stepIdx === i + 1 ? "sa_on" : stepIdx > i + 1 ? "sa_ok" : "") + '"><span class="sa_n">' + (i + 1) + '</span><span class="sa_l">' + s + "</span></li>";
      }).join("") + "</ol>";
    }

    h += '<div class="sa_body">';
    if (S.busy) {
      h += '<div class="sa_busy" role="status"><div class="sa_spin"></div><strong>' + S.busy + "</strong><span>" + t.wait + "</span></div>";
    } else if (S.done) {
      h += '<div class="sa_done"><div class="sa_tick"><svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
        '<h3 class="sa_h sa_center">' + t.done + '</h3><p class="sa_sub sa_center">' + (S.done.pending ? t.donePending : t.doneOk) + "</p>" +
        '<ul class="sa_rl sa_receipt">' + li(t.appId, S.appId) + li(t.name, S.vals.name) + li(t.secSvc, name) + li(t.paid, rs(p.total)) + li(t.status, t.paidV) +
        li(t.docsRow, S.done.pending ? t.pending : c.docs.length ? t.received : t.notReq) +
        li(t.date, new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })) + "</ul></div>";
    } else if (S.step === 1) {
      h += '<h3 class="sa_h">' + t.h1 + '</h3><p class="sa_sub">' + t.p1 + "</p>" + (c.flag === "s" ? '<div class="sa_note">' + t.stateNote + "</div>" : "") +
        '<div class="sa_grid">' + c.fields.map(fieldHtml).join("") + "</div>";
    } else if (S.step === 2) {
      h += '<h3 class="sa_h">' + t.h2 + '</h3><p class="sa_sub">' + t.p2 + '</p><div class="sa_sec">' + t.secSvc + "</div><ul class=\"sa_rl\">" +
        li(t.secSvc, name) + li(t.cat, META[S.id][S.lang === "hi" ? 3 : 2]) + li(t.amount, rs(p.total)) + li(t.turnaround, CFG.tat) + '</ul><div class="sa_sec">' + t.secDet + '</div><ul class="sa_rl">' +
        c.fields.map(function (k) { return li(F[k][0], S.vals[k]); }).join("") + '</ul><div class="sa_note" style="margin-top:14px">' + (c.docs.length ? t.docsLater(c.docs.length) : t.noDocs) + "</div>" +
        '<label class="sa_chk"><input type="checkbox" data-agree="0"' + (S.agree[0] ? " checked" : "") + "><span>" + t.d1 + "</span></label>" +
        '<label class="sa_chk"><input type="checkbox" data-agree="1"' + (S.agree[1] ? " checked" : "") + "><span>" + t.d2 + "</span></label>" +
        (S.agreeErr ? '<div class="sa_err">' + t.dErr + "</div>" : "") +
        (S.saveErr ? '<div class="sa_err">' + t.saveErr + ' <small>(' + esc(S.saveErr) + ")</small></div>" : "");
    } else if (S.step === 3) {
      h += '<h3 class="sa_h">' + t.h3 + '</h3><p class="sa_sub">' + t.p3 + '</p><div class="sa_sum"><div class="sa_sr"><span>' + t.secSvc + "</span><span>" + esc(name) + "</span></div>" +
        (p.govt != null ? '<div class="sa_sr"><span>' + t.govtCharges + (c.flag === "y" ? " (" + (Number(S.vals.yrs) || 1) + " " + t.yr + ")" : "") + "</span><span>" + (p.govt ? rs(p.govt) : t.nil) + "</span></div>" +
          '<div class="sa_sr"><span>' + t.svcCharge + "</span><span>" + rs(p.aarambh) + "</span></div>" : "") +
        '<div class="sa_sr sa_tot"><span>' + t.total + "</span><span>" + rs(p.total) + "</span></div>" +
        '<p class="sa_fine">' + (c.flag === "s" ? t.stateNote : p.govt == null ? t.inclNote : "") + "</p></div>" +
        '<div class="sa_paylbl">' + t.payUsing + '</div><div class="sa_chips"><span>UPI</span><span>Debit Card</span><span>Credit Card</span><span>Net Banking</span></div><p class="sa_secure">' + t.secure + "</p>";
    } else {
      h += '<h3 class="sa_h">' + t.h4 + '</h3><p class="sa_sub">' + (c.docs.length ? t.p4 : t.p4none) + "</p>";
      c.docs.forEach(function (k, i) {
        var f = S.files[i];
        h += '<div class="sa_doc"><div class="sa_dt">' + esc(docName(k)) + (optDoc(k) ? " <i>(" + t.optional + ")</i>" : "") + "</div>" +
          (f ? '<div class="sa_file"><span>' + esc(f.name) + " (" + Math.round(f.size / 1024) + ' KB)</span><button type="button" data-rm="' + i + '">' + t.remove + "</button></div>"
            : '<label class="sa_pick" for="sa_doc' + i + '">' + t.choose + '<input id="sa_doc' + i + '" type="file" data-doc="' + i + '" accept=".jpg,.jpeg,.png,.pdf"></label>') +
          (S.fileErr[i] ? '<div class="sa_err">' + t.big + "</div>" : "") + "</div>";
      });
      if (c.docs.length) h += '<p class="sa_fine sa_dark">' + t.formats + "</p>";
      if (S.docErr) h += '<div class="sa_err">' + t.docErr + "</div>";
      if (S.subErr) h += '<div class="sa_err">' + t.subErr + " <small>(" + esc(S.subErr) + ")</small></div>";
    }
    h += "</div>";

    if (!S.busy) {
      h += '<footer class="sa_foot">';
      if (S.done) h += '<a class="sa_btn sa_wa" href="' + waUrl() + '" target="_blank" rel="noopener">' + t.wa + '</a><button type="button" class="sa_btn sa_ghost" data-act="' + (S.inline ? "again" : "close") + '">' + (S.inline ? t.again : t.close) + "</button>";
      else if (S.step === 1) h += '<button type="button" class="sa_btn sa_primary" data-act="next1">' + t.cont + "</button>";
      else if (S.step === 2) h += '<button type="button" class="sa_btn sa_ghost" data-act="to1">' + t.edit + '</button><button type="button" class="sa_btn sa_primary" data-act="next2">' + t.toPay + "</button>";
      else if (S.step === 3) h += '<button type="button" class="sa_btn sa_ghost" data-act="to2">' + t.back + '</button><button type="button" class="sa_btn sa_gold" data-act="pay">' + t.pay + " " + rs(p.total) + "</button>";
      else h += (c.docs.length ? '<button type="button" class="sa_btn sa_ghost" data-act="skip">' + t.skip + "</button>" : "") + '<button type="button" class="sa_btn sa_primary" data-act="submit">' + t.submit + "</button>";
      h += "</footer>";
    }
    h += "</div>";
    root.innerHTML = h;
    var body = root.querySelector(".sa_body");
    if (S.scrollTop && body) {
      body.scrollTop = 0; S.scrollTop = false;
      if (S.inline && root.scrollIntoView) root.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  function go(step) { S.step = step; S.scrollTop = true; render(); }

  /* ---------- events ---------- */
  function onInput(e) {
    var el = e.target, k = el.getAttribute("data-f");
    if (!k) return;
    var v = mask(F[k][1], el.value);
    if (v !== el.value) el.value = v;
    S.vals[k] = v;
    if (S.errs[k]) { S.errs[k] = false; el.classList.remove("sa_bad"); var er = el.parentNode.querySelector(".sa_err"); if (er) er.remove(); }
    if (k === "yrs") { /* price header refresh handled on next render */ }
  }
  function onChange(e) {
    var el = e.target;
    if (el.hasAttribute("data-f")) { onInput(e); return; }
    var a = el.getAttribute("data-agree");
    if (a !== null) { S.agree[+a] = el.checked; return; }
    var d = el.getAttribute("data-doc");
    if (d !== null) {
      var f = el.files[0]; if (!f) return;
      if (f.size > CFG.maxMB * 1024 * 1024) { S.fileErr[d] = true; } else { S.fileErr[d] = false; S.files[d] = f; S.docErr = false; }
      render();
    }
  }
  function onClick(e) {
    var rm = e.target.getAttribute && e.target.getAttribute("data-rm");
    if (rm) { delete S.files[rm]; render(); return; }
    var a = e.target.closest ? e.target.closest("[data-act]") : null;
    if (!a) return;
    switch (a.getAttribute("data-act")) {
      case "close": askClose(); break;
      case "again": again(); break;
      case "next1": next1(); break;
      case "to1": go(1); break;
      case "to2": go(2); break;
      case "next2": next2(); break;
      case "pay": pay(); break;
      case "skip": finish(true); break;
      case "submit": finish(false); break;
    }
  }

  function next1() {
    var first = null; S.errs = {};
    S.cfg.fields.forEach(function (k) {
      var v = (S.vals[k] || "").trim(); S.vals[k] = v;
      if (!RULES[F[k][1]](v)) { S.errs[k] = true; if (!first) first = k; }
    });
    if (first) { render(); var el = document.getElementById("sa_f_" + first); if (el) el.focus(); return; }
    go(2);
  }
  function next2() {
    if (!(S.agree[0] && S.agree[1])) { S.agreeErr = true; render(); return; }
    S.agreeErr = false; S.saveErr = ""; S.busy = S.t.saving; render();
    post("New", []).then(function (r) {                       /* data is saved in the Sheet at Confirm */
      if (!S) return; S.busy = "";
      if (r.ok) go(3); else { S.saveErr = r.error || "error"; render(); }
    });
  }
  /* Payment is a UI simulation. In production, create an order on your backend (Razorpay / Cashfree),
     open the gateway checkout here, and verify the payment server-side before marking it Paid. */
  function pay() {
    S.busy = S.t.paying; render();
    setTimeout(function () {
      if (!S) return;
      S.payId = "ARBM" + Array.apply(null, Array(11)).map(function () { return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(Math.random() * 36)); }).join(""); S.paid = true;
      post("Payment Received", []).then(function () { if (!S) return; S.busy = ""; go(4); });
    }, 1800);
  }
  function readB64(f) { return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(String(r.result).split(",")[1]); }; r.onerror = rej; r.readAsDataURL(f); }); }
  function finish(skip) {
    var c = S.cfg;
    if (!skip && c.docs.length) {
      var missing = c.docs.some(function (k, i) { return !optDoc(k) && !S.files[i]; });
      S.docErr = missing; if (missing) { render(); return; }
    }
    S.busy = S.t.submitting; render();
    var up = [], jobs = [];
    if (!skip) c.docs.forEach(function (k, i) { var f = S.files[i]; if (f) jobs.push(readB64(f).then(function (d) { up.push({ label: D[k], name: f.name, mime: f.type, data: d }); })); });
    Promise.all(jobs).then(function () {
      var pending = c.docs.length > 0 && up.length === 0;
      return post(pending ? "Documents Pending" : "Documents Received", up).then(function (r) {
        if (!S) return; S.busy = "";
        if (!r.ok) { S.subErr = r.error || "error"; render(); return; }
        S.subErr = ""; S.done = { pending: pending }; S.scrollTop = true; render();
      });
    });
  }

  function post(status, docs) {
    if (!CFG.sheetUrl) return Promise.resolve({ ok: true });
    var fields = {}, p = price();
    S.cfg.fields.forEach(function (k) { fields[F[k][0]] = (S.vals[k] || "").trim(); });
    var payload = { service: S.id, serviceName: META[S.id][0], category: META[S.id][2], appId: S.appId, fields: fields,
      fullName: S.vals.name || "", email: S.vals.email || "", mobile: S.vals.mob || S.vals.amob || "",
      govtFee: p.govt == null ? "NA" : p.govt, serviceCharge: p.aarambh == null ? "NA" : p.aarambh, totalAmount: p.total,
      paymentStatus: S.paid ? "Paid" : "Pending", paymentId: S.payId, applicationStatus: status, docs: docs, language: S.lang };
    var body = JSON.stringify(payload);
    /* Plain text body = no CORS pre-flight, and Apps Script's JSON reply is readable. */
    return fetch(CFG.sheetUrl, { method: "POST", body: body })
      .then(function (r) { return r.json(); })
      .then(function (j) { return j && j.ok ? { ok: true } : { ok: false, error: (j && j.error) || "Unknown error" }; })
      .catch(function () {
        /* reply unreadable (network / CORS): send once more blindly. Same Application ID = same row, so no duplicate. */
        return fetch(CFG.sheetUrl, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: body })
          .then(function () { return { ok: true, unverified: true }; })
          .catch(function (err) { return { ok: false, error: String(err && err.message || err) }; });
      });
  }
  function waUrl() {
    var p = price();
    return "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(S.t.waMsg(META[S.id][0], rs(p.total), S.appId, S.done && S.done.pending));
  }

  window.openAarambhApply = open;
  window.mountAarambhApply = mount;
  window.unmountAarambhApply = unmount;
  window.hasAarambhApply = function (id) { return !!R[id]; };
  window.AARAMBH_APPLY_META = META;
})();
