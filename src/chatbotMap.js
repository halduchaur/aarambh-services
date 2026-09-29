/* Maps a website service id -> the exact service name used inside the Aarambh
   chatbot (index.html -> SERVICES_DATA). Only services whose names differ (or
   that the bot cannot handle) are listed; every other service is matched by
   its English name automatically.
   Use `null` when the chatbot does not offer that service — the Apply button
   then falls back to WhatsApp. */
export const CHATBOT_SERVICE_MAP = {
  "aadhaar-pan-link": "Aadhaar-PAN Link",
  "reprint-pan": "Reprint PAN Card",
  "caste-certificate-haryana": "Caste Certificate - Haryana",
  "caste-certificate-maharashtra": "Caste Certificate - Maharashtra",
  "domicile-certificate-maharashtra": "Domicile Certificate - Maharashtra",
  "income-certificate-haryana": "Income Certificate - Haryana",
  "income-certificate-maharashtra": "Income Certificate - Maharashtra",
  "senior-citizen-card-ap": "Senior Citizen Card - Andhra Pradesh",
  "senior-citizen-card-assam": "Senior Citizen Card - Assam",
  "itr-filing": "ITR (Income Tax Return)",
  "learners-license": "Learners License",
  "permanent-dl": "Permanent DL",
  "idp": "International Driving License Permit (IDP)",
  "hsrp": "2 Wheeler HSRP Number Plate",
  "hsrp-4-wheeler": "4 Wheeler HSRP Number Plate",
  "color-code-sticker": "HSRP Colour Coded Fuel Sticker",
  "srisaila-darshan": "Srisailam Devasthanam Darshan Booking",
  "ayushman-service": "Ayushman Service",
  "udid-service": "UDID Service (Disability ID)",
  "uan-activation": null,
};
