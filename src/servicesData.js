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
  {
    id: "aadhaar-address-update",
    image: aadhar,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Aadhaar Address Update",
      hi: "आधार पता अपडेट"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹149 onwards",
      hi: "₹149 से शुरू"
    },

    summary: {
      en: "Update your Aadhaar address online or offline with ease — essential for banking, SIM verification, admissions, and other important services.",
      hi: "अपने आधार में पता आसानी से ऑनलाइन या ऑफलाइन अपडेट करें — बैंकिंग, SIM सत्यापन, प्रवेश और अन्य महत्वपूर्ण सेवाओं के लिए आवश्यक।"
    },

    benefits: {
      en: [
        "Accurate identification and correction of the address fields required for a valid Aadhaar update.",
        "Guidance on choosing between online self-service and physical Aadhaar Seva Kendra submission.",
        "Careful review of address proof documents to avoid mismatch-related rejections.",
        "Faster approval by ensuring the request is submitted in the correct, error-free format.",
        "Your updated address reflects automatically across linked banking, mobile, and utility KYC records.",
        "Continuous WhatsApp status updates until the address change is reflected on your Aadhaar."
      ],

      hi: [
        "मान्य आधार अपडेट के लिए आवश्यक पता संबंधी विवरण की सही पहचान और सुधार में सहायता।",
        "ऑनलाइन सेल्फ-सर्विस और आधार सेवा केंद्र पर ऑफलाइन आवेदन के बीच सही विकल्प चुनने में मार्गदर्शन।",
        "विवरण में अंतर के कारण आवेदन अस्वीकृत होने से बचाने के लिए पते के प्रमाण दस्तावेजों की सावधानीपूर्वक जांच।",
        "सही और त्रुटिरहित फॉर्मेट में आवेदन जमा करके प्रक्रिया को सुचारू और तेज बनाने में सहायता।",
        "अपडेट किया गया पता लिंक किए गए बैंकिंग, मोबाइल और यूटिलिटी KYC रिकॉर्ड में आवश्यकतानुसार अपडेट होने में सहायता करता है।",
        "आपके आधार में पता अपडेट होने तक WhatsApp के माध्यम से लगातार स्टेटस अपडेट।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Aadhaar Address Update?",
          a: "Updating or correcting the current residential address in your Aadhaar card."
        },
        {
          q: "Who needs Aadhaar Address Update?",
          a: "Any Indian resident who needs to update or correct their residential address in Aadhaar, typically for KYC, banking, government schemes, SIM verification, admissions, or other official purposes."
        },
        {
          q: "What documents are required for Aadhaar Address Update?",
          a: "The key documents typically required are address proof such as an electricity bill, rent agreement, passport, or bank statement, along with your Aadhaar number. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Aadhaar Address Update?",
          a: "The process involves submitting the required address proof, filling out the relevant application form accurately, submitting the request through the appropriate channel, and tracking the application until the address is updated."
        },
        {
          q: "How long does Aadhaar Address Update take to process?",
          a: "The typical processing time is 7–15 days after the online request. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Aadhaar Address Update?",
          a: "There is an official government fee, where applicable, set by the concerned department, which is separate from the service facilitation charge. Since government fees may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Aadhaar Address Update application is rejected or delayed?",
          a: "If an application is rejected or returned for correction, the most common reasons are mismatched details, invalid or unclear address proof, or incomplete forms. In such cases, the application can usually be resubmitted after correcting the flagged issue."
        },
        {
          q: "How does Aarambh India help with Aadhaar Address Update?",
          a: "Aarambh India verifies that all documents are complete and correctly formatted, assists with accurately filling and submitting the application, and provides regular status updates over WhatsApp until the address update process is completed."
        }
      ],

      hi: [
        {
          q: "आधार पता अपडेट क्या है?",
          a: "आधार कार्ड में वर्तमान निवास पते को अपडेट या सही करना।"
        },
        {
          q: "आधार पता अपडेट किसे करवाना चाहिए?",
          a: "जिन भारतीय नागरिकों को KYC, बैंकिंग, सरकारी योजनाओं, SIM सत्यापन, प्रवेश या अन्य आधिकारिक कार्यों के लिए अपने आधार में वर्तमान निवास पता अपडेट या सही करना है, उन्हें आधार पता अपडेट करवाना चाहिए।"
        },
        {
          q: "आधार पता अपडेट के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः पते के प्रमाण के रूप में बिजली बिल, किराया समझौता, पासपोर्ट या बैंक स्टेटमेंट जैसे दस्तावेज और आधार नंबर की आवश्यकता होती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "आधार पता अपडेट की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक पते का प्रमाण जमा करना, संबंधित आवेदन फॉर्म सही तरीके से भरना, उचित माध्यम से अनुरोध सबमिट करना और पता अपडेट होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "आधार पता अपडेट होने में कितना समय लगता है?",
          a: "ऑनलाइन अनुरोध के बाद सामान्यतः 7–15 दिन लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन की गति और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "आधार पता अपडेट के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, संबंधित विभाग द्वारा निर्धारित सरकारी शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि आधार पता अपडेट का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या सुधार के लिए वापस होने के सामान्य कारणों में विवरण में अंतर, अमान्य या अस्पष्ट पता प्रमाण या अधूरा फॉर्म शामिल हैं। समस्या को ठीक करने के बाद आवेदन को दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India आधार पता अपडेट में कैसे सहायता करता है?",
          a: "Aarambh India सभी दस्तावेजों की पूर्णता और सही फॉर्मेट की जांच करता है, आवेदन को सही तरीके से भरने और सबमिट करने में सहायता करता है तथा प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "aadhaar-npci-link",
    image: npci,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Aadhaar NPCI Link",
      hi: "आधार–NPCI लिंक"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    price: {
      en: "₹99 onwards",
      hi: "₹99 से शुरू"
    },

    summary: {
      en: "Link your Aadhaar with your bank account through NPCI to help receive eligible government scheme benefits directly via DBT (Direct Benefit Transfer).",
      hi: "NPCI के माध्यम से अपने आधार को बैंक खाते से लिंक करें, ताकि पात्र सरकारी योजनाओं का लाभ DBT (Direct Benefit Transfer) के माध्यम से सीधे आपके बैंक खाते में प्राप्त हो सके।"
    },

    benefits: {
      en: [
        "Enables eligible government subsidies and scheme payments (DBT) to be credited directly to your bank account.",
        "Verification that your Aadhaar is correctly seeded with your active bank account in the NPCI mapper.",
        "Prevents subsidy failures caused by an outdated or incorrectly linked bank account.",
        "Assistance identifying and correcting any existing incorrect Aadhaar-bank seeding.",
        "No need to visit your bank branch for this linking.",
        "Confirmation and status tracking once the mapping is successfully updated."
      ],

      hi: [
        "पात्र सरकारी सब्सिडी और योजनाओं का भुगतान (DBT) सीधे आपके बैंक खाते में प्राप्त करने में सहायता करता है।",
        "यह सुनिश्चित करने के लिए सत्यापन कि आपका आधार NPCI Mapper में आपके सक्रिय बैंक खाते से सही तरीके से सीडेड है।",
        "गलत या पुराने बैंक खाते की लिंकिंग के कारण सब्सिडी भुगतान विफल होने की समस्या से बचने में सहायता करता है।",
        "मौजूदा गलत आधार–बैंक सीडिंग की पहचान और सुधार में सहायता।",
        "इस लिंकिंग के लिए बैंक शाखा में जाने की आवश्यकता नहीं।",
        "मैपिंग सफलतापूर्वक अपडेट होने के बाद पुष्टि और स्टेटस ट्रैकिंग की सुविधा।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Aadhaar NPCI Link?",
          a: "Linking Aadhaar with the NPCI mapper so that DBT (Direct Benefit Transfer), subsidies, and government payments can come directly into the bank account."
        },
        {
          q: "Who needs Aadhaar NPCI Link?",
          a: "Individuals who want eligible government scheme benefits and DBT payments to be received directly in their bank account may need Aadhaar NPCI linking."
        },
        {
          q: "What documents are required for Aadhaar NPCI Link?",
          a: "The key documents typically required are Aadhaar number and bank account passbook or statement. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Aadhaar NPCI Link?",
          a: "The process involves submitting the required documents, filling out the relevant application form accurately, and tracking the application until the NPCI mapping is successfully updated."
        },
        {
          q: "How long does Aadhaar NPCI Link take to process?",
          a: "The typical processing time is 3–7 working days. This can vary depending on document verification speed and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Aadhaar NPCI Link?",
          a: "There may be an official government or bank fee, where applicable, which is separate from the service facilitation charge. The current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Aadhaar NPCI Link application is rejected or delayed?",
          a: "If an application is rejected or returned for correction, common reasons include mismatched details, unclear document copies, incorrect bank details, or incomplete forms. The request can usually be resubmitted after correcting the issue."
        },
        {
          q: "How does Aarambh India help with Aadhaar NPCI Link?",
          a: "Aarambh India verifies that all documents are complete and correctly formatted, assists with the application and submission process, and provides regular status updates over WhatsApp until the process is completed."
        }
      ],

      hi: [
        {
          q: "आधार–NPCI लिंक क्या है?",
          a: "आधार को NPCI Mapper से लिंक करना, ताकि DBT (Direct Benefit Transfer), सब्सिडी और सरकारी भुगतान सीधे बैंक खाते में प्राप्त हो सकें।"
        },
        {
          q: "आधार–NPCI लिंक किसे करवाना चाहिए?",
          a: "जिन व्यक्तियों को पात्र सरकारी योजनाओं का लाभ और DBT भुगतान सीधे अपने बैंक खाते में प्राप्त करना है, उन्हें आधार–NPCI लिंकिंग की आवश्यकता हो सकती है।"
        },
        {
          q: "आधार–NPCI लिंक के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार नंबर और बैंक खाते की पासबुक या स्टेटमेंट की आवश्यकता होती है। मूल दस्तावेज सामान्यतः शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "आधार–NPCI लिंक की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक दस्तावेज जमा करना, संबंधित आवेदन फॉर्म सही तरीके से भरना और NPCI मैपिंग सफलतापूर्वक अपडेट होने तक आवेदन को ट्रैक करना शामिल है।"
        },
        {
          q: "आधार–NPCI लिंक होने में कितना समय लगता है?",
          a: "सामान्यतः इसमें 3–7 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, बैंक प्रोसेसिंग और संबंधित विभाग के कार्यभार पर निर्भर कर सकता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "आधार–NPCI लिंक के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या बैंक शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि आधार–NPCI लिंक का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या सुधार के लिए वापस होने के सामान्य कारणों में विवरण में अंतर, अस्पष्ट दस्तावेज, गलत बैंक विवरण या अधूरा फॉर्म शामिल हैं। समस्या ठीक करने के बाद अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India आधार–NPCI लिंक में कैसे सहायता करता है?",
          a: "Aarambh India सभी दस्तावेजों की पूर्णता और सही फॉर्मेट की जांच करता है, आवेदन एवं सबमिशन प्रक्रिया में सहायता करता है और प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "aadhaar-pan-link",
    image: aadhar_pan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Aadhaar–PAN Link",
      hi: "आधार–PAN लिंक"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹1099 onwards",
      hi: "₹1099 से शुरू"
    },

    summary: {
      en: "Link your PAN with Aadhaar — important for ITR filing, banking, and other financial services.",
      hi: "अपने PAN को आधार से लिंक करें — ITR फाइलिंग, बैंकिंग और अन्य वित्तीय सेवाओं के लिए महत्वपूर्ण।"
    },

    benefits: {
      en: [
        "Keeps your PAN active and valid for filing Income Tax Returns without penalty.",
        "A required compliance step for most banking, investment, and high-value financial transactions.",
        "Avoids the risk of your PAN becoming inoperative due to non-linking.",
        "Quick verification of Aadhaar and PAN details before submission to prevent mismatch errors.",
        "Guidance on the applicable late fee, if any, before payment.",
        "Confirmation once the linking status is reflected on the Income Tax portal."
      ],

      hi: [
        "आपके PAN को सक्रिय और वैध रखने में सहायता करता है, ताकि आप बिना दंड के Income Tax Return दाखिल कर सकें।",
        "अधिकांश बैंकिंग, निवेश और उच्च-मूल्य वाले वित्तीय लेनदेन के लिए आवश्यक अनुपालन प्रक्रिया।",
        "PAN लिंक न होने के कारण उसके निष्क्रिय होने के जोखिम से बचने में सहायता करता है।",
        "सबमिशन से पहले आधार और PAN विवरण का त्वरित सत्यापन, ताकि विवरण में अंतर के कारण होने वाली त्रुटियों से बचा जा सके।",
        "यदि कोई लागू लेट फीस है, तो भुगतान से पहले उसकी जानकारी दी जाती है।",
        "Income Tax पोर्टल पर लिंकिंग स्टेटस अपडेट होने के बाद पुष्टि प्रदान की जाती है।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Aadhaar-PAN Link?",
          a: "Linking Aadhaar with PAN card under Income Tax rules, so that PAN does not become inactive."
        },
        {
          q: "Who needs Aadhaar-PAN Link?",
          a: "Individuals who are required to link their Aadhaar with PAN for Income Tax compliance, ITR filing, banking, financial transactions, or other applicable services may need Aadhaar-PAN linking."
        },
        {
          q: "What documents are required for Aadhaar-PAN Link?",
          a: "The key documents typically required are Aadhaar card and PAN card. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Aadhaar-PAN Link?",
          a: "The process involves submitting the required details and documents, verifying the Aadhaar and PAN information, completing the applicable linking process, and tracking the status until the linking is successfully reflected."
        },
        {
          q: "How long does Aadhaar–PAN Link take to process?",
          a: "The typical processing time is 24–48 hours online, sometimes a few days extra. This can vary depending on verification and portal processing, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Aadhaar–PAN Link?",
          a: "There may be an official government fee, where applicable, which is separate from the service facilitation charge. Since government fees may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Aadhaar–PAN Link application is rejected or delayed?",
          a: "If the linking request is rejected or delayed, common reasons may include mismatched Aadhaar and PAN details, incorrect information, or incomplete verification. The issue can usually be corrected and the linking request submitted again."
        },
        {
          q: "How does Aarambh India help with Aadhaar-PAN Link?",
          a: "Aarambh India verifies that the Aadhaar and PAN details are complete and correctly entered, assists with the linking process, and provides regular status updates over WhatsApp until the process is completed."
        }
      ],

      hi: [
        {
          q: "आधार–PAN लिंक क्या है?",
          a: "Income Tax नियमों के तहत आधार को PAN कार्ड से लिंक करना, ताकि PAN निष्क्रिय न हो।"
        },
        {
          q: "आधार–PAN लिंक किसे करवाना चाहिए?",
          a: "जिन व्यक्तियों के लिए Income Tax अनुपालन, ITR फाइलिंग, बैंकिंग, वित्तीय लेनदेन या अन्य लागू सेवाओं के लिए आधार को PAN से लिंक करना आवश्यक है, उन्हें आधार–PAN लिंक करवाना चाहिए।"
        },
        {
          q: "आधार–PAN लिंक के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार कार्ड और PAN कार्ड की आवश्यकता होती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "आधार–PAN लिंक की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक विवरण और दस्तावेज जमा करना, आधार और PAN की जानकारी का सत्यापन करना, लागू लिंकिंग प्रक्रिया पूरी करना और लिंकिंग सफलतापूर्वक अपडेट होने तक स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "आधार–PAN लिंक होने में कितना समय लगता है?",
          a: "ऑनलाइन प्रक्रिया में सामान्यतः 24–48 घंटे लग सकते हैं, हालांकि कभी-कभी कुछ अतिरिक्त दिन भी लग सकते हैं। वास्तविक समय सत्यापन और पोर्टल प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "आधार–PAN लिंक के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि आधार–PAN लिंक का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "लिंकिंग अनुरोध अस्वीकार या विलंबित होने के सामान्य कारणों में आधार और PAN विवरण में अंतर, गलत जानकारी या अधूरा सत्यापन शामिल हो सकता है। समस्या को ठीक करने के बाद लिंकिंग अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India आधार–PAN लिंक में कैसे सहायता करता है?",
          a: "Aarambh India आधार और PAN विवरण की पूर्णता एवं सही एंट्री की जांच करता है, लिंकिंग प्रक्रिया में सहायता करता है और प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "aadhaar-pvc-card",
    image: aadhar_pvc,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Aadhaar PVC Card",
      hi: "आधार PVC कार्ड"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    tag: {
      en: "Fast",
      hi: "त्वरित"
    },

    price: {
      en: "₹149 onwards",
      hi: "₹149 से शुरू"
    },

    summary: {
      en: "Get your durable, credit-card-sized PVC Aadhaar with a secure QR code and enhanced security features — convenient to carry and easy to use.",
      hi: "सुरक्षित QR कोड और बेहतर सुरक्षा सुविधाओं वाला टिकाऊ, क्रेडिट-कार्ड आकार का PVC आधार प्राप्त करें — जिसे ले जाना और उपयोग करना आसान है।"
    },

    benefits: {
      en: [
        "A durable, credit-card-sized Aadhaar that is easier to carry and store than the paper printout.",
        "Enhanced security features, including a secure QR code, hologram, and ghost image.",
        "Convenient for daily use as ID proof at banks, offices, and verification counters.",
        "Assistance placing the order using your existing Aadhaar number or enrolment ID.",
        "Doorstep delivery tracking so you know exactly when your card will arrive.",
        "Support if the card is undelivered, damaged in transit, or needs a reorder."
      ],

      hi: [
        "टिकाऊ और क्रेडिट-कार्ड आकार का आधार, जिसे पेपर प्रिंट की तुलना में ले जाना और सुरक्षित रखना आसान है।",
        "सुरक्षित QR कोड, होलोग्राम और घोस्ट इमेज सहित बेहतर सुरक्षा सुविधाएं।",
        "बैंक, कार्यालय और सत्यापन केंद्रों पर ID प्रूफ के रूप में दैनिक उपयोग के लिए सुविधाजनक।",
        "मौजूदा आधार नंबर या Enrolment ID का उपयोग करके PVC कार्ड ऑर्डर करने में सहायता।",
        "डोरस्टेप डिलीवरी ट्रैकिंग, ताकि आप अपने कार्ड की डिलीवरी का स्टेटस आसानी से जान सकें।",
        "कार्ड डिलीवर न होने, ट्रांजिट में क्षतिग्रस्त होने या दोबारा ऑर्डर करने की आवश्यकता होने पर सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Aadhaar PVC Card?",
          a: "A durable, ATM-card-like PVC version of Aadhaar that is easy to carry and convenient to use."
        },
        {
          q: "Who needs Aadhaar PVC Card?",
          a: "Any Aadhaar holder who wants a durable and convenient physical version of their Aadhaar for KYC, banking, government services, identification, or verification purposes may opt for an Aadhaar PVC Card."
        },
        {
          q: "What documents are required for Aadhaar PVC Card?",
          a: "The key details typically required are Aadhaar number or Enrolment ID (EID) and registered mobile number. Original documents are usually not required upfront; clear scanned or photographed copies may be sufficient where supporting documents are requested."
        },
        {
          q: "What is the process for Aadhaar PVC Card?",
          a: "The process involves providing the required Aadhaar details, placing the PVC card order through the applicable process, and tracking the order until the card is dispatched and delivered."
        },
        {
          q: "How long does Aadhaar PVC Card take to process?",
          a: "The typical processing and delivery time is around 5–7 working days, including courier time. This can vary depending on verification, printing, dispatch, and delivery timelines, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Aadhaar PVC Card?",
          a: "There may be an official government or applicable card-order fee, which is separate from the service facilitation charge. The current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Aadhaar PVC Card application is rejected or delayed?",
          a: "If the order or request is rejected or delayed, common reasons may include incorrect Aadhaar details, verification issues, incomplete information, or delivery-related problems. The issue can be reviewed and the request may be resubmitted or reordered where applicable."
        },
        {
          q: "How does Aarambh India help with Aadhaar PVC Card?",
          a: "Aarambh India verifies the required details, assists with placing the PVC card order, and provides regular status updates over WhatsApp until the card is delivered."
        }
      ],

      hi: [
        {
          q: "आधार PVC कार्ड क्या है?",
          a: "आधार का टिकाऊ और ATM कार्ड जैसा PVC संस्करण, जिसे ले जाना आसान और उपयोग के लिए सुविधाजनक है।"
        },
        {
          q: "आधार PVC कार्ड किसे लेना चाहिए?",
          a: "जो आधार धारक KYC, बैंकिंग, सरकारी सेवाओं, पहचान या सत्यापन के लिए अपने आधार का टिकाऊ और सुविधाजनक फिजिकल संस्करण चाहते हैं, वे आधार PVC कार्ड ले सकते हैं।"
        },
        {
          q: "आधार PVC कार्ड के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार नंबर या Enrolment ID (EID) और रजिस्टर्ड मोबाइल नंबर की आवश्यकता होती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; जहां सहायक दस्तावेज मांगे जाएं, वहां स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "आधार PVC कार्ड की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक आधार विवरण प्रदान करना, लागू प्रक्रिया के माध्यम से PVC कार्ड का ऑर्डर करना और कार्ड के डिस्पैच एवं डिलीवरी तक ऑर्डर का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "आधार PVC कार्ड मिलने में कितना समय लगता है?",
          a: "सामान्यतः प्रोसेसिंग और डिलीवरी में लगभग 5–7 कार्य दिवस लग सकते हैं, जिसमें कूरियर का समय भी शामिल है। वास्तविक समय सत्यापन, प्रिंटिंग, डिस्पैच और डिलीवरी पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "आधार PVC कार्ड के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या कार्ड ऑर्डर से संबंधित शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि आधार PVC कार्ड का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन या ऑर्डर अस्वीकार या विलंबित होने के सामान्य कारणों में गलत आधार विवरण, सत्यापन संबंधी समस्या, अधूरी जानकारी या डिलीवरी संबंधी समस्या शामिल हो सकती है। समस्या की जांच करके आवश्यकता अनुसार अनुरोध दोबारा जमा या ऑर्डर किया जा सकता है।"
        },
        {
          q: "Aarambh India आधार PVC कार्ड में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक विवरणों की जांच करता है, PVC कार्ड ऑर्डर करने में सहायता करता है और कार्ड की डिलीवरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "new-pan-card",
    image: pan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "New PAN Card",
      hi: "नया PAN कार्ड"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹249 onwards",
      hi: "₹249 से शुरू"
    },

    summary: {
      en: "Apply for a new PAN Card — an essential document for banking, income tax filing, investments, and other financial transactions.",
      hi: "नया PAN कार्ड बनवाएं — बैंकिंग, आयकर रिटर्न दाखिल करने, निवेश और अन्य वित्तीय लेनदेन के लिए एक आवश्यक दस्तावेज।"
    },

    benefits: {
      en: [
        "Issues your Permanent Account Number, a mandatory document for banking, taxation, and investments.",
        "Careful review of your application to avoid errors that commonly cause rejection or delay.",
        "Assistance choosing the correct applicant category and supporting documents.",
        "Guidance on e-PAN versus physical PAN card options based on your need.",
        "Regular status updates from submission until the PAN is issued.",
        "Support with linking your new PAN to Aadhaar once received."
      ],

      hi: [
        "Permanent Account Number (PAN) प्राप्त करने में सहायता, जो बैंकिंग, टैक्स और निवेश के लिए एक आवश्यक दस्तावेज है।",
        "आवेदन में उन सामान्य गलतियों से बचने के लिए सावधानीपूर्वक जांच, जिनके कारण आवेदन अस्वीकृत या विलंबित हो सकता है।",
        "सही आवेदक श्रेणी और आवश्यक सहायक दस्तावेज चुनने में सहायता।",
        "आपकी आवश्यकता के अनुसार e-PAN और फिजिकल PAN कार्ड के विकल्पों के बारे में मार्गदर्शन।",
        "आवेदन जमा करने से लेकर PAN जारी होने तक नियमित स्टेटस अपडेट।",
        "नया PAN प्राप्त होने के बाद उसे आधार से लिंक करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is New PAN Card?",
          a: "Getting a new Permanent Account Number (PAN) card, which is required for income tax and various financial transactions."
        },
        {
          q: "Who needs a new PAN card?",
          a: "Individuals who do not have a PAN and require one for income tax filing, KYC, banking, investments, employment, or other financial and official purposes may need a new PAN card."
        },
        {
          q: "What documents are required for New PAN Card?",
          a: "The key documents typically required are Aadhaar card, photograph, address proof, and date of birth proof. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for New PAN Card?",
          a: "The process involves submitting the required documents, filling out the PAN application form accurately, completing the applicable verification process, and tracking the application until the PAN is issued."
        },
        {
          q: "How long does New PAN Card take to process?",
          a: "The typical processing time is 10–15 working days for a physical PAN card. This can vary depending on document verification and processing timelines, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in New PAN Card?",
          a: "There is an official government or applicable PAN application fee, which is separate from the service facilitation charge. Since applicable fees may be revised periodically, the current amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my New PAN Card application is rejected or delayed?",
          a: "If an application is rejected or returned for correction, common reasons include mismatched details, unclear document copies, incorrect information, or incomplete forms. The application can usually be resubmitted after correcting the flagged issue."
        },
        {
          q: "How does Aarambh India help with New PAN Card?",
          a: "Aarambh India verifies that all documents are complete and correctly formatted, assists with accurately filling and submitting the application, and provides regular status updates over WhatsApp until the PAN application process is completed."
        }
      ],

      hi: [
        {
          q: "नया PAN कार्ड क्या है?",
          a: "नया Permanent Account Number (PAN) कार्ड बनवाना, जो आयकर और विभिन्न वित्तीय लेनदेन के लिए आवश्यक होता है।"
        },
        {
          q: "नया PAN कार्ड किसे बनवाना चाहिए?",
          a: "जिन व्यक्तियों के पास PAN नहीं है और उन्हें आयकर रिटर्न, KYC, बैंकिंग, निवेश, रोजगार या अन्य वित्तीय एवं आधिकारिक कार्यों के लिए PAN की आवश्यकता है, वे नया PAN कार्ड बनवा सकते हैं।"
        },
        {
          q: "नया PAN कार्ड बनवाने के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार कार्ड, फोटो, पते का प्रमाण और जन्म तिथि का प्रमाण आवश्यक होता है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "नया PAN कार्ड बनवाने की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक दस्तावेज जमा करना, PAN आवेदन फॉर्म सही तरीके से भरना, लागू सत्यापन प्रक्रिया पूरी करना और PAN जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "नया PAN कार्ड बनने में कितना समय लगता है?",
          a: "फिजिकल PAN कार्ड के लिए सामान्यतः 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन और प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "नया PAN कार्ड बनवाने के लिए कितने शुल्क लगते हैं?",
          a: "PAN आवेदन के लिए लागू सरकारी या संबंधित शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। लागू शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि नए PAN कार्ड का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या सुधार के लिए वापस होने के सामान्य कारणों में विवरण में अंतर, अस्पष्ट दस्तावेज, गलत जानकारी या अधूरा फॉर्म शामिल हैं। समस्या को ठीक करने के बाद आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India नया PAN कार्ड बनवाने में कैसे सहायता करता है?",
          a: "Aarambh India सभी दस्तावेजों की पूर्णता और सही फॉर्मेट की जांच करता है, आवेदन को सही तरीके से भरने और सबमिट करने में सहायता करता है तथा PAN आवेदन प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "pan-card-correction",
    image: pan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "PAN Card Correction",
      hi: "PAN कार्ड सुधार"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    price: {
      en: "₹249 onwards",
      hi: "₹249 से शुरू"
    },

    summary: {
      en: "Update your PAN Card with corrections to your name, date of birth, photograph, or signature — and get your updated PAN Card delivered to your doorstep.",
      hi: "अपने PAN कार्ड में नाम, जन्म तिथि, फोटो या हस्ताक्षर जैसी जानकारी में सुधार करवाएं और अपडेटेड PAN कार्ड घर बैठे प्राप्त करें।"
    },

    benefits: {
      en: [
        "Corrects errors in your name, date of birth, photograph, or signature on your existing PAN.",
        "Prevents downstream issues in banking and tax filing caused by mismatched PAN details.",
        "Guidance on the supporting proof required for each type of correction.",
        "Careful form-filling to avoid resubmission due to formatting errors.",
        "Doorstep delivery of your updated, corrected PAN card.",
        "Status tracking until the correction is approved and dispatched."
      ],

      hi: [
        "मौजूदा PAN कार्ड में नाम, जन्म तिथि, फोटो या हस्ताक्षर जैसी गलत जानकारी को सही करवाने में सहायता।",
        "PAN विवरण में अंतर के कारण बैंकिंग और टैक्स फाइलिंग में होने वाली समस्याओं से बचने में सहायता।",
        "प्रत्येक प्रकार के सुधार के लिए आवश्यक सहायक दस्तावेजों के बारे में मार्गदर्शन।",
        "फॉर्म भरते समय सही जानकारी और फॉर्मेट की सावधानीपूर्वक जांच, ताकि दोबारा आवेदन करने की आवश्यकता न पड़े।",
        "सुधार के बाद अपडेटेड PAN कार्ड घर तक पहुंचाने की सुविधा।",
        "सुधार स्वीकृत होने और PAN कार्ड डिस्पैच होने तक स्टेटस ट्रैकिंग।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is PAN Card Correction?",
          a: "PAN Card Correction is the process of correcting or updating details such as name, date of birth, photograph, signature, or other applicable information on an existing PAN card."
        },
        {
          q: "Who needs PAN Card Correction?",
          a: "Anyone whose PAN details are incorrect, outdated, or need to be updated for KYC, banking, income tax, investments, employment, or other official purposes may need PAN Card Correction."
        },
        {
          q: "What documents are required for PAN Card Correction?",
          a: "The key documents typically required are an existing PAN card copy, Aadhaar, and supporting proof for the requested correction. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for PAN Card Correction?",
          a: "The process involves submitting the required documents, filling out the relevant PAN correction application accurately, completing the applicable verification process, and tracking the application until the corrected PAN details are updated and the card is dispatched."
        },
        {
          q: "How long does PAN Card Correction take to process?",
          a: "The typical processing time is 10–15 working days. This can vary depending on document verification and the workload of the concerned department or portal, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in PAN Card Correction?",
          a: "There may be an official government or applicable PAN correction fee, which is separate from the service facilitation charge. Since applicable fees may be revised periodically, the current amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my PAN Card Correction application is rejected or delayed?",
          a: "If an application is rejected or returned for correction, common reasons may include mismatched details, unclear document copies, incorrect information, or incomplete forms. The issue can usually be corrected and the application resubmitted."
        },
        {
          q: "How does Aarambh India help with PAN Card Correction?",
          a: "Aarambh India verifies that the required documents are complete and correctly formatted, assists with accurately filling and submitting the correction application, and provides regular status updates over WhatsApp until the process is completed."
        }
      ],

      hi: [
        {
          q: "PAN कार्ड सुधार क्या है?",
          a: "PAN कार्ड में नाम, जन्म तिथि, फोटो, हस्ताक्षर या अन्य लागू जानकारी को सही या अपडेट करने की प्रक्रिया को PAN कार्ड सुधार कहा जाता है।"
        },
        {
          q: "PAN कार्ड सुधार किसे करवाना चाहिए?",
          a: "जिनके PAN विवरण गलत हैं, पुराने हैं या KYC, बैंकिंग, आयकर, निवेश, रोजगार या अन्य आधिकारिक कार्यों के लिए अपडेट करने की आवश्यकता है, वे PAN कार्ड सुधार करवा सकते हैं।"
        },
        {
          q: "PAN कार्ड सुधार के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः मौजूदा PAN कार्ड की कॉपी, आधार और किए जाने वाले सुधार से संबंधित सहायक प्रमाण की आवश्यकता होती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "PAN कार्ड सुधार की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक दस्तावेज जमा करना, PAN correction application को सही तरीके से भरना, लागू सत्यापन प्रक्रिया पूरी करना और अपडेटेड PAN विवरण एवं कार्ड के डिस्पैच होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "PAN कार्ड सुधार होने में कितना समय लगता है?",
          a: "सामान्यतः PAN कार्ड सुधार की प्रक्रिया में 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन और संबंधित विभाग या पोर्टल के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "PAN कार्ड सुधार के लिए कितने शुल्क लगते हैं?",
          a: "PAN correction के लिए लागू सरकारी या संबंधित शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। लागू शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि PAN कार्ड सुधार का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या सुधार के लिए वापस होने के सामान्य कारणों में विवरण में अंतर, अस्पष्ट दस्तावेज, गलत जानकारी या अधूरा फॉर्म शामिल हो सकते हैं। समस्या को ठीक करने के बाद आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India PAN कार्ड सुधार में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की पूर्णता और सही फॉर्मेट की जांच करता है, correction application को सही तरीके से भरने और जमा करने में सहायता करता है तथा प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "reprint-pan",
    image: pan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Reprint PAN",
      hi: "PAN कार्ड रीप्रिंट"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    price: {
      en: "₹149 onwards",
      hi: "₹149 से शुरू"
    },

    summary: {
      en: "Lost or damaged your PAN Card? Get a reprinted PAN Card with the same details, delivered conveniently to your doorstep.",
      hi: "PAN कार्ड खो गया है या खराब हो गया है? वही PAN विवरण रखते हुए नया प्रिंटेड PAN कार्ड घर बैठे प्राप्त करें।"
    },

    benefits: {
      en: [
        "Issues a duplicate PAN card with your existing, unchanged PAN details.",
        "Useful when your original card is lost, stolen, or physically damaged.",
        "No need to reapply from scratch or repeat the full verification process.",
        "Assistance verifying your existing PAN number and registered details before applying.",
        "Doorstep delivery of the reprinted card.",
        "Status tracking from application to dispatch."
      ],

      hi: [
        "आपके मौजूदा और अपरिवर्तित PAN विवरण के साथ डुप्लीकेट PAN कार्ड प्राप्त करने में सहायता।",
        "मूल PAN कार्ड खो जाने, चोरी हो जाने या खराब हो जाने की स्थिति में उपयोगी।",
        "शुरुआत से नया PAN आवेदन करने या पूरी सत्यापन प्रक्रिया दोबारा करने की आवश्यकता नहीं।",
        "आवेदन से पहले मौजूदा PAN नंबर और रजिस्टर्ड विवरण की जांच में सहायता।",
        "रीप्रिंट किए गए PAN कार्ड की घर तक डिलीवरी।",
        "आवेदन से लेकर कार्ड डिस्पैच होने तक स्टेटस ट्रैकिंग।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Reprint PAN?",
          a: "Reprint PAN is the process of getting a physical reprint of an existing PAN card when the original card is lost, damaged, or needs to be replaced without changing the PAN details."
        },
        {
          q: "Who needs Reprint PAN?",
          a: "PAN holders who have lost, damaged, or misplaced their physical PAN card and need a replacement card with the same PAN details may apply for a PAN reprint."
        },
        {
          q: "What documents are required for Reprint PAN?",
          a: "The key details typically required are your existing PAN number, Aadhaar-linked or registered mobile number, and address details where applicable. Original documents are usually not required upfront; clear scanned or photographed copies may be sufficient where supporting documents are requested."
        },
        {
          q: "What is the process for Reprint PAN?",
          a: "The process involves verifying your existing PAN details, submitting the required information, completing the applicable verification process, and tracking the request until the reprinted PAN card is dispatched and delivered."
        },
        {
          q: "How long does Reprint PAN take to process?",
          a: "The typical processing and delivery time is around 10–15 working days. This can vary depending on verification, printing, dispatch, and delivery timelines, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Reprint PAN?",
          a: "There may be an official government or applicable PAN reprint fee, which is separate from the service facilitation charge. Since applicable fees may be revised periodically, the current amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Reprint PAN application is rejected or delayed?",
          a: "If a reprint request is rejected or delayed, common reasons may include incorrect PAN details, verification issues, incomplete information, or delivery-related problems. The issue can usually be reviewed and the request may be resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Reprint PAN?",
          a: "Aarambh India verifies the existing PAN details, assists with accurately submitting the reprint request, and provides regular status updates over WhatsApp until the reprinted PAN card is delivered."
        }
      ],

      hi: [
        {
          q: "PAN कार्ड रीप्रिंट क्या है?",
          a: "PAN कार्ड रीप्रिंट मौजूदा PAN कार्ड का दोबारा फिजिकल प्रिंट प्राप्त करने की प्रक्रिया है, जब मूल कार्ड खो गया हो, खराब हो गया हो या उसे बदलने की आवश्यकता हो, जबकि PAN विवरण वही रहते हैं।"
        },
        {
          q: "PAN कार्ड रीप्रिंट किसे करवाना चाहिए?",
          a: "जिन PAN धारकों का फिजिकल PAN कार्ड खो गया है, खराब हो गया है या कहीं रखकर भूल गए हैं और उन्हें उसी PAN विवरण के साथ नया कार्ड चाहिए, वे PAN रीप्रिंट के लिए आवेदन कर सकते हैं।"
        },
        {
          q: "PAN कार्ड रीप्रिंट के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः मौजूदा PAN नंबर, आधार से लिंक या रजिस्टर्ड मोबाइल नंबर और जहां लागू हो वहां पते से संबंधित विवरण की आवश्यकता होती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; जहां सहायक दस्तावेज मांगे जाएं, वहां स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "PAN कार्ड रीप्रिंट की प्रक्रिया क्या है?",
          a: "प्रक्रिया में मौजूदा PAN विवरण का सत्यापन करना, आवश्यक जानकारी जमा करना, लागू सत्यापन प्रक्रिया पूरी करना और रीप्रिंट किए गए PAN कार्ड के डिस्पैच एवं डिलीवरी तक अनुरोध का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "PAN कार्ड रीप्रिंट होने में कितना समय लगता है?",
          a: "सामान्यतः प्रोसेसिंग और डिलीवरी में लगभग 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय सत्यापन, प्रिंटिंग, डिस्पैच और डिलीवरी पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "PAN कार्ड रीप्रिंट के लिए कितने शुल्क लगते हैं?",
          a: "PAN रीप्रिंट के लिए लागू सरकारी या संबंधित शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। लागू शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि PAN रीप्रिंट का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "रीप्रिंट अनुरोध अस्वीकार या विलंबित होने के सामान्य कारणों में गलत PAN विवरण, सत्यापन संबंधी समस्या, अधूरी जानकारी या डिलीवरी संबंधी समस्या शामिल हो सकती है। समस्या की जांच करके आवश्यकता अनुसार अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India PAN कार्ड रीप्रिंट में कैसे सहायता करता है?",
          a: "Aarambh India मौजूदा PAN विवरणों की जांच करता है, रीप्रिंट अनुरोध को सही तरीके से जमा करने में सहायता करता है और रीप्रिंट किया गया PAN कार्ड प्राप्त होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "new-voter-card",
    image: voter,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "New Voter Card",
      hi: "नया वोटर कार्ड"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    price: {
      en: "₹149 onwards",
      hi: "₹149 से शुरू"
    },

    summary: {
      en: "Turned 18? Apply for your new EPIC (Voter ID) Card and exercise your right to vote.",
      hi: "18 वर्ष की आयु पूरी हो गई है? अपना नया EPIC (Voter ID) कार्ड बनवाएं और मतदान के अपने अधिकार का प्रयोग करें।"
    },

    benefits: {
      en: [
        "Enables first-time voters aged 18 and above to register and exercise their right to vote.",
        "Guidance on age and residency eligibility before applying.",
        "Careful form-filling (Form 6) to avoid common rejection reasons.",
        "Assistance gathering the correct age and address proof documents.",
        "Support tracking your application status with the Electoral Registration Office.",
        "Confirmation once your name appears in the electoral roll."
      ],

      hi: [
        "18 वर्ष या उससे अधिक आयु के पहली बार मतदाताओं को पंजीकरण कराने और मतदान के अपने अधिकार का प्रयोग करने में सहायता।",
        "आवेदन करने से पहले आयु और निवास संबंधी पात्रता के बारे में मार्गदर्शन।",
        "सामान्य अस्वीकृति के कारणों से बचने के लिए Form 6 को सावधानीपूर्वक भरने में सहायता।",
        "सही आयु प्रमाण और पते के प्रमाण दस्तावेज एकत्र करने में सहायता।",
        "Electoral Registration Office के साथ आवेदन का स्टेटस ट्रैक करने में सहायता।",
        "मतदाता सूची में आपका नाम दर्ज होने के बाद पुष्टि।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is New Voter Card?",
          a: "A new Voter ID (EPIC) card for eligible citizens, allowing them to register as voters and vote in elections."
        },
        {
          q: "Who needs a new voter card?",
          a: "Eligible Indian citizens who have reached the required voting age and are not already registered as voters may apply for a new Voter ID card."
        },
        {
          q: "What documents are required for New Voter Card?",
          a: "The key documents typically required are age or date-of-birth proof, address proof, and a passport-size photograph. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for New Voter Card?",
          a: "The process involves checking eligibility, submitting the required documents, filling and submitting Form 6, completing the applicable verification process, and tracking the application until voter registration is approved."
        },
        {
          q: "How long does New Voter Card take to process?",
          a: "The typical processing time is around 3–4 weeks after the Form 6 process. This can vary depending on document verification, field verification where applicable, and the workload of the concerned electoral office, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in New Voter Card?",
          a: "The applicable government voter registration service is generally not charged a separate government application fee, while the service facilitation charge is separate. Any applicable charges are shared with the client before proceeding."
        },
        {
          q: "What happens if my New Voter Card application is rejected or delayed?",
          a: "If an application is rejected or delayed, common reasons may include incorrect details, insufficient documents, unclear document copies, eligibility issues, or verification delays. The issue can be reviewed and the application may be corrected or resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with New Voter Card?",
          a: "Aarambh India verifies the required details and documents, assists with accurately filling and submitting Form 6, and provides regular status updates over WhatsApp until the voter registration process is completed."
        }
      ],

      hi: [
        {
          q: "नया वोटर कार्ड क्या है?",
          a: "पात्र नागरिकों के लिए नया Voter ID (EPIC) कार्ड, जिसके माध्यम से वे मतदाता के रूप में पंजीकरण कराकर चुनाव में मतदान कर सकते हैं।"
        },
        {
          q: "नया वोटर कार्ड किसे बनवाना चाहिए?",
          a: "वे पात्र भारतीय नागरिक जिन्होंने निर्धारित मतदान आयु पूरी कर ली है और अभी तक मतदाता के रूप में पंजीकृत नहीं हैं, नया वोटर ID कार्ड बनवा सकते हैं।"
        },
        {
          q: "नया वोटर कार्ड बनवाने के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आयु या जन्म तिथि का प्रमाण, पते का प्रमाण और पासपोर्ट साइज फोटो आवश्यक होते हैं। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "नया वोटर कार्ड बनवाने की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच करना, आवश्यक दस्तावेज जमा करना, Form 6 को सही तरीके से भरकर जमा करना, लागू सत्यापन प्रक्रिया पूरी करना और मतदाता पंजीकरण स्वीकृत होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "नया वोटर कार्ड बनने में कितना समय लगता है?",
          a: "Form 6 की प्रक्रिया के बाद सामान्यतः लगभग 3–4 सप्ताह लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, जहां लागू हो वहां फील्ड वेरिफिकेशन और संबंधित चुनाव कार्यालय के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "नया वोटर कार्ड बनवाने के लिए कितने शुल्क लगते हैं?",
          a: "मतदाता पंजीकरण की लागू सरकारी सेवा के लिए सामान्यतः अलग से सरकारी आवेदन शुल्क नहीं होता, जबकि सेवा सुविधा शुल्क अलग हो सकता है। यदि कोई लागू शुल्क हो, तो प्रक्रिया शुरू करने से पहले उसकी जानकारी दी जाती है।"
        },
        {
          q: "यदि नए वोटर कार्ड का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के सामान्य कारणों में गलत विवरण, अपर्याप्त दस्तावेज, अस्पष्ट दस्तावेजों की कॉपी, पात्रता संबंधी समस्या या सत्यापन में देरी शामिल हो सकती है। समस्या की जांच करके आवश्यकता अनुसार आवेदन में सुधार या दोबारा आवेदन किया जा सकता है।"
        },
        {
          q: "Aarambh India नया वोटर कार्ड बनवाने में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक विवरण और दस्तावेजों की जांच करता है, Form 6 को सही तरीके से भरने और जमा करने में सहायता करता है तथा मतदाता पंजीकरण प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "voter-card-correction",
    image: voter,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Voter Card Correction",
      hi: "वोटर कार्ड सुधार"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    price: {
      en: "₹149 onwards",
      hi: "₹149 से शुरू"
    },

    summary: {
      en: "Incorrect name, address, or photo on your Voter ID? Get it corrected through Form 8 and keep your voter details updated.",
      hi: "Voter ID में नाम, पता या फोटो गलत है? Form 8 के माध्यम से सुधार करवाएं और अपने मतदाता विवरण को अपडेट रखें।"
    },

    benefits: {
      en: [
        "Corrects inaccurate name, address, or photograph on your existing Voter ID.",
        "Ensures your voter details match your current Aadhaar and address records.",
        "Filed correctly through Form 8, avoiding common documentation errors.",
        "Guidance on the proof required to support each type of correction.",
        "Prevents issues at the polling booth caused by mismatched or outdated details.",
        "Status updates until the corrected Voter ID is issued."
      ],

      hi: [
        "मौजूदा Voter ID में गलत नाम, पता या फोटो को सही करवाने में सहायता।",
        "यह सुनिश्चित करने में सहायता कि आपके मतदाता विवरण वर्तमान आधार और पते के रिकॉर्ड से मेल खाते हों।",
        "सामान्य दस्तावेजी गलतियों से बचने के लिए Form 8 के माध्यम से सही तरीके से आवेदन करने में सहायता।",
        "प्रत्येक प्रकार के सुधार के लिए आवश्यक प्रमाण दस्तावेजों के बारे में मार्गदर्शन।",
        "गलत या पुराने विवरण के कारण मतदान केंद्र पर होने वाली समस्याओं से बचने में सहायता।",
        "सुधारित Voter ID जारी होने तक नियमित स्टेटस अपडेट।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Voter Card Correction?",
          a: "Voter Card Correction is the process of correcting or updating details such as name, address, photograph, or date of birth in an existing Voter ID card."
        },
        {
          q: "Who needs Voter Card Correction?",
          a: "Voters whose name, address, photograph, date of birth, or other voter details are incorrect or need to be updated may apply for Voter Card Correction."
        },
        {
          q: "What documents are required for Voter Card Correction?",
          a: "The key documents typically required are an existing Voter ID, proof supporting the requested correction, and address or age proof where applicable. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Voter Card Correction?",
          a: "The process involves identifying the required correction, submitting the supporting documents, filling and submitting Form 8 accurately, completing the applicable verification process, and tracking the application until the correction is approved."
        },
        {
          q: "How long does Voter Card Correction take to process?",
          a: "The processing time can vary depending on verification and the concerned electoral office. Some requests may be processed quickly, while others may take longer, so the actual timeline should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Voter Card Correction?",
          a: "The applicable government voter service is generally not charged a separate government application fee, while the service facilitation charge is separate. Any applicable charges are shared with the client before proceeding."
        },
        {
          q: "What happens if my Voter Card Correction application is rejected or delayed?",
          a: "If an application is rejected or delayed, common reasons may include mismatched details, insufficient or unclear documents, incorrect information, or verification issues. The issue can usually be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Voter Card Correction?",
          a: "Aarambh India verifies the required details and supporting documents, assists with accurately filling and submitting Form 8, and provides regular status updates over WhatsApp until the correction process is completed."
        }
      ],

      hi: [
        {
          q: "वोटर कार्ड सुधार क्या है?",
          a: "मौजूदा Voter ID कार्ड में नाम, पता, फोटो या जन्म तिथि जैसी जानकारी को सही या अपडेट करने की प्रक्रिया को वोटर कार्ड सुधार कहा जाता है।"
        },
        {
          q: "वोटर कार्ड सुधार किसे करवाना चाहिए?",
          a: "जिन मतदाताओं के नाम, पते, फोटो, जन्म तिथि या अन्य मतदाता विवरण में गलती है या जिन्हें अपडेट करने की आवश्यकता है, वे वोटर कार्ड सुधार के लिए आवेदन कर सकते हैं।"
        },
        {
          q: "वोटर कार्ड सुधार के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः मौजूदा Voter ID, किए जाने वाले सुधार से संबंधित प्रमाण और जहां लागू हो वहां पते या आयु का प्रमाण आवश्यक होता है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "वोटर कार्ड सुधार की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक सुधार की पहचान करना, संबंधित प्रमाण दस्तावेज जमा करना, Form 8 को सही तरीके से भरकर जमा करना, लागू सत्यापन प्रक्रिया पूरी करना और सुधार स्वीकृत होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "वोटर कार्ड सुधार होने में कितना समय लगता है?",
          a: "प्रोसेसिंग का समय सत्यापन और संबंधित चुनाव कार्यालय पर निर्भर करता है। कुछ अनुरोध जल्दी पूरे हो सकते हैं, जबकि अन्य में अधिक समय लग सकता है, इसलिए वास्तविक समय को अनुमानित माना जाना चाहिए।"
        },
        {
          q: "वोटर कार्ड सुधार के लिए कितने शुल्क लगते हैं?",
          a: "लागू सरकारी वोटर सेवा के लिए सामान्यतः अलग से सरकारी आवेदन शुल्क नहीं होता, जबकि सेवा सुविधा शुल्क अलग हो सकता है। यदि कोई लागू शुल्क हो, तो प्रक्रिया शुरू करने से पहले उसकी जानकारी दी जाती है।"
        },
        {
          q: "यदि वोटर कार्ड सुधार का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के सामान्य कारणों में विवरण में अंतर, अपर्याप्त या अस्पष्ट दस्तावेज, गलत जानकारी या सत्यापन संबंधी समस्या शामिल हो सकती है। समस्या को ठीक करने के बाद आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India वोटर कार्ड सुधार में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक विवरण और सहायक दस्तावेजों की जांच करता है, Form 8 को सही तरीके से भरने और जमा करने में सहायता करता है तथा सुधार प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "apaar-id",
    image: apaar,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "APAAR ID",
      hi: "APAAR ID"
    },

    category: {
      en: "Identity",
      hi: "पहचान"
    },

    tag: {
      en: "New",
      hi: "नया"
    },

    price: {
      en: "₹99 onwards",
      hi: "₹99 से शुरू"
    },

    summary: {
      en: "Get your APAAR ID — the “One Nation, One Student ID” that helps you securely manage and access your academic records digitally in one place.",
      hi: "अपना APAAR ID प्राप्त करें — “One Nation, One Student ID” के तहत एक डिजिटल छात्र ID, जो आपके शैक्षणिक रिकॉर्ड को सुरक्षित रूप से एक ही स्थान पर मैनेज और एक्सेस करने में सहायता करती है।"
    },

    benefits: {
      en: [
        "Creates a single, permanent academic ID (APAAR) linked to your Aadhaar under the \"One Nation, One Student ID\" initiative.",
        "Consolidates your academic records, marksheets, and credits in one secure digital repository.",
        "Simplifies transfers between schools, colleges, and institutions with verified digital records.",
        "Guidance on parental or institutional consent requirements for minors.",
        "Assistance with the linking process through your school or education portal.",
        "Support resolving any Aadhaar or student-detail mismatch during registration."
      ],

      hi: [
        "\"One Nation, One Student ID\" पहल के तहत आधार से लिंक एक स्थायी शैक्षणिक ID (APAAR) बनाने में सहायता।",
        "शैक्षणिक रिकॉर्ड, मार्कशीट और क्रेडिट को एक सुरक्षित डिजिटल रिपॉजिटरी में व्यवस्थित रखने में सहायता।",
        "सत्यापित डिजिटल रिकॉर्ड के माध्यम से स्कूल, कॉलेज और अन्य शैक्षणिक संस्थानों के बीच ट्रांसफर प्रक्रिया को आसान बनाने में सहायता।",
        "नाबालिग छात्रों के लिए माता-पिता या संस्थान की सहमति से संबंधित आवश्यकताओं के बारे में मार्गदर्शन।",
        "स्कूल या संबंधित शिक्षा पोर्टल के माध्यम से APAAR ID लिंक करने की प्रक्रिया में सहायता।",
        "रजिस्ट्रेशन के दौरान आधार या छात्र विवरण में किसी भी तरह के अंतर को ठीक करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is APAAR ID?",
          a: "APAAR stands for Automated Permanent Academic Account Registry. It is a unique student ID designed to digitally maintain and manage a student's academic records and achievements."
        },
        {
          q: "Who needs APAAR ID?",
          a: "Students enrolled in schools, colleges, or other eligible educational institutions may need an APAAR ID to digitally manage and access their academic records and credits."
        },
        {
          q: "What documents are required for APAAR ID?",
          a: "The key details typically required are Aadhaar details, school or college enrollment information, and parent or guardian consent where applicable for minors. Original documents are usually not required upfront; clear copies or digital records may be sufficient where supporting documents are requested."
        },
        {
          q: "What is the process for APAAR ID?",
          a: "The process generally involves verifying the student's details, providing the required Aadhaar and educational information, completing the applicable consent or verification process, and tracking the request until the APAAR ID is generated."
        },
        {
          q: "How long does APAAR ID take to process?",
          a: "The typical processing time is around 5–10 working days. This can vary depending on student-detail verification, institutional processing, and portal timelines, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in APAAR ID?",
          a: "APAAR ID is a government education initiative and any applicable official charges, if introduced, are separate from the service facilitation charge. The current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my APAAR ID application is rejected or delayed?",
          a: "If the APAAR ID request is rejected or delayed, common reasons may include mismatched Aadhaar details, incorrect student information, incomplete records, consent issues, or institutional verification delays. The issue can usually be corrected and the request processed again where applicable."
        },
        {
          q: "How does Aarambh India help with APAAR ID?",
          a: "Aarambh India verifies the required student details and documents, assists with the APAAR ID registration or linking process, helps resolve common information mismatches, and provides regular status updates over WhatsApp until the process is completed."
        }
      ],

      hi: [
        {
          q: "APAAR ID क्या है?",
          a: "APAAR का पूरा नाम Automated Permanent Academic Account Registry है। यह छात्रों के शैक्षणिक रिकॉर्ड और उपलब्धियों को डिजिटल रूप से सुरक्षित रखने और मैनेज करने के लिए बनाई गई एक विशिष्ट छात्र ID है।"
        },
        {
          q: "APAAR ID किसे बनवानी चाहिए?",
          a: "स्कूल, कॉलेज या अन्य पात्र शैक्षणिक संस्थानों में पढ़ने वाले छात्रों को अपने शैक्षणिक रिकॉर्ड और क्रेडिट को डिजिटल रूप से मैनेज और एक्सेस करने के लिए APAAR ID की आवश्यकता हो सकती है।"
        },
        {
          q: "APAAR ID के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार विवरण, स्कूल या कॉलेज में नामांकन संबंधी जानकारी और नाबालिग छात्रों के लिए जहां लागू हो वहां माता-पिता या अभिभावक की सहमति आवश्यक हो सकती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; जहां सहायक दस्तावेज मांगे जाएं, वहां स्पष्ट कॉपी या डिजिटल रिकॉर्ड पर्याप्त हो सकते हैं।"
        },
        {
          q: "APAAR ID बनाने की प्रक्रिया क्या है?",
          a: "प्रक्रिया में छात्र के विवरण का सत्यापन करना, आवश्यक आधार और शैक्षणिक जानकारी प्रदान करना, लागू सहमति या सत्यापन प्रक्रिया पूरी करना और APAAR ID जनरेट होने तक अनुरोध का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "APAAR ID बनने में कितना समय लगता है?",
          a: "सामान्यतः APAAR ID की प्रक्रिया में लगभग 5–10 कार्य दिवस लग सकते हैं। वास्तविक समय छात्र विवरण के सत्यापन, संस्थान की प्रक्रिया और पोर्टल की प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "APAAR ID बनवाने के लिए कितने शुल्क लगते हैं?",
          a: "APAAR ID एक सरकारी शैक्षणिक पहल है और यदि कोई आधिकारिक शुल्क लागू होता है, तो वह सेवा सुविधा शुल्क से अलग होगा। प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि APAAR ID का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "APAAR ID अनुरोध अस्वीकार या विलंबित होने के सामान्य कारणों में आधार विवरण में अंतर, गलत छात्र जानकारी, अधूरे रिकॉर्ड, सहमति संबंधी समस्या या संस्थागत सत्यापन में देरी शामिल हो सकती है। समस्या को ठीक करने के बाद अनुरोध को दोबारा प्रोसेस किया जा सकता है।"
        },
        {
          q: "Aarambh India APAAR ID बनवाने में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक छात्र विवरण और दस्तावेजों की जांच करता है, APAAR ID रजिस्ट्रेशन या लिंकिंग प्रक्रिया में सहायता करता है, सामान्य जानकारी संबंधी समस्याओं को ठीक करने में मदद करता है और प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "caste-certificate-haryana",
    image: caste,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Caste Certificate – Haryana",
      hi: "जाति प्रमाण पत्र – हरियाणा"
    },

    category: {
      en: "Certificates",
      hi: "प्रमाण पत्र"
    },

    price: {
      en: "₹299 onwards",
      hi: "₹299 से शुरू"
    },

    summary: {
      en: "Get your Haryana Caste Certificate — an essential document for availing reservation benefits, scholarships, government jobs, and other eligible government schemes.",
      hi: "हरियाणा जाति प्रमाण पत्र बनवाएं — आरक्षण लाभ, छात्रवृत्ति, सरकारी नौकरी और अन्य पात्र सरकारी योजनाओं का लाभ लेने के लिए एक आवश्यक दस्तावेज।"
    },

    benefits: {
      en: [
        "Official proof of caste category, required for reservation benefits, scholarships, and government job applications in Haryana.",
        "Guidance on the correct category and supporting documents applicable to your case.",
        "Careful, error-free form submission on the Haryana government portal.",
        "Assistance if additional verification, such as a Tehsildar enquiry, is required.",
        "Regular status updates until the certificate is approved and issued.",
        "Support obtaining a certified copy or reprint if needed later."
      ],

      hi: [
        "जाति श्रेणी के आधिकारिक प्रमाण के रूप में उपयोगी, जो हरियाणा में आरक्षण लाभ, छात्रवृत्ति और सरकारी नौकरी के आवेदन के लिए आवश्यक हो सकता है।",
        "आपकी स्थिति के अनुसार सही जाति श्रेणी और आवश्यक सहायक दस्तावेजों के बारे में मार्गदर्शन।",
        "हरियाणा सरकार के पोर्टल पर फॉर्म को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "जहां अतिरिक्त सत्यापन, जैसे तहसीलदार जांच, आवश्यक हो वहां सहायता।",
        "प्रमाण पत्र स्वीकृत और जारी होने तक नियमित स्टेटस अपडेट।",
        "बाद में आवश्यकता होने पर प्रमाणित कॉपी या रीप्रिंट प्राप्त करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Caste Certificate – Haryana?",
          a: "A Haryana Caste Certificate is an official document used to certify a person's caste category and may be required for reservation benefits, education, employment, scholarships, and eligible government schemes."
        },
        {
          q: "Who needs Caste Certificate – Haryana?",
          a: "Residents of Haryana who need to establish their caste category for education, employment, reservation benefits, scholarships, or eligibility under applicable government schemes may need a caste certificate."
        },
        {
          q: "What documents are required for Caste Certificate – Haryana?",
          a: "The key documents typically required are Aadhaar, Haryana domicile or residence proof, ration card where applicable, and family caste proof if available. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Caste Certificate – Haryana?",
          a: "The process involves verifying eligibility, submitting the required documents, filling and submitting the relevant application form, completing any required verification, and tracking the application until the certificate is approved and issued."
        },
        {
          q: "How long does Caste Certificate – Haryana take to process?",
          a: "The typical processing time is around 15–21 working days. This can vary depending on document verification, field or departmental enquiry where applicable, and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Caste Certificate – Haryana?",
          a: "There may be an applicable government or departmental fee, which is separate from the service facilitation charge. Since government charges may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Caste Certificate – Haryana application is rejected or delayed?",
          a: "Applications may be rejected or delayed due to insufficient residence or caste proof, missing family records, incorrect information, or discrepancies between submitted documents. The issue can usually be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Caste Certificate – Haryana?",
          a: "Aarambh India verifies the required documents, assists with accurately filling and submitting the application, helps with applicable verification requirements, and provides regular status updates over WhatsApp until the certificate is issued."
        }
      ],

      hi: [
        {
          q: "जाति प्रमाण पत्र – हरियाणा क्या है?",
          a: "हरियाणा जाति प्रमाण पत्र एक आधिकारिक दस्तावेज है, जो व्यक्ति की जाति श्रेणी को प्रमाणित करता है और आरक्षण, शिक्षा, रोजगार, छात्रवृत्ति तथा पात्र सरकारी योजनाओं के लिए आवश्यक हो सकता है।"
        },
        {
          q: "जाति प्रमाण पत्र – हरियाणा किसे बनवाना चाहिए?",
          a: "हरियाणा के वे निवासी जिन्हें शिक्षा, रोजगार, आरक्षण लाभ, छात्रवृत्ति या लागू सरकारी योजनाओं के लिए अपनी जाति श्रेणी प्रमाणित करने की आवश्यकता है, वे जाति प्रमाण पत्र बनवा सकते हैं।"
        },
        {
          q: "जाति प्रमाण पत्र – हरियाणा के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार, हरियाणा का निवास या डोमिसाइल प्रमाण, जहां लागू हो वहां राशन कार्ड और उपलब्ध होने पर परिवार का जाति प्रमाण आवश्यक हो सकता है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "जाति प्रमाण पत्र – हरियाणा की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच करना, आवश्यक दस्तावेज जमा करना, संबंधित आवेदन फॉर्म को सही तरीके से भरकर जमा करना, आवश्यक सत्यापन पूरा करना और प्रमाण पत्र स्वीकृत एवं जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "जाति प्रमाण पत्र – हरियाणा बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 15–21 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, जहां लागू हो वहां फील्ड या विभागीय जांच और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "जाति प्रमाण पत्र – हरियाणा के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या विभागीय शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि जाति प्रमाण पत्र – हरियाणा का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के कारणों में अपर्याप्त निवास या जाति प्रमाण, परिवार से संबंधित रिकॉर्ड की कमी, गलत जानकारी या जमा किए गए दस्तावेजों में अंतर शामिल हो सकता है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India जाति प्रमाण पत्र – हरियाणा में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की जांच करता है, आवेदन को सही तरीके से भरने और जमा करने में सहायता करता है, लागू सत्यापन प्रक्रिया में मार्गदर्शन देता है तथा प्रमाण पत्र जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "caste-certificate-maharashtra",
    image: caste,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Caste Certificate – Maharashtra",
      hi: "जाति प्रमाण पत्र – महाराष्ट्र"
    },

    category: {
      en: "Certificates",
      hi: "प्रमाण पत्र"
    },

    price: {
      en: "₹499 onwards",
      hi: "₹499 से शुरू"
    },

    summary: {
      en: "Get your Maharashtra Caste Certificate — processed through the official Aaple Sarkar portal.",
      hi: "महाराष्ट्र जाति प्रमाण पत्र बनवाएं — आधिकारिक Aaple Sarkar पोर्टल के माध्यम से प्रक्रिया पूरी की जाती है।"
    },

    benefits: {
      en: [
        "Official caste certificate processed through the Aaple Sarkar portal, useful for scholarships, reservations, and government employment in Maharashtra.",
        "Guidance on the eligible category and the specific documents required for your application.",
        "Careful and accurate form submission to help avoid rejection or field-level enquiry delays.",
        "Assistance coordinating with the concerned Sub-Divisional Officer, if required.",
        "Regular status tracking until the certificate is issued.",
        "Support obtaining a duplicate copy if the original certificate is lost."
      ],

      hi: [
        "Aaple Sarkar पोर्टल के माध्यम से आधिकारिक जाति प्रमाण पत्र बनवाने में सहायता, जो महाराष्ट्र में छात्रवृत्ति, आरक्षण और सरकारी रोजगार के लिए उपयोगी हो सकता है।",
        "पात्र जाति श्रेणी और आपके आवेदन के लिए आवश्यक विशेष दस्तावेजों के बारे में मार्गदर्शन।",
        "आवेदन अस्वीकृति या फील्ड-स्तरीय जांच में होने वाली देरी से बचने के लिए फॉर्म को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "जहां आवश्यक हो, संबंधित Sub-Divisional Officer के साथ आवश्यक प्रक्रिया में सहायता।",
        "प्रमाण पत्र जारी होने तक नियमित स्टेटस ट्रैकिंग।",
        "मूल प्रमाण पत्र खो जाने की स्थिति में डुप्लीकेट कॉपी प्राप्त करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Caste Certificate – Maharashtra?",
          a: "A Maharashtra Caste Certificate is an official document used to establish a person's caste category and may be required for education, employment, scholarships, reservation benefits, and eligible government schemes."
        },
        {
          q: "Who needs Caste Certificate – Maharashtra?",
          a: "Residents of Maharashtra who need to establish their caste category for education, employment, reservation benefits, scholarships, or eligibility under applicable government schemes may need a caste certificate."
        },
        {
          q: "What documents are required for Caste Certificate – Maharashtra?",
          a: "The key documents typically required are Aadhaar, school leaving certificate, Maharashtra domicile or residence proof, and family caste records where available. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Caste Certificate – Maharashtra?",
          a: "The process involves verifying eligibility, submitting the required documents through the applicable process on the Aaple Sarkar portal, completing the relevant application and verification requirements, and tracking the application until the certificate is approved and issued."
        },
        {
          q: "How long does Caste Certificate – Maharashtra take to process?",
          a: "The typical processing time is around 21–30 working days. This can vary depending on document verification, field-level enquiry where applicable, and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Caste Certificate – Maharashtra?",
          a: "There may be an applicable government or departmental fee, which is separate from the service facilitation charge. Since government charges may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Caste Certificate – Maharashtra application is rejected or delayed?",
          a: "Applications may be rejected or delayed due to insufficient residence or caste proof, missing family records, incorrect information, or discrepancies between submitted documents. The issue can usually be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Caste Certificate – Maharashtra?",
          a: "Aarambh India verifies the required documents, assists with accurately filling and submitting the application, provides guidance during applicable verification, and gives regular status updates over WhatsApp until the certificate is issued."
        }
      ],

      hi: [
        {
          q: "जाति प्रमाण पत्र – महाराष्ट्र क्या है?",
          a: "महाराष्ट्र जाति प्रमाण पत्र एक आधिकारिक दस्तावेज है, जो व्यक्ति की जाति श्रेणी को प्रमाणित करता है और शिक्षा, रोजगार, छात्रवृत्ति, आरक्षण लाभ तथा पात्र सरकारी योजनाओं के लिए आवश्यक हो सकता है।"
        },
        {
          q: "जाति प्रमाण पत्र – महाराष्ट्र किसे बनवाना चाहिए?",
          a: "महाराष्ट्र के वे निवासी जिन्हें शिक्षा, रोजगार, आरक्षण लाभ, छात्रवृत्ति या लागू सरकारी योजनाओं के लिए अपनी जाति श्रेणी प्रमाणित करने की आवश्यकता है, वे जाति प्रमाण पत्र बनवा सकते हैं।"
        },
        {
          q: "जाति प्रमाण पत्र – महाराष्ट्र के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार, स्कूल लीविंग सर्टिफिकेट, महाराष्ट्र का डोमिसाइल या निवास प्रमाण और उपलब्ध होने पर परिवार का जाति रिकॉर्ड आवश्यक हो सकता है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "जाति प्रमाण पत्र – महाराष्ट्र की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच करना, Aaple Sarkar पोर्टल पर लागू प्रक्रिया के माध्यम से आवश्यक दस्तावेज जमा करना, संबंधित आवेदन और सत्यापन प्रक्रिया पूरी करना तथा प्रमाण पत्र स्वीकृत और जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "जाति प्रमाण पत्र – महाराष्ट्र बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 21–30 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, जहां लागू हो वहां फील्ड-स्तरीय जांच और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "जाति प्रमाण पत्र – महाराष्ट्र के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या विभागीय शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि जाति प्रमाण पत्र – महाराष्ट्र का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के कारणों में अपर्याप्त निवास या जाति प्रमाण, परिवार से संबंधित रिकॉर्ड की कमी, गलत जानकारी या जमा किए गए दस्तावेजों में अंतर शामिल हो सकता है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India जाति प्रमाण पत्र – महाराष्ट्र में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की जांच करता है, आवेदन को सही तरीके से भरने और जमा करने में सहायता करता है, लागू सत्यापन प्रक्रिया में मार्गदर्शन देता है तथा प्रमाण पत्र जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "domicile-certificate-maharashtra",
    image: domicile,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Domicile Certificate – Maharashtra",
      hi: "अधिवास प्रमाण पत्र – महाराष्ट्र"
    },

    category: {
      en: "Certificates",
      hi: "प्रमाण पत्र"
    },

    price: {
      en: "₹249 onwards",
      hi: "₹249 से शुरू"
    },

    summary: {
      en: "Get your Maharashtra Domicile Certificate — essential for admissions, government jobs, and other official requirements.",
      hi: "महाराष्ट्र का अधिवास प्रमाण पत्र बनवाएं — कॉलेज में प्रवेश, सरकारी नौकरी और अन्य आधिकारिक आवश्यकताओं के लिए एक महत्वपूर्ण दस्तावेज।"
    },

    benefits: {
      en: [
        "Official proof of Maharashtra residency, required for college admissions and government job eligibility.",
        "Guidance on the minimum residency period and proof required to qualify.",
        "Careful application filing through the Aaple Sarkar portal to prevent avoidable rejections.",
        "Assistance gathering supporting documents such as residence and school records.",
        "Regular status updates until the certificate is approved.",
        "Support if additional local verification is requested by the authority."
      ],

      hi: [
        "महाराष्ट्र में निवास का आधिकारिक प्रमाण, जो कॉलेज में प्रवेश और सरकारी नौकरी की पात्रता के लिए आवश्यक हो सकता है।",
        "पात्रता के लिए आवश्यक न्यूनतम निवास अवधि और संबंधित प्रमाण दस्तावेजों के बारे में मार्गदर्शन।",
        "अनावश्यक अस्वीकृति से बचने के लिए Aaple Sarkar पोर्टल के माध्यम से आवेदन सावधानीपूर्वक जमा करने में सहायता।",
        "निवास और स्कूल रिकॉर्ड जैसे आवश्यक सहायक दस्तावेज एकत्र करने में सहायता।",
        "प्रमाण पत्र स्वीकृत होने तक नियमित स्टेटस अपडेट।",
        "प्राधिकरण द्वारा अतिरिक्त स्थानीय सत्यापन मांगे जाने पर सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Domicile Certificate – Maharashtra?",
          a: "A Maharashtra Domicile Certificate is an official document used to establish that a person is a resident of Maharashtra and may be required for state-specific admissions, government jobs, schemes, and other official purposes."
        },
        {
          q: "Who needs Domicile Certificate – Maharashtra?",
          a: "Residents of Maharashtra who need to establish their state residency for education, employment, admissions, government schemes, or other applicable official requirements may need a domicile certificate."
        },
        {
          q: "What documents are required for Domicile Certificate – Maharashtra?",
          a: "The key documents typically required are Aadhaar, residence proof covering the applicable residency period, and school or education records where applicable. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Domicile Certificate – Maharashtra?",
          a: "The process involves verifying eligibility, submitting the required residence and supporting documents through the applicable Aaple Sarkar process, completing the required verification, and tracking the application until the certificate is approved and issued."
        },
        {
          q: "How long does Domicile Certificate – Maharashtra take to process?",
          a: "The typical processing time is around 15–21 working days. This can vary depending on document verification, local enquiry where applicable, and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Domicile Certificate – Maharashtra?",
          a: "There may be an applicable government or departmental fee, which is separate from the service facilitation charge. Since government charges may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Domicile Certificate – Maharashtra application is rejected or delayed?",
          a: "Applications may be rejected or delayed due to insufficient residence proof, incomplete supporting records, incorrect information, or discrepancies between submitted documents. The issue can usually be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Domicile Certificate – Maharashtra?",
          a: "Aarambh India verifies the required documents, assists with accurately filling and submitting the application, provides guidance during applicable verification, and gives regular status updates over WhatsApp until the certificate is issued."
        }
      ],

      hi: [
        {
          q: "अधिवास प्रमाण पत्र – महाराष्ट्र क्या है?",
          a: "महाराष्ट्र का अधिवास प्रमाण पत्र एक आधिकारिक दस्तावेज है, जो यह प्रमाणित करता है कि व्यक्ति महाराष्ट्र का निवासी है और राज्य से संबंधित प्रवेश, सरकारी नौकरी, योजनाओं तथा अन्य आधिकारिक कार्यों के लिए आवश्यक हो सकता है।"
        },
        {
          q: "अधिवास प्रमाण पत्र – महाराष्ट्र किसे बनवाना चाहिए?",
          a: "महाराष्ट्र के वे निवासी जिन्हें शिक्षा, रोजगार, प्रवेश, सरकारी योजनाओं या अन्य लागू आधिकारिक आवश्यकताओं के लिए अपने राज्य के निवास को प्रमाणित करना है, वे अधिवास प्रमाण पत्र बनवा सकते हैं।"
        },
        {
          q: "अधिवास प्रमाण पत्र – महाराष्ट्र के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार, लागू निवास अवधि को दर्शाने वाला निवास प्रमाण और जहां आवश्यक हो वहां स्कूल या शैक्षणिक रिकॉर्ड की आवश्यकता हो सकती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "अधिवास प्रमाण पत्र – महाराष्ट्र की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच करना, Aaple Sarkar की लागू प्रक्रिया के माध्यम से आवश्यक निवास और सहायक दस्तावेज जमा करना, आवश्यक सत्यापन पूरा करना और प्रमाण पत्र स्वीकृत एवं जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "अधिवास प्रमाण पत्र – महाराष्ट्र बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 15–21 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, जहां लागू हो वहां स्थानीय जांच और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "अधिवास प्रमाण पत्र – महाराष्ट्र के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या विभागीय शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि अधिवास प्रमाण पत्र – महाराष्ट्र का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के कारणों में अपर्याप्त निवास प्रमाण, अधूरे सहायक रिकॉर्ड, गलत जानकारी या जमा किए गए दस्तावेजों में अंतर शामिल हो सकता है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India अधिवास प्रमाण पत्र – महाराष्ट्र में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की जांच करता है, आवेदन को सही तरीके से भरने और जमा करने में सहायता करता है, लागू सत्यापन प्रक्रिया में मार्गदर्शन देता है तथा प्रमाण पत्र जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "income-certificate-haryana",
    image: income,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Income Certificate – Haryana",
      hi: "आय प्रमाण पत्र – हरियाणा"
    },

    category: {
      en: "Certificates",
      hi: "प्रमाण पत्र"
    },

    price: {
      en: "₹249 onwards",
      hi: "₹249 से शुरू"
    },

    summary: {
      en: "Get your Haryana Income Certificate — an essential document for scholarships, fee waivers, government schemes, and other official purposes.",
      hi: "हरियाणा का आय प्रमाण पत्र बनवाएं — छात्रवृत्ति, फीस में छूट, सरकारी योजनाओं और अन्य आधिकारिक कार्यों के लिए एक आवश्यक दस्तावेज।"
    },

    benefits: {
      en: [
        "Official proof of family income, required for scholarships, fee waivers, and various government schemes in Haryana.",
        "Guidance on the correct income calculation and supporting proof to submit.",
        "Careful, accurate application filing to avoid delays from incomplete details.",
        "Assistance if a field verification or additional document is requested.",
        "Regular status tracking from submission to issuance.",
        "Support obtaining a renewed certificate once the current one expires."
      ],

      hi: [
        "परिवार की आय का आधिकारिक प्रमाण, जो हरियाणा में छात्रवृत्ति, फीस में छूट और विभिन्न सरकारी योजनाओं के लिए आवश्यक हो सकता है।",
        "सही आय की गणना और जमा किए जाने वाले आवश्यक प्रमाण दस्तावेजों के बारे में मार्गदर्शन।",
        "अधूरी जानकारी के कारण होने वाली देरी से बचने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "जहां फील्ड सत्यापन या अतिरिक्त दस्तावेज की आवश्यकता हो, वहां सहायता।",
        "आवेदन जमा करने से लेकर प्रमाण पत्र जारी होने तक नियमित स्टेटस ट्रैकिंग।",
        "वर्तमान प्रमाण पत्र की वैधता समाप्त होने के बाद नया या नवीनीकृत प्रमाण पत्र प्राप्त करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Income Certificate – Haryana?",
          a: "A Haryana Income Certificate is an official document that records the annual family income and may be required for scholarships, fee concessions, government schemes, and other eligibility-based benefits."
        },
        {
          q: "Who needs Income Certificate – Haryana?",
          a: "Residents of Haryana who need to establish their family income for education, scholarships, fee concessions, government schemes, or other applicable official requirements may need an income certificate."
        },
        {
          q: "What documents are required for Income Certificate – Haryana?",
          a: "The key documents typically required are Aadhaar, salary slip or Form 16 where applicable, self-declaration or income proof, and address proof. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Income Certificate – Haryana?",
          a: "The process involves verifying the applicant's income details, submitting the required documents and application form, completing any applicable verification, and tracking the application until the certificate is approved and issued."
        },
        {
          q: "How long does Income Certificate – Haryana take to process?",
          a: "The typical processing time is around 10–15 working days. This can vary depending on document verification, field enquiry where applicable, and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Income Certificate – Haryana?",
          a: "There may be an applicable government or departmental fee, which is separate from the service facilitation charge. Since government charges may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Income Certificate – Haryana application is rejected or delayed?",
          a: "Applications may be rejected or delayed due to incorrect income information, insufficient supporting documents, incomplete details, or discrepancies between submitted records. The issue can usually be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Income Certificate – Haryana?",
          a: "Aarambh India verifies that the required documents are complete and correctly formatted, assists with accurately filling and submitting the application, provides guidance during applicable verification, and gives regular status updates over WhatsApp until the certificate is issued."
        }
      ],

      hi: [
        {
          q: "आय प्रमाण पत्र – हरियाणा क्या है?",
          a: "हरियाणा का आय प्रमाण पत्र एक आधिकारिक दस्तावेज है, जिसमें परिवार की वार्षिक आय दर्ज होती है और यह छात्रवृत्ति, फीस में छूट, सरकारी योजनाओं तथा अन्य पात्रता-आधारित लाभों के लिए आवश्यक हो सकता है।"
        },
        {
          q: "आय प्रमाण पत्र – हरियाणा किसे बनवाना चाहिए?",
          a: "हरियाणा के वे निवासी जिन्हें शिक्षा, छात्रवृत्ति, फीस में छूट, सरकारी योजनाओं या अन्य लागू आधिकारिक आवश्यकताओं के लिए अपनी पारिवारिक आय प्रमाणित करनी है, वे आय प्रमाण पत्र बनवा सकते हैं।"
        },
        {
          q: "आय प्रमाण पत्र – हरियाणा के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार, जहां लागू हो वहां वेतन पर्ची या Form 16, स्व-घोषणा या आय प्रमाण और पते के प्रमाण की आवश्यकता हो सकती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "आय प्रमाण पत्र – हरियाणा की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवेदक की आय संबंधी जानकारी का सत्यापन, आवश्यक दस्तावेज और आवेदन फॉर्म जमा करना, जहां लागू हो वहां आवश्यक सत्यापन पूरा करना और प्रमाण पत्र स्वीकृत एवं जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "आय प्रमाण पत्र – हरियाणा बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, जहां लागू हो वहां फील्ड जांच और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "आय प्रमाण पत्र – हरियाणा के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या विभागीय शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि आय प्रमाण पत्र – हरियाणा का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के कारणों में गलत आय संबंधी जानकारी, अपर्याप्त सहायक दस्तावेज, अधूरी जानकारी या जमा किए गए रिकॉर्ड में अंतर शामिल हो सकता है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India आय प्रमाण पत्र – हरियाणा में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की पूर्णता और सही फॉर्मेट की जांच करता है, आवेदन को सही तरीके से भरने और जमा करने में सहायता करता है, लागू सत्यापन प्रक्रिया में मार्गदर्शन देता है तथा प्रमाण पत्र जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "income-certificate-maharashtra",
    image: income,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Income Certificate – Maharashtra",
      hi: "आय प्रमाण पत्र – महाराष्ट्र"
    },

    category: {
      en: "Certificates",
      hi: "प्रमाण पत्र"
    },

    price: {
      en: "₹249 onwards",
      hi: "₹249 से शुरू"
    },

    summary: {
      en: "Get your Maharashtra Income Certificate — fast processing through the official Aaple Sarkar portal.",
      hi: "महाराष्ट्र का आय प्रमाण पत्र बनवाएं — आधिकारिक Aaple Sarkar पोर्टल के माध्यम से तेज़ और सुविधाजनक प्रक्रिया।"
    },

    benefits: {
      en: [
        "Official income certificate processed through the Aaple Sarkar portal for scholarships, subsidies, and scheme eligibility in Maharashtra.",
        "Guidance on the correct income proof and category applicable to your case.",
        "Accurate, complete application submission to minimise processing delays.",
        "Assistance coordinating with the concerned Tehsil office if further verification is needed.",
        "Regular status updates until the certificate is issued.",
        "Support with renewal once your current certificate expires."
      ],

      hi: [
        "महाराष्ट्र में छात्रवृत्ति, सब्सिडी और विभिन्न सरकारी योजनाओं की पात्रता के लिए Aaple Sarkar पोर्टल के माध्यम से आधिकारिक आय प्रमाण पत्र बनवाने में सहायता।",
        "आपकी स्थिति के अनुसार सही आय प्रमाण और लागू श्रेणी के बारे में मार्गदर्शन।",
        "प्रोसेसिंग में होने वाली अनावश्यक देरी को कम करने के लिए आवेदन को सही और पूर्ण तरीके से जमा करने में सहायता।",
        "जहां अतिरिक्त सत्यापन आवश्यक हो, वहां संबंधित तहसील कार्यालय के साथ आवश्यक प्रक्रिया में सहायता।",
        "प्रमाण पत्र जारी होने तक नियमित स्टेटस अपडेट।",
        "वर्तमान प्रमाण पत्र की वैधता समाप्त होने के बाद नवीनीकरण में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Income Certificate – Maharashtra?",
          a: "A Maharashtra Income Certificate is an official document used to establish annual or family income and may be required for government schemes, scholarships, subsidies, admissions, and other eligibility-based benefits."
        },
        {
          q: "Who needs Income Certificate – Maharashtra?",
          a: "Residents of Maharashtra who need to establish their income for education, scholarships, subsidies, admissions, government schemes, or other applicable official requirements may need an income certificate."
        },
        {
          q: "What documents are required for Income Certificate – Maharashtra?",
          a: "The key documents typically required are Aadhaar, applicable income proof, and a ration card or other supporting family document where required. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Income Certificate – Maharashtra?",
          a: "The process involves verifying the applicant's income details, submitting the required documents through the applicable Aaple Sarkar process, completing any required verification, and tracking the application until the certificate is approved and issued."
        },
        {
          q: "How long does Income Certificate – Maharashtra take to process?",
          a: "The typical processing time is around 10–15 working days. This can vary depending on document verification, local or Tehsil-level verification where applicable, and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Income Certificate – Maharashtra?",
          a: "There may be an applicable government or departmental fee, which is separate from the service facilitation charge. Since government charges may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Income Certificate – Maharashtra application is rejected or delayed?",
          a: "Applications may be rejected or delayed due to incorrect income information, insufficient supporting documents, incomplete details, or discrepancies between submitted records. The issue can usually be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Income Certificate – Maharashtra?",
          a: "Aarambh India verifies that all required documents are complete and correctly formatted, assists with accurately filling and submitting the application, provides guidance during applicable verification, and gives regular status updates over WhatsApp until the certificate is issued."
        }
      ],

      hi: [
        {
          q: "आय प्रमाण पत्र – महाराष्ट्र क्या है?",
          a: "महाराष्ट्र का आय प्रमाण पत्र एक आधिकारिक दस्तावेज है, जिसका उपयोग वार्षिक या पारिवारिक आय प्रमाणित करने के लिए किया जाता है और यह सरकारी योजनाओं, छात्रवृत्ति, सब्सिडी, प्रवेश तथा अन्य पात्रता-आधारित लाभों के लिए आवश्यक हो सकता है।"
        },
        {
          q: "आय प्रमाण पत्र – महाराष्ट्र किसे बनवाना चाहिए?",
          a: "महाराष्ट्र के वे निवासी जिन्हें शिक्षा, छात्रवृत्ति, सब्सिडी, प्रवेश, सरकारी योजनाओं या अन्य लागू आधिकारिक आवश्यकताओं के लिए अपनी आय प्रमाणित करनी है, वे आय प्रमाण पत्र बनवा सकते हैं।"
        },
        {
          q: "आय प्रमाण पत्र – महाराष्ट्र के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार, लागू आय प्रमाण और जहां आवश्यक हो वहां राशन कार्ड या अन्य पारिवारिक सहायक दस्तावेज की आवश्यकता हो सकती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "आय प्रमाण पत्र – महाराष्ट्र की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवेदक की आय संबंधी जानकारी का सत्यापन, Aaple Sarkar की लागू प्रक्रिया के माध्यम से आवश्यक दस्तावेज जमा करना, आवश्यक सत्यापन पूरा करना और प्रमाण पत्र स्वीकृत एवं जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "आय प्रमाण पत्र – महाराष्ट्र बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, जहां लागू हो वहां स्थानीय या तहसील स्तर के सत्यापन और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "आय प्रमाण पत्र – महाराष्ट्र के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या विभागीय शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि आय प्रमाण पत्र – महाराष्ट्र का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के कारणों में गलत आय संबंधी जानकारी, अपर्याप्त सहायक दस्तावेज, अधूरी जानकारी या जमा किए गए रिकॉर्ड में अंतर शामिल हो सकता है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India आय प्रमाण पत्र – महाराष्ट्र में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की पूर्णता और सही फॉर्मेट की जांच करता है, आवेदन को सही तरीके से भरने और जमा करने में सहायता करता है, लागू सत्यापन प्रक्रिया में मार्गदर्शन देता है तथा प्रमाण पत्र जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "senior-citizen-card-ap",
    image: senior_citizen,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Senior Citizen Card – Andhra Pradesh",
      hi: "वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश"
    },

    category: {
      en: "Certificates",
      hi: "प्रमाण पत्र"
    },

    price: {
      en: "₹199 onwards",
      hi: "₹199 से शुरू"
    },

    summary: {
      en: "Get your Senior Citizen Card for Andhra Pradesh residents aged 60+ — unlock eligible travel discounts, government scheme benefits, and other senior citizen benefits.",
      hi: "60 वर्ष या उससे अधिक आयु के आंध्र प्रदेश निवासियों के लिए वरिष्ठ नागरिक कार्ड बनवाएं — पात्र यात्रा छूट, सरकारी योजनाओं के लाभ और अन्य वरिष्ठ नागरिक सुविधाओं का लाभ उठाने में सहायता।"
    },

    benefits: {
      en: [
        "Official Andhra Pradesh senior citizen ID, useful for eligible travel concessions and scheme benefits for residents aged 60 and above.",
        "Guidance on the age and residency proof required for eligibility.",
        "Careful, complete application filing to avoid processing delays.",
        "Assistance with the applicable state portal or office procedure.",
        "Regular status updates until the card is issued.",
        "Support with reissue if the card is lost or damaged."
      ],

      hi: [
        "60 वर्ष या उससे अधिक आयु के निवासियों के लिए आंध्र प्रदेश का वरिष्ठ नागरिक पहचान पत्र, जो पात्र यात्रा रियायतों और सरकारी योजनाओं के लाभ के लिए उपयोगी हो सकता है।",
        "पात्रता के लिए आवश्यक आयु और निवास प्रमाण के बारे में मार्गदर्शन।",
        "प्रोसेसिंग में होने वाली देरी से बचने के लिए आवेदन को सावधानीपूर्वक और पूर्ण रूप से जमा करने में सहायता।",
        "लागू राज्य पोर्टल या कार्यालय प्रक्रिया के माध्यम से आवेदन करने में सहायता।",
        "कार्ड जारी होने तक नियमित स्टेटस अपडेट।",
        "कार्ड खो जाने या खराब होने की स्थिति में दोबारा कार्ड जारी करवाने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Senior Citizen Card – Andhra Pradesh?",
          a: "A Senior Citizen Card is an identity document for eligible residents of Andhra Pradesh aged 60 years or above. It may be used to access applicable senior citizen concessions, government schemes, and other benefits."
        },
        {
          q: "Who needs Senior Citizen Card – Andhra Pradesh?",
          a: "Residents of Andhra Pradesh aged 60 years or above who need to establish their senior citizen status for applicable government schemes, concessions, services, or other official purposes may apply for a senior citizen card."
        },
        {
          q: "What documents are required for Senior Citizen Card – Andhra Pradesh?",
          a: "The key documents typically required are Aadhaar, age proof, address proof, and a recent photograph. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Senior Citizen Card – Andhra Pradesh?",
          a: "The process involves verifying age and residency, submitting the required documents and application form through the applicable state portal or office, completing any required verification, and tracking the application until the card is approved and issued."
        },
        {
          q: "How long does Senior Citizen Card – Andhra Pradesh take to process?",
          a: "The typical processing time is around 10–15 working days. This can vary depending on document verification and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Senior Citizen Card – Andhra Pradesh?",
          a: "There may be an applicable government or departmental fee, which is separate from the service facilitation charge. Since government charges may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Senior Citizen Card – Andhra Pradesh application is rejected or delayed?",
          a: "Applications may be rejected or delayed due to incorrect age or address details, insufficient supporting documents, incomplete information, or discrepancies between submitted records. The issue can usually be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Senior Citizen Card – Andhra Pradesh?",
          a: "Aarambh India verifies that the required documents are complete and correctly formatted, assists with accurately filling and submitting the application, provides guidance during applicable verification, and gives regular status updates over WhatsApp until the card is issued."
        }
      ],

      hi: [
        {
          q: "वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश क्या है?",
          a: "वरिष्ठ नागरिक कार्ड आंध्र प्रदेश के 60 वर्ष या उससे अधिक आयु के पात्र निवासियों के लिए एक पहचान दस्तावेज है। इसका उपयोग लागू वरिष्ठ नागरिक रियायतों, सरकारी योजनाओं और अन्य सुविधाओं का लाभ लेने के लिए किया जा सकता है।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश किसे बनवाना चाहिए?",
          a: "आंध्र प्रदेश के 60 वर्ष या उससे अधिक आयु के वे निवासी जिन्हें सरकारी योजनाओं, रियायतों, सेवाओं या अन्य आधिकारिक कार्यों के लिए अपनी वरिष्ठ नागरिक स्थिति प्रमाणित करनी है, वे वरिष्ठ नागरिक कार्ड के लिए आवेदन कर सकते हैं।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार, आयु प्रमाण, पते का प्रमाण और हाल की फोटो की आवश्यकता होती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आयु और निवास का सत्यापन, लागू राज्य पोर्टल या कार्यालय के माध्यम से आवश्यक दस्तावेज और आवेदन फॉर्म जमा करना, आवश्यक सत्यापन पूरा करना और कार्ड स्वीकृत एवं जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या विभागीय शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के कारणों में गलत आयु या पते की जानकारी, अपर्याप्त सहायक दस्तावेज, अधूरी जानकारी या जमा किए गए रिकॉर्ड में अंतर शामिल हो सकता है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India वरिष्ठ नागरिक कार्ड – आंध्र प्रदेश में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की पूर्णता और सही फॉर्मेट की जांच करता है, आवेदन को सही तरीके से भरने और जमा करने में सहायता करता है, लागू सत्यापन प्रक्रिया में मार्गदर्शन देता है तथा कार्ड जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "senior-citizen-card-assam",
    image: senior_citizen,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Senior Citizen Card – Assam",
      hi: "वरिष्ठ नागरिक कार्ड – असम"
    },

    category: {
      en: "Certificates",
      hi: "प्रमाण पत्र"
    },

    price: {
      en: "₹199 onwards",
      hi: "₹199 से शुरू"
    },

    summary: {
      en: "Get your Assam Senior Citizen ID Card — an essential document for eligible benefits, concessions, and senior citizen welfare schemes.",
      hi: "असम का वरिष्ठ नागरिक पहचान कार्ड बनवाएं — पात्र लाभ, रियायतों और वरिष्ठ नागरिक कल्याण योजनाओं के लिए एक महत्वपूर्ण दस्तावेज।"
    },

    benefits: {
      en: [
        "Official Assam senior citizen ID card providing access to applicable state benefits and concessions.",
        "Guidance on eligibility criteria and required supporting documents.",
        "Accurate, complete application submission to prevent avoidable delays.",
        "Assistance navigating the relevant state department process.",
        "Regular status tracking from submission to card issuance.",
        "Support with reissue in case of loss or damage."
      ],

      hi: [
        "असम का आधिकारिक वरिष्ठ नागरिक पहचान कार्ड, जो लागू राज्य लाभों और रियायतों का लाभ लेने में उपयोगी हो सकता है।",
        "पात्रता मानदंड और आवश्यक सहायक दस्तावेजों के बारे में मार्गदर्शन।",
        "अनावश्यक देरी से बचने के लिए आवेदन को सही और पूर्ण तरीके से जमा करने में सहायता।",
        "संबंधित राज्य विभाग की आवेदन प्रक्रिया को समझने और पूरा करने में सहायता।",
        "आवेदन जमा करने से लेकर कार्ड जारी होने तक नियमित स्टेटस ट्रैकिंग।",
        "कार्ड खो जाने या खराब होने की स्थिति में दोबारा कार्ड जारी करवाने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Senior Citizen Card – Assam?",
          a: "A Senior Citizen Card is an identity document for eligible senior citizens in Assam and may be used to access applicable government benefits, concessions, and senior citizen welfare schemes."
        },
        {
          q: "Who needs Senior Citizen Card – Assam?",
          a: "Residents of Assam who meet the applicable senior citizen eligibility criteria and need to establish their status for government benefits, concessions, welfare schemes, or other official purposes may apply for a senior citizen card."
        },
        {
          q: "What documents are required for Senior Citizen Card – Assam?",
          a: "The key documents typically required are Aadhaar, age proof, address proof, and a recent photograph. Original documents are usually not required upfront; clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for Senior Citizen Card – Assam?",
          a: "The process involves verifying age and residency, submitting the required documents and application form through the applicable state department or portal, completing any required verification, and tracking the application until the card is approved and issued."
        },
        {
          q: "How long does Senior Citizen Card – Assam take to process?",
          a: "The typical processing time is around 10–15 working days. This can vary depending on document verification and the workload of the concerned department, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Senior Citizen Card – Assam?",
          a: "There may be an applicable government or departmental fee, which is separate from the service facilitation charge. Since government charges may be revised periodically, the current applicable amount is shared with the client before proceeding."
        },
        {
          q: "What happens if my Senior Citizen Card – Assam application is rejected or delayed?",
          a: "Applications may be rejected or delayed due to incorrect age or address details, insufficient supporting documents, incomplete information, or discrepancies between submitted records. The issue can usually be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with Senior Citizen Card – Assam?",
          a: "Aarambh India verifies that the required documents are complete and correctly formatted, assists with accurately filling and submitting the application, provides guidance during the applicable process, and gives regular status updates over WhatsApp until the card is issued."
        }
      ],

      hi: [
        {
          q: "वरिष्ठ नागरिक कार्ड – असम क्या है?",
          a: "वरिष्ठ नागरिक कार्ड असम के पात्र वरिष्ठ नागरिकों के लिए एक पहचान दस्तावेज है, जिसका उपयोग लागू सरकारी लाभों, रियायतों और वरिष्ठ नागरिक कल्याण योजनाओं का लाभ लेने के लिए किया जा सकता है।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – असम किसे बनवाना चाहिए?",
          a: "असम के वे निवासी जो लागू वरिष्ठ नागरिक पात्रता मानदंड को पूरा करते हैं और सरकारी लाभ, रियायत, कल्याण योजनाओं या अन्य आधिकारिक कार्यों के लिए अपनी वरिष्ठ नागरिक स्थिति प्रमाणित करना चाहते हैं, वे वरिष्ठ नागरिक कार्ड के लिए आवेदन कर सकते हैं।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – असम के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार, आयु प्रमाण, पते का प्रमाण और हाल की फोटो की आवश्यकता होती है। मूल दस्तावेज आमतौर पर शुरुआत में आवश्यक नहीं होते; आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो पर्याप्त हो सकती है।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – असम की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आयु और निवास का सत्यापन, संबंधित राज्य विभाग या पोर्टल के माध्यम से आवश्यक दस्तावेज और आवेदन फॉर्म जमा करना, आवश्यक सत्यापन पूरा करना और कार्ड स्वीकृत एवं जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – असम बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "वरिष्ठ नागरिक कार्ड – असम के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या विभागीय शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि वरिष्ठ नागरिक कार्ड – असम का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन अस्वीकार या विलंबित होने के कारणों में गलत आयु या पते की जानकारी, अपर्याप्त सहायक दस्तावेज, अधूरी जानकारी या जमा किए गए रिकॉर्ड में अंतर शामिल हो सकता है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India वरिष्ठ नागरिक कार्ड – असम में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की पूर्णता और सही फॉर्मेट की जांच करता है, आवेदन को सही तरीके से भरने और जमा करने में सहायता करता है, लागू प्रक्रिया में मार्गदर्शन देता है तथा कार्ड जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "fssai-new-license",
    image: fssai,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "FSSAI New Food License",
      hi: "नया FSSAI फूड लाइसेंस"
    },

    category: {
      en: "Business",
      hi: "व्यवसाय"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹299 onwards",
      hi: "₹299 से शुरू"
    },

    summary: {
      en: "Starting a food business? Get your FSSAI registration or licence — Basic, State, or Central, as applicable to your business.",
      hi: "फूड बिज़नेस शुरू कर रहे हैं? अपने व्यवसाय के अनुसार FSSAI रजिस्ट्रेशन या लाइसेंस — Basic, State या Central — प्राप्त करें।"
    },

    benefits: {
      en: [
        "Helps obtain the applicable FSSAI registration or licence required to legally operate a food business in India.",
        "Guidance on choosing the correct category — Basic Registration, State Licence, or Central Licence — based on your business activity and eligibility.",
        "Assistance preparing the required documents, business details, layout plan, and declarations where applicable.",
        "Careful and accurate application filing to reduce avoidable queries, errors, or delays.",
        "Regular status updates from application submission through to licence or registration issuance.",
        "Guidance on applicable compliance requirements and renewal after the FSSAI registration or licence is issued."
      ],

      hi: [
        "भारत में खाद्य व्यवसाय संचालित करने के लिए लागू FSSAI रजिस्ट्रेशन या लाइसेंस प्राप्त करने में सहायता।",
        "आपकी व्यवसाय गतिविधि और पात्रता के आधार पर सही श्रेणी — Basic Registration, State Licence या Central Licence — चुनने में मार्गदर्शन।",
        "जहां लागू हो वहां आवश्यक दस्तावेज, व्यवसाय विवरण, लेआउट प्लान और घोषणाएं तैयार करने में सहायता।",
        "अनावश्यक आपत्तियों, गलतियों या देरी को कम करने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "आवेदन जमा करने से लेकर लाइसेंस या रजिस्ट्रेशन जारी होने तक नियमित स्टेटस अपडेट।",
        "FSSAI रजिस्ट्रेशन या लाइसेंस जारी होने के बाद लागू अनुपालन और नवीनीकरण आवश्यकताओं के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is FSSAI New Food License?",
          a: "FSSAI registration or licence is the food safety authorisation required for eligible food business operators in India. The applicable type depends on the nature, scale, and eligibility of the food business."
        },
        {
          q: "Who needs FSSAI New Food License?",
          a: "Food business operators such as manufacturers, processors, restaurants, caterers, retailers, wholesalers, distributors, storage operators, and other eligible food businesses may need FSSAI registration or a licence, depending on their business activity and applicable rules."
        },
        {
          q: "What documents are required for FSSAI New Food License?",
          a: "The documents typically required may include Aadhaar or PAN, business address proof, details or photographs of the food business, business constitution documents, and an NOC or other supporting documents where applicable. Clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for FSSAI New Food License?",
          a: "The process involves determining the applicable FSSAI category, collecting the required documents, accurately completing the application, submitting it through the applicable FSSAI process, responding to any query if raised, and tracking the application until registration or licence issuance."
        },
        {
          q: "How long does FSSAI New Food License take to process?",
          a: "The typical processing time may be around 7–15 working days for straightforward applications, but the actual timeline can vary depending on document verification, inspection requirements, queries raised by the authority, and departmental workload. It should therefore be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in FSSAI New Food License?",
          a: "There may be an applicable government or FSSAI fee, which is separate from the service facilitation charge. Government fees can vary based on the licence category and may be revised periodically, so the applicable amount is shared before proceeding."
        },
        {
          q: "What happens if my FSSAI New Food License application is rejected or delayed?",
          a: "An application may be delayed or returned due to incorrect business details, incomplete documents, incorrect licence category, missing information, or queries from the authority. The issue can usually be addressed and the application corrected or resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with FSSAI New Food License?",
          a: "Aarambh India helps verify the required documents, identify the applicable FSSAI category, accurately prepare and submit the application, assist with applicable queries, and provide regular WhatsApp status updates until the registration or licence process is completed."
        }
      ],

      hi: [
        {
          q: "नया FSSAI फूड लाइसेंस क्या है?",
          a: "FSSAI रजिस्ट्रेशन या लाइसेंस भारत में पात्र खाद्य व्यवसाय संचालकों के लिए आवश्यक खाद्य सुरक्षा अनुमति है। कौन-सा रजिस्ट्रेशन या लाइसेंस लागू होगा, यह व्यवसाय की प्रकृति, आकार और पात्रता पर निर्भर करता है।"
        },
        {
          q: "नया FSSAI फूड लाइसेंस किसे बनवाना चाहिए?",
          a: "फूड मैन्युफैक्चरर, प्रोसेसर, रेस्टोरेंट, कैटरर, रिटेलर, होलसेलर, डिस्ट्रीब्यूटर, स्टोरेज ऑपरेटर और अन्य पात्र खाद्य व्यवसायों को उनकी गतिविधि और लागू नियमों के अनुसार FSSAI रजिस्ट्रेशन या लाइसेंस की आवश्यकता हो सकती है।"
        },
        {
          q: "नया FSSAI फूड लाइसेंस के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार या PAN, व्यवसाय के पते का प्रमाण, खाद्य व्यवसाय से संबंधित विवरण या फोटो, व्यवसाय की प्रकृति से संबंधित दस्तावेज और जहां लागू हो वहां NOC या अन्य सहायक दस्तावेज आवश्यक हो सकते हैं। आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो सामान्यतः पर्याप्त हो सकती है।"
        },
        {
          q: "नया FSSAI फूड लाइसेंस की प्रक्रिया क्या है?",
          a: "प्रक्रिया में लागू FSSAI श्रेणी की पहचान करना, आवश्यक दस्तावेज तैयार करना, आवेदन को सही तरीके से भरना, संबंधित FSSAI प्रक्रिया के माध्यम से आवेदन जमा करना, आवश्यकता होने पर विभाग द्वारा उठाई गई आपत्तियों या प्रश्नों का जवाब देना और रजिस्ट्रेशन या लाइसेंस जारी होने तक स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "नया FSSAI फूड लाइसेंस बनने में कितना समय लगता है?",
          a: "सामान्य आवेदन में लगभग 7–15 कार्य दिवस लग सकते हैं, लेकिन वास्तविक समय दस्तावेज सत्यापन, निरीक्षण की आवश्यकता, विभाग द्वारा उठाए गए प्रश्नों और संबंधित विभाग के कार्यभार पर निर्भर करता है। इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "नया FSSAI फूड लाइसेंस के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या FSSAI शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क लाइसेंस श्रेणी के अनुसार अलग हो सकता है और समय-समय पर संशोधित भी किया जा सकता है, इसलिए प्रक्रिया शुरू करने से पहले लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि नए FSSAI फूड लाइसेंस का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन में गलत व्यवसाय विवरण, अधूरे दस्तावेज, गलत लाइसेंस श्रेणी, आवश्यक जानकारी की कमी या विभाग द्वारा पूछे गए प्रश्नों के कारण देरी या आपत्ति हो सकती है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन को सही करके दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India नए FSSAI फूड लाइसेंस में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की जांच करता है, सही FSSAI श्रेणी चुनने में सहायता करता है, आवेदन को सही तरीके से तैयार और जमा करने में मदद करता है, लागू आपत्तियों या प्रश्नों के समाधान में मार्गदर्शन देता है और प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "fssai-renewal",
    image: fssai,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "FSSAI Food License Renewal",
      hi: "FSSAI फूड लाइसेंस नवीनीकरण"
    },

    category: {
      en: "Business",
      hi: "व्यवसाय"
    },

    price: {
      en: "₹249 onwards",
      hi: "₹249 से शुरू"
    },

    summary: {
      en: "Renew your FSSAI registration or licence before it expires — maintain compliance and avoid unnecessary business disruption.",
      hi: "अपने FSSAI रजिस्ट्रेशन या लाइसेंस की अवधि समाप्त होने से पहले नवीनीकरण करवाएं — अनुपालन बनाए रखें और व्यवसाय में अनावश्यक रुकावट से बचें।"
    },

    benefits: {
      en: [
        "Helps renew your FSSAI registration or licence before expiry, reducing the risk of compliance issues or business disruption.",
        "Reminder-based guidance to help you initiate the renewal process within the applicable timeline.",
        "Assistance verifying your existing FSSAI licence details and current business information.",
        "Careful and accurate renewal filing to reduce avoidable queries, errors, or delays.",
        "Regular status tracking from renewal submission until the renewed registration or licence is issued.",
        "Support upgrading your FSSAI licence category if your business activity or scale has changed."
      ],

      hi: [
        "FSSAI रजिस्ट्रेशन या लाइसेंस की अवधि समाप्त होने से पहले नवीनीकरण कराने में सहायता, जिससे अनुपालन संबंधी समस्याओं या व्यवसाय में रुकावट के जोखिम को कम किया जा सके।",
        "लागू समय-सीमा के भीतर नवीनीकरण प्रक्रिया शुरू करने के लिए रिमाइंडर और मार्गदर्शन।",
        "मौजूदा FSSAI लाइसेंस विवरण और वर्तमान व्यवसाय संबंधी जानकारी की जांच में सहायता।",
        "अनावश्यक आपत्तियों, गलतियों या देरी को कम करने के लिए नवीनीकरण आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "नवीनीकरण आवेदन जमा करने से लेकर नया रजिस्ट्रेशन या लाइसेंस जारी होने तक नियमित स्टेटस ट्रैकिंग।",
        "यदि व्यवसाय की गतिविधि या आकार में बदलाव हुआ है, तो उपयुक्त FSSAI लाइसेंस श्रेणी में अपग्रेड करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is FSSAI Food License Renewal?",
          a: "FSSAI renewal is the process of renewing an existing FSSAI registration or licence before or as required by its validity period, so the eligible food business can continue operating in compliance with applicable food safety requirements."
        },
        {
          q: "Who needs FSSAI Food License Renewal?",
          a: "Food business operators holding an FSSAI registration or licence that is approaching expiry may need to complete the applicable renewal process to continue their food business operations in compliance with the relevant requirements."
        },
        {
          q: "What documents are required for FSSAI Food License Renewal?",
          a: "The documents typically required may include the existing FSSAI registration or licence, Aadhaar or PAN, current business details, and other supporting documents depending on the licence category and business activity. Clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for FSSAI Food License Renewal?",
          a: "The process involves verifying the existing FSSAI details, checking the current business information, preparing the required documents, submitting the renewal application through the applicable FSSAI process, responding to any query if raised, and tracking the application until the renewed registration or licence is issued."
        },
        {
          q: "How long does FSSAI Food License Renewal take to process?",
          a: "The typical processing time may be around 7–15 working days for straightforward applications. The actual timeline can vary depending on document verification, inspection or queries where applicable, and departmental workload, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in FSSAI Food License Renewal?",
          a: "There may be an applicable government or FSSAI renewal fee, which is separate from the service facilitation charge. The applicable government fee can vary based on the registration or licence category and may be revised periodically."
        },
        {
          q: "What happens if my FSSAI Food License Renewal application is rejected or delayed?",
          a: "Renewal applications may be delayed or returned due to incorrect business details, expired or mismatched information, incomplete documents, or queries raised by the authority. The issue can usually be addressed and the application corrected or resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with FSSAI Food License Renewal?",
          a: "Aarambh India verifies the existing FSSAI details and required documents, assists with preparing and submitting the renewal application, provides guidance if any query is raised, and gives regular WhatsApp status updates until the renewal process is completed."
        }
      ],

      hi: [
        {
          q: "FSSAI फूड लाइसेंस नवीनीकरण क्या है?",
          a: "FSSAI नवीनीकरण मौजूदा FSSAI रजिस्ट्रेशन या लाइसेंस को उसकी वैधता अवधि के अनुसार नवीनीकृत करने की प्रक्रिया है, ताकि पात्र खाद्य व्यवसाय लागू खाद्य सुरक्षा आवश्यकताओं के अनुसार अपना व्यवसाय जारी रख सके।"
        },
        {
          q: "FSSAI फूड लाइसेंस नवीनीकरण किसे करवाना चाहिए?",
          a: "जिन खाद्य व्यवसाय संचालकों के पास FSSAI रजिस्ट्रेशन या लाइसेंस है और उसकी वैधता समाप्त होने वाली है, उन्हें लागू नियमों के अनुसार व्यवसाय जारी रखने के लिए नवीनीकरण प्रक्रिया पूरी करनी पड़ सकती है।"
        },
        {
          q: "FSSAI फूड लाइसेंस नवीनीकरण के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः मौजूदा FSSAI रजिस्ट्रेशन या लाइसेंस, आधार या PAN, वर्तमान व्यवसाय विवरण और लाइसेंस श्रेणी एवं व्यवसाय गतिविधि के अनुसार अन्य सहायक दस्तावेज आवश्यक हो सकते हैं। आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो सामान्यतः पर्याप्त हो सकती है।"
        },
        {
          q: "FSSAI फूड लाइसेंस नवीनीकरण की प्रक्रिया क्या है?",
          a: "प्रक्रिया में मौजूदा FSSAI विवरण की जांच, वर्तमान व्यवसाय संबंधी जानकारी का सत्यापन, आवश्यक दस्तावेज तैयार करना, लागू FSSAI प्रक्रिया के माध्यम से नवीनीकरण आवेदन जमा करना, आवश्यकता होने पर विभाग द्वारा उठाई गई आपत्तियों या प्रश्नों का जवाब देना और नया रजिस्ट्रेशन या लाइसेंस जारी होने तक स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "FSSAI फूड लाइसेंस नवीनीकरण में कितना समय लगता है?",
          a: "सामान्य आवेदन में लगभग 7–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, जहां लागू हो वहां निरीक्षण या विभागीय प्रश्न और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "FSSAI फूड लाइसेंस नवीनीकरण के लिए कितने शुल्क लगते हैं?",
          a: "जहां लागू हो, वहां सरकारी या FSSAI नवीनीकरण शुल्क अलग से हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क रजिस्ट्रेशन या लाइसेंस की श्रेणी के अनुसार अलग हो सकता है और समय-समय पर संशोधित भी किया जा सकता है।"
        },
        {
          q: "यदि FSSAI फूड लाइसेंस नवीनीकरण का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "नवीनीकरण आवेदन में गलत व्यवसाय विवरण, समाप्त या मेल न खाने वाली जानकारी, अधूरे दस्तावेज या विभाग द्वारा उठाए गए प्रश्नों के कारण देरी या आपत्ति हो सकती है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन को सही करके दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India FSSAI फूड लाइसेंस नवीनीकरण में कैसे सहायता करता है?",
          a: "Aarambh India मौजूदा FSSAI विवरण और आवश्यक दस्तावेजों की जांच करता है, नवीनीकरण आवेदन तैयार करने और जमा करने में सहायता करता है, विभाग द्वारा उठाई गई आपत्तियों या प्रश्नों के समाधान में मार्गदर्शन देता है और प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "gstin-verification",
    image: gst_collections,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "GSTIN Verification",
      hi: "GSTIN सत्यापन"
    },

    category: {
      en: "Business",
      hi: "व्यवसाय"
    },

    price: {
      en: "₹29 onwards",
      hi: "₹29 से शुरू"
    },

    summary: {
      en: "Verify the authenticity and current status of any GSTIN — useful for vendor onboarding, compliance, and business verification.",
      hi: "किसी भी GSTIN की प्रामाणिकता और वर्तमान स्थिति की जांच करें — विक्रेता सत्यापन, अनुपालन और व्यवसाय संबंधी जांच के लिए उपयोगी।"
    },

    benefits: {
      en: [
        "Confirms whether the provided GSTIN is valid, active, and associated with a registered business.",
        "Useful for vendor onboarding, due diligence, and compliance checks before entering into a business transaction.",
        "Cross-verification of the business or legal name and registration details associated with the GSTIN.",
        "Quick verification to help avoid unnecessary delays in business decisions.",
        "Guidance on the next steps if a discrepancy, cancelled status, or inactive GSTIN is identified.",
        "Verification details can be retained for internal compliance, vendor records, or audit purposes."
      ],

      hi: [
        "दिए गए GSTIN की वैधता, सक्रिय स्थिति और पंजीकृत व्यवसाय से संबंधित जानकारी की जांच करने में सहायता।",
        "व्यावसायिक लेनदेन से पहले विक्रेता ऑनबोर्डिंग, ड्यू डिलिजेंस और अनुपालन जांच के लिए उपयोगी।",
        "GSTIN से जुड़े व्यवसाय या कानूनी नाम और रजिस्ट्रेशन विवरण का क्रॉस-वेरिफिकेशन।",
        "त्वरित सत्यापन की सुविधा, ताकि व्यवसाय से जुड़े निर्णय लेने में अनावश्यक देरी न हो।",
        "यदि GSTIN में कोई अंतर, रद्द स्थिति या निष्क्रिय स्थिति मिलती है, तो आगे की प्रक्रिया के बारे में मार्गदर्शन।",
        "सत्यापन संबंधी विवरण को आंतरिक अनुपालन, विक्रेता रिकॉर्ड या ऑडिट के लिए सुरक्षित रखने की सुविधा।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is GSTIN Verification?",
          a: "GSTIN Verification is the process of checking whether a Goods and Services Tax Identification Number is valid and associated with the correct registered business details. It is useful for verifying vendors, suppliers, and business partners."
        },
        {
          q: "Who needs GSTIN Verification?",
          a: "Businesses, companies, proprietors, vendors, and individuals involved in commercial transactions may use GSTIN verification to check the registration details and current status of a supplier, customer, or business partner."
        },
        {
          q: "What documents are required for GSTIN Verification?",
          a: "The primary information required is the GSTIN you want to verify. Additional business details may be requested if a more detailed verification is needed. Physical or original documents are generally not required for basic GSTIN verification."
        },
        {
          q: "What is the process for GSTIN Verification?",
          a: "The process involves providing the GSTIN, checking the applicable GST registration records, verifying the associated business details and status, and sharing the verification result with the client."
        },
        {
          q: "How long does GSTIN Verification take to process?",
          a: "Basic GSTIN verification is generally completed quickly, often within 1–2 working days when the required information is available. The actual turnaround may vary depending on the verification requirements and availability of the relevant records."
        },
        {
          q: "What are the charges involved in GSTIN Verification?",
          a: "The service facilitation charge depends on the verification requested. Basic GSTIN verification generally does not involve a separate government application fee, but any applicable official charges, if required for a specific service, are separate from the service fee."
        },
        {
          q: "What happens if my GSTIN Verification shows incorrect or inactive details?",
          a: "If the GSTIN appears inactive, cancelled, invalid, or the business details do not match, the discrepancy can be reviewed. Further verification or clarification may be required from the GST registration holder before proceeding with the business transaction."
        },
        {
          q: "How does Aarambh India help with GSTIN Verification?",
          a: "Aarambh India checks the provided GSTIN and associated registration details, helps identify discrepancies or status issues, and provides the verification result and relevant guidance through WhatsApp."
        }
      ],

      hi: [
        {
          q: "GSTIN सत्यापन क्या है?",
          a: "GSTIN सत्यापन वह प्रक्रिया है जिसमें यह जांच की जाती है कि Goods and Services Tax Identification Number वैध है या नहीं और सही पंजीकृत व्यवसाय विवरण से जुड़ा है या नहीं। यह विक्रेता, सप्लायर और बिज़नेस पार्टनर के सत्यापन के लिए उपयोगी है।"
        },
        {
          q: "GSTIN सत्यापन किसे करवाना चाहिए?",
          a: "व्यवसाय, कंपनियां, प्रोपराइटर, विक्रेता और व्यावसायिक लेनदेन से जुड़े व्यक्ति किसी सप्लायर, ग्राहक या बिज़नेस पार्टनर के GST रजिस्ट्रेशन विवरण और वर्तमान स्थिति की जांच के लिए GSTIN सत्यापन करवा सकते हैं।"
        },
        {
          q: "GSTIN सत्यापन के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "मुख्य रूप से जिस GSTIN की जांच करनी है, उसकी आवश्यकता होती है। अधिक विस्तृत सत्यापन के लिए अतिरिक्त व्यवसाय संबंधी जानकारी मांगी जा सकती है। सामान्य GSTIN सत्यापन के लिए भौतिक या मूल दस्तावेजों की आमतौर पर आवश्यकता नहीं होती।"
        },
        {
          q: "GSTIN सत्यापन की प्रक्रिया क्या है?",
          a: "प्रक्रिया में GSTIN उपलब्ध कराना, संबंधित GST रजिस्ट्रेशन रिकॉर्ड की जांच करना, उससे जुड़े व्यवसाय विवरण और वर्तमान स्थिति का सत्यापन करना तथा सत्यापन का परिणाम ग्राहक के साथ साझा करना शामिल है।"
        },
        {
          q: "GSTIN सत्यापन में कितना समय लगता है?",
          a: "बेसिक GSTIN सत्यापन सामान्यतः जल्दी पूरा हो जाता है और आवश्यक जानकारी उपलब्ध होने पर लगभग 1–2 कार्य दिवस लग सकते हैं। वास्तविक समय सत्यापन की आवश्यकता और संबंधित रिकॉर्ड की उपलब्धता पर निर्भर कर सकता है।"
        },
        {
          q: "GSTIN सत्यापन के लिए कितने शुल्क लगते हैं?",
          a: "सेवा सुविधा शुल्क आवश्यक सत्यापन के प्रकार पर निर्भर करता है। बेसिक GSTIN सत्यापन के लिए सामान्यतः अलग से सरकारी आवेदन शुल्क नहीं होता, लेकिन किसी विशेष सेवा के लिए लागू आधिकारिक शुल्क होने पर वह सेवा शुल्क से अलग हो सकता है।"
        },
        {
          q: "यदि GSTIN सत्यापन में गलत या निष्क्रिय विवरण दिखाई दें तो क्या होगा?",
          a: "यदि GSTIN निष्क्रिय, रद्द या अमान्य दिखाई देता है या व्यवसाय विवरण मेल नहीं खाते हैं, तो अंतर की जांच की जा सकती है। व्यावसायिक लेनदेन आगे बढ़ाने से पहले GST रजिस्ट्रेशन धारक से अतिरिक्त सत्यापन या स्पष्टीकरण की आवश्यकता हो सकती है।"
        },
        {
          q: "Aarambh India GSTIN सत्यापन में कैसे सहायता करता है?",
          a: "Aarambh India दिए गए GSTIN और उससे जुड़े रजिस्ट्रेशन विवरण की जांच करता है, किसी भी अंतर या स्टेटस संबंधी समस्या की पहचान करने में सहायता करता है और सत्यापन का परिणाम तथा आवश्यक मार्गदर्शन WhatsApp के माध्यम से साझा करता है।"
        }
      ]
    }
  },
  {
    id: "gst-registration",
    image: gst_collections,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "GST Registration",
      hi: "GST रजिस्ट्रेशन"
    },

    category: {
      en: "Business",
      hi: "व्यवसाय"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹499 onwards",
      hi: "₹499 से शुरू"
    },

    summary: {
      en: "Get your new GST Registration — suitable for businesses that cross the applicable turnover threshold or need GST registration for their business activities.",
      hi: "अपना नया GST रजिस्ट्रेशन करवाएं — उन व्यवसायों के लिए उपयोगी जो लागू टर्नओवर सीमा पार करते हैं या अपनी व्यावसायिक गतिविधियों के लिए GST रजिस्ट्रेशन की आवश्यकता रखते हैं।"
    },

    benefits: {
      en: [
        "Helps register your business under GST when registration is mandatory or otherwise applicable to your business activity.",
        "Guidance on the appropriate registration requirements based on your business type, activities, and applicable turnover threshold.",
        "Assistance preparing and organising the required documents before submitting the application.",
        "Careful and accurate application filing to reduce avoidable queries, errors, or delays from the GST department.",
        "Regular status updates from application submission until your GSTIN is issued.",
        "Guidance on ongoing GST return filing and compliance requirements after registration."
      ],

      hi: [
        "जहां GST रजिस्ट्रेशन अनिवार्य या व्यवसाय की गतिविधि के अनुसार लागू हो, वहां व्यवसाय को GST के तहत पंजीकृत कराने में सहायता।",
        "आपके व्यवसाय के प्रकार, गतिविधियों और लागू टर्नओवर सीमा के आधार पर रजिस्ट्रेशन आवश्यकताओं के बारे में मार्गदर्शन।",
        "आवेदन जमा करने से पहले आवश्यक दस्तावेज तैयार और व्यवस्थित करने में सहायता।",
        "GST विभाग की अनावश्यक आपत्तियों, गलतियों या देरी को कम करने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "आवेदन जमा करने से लेकर GSTIN जारी होने तक नियमित स्टेटस अपडेट।",
        "रजिस्ट्रेशन के बाद GST रिटर्न फाइलिंग और लागू अनुपालन आवश्यकताओं के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is GST Registration?",
          a: "GST Registration is the process of registering an eligible business under the Goods and Services Tax system and obtaining a GSTIN. Registration may be mandatory based on applicable turnover thresholds, business activities, or other provisions."
        },
        {
          q: "Who needs GST Registration?",
          a: "Businesses, proprietors, companies, partnerships, and other eligible entities may need GST registration when required under applicable GST rules, including based on turnover, the nature of supplies, or specific business activities."
        },
        {
          q: "What documents are required for GST Registration?",
          a: "The documents typically required may include PAN, Aadhaar or applicable identity proof, business address proof, bank account details, photographs, and business constitution documents where applicable. Clear scanned or photographed copies are generally sufficient for application submission."
        },
        {
          q: "What is the process for GST Registration?",
          a: "The process involves determining GST registration eligibility, collecting the required documents, accurately completing the GST application, submitting it through the applicable GST portal process, completing verification, responding to any query if raised, and tracking the application until the GSTIN is issued."
        },
        {
          q: "How long does GST Registration take to process?",
          a: "A straightforward GST registration may be processed in around 5–7 working days, but the actual timeline can vary depending on document verification, Aadhaar or other verification requirements, departmental queries, physical verification where applicable, and the workload of the concerned department."
        },
        {
          q: "What are the charges involved in GST Registration?",
          a: "GST registration itself generally does not have a separate government application fee when filed through the official GST portal. The service facilitation charge is separate. Any applicable professional, statutory, or other official charges, where relevant, are communicated before proceeding."
        },
        {
          q: "What happens if my GST Registration application is rejected or delayed?",
          a: "An application may be delayed or rejected due to incorrect business details, incomplete documents, address or identity mismatches, verification issues, or queries raised by the GST department. The issue can usually be addressed and the application corrected or resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with GST Registration?",
          a: "Aarambh India checks the required documents, assists with accurately preparing and submitting the GST application, provides guidance if a departmental query is raised, and gives regular WhatsApp status updates until the GSTIN is issued."
        }
      ],

      hi: [
        {
          q: "GST रजिस्ट्रेशन क्या है?",
          a: "GST रजिस्ट्रेशन वह प्रक्रिया है जिसमें पात्र व्यवसाय को Goods and Services Tax प्रणाली के तहत पंजीकृत किया जाता है और GSTIN प्राप्त होता है। टर्नओवर सीमा, व्यवसाय की गतिविधि या अन्य लागू प्रावधानों के आधार पर GST रजिस्ट्रेशन आवश्यक हो सकता है।"
        },
        {
          q: "GST रजिस्ट्रेशन किसे करवाना चाहिए?",
          a: "व्यवसाय, प्रोपराइटर, कंपनियां, पार्टनरशिप और अन्य पात्र संस्थाओं को लागू GST नियमों के अनुसार GST रजिस्ट्रेशन की आवश्यकता हो सकती है। यह टर्नओवर, वस्तुओं या सेवाओं की आपूर्ति की प्रकृति और विशेष व्यावसायिक गतिविधियों पर निर्भर कर सकता है।"
        },
        {
          q: "GST रजिस्ट्रेशन के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः PAN, आधार या लागू पहचान प्रमाण, व्यवसाय के पते का प्रमाण, बैंक खाते का विवरण, फोटो और जहां लागू हो वहां व्यवसाय की संरचना से संबंधित दस्तावेज आवश्यक हो सकते हैं। आवेदन के लिए स्पष्ट स्कैन कॉपी या फोटो सामान्यतः पर्याप्त हो सकती है।"
        },
        {
          q: "GST रजिस्ट्रेशन की प्रक्रिया क्या है?",
          a: "प्रक्रिया में GST रजिस्ट्रेशन की पात्रता की जांच करना, आवश्यक दस्तावेज तैयार करना, GST आवेदन को सही तरीके से भरना, लागू GST पोर्टल प्रक्रिया के माध्यम से आवेदन जमा करना, सत्यापन पूरा करना, आवश्यकता होने पर विभाग द्वारा उठाई गई आपत्ति या प्रश्न का जवाब देना और GSTIN जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "GST रजिस्ट्रेशन होने में कितना समय लगता है?",
          a: "सामान्य GST रजिस्ट्रेशन में लगभग 5–7 कार्य दिवस लग सकते हैं, लेकिन वास्तविक समय दस्तावेज सत्यापन, आधार या अन्य सत्यापन आवश्यकताओं, विभागीय प्रश्नों, जहां लागू हो वहां भौतिक सत्यापन और संबंधित विभाग के कार्यभार पर निर्भर कर सकता है।"
        },
        {
          q: "GST रजिस्ट्रेशन के लिए कितने शुल्क लगते हैं?",
          a: "आधिकारिक GST पोर्टल के माध्यम से GST रजिस्ट्रेशन के लिए सामान्यतः अलग से सरकारी आवेदन शुल्क नहीं होता। सेवा सुविधा शुल्क अलग होता है। जहां लागू हो वहां किसी पेशेवर, वैधानिक या अन्य आधिकारिक शुल्क की जानकारी प्रक्रिया शुरू करने से पहले दी जाती है।"
        },
        {
          q: "यदि GST रजिस्ट्रेशन का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आवेदन में गलत व्यवसाय विवरण, अधूरे दस्तावेज, पते या पहचान संबंधी अंतर, सत्यापन संबंधी समस्या या GST विभाग द्वारा उठाए गए प्रश्नों के कारण देरी या अस्वीकृति हो सकती है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन को सही करके दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India GST रजिस्ट्रेशन में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की जांच करता है, GST आवेदन को सही तरीके से तैयार और जमा करने में सहायता करता है, विभाग द्वारा आपत्ति या प्रश्न उठाए जाने पर मार्गदर्शन देता है और GSTIN जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "udyam-registration",
    image: udyam,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Udyam Registration",
      hi: "उद्यम रजिस्ट्रेशन"
    },

    category: {
      en: "Business",
      hi: "व्यवसाय"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹299 onwards",
      hi: "₹299 से शुरू"
    },

    summary: {
      en: "Get your MSME/Udyam Registration — useful for accessing eligible government tenders, business loans, subsidies, and other MSME benefits.",
      hi: "अपना MSME/उद्यम रजिस्ट्रेशन करवाएं — पात्र सरकारी टेंडर, बिज़नेस लोन, सब्सिडी और अन्य MSME लाभ प्राप्त करने के लिए उपयोगी।"
    },

    benefits: {
      en: [
        "Registers your eligible business under Udyam (MSME), helping you access applicable government schemes, tenders, subsidies, and other MSME benefits.",
        "Guidance on the applicable enterprise classification — micro, small, or medium — based on the relevant investment and turnover criteria.",
        "Assistance completing the Aadhaar-based online registration accurately.",
        "Careful review of the information submitted to reduce common data-entry errors and processing issues.",
        "Regular status tracking until your Udyam Registration certificate is generated.",
        "Guidance on the government schemes, support programs, and benefits for which your registered enterprise may be eligible."
      ],

      hi: [
        "पात्र व्यवसाय को उद्यम (MSME) के तहत रजिस्टर कराने में सहायता, जिससे लागू सरकारी योजनाओं, टेंडर, सब्सिडी और अन्य MSME लाभों तक पहुंच मिल सके।",
        "लागू निवेश और टर्नओवर मानदंड के आधार पर माइक्रो, स्मॉल या मीडियम एंटरप्राइज की सही श्रेणी के बारे में मार्गदर्शन।",
        "आधार-आधारित ऑनलाइन रजिस्ट्रेशन प्रक्रिया को सही तरीके से पूरा करने में सहायता।",
        "आवेदन में सामान्य डेटा एंट्री गलतियों और प्रोसेसिंग संबंधी समस्याओं को कम करने के लिए जानकारी की सावधानीपूर्वक जांच।",
        "उद्यम रजिस्ट्रेशन प्रमाण पत्र जारी होने तक नियमित स्टेटस ट्रैकिंग।",
        "रजिस्ट्रेशन के बाद लागू सरकारी योजनाओं, सहायता कार्यक्रमों और संभावित MSME लाभों के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Udyam Registration?",
          a: "Udyam Registration is the official registration process for eligible Micro, Small and Medium Enterprises (MSMEs) in India. It provides a Udyam Registration Number and certificate that can be used to access applicable MSME schemes, benefits, and opportunities."
        },
        {
          q: "Who needs Udyam Registration?",
          a: "Eligible micro, small, and medium enterprises, including proprietorships, partnerships, companies, and other qualifying business entities, may obtain Udyam Registration to access applicable MSME benefits and schemes."
        },
        {
          q: "What documents are required for Udyam Registration?",
          a: "The registration is primarily Aadhaar-based and may require PAN, business details, bank account information, and other details depending on the enterprise and applicable requirements. Physical original documents are generally not required for basic online registration."
        },
        {
          q: "What is the process for Udyam Registration?",
          a: "The process involves verifying eligibility, providing the required Aadhaar and business details, completing the online Udyam application, submitting the required information, completing applicable verification, and obtaining the Udyam Registration Number and certificate."
        },
        {
          q: "How long does Udyam Registration take to process?",
          a: "The registration can often be completed within 1–3 working days when the required information and verification are available. The actual timeline may vary depending on verification and portal processing, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Udyam Registration?",
          a: "The official Udyam Registration process through the government portal does not generally require a government registration fee. Aarambh India's service facilitation charge is separate and covers assistance with the application and process."
        },
        {
          q: "What happens if my Udyam Registration application is rejected or delayed?",
          a: "An application may be delayed or require correction due to incorrect Aadhaar or PAN details, mismatched business information, incomplete information, or verification issues. The details can generally be corrected and the registration process completed where applicable."
        },
        {
          q: "How does Aarambh India help with Udyam Registration?",
          a: "Aarambh India verifies the required information, assists with accurately completing the Udyam application, helps reduce common data-entry errors, and provides regular WhatsApp status updates until the Udyam Registration certificate is generated."
        }
      ],

      hi: [
        {
          q: "उद्यम रजिस्ट्रेशन क्या है?",
          a: "उद्यम रजिस्ट्रेशन भारत में पात्र Micro, Small और Medium Enterprises (MSMEs) के लिए आधिकारिक रजिस्ट्रेशन प्रक्रिया है। इसके माध्यम से उद्यम रजिस्ट्रेशन नंबर और प्रमाण पत्र प्राप्त होता है, जिसका उपयोग लागू MSME योजनाओं, लाभों और अवसरों के लिए किया जा सकता है।"
        },
        {
          q: "उद्यम रजिस्ट्रेशन किसे करवाना चाहिए?",
          a: "पात्र माइक्रो, स्मॉल और मीडियम एंटरप्राइज, जिनमें प्रोपराइटरशिप, पार्टनरशिप, कंपनियां और अन्य योग्य व्यवसाय शामिल हो सकते हैं, लागू MSME लाभों और सरकारी योजनाओं का लाभ लेने के लिए उद्यम रजिस्ट्रेशन करवा सकते हैं।"
        },
        {
          q: "उद्यम रजिस्ट्रेशन के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "रजिस्ट्रेशन मुख्य रूप से आधार-आधारित होता है और इसमें PAN, व्यवसाय का विवरण, बैंक खाते की जानकारी तथा व्यवसाय के अनुसार अन्य आवश्यक जानकारी मांगी जा सकती है। बेसिक ऑनलाइन रजिस्ट्रेशन के लिए भौतिक मूल दस्तावेजों की सामान्यतः आवश्यकता नहीं होती।"
        },
        {
          q: "उद्यम रजिस्ट्रेशन की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, आवश्यक आधार और व्यवसाय संबंधी जानकारी देना, ऑनलाइन उद्यम आवेदन पूरा करना, आवश्यक जानकारी जमा करना, लागू सत्यापन पूरा करना और उद्यम रजिस्ट्रेशन नंबर एवं प्रमाण पत्र प्राप्त करना शामिल है।"
        },
        {
          q: "उद्यम रजिस्ट्रेशन होने में कितना समय लगता है?",
          a: "आवश्यक जानकारी और सत्यापन उपलब्ध होने पर रजिस्ट्रेशन सामान्यतः 1–3 कार्य दिवस में पूरा हो सकता है। वास्तविक समय सत्यापन और पोर्टल प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "उद्यम रजिस्ट्रेशन के लिए कितने शुल्क लगते हैं?",
          a: "सरकारी पोर्टल के माध्यम से आधिकारिक उद्यम रजिस्ट्रेशन के लिए सामान्यतः कोई सरकारी रजिस्ट्रेशन शुल्क नहीं होता। Aarambh India का सेवा सुविधा शुल्क अलग है, जिसमें आवेदन और प्रक्रिया में सहायता शामिल होती है।"
        },
        {
          q: "यदि उद्यम रजिस्ट्रेशन का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आधार या PAN विवरण में गलती, व्यवसाय संबंधी जानकारी में अंतर, अधूरी जानकारी या सत्यापन संबंधी समस्या के कारण आवेदन में देरी या सुधार की आवश्यकता हो सकती है। आवश्यक जानकारी को सही करके जहां लागू हो वहां रजिस्ट्रेशन प्रक्रिया पूरी की जा सकती है।"
        },
        {
          q: "Aarambh India उद्यम रजिस्ट्रेशन में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक जानकारी की जांच करता है, उद्यम आवेदन को सही तरीके से भरने में सहायता करता है, सामान्य डेटा एंट्री गलतियों को कम करने में मदद करता है और उद्यम रजिस्ट्रेशन प्रमाण पत्र जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "itr-filing",
    image: itr_blog,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "ITR Filing",
      hi: "ITR फाइलिंग"
    },

    category: {
      en: "Business",
      hi: "व्यवसाय"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹999 onwards",
      hi: "₹999 से शुरू"
    },

    summary: {
      en: "Get expert assistance with Income Tax Return filing — suitable for salaried individuals, business owners, freelancers, and other eligible taxpayers.",
      hi: "इनकम टैक्स रिटर्न (ITR) फाइलिंग में विशेषज्ञ सहायता प्राप्त करें — वेतनभोगी व्यक्तियों, व्यवसाय मालिकों, फ्रीलांसरों और अन्य पात्र करदाताओं के लिए उपयोगी।"
    },

    benefits: {
      en: [
        "Assistance filing your Income Tax Return accurately based on your income sources and applicable tax requirements.",
        "Guidance on selecting the appropriate ITR form based on your income, employment, business, investments, and other applicable sources.",
        "Careful computation of taxable income, eligible deductions, applicable tax liability, and refund where applicable.",
        "Assistance organising Form 16, income records, bank statements, investment proofs, and other supporting information.",
        "Timely filing support to help avoid applicable late-filing consequences and unnecessary delays.",
        "Regular updates until your return is successfully filed and the filing acknowledgement is received."
      ],

      hi: [
        "आपकी आय के स्रोत और लागू टैक्स आवश्यकताओं के आधार पर Income Tax Return सही तरीके से फाइल करने में सहायता।",
        "आपकी आय, नौकरी, व्यवसाय, निवेश और अन्य लागू आय स्रोतों के आधार पर सही ITR फॉर्म चुनने में मार्गदर्शन।",
        "कर योग्य आय, पात्र कटौतियों, लागू टैक्स देयता और जहां लागू हो वहां रिफंड की सावधानीपूर्वक गणना।",
        "Form 16, आय संबंधी रिकॉर्ड, बैंक स्टेटमेंट, निवेश प्रमाण और अन्य आवश्यक जानकारी व्यवस्थित करने में सहायता।",
        "समय पर ITR फाइलिंग में सहायता, ताकि लागू लेट-फाइलिंग परिणामों और अनावश्यक देरी से बचने में मदद मिल सके।",
        "रिटर्न सफलतापूर्वक फाइल होने और फाइलिंग acknowledgement प्राप्त होने तक नियमित स्टेटस अपडेट।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is ITR (Income Tax Return)?",
          a: "An Income Tax Return (ITR) is a return filed with the Income Tax Department to report your income, deductions, taxes paid, and applicable tax liability or refund for a financial year. An ITR may also be useful as income proof for loans, visas, and other official requirements."
        },
        {
          q: "Who needs ITR Filing?",
          a: "Individuals and businesses who are required to file an income tax return under applicable tax rules may need ITR filing. Salaried individuals, freelancers, professionals, business owners, and other taxpayers may need to file depending on their income and circumstances."
        },
        {
          q: "What documents are required for ITR Filing?",
          a: "The documents typically required may include PAN, Aadhaar, Form 16 or other income proof, bank statements, investment or deduction proofs, and details of other income sources where applicable. Clear digital copies or relevant financial records are generally sufficient for preparing the return."
        },
        {
          q: "What is the process for ITR Filing?",
          a: "The process involves collecting income and deduction details, selecting the applicable ITR form, calculating taxable income and tax liability, preparing the return, submitting it through the applicable Income Tax Department process, and completing verification or e-verification after filing."
        },
        {
          q: "How long does ITR Filing take to process?",
          a: "Preparation and filing of a straightforward ITR may typically take around 3–7 working days after all required information is received. The actual processing of the filed return by the Income Tax Department can take longer and is separate from the filing timeline."
        },
        {
          q: "What are the charges involved in ITR Filing?",
          a: "The service fee depends on the type and complexity of the ITR filing. Any applicable government tax, interest, late-filing fee, or other statutory amount is separate from the service facilitation charge and is communicated before proceeding."
        },
        {
          q: "What happens if my ITR is defective, rejected, or delayed?",
          a: "An ITR may require correction or additional action due to incorrect information, missing details, data mismatches, or other issues identified during processing. The issue can generally be reviewed and the required correction, response, or revised return can be completed where applicable."
        },
        {
          q: "How does Aarambh India help with ITR Filing?",
          a: "Aarambh India reviews the required income and supporting information, assists with selecting the applicable ITR form, helps prepare and submit the return, guides you through applicable verification, and provides regular WhatsApp updates regarding the filing process."
        }
      ],

      hi: [
        {
          q: "ITR (Income Tax Return) क्या है?",
          a: "Income Tax Return (ITR) वह रिटर्न है जो Income Tax Department के पास किसी वित्तीय वर्ष की आय, कटौतियों, जमा किए गए टैक्स और लागू टैक्स देयता या रिफंड की जानकारी देने के लिए फाइल किया जाता है। ITR लोन, वीज़ा और अन्य आधिकारिक आवश्यकताओं के लिए आय प्रमाण के रूप में भी उपयोगी हो सकता है।"
        },
        {
          q: "ITR फाइलिंग किसे करवानी चाहिए?",
          a: "जिन व्यक्तियों और व्यवसायों के लिए लागू टैक्स नियमों के अनुसार Income Tax Return फाइल करना आवश्यक है, उन्हें ITR फाइल करना पड़ सकता है। वेतनभोगी व्यक्ति, फ्रीलांसर, प्रोफेशनल, व्यवसाय मालिक और अन्य करदाताओं की आवश्यकता उनकी आय और परिस्थितियों पर निर्भर करती है।"
        },
        {
          q: "ITR फाइलिंग के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः PAN, आधार, Form 16 या अन्य आय प्रमाण, बैंक स्टेटमेंट, निवेश या कटौती संबंधी प्रमाण और जहां लागू हो वहां अन्य आय स्रोतों की जानकारी आवश्यक हो सकती है। ITR तैयार करने के लिए स्पष्ट डिजिटल कॉपी या संबंधित वित्तीय रिकॉर्ड सामान्यतः पर्याप्त होते हैं।"
        },
        {
          q: "ITR फाइलिंग की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आय और कटौती संबंधी जानकारी एकत्र करना, लागू ITR फॉर्म चुनना, कर योग्य आय और टैक्स देयता की गणना करना, रिटर्न तैयार करना, Income Tax Department की लागू प्रक्रिया के माध्यम से रिटर्न जमा करना और फाइलिंग के बाद आवश्यक सत्यापन या e-verification पूरा करना शामिल है।"
        },
        {
          q: "ITR फाइलिंग में कितना समय लगता है?",
          a: "सभी आवश्यक जानकारी प्राप्त होने के बाद सामान्य ITR तैयार करने और फाइल करने में लगभग 3–7 कार्य दिवस लग सकते हैं। हालांकि, Income Tax Department द्वारा फाइल किए गए रिटर्न की वास्तविक प्रोसेसिंग में अधिक समय लग सकता है और यह फाइलिंग समय से अलग है।"
        },
        {
          q: "ITR फाइलिंग के लिए कितने शुल्क लगते हैं?",
          a: "सेवा शुल्क ITR फाइलिंग के प्रकार और उसकी जटिलता पर निर्भर करता है। जहां लागू हो वहां सरकारी टैक्स, ब्याज, लेट-फाइलिंग शुल्क या अन्य वैधानिक राशि सेवा सुविधा शुल्क से अलग होगी और प्रक्रिया शुरू करने से पहले इसकी जानकारी दी जाती है।"
        },
        {
          q: "यदि ITR में गलती हो, रिटर्न अस्वीकार हो या प्रोसेसिंग में देरी हो तो क्या होगा?",
          a: "गलत जानकारी, अधूरे विवरण, डेटा में अंतर या प्रोसेसिंग के दौरान सामने आने वाली अन्य समस्याओं के कारण ITR में सुधार या अतिरिक्त कार्रवाई की आवश्यकता हो सकती है। समस्या की जांच करके जहां लागू हो वहां सुधार, आवश्यक जवाब या revised return की प्रक्रिया पूरी की जा सकती है।"
        },
        {
          q: "Aarambh India ITR फाइलिंग में कैसे सहायता करता है?",
          a: "Aarambh India आपकी आय और आवश्यक सहायक जानकारी की जांच करता है, लागू ITR फॉर्म चुनने में सहायता करता है, रिटर्न तैयार और जमा करने में मदद करता है, आवश्यक सत्यापन में मार्गदर्शन देता है और फाइलिंग प्रक्रिया से संबंधित नियमित स्टेटस अपडेट WhatsApp के माध्यम से देता है।"
        }
      ]
    }
  },
  {
    id: "dl-aadhaar-link",
    image: dl_aadhar,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "DL Aadhaar Link",
      hi: "ड्राइविंग लाइसेंस–आधार लिंक"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    price: {
      en: "₹99 onwards",
      hi: "₹99 से शुरू"
    },

    summary: {
      en: "Link your Driving Licence with Aadhaar — simplify identity verification and access applicable online transport services more conveniently.",
      hi: "अपने ड्राइविंग लाइसेंस को आधार से लिंक करें — पहचान सत्यापन को आसान बनाएं और लागू ऑनलाइन परिवहन सेवाओं का अधिक सुविधाजनक तरीके से लाभ उठाएं।"
    },

    benefits: {
      en: [
        "Assistance linking your Driving Licence with Aadhaar for applicable digital verification and transport-related services.",
        "Guidance on the applicable online linking process and the details required for submission.",
        "Careful matching of your DL and Aadhaar details to help prevent avoidable verification mismatches.",
        "Assistance identifying and addressing discrepancies between your Driving Licence and Aadhaar records.",
        "Status tracking until the linking request is processed or confirmation is available.",
        "Guidance on related RTO services where Aadhaar-linked verification may be applicable."
      ],

      hi: [
        "लागू डिजिटल सत्यापन और परिवहन संबंधी सेवाओं के लिए ड्राइविंग लाइसेंस को आधार से लिंक करने में सहायता।",
        "ऑनलाइन लिंकिंग प्रक्रिया और आवेदन के लिए आवश्यक विवरणों के बारे में मार्गदर्शन।",
        "अनावश्यक सत्यापन संबंधी अंतर से बचने के लिए DL और आधार विवरण का सावधानीपूर्वक मिलान।",
        "ड्राइविंग लाइसेंस और आधार रिकॉर्ड के बीच किसी भी अंतर की पहचान और उसे ठीक करने में सहायता।",
        "लिंकिंग अनुरोध प्रोसेस होने या पुष्टि उपलब्ध होने तक स्टेटस ट्रैकिंग।",
        "जहां आधार-लिंक सत्यापन लागू हो, वहां संबंधित RTO सेवाओं के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is DL Aadhaar Link?",
          a: "DL Aadhaar Link refers to linking or associating your Driving Licence details with Aadhaar where the applicable transport service or verification process supports such linking. It can help simplify identity verification for eligible services."
        },
        {
          q: "Who needs DL Aadhaar Link?",
          a: "Drivers or Driving Licence holders who are required or choose to complete Aadhaar-based verification for an applicable transport or RTO service may need to provide their DL and Aadhaar details."
        },
        {
          q: "What documents are required for DL Aadhaar Link?",
          a: "The key information typically required is your valid Driving Licence number and Aadhaar number. Additional information may be required depending on the applicable portal or service. Physical original documents are generally not required for basic online submission."
        },
        {
          q: "What is the process for DL Aadhaar Link?",
          a: "The process involves providing the required DL and Aadhaar details, verifying the information, completing the applicable online linking or authentication process, and tracking the request until the linking status or confirmation is available."
        },
        {
          q: "How long does DL Aadhaar Link take to process?",
          a: "The typical processing time may be around 3–7 working days where departmental processing is involved. Some online verification requests may be completed sooner. The actual timeline depends on the applicable portal, verification requirements, and department processing."
        },
        {
          q: "What are the charges involved in DL Aadhaar Link?",
          a: "There may be an applicable government or departmental fee depending on the specific transport service. Any official fee is separate from the service facilitation charge, and the applicable amount is communicated before proceeding."
        },
        {
          q: "What happens if my DL Aadhaar Link request is rejected or delayed?",
          a: "A request may be delayed or require correction due to mismatched personal details, incorrect DL or Aadhaar information, incomplete verification, or technical issues on the applicable portal. The details can be reviewed and the request resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with DL Aadhaar Link?",
          a: "Aarambh India verifies the provided details, assists with the applicable linking or verification process, helps identify discrepancies, and provides regular WhatsApp updates until the request is processed."
        }
      ],

      hi: [
        {
          q: "ड्राइविंग लाइसेंस–आधार लिंक क्या है?",
          a: "ड्राइविंग लाइसेंस–आधार लिंक का अर्थ लागू परिवहन सेवा या सत्यापन प्रक्रिया के तहत ड्राइविंग लाइसेंस के विवरण को आधार से लिंक या संबंधित करना है। इससे पात्र सेवाओं में पहचान सत्यापन को आसान बनाने में सहायता मिल सकती है।"
        },
        {
          q: "ड्राइविंग लाइसेंस–आधार लिंक किसे करवाना चाहिए?",
          a: "जिन ड्राइविंग लाइसेंस धारकों को किसी लागू परिवहन या RTO सेवा के लिए आधार-आधारित सत्यापन पूरा करना आवश्यक है या जो ऐसी सुविधा का उपयोग करना चाहते हैं, उन्हें अपने DL और आधार विवरण उपलब्ध कराने पड़ सकते हैं।"
        },
        {
          q: "ड्राइविंग लाइसेंस–आधार लिंक के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः वैध ड्राइविंग लाइसेंस नंबर और आधार नंबर की आवश्यकता होती है। लागू पोर्टल या सेवा के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है। बेसिक ऑनलाइन आवेदन के लिए भौतिक मूल दस्तावेजों की सामान्यतः आवश्यकता नहीं होती।"
        },
        {
          q: "ड्राइविंग लाइसेंस–आधार लिंक की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक DL और आधार विवरण देना, जानकारी का सत्यापन करना, लागू ऑनलाइन लिंकिंग या प्रमाणीकरण प्रक्रिया पूरी करना और लिंकिंग का स्टेटस या पुष्टि उपलब्ध होने तक अनुरोध को ट्रैक करना शामिल है।"
        },
        {
          q: "ड्राइविंग लाइसेंस–आधार लिंक होने में कितना समय लगता है?",
          a: "जहां विभागीय प्रोसेसिंग आवश्यक हो, वहां सामान्यतः लगभग 3–7 कार्य दिवस लग सकते हैं। कुछ ऑनलाइन सत्यापन अनुरोध इससे पहले भी पूरे हो सकते हैं। वास्तविक समय संबंधित पोर्टल, सत्यापन आवश्यकताओं और विभागीय प्रोसेसिंग पर निर्भर करता है।"
        },
        {
          q: "ड्राइविंग लाइसेंस–आधार लिंक के लिए कितने शुल्क लगते हैं?",
          a: "विशिष्ट परिवहन सेवा के अनुसार सरकारी या विभागीय शुल्क लागू हो सकता है। कोई भी आधिकारिक शुल्क सेवा सुविधा शुल्क से अलग होगा और प्रक्रिया शुरू करने से पहले लागू राशि की जानकारी दी जाएगी।"
        },
        {
          q: "यदि ड्राइविंग लाइसेंस–आधार लिंक का अनुरोध अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "व्यक्तिगत विवरण में अंतर, गलत DL या आधार जानकारी, अधूरा सत्यापन या संबंधित पोर्टल की तकनीकी समस्या के कारण अनुरोध में देरी या सुधार की आवश्यकता हो सकती है। विवरण की जांच करके जहां लागू हो वहां अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India ड्राइविंग लाइसेंस–आधार लिंक में कैसे सहायता करता है?",
          a: "Aarambh India दिए गए विवरणों की जांच करता है, लागू लिंकिंग या सत्यापन प्रक्रिया में सहायता करता है, किसी भी अंतर की पहचान करने में मदद करता है और अनुरोध प्रोसेस होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "dl-address-change",
    image: dl,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "DL Address Change",
      hi: "ड्राइविंग लाइसेंस में पता परिवर्तन"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    price: {
      en: "₹399 onwards",
      hi: "₹399 से शुरू"
    },

    summary: {
      en: "Update the address on your Driving Licence — change your registered address using valid address proof.",
      hi: "अपने ड्राइविंग लाइसेंस में पता अपडेट करें — वैध पते के प्रमाण के साथ नया पता दर्ज करवाएं।"
    },

    benefits: {
      en: [
        "Updates the address on your Driving Licence to reflect your current residential address.",
        "Guidance on the address proof documents accepted for the applicable RTO process.",
        "Careful and accurate application filing to help avoid document-related delays.",
        "Assistance with online submission and appointment scheduling where required.",
        "Regular status updates until the revised Driving Licence is issued.",
        "Support tracking the delivery or dispatch of your updated Driving Licence where applicable."
      ],

      hi: [
        "ड्राइविंग लाइसेंस में वर्तमान निवास पते के अनुसार नया पता अपडेट करवाने में सहायता।",
        "लागू RTO प्रक्रिया में स्वीकार किए जाने वाले पते के प्रमाण दस्तावेजों के बारे में मार्गदर्शन।",
        "दस्तावेज संबंधी गलतियों के कारण होने वाली देरी से बचने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "जहां आवश्यक हो वहां ऑनलाइन आवेदन जमा करने और अपॉइंटमेंट प्रक्रिया में सहायता।",
        "अपडेटेड ड्राइविंग लाइसेंस जारी होने तक नियमित स्टेटस अपडेट।",
        "जहां लागू हो वहां अपडेटेड ड्राइविंग लाइसेंस के डिस्पैच या डिलीवरी को ट्रैक करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is DL Address Change?",
          a: "DL Address Change is the process of updating the registered residential address on your Driving Licence after moving to a new address."
        },
        {
          q: "Who needs DL Address Change?",
          a: "Driving Licence holders who have moved to a new residential address and need their licence records updated with the applicable RTO may apply for an address change."
        },
        {
          q: "What documents are required for DL Address Change?",
          a: "The documents typically required include your existing Driving Licence, valid new address proof, and Aadhaar or another applicable identity document. Additional documents may be required depending on the RTO and specific application."
        },
        {
          q: "What is the process for DL Address Change?",
          a: "The process involves verifying the existing DL details, providing the new address and supporting proof, completing the applicable online application, submitting the required documents, completing verification or an appointment where applicable, and tracking the request until the updated DL is issued."
        },
        {
          q: "How long does DL Address Change take to process?",
          a: "The typical processing time may be around 10–15 working days. The actual timeline can vary depending on document verification, appointment requirements, RTO processing, and the workload of the concerned department, so it should be treated as an estimate."
        },
        {
          q: "What are the charges involved in DL Address Change?",
          a: "There may be an applicable government or RTO fee for updating the Driving Licence address, which is separate from the service facilitation charge. The applicable official amount is communicated before proceeding."
        },
        {
          q: "What happens if my DL Address Change application is rejected or delayed?",
          a: "An application may be delayed or returned due to an invalid address proof, mismatched personal details, incomplete documents, verification issues, or other RTO requirements. The issue can usually be corrected and the request resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with DL Address Change?",
          a: "Aarambh India verifies the required documents, assists with accurately preparing and submitting the address-change application, provides guidance during applicable verification or appointment procedures, and gives regular WhatsApp status updates until the updated DL is issued."
        }
      ],

      hi: [
        {
          q: "ड्राइविंग लाइसेंस में पता परिवर्तन क्या है?",
          a: "ड्राइविंग लाइसेंस में पता परिवर्तन वह प्रक्रिया है जिसमें नए निवास स्थान पर जाने के बाद लाइसेंस में दर्ज पुराने पते को नए पते से अपडेट किया जाता है।"
        },
        {
          q: "ड्राइविंग लाइसेंस में पता परिवर्तन किसे करवाना चाहिए?",
          a: "जिन ड्राइविंग लाइसेंस धारकों का निवास पता बदल गया है और वे अपने लाइसेंस रिकॉर्ड में नया पता अपडेट करवाना चाहते हैं, वे लागू RTO प्रक्रिया के अनुसार पता परिवर्तन के लिए आवेदन कर सकते हैं।"
        },
        {
          q: "ड्राइविंग लाइसेंस में पता परिवर्तन के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः मौजूदा ड्राइविंग लाइसेंस, नए पते का वैध प्रमाण और आधार या अन्य लागू पहचान प्रमाण की आवश्यकता हो सकती है। RTO और आवेदन की स्थिति के अनुसार अतिरिक्त दस्तावेज भी मांगे जा सकते हैं।"
        },
        {
          q: "ड्राइविंग लाइसेंस में पता परिवर्तन की प्रक्रिया क्या है?",
          a: "प्रक्रिया में मौजूदा DL विवरण की जांच करना, नया पता और उसका प्रमाण देना, लागू ऑनलाइन आवेदन पूरा करना, आवश्यक दस्तावेज जमा करना, जहां लागू हो वहां सत्यापन या अपॉइंटमेंट पूरा करना और अपडेटेड DL जारी होने तक अनुरोध का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "ड्राइविंग लाइसेंस में पता परिवर्तन होने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, अपॉइंटमेंट की आवश्यकता, RTO प्रोसेसिंग और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "ड्राइविंग लाइसेंस में पता परिवर्तन के लिए कितने शुल्क लगते हैं?",
          a: "ड्राइविंग लाइसेंस में पता अपडेट करने के लिए सरकारी या RTO शुल्क लागू हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। प्रक्रिया शुरू करने से पहले लागू आधिकारिक शुल्क की जानकारी दी जाती है।"
        },
        {
          q: "यदि ड्राइविंग लाइसेंस में पता परिवर्तन का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "अमान्य पते का प्रमाण, व्यक्तिगत विवरण में अंतर, अधूरे दस्तावेज, सत्यापन संबंधी समस्या या अन्य RTO आवश्यकताओं के कारण आवेदन में देरी या आपत्ति हो सकती है। समस्या को ठीक करने के बाद जहां लागू हो वहां अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India ड्राइविंग लाइसेंस में पता परिवर्तन में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेजों की जांच करता है, पता परिवर्तन आवेदन को सही तरीके से तैयार और जमा करने में सहायता करता है, लागू सत्यापन या अपॉइंटमेंट प्रक्रिया में मार्गदर्शन देता है और अपडेटेड DL जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "duplicate-dl",
    image: dl,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Duplicate Driving License",
      hi: "डुप्लीकेट ड्राइविंग लाइसेंस"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    tag: {
      en: "Fast",
      hi: "त्वरित"
    },

    price: {
      en: "₹399 onwards",
      hi: "₹399 से शुरू"
    },

    summary: {
      en: "Lost or damaged Driving Licence? Get a duplicate DL with assistance through the applicable RTO process.",
      hi: "ड्राइविंग लाइसेंस खो गया है या खराब हो गया है? लागू RTO प्रक्रिया के माध्यम से डुप्लीकेट DL प्राप्त करने में सहायता लें।"
    },

    benefits: {
      en: [
        "Helps obtain a duplicate Driving Licence when the original is lost, stolen, or damaged.",
        "Guidance on the required declaration, loss report, or other supporting documents where applicable.",
        "Careful verification of your existing Driving Licence details before submitting the duplicate DL request.",
        "Assistance with the applicable RTO application process without requiring a fresh driving test where permitted.",
        "Regular status tracking from application submission until the duplicate licence is issued.",
        "Support tracking the dispatch or delivery of your duplicate Driving Licence where applicable."
      ],

      hi: [
        "मूल ड्राइविंग लाइसेंस खो जाने, चोरी होने या खराब हो जाने की स्थिति में डुप्लीकेट ड्राइविंग लाइसेंस प्राप्त करने में सहायता।",
        "जहां लागू हो वहां आवश्यक घोषणा, गुम होने की रिपोर्ट या अन्य सहायक दस्तावेजों के बारे में मार्गदर्शन।",
        "डुप्लीकेट DL के लिए आवेदन करने से पहले मौजूदा ड्राइविंग लाइसेंस विवरण की सावधानीपूर्वक जांच।",
        "जहां अनुमति हो वहां बिना नए ड्राइविंग टेस्ट के लागू RTO आवेदन प्रक्रिया में सहायता।",
        "आवेदन जमा करने से लेकर डुप्लीकेट लाइसेंस जारी होने तक नियमित स्टेटस ट्रैकिंग।",
        "जहां लागू हो वहां डुप्लीकेट ड्राइविंग लाइसेंस के डिस्पैच या डिलीवरी को ट्रैक करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is a Duplicate Driving License?",
          a: "A Duplicate Driving Licence is a replacement licence issued when the original Driving Licence is lost, stolen, damaged, or otherwise needs to be replaced, subject to the applicable RTO requirements."
        },
        {
          q: "Who needs a Duplicate Driving License?",
          a: "Driving Licence holders whose original licence has been lost, stolen, damaged, or become unusable may apply for a duplicate licence through the applicable RTO process."
        },
        {
          q: "What documents are required for a Duplicate Driving License?",
          a: "The documents typically required may include a loss declaration or FIR where applicable, Aadhaar or another identity proof, existing DL number or licence details, and other documents required by the concerned RTO. Additional documents may be requested depending on the circumstances."
        },
        {
          q: "What is the process for a Duplicate Driving License?",
          a: "The process involves verifying the existing DL details, preparing the required declaration or supporting documents, completing the applicable duplicate DL application, submitting it through the RTO process, completing verification where required, and tracking the application until the duplicate licence is issued."
        },
        {
          q: "How long does a Duplicate Driving License take to process?",
          a: "The typical processing time may be around 10–15 working days. The actual timeline can vary depending on document verification, RTO requirements, appointment needs, and departmental workload, so it should be treated as an estimate."
        },
        {
          q: "What are the charges involved in a Duplicate Driving License?",
          a: "There may be an applicable government or RTO fee for issuing a duplicate Driving Licence, which is separate from the service facilitation charge. The applicable official fee is communicated before proceeding."
        },
        {
          q: "What happens if my Duplicate Driving License application is rejected or delayed?",
          a: "An application may be delayed or returned due to incorrect DL details, incomplete loss documentation, identity mismatches, unpaid applicable dues, or other RTO requirements. The issue can generally be corrected and the request resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with a Duplicate Driving License?",
          a: "Aarambh India verifies the available DL details and supporting documents, assists with preparing and submitting the duplicate licence application, provides guidance during the applicable RTO process, and gives regular WhatsApp status updates until the duplicate DL is issued."
        }
      ],

      hi: [
        {
          q: "डुप्लीकेट ड्राइविंग लाइसेंस क्या है?",
          a: "डुप्लीकेट ड्राइविंग लाइसेंस वह प्रतिस्थापन लाइसेंस है जो मूल ड्राइविंग लाइसेंस खो जाने, चोरी होने, खराब होने या उपयोग के योग्य न रहने की स्थिति में लागू RTO आवश्यकताओं के अनुसार जारी किया जाता है।"
        },
        {
          q: "डुप्लीकेट ड्राइविंग लाइसेंस किसे बनवाना चाहिए?",
          a: "जिन ड्राइविंग लाइसेंस धारकों का मूल लाइसेंस खो गया है, चोरी हो गया है, खराब हो गया है या उपयोग के योग्य नहीं रहा है, वे लागू RTO प्रक्रिया के माध्यम से डुप्लीकेट लाइसेंस के लिए आवेदन कर सकते हैं।"
        },
        {
          q: "डुप्लीकेट ड्राइविंग लाइसेंस के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः जहां लागू हो वहां गुम होने की घोषणा या FIR, आधार या अन्य पहचान प्रमाण, मौजूदा DL नंबर या लाइसेंस विवरण और संबंधित RTO द्वारा मांगे गए अन्य दस्तावेज आवश्यक हो सकते हैं। परिस्थिति के अनुसार अतिरिक्त दस्तावेज भी मांगे जा सकते हैं।"
        },
        {
          q: "डुप्लीकेट ड्राइविंग लाइसेंस की प्रक्रिया क्या है?",
          a: "प्रक्रिया में मौजूदा DL विवरण की जांच करना, आवश्यक घोषणा या सहायक दस्तावेज तैयार करना, लागू डुप्लीकेट DL आवेदन पूरा करना, RTO प्रक्रिया के माध्यम से आवेदन जमा करना, जहां आवश्यक हो वहां सत्यापन पूरा करना और डुप्लीकेट लाइसेंस जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "डुप्लीकेट ड्राइविंग लाइसेंस बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, RTO की आवश्यकताओं, अपॉइंटमेंट की जरूरत और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "डुप्लीकेट ड्राइविंग लाइसेंस के लिए कितने शुल्क लगते हैं?",
          a: "डुप्लीकेट ड्राइविंग लाइसेंस जारी करने के लिए सरकारी या RTO शुल्क लागू हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। प्रक्रिया शुरू करने से पहले लागू आधिकारिक शुल्क की जानकारी दी जाती है।"
        },
        {
          q: "यदि डुप्लीकेट ड्राइविंग लाइसेंस का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "गलत DL विवरण, अधूरे गुमशुदगी संबंधी दस्तावेज, पहचान संबंधी अंतर, लागू शुल्क या बकाया राशि तथा अन्य RTO आवश्यकताओं के कारण आवेदन में देरी या आपत्ति हो सकती है। समस्या को ठीक करने के बाद जहां लागू हो वहां अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India डुप्लीकेट ड्राइविंग लाइसेंस में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध DL विवरण और सहायक दस्तावेजों की जांच करता है, डुप्लीकेट लाइसेंस आवेदन तैयार करने और जमा करने में सहायता करता है, लागू RTO प्रक्रिया में मार्गदर्शन देता है और डुप्लीकेट DL जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "learners-license",
    image: ll,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Learner's Licence",
      hi: "लर्नर ड्राइविंग लाइसेंस"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹499 onwards",
      hi: "₹499 से शुरू"
    },

    summary: {
      en: "Get your new Learner's Licence — assistance with the online application, learner's test preparation, and test slot booking process.",
      hi: "अपना नया लर्नर ड्राइविंग लाइसेंस बनवाएं — ऑनलाइन आवेदन, लर्नर टेस्ट की तैयारी और टेस्ट स्लॉट बुकिंग प्रक्रिया में सहायता।"
    },

    benefits: {
      en: [
        "Helps obtain a Learner's Licence, the first licensing step before applying for a Permanent Driving Licence.",
        "Assistance booking the applicable online learner's test slot at a convenient available time.",
        "Guidance on preparing for the RTO learner's theory test and understanding the applicable test requirements.",
        "Careful and accurate application filing to help avoid document or appointment-related issues.",
        "Regular status updates from application submission through the learner's test process.",
        "Guidance on applying for a Permanent Driving Licence after completing the applicable learner's licence period."
      ],

      hi: [
        "लर्नर ड्राइविंग लाइसेंस प्राप्त करने में सहायता, जो स्थायी ड्राइविंग लाइसेंस के लिए आवेदन करने से पहले पहला लाइसेंसिंग चरण है।",
        "उपलब्ध समय के अनुसार लागू ऑनलाइन लर्नर टेस्ट स्लॉट बुक करने में सहायता।",
        "RTO लर्नर थ्योरी टेस्ट की तैयारी और लागू परीक्षा आवश्यकताओं को समझने में मार्गदर्शन।",
        "दस्तावेज या अपॉइंटमेंट संबंधी समस्याओं से बचने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "आवेदन जमा करने से लेकर लर्नर टेस्ट प्रक्रिया तक नियमित स्टेटस अपडेट।",
        "लागू लर्नर लाइसेंस अवधि पूरी होने के बाद स्थायी ड्राइविंग लाइसेंस के लिए आवेदन करने में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is a Learner's Licence?",
          a: "A Learner's Licence (LL) is the licence issued to a person who wants to learn driving legally before applying for a Permanent Driving Licence. It allows learning to drive subject to the applicable rules and conditions."
        },
        {
          q: "Who needs a Learner's Licence?",
          a: "A person who wants to learn to drive a motor vehicle and obtain a Permanent Driving Licence generally needs to first obtain a Learner's Licence through the applicable RTO process."
        },
        {
          q: "What documents are required for a Learner's Licence?",
          a: "The documents typically required may include Aadhaar or another identity proof, age proof, address proof, recent photograph, and other documents depending on the applicant's age, vehicle category, and applicable RTO requirements."
        },
        {
          q: "What is the process for a Learner's Licence?",
          a: "The process generally involves checking eligibility, preparing the required documents, completing the online Learner's Licence application, booking the applicable test slot, appearing for the learner's test, completing verification where required, and receiving the Learner's Licence after successful completion."
        },
        {
          q: "How long does a Learner's Licence take to process?",
          a: "After successful completion of the required test and verification, the Learner's Licence may typically be issued within around 3–7 working days. The actual timeline can vary depending on the RTO, verification process, and departmental workload, so it should be treated as an estimate."
        },
        {
          q: "What are the charges involved in a Learner's Licence?",
          a: "There may be applicable government or RTO fees for the Learner's Licence and test, which are separate from the service facilitation charge. The applicable official amount is communicated before proceeding."
        },
        {
          q: "What happens if my Learner's Licence application is rejected or delayed?",
          a: "An application may be delayed or returned due to incorrect personal details, incomplete documents, failed or missed testing requirements, verification issues, or other RTO requirements. The issue can generally be corrected and the application or test process completed again where applicable."
        },
        {
          q: "How does Aarambh India help with a Learner's Licence?",
          a: "Aarambh India verifies the required information and documents, assists with the online application and test slot booking, provides guidance for the learner's test, and gives regular WhatsApp status updates until the Learner's Licence process is completed."
        }
      ],

      hi: [
        {
          q: "लर्नर ड्राइविंग लाइसेंस क्या है?",
          a: "लर्नर ड्राइविंग लाइसेंस (LL) वह लाइसेंस है जो स्थायी ड्राइविंग लाइसेंस के लिए आवेदन करने से पहले वाहन चलाना सीखने वाले व्यक्ति को जारी किया जाता है। इसके तहत लागू नियमों और शर्तों के अनुसार वाहन चलाना सीखा जा सकता है।"
        },
        {
          q: "लर्नर ड्राइविंग लाइसेंस किसे बनवाना चाहिए?",
          a: "जो व्यक्ति वाहन चलाना सीखना चाहता है और आगे चलकर स्थायी ड्राइविंग लाइसेंस प्राप्त करना चाहता है, उसे सामान्यतः लागू RTO प्रक्रिया के माध्यम से पहले लर्नर ड्राइविंग लाइसेंस प्राप्त करना होता है।"
        },
        {
          q: "लर्नर ड्राइविंग लाइसेंस के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार या अन्य पहचान प्रमाण, आयु प्रमाण, पते का प्रमाण, हाल की फोटो और आवेदक की आयु, वाहन श्रेणी तथा लागू RTO आवश्यकताओं के अनुसार अन्य दस्तावेज आवश्यक हो सकते हैं।"
        },
        {
          q: "लर्नर ड्राइविंग लाइसेंस की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, आवश्यक दस्तावेज तैयार करना, ऑनलाइन लर्नर लाइसेंस आवेदन पूरा करना, लागू टेस्ट स्लॉट बुक करना, लर्नर टेस्ट देना, जहां आवश्यक हो वहां सत्यापन पूरा करना और टेस्ट सफलतापूर्वक पूरा होने के बाद लर्नर लाइसेंस प्राप्त करना शामिल है।"
        },
        {
          q: "लर्नर ड्राइविंग लाइसेंस बनने में कितना समय लगता है?",
          a: "आवश्यक टेस्ट और सत्यापन सफलतापूर्वक पूरा होने के बाद लर्नर लाइसेंस सामान्यतः लगभग 3–7 कार्य दिवस में जारी हो सकता है। वास्तविक समय RTO, सत्यापन प्रक्रिया और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "लर्नर ड्राइविंग लाइसेंस के लिए कितने शुल्क लगते हैं?",
          a: "लर्नर लाइसेंस और टेस्ट के लिए सरकारी या RTO शुल्क लागू हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। प्रक्रिया शुरू करने से पहले लागू आधिकारिक शुल्क की जानकारी दी जाती है।"
        },
        {
          q: "यदि लर्नर ड्राइविंग लाइसेंस का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "गलत व्यक्तिगत विवरण, अधूरे दस्तावेज, टेस्ट से संबंधित समस्या, टेस्ट में अनुपस्थित रहने, सत्यापन संबंधी समस्या या अन्य RTO आवश्यकताओं के कारण आवेदन में देरी या आपत्ति हो सकती है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन या टेस्ट प्रक्रिया दोबारा पूरी की जा सकती है।"
        },
        {
          q: "Aarambh India लर्नर ड्राइविंग लाइसेंस में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक जानकारी और दस्तावेजों की जांच करता है, ऑनलाइन आवेदन और टेस्ट स्लॉट बुकिंग में सहायता करता है, लर्नर टेस्ट की तैयारी के लिए मार्गदर्शन देता है और प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "permanent-dl",
    image: dl,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Permanent Driving Licence",
      hi: "स्थायी ड्राइविंग लाइसेंस"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹999 onwards",
      hi: "₹999 से शुरू"
    },

    summary: {
      en: "Get your Permanent Driving Licence after completing the required Learner's Licence period — including assistance with the driving test slot booking and application process.",
      hi: "आवश्यक लर्नर लाइसेंस अवधि पूरी करने के बाद अपना स्थायी ड्राइविंग लाइसेंस बनवाएं — ड्राइविंग टेस्ट स्लॉट बुकिंग और आवेदन प्रक्रिया में सहायता सहित।"
    },

    benefits: {
      en: [
        "Helps you apply for a Permanent Driving Licence after completing the applicable Learner's Licence period.",
        "Assistance booking the required driving test slot at the concerned RTO.",
        "Guidance on the applicable eligibility period, required documents, and driving test requirements.",
        "Careful and accurate application filing to help avoid avoidable document or appointment-related delays.",
        "Regular status tracking from driving test slot booking through to licence issuance.",
        "Support tracking the dispatch or doorstep delivery of your Permanent Driving Licence where applicable."
      ],

      hi: [
        "लागू लर्नर लाइसेंस अवधि पूरी करने के बाद स्थायी ड्राइविंग लाइसेंस के लिए आवेदन करने में सहायता।",
        "संबंधित RTO में आवश्यक ड्राइविंग टेस्ट स्लॉट बुक करने में सहायता।",
        "लागू पात्रता अवधि, आवश्यक दस्तावेजों और ड्राइविंग टेस्ट की आवश्यकताओं के बारे में मार्गदर्शन।",
        "दस्तावेज या अपॉइंटमेंट संबंधी अनावश्यक देरी से बचने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "ड्राइविंग टेस्ट स्लॉट बुकिंग से लेकर लाइसेंस जारी होने तक नियमित स्टेटस ट्रैकिंग।",
        "जहां लागू हो वहां स्थायी ड्राइविंग लाइसेंस के डिस्पैच या घर तक डिलीवरी को ट्रैक करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is a Permanent Driving Licence?",
          a: "A Permanent Driving Licence is the licence issued after successfully completing the applicable Learner's Licence period and passing the required driving test. It allows the eligible holder to drive the permitted vehicle category subject to applicable rules."
        },
        {
          q: "Who needs a Permanent Driving Licence?",
          a: "A person who has obtained a Learner's Licence and wants to legally drive the applicable vehicle category on a long-term basis generally needs to complete the Permanent Driving Licence process."
        },
        {
          q: "What documents are required for a Permanent Driving Licence?",
          a: "The documents typically required may include your Learner's Licence, Aadhaar or another identity proof, address proof, and other documents required for the applicable driving test and RTO process. Requirements can vary based on the applicant and vehicle category."
        },
        {
          q: "What is the process for a Permanent Driving Licence?",
          a: "The process generally involves completing the applicable Learner's Licence period, preparing the required documents, submitting the Permanent DL application, booking the driving test slot, appearing for and passing the driving test, completing verification where required, and tracking the licence until it is issued."
        },
        {
          q: "How long does a Permanent Driving Licence take to process?",
          a: "After successful completion of the driving test and required verification, the Permanent Driving Licence may typically be issued within around 10–15 working days. The actual timeline can vary depending on the RTO, verification requirements, and departmental workload, so it should be treated as an estimate."
        },
        {
          q: "What are the charges involved in a Permanent Driving Licence?",
          a: "There may be applicable government or RTO fees for the Permanent Driving Licence and driving test, which are separate from the service facilitation charge. The applicable official amount is communicated before proceeding."
        },
        {
          q: "What happens if my Permanent Driving Licence application is rejected or delayed?",
          a: "An application may be delayed or returned due to incomplete documents, incorrect details, verification issues, missed appointments, or failure to meet applicable test or RTO requirements. The issue can generally be corrected and the process completed again where applicable."
        },
        {
          q: "How does Aarambh India help with a Permanent Driving Licence?",
          a: "Aarambh India verifies the required documents and DL details, assists with the application and driving test slot booking, provides guidance on the applicable process, and gives regular WhatsApp status updates until the Permanent Driving Licence is issued."
        }
      ],

      hi: [
        {
          q: "स्थायी ड्राइविंग लाइसेंस क्या है?",
          a: "स्थायी ड्राइविंग लाइसेंस वह लाइसेंस है जो लागू लर्नर लाइसेंस अवधि पूरी करने और आवश्यक ड्राइविंग टेस्ट सफलतापूर्वक पास करने के बाद जारी किया जाता है। इसके माध्यम से पात्र व्यक्ति लागू वाहन श्रेणी को संबंधित नियमों के अनुसार चला सकता है।"
        },
        {
          q: "स्थायी ड्राइविंग लाइसेंस किसे बनवाना चाहिए?",
          a: "जिस व्यक्ति ने लर्नर ड्राइविंग लाइसेंस प्राप्त कर लिया है और लागू वाहन श्रेणी को लंबे समय तक कानूनी रूप से चलाना चाहता है, उसे सामान्यतः स्थायी ड्राइविंग लाइसेंस की प्रक्रिया पूरी करनी होती है।"
        },
        {
          q: "स्थायी ड्राइविंग लाइसेंस के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः लर्नर लाइसेंस, आधार या अन्य पहचान प्रमाण, पते का प्रमाण और लागू ड्राइविंग टेस्ट तथा RTO प्रक्रिया के अनुसार अन्य दस्तावेज आवश्यक हो सकते हैं। आवश्यकताएं आवेदक और वाहन श्रेणी के अनुसार अलग हो सकती हैं।"
        },
        {
          q: "स्थायी ड्राइविंग लाइसेंस की प्रक्रिया क्या है?",
          a: "प्रक्रिया में लागू लर्नर लाइसेंस अवधि पूरी करना, आवश्यक दस्तावेज तैयार करना, स्थायी DL के लिए आवेदन जमा करना, ड्राइविंग टेस्ट स्लॉट बुक करना, ड्राइविंग टेस्ट देना और पास करना, जहां आवश्यक हो वहां सत्यापन पूरा करना और लाइसेंस जारी होने तक स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "स्थायी ड्राइविंग लाइसेंस बनने में कितना समय लगता है?",
          a: "ड्राइविंग टेस्ट और आवश्यक सत्यापन सफलतापूर्वक पूरा होने के बाद स्थायी ड्राइविंग लाइसेंस सामान्यतः लगभग 10–15 कार्य दिवस में जारी हो सकता है। वास्तविक समय RTO, सत्यापन आवश्यकताओं और संबंधित विभाग के कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "स्थायी ड्राइविंग लाइसेंस के लिए कितने शुल्क लगते हैं?",
          a: "स्थायी ड्राइविंग लाइसेंस और ड्राइविंग टेस्ट के लिए सरकारी या RTO शुल्क लागू हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। प्रक्रिया शुरू करने से पहले लागू आधिकारिक शुल्क की जानकारी दी जाती है।"
        },
        {
          q: "यदि स्थायी ड्राइविंग लाइसेंस का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "अधूरे दस्तावेज, गलत जानकारी, सत्यापन संबंधी समस्या, अपॉइंटमेंट में अनुपस्थित रहने या लागू टेस्ट अथवा RTO आवश्यकताओं को पूरा न करने के कारण आवेदन में देरी या आपत्ति हो सकती है। समस्या को ठीक करने के बाद जहां लागू हो वहां प्रक्रिया दोबारा पूरी की जा सकती है।"
        },
        {
          q: "Aarambh India स्थायी ड्राइविंग लाइसेंस में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दस्तावेज और DL विवरण की जांच करता है, आवेदन और ड्राइविंग टेस्ट स्लॉट बुकिंग में सहायता करता है, लागू प्रक्रिया के बारे में मार्गदर्शन देता है और स्थायी ड्राइविंग लाइसेंस जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "idp",
    image: idp,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "International Driving Permit (IDP)",
      hi: "अंतरराष्ट्रीय ड्राइविंग परमिट (IDP)"
    },

    category: {
      en: "Travel",
      hi: "यात्रा"
    },

    price: {
      en: "₹499 onwards",
      hi: "₹499 से शुरू"
    },

    summary: {
      en: "Planning to drive abroad? Apply for an International Driving Permit (IDP) — assistance with the application and documentation process.",
      hi: "विदेश में ड्राइव करने की योजना है? International Driving Permit (IDP) के लिए आवेदन करें — आवेदन और आवश्यक दस्तावेजों की प्रक्रिया में सहायता।"
    },

    benefits: {
      en: [
        "Helps obtain an International Driving Permit (IDP), which may be required or recognised for driving in eligible foreign countries along with your valid Indian Driving Licence.",
        "Guidance on the countries and situations where an IDP may be recognised or required along with your Indian Driving Licence.",
        "Assistance preparing the required documents, such as a valid Indian DL, passport, visa or travel-related proof, and photographs where applicable.",
        "Careful and accurate application filing to help reduce avoidable document errors, rejection, or processing delays.",
        "Regular status updates from application submission until the IDP is issued.",
        "Guidance on the applicable validity period and requirements for future applications or renewals."
      ],

      hi: [
        "International Driving Permit (IDP) प्राप्त करने में सहायता, जिसे पात्र विदेशी देशों में वैध भारतीय ड्राइविंग लाइसेंस के साथ ड्राइविंग के लिए आवश्यक या मान्य किया जा सकता है।",
        "उन देशों और परिस्थितियों के बारे में मार्गदर्शन जहां भारतीय ड्राइविंग लाइसेंस के साथ IDP मान्य या आवश्यक हो सकता है।",
        "वैध भारतीय DL, पासपोर्ट, वीज़ा या यात्रा संबंधी प्रमाण और जहां लागू हो वहां फोटो जैसे आवश्यक दस्तावेज तैयार करने में सहायता।",
        "अनावश्यक दस्तावेजी गलतियों, आवेदन अस्वीकृति या प्रोसेसिंग में देरी को कम करने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "आवेदन जमा करने से लेकर IDP जारी होने तक नियमित स्टेटस अपडेट।",
        "लागू वैधता अवधि और भविष्य में आवेदन या नवीनीकरण के लिए आवश्यकताओं के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is an International Driving Permit (IDP)?",
          a: "An International Driving Permit (IDP) is a permit that can be used along with a valid Indian Driving Licence when driving in countries that recognise the IDP. It is not a replacement for your original Indian Driving Licence."
        },
        {
          q: "Who needs an International Driving Permit (IDP)?",
          a: "Indian Driving Licence holders who plan to drive in a foreign country may need an IDP depending on the destination country's rules, local driving regulations, and the requirements of the vehicle rental or relevant authority."
        },
        {
          q: "What documents are required for an International Driving Permit (IDP)?",
          a: "The documents typically required may include a valid Indian Driving Licence, passport, applicable visa or travel-related proof, recent photographs, and other documents required by the issuing authority. Requirements can vary depending on the applicable process."
        },
        {
          q: "What is the process for an International Driving Permit (IDP)?",
          a: "The process generally involves verifying your Indian Driving Licence and travel details, preparing the required documents, completing the applicable IDP application, submitting it through the relevant authority or portal, completing verification where required, and tracking the application until the permit is issued."
        },
        {
          q: "How long does an International Driving Permit (IDP) take to process?",
          a: "The typical processing time may be around 5–10 working days. The actual timeline can vary depending on document verification, the issuing authority, travel-related requirements, and departmental workload, so it should be treated as an estimate."
        },
        {
          q: "What are the charges involved in an International Driving Permit (IDP)?",
          a: "There may be an applicable government or issuing-authority fee for the IDP, which is separate from the service facilitation charge. Government fees may change periodically, so the applicable amount is communicated before proceeding."
        },
        {
          q: "What happens if my International Driving Permit (IDP) application is rejected or delayed?",
          a: "An application may be delayed or returned due to an invalid or expired Indian Driving Licence, incorrect personal details, incomplete documents, travel-document issues, or other requirements of the issuing authority. The issue can generally be corrected and the application resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with an International Driving Permit (IDP)?",
          a: "Aarambh India verifies the available DL and supporting documents, assists with preparing and submitting the IDP application, provides guidance on the applicable documentation and process, and gives regular WhatsApp status updates until the permit is issued."
        }
      ],

      hi: [
        {
          q: "International Driving Permit (IDP) क्या है?",
          a: "International Driving Permit (IDP) एक परमिट है जिसका उपयोग उन देशों में वैध भारतीय ड्राइविंग लाइसेंस के साथ किया जा सकता है जहां IDP को मान्यता प्राप्त है। यह आपके मूल भारतीय ड्राइविंग लाइसेंस का विकल्प नहीं है।"
        },
        {
          q: "International Driving Permit (IDP) किसे बनवाना चाहिए?",
          a: "जो भारतीय ड्राइविंग लाइसेंस धारक विदेश में वाहन चलाने की योजना बना रहे हैं, उन्हें संबंधित देश के नियमों, स्थानीय ड्राइविंग कानूनों और वाहन किराए पर लेने वाली कंपनी या संबंधित प्राधिकरण की आवश्यकताओं के अनुसार IDP की आवश्यकता हो सकती है।"
        },
        {
          q: "International Driving Permit (IDP) के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः वैध भारतीय ड्राइविंग लाइसेंस, पासपोर्ट, लागू वीज़ा या यात्रा संबंधी प्रमाण, हाल की फोटो और जारी करने वाले प्राधिकरण द्वारा मांगे गए अन्य दस्तावेज आवश्यक हो सकते हैं। आवश्यकताएं लागू प्रक्रिया के अनुसार अलग हो सकती हैं।"
        },
        {
          q: "International Driving Permit (IDP) की प्रक्रिया क्या है?",
          a: "प्रक्रिया में भारतीय ड्राइविंग लाइसेंस और यात्रा संबंधी विवरण की जांच करना, आवश्यक दस्तावेज तैयार करना, लागू IDP आवेदन पूरा करना, संबंधित प्राधिकरण या पोर्टल के माध्यम से आवेदन जमा करना, जहां आवश्यक हो वहां सत्यापन पूरा करना और परमिट जारी होने तक आवेदन का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "International Driving Permit (IDP) बनने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 5–10 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, जारी करने वाले प्राधिकरण, यात्रा संबंधी आवश्यकताओं और विभागीय कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "International Driving Permit (IDP) के लिए कितने शुल्क लगते हैं?",
          a: "IDP के लिए सरकारी या जारी करने वाले प्राधिकरण का शुल्क लागू हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। सरकारी शुल्क समय-समय पर बदल सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि International Driving Permit (IDP) का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "अमान्य या समाप्त भारतीय ड्राइविंग लाइसेंस, गलत व्यक्तिगत विवरण, अधूरे दस्तावेज, यात्रा संबंधी दस्तावेजों की समस्या या जारी करने वाले प्राधिकरण की अन्य आवश्यकताओं के कारण आवेदन में देरी या आपत्ति हो सकती है। समस्या को ठीक करने के बाद जहां लागू हो वहां आवेदन दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India International Driving Permit (IDP) में कैसे सहायता करता है?",
          a: "Aarambh India DL और आवश्यक सहायक दस्तावेजों की जांच करता है, IDP आवेदन तैयार करने और जमा करने में सहायता करता है, लागू दस्तावेजों और प्रक्रिया के बारे में मार्गदर्शन देता है और परमिट जारी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "rc-aadhaar-link",
    image: rc_aadhar,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "RC Aadhaar Link",
      hi: "वाहन RC–आधार लिंक"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    price: {
      en: "₹99 onwards",
      hi: "₹99 से शुरू"
    },

    summary: {
      en: "Link your vehicle Registration Certificate (RC) with Aadhaar where applicable — simplify ownership verification and digital vehicle-related services.",
      hi: "जहां लागू हो वहां अपने वाहन के Registration Certificate (RC) को आधार से लिंक करें — वाहन स्वामित्व सत्यापन और डिजिटल वाहन संबंधी सेवाओं को आसान बनाने में सहायता।"
    },

    benefits: {
      en: [
        "Assistance with linking your vehicle's Registration Certificate (RC) with Aadhaar where the applicable service supports Aadhaar-based verification.",
        "Guidance on the online linking process and the vehicle and Aadhaar details required for submission.",
        "Careful matching of RC and Aadhaar information to help prevent avoidable verification mismatches.",
        "Assistance identifying and addressing discrepancies between vehicle registration and Aadhaar records, where applicable.",
        "Status tracking until the linking request is processed or confirmation is available.",
        "Guidance on related RC or vehicle services where Aadhaar-linked verification may be applicable."
      ],

      hi: [
        "जहां संबंधित सेवा आधार-आधारित सत्यापन का समर्थन करती है, वहां वाहन के Registration Certificate (RC) को आधार से लिंक करने में सहायता।",
        "ऑनलाइन लिंकिंग प्रक्रिया और आवेदन के लिए आवश्यक वाहन एवं आधार विवरण के बारे में मार्गदर्शन।",
        "अनावश्यक सत्यापन संबंधी अंतर से बचने के लिए RC और आधार विवरण का सावधानीपूर्वक मिलान।",
        "जहां लागू हो वहां वाहन रजिस्ट्रेशन और आधार रिकॉर्ड के बीच किसी भी अंतर की पहचान और उसे ठीक करने में सहायता।",
        "लिंकिंग अनुरोध प्रोसेस होने या पुष्टि उपलब्ध होने तक स्टेटस ट्रैकिंग।",
        "जहां आधार-लिंक सत्यापन लागू हो, वहां संबंधित RC या वाहन सेवाओं के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is RC Aadhaar Link?",
          a: "RC Aadhaar Link refers to associating your vehicle Registration Certificate details with Aadhaar where the applicable transport service or verification process supports such linking."
        },
        {
          q: "Who needs RC Aadhaar Link?",
          a: "Vehicle owners who are required or choose to complete Aadhaar-based verification for an applicable vehicle or RTO service may need to provide their RC and Aadhaar details."
        },
        {
          q: "What documents are required for RC Aadhaar Link?",
          a: "The key information typically required is your vehicle Registration Certificate number and Aadhaar number. Additional vehicle or identity details may be required depending on the applicable portal or service."
        },
        {
          q: "What is the process for RC Aadhaar Link?",
          a: "The process involves providing the required RC and Aadhaar details, verifying the information, completing the applicable online linking or authentication process, and tracking the request until the linking status or confirmation is available."
        },
        {
          q: "How long does RC Aadhaar Link take to process?",
          a: "The typical processing time may be around 3–7 working days where departmental processing is involved. Some online verification requests may be completed sooner. The actual timeline depends on the applicable portal, verification requirements, and department processing."
        },
        {
          q: "What are the charges involved in RC Aadhaar Link?",
          a: "There may be an applicable government or departmental fee depending on the specific vehicle or transport service. Any official fee is separate from the service facilitation charge, and the applicable amount is communicated before proceeding."
        },
        {
          q: "What happens if my RC Aadhaar Link request is rejected or delayed?",
          a: "A request may be delayed or require correction due to mismatched RC or Aadhaar details, incorrect vehicle information, incomplete verification, technical issues, or other requirements of the applicable authority. The details can be reviewed and the request resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with RC Aadhaar Link?",
          a: "Aarambh India verifies the provided RC and Aadhaar details, assists with the applicable linking or verification process, helps identify discrepancies, and provides regular WhatsApp status updates until the request is processed."
        }
      ],

      hi: [
        {
          q: "वाहन RC–आधार लिंक क्या है?",
          a: "वाहन RC–आधार लिंक का अर्थ लागू परिवहन सेवा या सत्यापन प्रक्रिया के तहत वाहन के Registration Certificate के विवरण को आधार से लिंक या संबंधित करना है।"
        },
        {
          q: "वाहन RC–आधार लिंक किसे करवाना चाहिए?",
          a: "जिन वाहन मालिकों को किसी लागू वाहन या RTO सेवा के लिए आधार-आधारित सत्यापन पूरा करना आवश्यक है या जो ऐसी सुविधा का उपयोग करना चाहते हैं, उन्हें अपने RC और आधार विवरण उपलब्ध कराने पड़ सकते हैं।"
        },
        {
          q: "वाहन RC–आधार लिंक के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः वाहन का Registration Certificate नंबर और आधार नंबर आवश्यक होता है। लागू पोर्टल या सेवा के अनुसार अतिरिक्त वाहन या पहचान संबंधी जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "वाहन RC–आधार लिंक की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक RC और आधार विवरण देना, जानकारी का सत्यापन करना, लागू ऑनलाइन लिंकिंग या प्रमाणीकरण प्रक्रिया पूरी करना और लिंकिंग का स्टेटस या पुष्टि उपलब्ध होने तक अनुरोध को ट्रैक करना शामिल है।"
        },
        {
          q: "वाहन RC–आधार लिंक होने में कितना समय लगता है?",
          a: "जहां विभागीय प्रोसेसिंग आवश्यक हो, वहां सामान्यतः लगभग 3–7 कार्य दिवस लग सकते हैं। कुछ ऑनलाइन सत्यापन अनुरोध इससे पहले भी पूरे हो सकते हैं। वास्तविक समय संबंधित पोर्टल, सत्यापन आवश्यकताओं और विभागीय प्रोसेसिंग पर निर्भर करता है।"
        },
        {
          q: "वाहन RC–आधार लिंक के लिए कितने शुल्क लगते हैं?",
          a: "विशिष्ट वाहन या परिवहन सेवा के अनुसार सरकारी या विभागीय शुल्क लागू हो सकता है। कोई भी आधिकारिक शुल्क सेवा सुविधा शुल्क से अलग होगा और प्रक्रिया शुरू करने से पहले लागू राशि की जानकारी दी जाएगी।"
        },
        {
          q: "यदि वाहन RC–आधार लिंक का अनुरोध अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "RC या आधार विवरण में अंतर, गलत वाहन जानकारी, अधूरा सत्यापन, तकनीकी समस्या या संबंधित प्राधिकरण की अन्य आवश्यकताओं के कारण अनुरोध में देरी या सुधार की आवश्यकता हो सकती है। विवरण की जांच करके जहां लागू हो वहां अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India वाहन RC–आधार लिंक में कैसे सहायता करता है?",
          a: "Aarambh India दिए गए RC और आधार विवरणों की जांच करता है, लागू लिंकिंग या सत्यापन प्रक्रिया में सहायता करता है, किसी भी अंतर की पहचान करने में मदद करता है और अनुरोध प्रोसेस होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "hsrp",
    image: hsrp,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "2-Wheeler HSRP",
      hi: "2-व्हीलर HSRP नंबर प्लेट"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    tag: {
      en: "Fast",
      hi: "त्वरित"
    },

    price: {
      en: "₹649 onwards",
      hi: "₹649 से शुरू"
    },

    summary: {
      en: "Get your High-Security Registration Plate (HSRP) for eligible two-wheelers — assistance with online booking, documentation, and fitment appointment.",
      hi: "अपने पात्र दोपहिया वाहन के लिए High-Security Registration Plate (HSRP) प्राप्त करें — ऑनलाइन बुकिंग, दस्तावेज और फिटमेंट अपॉइंटमेंट में सहायता।"
    },

    benefits: {
      en: [
        "Helps obtain and book fitment of the applicable High-Security Registration Plate (HSRP) for eligible two-wheelers.",
        "Guidance on the HSRP requirements, applicable rules, and fitment process for your vehicle and state.",
        "Assistance booking an available HSRP fitment appointment at the applicable centre.",
        "Careful and accurate application using your existing Registration Certificate and vehicle details.",
        "Regular status updates from HSRP booking through to plate fitment.",
        "Guidance on maintaining applicable HSRP compliance and avoiding issues related to an improperly fitted or missing plate."
      ],

      hi: [
        "पात्र दोपहिया वाहनों के लिए लागू High-Security Registration Plate (HSRP) प्राप्त करने और फिटमेंट बुक करने में सहायता।",
        "आपके वाहन और राज्य के अनुसार HSRP की आवश्यकताओं, लागू नियमों और फिटमेंट प्रक्रिया के बारे में मार्गदर्शन।",
        "उपलब्ध HSRP फिटमेंट सेंटर पर अपॉइंटमेंट बुक करने में सहायता।",
        "मौजूदा Registration Certificate और वाहन विवरण के आधार पर आवेदन को सावधानीपूर्वक और सही तरीके से पूरा करने में सहायता।",
        "HSRP बुकिंग से लेकर प्लेट फिटमेंट तक नियमित स्टेटस अपडेट।",
        "लागू HSRP अनुपालन बनाए रखने और गलत तरीके से लगी या अनुपलब्ध नंबर प्लेट से संबंधित समस्याओं से बचने के लिए मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is HSRP?",
          a: "HSRP stands for High-Security Registration Plate. It is a standardised vehicle registration plate designed with security features and is required for eligible vehicles according to applicable government and state transport rules."
        },
        {
          q: "Who needs HSRP?",
          a: "Owners of vehicles for which HSRP is mandatory under the applicable state or transport rules need to obtain and install the required High-Security Registration Plate. Requirements can vary depending on the vehicle and registration details."
        },
        {
          q: "What documents are required for HSRP?",
          a: "The documents or details typically required may include a copy of the vehicle RC, registration number, chassis or engine details, and owner information. Additional information may be required by the authorised HSRP provider or applicable state process."
        },
        {
          q: "What is the process for HSRP?",
          a: "The process generally involves providing the vehicle and RC details, selecting the applicable HSRP service, booking a fitment appointment where required, making the applicable payment, visiting the designated fitment centre, and getting the HSRP installed on the vehicle."
        },
        {
          q: "How long does HSRP take to process?",
          a: "The complete process may typically take around 7–15 working days, including the fitment appointment, depending on appointment availability, vehicle verification, location, and the authorised provider's processing time. This should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in HSRP?",
          a: "The HSRP price and applicable charges depend on the vehicle type, state, authorised provider, and applicable rules. Any official plate or fitment charges are separate from the service facilitation charge and are communicated before proceeding."
        },
        {
          q: "What happens if my HSRP application is rejected or delayed?",
          a: "An HSRP request may be delayed due to incorrect RC details, vehicle information mismatch, unavailable appointment slots, incomplete information, payment issues, or provider-side processing. The issue can generally be corrected and the booking or request resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with HSRP?",
          a: "Aarambh India verifies the available vehicle and RC details, assists with the HSRP booking and fitment appointment process, helps avoid common application errors, and provides regular WhatsApp status updates until the HSRP fitment process is completed."
        }
      ],

      hi: [
        {
          q: "HSRP क्या है?",
          a: "HSRP का पूरा नाम High-Security Registration Plate है। यह सुरक्षा सुविधाओं वाली मानकीकृत वाहन नंबर प्लेट है, जो लागू सरकारी और राज्य परिवहन नियमों के अनुसार पात्र वाहनों के लिए आवश्यक हो सकती है।"
        },
        {
          q: "HSRP किसे लगवानी चाहिए?",
          a: "जिन वाहनों के लिए लागू राज्य या परिवहन नियमों के अनुसार HSRP अनिवार्य है, उनके मालिकों को आवश्यक High-Security Registration Plate प्राप्त करके वाहन पर लगवानी होती है। आवश्यकता वाहन और रजिस्ट्रेशन विवरण के अनुसार अलग हो सकती है।"
        },
        {
          q: "HSRP के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः वाहन की RC कॉपी, रजिस्ट्रेशन नंबर, चेसिस या इंजन विवरण और वाहन मालिक की जानकारी आवश्यक हो सकती है। अधिकृत HSRP प्रदाता या संबंधित राज्य की प्रक्रिया के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "HSRP की प्रक्रिया क्या है?",
          a: "प्रक्रिया में वाहन और RC विवरण देना, लागू HSRP सेवा चुनना, जहां आवश्यक हो वहां फिटमेंट अपॉइंटमेंट बुक करना, लागू भुगतान करना, निर्धारित फिटमेंट सेंटर पर जाना और वाहन पर HSRP लगवाना शामिल है।"
        },
        {
          q: "HSRP लगने में कितना समय लगता है?",
          a: "फिटमेंट अपॉइंटमेंट सहित पूरी प्रक्रिया में सामान्यतः लगभग 7–15 कार्य दिवस लग सकते हैं। वास्तविक समय अपॉइंटमेंट की उपलब्धता, वाहन सत्यापन, स्थान और अधिकृत प्रदाता की प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "HSRP के लिए कितने शुल्क लगते हैं?",
          a: "HSRP की कीमत और लागू शुल्क वाहन के प्रकार, राज्य, अधिकृत प्रदाता और संबंधित नियमों पर निर्भर कर सकते हैं। नंबर प्लेट या फिटमेंट का आधिकारिक शुल्क सेवा सुविधा शुल्क से अलग हो सकता है और प्रक्रिया शुरू करने से पहले इसकी जानकारी दी जाती है।"
        },
        {
          q: "यदि HSRP का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "RC विवरण में गलती, वाहन जानकारी में अंतर, अपॉइंटमेंट स्लॉट उपलब्ध न होना, अधूरी जानकारी, भुगतान संबंधी समस्या या प्रदाता की प्रोसेसिंग के कारण HSRP प्रक्रिया में देरी हो सकती है। समस्या को ठीक करके जहां लागू हो वहां बुकिंग या अनुरोध दोबारा किया जा सकता है।"
        },
        {
          q: "Aarambh India HSRP में कैसे सहायता करता है?",
          a: "Aarambh India वाहन और RC विवरणों की जांच करता है, HSRP बुकिंग और फिटमेंट अपॉइंटमेंट प्रक्रिया में सहायता करता है, सामान्य आवेदन संबंधी गलतियों से बचने में मदद करता है और HSRP फिटमेंट प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "hsrp-4-wheeler",
    image: hsrp,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "4-Wheeler HSRP",
      hi: "4-व्हीलर HSRP नंबर प्लेट"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    tag: {
      en: "Fast",
      hi: "त्वरित"
    },

    price: {
      en: "₹999 onwards",
      hi: "₹999 से शुरू"
    },

    summary: {
      en: "Get your High-Security Registration Plate (HSRP) for eligible four-wheelers — assistance with online booking, documentation, and fitment appointment.",
      hi: "अपने पात्र चार पहिया वाहन के लिए High-Security Registration Plate (HSRP) प्राप्त करें — ऑनलाइन बुकिंग, दस्तावेज और फिटमेंट अपॉइंटमेंट में सहायता।"
    },

    benefits: {
      en: [
        "Helps obtain and book fitment of the applicable High-Security Registration Plate (HSRP) for eligible four-wheelers.",
        "Guidance on the HSRP requirements, applicable rules, and fitment process for your vehicle and state.",
        "Assistance booking an available HSRP fitment appointment at the applicable centre.",
        "Careful and accurate application using your existing Registration Certificate and vehicle details.",
        "Regular status updates from HSRP booking through to plate fitment.",
        "Guidance on maintaining applicable HSRP compliance and avoiding issues related to an improperly fitted or missing plate."
      ],

      hi: [
        "पात्र चार पहिया वाहनों के लिए लागू High-Security Registration Plate (HSRP) प्राप्त करने और फिटमेंट बुक करने में सहायता।",
        "आपके वाहन और राज्य के अनुसार HSRP की आवश्यकताओं, लागू नियमों और फिटमेंट प्रक्रिया के बारे में मार्गदर्शन।",
        "उपलब्ध HSRP फिटमेंट सेंटर पर अपॉइंटमेंट बुक करने में सहायता।",
        "मौजूदा Registration Certificate और वाहन विवरण के आधार पर आवेदन को सावधानीपूर्वक और सही तरीके से पूरा करने में सहायता।",
        "HSRP बुकिंग से लेकर प्लेट फिटमेंट तक नियमित स्टेटस अपडेट।",
        "लागू HSRP अनुपालन बनाए रखने और गलत तरीके से लगी या अनुपलब्ध नंबर प्लेट से संबंधित समस्याओं से बचने के लिए मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is HSRP?",
          a: "HSRP stands for High-Security Registration Plate. It is a standardised vehicle registration plate designed with security features and is required for eligible vehicles according to applicable government and state transport rules."
        },
        {
          q: "Who needs HSRP?",
          a: "Owners of four-wheelers for which HSRP is mandatory under the applicable state or transport rules need to obtain and install the required High-Security Registration Plate. Requirements can vary depending on the vehicle and registration details."
        },
        {
          q: "What documents are required for HSRP?",
          a: "The documents or details typically required may include a copy of the vehicle RC, registration number, chassis or engine details, and owner information. Additional information may be required by the authorised HSRP provider or applicable state process."
        },
        {
          q: "What is the process for HSRP?",
          a: "The process generally involves providing the vehicle and RC details, selecting the applicable HSRP service, booking a fitment appointment where required, making the applicable payment, visiting the designated fitment centre, and getting the HSRP installed on the vehicle."
        },
        {
          q: "How long does HSRP take to process?",
          a: "The complete process may typically take around 7–15 working days, including the fitment appointment, depending on appointment availability, vehicle verification, location, and the authorised provider's processing time. This should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in HSRP?",
          a: "The HSRP price and applicable charges depend on the vehicle type, state, authorised provider, and applicable rules. Any official plate or fitment charges are separate from the service facilitation charge and are communicated before proceeding."
        },
        {
          q: "What happens if my HSRP application is rejected or delayed?",
          a: "An HSRP request may be delayed due to incorrect RC details, vehicle information mismatch, unavailable appointment slots, incomplete information, payment issues, or provider-side processing. The issue can generally be corrected and the booking or request resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with HSRP?",
          a: "Aarambh India verifies the available vehicle and RC details, assists with the HSRP booking and fitment appointment process, helps avoid common application errors, and provides regular WhatsApp status updates until the HSRP fitment process is completed."
        }
      ],

      hi: [
        {
          q: "HSRP क्या है?",
          a: "HSRP का पूरा नाम High-Security Registration Plate है। यह सुरक्षा सुविधाओं वाली मानकीकृत वाहन नंबर प्लेट है, जो लागू सरकारी और राज्य परिवहन नियमों के अनुसार पात्र वाहनों के लिए आवश्यक हो सकती है।"
        },
        {
          q: "HSRP किसे लगवानी चाहिए?",
          a: "जिन चार पहिया वाहनों के लिए लागू राज्य या परिवहन नियमों के अनुसार HSRP अनिवार्य है, उनके मालिकों को आवश्यक High-Security Registration Plate प्राप्त करके वाहन पर लगवानी होती है। आवश्यकता वाहन और रजिस्ट्रेशन विवरण के अनुसार अलग हो सकती है।"
        },
        {
          q: "HSRP के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः वाहन की RC कॉपी, रजिस्ट्रेशन नंबर, चेसिस या इंजन विवरण और वाहन मालिक की जानकारी आवश्यक हो सकती है। अधिकृत HSRP प्रदाता या संबंधित राज्य की प्रक्रिया के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "HSRP की प्रक्रिया क्या है?",
          a: "प्रक्रिया में वाहन और RC विवरण देना, लागू HSRP सेवा चुनना, जहां आवश्यक हो वहां फिटमेंट अपॉइंटमेंट बुक करना, लागू भुगतान करना, निर्धारित फिटमेंट सेंटर पर जाना और वाहन पर HSRP लगवाना शामिल है।"
        },
        {
          q: "HSRP लगने में कितना समय लगता है?",
          a: "फिटमेंट अपॉइंटमेंट सहित पूरी प्रक्रिया में सामान्यतः लगभग 7–15 कार्य दिवस लग सकते हैं। वास्तविक समय अपॉइंटमेंट की उपलब्धता, वाहन सत्यापन, स्थान और अधिकृत प्रदाता की प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "HSRP के लिए कितने शुल्क लगते हैं?",
          a: "HSRP की कीमत और लागू शुल्क वाहन के प्रकार, राज्य, अधिकृत प्रदाता और संबंधित नियमों पर निर्भर कर सकते हैं। नंबर प्लेट या फिटमेंट का आधिकारिक शुल्क सेवा सुविधा शुल्क से अलग हो सकता है और प्रक्रिया शुरू करने से पहले इसकी जानकारी दी जाती है।"
        },
        {
          q: "यदि HSRP का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "RC विवरण में गलती, वाहन जानकारी में अंतर, अपॉइंटमेंट स्लॉट उपलब्ध न होना, अधूरी जानकारी, भुगतान संबंधी समस्या या प्रदाता की प्रोसेसिंग के कारण HSRP प्रक्रिया में देरी हो सकती है। समस्या को ठीक करके जहां लागू हो वहां बुकिंग या अनुरोध दोबारा किया जा सकता है।"
        },
        {
          q: "Aarambh India HSRP में कैसे सहायता करता है?",
          a: "Aarambh India वाहन और RC विवरणों की जांच करता है, HSRP बुकिंग और फिटमेंट अपॉइंटमेंट प्रक्रिया में सहायता करता है, सामान्य आवेदन संबंधी गलतियों से बचने में मदद करता है और HSRP फिटमेंट प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "color-code-sticker",
    image: colour_sticker,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Color-Coded Fuel Sticker",
      hi: "ईंधन रंग-कोडेड स्टिकर"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    tag: {
      en: "Fast",
      hi: "त्वरित"
    },

    price: {
      en: "₹399 onwards",
      hi: "₹399 से शुरू"
    },

    summary: {
      en: "Get your fuel-type color-coded sticker for eligible vehicles — commonly required along with HSRP as per applicable transport rules.",
      hi: "अपने पात्र वाहन के लिए ईंधन के प्रकार के अनुसार रंग-कोडेड स्टिकर प्राप्त करें — लागू परिवहन नियमों के अनुसार HSRP के साथ इसकी आवश्यकता हो सकती है।"
    },

    benefits: {
      en: [
        "Helps obtain the applicable fuel-type color-coded sticker for eligible vehicles along with the HSRP process.",
        "Guidance on the applicable sticker or color identification based on your vehicle's fuel type.",
        "Assistance coordinating sticker fitment with the applicable HSRP appointment where the services are handled together.",
        "Careful application using the correct vehicle registration and RC details.",
        "Regular status updates from booking or application through to sticker fitment.",
        "Guidance on maintaining applicable compliance and avoiding issues related to a missing or incorrect sticker."
      ],

      hi: [
        "HSRP प्रक्रिया के साथ पात्र वाहनों के लिए लागू ईंधन-प्रकार के रंग-कोडेड स्टिकर प्राप्त करने में सहायता।",
        "आपके वाहन के ईंधन प्रकार के अनुसार लागू स्टिकर या रंग की पहचान के बारे में मार्गदर्शन।",
        "जहां सेवाएं साथ में उपलब्ध हों, वहां HSRP अपॉइंटमेंट के साथ स्टिकर फिटमेंट की प्रक्रिया में सहायता।",
        "सही वाहन रजिस्ट्रेशन और RC विवरण के आधार पर आवेदन को सावधानीपूर्वक पूरा करने में सहायता।",
        "बुकिंग या आवेदन से लेकर स्टिकर फिटमेंट तक नियमित स्टेटस अपडेट।",
        "लागू अनुपालन बनाए रखने और गलत या अनुपलब्ध स्टिकर से संबंधित समस्याओं से बचने के लिए मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is a Color-Coded Fuel Sticker?",
          a: "A color-coded fuel sticker is a vehicle sticker used to identify the applicable fuel type of a vehicle. Its requirement, color, and format depend on the applicable state and transport rules."
        },
        {
          q: "Who needs a Color-Coded Fuel Sticker?",
          a: "Owners of vehicles for which a color-coded fuel sticker is required under the applicable transport rules may need to obtain and affix the appropriate sticker, often along with the applicable HSRP requirements."
        },
        {
          q: "What documents are required for a Color-Coded Fuel Sticker?",
          a: "The documents or details typically required may include a copy of the vehicle RC, registration number, and relevant vehicle or fuel-type information. Additional details may be requested by the authorised provider or applicable state process."
        },
        {
          q: "What is the process for a Color-Coded Fuel Sticker?",
          a: "The process generally involves providing the vehicle and RC details, identifying the applicable fuel-type sticker, completing the booking or application, selecting a fitment appointment where required, and getting the sticker affixed at the designated location."
        },
        {
          q: "How long does a Color-Coded Fuel Sticker take to process?",
          a: "The typical processing time may be around 5–10 working days. The actual timeline can vary depending on appointment availability, vehicle verification, provider processing, and applicable local requirements, so it should be treated as an estimate."
        },
        {
          q: "What are the charges involved in a Color-Coded Fuel Sticker?",
          a: "The applicable sticker and fitment charges can vary based on the vehicle, state, authorised provider, and applicable rules. Any official charges are separate from the service facilitation charge and are communicated before proceeding."
        },
        {
          q: "What happens if my Color-Coded Fuel Sticker application is rejected or delayed?",
          a: "The request may be delayed due to incorrect RC or vehicle details, incomplete information, unavailable fitment slots, payment issues, or provider-side processing. The details can generally be corrected and the request or booking resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with a Color-Coded Fuel Sticker?",
          a: "Aarambh India verifies the available vehicle and RC details, assists with the applicable booking and fitment process, helps avoid common application errors, and provides regular WhatsApp status updates until the sticker is fitted."
        }
      ],

      hi: [
        {
          q: "ईंधन रंग-कोडेड स्टिकर क्या है?",
          a: "रंग-कोडेड ईंधन स्टिकर वाहन के ईंधन प्रकार की पहचान के लिए लगाया जाने वाला स्टिकर है। इसकी आवश्यकता, रंग और फॉर्मेट संबंधित राज्य और परिवहन नियमों के अनुसार अलग हो सकते हैं।"
        },
        {
          q: "ईंधन रंग-कोडेड स्टिकर किसे लगवाना चाहिए?",
          a: "जिन वाहनों के लिए लागू परिवहन नियमों के अनुसार रंग-कोडेड ईंधन स्टिकर आवश्यक है, उनके मालिकों को संबंधित स्टिकर प्राप्त करके वाहन पर लगवाना पड़ सकता है। यह आवश्यकता कई मामलों में HSRP से संबंधित हो सकती है।"
        },
        {
          q: "ईंधन रंग-कोडेड स्टिकर के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः वाहन की RC कॉपी, रजिस्ट्रेशन नंबर और वाहन या ईंधन प्रकार से संबंधित जानकारी आवश्यक हो सकती है। अधिकृत प्रदाता या संबंधित राज्य की प्रक्रिया के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "ईंधन रंग-कोडेड स्टिकर की प्रक्रिया क्या है?",
          a: "प्रक्रिया में वाहन और RC विवरण देना, लागू ईंधन-प्रकार के स्टिकर की पहचान करना, बुकिंग या आवेदन पूरा करना, जहां आवश्यक हो वहां फिटमेंट अपॉइंटमेंट चुनना और निर्धारित स्थान पर स्टिकर लगवाना शामिल है।"
        },
        {
          q: "ईंधन रंग-कोडेड स्टिकर लगने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 5–10 कार्य दिवस लग सकते हैं। वास्तविक समय अपॉइंटमेंट की उपलब्धता, वाहन सत्यापन, प्रदाता की प्रोसेसिंग और स्थानीय आवश्यकताओं पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "ईंधन रंग-कोडेड स्टिकर के लिए कितने शुल्क लगते हैं?",
          a: "स्टिकर और फिटमेंट का शुल्क वाहन, राज्य, अधिकृत प्रदाता और लागू नियमों के अनुसार अलग हो सकता है। कोई भी आधिकारिक शुल्क सेवा सुविधा शुल्क से अलग होगा और प्रक्रिया शुरू करने से पहले इसकी जानकारी दी जाती है।"
        },
        {
          q: "यदि ईंधन रंग-कोडेड स्टिकर का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "RC या वाहन विवरण में गलती, अधूरी जानकारी, फिटमेंट स्लॉट उपलब्ध न होना, भुगतान संबंधी समस्या या प्रदाता की प्रोसेसिंग के कारण देरी हो सकती है। विवरण को सही करके जहां लागू हो वहां अनुरोध या बुकिंग दोबारा की जा सकती है।"
        },
        {
          q: "Aarambh India ईंधन रंग-कोडेड स्टिकर में कैसे सहायता करता है?",
          a: "Aarambh India वाहन और RC विवरणों की जांच करता है, लागू बुकिंग और फिटमेंट प्रक्रिया में सहायता करता है, सामान्य आवेदन संबंधी गलतियों से बचने में मदद करता है और स्टिकर फिट होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "vehicle-challan-payment",
    image: vehicle_challan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Vehicle Challan Payment",
      hi: "वाहन चालान भुगतान"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    price: {
      en: "₹49 onwards service charge",
      hi: "₹49 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Check and pay your pending traffic challans — convenient assistance with challan verification and online payment.",
      hi: "अपने लंबित ट्रैफिक चालानों की जांच और भुगतान करें — चालान सत्यापन और ऑनलाइन भुगतान में सुविधाजनक सहायता।"
    },

    benefits: {
      en: [
        "Checks for pending traffic challans associated with your vehicle or Driving Licence.",
        "Assistance making eligible challan payments online without unnecessary visits to an RTO or traffic office.",
        "Guidance on the applicable process for disputing a challan that you believe was issued incorrectly.",
        "Careful verification of challan details and payable amount before proceeding with payment.",
        "Payment confirmation and receipt after the transaction is successfully processed.",
        "Support checking whether any additional challans or pending dues remain after payment."
      ],

      hi: [
        "आपके वाहन या ड्राइविंग लाइसेंस से जुड़े लंबित ट्रैफिक चालानों की जांच करने में सहायता।",
        "अनावश्यक RTO या ट्रैफिक कार्यालय के चक्कर से बचते हुए पात्र चालान का ऑनलाइन भुगतान करने में सहायता।",
        "यदि आपको लगता है कि कोई चालान गलत तरीके से जारी हुआ है, तो उसे विवादित करने की लागू प्रक्रिया के बारे में मार्गदर्शन।",
        "भुगतान करने से पहले चालान विवरण और देय राशि की सावधानीपूर्वक जांच।",
        "भुगतान सफल होने के बाद भुगतान की पुष्टि और रसीद प्राप्त करने में सहायता।",
        "भुगतान के बाद किसी अन्य लंबित चालान या बकाया राशि की जांच करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Vehicle Challan Payment?",
          a: "Vehicle Challan Payment is the process of checking pending traffic challans associated with a vehicle or Driving Licence and making the applicable online payment to clear the outstanding amount."
        },
        {
          q: "Who needs Vehicle Challan Payment?",
          a: "Vehicle owners or Driving Licence holders who have pending traffic challans or outstanding traffic-related dues may use this service to check and pay the applicable amount."
        },
        {
          q: "What information is required for Vehicle Challan Payment?",
          a: "The key information typically required is the vehicle registration number or challan number. Additional details may be required depending on the applicable traffic challan portal or payment process."
        },
        {
          q: "What is the process for Vehicle Challan Payment?",
          a: "The process involves checking the vehicle or challan details, identifying any pending challans, verifying the challan information and payable amount, making the applicable online payment, and obtaining the payment confirmation or receipt."
        },
        {
          q: "How long does Vehicle Challan Payment take to process?",
          a: "Online challan payments are generally processed immediately or within a short period after successful payment. The time for the payment status to be reflected in the relevant system can vary depending on the portal or payment gateway."
        },
        {
          q: "What are the charges involved in Vehicle Challan Payment?",
          a: "The applicable traffic challan amount is payable separately to the concerned authority. Aarambh India's service facilitation charge starts from ₹49 and is separate from the challan amount, applicable taxes, or any official payment charges."
        },
        {
          q: "What happens if my Vehicle Challan Payment is unsuccessful or delayed?",
          a: "A payment may remain pending or fail due to payment gateway issues, incorrect details, technical problems, or portal delays. The transaction status can be checked before attempting another payment to help avoid duplicate payments."
        },
        {
          q: "How does Aarambh India help with Vehicle Challan Payment?",
          a: "Aarambh India checks the available challan details, helps verify the payable amount, assists with the applicable online payment process, and provides payment confirmation or receipt through WhatsApp."
        }
      ],

      hi: [
        {
          q: "वाहन चालान भुगतान क्या है?",
          a: "वाहन चालान भुगतान वह प्रक्रिया है जिसमें वाहन या ड्राइविंग लाइसेंस से जुड़े लंबित ट्रैफिक चालानों की जांच की जाती है और बकाया राशि को ऑनलाइन भुगतान करके चालान का निपटान किया जाता है।"
        },
        {
          q: "वाहन चालान भुगतान किसे करवाना चाहिए?",
          a: "जिन वाहन मालिकों या ड्राइविंग लाइसेंस धारकों के नाम पर लंबित ट्रैफिक चालान या संबंधित बकाया राशि है, वे लागू राशि की जांच और ऑनलाइन भुगतान के लिए इस सेवा का उपयोग कर सकते हैं।"
        },
        {
          q: "वाहन चालान भुगतान के लिए कौन-कौन सी जानकारी आवश्यक है?",
          a: "सामान्यतः वाहन का रजिस्ट्रेशन नंबर या चालान नंबर आवश्यक होता है। लागू ट्रैफिक चालान पोर्टल या भुगतान प्रक्रिया के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "वाहन चालान भुगतान की प्रक्रिया क्या है?",
          a: "प्रक्रिया में वाहन या चालान विवरण की जांच करना, लंबित चालानों की पहचान करना, चालान विवरण और देय राशि का सत्यापन करना, लागू ऑनलाइन भुगतान करना और भुगतान की पुष्टि या रसीद प्राप्त करना शामिल है।"
        },
        {
          q: "वाहन चालान भुगतान होने में कितना समय लगता है?",
          a: "ऑनलाइन चालान भुगतान सामान्यतः सफल भुगतान के तुरंत बाद या थोड़े समय में प्रोसेस हो जाता है। संबंधित सिस्टम में भुगतान स्टेटस अपडेट होने में पोर्टल या भुगतान गेटवे के अनुसार अलग समय लग सकता है।"
        },
        {
          q: "वाहन चालान भुगतान के लिए कितने शुल्क लगते हैं?",
          a: "संबंधित प्राधिकरण द्वारा निर्धारित चालान राशि अलग से देय होती है। Aarambh India का सेवा सुविधा शुल्क ₹49 से शुरू होता है और यह चालान राशि, लागू टैक्स या किसी आधिकारिक भुगतान शुल्क से अलग है।"
        },
        {
          q: "यदि वाहन चालान का भुगतान असफल या विलंबित हो जाए तो क्या होगा?",
          a: "भुगतान गेटवे की समस्या, गलत विवरण, तकनीकी समस्या या पोर्टल में देरी के कारण भुगतान लंबित या असफल हो सकता है। दोबारा भुगतान करने से पहले ट्रांजैक्शन का स्टेटस जांचना जरूरी है, ताकि डुप्लीकेट भुगतान से बचा जा सके।"
        },
        {
          q: "Aarambh India वाहन चालान भुगतान में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध चालान विवरण की जांच करता है, देय राशि को सत्यापित करने में सहायता करता है, लागू ऑनलाइन भुगतान प्रक्रिया में मदद करता है और भुगतान की पुष्टि या रसीद WhatsApp के माध्यम से साझा करता है।"
        }
      ]
    }
  },
  {
    id: "vehicle-tax",
    image: vehicle_tax,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Vehicle Tax",
      hi: "वाहन टैक्स"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    price: {
      en: "₹99 onwards service charge",
      hi: "₹99 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Road Tax Payment & Renewal — get assistance with timely payment or renewal to stay compliant with applicable state RTO requirements.",
      hi: "रोड टैक्स भुगतान और नवीनीकरण — लागू राज्य RTO आवश्यकताओं के अनुसार समय पर भुगतान या नवीनीकरण में सहायता प्राप्त करें।"
    },

    benefits: {
      en: [
        "Assistance with timely road tax payment or renewal according to the applicable state RTO rules.",
        "Guidance on the applicable tax amount and tax category based on your vehicle type and registration details.",
        "Careful and accurate application or payment processing to help avoid penalties caused by delayed or missed tax payments.",
        "Assistance gathering the required vehicle, registration, and ownership-related information.",
        "Payment confirmation and receipt after the applicable vehicle tax payment is successfully processed.",
        "Reminder-based guidance to help you keep track of future vehicle tax payment or renewal requirements."
      ],

      hi: [
        "लागू राज्य RTO नियमों के अनुसार समय पर रोड टैक्स भुगतान या नवीनीकरण में सहायता।",
        "आपके वाहन के प्रकार और रजिस्ट्रेशन विवरण के आधार पर लागू टैक्स राशि और श्रेणी के बारे में मार्गदर्शन।",
        "देरी या टैक्स भुगतान छूट जाने के कारण लगने वाले संभावित जुर्माने से बचने के लिए आवेदन या भुगतान प्रक्रिया को सावधानीपूर्वक पूरा करने में सहायता।",
        "आवश्यक वाहन, रजिस्ट्रेशन और स्वामित्व संबंधी जानकारी तैयार करने में सहायता।",
        "वाहन टैक्स का भुगतान सफलतापूर्वक प्रोसेस होने के बाद भुगतान की पुष्टि और रसीद प्राप्त करने में सहायता।",
        "भविष्य में वाहन टैक्स भुगतान या नवीनीकरण की समय-सीमा याद रखने के लिए रिमाइंडर-आधारित मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Vehicle Tax?",
          a: "Vehicle Tax, commonly referred to as road tax, is a tax payable by vehicle owners according to applicable state transport rules. The amount and payment requirements can vary based on the vehicle type, registration, and state."
        },
        {
          q: "Who needs Vehicle Tax?",
          a: "Vehicle owners who are required to pay road or motor vehicle tax under the applicable state transport rules need to keep their vehicle tax payments up to date."
        },
        {
          q: "What documents are required for Vehicle Tax?",
          a: "The information typically required may include the vehicle Registration Certificate (RC), vehicle registration number, vehicle details, and previous tax payment receipt for renewal where applicable. Additional information may be requested by the concerned RTO or portal."
        },
        {
          q: "What is the process for Vehicle Tax?",
          a: "The process involves checking the vehicle and registration details, determining the applicable tax amount, preparing the required information, making the applicable online tax payment or completing the renewal process, and obtaining the payment confirmation or receipt."
        },
        {
          q: "How long does Vehicle Tax take to process?",
          a: "The payment or renewal process may typically take around 5–10 working days where verification or departmental processing is involved. Online payment confirmation may be available sooner. The actual timeline depends on the applicable state portal and RTO processing."
        },
        {
          q: "What are the charges involved in Vehicle Tax?",
          a: "The applicable vehicle or road tax is determined by the concerned state transport authority and is separate from the service facilitation charge. Aarambh India's service facilitation charge starts from ₹99. The current applicable tax amount is confirmed before proceeding."
        },
        {
          q: "What happens if my Vehicle Tax payment or renewal is rejected or delayed?",
          a: "A payment or renewal may be delayed due to incorrect vehicle details, outstanding dues, expired documents, portal issues, or verification requirements. The issue can be reviewed and the required correction or payment process completed where applicable."
        },
        {
          q: "How does Aarambh India help with Vehicle Tax?",
          a: "Aarambh India verifies the available vehicle and registration details, helps identify the applicable tax requirement, assists with the payment or renewal process, and provides confirmation or receipt along with regular WhatsApp updates."
        }
      ],

      hi: [
        {
          q: "वाहन टैक्स क्या है?",
          a: "वाहन टैक्स, जिसे सामान्यतः रोड टैक्स कहा जाता है, लागू राज्य परिवहन नियमों के अनुसार वाहन मालिकों द्वारा भुगतान किया जाने वाला टैक्स है। इसकी राशि और भुगतान की आवश्यकता वाहन के प्रकार, रजिस्ट्रेशन और राज्य के अनुसार अलग हो सकती है।"
        },
        {
          q: "वाहन टैक्स किसे जमा करना चाहिए?",
          a: "जिन वाहन मालिकों के लिए लागू राज्य परिवहन नियमों के अनुसार रोड टैक्स या मोटर वाहन टैक्स देय है, उन्हें अपने वाहन का टैक्स समय पर जमा करते रहना चाहिए।"
        },
        {
          q: "वाहन टैक्स के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः वाहन का Registration Certificate (RC), वाहन रजिस्ट्रेशन नंबर, वाहन विवरण और नवीनीकरण के लिए जहां लागू हो वहां पिछले टैक्स भुगतान की रसीद आवश्यक हो सकती है। संबंधित RTO या पोर्टल द्वारा अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "वाहन टैक्स भुगतान की प्रक्रिया क्या है?",
          a: "प्रक्रिया में वाहन और रजिस्ट्रेशन विवरण की जांच करना, लागू टैक्स राशि निर्धारित करना, आवश्यक जानकारी तैयार करना, लागू ऑनलाइन टैक्स भुगतान या नवीनीकरण प्रक्रिया पूरी करना और भुगतान की पुष्टि या रसीद प्राप्त करना शामिल है।"
        },
        {
          q: "वाहन टैक्स जमा होने में कितना समय लगता है?",
          a: "जहां सत्यापन या विभागीय प्रोसेसिंग आवश्यक हो, वहां भुगतान या नवीनीकरण प्रक्रिया में सामान्यतः लगभग 5–10 कार्य दिवस लग सकते हैं। ऑनलाइन भुगतान की पुष्टि इससे पहले भी उपलब्ध हो सकती है। वास्तविक समय संबंधित राज्य पोर्टल और RTO की प्रोसेसिंग पर निर्भर करता है।"
        },
        {
          q: "वाहन टैक्स के लिए कितने शुल्क लगते हैं?",
          a: "लागू वाहन या रोड टैक्स संबंधित राज्य परिवहन प्राधिकरण द्वारा निर्धारित किया जाता है और यह सेवा सुविधा शुल्क से अलग होता है। Aarambh India का सेवा सुविधा शुल्क ₹99 से शुरू होता है। प्रक्रिया शुरू करने से पहले वर्तमान लागू टैक्स राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि वाहन टैक्स का भुगतान या नवीनीकरण अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "गलत वाहन विवरण, लंबित बकाया राशि, समाप्त दस्तावेज, पोर्टल संबंधी समस्या या अतिरिक्त सत्यापन की आवश्यकता के कारण भुगतान या नवीनीकरण में देरी हो सकती है। समस्या की जांच करके जहां लागू हो वहां आवश्यक सुधार या भुगतान प्रक्रिया पूरी की जा सकती है।"
        },
        {
          q: "Aarambh India वाहन टैक्स में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध वाहन और रजिस्ट्रेशन विवरणों की जांच करता है, लागू टैक्स आवश्यकता की पहचान करने में सहायता करता है, भुगतान या नवीनीकरण प्रक्रिया में मदद करता है और नियमित WhatsApp अपडेट के साथ भुगतान की पुष्टि या रसीद साझा करता है।"
        }
      ]
    }
  },
  {
    id: "fastag-kyv",
    image: fastag,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "FASTag KYV",
      hi: "FASTag KYV"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    tag: {
      en: "Fast",
      hi: "त्वरित"
    },

    price: {
      en: "₹149 onwards",
      hi: "₹149 से शुरू"
    },

    summary: {
      en: "Update your FASTag KYV (Know Your Vehicle) details — help keep your FASTag active and reduce the risk of blacklisting or transaction failures.",
      hi: "अपने FASTag के KYV (Know Your Vehicle) विवरण अपडेट करें — FASTag को सक्रिय रखने और ब्लैकलिस्टिंग या ट्रांजैक्शन विफलता के जोखिम को कम करने में सहायता।"
    },

    benefits: {
      en: [
        "Helps update your FASTag's Know Your Vehicle (KYV) details to support continued usage and reduce verification-related transaction issues.",
        "Guidance on the documents and vehicle information required to complete FASTag KYV verification.",
        "Careful review of your existing FASTag and vehicle records to identify possible mismatches.",
        "Assistance correcting outdated or incorrect vehicle information linked to your FASTag, where applicable.",
        "Regular status updates until the KYV verification process is completed.",
        "Support reducing toll-plaza delays caused by incomplete or unverified FASTag vehicle details."
      ],

      hi: [
        "FASTag के Know Your Vehicle (KYV) विवरण को अपडेट करने में सहायता, ताकि इसका उपयोग जारी रखने और सत्यापन संबंधी ट्रांजैक्शन समस्याओं को कम करने में मदद मिल सके।",
        "FASTag KYV सत्यापन के लिए आवश्यक दस्तावेज और वाहन संबंधी जानकारी के बारे में मार्गदर्शन।",
        "मौजूदा FASTag और वाहन रिकॉर्ड की सावधानीपूर्वक जांच करके संभावित अंतर की पहचान।",
        "जहां लागू हो वहां FASTag से जुड़े पुराने या गलत वाहन विवरण को सही करने में सहायता।",
        "KYV सत्यापन प्रक्रिया पूरी होने तक नियमित स्टेटस अपडेट।",
        "अधूरे या असत्यापित FASTag वाहन विवरण के कारण टोल प्लाजा पर होने वाली देरी को कम करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is FASTag KYV?",
          a: "FASTag KYV (Know Your Vehicle) is the verification process used to confirm the vehicle and ownership details associated with a FASTag. Keeping the required KYV details updated can help maintain smooth FASTag usage."
        },
        {
          q: "Who needs FASTag KYV?",
          a: "FASTag users whose vehicle or ownership details require verification or updating may need to complete the applicable KYV process, especially where the FASTag issuer requests updated vehicle information."
        },
        {
          q: "What documents are required for FASTag KYV?",
          a: "The documents or details typically required may include the FASTag ID or tag details, vehicle Registration Certificate (RC), and applicable identity information such as Aadhaar or PAN. Additional documents may be requested by the FASTag issuer."
        },
        {
          q: "What is the process for FASTag KYV?",
          a: "The process generally involves providing the FASTag and vehicle details, submitting the required documents, verifying the vehicle information, completing the applicable KYV process with the FASTag issuer, and tracking the request until verification is completed."
        },
        {
          q: "How long does FASTag KYV take to process?",
          a: "The typical processing time may be around 3–5 working days. The actual timeline can vary depending on document verification, the FASTag issuer, and the applicable processing requirements, so it should be treated as an estimate."
        },
        {
          q: "What are the charges involved in FASTag KYV?",
          a: "The applicable FASTag issuer or verification charges, if any, are separate from the service facilitation charge. Aarambh India's service facilitation charge starts from ₹149, and any applicable official charges are communicated before proceeding."
        },
        {
          q: "What happens if my FASTag KYV is rejected or delayed?",
          a: "KYV may be delayed or require correction due to mismatched vehicle or FASTag details, unclear documents, incomplete information, or issues identified during verification. The details can generally be corrected and the KYV request resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with FASTag KYV?",
          a: "Aarambh India verifies the available FASTag and vehicle details, assists with preparing and submitting the KYV information, helps identify discrepancies, and provides regular WhatsApp status updates until the verification process is completed."
        }
      ],

      hi: [
        {
          q: "FASTag KYV क्या है?",
          a: "FASTag KYV (Know Your Vehicle) वह सत्यापन प्रक्रिया है जिसमें FASTag से जुड़े वाहन और स्वामित्व संबंधी विवरणों की पुष्टि की जाती है। आवश्यक KYV विवरण अपडेट रखने से FASTag का उपयोग सुचारू बनाए रखने में सहायता मिल सकती है।"
        },
        {
          q: "FASTag KYV किसे करवाना चाहिए?",
          a: "जिन FASTag उपयोगकर्ताओं के वाहन या स्वामित्व विवरण के सत्यापन या अपडेट की आवश्यकता है, उन्हें लागू KYV प्रक्रिया पूरी करनी पड़ सकती है, विशेष रूप से जब FASTag जारी करने वाला प्रदाता अपडेटेड वाहन जानकारी मांगता है।"
        },
        {
          q: "FASTag KYV के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः FASTag ID या टैग विवरण, वाहन का Registration Certificate (RC) और आधार या PAN जैसी लागू पहचान संबंधी जानकारी आवश्यक हो सकती है। FASTag जारी करने वाला प्रदाता अतिरिक्त दस्तावेज भी मांग सकता है।"
        },
        {
          q: "FASTag KYV की प्रक्रिया क्या है?",
          a: "प्रक्रिया में FASTag और वाहन विवरण देना, आवश्यक दस्तावेज जमा करना, वाहन संबंधी जानकारी का सत्यापन करना, FASTag जारी करने वाले प्रदाता के साथ लागू KYV प्रक्रिया पूरी करना और सत्यापन पूरा होने तक अनुरोध का स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "FASTag KYV होने में कितना समय लगता है?",
          a: "सामान्यतः प्रक्रिया में लगभग 3–5 कार्य दिवस लग सकते हैं। वास्तविक समय दस्तावेज सत्यापन, FASTag जारी करने वाले प्रदाता और लागू प्रोसेसिंग आवश्यकताओं पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "FASTag KYV के लिए कितने शुल्क लगते हैं?",
          a: "FASTag जारी करने वाले प्रदाता या सत्यापन के लिए कोई लागू शुल्क हो सकता है, जो सेवा सुविधा शुल्क से अलग होगा। Aarambh India का सेवा सुविधा शुल्क ₹149 से शुरू होता है और लागू आधिकारिक शुल्क की जानकारी प्रक्रिया शुरू करने से पहले दी जाती है।"
        },
        {
          q: "यदि FASTag KYV अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "वाहन या FASTag विवरण में अंतर, अस्पष्ट दस्तावेज, अधूरी जानकारी या सत्यापन के दौरान सामने आने वाली समस्याओं के कारण KYV में देरी या सुधार की आवश्यकता हो सकती है। विवरण सही करके जहां लागू हो वहां KYV अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India FASTag KYV में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध FASTag और वाहन विवरणों की जांच करता है, KYV जानकारी तैयार और जमा करने में सहायता करता है, किसी भी अंतर की पहचान करने में मदद करता है और सत्यापन प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "fastag-annual-pass",
    image: fastag,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "FASTag One Year Pass",
      hi: "FASTag एक वर्ष का पास"
    },

    category: {
      en: "Transport",
      hi: "परिवहन"
    },

    tag: {
      en: "New",
      hi: "नया"
    },

    price: {
      en: "₹549 onwards service charge",
      hi: "₹549 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Get your FASTag Annual Pass for eligible National Highway travel — enjoy convenient toll travel under the applicable annual pass terms without repeated toll payments.",
      hi: "पात्र राष्ट्रीय राजमार्ग यात्रा के लिए FASTag Annual Pass प्राप्त करें — लागू वार्षिक पास नियमों के अनुसार बार-बार टोल भुगतान की आवश्यकता को कम करते हुए सुविधाजनक यात्रा का लाभ उठाएं।"
    },

    benefits: {
      en: [
        "Assistance activating the FASTag Annual Pass for eligible National Highway travel under the applicable pass terms.",
        "Guidance on eligibility, validity, applicable highway coverage, and other terms of the annual pass.",
        "Careful application using your existing FASTag, vehicle, and Registration Certificate details.",
        "Helps reduce the need for repeated toll payments during eligible travel covered under the pass.",
        "Regular status updates until the annual pass is successfully activated.",
        "Reminder-based guidance to help renew or reactivate the pass before expiry, where applicable."
      ],

      hi: [
        "लागू पास नियमों के अनुसार पात्र राष्ट्रीय राजमार्ग यात्रा के लिए FASTag Annual Pass सक्रिय करने में सहायता।",
        "Annual Pass की पात्रता, वैधता, लागू राजमार्ग कवरेज और अन्य शर्तों के बारे में मार्गदर्शन।",
        "मौजूदा FASTag, वाहन और Registration Certificate विवरण के आधार पर आवेदन को सावधानीपूर्वक पूरा करने में सहायता।",
        "पास के अंतर्गत आने वाली पात्र यात्राओं के दौरान बार-बार टोल भुगतान की आवश्यकता को कम करने में सहायता।",
        "Annual Pass सफलतापूर्वक सक्रिय होने तक नियमित स्टेटस अपडेट।",
        "जहां लागू हो वहां पास की वैधता समाप्त होने से पहले नवीनीकरण या दोबारा सक्रिय करने के लिए रिमाइंडर-आधारित मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is FASTag One Year Pass?",
          a: "FASTag One Year Pass is an annual toll pass available for eligible National Highway travel under the applicable government terms. It is designed to provide convenient toll travel without requiring separate toll payments for every eligible journey covered by the pass."
        },
        {
          q: "Who needs FASTag One Year Pass?",
          a: "The pass can be useful for vehicle owners who frequently travel on eligible National Highways and meet the applicable eligibility conditions. Coverage, usage limits, and terms are subject to the current rules of the annual pass scheme."
        },
        {
          q: "What documents are required for FASTag One Year Pass?",
          a: "The information typically required may include your FASTag ID or tag details, vehicle Registration Certificate (RC), vehicle registration number, and other vehicle details. Additional information may be requested during verification."
        },
        {
          q: "What is the process for FASTag One Year Pass?",
          a: "The process generally involves checking eligibility, verifying your FASTag and vehicle details, submitting the required information, completing the applicable annual pass activation process, and confirming activation once the pass is successfully linked to the eligible vehicle."
        },
        {
          q: "How long does FASTag One Year Pass take to process?",
          a: "The typical processing time may be around 3–5 working days after the required information and verification are completed. The actual timeline can vary depending on the applicable system, verification requirements, and processing workload, so it should be treated as an estimate."
        },
        {
          q: "What are the charges involved in FASTag One Year Pass?",
          a: "The annual pass amount is separate from Aarambh India's service facilitation charge. The applicable government or scheme fee may be revised periodically, so the current pass amount and service charge are confirmed before proceeding."
        },
        {
          q: "What happens if my FASTag One Year Pass application is rejected or delayed?",
          a: "Activation may be delayed or require correction due to an inactive or mismatched FASTag, incorrect vehicle details, incomplete information, verification issues, or other applicable eligibility conditions. The issue can generally be corrected and the request resubmitted where applicable."
        },
        {
          q: "How does Aarambh India help with FASTag One Year Pass?",
          a: "Aarambh India verifies the available FASTag and vehicle details, assists with the applicable Annual Pass activation process, helps identify information mismatches, and provides regular WhatsApp status updates until the pass is activated."
        }
      ],

      hi: [
        {
          q: "FASTag एक वर्ष का पास क्या है?",
          a: "FASTag One Year Pass पात्र राष्ट्रीय राजमार्ग यात्रा के लिए लागू सरकारी शर्तों के तहत उपलब्ध वार्षिक टोल पास है। इसके माध्यम से पास के अंतर्गत आने वाली पात्र यात्राओं के लिए हर बार अलग से टोल भुगतान करने की आवश्यकता कम हो सकती है।"
        },
        {
          q: "FASTag एक वर्ष का पास किसे लेना चाहिए?",
          a: "यह पास उन वाहन मालिकों के लिए उपयोगी हो सकता है जो पात्र राष्ट्रीय राजमार्गों पर नियमित रूप से यात्रा करते हैं और लागू पात्रता शर्तों को पूरा करते हैं। कवरेज, उपयोग की सीमाएं और अन्य शर्तें वर्तमान Annual Pass योजना के नियमों के अनुसार होंगी।"
        },
        {
          q: "FASTag एक वर्ष के पास के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः FASTag ID या टैग विवरण, वाहन का Registration Certificate (RC), वाहन रजिस्ट्रेशन नंबर और अन्य वाहन संबंधी जानकारी आवश्यक हो सकती है। सत्यापन के दौरान अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "FASTag एक वर्ष के पास की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, FASTag और वाहन विवरण का सत्यापन, आवश्यक जानकारी जमा करना, लागू Annual Pass activation प्रक्रिया पूरी करना और पास सफलतापूर्वक वाहन से लिंक होने के बाद सक्रियता की पुष्टि करना शामिल है।"
        },
        {
          q: "FASTag एक वर्ष का पास सक्रिय होने में कितना समय लगता है?",
          a: "आवश्यक जानकारी और सत्यापन पूरा होने के बाद सामान्यतः लगभग 3–5 कार्य दिवस लग सकते हैं। वास्तविक समय संबंधित सिस्टम, सत्यापन आवश्यकताओं और प्रोसेसिंग कार्यभार पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "FASTag एक वर्ष के पास के लिए कितने शुल्क लगते हैं?",
          a: "Annual Pass की लागू राशि Aarambh India के सेवा सुविधा शुल्क से अलग होती है। सरकारी या योजना संबंधी शुल्क समय-समय पर संशोधित हो सकता है, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान पास राशि और सेवा शुल्क की जानकारी दी जाती है।"
        },
        {
          q: "यदि FASTag एक वर्ष के पास का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "निष्क्रिय या मेल न खाने वाले FASTag, गलत वाहन विवरण, अधूरी जानकारी, सत्यापन संबंधी समस्या या अन्य पात्रता शर्तों के कारण activation में देरी या सुधार की आवश्यकता हो सकती है। समस्या को ठीक करके जहां लागू हो वहां अनुरोध दोबारा जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India FASTag एक वर्ष के पास में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध FASTag और वाहन विवरणों की जांच करता है, Annual Pass activation प्रक्रिया में सहायता करता है, जानकारी में किसी भी अंतर की पहचान करने में मदद करता है और पास सक्रिय होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "new-passport",
    image: passport,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "New Passport",
      hi: "नया पासपोर्ट"
    },

    category: {
      en: "Travel",
      hi: "यात्रा"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹2699 onwards service charge",
      hi: "₹2699 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Get your fresh passport — assistance with regular or Tatkal applications, appointment booking, documentation, and application tracking.",
      hi: "अपना नया पासपोर्ट बनवाएं — सामान्य या Tatkal आवेदन, अपॉइंटमेंट बुकिंग, दस्तावेज और आवेदन ट्रैकिंग में सहायता।"
    },

    benefits: {
      en: [
        "Assistance with a fresh passport application, including Tatkal processing where eligible and required.",
        "Guidance on selecting the correct passport application category and preparing the required supporting documents.",
        "Assistance booking an appointment at the applicable Passport Seva Kendra (PSK) or Passport Office.",
        "Careful and accurate form filling to help reduce documentation or verification-related delays.",
        "Regular status updates from application submission through police verification and passport dispatch.",
        "Support addressing document discrepancies or verification-related queries raised during the application process."
      ],

      hi: [
        "नए पासपोर्ट के लिए आवेदन करने में सहायता, जिसमें पात्रता के अनुसार Tatkal प्रक्रिया में भी सहायता शामिल है।",
        "सही पासपोर्ट आवेदन श्रेणी चुनने और आवश्यक सहायक दस्तावेज तैयार करने में मार्गदर्शन।",
        "लागू Passport Seva Kendra (PSK) या Passport Office में अपॉइंटमेंट बुक करने में सहायता।",
        "दस्तावेज या सत्यापन संबंधी देरी को कम करने के लिए फॉर्म को सावधानीपूर्वक और सही तरीके से भरने में सहायता।",
        "आवेदन जमा करने से लेकर पुलिस वेरिफिकेशन और पासपोर्ट डिस्पैच तक नियमित स्टेटस अपडेट।",
        "आवेदन प्रक्रिया के दौरान सामने आने वाले दस्तावेजी अंतर या सत्यापन संबंधी प्रश्नों के समाधान में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is a New Passport?",
          a: "A New Passport is a passport issued to an eligible applicant who is applying for a passport for the first time. It serves as an official identity and travel document for international travel."
        },
        {
          q: "Who needs a New Passport?",
          a: "Indian citizens who do not currently have a passport and need valid passport documentation for international travel, visa applications, or other official purposes may apply for a new passport."
        },
        {
          q: "What documents are required for a New Passport?",
          a: "The documents typically required may include Aadhaar or another identity proof, valid address proof, date-of-birth proof, recent photographs where applicable, and other documents based on the applicant's circumstances. Original documents may be required at the appointment for verification."
        },
        {
          q: "What is the process for a New Passport?",
          a: "The process generally involves checking eligibility, preparing the required documents, completing the passport application, paying the applicable government fee, booking a PSK or Passport Office appointment, attending the appointment for document verification and biometrics, completing police verification where applicable, and tracking the passport until dispatch."
        },
        {
          q: "How long does a New Passport take to process?",
          a: "A regular passport application may typically take around 15–30 working days, including applicable police verification. Tatkal applications may be processed faster when eligible, but the actual timeline depends on document verification, police verification, appointment availability, and Passport Seva processing. The timeline should therefore be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in a New Passport?",
          a: "There is an applicable government passport fee based on the passport type and application category, which is separate from Aarambh India's service facilitation charge. Government fees may be revised periodically, so the current applicable amount is confirmed before proceeding."
        },
        {
          q: "What happens if my New Passport application is rejected or delayed?",
          a: "An application may be delayed or require additional action due to incomplete documents, address or identity mismatches, police verification issues, incorrect information, or other Passport Seva requirements. The issue can generally be reviewed and the required correction or supporting evidence submitted where applicable."
        },
        {
          q: "How does Aarambh India help with New Passport?",
          a: "Aarambh India verifies the available application information and documents, assists with accurate form filling and appointment booking, provides guidance for the applicable verification process, and gives regular WhatsApp status updates until the passport is dispatched."
        }
      ],

      hi: [
        {
          q: "नया पासपोर्ट क्या है?",
          a: "नया पासपोर्ट उस पात्र आवेदक को जारी किया जाने वाला पासपोर्ट है जो पहली बार पासपोर्ट के लिए आवेदन कर रहा है। यह अंतरराष्ट्रीय यात्रा के लिए आधिकारिक पहचान और यात्रा दस्तावेज के रूप में उपयोग होता है।"
        },
        {
          q: "नया पासपोर्ट किसे बनवाना चाहिए?",
          a: "जिन भारतीय नागरिकों के पास वर्तमान में पासपोर्ट नहीं है और जिन्हें अंतरराष्ट्रीय यात्रा, वीज़ा आवेदन या अन्य आधिकारिक कार्यों के लिए वैध पासपोर्ट की आवश्यकता है, वे नए पासपोर्ट के लिए आवेदन कर सकते हैं।"
        },
        {
          q: "नए पासपोर्ट के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार या अन्य पहचान प्रमाण, वैध पते का प्रमाण, जन्म तिथि का प्रमाण, जहां लागू हो वहां हाल की फोटो और आवेदक की स्थिति के अनुसार अन्य दस्तावेज आवश्यक हो सकते हैं। सत्यापन के लिए अपॉइंटमेंट के समय मूल दस्तावेज प्रस्तुत करने पड़ सकते हैं।"
        },
        {
          q: "नए पासपोर्ट की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, आवश्यक दस्तावेज तैयार करना, पासपोर्ट आवेदन पूरा करना, लागू सरकारी शुल्क का भुगतान करना, PSK या Passport Office में अपॉइंटमेंट बुक करना, अपॉइंटमेंट पर दस्तावेज सत्यापन और बायोमेट्रिक पूरा करना, जहां लागू हो वहां पुलिस वेरिफिकेशन पूरा करना और पासपोर्ट डिस्पैच होने तक स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "नया पासपोर्ट बनने में कितना समय लगता है?",
          a: "सामान्य पासपोर्ट आवेदन में लागू पुलिस वेरिफिकेशन सहित लगभग 15–30 कार्य दिवस लग सकते हैं। पात्र होने पर Tatkal आवेदन इससे जल्दी प्रोसेस हो सकता है, लेकिन वास्तविक समय दस्तावेज सत्यापन, पुलिस वेरिफिकेशन, अपॉइंटमेंट की उपलब्धता और Passport Seva की प्रोसेसिंग पर निर्भर करता है। इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "नए पासपोर्ट के लिए कितने शुल्क लगते हैं?",
          a: "पासपोर्ट के प्रकार और आवेदन श्रेणी के अनुसार सरकारी पासपोर्ट शुल्क लागू होता है, जो Aarambh India के सेवा सुविधा शुल्क से अलग है। सरकारी शुल्क समय-समय पर संशोधित हो सकता है, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि नए पासपोर्ट का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "अधूरे दस्तावेज, पते या पहचान संबंधी अंतर, पुलिस वेरिफिकेशन की समस्या, गलत जानकारी या Passport Seva की अन्य आवश्यकताओं के कारण आवेदन में देरी या अतिरिक्त कार्रवाई की आवश्यकता हो सकती है। समस्या की जांच करके जहां लागू हो वहां आवश्यक सुधार या सहायक प्रमाण जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India नए पासपोर्ट में कैसे सहायता करता है?",
          a: "Aarambh India आवेदन संबंधी जानकारी और दस्तावेजों की जांच करता है, फॉर्म सही तरीके से भरने और अपॉइंटमेंट बुक करने में सहायता करता है, लागू सत्यापन प्रक्रिया के बारे में मार्गदर्शन देता है और पासपोर्ट डिस्पैच होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "passport-renewal",
    image: passport,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Passport Renewal",
      hi: "पासपोर्ट नवीनीकरण"
    },

    category: {
      en: "Travel",
      hi: "यात्रा"
    },

    price: {
      en: "₹2699 onwards service charge",
      hi: "₹2699 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Is your passport expiring soon or already expired? Get assistance with your passport renewal application, appointment booking, documentation, and status tracking.",
      hi: "क्या आपका पासपोर्ट जल्द समाप्त होने वाला है या पहले ही समाप्त हो चुका है? पासपोर्ट नवीनीकरण आवेदन, अपॉइंटमेंट बुकिंग, दस्तावेज और स्टेटस ट्रैकिंग में सहायता प्राप्त करें।"
    },

    benefits: {
      en: [
        "Assistance renewing your passport before or after expiry to help keep your international travel document valid.",
        "Guidance on whether your renewal is suitable for the regular or Tatkal process based on the applicable requirements.",
        "Assistance booking an appointment at the applicable Passport Seva Kendra (PSK) or Passport Office.",
        "Careful and accurate application filing to help reduce avoidable documentation or verification delays.",
        "Regular status tracking from application submission through verification and passport dispatch.",
        "Support addressing address, personal-detail, or document mismatches identified during the renewal process."
      ],

      hi: [
        "पासपोर्ट की अवधि समाप्त होने से पहले या समाप्त होने के बाद नवीनीकरण कराने में सहायता, ताकि यात्रा दस्तावेज को वैध बनाए रखने में मदद मिल सके।",
        "लागू आवश्यकताओं के आधार पर यह समझने में मार्गदर्शन कि आपका नवीनीकरण सामान्य या Tatkal प्रक्रिया के लिए उपयुक्त है।",
        "लागू Passport Seva Kendra (PSK) या Passport Office में अपॉइंटमेंट बुक करने में सहायता।",
        "अनावश्यक दस्तावेजी या सत्यापन संबंधी देरी को कम करने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से जमा करने में सहायता।",
        "आवेदन जमा करने से लेकर सत्यापन और पासपोर्ट डिस्पैच तक नियमित स्टेटस ट्रैकिंग।",
        "नवीनीकरण प्रक्रिया के दौरान सामने आने वाले पते, व्यक्तिगत विवरण या दस्तावेज संबंधी अंतर को ठीक करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Passport Renewal?",
          a: "Passport Renewal is the process of applying for a re-issue of your passport when it is nearing expiry, has expired, or requires re-issue due to applicable changes or circumstances."
        },
        {
          q: "Who needs Passport Renewal?",
          a: "Indian citizens whose passport is nearing expiry, has expired, or requires re-issue due to changes in personal details, address, or other applicable circumstances may need to apply for passport renewal or re-issue."
        },
        {
          q: "What documents are required for Passport Renewal?",
          a: "The documents typically required may include your existing or expired passport, Aadhaar or another identity proof, valid address proof, recent photographs where applicable, and other documents depending on the reason for re-issue. Original documents may be required at the appointment for verification."
        },
        {
          q: "What is the process for Passport Renewal?",
          a: "The process generally involves checking the existing passport details, preparing the required documents, completing the re-issue application, paying the applicable government fee, booking a PSK or Passport Office appointment, attending the appointment for document verification and biometrics, completing police verification where applicable, and tracking the passport until dispatch."
        },
        {
          q: "How long does Passport Renewal take to process?",
          a: "A regular passport re-issue may typically take around 15–30 working days, depending on the applicable verification process. Tatkal applications may be processed faster when eligible. The actual timeline can vary based on document verification, police verification, appointment availability, and Passport Seva processing, so it should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Passport Renewal?",
          a: "An applicable government passport fee is charged based on the passport type and re-issue category, and this is separate from Aarambh India's service facilitation charge. Government fees may be revised periodically, so the current applicable amount is confirmed before proceeding."
        },
        {
          q: "What happens if my Passport Renewal application is rejected or delayed?",
          a: "An application may be delayed or require additional action due to incomplete documents, address or identity mismatches, police verification issues, incorrect information, or other Passport Seva requirements. The issue can generally be reviewed and corrected with the required supporting evidence where applicable."
        },
        {
          q: "How does Aarambh India help with Passport Renewal?",
          a: "Aarambh India verifies the available passport and supporting documents, assists with accurately preparing the re-issue application and booking the appointment, provides guidance during the applicable verification process, and gives regular WhatsApp status updates until the renewed passport is dispatched."
        }
      ],

      hi: [
        {
          q: "पासपोर्ट नवीनीकरण क्या है?",
          a: "पासपोर्ट नवीनीकरण वह प्रक्रिया है जिसमें पासपोर्ट की अवधि समाप्त होने वाली हो, समाप्त हो चुकी हो या लागू परिस्थितियों के कारण दोबारा पासपोर्ट जारी कराने की आवश्यकता हो, तब नए पासपोर्ट के लिए re-issue आवेदन किया जाता है।"
        },
        {
          q: "पासपोर्ट नवीनीकरण किसे करवाना चाहिए?",
          a: "जिन भारतीय नागरिकों का पासपोर्ट जल्द समाप्त होने वाला है, पहले ही समाप्त हो चुका है या व्यक्तिगत विवरण, पता अथवा अन्य लागू परिस्थितियों के कारण दोबारा पासपोर्ट जारी कराने की आवश्यकता है, वे पासपोर्ट नवीनीकरण या re-issue के लिए आवेदन कर सकते हैं।"
        },
        {
          q: "पासपोर्ट नवीनीकरण के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः मौजूदा या समाप्त पासपोर्ट, आधार या अन्य पहचान प्रमाण, वैध पते का प्रमाण, जहां लागू हो वहां हाल की फोटो और re-issue के कारण के अनुसार अन्य दस्तावेज आवश्यक हो सकते हैं। सत्यापन के लिए अपॉइंटमेंट के समय मूल दस्तावेज प्रस्तुत करने पड़ सकते हैं।"
        },
        {
          q: "पासपोर्ट नवीनीकरण की प्रक्रिया क्या है?",
          a: "प्रक्रिया में मौजूदा पासपोर्ट विवरण की जांच, आवश्यक दस्तावेज तैयार करना, re-issue आवेदन पूरा करना, लागू सरकारी शुल्क का भुगतान करना, PSK या Passport Office में अपॉइंटमेंट बुक करना, अपॉइंटमेंट पर दस्तावेज सत्यापन और बायोमेट्रिक पूरा करना, जहां लागू हो वहां पुलिस वेरिफिकेशन पूरा करना और पासपोर्ट डिस्पैच होने तक स्टेटस ट्रैक करना शामिल है।"
        },
        {
          q: "पासपोर्ट नवीनीकरण में कितना समय लगता है?",
          a: "सामान्य पासपोर्ट re-issue में लागू सत्यापन प्रक्रिया के अनुसार लगभग 15–30 कार्य दिवस लग सकते हैं। पात्र होने पर Tatkal आवेदन इससे जल्दी प्रोसेस हो सकता है। वास्तविक समय दस्तावेज सत्यापन, पुलिस वेरिफिकेशन, अपॉइंटमेंट की उपलब्धता और Passport Seva की प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "पासपोर्ट नवीनीकरण के लिए कितने शुल्क लगते हैं?",
          a: "पासपोर्ट के प्रकार और re-issue श्रेणी के अनुसार सरकारी पासपोर्ट शुल्क लागू होता है, जो Aarambh India के सेवा सुविधा शुल्क से अलग है। सरकारी शुल्क समय-समय पर संशोधित हो सकता है, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि पासपोर्ट नवीनीकरण का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "अधूरे दस्तावेज, पते या पहचान संबंधी अंतर, पुलिस वेरिफिकेशन की समस्या, गलत जानकारी या Passport Seva की अन्य आवश्यकताओं के कारण आवेदन में देरी या अतिरिक्त कार्रवाई की आवश्यकता हो सकती है। समस्या की जांच करके जहां लागू हो वहां आवश्यक सुधार या सहायक प्रमाण जमा किया जा सकता है।"
        },
        {
          q: "Aarambh India पासपोर्ट नवीनीकरण में कैसे सहायता करता है?",
          a: "Aarambh India मौजूदा पासपोर्ट और आवश्यक सहायक दस्तावेजों की जांच करता है, re-issue आवेदन सही तरीके से तैयार करने और अपॉइंटमेंट बुक करने में सहायता करता है, लागू सत्यापन प्रक्रिया के बारे में मार्गदर्शन देता है और पासपोर्ट डिस्पैच होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देता है।"
        }
      ]
    }
  },
  {
    id: "fti-ttp",
    image: ftittp,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "FTI-TTP Registration",
      hi: "FTI-TTP पंजीकरण"
    },

    category: {
      en: "Travel",
      hi: "यात्रा"
    },

    tag: {
      en: "New",
      hi: "नया"
    },

    price: {
      en: "₹199 onwards",
      hi: "₹199 से शुरू"
    },

    summary: {
      en: "Get registered for the Fast Track Immigration – Trusted Traveller Programme (FTI-TTP) and access faster, automated immigration clearance through e-gates at participating airports, subject to eligibility and applicable rules.",
      hi: "Fast Track Immigration – Trusted Traveller Programme (FTI-TTP) के लिए पंजीकरण कराएं और पात्रता एवं लागू नियमों के अनुसार भाग लेने वाले हवाई अड्डों पर e-gates के माध्यम से तेज़ और स्वचालित इमिग्रेशन क्लियरेंस की सुविधा प्राप्त करें।"
    },

    benefits: {
      en: [
        "Assistance with registration for the Trusted Traveller Programme to use automated immigration clearance at participating airports, subject to eligibility.",
        "Guidance on the applicable eligibility criteria and registration requirements for FTI-TTP.",
        "Assistance preparing the required passport, identity, and other supporting information for the application.",
        "Careful and accurate application filing to help reduce avoidable documentation or verification-related delays.",
        "Regular status updates during the registration and verification process until the application is completed.",
        "Guidance on the general process for using e-gates after successful enrolment and activation."
      ],

      hi: [
        "पात्रता के अनुसार Trusted Traveller Programme में पंजीकरण कराने में सहायता, ताकि भाग लेने वाले हवाई अड्डों पर स्वचालित इमिग्रेशन क्लियरेंस की सुविधा का उपयोग किया जा सके।",
        "FTI-TTP के लिए लागू पात्रता मानदंड और पंजीकरण आवश्यकताओं को समझने में मार्गदर्शन।",
        "आवेदन के लिए आवश्यक पासपोर्ट, पहचान और अन्य सहायक जानकारी तैयार करने में सहायता।",
        "अनावश्यक दस्तावेजी या सत्यापन संबंधी देरी को कम करने के लिए आवेदन को सावधानीपूर्वक और सही तरीके से भरने में सहायता।",
        "पंजीकरण और सत्यापन प्रक्रिया के दौरान आवेदन पूरा होने तक नियमित स्टेटस अपडेट।",
        "सफल पंजीकरण और एक्टिवेशन के बाद e-gates का उपयोग करने की सामान्य प्रक्रिया को समझने में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is FTI-TTP Registration?",
          a: "FTI-TTP stands for Fast Track Immigration – Trusted Traveller Programme. It is a government programme designed to provide eligible travellers with faster and automated immigration clearance through e-gates at participating airports, subject to applicable rules and successful enrolment."
        },
        {
          q: "Who can apply for FTI-TTP?",
          a: "Eligible Indian citizens and other categories permitted under the applicable FTI-TTP rules may apply. Eligibility, passport requirements, and other conditions are determined by the concerned authorities and may change from time to time."
        },
        {
          q: "What documents are required for FTI-TTP Registration?",
          a: "The application generally requires a valid passport and relevant identity or personal details. Aadhaar and biometric information may also be required as part of the registration or verification process. Additional information or documents may be requested depending on the applicant's category and the applicable requirements."
        },
        {
          q: "What is the process for FTI-TTP Registration?",
          a: "The process generally involves checking eligibility, preparing the required information and documents, submitting the registration application, completing biometric enrolment or verification where required, and waiting for approval or activation. After successful enrolment, eligible travellers can use the designated e-gates at participating airports according to the applicable procedure."
        },
        {
          q: "How long does FTI-TTP Registration take to process?",
          a: "The registration and verification process may typically take around 10–15 working days after submission, but the actual timeline can vary depending on verification, biometric enrolment, application volume, and the processing requirements of the concerned authority. This is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in FTI-TTP Registration?",
          a: "Any applicable government or programme-related charges are separate from Aarambh India's service facilitation charge. Government or programme fees may be revised periodically, so the current applicable amount is confirmed before proceeding."
        },
        {
          q: "What happens if my FTI-TTP Registration application is rejected or delayed?",
          a: "An application may be delayed or require additional action due to eligibility issues, passport or personal-detail mismatches, incomplete information, biometric verification issues, or other programme requirements. The application can be reviewed and corrected or additional information can be provided where permitted."
        },
        {
          q: "How does Aarambh India help with FTI-TTP Registration?",
          a: "Aarambh India helps check the available information and documents, assists with preparing and submitting the registration application, provides guidance on the applicable verification or biometric steps, and shares regular status updates over WhatsApp until the registration process is completed."
        }
      ],

      hi: [
        {
          q: "FTI-TTP पंजीकरण क्या है?",
          a: "FTI-TTP का अर्थ Fast Track Immigration – Trusted Traveller Programme है। यह एक सरकारी कार्यक्रम है, जिसके तहत पात्र यात्रियों को लागू नियमों और सफल पंजीकरण के अनुसार भाग लेने वाले हवाई अड्डों पर e-gates के माध्यम से तेज़ और स्वचालित इमिग्रेशन क्लियरेंस की सुविधा मिल सकती है।"
        },
        {
          q: "FTI-TTP के लिए कौन आवेदन कर सकता है?",
          a: "लागू FTI-TTP नियमों के अनुसार पात्र भारतीय नागरिक और अन्य अनुमत श्रेणियों के व्यक्ति आवेदन कर सकते हैं। पात्रता, पासपोर्ट संबंधी आवश्यकताएं और अन्य शर्तें संबंधित प्राधिकरण द्वारा निर्धारित की जाती हैं और समय-समय पर बदल सकती हैं।"
        },
        {
          q: "FTI-TTP पंजीकरण के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "आवेदन के लिए सामान्यतः वैध पासपोर्ट और संबंधित पहचान या व्यक्तिगत विवरण आवश्यक होते हैं। पंजीकरण या सत्यापन प्रक्रिया के दौरान आधार और बायोमेट्रिक जानकारी भी आवश्यक हो सकती है। आवेदक की श्रेणी और लागू आवश्यकताओं के अनुसार अतिरिक्त जानकारी या दस्तावेज मांगे जा सकते हैं।"
        },
        {
          q: "FTI-TTP पंजीकरण की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, आवश्यक जानकारी और दस्तावेज तैयार करना, पंजीकरण आवेदन जमा करना, जहां आवश्यक हो वहां बायोमेट्रिक एनरोलमेंट या सत्यापन पूरा करना और आवेदन के अनुमोदन या एक्टिवेशन की प्रतीक्षा करना शामिल है। सफल पंजीकरण के बाद पात्र यात्री लागू प्रक्रिया के अनुसार भाग लेने वाले हवाई अड्डों पर निर्धारित e-gates का उपयोग कर सकते हैं।"
        },
        {
          q: "FTI-TTP पंजीकरण में कितना समय लगता है?",
          a: "आवेदन जमा करने के बाद पंजीकरण और सत्यापन प्रक्रिया में सामान्यतः लगभग 10–15 कार्य दिवस लग सकते हैं। वास्तविक समय सत्यापन, बायोमेट्रिक एनरोलमेंट, आवेदन की संख्या और संबंधित प्राधिकरण की प्रक्रिया पर निर्भर कर सकता है। इसे अनुमानित समय माना जाना चाहिए, निश्चित समय की गारंटी नहीं।"
        },
        {
          q: "FTI-TTP पंजीकरण के लिए कितने शुल्क लगते हैं?",
          a: "यदि कोई सरकारी या कार्यक्रम संबंधी शुल्क लागू होता है, तो वह Aarambh India के सेवा सुविधा शुल्क से अलग होगा। सरकारी या कार्यक्रम शुल्क समय-समय पर संशोधित हो सकते हैं, इसलिए प्रक्रिया शुरू करने से पहले वर्तमान लागू राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि FTI-TTP पंजीकरण का आवेदन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "पात्रता संबंधी समस्या, पासपोर्ट या व्यक्तिगत विवरण में अंतर, अधूरी जानकारी, बायोमेट्रिक सत्यापन की समस्या या कार्यक्रम की अन्य आवश्यकताओं के कारण आवेदन में देरी या अतिरिक्त कार्रवाई की आवश्यकता हो सकती है। जहां अनुमति हो, वहां आवेदन की समीक्षा करके आवश्यक सुधार या अतिरिक्त जानकारी जमा की जा सकती है।"
        },
        {
          q: "Aarambh India FTI-TTP पंजीकरण में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध जानकारी और दस्तावेजों की जांच करने, पंजीकरण आवेदन तैयार करने और जमा करने, लागू सत्यापन या बायोमेट्रिक प्रक्रिया के बारे में मार्गदर्शन देने तथा पंजीकरण प्रक्रिया पूरी होने तक WhatsApp के माध्यम से नियमित स्टेटस अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "atal-pension-yojana",
    image: atalpension,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Atal Pension Yojana",
      hi: "अटल पेंशन योजना"
    },

    category: {
      en: "Insurance",
      hi: "बीमा"
    },

    price: {
      en: "₹99 onwards enrollment assistance",
      hi: "₹99 से शुरू नामांकन सहायता शुल्क"
    },

    summary: {
      en: "Plan for your retirement with Atal Pension Yojana (APY) — a government-backed pension scheme for eligible individuals aged 18–40, offering a predefined monthly pension after the age of 60 based on the chosen pension slab and applicable rules.",
      hi: "अटल पेंशन योजना (APY) के साथ अपने रिटायरमेंट की योजना बनाएं — 18–40 वर्ष की पात्र आयु के व्यक्तियों के लिए एक सरकारी समर्थित पेंशन योजना, जिसमें चुनी गई पेंशन स्लैब और लागू नियमों के अनुसार 60 वर्ष की आयु के बाद निर्धारित मासिक पेंशन मिल सकती है।"
    },

    benefits: {
      en: [
        "Assistance with enrolment in a government-backed pension scheme for eligible individuals in the 18–40 age group.",
        "Guidance on selecting the applicable pension slab based on your age, contribution requirements, and retirement planning needs.",
        "Assistance linking the APY account with your eligible bank account for regular auto-debit contributions.",
        "Careful and accurate enrolment assistance to help ensure your details and selected pension option are recorded correctly.",
        "Clear explanation of the expected contribution amount based on your age, joining date, and selected pension slab.",
        "Ongoing support with contribution status, account-related queries, and nominee updates where applicable."
      ],

      hi: [
        "18–40 वर्ष की पात्र आयु सीमा वाले व्यक्तियों के लिए सरकारी समर्थित पेंशन योजना में नामांकन कराने में सहायता।",
        "आपकी आयु, योगदान आवश्यकताओं और रिटायरमेंट योजना के अनुसार उपयुक्त पेंशन स्लैब चुनने में मार्गदर्शन।",
        "नियमित ऑटो-डेबिट योगदान के लिए पात्र बैंक खाते को APY खाते से लिंक करने में सहायता।",
        "आपके विवरण और चुनी गई पेंशन राशि को सही तरीके से दर्ज कराने के लिए सावधानीपूर्वक नामांकन सहायता।",
        "आपकी आयु, नामांकन की तिथि और चुनी गई पेंशन स्लैब के आधार पर संभावित योगदान राशि को समझने में स्पष्ट मार्गदर्शन।",
        "जहां लागू हो वहां योगदान स्थिति, खाते से संबंधित प्रश्नों और नामांकित व्यक्ति (Nominee) के विवरण में अपडेट के लिए सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Atal Pension Yojana?",
          a: "Atal Pension Yojana (APY) is a government-backed pension scheme designed to encourage long-term retirement savings. Eligible subscribers contribute regularly and can receive a predefined minimum monthly pension from the age of 60, based on the selected pension slab and applicable scheme rules."
        },
        {
          q: "Who can enrol in Atal Pension Yojana?",
          a: "Eligible individuals generally need to be Indian citizens between 18 and 40 years of age at the time of joining and must have a qualifying bank or post office savings account. Eligibility conditions and scheme rules prescribed by the concerned authorities apply."
        },
        {
          q: "What documents are required for Atal Pension Yojana?",
          a: "The commonly required details include Aadhaar or another accepted identity document, an eligible bank or post office savings account, age/date-of-birth details, mobile number, and nominee information. Additional information may be required by the concerned bank or institution."
        },
        {
          q: "What is the process for Atal Pension Yojana enrolment?",
          a: "The process generally involves checking eligibility, selecting the applicable pension slab, providing the required KYC and nominee details, submitting the APY enrolment form through the eligible bank or post office, and setting up the required recurring contribution through the linked account."
        },
        {
          q: "How long does Atal Pension Yojana enrolment take to process?",
          a: "Bank or post-office enrolment may typically take around 7–10 working days after submission, depending on KYC verification and the processing time of the concerned institution. This is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Atal Pension Yojana?",
          a: "The APY contribution amount depends on factors such as the subscriber's age at joining, selected pension slab, and applicable scheme rules. Any applicable bank or scheme-related charges are separate from Aarambh India's ₹99 onwards enrolment assistance fee. The applicable contribution amount is confirmed before proceeding."
        },
        {
          q: "What happens if my Atal Pension Yojana enrolment is rejected or delayed?",
          a: "Enrolment may be delayed or require correction due to incorrect bank details, KYC mismatch, age or eligibility issues, incomplete information, or nominee-detail discrepancies. The details can be reviewed and corrected through the linked bank or post office where permitted."
        },
        {
          q: "How does Aarambh India help with Atal Pension Yojana?",
          a: "Aarambh India helps check eligibility and required information, assists with preparing and submitting the enrolment details, explains the contribution and pension options, and provides WhatsApp updates regarding the enrolment status."
        }
      ],

      hi: [
        {
          q: "अटल पेंशन योजना क्या है?",
          a: "अटल पेंशन योजना (APY) एक सरकारी समर्थित पेंशन योजना है, जिसका उद्देश्य लंबे समय के लिए रिटायरमेंट बचत को बढ़ावा देना है। पात्र सदस्य नियमित योगदान करते हैं और चुनी गई पेंशन स्लैब तथा लागू योजना नियमों के अनुसार 60 वर्ष की आयु के बाद निर्धारित न्यूनतम मासिक पेंशन प्राप्त कर सकते हैं।"
        },
        {
          q: "अटल पेंशन योजना में कौन नामांकन कर सकता है?",
          a: "आमतौर पर योजना में शामिल होने के समय व्यक्ति की आयु 18 से 40 वर्ष के बीच होनी चाहिए और उसके पास पात्र बैंक या पोस्ट ऑफिस सेविंग्स अकाउंट होना चाहिए। पात्रता और अन्य शर्तें संबंधित प्राधिकरण द्वारा निर्धारित योजना नियमों के अनुसार लागू होती हैं।"
        },
        {
          q: "अटल पेंशन योजना के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार या अन्य स्वीकार्य पहचान प्रमाण, पात्र बैंक या पोस्ट ऑफिस सेविंग्स अकाउंट, आयु या जन्म तिथि का विवरण, मोबाइल नंबर और Nominee की जानकारी आवश्यक हो सकती है। संबंधित बैंक या संस्था द्वारा अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "अटल पेंशन योजना में नामांकन की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, उपयुक्त पेंशन स्लैब का चयन, आवश्यक KYC और Nominee विवरण देना, पात्र बैंक या पोस्ट ऑफिस के माध्यम से APY नामांकन फॉर्म जमा करना और लिंक किए गए खाते से नियमित योगदान के लिए ऑटो-डेबिट की व्यवस्था करना शामिल है।"
        },
        {
          q: "अटल पेंशन योजना का नामांकन पूरा होने में कितना समय लगता है?",
          a: "बैंक या पोस्ट ऑफिस के माध्यम से नामांकन में आवेदन जमा होने के बाद सामान्यतः लगभग 7–10 कार्य दिवस लग सकते हैं। वास्तविक समय KYC सत्यापन और संबंधित संस्था की प्रोसेसिंग पर निर्भर करता है। इसे अनुमानित समय माना जाना चाहिए, निश्चित समय की गारंटी नहीं।"
        },
        {
          q: "अटल पेंशन योजना के लिए कितने शुल्क लगते हैं?",
          a: "APY में योगदान की राशि नामांकन के समय आपकी आयु, चुनी गई पेंशन स्लैब और लागू योजना नियमों पर निर्भर करती है। यदि कोई बैंक या योजना संबंधी शुल्क लागू होता है, तो वह Aarambh India के ₹99 से शुरू नामांकन सहायता शुल्क से अलग होगा। प्रक्रिया शुरू करने से पहले लागू योगदान राशि की जानकारी दी जाती है।"
        },
        {
          q: "यदि अटल पेंशन योजना का नामांकन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "गलत बैंक विवरण, KYC में अंतर, आयु या पात्रता संबंधी समस्या, अधूरी जानकारी या Nominee विवरण में अंतर के कारण नामांकन में देरी या सुधार की आवश्यकता हो सकती है। जहां अनुमति हो, वहां संबंधित बैंक या पोस्ट ऑफिस के माध्यम से विवरण की जांच और सुधार किया जा सकता है।"
        },
        {
          q: "Aarambh India अटल पेंशन योजना में कैसे सहायता करता है?",
          a: "Aarambh India पात्रता और आवश्यक जानकारी की जांच करने, नामांकन विवरण तैयार करने और जमा करने, योगदान एवं पेंशन विकल्पों को समझाने तथा नामांकन की स्थिति के बारे में WhatsApp के माध्यम से अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "pmjjby",
    image: pmjjby,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "PMJJBY",
      hi: "PMJJBY"
    },

    category: {
      en: "Insurance",
      hi: "बीमा"
    },

    price: {
      en: "₹99 onwards enrollment assistance",
      hi: "₹99 से शुरू नामांकन सहायता शुल्क"
    },

    summary: {
      en: "Get coverage under the Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) — an affordable one-year life insurance scheme providing ₹2 lakh life cover to eligible subscribers, subject to the applicable scheme terms.",
      hi: "प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY) के तहत बीमा कवर प्राप्त करें — पात्र सदस्यों के लिए लागू योजना नियमों के अनुसार ₹2 लाख का जीवन बीमा कवर प्रदान करने वाली किफायती एक-वर्षीय बीमा योजना।"
    },

    benefits: {
      en: [
        "Assistance with enrolment in an affordable one-year life insurance scheme offering ₹2 lakh life cover to eligible subscribers.",
        "Guidance on eligibility requirements, renewal conditions, and the applicable annual premium.",
        "Assistance linking the PMJJBY cover with your eligible bank account for premium auto-debit and renewal.",
        "Careful and accurate enrolment assistance to help reduce errors that could create issues during future claim processing.",
        "Support ensuring that the nominee details are correctly provided and recorded.",
        "Guidance on the general claim process and the documents that may be required by the insurer or concerned bank."
      ],

      hi: [
        "पात्र सदस्यों के लिए ₹2 लाख जीवन बीमा कवर वाली किफायती एक-वर्षीय बीमा योजना में नामांकन कराने में सहायता।",
        "पात्रता, नवीनीकरण की शर्तों और लागू वार्षिक प्रीमियम को समझने में मार्गदर्शन।",
        "प्रीमियम के ऑटो-डेबिट और नवीनीकरण के लिए PMJJBY कवर को पात्र बैंक खाते से लिंक करने में सहायता।",
        "भविष्य में क्लेम प्रक्रिया के दौरान होने वाली समस्याओं को कम करने के लिए सही और सावधानीपूर्वक नामांकन में सहायता।",
        "Nominee का विवरण सही तरीके से दर्ज कराने और रिकॉर्ड में सही जानकारी सुनिश्चित करने में सहायता।",
        "भविष्य में आवश्यकता होने पर बीमा कंपनी या संबंधित बैंक द्वारा मांगे जाने वाले दस्तावेजों और सामान्य क्लेम प्रक्रिया के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is PMJJBY?",
          a: "PMJJBY stands for Pradhan Mantri Jeevan Jyoti Bima Yojana. It is a government-backed one-year renewable life insurance scheme that provides ₹2 lakh life cover to eligible subscribers in case of death due to any cause, subject to the applicable scheme terms and conditions."
        },
        {
          q: "Who can enrol in PMJJBY?",
          a: "Eligible individuals within the scheme's specified age range who have a qualifying bank or post office account and meet the applicable enrolment conditions can generally join PMJJBY. Eligibility and renewal conditions are subject to the current scheme rules."
        },
        {
          q: "What documents are required for PMJJBY?",
          a: "The commonly required details include Aadhaar or another accepted identity/KYC information, an eligible bank or post office account for premium auto-debit, mobile number, and nominee details. The concerned bank or institution may request additional information where applicable."
        },
        {
          q: "What is the process for PMJJBY enrolment?",
          a: "The process generally involves checking eligibility, providing the required KYC and nominee details, submitting the PMJJBY consent or enrolment form through the eligible bank or institution, and authorising the applicable premium to be debited from the linked account."
        },
        {
          q: "How long does PMJJBY enrolment take to process?",
          a: "Bank-based enrolment may typically take around 3–7 working days after submission, depending on KYC verification and the processing time of the concerned institution. The actual timeline may vary, so this should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in PMJJBY?",
          a: "PMJJBY has an applicable annual premium prescribed under the scheme, which may be revised by the authorities from time to time. The scheme premium is separate from Aarambh India's ₹99 onwards enrolment assistance fee. The current applicable premium is confirmed before proceeding."
        },
        {
          q: "What happens if my PMJJBY enrolment is rejected or delayed?",
          a: "Enrolment may be delayed or require correction due to incorrect bank details, KYC mismatch, incomplete information, account-related issues, or other scheme requirements. The details can be reviewed and corrected through the linked bank or institution where permitted."
        },
        {
          q: "How does Aarambh India help with PMJJBY?",
          a: "Aarambh India helps check the available information and documents, assists with preparing and submitting the enrolment details, verifies nominee and bank-account information, and provides WhatsApp updates regarding the enrolment status."
        }
      ],

      hi: [
        {
          q: "PMJJBY क्या है?",
          a: "PMJJBY का अर्थ प्रधानमंत्री जीवन ज्योति बीमा योजना है। यह एक सरकारी समर्थित, एक वर्ष के लिए नवीकरणीय जीवन बीमा योजना है, जिसके तहत पात्र सदस्यों को लागू योजना की शर्तों के अनुसार किसी भी कारण से मृत्यु होने पर ₹2 लाख का जीवन बीमा कवर मिल सकता है।"
        },
        {
          q: "PMJJBY में कौन नामांकन कर सकता है?",
          a: "योजना में निर्धारित आयु सीमा के भीतर आने वाले पात्र व्यक्ति, जिनके पास पात्र बैंक या पोस्ट ऑफिस खाता है और जो लागू नामांकन शर्तों को पूरा करते हैं, सामान्यतः PMJJBY में शामिल हो सकते हैं। पात्रता और नवीनीकरण की शर्तें वर्तमान योजना नियमों के अनुसार लागू होती हैं।"
        },
        {
          q: "PMJJBY के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार या अन्य स्वीकार्य पहचान/KYC जानकारी, प्रीमियम के ऑटो-डेबिट के लिए पात्र बैंक या पोस्ट ऑफिस खाता, मोबाइल नंबर और Nominee की जानकारी आवश्यक हो सकती है। जहां लागू हो, संबंधित बैंक या संस्था द्वारा अतिरिक्त जानकारी मांगी जा सकती है।"
        },
        {
          q: "PMJJBY में नामांकन की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, आवश्यक KYC और Nominee विवरण देना, पात्र बैंक या संबंधित संस्था के माध्यम से PMJJBY की सहमति या नामांकन फॉर्म जमा करना और लिंक किए गए खाते से लागू प्रीमियम कटौती की अनुमति देना शामिल है।"
        },
        {
          q: "PMJJBY का नामांकन पूरा होने में कितना समय लगता है?",
          a: "बैंक के माध्यम से नामांकन में आवेदन जमा होने के बाद सामान्यतः लगभग 3–7 कार्य दिवस लग सकते हैं। वास्तविक समय KYC सत्यापन और संबंधित संस्था की प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए, निश्चित समय की गारंटी नहीं।"
        },
        {
          q: "PMJJBY के लिए कितने शुल्क लगते हैं?",
          a: "PMJJBY के तहत योजना द्वारा निर्धारित वार्षिक प्रीमियम लागू होता है, जिसे संबंधित प्राधिकरण समय-समय पर संशोधित कर सकता है। यह योजना प्रीमियम Aarambh India के ₹99 से शुरू नामांकन सहायता शुल्क से अलग है। प्रक्रिया शुरू करने से पहले वर्तमान लागू प्रीमियम की जानकारी दी जाती है।"
        },
        {
          q: "यदि PMJJBY का नामांकन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "गलत बैंक विवरण, KYC में अंतर, अधूरी जानकारी, खाते से संबंधित समस्या या योजना की अन्य आवश्यकताओं के कारण नामांकन में देरी या सुधार की आवश्यकता हो सकती है। जहां अनुमति हो, वहां संबंधित बैंक या संस्था के माध्यम से विवरण की जांच और सुधार किया जा सकता है।"
        },
        {
          q: "Aarambh India PMJJBY में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध जानकारी और दस्तावेजों की जांच करने, नामांकन विवरण तैयार करने और जमा करने, Nominee तथा बैंक खाते की जानकारी सत्यापित करने और नामांकन की स्थिति के बारे में WhatsApp के माध्यम से अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "pmsby",
    image: pmsby,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "PMSBY",
      hi: "PMSBY"
    },

    category: {
      en: "Insurance",
      hi: "बीमा"
    },

    price: {
      en: "₹99 onwards enrollment assistance",
      hi: "₹99 से शुरू नामांकन सहायता शुल्क"
    },

    summary: {
      en: "Get coverage under the Pradhan Mantri Suraksha Bima Yojana (PMSBY) — an affordable accident insurance scheme offering coverage for accidental death and specified disabilities to eligible subscribers, subject to applicable scheme terms.",
      hi: "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) के तहत बीमा कवर प्राप्त करें — पात्र सदस्यों के लिए आकस्मिक मृत्यु और निर्धारित विकलांगता के मामले में बीमा सुरक्षा प्रदान करने वाली किफायती दुर्घटना बीमा योजना, जो लागू योजना नियमों के अधीन है।"
    },

    benefits: {
      en: [
        "Assistance with enrolment in an affordable accident insurance scheme providing cover for accidental death and specified disabilities.",
        "Guidance on eligibility requirements, coverage benefits, and applicable scheme conditions.",
        "Assistance linking the PMSBY cover with your eligible bank or post office account for premium auto-debit and renewal.",
        "Careful and accurate enrolment assistance to help reduce errors that could create issues during a future claim.",
        "Support ensuring that nominee details are correctly provided and recorded.",
        "Guidance on the general claim process and documents that may be required in the event of an accident."
      ],

      hi: [
        "आकस्मिक मृत्यु और निर्धारित विकलांगताओं के लिए बीमा कवर प्रदान करने वाली किफायती दुर्घटना बीमा योजना में नामांकन कराने में सहायता।",
        "पात्रता, बीमा कवर, लाभ और लागू योजना शर्तों को समझने में मार्गदर्शन।",
        "प्रीमियम के ऑटो-डेबिट और नवीनीकरण के लिए PMSBY कवर को पात्र बैंक या पोस्ट ऑफिस खाते से लिंक करने में सहायता।",
        "भविष्य में क्लेम के दौरान होने वाली समस्याओं को कम करने के लिए सही और सावधानीपूर्वक नामांकन में सहायता।",
        "Nominee का विवरण सही तरीके से दर्ज कराने और रिकॉर्ड में सही जानकारी सुनिश्चित करने में सहायता।",
        "दुर्घटना की स्थिति में सामान्य क्लेम प्रक्रिया और बीमा कंपनी या संबंधित बैंक द्वारा मांगे जा सकने वाले दस्तावेजों के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is PMSBY?",
          a: "PMSBY stands for Pradhan Mantri Suraksha Bima Yojana. It is a government-backed accident insurance scheme that provides coverage for accidental death and specified disabilities to eligible subscribers, subject to the applicable scheme terms and conditions."
        },
        {
          q: "Who can enrol in PMSBY?",
          a: "Eligible individuals within the scheme's specified age range who have a qualifying bank or post office account and meet the applicable enrolment conditions can generally join PMSBY. Eligibility and renewal conditions are subject to the current scheme rules."
        },
        {
          q: "What documents are required for PMSBY?",
          a: "The commonly required details include Aadhaar or other accepted KYC information, an eligible bank or post office account for premium auto-debit, mobile number, and nominee details. The concerned bank or institution may request additional information where applicable."
        },
        {
          q: "What is the process for PMSBY enrolment?",
          a: "The process generally involves checking eligibility, providing the required KYC and nominee details, submitting the PMSBY consent or enrolment form through the eligible bank or institution, and authorising the applicable premium to be debited from the linked account."
        },
        {
          q: "How long does PMSBY enrolment take to process?",
          a: "Bank-based enrolment may typically take around 3–7 working days after submission, depending on KYC verification and the processing time of the concerned institution. The actual timeline may vary, so this should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in PMSBY?",
          a: "PMSBY has an applicable annual premium prescribed under the scheme, which may be revised by the authorities from time to time. The scheme premium is separate from Aarambh India's ₹99 onwards enrolment assistance fee. The current applicable premium is confirmed before proceeding."
        },
        {
          q: "What happens if my PMSBY enrolment is rejected or delayed?",
          a: "Enrolment may be delayed or require correction due to incorrect bank details, KYC mismatch, incomplete information, account-related issues, or other scheme requirements. The details can be reviewed and corrected through the linked bank or institution where permitted."
        },
        {
          q: "How does Aarambh India help with PMSBY?",
          a: "Aarambh India helps check the available information and documents, assists with preparing and submitting the enrolment details, verifies nominee and bank-account information, and provides WhatsApp updates regarding the enrolment status."
        }
      ],

      hi: [
        {
          q: "PMSBY क्या है?",
          a: "PMSBY का अर्थ प्रधानमंत्री सुरक्षा बीमा योजना है। यह एक सरकारी समर्थित दुर्घटना बीमा योजना है, जिसके तहत पात्र सदस्यों को लागू योजना की शर्तों के अनुसार आकस्मिक मृत्यु और निर्धारित विकलांगताओं के लिए बीमा कवर मिल सकता है।"
        },
        {
          q: "PMSBY में कौन नामांकन कर सकता है?",
          a: "योजना में निर्धारित आयु सीमा के भीतर आने वाले पात्र व्यक्ति, जिनके पास पात्र बैंक या पोस्ट ऑफिस खाता है और जो लागू नामांकन शर्तों को पूरा करते हैं, सामान्यतः PMSBY में शामिल हो सकते हैं। पात्रता और नवीनीकरण की शर्तें वर्तमान योजना नियमों के अनुसार लागू होती हैं।"
        },
        {
          q: "PMSBY के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार या अन्य स्वीकार्य KYC जानकारी, प्रीमियम के ऑटो-डेबिट के लिए पात्र बैंक या पोस्ट ऑफिस खाता, मोबाइल नंबर और Nominee की जानकारी आवश्यक हो सकती है। जहां लागू हो, संबंधित बैंक या संस्था द्वारा अतिरिक्त जानकारी मांगी जा सकती है।"
        },
        {
          q: "PMSBY में नामांकन की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, आवश्यक KYC और Nominee विवरण देना, पात्र बैंक या संबंधित संस्था के माध्यम से PMSBY की सहमति या नामांकन फॉर्म जमा करना और लिंक किए गए खाते से लागू प्रीमियम कटौती की अनुमति देना शामिल है।"
        },
        {
          q: "PMSBY का नामांकन पूरा होने में कितना समय लगता है?",
          a: "बैंक के माध्यम से नामांकन में आवेदन जमा होने के बाद सामान्यतः लगभग 3–7 कार्य दिवस लग सकते हैं। वास्तविक समय KYC सत्यापन और संबंधित संस्था की प्रोसेसिंग पर निर्भर करता है, इसलिए इसे अनुमानित समय माना जाना चाहिए, निश्चित समय की गारंटी नहीं।"
        },
        {
          q: "PMSBY के लिए कितने शुल्क लगते हैं?",
          a: "PMSBY के तहत योजना द्वारा निर्धारित वार्षिक प्रीमियम लागू होता है, जिसे संबंधित प्राधिकरण समय-समय पर संशोधित कर सकता है। यह योजना प्रीमियम Aarambh India के ₹99 से शुरू नामांकन सहायता शुल्क से अलग है। प्रक्रिया शुरू करने से पहले वर्तमान लागू प्रीमियम की जानकारी दी जाती है।"
        },
        {
          q: "यदि PMSBY का नामांकन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "गलत बैंक विवरण, KYC में अंतर, अधूरी जानकारी, खाते से संबंधित समस्या या योजना की अन्य आवश्यकताओं के कारण नामांकन में देरी या सुधार की आवश्यकता हो सकती है। जहां अनुमति हो, वहां संबंधित बैंक या संस्था के माध्यम से विवरण की जांच और सुधार किया जा सकता है।"
        },
        {
          q: "Aarambh India PMSBY में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध जानकारी और दस्तावेजों की जांच करने, नामांकन विवरण तैयार करने और जमा करने, Nominee तथा बैंक खाते की जानकारी सत्यापित करने और नामांकन की स्थिति के बारे में WhatsApp के माध्यम से अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "e-shram-card",
    image: eshram,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "e-Shram Card",
      hi: "ई-श्रम कार्ड"
    },

    category: {
      en: "Employment",
      hi: "रोज़गार"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹149 onwards",
      hi: "₹149 से शुरू"
    },

    summary: {
      en: "Get your e-Shram Card — registration for eligible unorganised sector workers in the national database to support access to applicable social security schemes and government welfare benefits.",
      hi: "अपना ई-श्रम कार्ड बनवाएं — पात्र असंगठित क्षेत्र के श्रमिकों का राष्ट्रीय डेटाबेस में पंजीकरण, जिससे लागू सामाजिक सुरक्षा योजनाओं और सरकारी कल्याणकारी लाभों तक पहुंच में सहायता मिल सके।"
    },

    benefits: {
      en: [
        "Assistance registering eligible unorganised sector workers on the e-Shram database for applicable social security and welfare schemes.",
        "Guidance on eligibility requirements and the information or documents generally required for registration.",
        "Careful and accurate data entry to help ensure your personal, occupation, and other registration details are recorded correctly.",
        "Assistance understanding the types of social security and welfare schemes that may be linked with or available to eligible workers.",
        "Regular status updates until the e-Shram registration is completed and the card is generated.",
        "Support updating eligible registration details if your occupation, address, mobile number, or other information changes."
      ],

      hi: [
        "पात्र असंगठित क्षेत्र के श्रमिकों का e-Shram डेटाबेस में पंजीकरण कराने में सहायता, ताकि लागू सामाजिक सुरक्षा और कल्याणकारी योजनाओं तक पहुंच में मदद मिल सके।",
        "पात्रता और पंजीकरण के लिए सामान्यतः आवश्यक जानकारी या दस्तावेजों के बारे में मार्गदर्शन।",
        "व्यक्तिगत, व्यवसाय और अन्य पंजीकरण विवरणों को सही तरीके से दर्ज करने के लिए सावधानीपूर्वक डेटा एंट्री में सहायता।",
        "पात्र श्रमिकों के लिए उपलब्ध या लिंक की जा सकने वाली सामाजिक सुरक्षा और कल्याणकारी योजनाओं को समझने में सहायता।",
        "e-Shram पंजीकरण पूरा होने और कार्ड जनरेट होने तक नियमित स्टेटस अपडेट।",
        "व्यवसाय, पता, मोबाइल नंबर या अन्य पात्र पंजीकरण विवरण बदलने पर उन्हें अपडेट करने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is an e-Shram Card?",
          a: "The e-Shram Card is issued after registration on the e-Shram database for eligible unorganised sector workers. The registration is intended to help identify workers and facilitate access to applicable social security and welfare schemes."
        },
        {
          q: "Who can register for an e-Shram Card?",
          a: "Eligible workers in the unorganised sector who meet the applicable e-Shram registration requirements can register. Eligibility depends on the current rules and conditions prescribed by the concerned authorities."
        },
        {
          q: "What documents are required for an e-Shram Card?",
          a: "The registration generally requires Aadhaar details, a mobile number linked with Aadhaar where applicable, bank account details, and information about the worker's occupation and other personal details. Additional information may be requested during registration or verification."
        },
        {
          q: "What is the process for e-Shram Card registration?",
          a: "The process generally involves checking eligibility, providing Aadhaar and other required details, verifying the available information, entering occupation and bank details, submitting the registration, and generating the e-Shram registration card after successful completion."
        },
        {
          q: "How long does e-Shram Card registration take to process?",
          a: "Registration may typically be completed within 1–3 working days when the required information is available and verification is completed successfully. The actual timeline may vary due to technical issues, Aadhaar verification, or portal processing, so this should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in getting an e-Shram Card?",
          a: "e-Shram registration through the official government system may not have a separate government registration fee. Aarambh India's ₹149 onwards charge is a service facilitation fee for assistance with the registration process. Any applicable third-party or other charges, if required, are communicated before proceeding."
        },
        {
          q: "What happens if my e-Shram Card registration is rejected or delayed?",
          a: "Registration may be delayed or require correction due to Aadhaar-mobile mismatch, incorrect personal details, incomplete information, bank-detail issues, or technical/verification problems. The relevant details can be reviewed and corrected where the portal permits."
        },
        {
          q: "How does Aarambh India help with e-Shram Card registration?",
          a: "Aarambh India helps check the required information, assists with accurate form filling and registration, verifies the available details, and provides WhatsApp updates until the e-Shram registration process is completed."
        }
      ],

      hi: [
        {
          q: "ई-श्रम कार्ड क्या है?",
          a: "ई-श्रम कार्ड पात्र असंगठित क्षेत्र के श्रमिकों के e-Shram डेटाबेस में पंजीकरण के बाद जारी किया जाता है। इसका उद्देश्य श्रमिकों की पहचान से संबंधित डेटाबेस तैयार करना और लागू सामाजिक सुरक्षा एवं कल्याणकारी योजनाओं तक पहुंच में सहायता करना है।"
        },
        {
          q: "ई-श्रम कार्ड के लिए कौन पंजीकरण कर सकता है?",
          a: "असंगठित क्षेत्र में कार्य करने वाले वे पात्र श्रमिक जो वर्तमान e-Shram पंजीकरण की आवश्यकताओं को पूरा करते हैं, पंजीकरण कर सकते हैं। पात्रता संबंधित प्राधिकरण द्वारा निर्धारित वर्तमान नियमों और शर्तों पर निर्भर करती है।"
        },
        {
          q: "ई-श्रम कार्ड के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "पंजीकरण के लिए सामान्यतः आधार विवरण, जहां लागू हो वहां आधार से लिंक मोबाइल नंबर, बैंक खाते की जानकारी और श्रमिक के व्यवसाय तथा अन्य व्यक्तिगत विवरण आवश्यक होते हैं। पंजीकरण या सत्यापन के दौरान अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "ई-श्रम कार्ड पंजीकरण की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, आधार और अन्य आवश्यक विवरण देना, उपलब्ध जानकारी का सत्यापन, व्यवसाय और बैंक खाते की जानकारी दर्ज करना, पंजीकरण जमा करना और सफल प्रक्रिया के बाद e-Shram पंजीकरण कार्ड जनरेट करना शामिल है।"
        },
        {
          q: "ई-श्रम कार्ड पंजीकरण में कितना समय लगता है?",
          a: "यदि आवश्यक जानकारी उपलब्ध हो और सत्यापन सफलतापूर्वक पूरा हो जाए, तो पंजीकरण सामान्यतः 1–3 कार्य दिवस में पूरा हो सकता है। वास्तविक समय तकनीकी समस्या, आधार सत्यापन या पोर्टल प्रोसेसिंग पर निर्भर कर सकता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "ई-श्रम कार्ड बनवाने के लिए कितने शुल्क लगते हैं?",
          a: "आधिकारिक सरकारी प्रणाली के माध्यम से e-Shram पंजीकरण के लिए सामान्यतः अलग सरकारी पंजीकरण शुल्क नहीं होता। Aarambh India का ₹149 से शुरू शुल्क पंजीकरण प्रक्रिया में सहायता के लिए सेवा सुविधा शुल्क है। यदि कोई अन्य लागू शुल्क हो, तो प्रक्रिया शुरू करने से पहले उसकी जानकारी दी जाती है।"
        },
        {
          q: "यदि ई-श्रम कार्ड का पंजीकरण अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "आधार-मोबाइल नंबर में अंतर, गलत व्यक्तिगत जानकारी, अधूरी जानकारी, बैंक विवरण की समस्या या तकनीकी/सत्यापन संबंधी कारणों से पंजीकरण में देरी या सुधार की आवश्यकता हो सकती है। जहां पोर्टल अनुमति देता है, वहां संबंधित विवरण की जांच और सुधार किया जा सकता है।"
        },
        {
          q: "Aarambh India ई-श्रम कार्ड में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक जानकारी की जांच करने, सही तरीके से फॉर्म भरने और पंजीकरण कराने, उपलब्ध विवरणों का सत्यापन करने तथा e-Shram पंजीकरण पूरा होने तक WhatsApp के माध्यम से स्टेटस अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "uan-activation",
    image: uan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "UAN Activation",
      hi: "UAN एक्टिवेशन"
    },

    category: {
      en: "Employment",
      hi: "रोज़गार"
    },

    price: {
      en: "₹99 onwards",
      hi: "₹99 से शुरू"
    },

    summary: {
      en: "Activate your EPF Universal Account Number (UAN) and get assistance accessing your PF account, checking your balance and passbook, and completing eligible PF-related online services.",
      hi: "अपने EPF Universal Account Number (UAN) को एक्टिवेट करें और PF खाता एक्सेस करने, बैलेंस व पासबुक देखने तथा पात्र PF संबंधी ऑनलाइन सेवाओं को पूरा करने में सहायता प्राप्त करें।"
    },

    benefits: {
      en: [
        "Assistance activating your EPF Universal Account Number (UAN) so you can access available EPFO online services.",
        "Guidance on retrieving or identifying your UAN if you do not have the number readily available.",
        "Assistance checking and updating applicable KYC details such as Aadhaar, PAN, and bank account information.",
        "Careful and accurate activation assistance to help reduce login, mobile verification, or KYC-related issues.",
        "Support accessing your PF balance and passbook after successful UAN activation.",
        "Guidance on the general process for eligible PF withdrawal, transfer, and other EPFO online services."
      ],

      hi: [
        "EPF Universal Account Number (UAN) को एक्टिवेट करने में सहायता, ताकि उपलब्ध EPFO ऑनलाइन सेवाओं का उपयोग किया जा सके।",
        "यदि UAN नंबर उपलब्ध नहीं है, तो उसे खोजने या पहचानने में मार्गदर्शन।",
        "जहां लागू हो वहां Aadhaar, PAN और बैंक खाते जैसी KYC जानकारी की जांच और अपडेट करने में सहायता।",
        "लॉगिन, मोबाइल वेरिफिकेशन या KYC से संबंधित समस्याओं को कम करने के लिए सावधानीपूर्वक UAN एक्टिवेशन में सहायता।",
        "UAN एक्टिवेट होने के बाद PF बैलेंस और पासबुक देखने में सहायता।",
        "पात्र PF निकासी, ट्रांसफर और अन्य EPFO ऑनलाइन सेवाओं की सामान्य प्रक्रिया के बारे में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is UAN Activation?",
          a: "UAN Activation is the process of activating your Universal Account Number issued by EPFO so that you can access available EPFO online services, view your PF information, check your passbook, and use eligible services through the member portal."
        },
        {
          q: "Who needs UAN Activation?",
          a: "EPFO members who have a UAN that has not yet been activated may need to activate it to access available online PF services. The applicable activation and verification requirements depend on the current EPFO process."
        },
        {
          q: "What documents or details are required for UAN Activation?",
          a: "The commonly required details include your UAN, Aadhaar-linked or registered mobile number, Aadhaar or other applicable KYC information, and other EPFO account details. Additional verification may be required depending on the member's account status."
        },
        {
          q: "What is the process for UAN Activation?",
          a: "The process generally involves verifying your UAN and registered details, completing the required identity or mobile verification, setting or confirming login credentials where applicable, and accessing the EPFO member account after successful activation."
        },
        {
          q: "How long does UAN Activation take to process?",
          a: "UAN activation may typically be completed within 1–2 working days when the required details and verification are successful. The actual time can vary due to EPFO portal availability, mobile or Aadhaar verification, and account-related issues, so this should be treated as an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in UAN Activation?",
          a: "UAN activation through the official EPFO system generally does not involve a separate government activation fee. Aarambh India's ₹99 onwards charge is a service facilitation fee for assistance with the activation process. Any applicable additional charges, if required, are communicated before proceeding."
        },
        {
          q: "What happens if my UAN Activation is rejected or delayed?",
          a: "Activation may be delayed or require correction due to an Aadhaar-mobile mismatch, incorrect UAN details, incomplete KYC, inactive or incorrect member information, or technical issues on the EPFO portal. The relevant details can be reviewed and corrected where permitted."
        },
        {
          q: "How does Aarambh India help with UAN Activation?",
          a: "Aarambh India helps verify the available UAN and KYC information, assists with the activation process, provides guidance for resolving common verification issues, and shares status updates over WhatsApp until the activation process is completed."
        }
      ],

      hi: [
        {
          q: "UAN एक्टिवेशन क्या है?",
          a: "UAN एक्टिवेशन EPFO द्वारा जारी Universal Account Number को सक्रिय करने की प्रक्रिया है, जिससे सदस्य उपलब्ध EPFO ऑनलाइन सेवाओं का उपयोग कर सकता है, PF से संबंधित जानकारी और पासबुक देख सकता है तथा पात्र सेवाओं का ऑनलाइन उपयोग कर सकता है।"
        },
        {
          q: "UAN एक्टिवेशन किसे करवाना चाहिए?",
          a: "जिन EPFO सदस्यों का UAN अभी एक्टिवेट नहीं हुआ है, उन्हें उपलब्ध ऑनलाइन PF सेवाओं का उपयोग करने के लिए UAN एक्टिवेट करने की आवश्यकता हो सकती है। लागू एक्टिवेशन और वेरिफिकेशन आवश्यकताएं वर्तमान EPFO प्रक्रिया पर निर्भर करती हैं।"
        },
        {
          q: "UAN एक्टिवेशन के लिए कौन-कौन से दस्तावेज या विवरण आवश्यक हैं?",
          a: "सामान्यतः UAN, Aadhaar से लिंक या रजिस्टर्ड मोबाइल नंबर, Aadhaar या अन्य लागू KYC जानकारी और EPFO खाते से संबंधित विवरण आवश्यक हो सकते हैं। सदस्य के खाते की स्थिति के अनुसार अतिरिक्त सत्यापन भी आवश्यक हो सकता है।"
        },
        {
          q: "UAN एक्टिवेशन की प्रक्रिया क्या है?",
          a: "प्रक्रिया में UAN और रजिस्टर्ड विवरणों का सत्यापन, आवश्यक पहचान या मोबाइल वेरिफिकेशन पूरा करना, जहां लागू हो वहां लॉगिन क्रेडेंशियल सेट या कन्फर्म करना और सफल एक्टिवेशन के बाद EPFO सदस्य खाते को एक्सेस करना शामिल है।"
        },
        {
          q: "UAN एक्टिवेशन में कितना समय लगता है?",
          a: "यदि आवश्यक जानकारी सही हो और वेरिफिकेशन सफलतापूर्वक पूरा हो जाए, तो UAN एक्टिवेशन सामान्यतः 1–2 कार्य दिवस में पूरा हो सकता है। वास्तविक समय EPFO पोर्टल की उपलब्धता, मोबाइल या Aadhaar वेरिफिकेशन और खाते से संबंधित समस्याओं पर निर्भर कर सकता है, इसलिए इसे अनुमानित समय माना जाना चाहिए।"
        },
        {
          q: "UAN एक्टिवेशन के लिए कितने शुल्क लगते हैं?",
          a: "आधिकारिक EPFO सिस्टम के माध्यम से UAN एक्टिवेशन के लिए सामान्यतः अलग सरकारी एक्टिवेशन शुल्क नहीं होता। Aarambh India का ₹99 से शुरू शुल्क एक्टिवेशन प्रक्रिया में सहायता के लिए सेवा सुविधा शुल्क है। यदि कोई अन्य लागू शुल्क हो, तो प्रक्रिया शुरू करने से पहले उसकी जानकारी दी जाती है।"
        },
        {
          q: "यदि UAN एक्टिवेशन अस्वीकार या विलंबित हो जाए तो क्या होगा?",
          a: "Aadhaar-मोबाइल नंबर में अंतर, गलत UAN विवरण, अधूरी KYC, सदस्य खाते की जानकारी में समस्या या EPFO पोर्टल की तकनीकी समस्या के कारण एक्टिवेशन में देरी या सुधार की आवश्यकता हो सकती है। जहां अनुमति हो, वहां संबंधित विवरण की जांच और सुधार किया जा सकता है।"
        },
        {
          q: "Aarambh India UAN एक्टिवेशन में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध UAN और KYC जानकारी की जांच करने, एक्टिवेशन प्रक्रिया में सहायता करने, सामान्य वेरिफिकेशन समस्याओं को हल करने के लिए मार्गदर्शन देने और UAN एक्टिवेशन पूरा होने तक WhatsApp के माध्यम से स्टेटस अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "pm-internship",
    image: pmintern,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "PM Internship Registration",
      hi: "PM इंटर्नशिप पंजीकरण"
    },

    category: {
      en: "Employment",
      hi: "रोज़गार"
    },

    tag: {
      en: "New",
      hi: "नया"
    },

    price: {
      en: "₹99 onwards",
      hi: "₹99 से शुरू"
    },

    summary: {
      en: "Register for the PM Internship Scheme — explore internship opportunities with participating companies and gain practical workplace experience, subject to eligibility and scheme requirements.",
      hi: "PM इंटर्नशिप योजना के लिए पंजीकरण करें — पात्रता और योजना की आवश्यकताओं के अनुसार भाग लेने वाली कंपनियों के साथ इंटर्नशिप के अवसर प्राप्त करें और व्यावहारिक कार्य अनुभव हासिल करें।"
    },

    benefits: {
      en: [
        "Assistance registering on the PM Internship Scheme portal to explore eligible internship opportunities with participating companies.",
        "Guidance on applicable eligibility criteria, registration requirements, and the internship application timeline.",
        "Assistance preparing your profile, educational details, and other information required for registration.",
        "Careful and accurate application filing to help present your profile correctly and reduce avoidable errors.",
        "Regular status updates from registration and application submission through the applicable selection process.",
        "Guidance on understanding the stipend, duration, internship benefits, and other scheme-related conditions applicable to the selected opportunity."
      ],

      hi: [
        "भाग लेने वाली कंपनियों में पात्र इंटर्नशिप अवसरों के लिए PM इंटर्नशिप योजना पोर्टल पर पंजीकरण कराने में सहायता।",
        "लागू पात्रता मानदंड, पंजीकरण आवश्यकताओं और इंटर्नशिप आवेदन की समय-सीमा को समझने में मार्गदर्शन।",
        "पंजीकरण के लिए आवश्यक प्रोफाइल, शैक्षणिक विवरण और अन्य जानकारी तैयार करने में सहायता।",
        "प्रोफाइल को सही तरीके से प्रस्तुत करने और अनावश्यक गलतियों को कम करने के लिए आवेदन भरने में सावधानीपूर्वक सहायता।",
        "पंजीकरण और आवेदन जमा करने से लेकर लागू चयन प्रक्रिया तक नियमित स्टेटस अपडेट।",
        "चयनित अवसर के अनुसार स्टाइपेंड, इंटर्नशिप अवधि, लाभ और अन्य योजना संबंधी शर्तों को समझने में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is PM Internship Registration?",
          a: "PM Internship Registration is the process of registering on the official portal under the PM Internship Scheme to explore and apply for eligible internship opportunities offered by participating companies, subject to the applicable scheme rules."
        },
        {
          q: "Who can apply for the PM Internship Scheme?",
          a: "Eligible young individuals who meet the age, education, employment, and other conditions prescribed under the current PM Internship Scheme guidelines may register and apply for available opportunities. Eligibility can vary according to the applicable scheme rules and internship opportunity."
        },
        {
          q: "What documents are required for PM Internship Registration?",
          a: "The commonly required information may include Aadhaar details, educational qualification or certificate details, mobile number, bank account information, and other profile details. Additional documents or information may be required depending on the scheme and selected internship opportunity."
        },
        {
          q: "What is the process for PM Internship Registration?",
          a: "The process generally involves checking eligibility, creating or completing your profile on the applicable portal, providing educational and personal details, uploading or submitting required information, reviewing available internship opportunities, and applying for suitable opportunities."
        },
        {
          q: "How long does PM Internship Registration take to process?",
          a: "Profile creation and registration assistance may typically be completed within 5–7 working days when the required information is available. Selection and internship allocation can take additional time depending on company preferences, application volume, eligibility, and the official selection process. The timeline is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in PM Internship Registration?",
          a: "The PM Internship Scheme registration process may be subject to the current rules of the official portal and scheme. Aarambh India's ₹99 onwards charge is a service facilitation fee for assistance with registration. Any applicable scheme-related conditions or charges, if introduced by the concerned authority, are communicated before proceeding."
        },
        {
          q: "What happens if my PM Internship application is rejected or I am not selected?",
          a: "An application or internship preference may not proceed due to eligibility criteria, incomplete information, profile mismatch, limited internship availability, company selection preferences, or other scheme requirements. Where permitted, you may review your profile and apply for other suitable opportunities."
        },
        {
          q: "How does Aarambh India help with PM Internship Registration?",
          a: "Aarambh India helps check the available eligibility and profile information, assists with registration and profile completion, helps prepare the required details, guides you through applying for suitable opportunities, and provides WhatsApp updates regarding the application status."
        }
      ],

      hi: [
        {
          q: "PM इंटर्नशिप पंजीकरण क्या है?",
          a: "PM इंटर्नशिप पंजीकरण PM इंटर्नशिप योजना के तहत आधिकारिक पोर्टल पर पंजीकरण करने की प्रक्रिया है, जिसके माध्यम से पात्र उम्मीदवार भाग लेने वाली कंपनियों द्वारा उपलब्ध कराए गए इंटर्नशिप अवसरों को देख और उनके लिए आवेदन कर सकते हैं। यह प्रक्रिया लागू योजना नियमों के अधीन है।"
        },
        {
          q: "PM इंटर्नशिप योजना के लिए कौन आवेदन कर सकता है?",
          a: "वर्तमान PM इंटर्नशिप योजना के दिशा-निर्देशों में निर्धारित आयु, शिक्षा, रोजगार और अन्य पात्रता शर्तों को पूरा करने वाले पात्र युवा पंजीकरण और उपलब्ध इंटर्नशिप अवसरों के लिए आवेदन कर सकते हैं। पात्रता योजना के नियमों और संबंधित इंटर्नशिप अवसर के अनुसार अलग हो सकती है।"
        },
        {
          q: "PM इंटर्नशिप पंजीकरण के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
          a: "सामान्यतः आधार विवरण, शैक्षणिक योग्यता या प्रमाण पत्र से संबंधित जानकारी, मोबाइल नंबर, बैंक खाते की जानकारी और अन्य प्रोफाइल विवरण आवश्यक हो सकते हैं। योजना और चुने गए इंटर्नशिप अवसर के अनुसार अतिरिक्त दस्तावेज या जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "PM इंटर्नशिप पंजीकरण की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पात्रता की जांच, संबंधित पोर्टल पर प्रोफाइल बनाना या पूरा करना, शैक्षणिक और व्यक्तिगत विवरण देना, आवश्यक जानकारी अपलोड या जमा करना, उपलब्ध इंटर्नशिप अवसरों को देखना और उपयुक्त अवसरों के लिए आवेदन करना शामिल है।"
        },
        {
          q: "PM इंटर्नशिप पंजीकरण में कितना समय लगता है?",
          a: "यदि आवश्यक जानकारी उपलब्ध हो, तो प्रोफाइल बनाने और पंजीकरण में सामान्यतः 5–7 कार्य दिवस लग सकते हैं। इंटर्नशिप के चयन और आवंटन में कंपनी की प्राथमिकता, आवेदनों की संख्या, पात्रता और आधिकारिक चयन प्रक्रिया के आधार पर अतिरिक्त समय लग सकता है। यह समय केवल अनुमानित है।"
        },
        {
          q: "PM इंटर्नशिप पंजीकरण के लिए कितने शुल्क लगते हैं?",
          a: "PM इंटर्नशिप योजना के पंजीकरण पर आधिकारिक पोर्टल और वर्तमान योजना नियम लागू होते हैं। Aarambh India का ₹99 से शुरू शुल्क पंजीकरण प्रक्रिया में सहायता के लिए सेवा सुविधा शुल्क है। यदि संबंधित प्राधिकरण द्वारा कोई योजना संबंधी शुल्क या अन्य शर्त लागू की जाती है, तो प्रक्रिया शुरू करने से पहले उसकी जानकारी दी जाएगी।"
        },
        {
          q: "यदि PM इंटर्नशिप का आवेदन अस्वीकार हो जाए या चयन न हो तो क्या होगा?",
          a: "पात्रता मानदंड, अधूरी जानकारी, प्रोफाइल और अवसर के बीच अंतर, सीमित इंटर्नशिप सीटें, कंपनी की चयन प्राथमिकताओं या योजना की अन्य आवश्यकताओं के कारण आवेदन आगे नहीं बढ़ सकता है या चयन नहीं हो सकता है। जहां अनुमति हो, वहां प्रोफाइल की समीक्षा करके अन्य उपयुक्त अवसरों के लिए आवेदन किया जा सकता है।"
        },
        {
          q: "Aarambh India PM इंटर्नशिप पंजीकरण में कैसे सहायता करता है?",
          a: "Aarambh India उपलब्ध पात्रता और प्रोफाइल जानकारी की जांच करने, पंजीकरण और प्रोफाइल पूरा करने, आवश्यक विवरण तैयार करने, उपयुक्त इंटर्नशिप अवसरों के लिए आवेदन करने में मार्गदर्शन देने और आवेदन की स्थिति के बारे में WhatsApp के माध्यम से अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "kashi-vishwanath-darshan",
    image: temple_darshan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Kashi Vishwanath Darshan Booking",
      hi: "काशी विश्वनाथ दर्शन बुकिंग"
    },

    category: {
      en: "Darshan",
      hi: "दर्शन"
    },

    price: {
      en: "₹299 onwards service charge",
      hi: "₹299 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Get assistance with Sugam Darshan or other eligible darshan booking options at Kashi Vishwanath Temple, Varanasi — convenient booking support for a smoother temple visit, subject to slot availability and temple rules.",
      hi: "वाराणसी के काशी विश्वनाथ मंदिर में सुगम दर्शन या अन्य उपलब्ध दर्शन बुकिंग विकल्पों के लिए सहायता प्राप्त करें — स्लॉट की उपलब्धता और मंदिर के नियमों के अनुसार सुविधाजनक बुकिंग सहायता।"
    },

    benefits: {
      en: [
        "Assistance with booking eligible Sugam Darshan or other available darshan options at Kashi Vishwanath Temple, Varanasi.",
        "Guidance on available dates, time slots, booking options, and applicable temple requirements.",
        "Convenient advance booking assistance to help reduce the need for last-minute arrangements at the temple.",
        "Careful handling of devotee and visit details to help reduce errors in date, slot, or passenger information.",
        "Booking confirmation and important visit-related updates shared through WhatsApp.",
        "Assistance with rescheduling or alternative slot options where permitted and subject to availability and temple policies."
      ],

      hi: [
        "वाराणसी के काशी विश्वनाथ मंदिर में पात्र सुगम दर्शन या उपलब्ध अन्य दर्शन विकल्पों की बुकिंग में सहायता।",
        "उपलब्ध तिथियों, समय स्लॉट, बुकिंग विकल्पों और लागू मंदिर संबंधी आवश्यकताओं को समझने में मार्गदर्शन।",
        "अग्रिम बुकिंग में सुविधाजनक सहायता, ताकि मंदिर पहुंचने के बाद अंतिम समय की व्यवस्था पर निर्भरता कम हो सके।",
        "दर्शनार्थी और यात्रा संबंधी विवरणों को सावधानीपूर्वक संभालने में सहायता, ताकि तिथि, स्लॉट या अन्य जानकारी में गलतियों की संभावना कम हो।",
        "बुकिंग कन्फर्मेशन और यात्रा से संबंधित महत्वपूर्ण अपडेट WhatsApp के माध्यम से साझा किए जाते हैं।",
        "जहां अनुमति हो और स्लॉट उपलब्ध हों, वहां बुकिंग को पुनर्निर्धारित करने या वैकल्पिक स्लॉट चुनने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Kashi Vishwanath Darshan Booking?",
          a: "Kashi Vishwanath Darshan Booking is advance assistance for reserving an eligible darshan option or time slot at Kashi Vishwanath Temple, Varanasi, subject to temple rules and availability."
        },
        {
          q: "Who should book Kashi Vishwanath Darshan in advance?",
          a: "Devotees and pilgrims who are planning to visit Kashi Vishwanath Temple and prefer to arrange an eligible darshan option in advance may consider booking assistance. Availability depends on the selected date, slot, and temple guidelines."
        },
        {
          q: "What information is required for Kashi Vishwanath Darshan Booking?",
          a: "The required information may include the devotee's name, mobile number, preferred visit date, number of visitors, and valid identity details where required by the booking system. Additional information may be requested depending on the selected booking option."
        },
        {
          q: "What is the process for Kashi Vishwanath Darshan Booking?",
          a: "The process generally involves sharing your preferred visit date and required details, checking available darshan options and slots, selecting an available option, completing the applicable booking/payment process, and receiving the booking confirmation."
        },
        {
          q: "How long does Kashi Vishwanath Darshan Booking take to process?",
          a: "Booking assistance can generally be processed within 1–3 working days when suitable slots are available and the required information is complete. During festivals, weekends, or high-demand periods, availability may change quickly. The timeline is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Kashi Vishwanath Darshan Booking?",
          a: "Aarambh India's service facilitation charge starts from ₹299. Any applicable temple or official booking fee is separate from the Aarambh service charge and may vary according to the selected darshan option and current temple rules."
        },
        {
          q: "What happens if my preferred darshan slot is unavailable?",
          a: "Darshan slots can become unavailable during festivals, weekends, holidays, or other high-demand periods. If the preferred slot is unavailable, we can help check alternative dates or available options, subject to temple availability and applicable rules."
        },
        {
          q: "How does Aarambh India help with Kashi Vishwanath Darshan Booking?",
          a: "Aarambh India helps collect the required visit details, check available booking options, assist with the booking process, share confirmation and important updates through WhatsApp, and provide guidance regarding applicable booking requirements and changes."
        }
      ],

      hi: [
        {
          q: "काशी विश्वनाथ दर्शन बुकिंग क्या है?",
          a: "काशी विश्वनाथ दर्शन बुकिंग वाराणसी स्थित काशी विश्वनाथ मंदिर में उपलब्ध पात्र दर्शन विकल्प या समय स्लॉट को पहले से बुक करने की सहायता है। बुकिंग मंदिर के नियमों और उपलब्धता के अधीन होती है।"
        },
        {
          q: "काशी विश्वनाथ दर्शन की अग्रिम बुकिंग किसे करनी चाहिए?",
          a: "जो श्रद्धालु या तीर्थयात्री काशी विश्वनाथ मंदिर जाने की योजना बना रहे हैं और उपलब्ध पात्र दर्शन विकल्प को पहले से व्यवस्थित करना चाहते हैं, वे बुकिंग सहायता ले सकते हैं। उपलब्धता तिथि, स्लॉट और मंदिर के दिशा-निर्देशों पर निर्भर करती है।"
        },
        {
          q: "काशी विश्वनाथ दर्शन बुकिंग के लिए कौन-सी जानकारी आवश्यक है?",
          a: "आम तौर पर दर्शनार्थी का नाम, मोबाइल नंबर, पसंदीदा दर्शन तिथि, दर्शनार्थियों की संख्या और जहां आवश्यक हो वहां वैध पहचान संबंधी जानकारी की आवश्यकता हो सकती है। चुने गए बुकिंग विकल्प के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "काशी विश्वनाथ दर्शन बुकिंग की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पसंदीदा दर्शन तिथि और आवश्यक जानकारी साझा करना, उपलब्ध दर्शन विकल्प और स्लॉट की जांच करना, उपलब्ध विकल्प का चयन करना, लागू बुकिंग या भुगतान प्रक्रिया पूरी करना और बुकिंग कन्फर्मेशन प्राप्त करना शामिल है।"
        },
        {
          q: "काशी विश्वनाथ दर्शन बुकिंग में कितना समय लगता है?",
          a: "यदि उपयुक्त स्लॉट उपलब्ध हो और आवश्यक जानकारी पूरी हो, तो बुकिंग सहायता सामान्यतः 1–3 कार्य दिवसों में पूरी की जा सकती है। त्योहारों, सप्ताहांत या अधिक मांग वाले समय में स्लॉट तेजी से बदल सकते हैं। यह समय केवल अनुमानित है।"
        },
        {
          q: "काशी विश्वनाथ दर्शन बुकिंग के लिए कितने शुल्क लगते हैं?",
          a: "Aarambh India का सेवा सुविधा शुल्क ₹299 से शुरू होता है। मंदिर या आधिकारिक बुकिंग शुल्क Aarambh India के सेवा शुल्क से अलग हो सकता है और चुने गए दर्शन विकल्प तथा वर्तमान मंदिर नियमों के अनुसार अलग-अलग हो सकता है।"
        },
        {
          q: "यदि मेरा पसंदीदा दर्शन स्लॉट उपलब्ध नहीं है तो क्या होगा?",
          a: "त्योहारों, सप्ताहांत, छुट्टियों या अधिक मांग वाले समय में पसंदीदा स्लॉट उपलब्ध नहीं हो सकता है। ऐसी स्थिति में उपलब्धता के अनुसार वैकल्पिक तिथि या अन्य उपलब्ध दर्शन विकल्प देखने में सहायता की जा सकती है।"
        },
        {
          q: "Aarambh India काशी विश्वनाथ दर्शन बुकिंग में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक यात्रा और दर्शन संबंधी जानकारी एकत्र करने, उपलब्ध बुकिंग विकल्पों की जांच करने, बुकिंग प्रक्रिया में सहायता करने, WhatsApp के माध्यम से कन्फर्मेशन और महत्वपूर्ण अपडेट साझा करने तथा लागू बुकिंग आवश्यकताओं और बदलावों के संबंध में मार्गदर्शन देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "mahakaleshwar-darshan",
    image: temple_darshan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Mahakaleshwar Darshan Booking",
      hi: "महाकालेश्वर दर्शन बुकिंग"
    },

    category: {
      en: "Darshan",
      hi: "दर्शन"
    },

    price: {
      en: "₹99 onwards service charge",
      hi: "₹99 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Get assistance with Bhasma Aarti, Shighra Darshan, or other available darshan booking options at Mahakaleshwar Jyotirlinga, Ujjain — convenient booking support subject to slot availability and temple rules.",
      hi: "उज्जैन के महाकालेश्वर ज्योतिर्लिंग में भस्म आरती, शीघ्र दर्शन या अन्य उपलब्ध दर्शन विकल्पों की बुकिंग में सहायता प्राप्त करें — स्लॉट की उपलब्धता और मंदिर के नियमों के अनुसार सुविधाजनक बुकिंग सहायता।"
    },

    benefits: {
      en: [
        "Assistance with booking eligible Bhasma Aarti, Shighra Darshan, or other available darshan options at Mahakaleshwar Temple, Ujjain.",
        "Guidance on the Bhasma Aarti booking process, available slots, applicable requirements, and reporting instructions.",
        "Advance booking assistance to help reduce uncertainty during festivals, weekends, and other high-demand periods.",
        "Careful handling of devotee and visit details to help reduce errors in date, slot, or visitor information.",
        "Booking confirmation and important visit-related updates shared through WhatsApp.",
        "Assistance checking alternative dates or available slots if the preferred timing is unavailable, subject to availability and temple rules."
      ],

      hi: [
        "उज्जैन के महाकालेश्वर मंदिर में पात्र भस्म आरती, शीघ्र दर्शन या अन्य उपलब्ध दर्शन विकल्पों की बुकिंग में सहायता।",
        "भस्म आरती बुकिंग प्रक्रिया, उपलब्ध स्लॉट, लागू आवश्यकताओं और रिपोर्टिंग संबंधी निर्देशों को समझने में मार्गदर्शन।",
        "त्योहारों, सप्ताहांत और अधिक मांग वाले समय में अग्रिम बुकिंग की सहायता, ताकि स्लॉट उपलब्धता को लेकर अनिश्चितता कम हो सके।",
        "दर्शनार्थी और यात्रा संबंधी विवरणों को सावधानीपूर्वक संभालने में सहायता, ताकि तिथि, स्लॉट या अन्य जानकारी में गलतियों की संभावना कम हो।",
        "बुकिंग कन्फर्मेशन और दर्शन से संबंधित महत्वपूर्ण अपडेट WhatsApp के माध्यम से साझा किए जाते हैं।",
        "पसंदीदा समय उपलब्ध न होने पर उपलब्धता और मंदिर के नियमों के अनुसार वैकल्पिक तिथि या स्लॉट देखने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Mahakaleshwar Darshan Booking?",
          a: "Mahakaleshwar Darshan Booking is advance assistance for reserving an eligible darshan option, such as Shighra Darshan or Bhasma Aarti, at Mahakaleshwar Jyotirlinga in Ujjain, subject to temple rules and availability."
        },
        {
          q: "Who should book Mahakaleshwar Darshan in advance?",
          a: "Devotees and pilgrims planning to visit Mahakaleshwar Temple who want to arrange an eligible darshan option in advance may use booking assistance. Availability depends on the selected date, darshan type, and temple guidelines."
        },
        {
          q: "What information is required for Mahakaleshwar Darshan Booking?",
          a: "The required information may include the devotee's name, mobile number, preferred visit date, number of visitors, and valid identity details where required. Additional information or documents may be requested depending on the selected darshan option."
        },
        {
          q: "What is the process for Mahakaleshwar Darshan Booking?",
          a: "The process generally involves sharing your preferred date and visitor details, checking available darshan options and slots, selecting an available option, completing the applicable booking or payment process, and receiving the confirmation."
        },
        {
          q: "How long does Mahakaleshwar Darshan Booking take to process?",
          a: "Booking assistance can generally be processed within 1–3 working days when suitable slots are available and the required information is complete. During festivals and high-demand periods, availability may change quickly. The timeline is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Mahakaleshwar Darshan Booking?",
          a: "Aarambh India's service facilitation charge starts from ₹99. Any applicable temple or official booking fee is separate from the Aarambh service charge and may vary according to the selected darshan option and current temple rules."
        },
        {
          q: "What happens if my preferred Mahakaleshwar Darshan slot is unavailable?",
          a: "Bhasma Aarti and other darshan slots can become unavailable during festivals, weekends, and other high-demand periods. If the preferred slot is unavailable, we can help check alternative dates or available options, subject to availability and applicable temple rules."
        },
        {
          q: "How does Aarambh India help with Mahakaleshwar Darshan Booking?",
          a: "Aarambh India helps collect the required visit details, check available booking options, assist with the booking process, share confirmation and important updates through WhatsApp, and provide guidance regarding applicable booking requirements and changes."
        }
      ],

      hi: [
        {
          q: "महाकालेश्वर दर्शन बुकिंग क्या है?",
          a: "महाकालेश्वर दर्शन बुकिंग उज्जैन के महाकालेश्वर ज्योतिर्लिंग में शीघ्र दर्शन या भस्म आरती जैसे पात्र दर्शन विकल्पों को पहले से बुक करने की सहायता है। बुकिंग मंदिर के नियमों और उपलब्धता के अधीन होती है।"
        },
        {
          q: "महाकालेश्वर दर्शन की अग्रिम बुकिंग किसे करनी चाहिए?",
          a: "जो श्रद्धालु या तीर्थयात्री महाकालेश्वर मंदिर जाने की योजना बना रहे हैं और उपलब्ध पात्र दर्शन विकल्प को पहले से व्यवस्थित करना चाहते हैं, वे बुकिंग सहायता ले सकते हैं। उपलब्धता तिथि, दर्शन प्रकार और मंदिर के दिशा-निर्देशों पर निर्भर करती है।"
        },
        {
          q: "महाकालेश्वर दर्शन बुकिंग के लिए कौन-सी जानकारी आवश्यक है?",
          a: "आम तौर पर दर्शनार्थी का नाम, मोबाइल नंबर, पसंदीदा दर्शन तिथि, दर्शनार्थियों की संख्या और जहां आवश्यक हो वहां वैध पहचान संबंधी जानकारी की आवश्यकता हो सकती है। चुने गए दर्शन विकल्प के अनुसार अतिरिक्त जानकारी या दस्तावेज भी मांगे जा सकते हैं।"
        },
        {
          q: "महाकालेश्वर दर्शन बुकिंग की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पसंदीदा तिथि और दर्शनार्थियों की जानकारी साझा करना, उपलब्ध दर्शन विकल्प और स्लॉट की जांच करना, उपलब्ध विकल्प का चयन करना, लागू बुकिंग या भुगतान प्रक्रिया पूरी करना और कन्फर्मेशन प्राप्त करना शामिल है।"
        },
        {
          q: "महाकालेश्वर दर्शन बुकिंग में कितना समय लगता है?",
          a: "यदि उपयुक्त स्लॉट उपलब्ध हो और आवश्यक जानकारी पूरी हो, तो बुकिंग सहायता सामान्यतः 1–3 कार्य दिवसों में पूरी की जा सकती है। त्योहारों और अधिक मांग वाले समय में स्लॉट तेजी से बदल सकते हैं। यह समय केवल अनुमानित है।"
        },
        {
          q: "महाकालेश्वर दर्शन बुकिंग के लिए कितने शुल्क लगते हैं?",
          a: "Aarambh India का सेवा सुविधा शुल्क ₹99 से शुरू होता है। मंदिर या आधिकारिक बुकिंग शुल्क Aarambh India के सेवा शुल्क से अलग हो सकता है और चुने गए दर्शन विकल्प तथा वर्तमान मंदिर नियमों के अनुसार अलग-अलग हो सकता है।"
        },
        {
          q: "यदि मेरा पसंदीदा महाकालेश्वर दर्शन स्लॉट उपलब्ध नहीं है तो क्या होगा?",
          a: "त्योहारों, सप्ताहांत और अधिक मांग वाले समय में भस्म आरती या अन्य दर्शन स्लॉट उपलब्ध नहीं हो सकते हैं। ऐसी स्थिति में उपलब्धता और मंदिर के नियमों के अनुसार वैकल्पिक तिथि या अन्य उपलब्ध स्लॉट देखने में सहायता की जा सकती है।"
        },
        {
          q: "Aarambh India महाकालेश्वर दर्शन बुकिंग में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दर्शन और यात्रा संबंधी जानकारी एकत्र करने, उपलब्ध बुकिंग विकल्पों की जांच करने, बुकिंग प्रक्रिया में सहायता करने, WhatsApp के माध्यम से कन्फर्मेशन और महत्वपूर्ण अपडेट साझा करने तथा लागू बुकिंग आवश्यकताओं और बदलावों के संबंध में मार्गदर्शन देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "sai-baba-darshan",
    image: temple_darshan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Sai Baba Darshan Booking",
      hi: "साईं बाबा दर्शन बुकिंग"
    },

    category: {
      en: "Darshan",
      hi: "दर्शन"
    },

    price: {
      en: "₹99 onwards service charge",
      hi: "₹99 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Get assistance with Darshan or available priority booking options at Shirdi Sai Baba Temple — convenient booking support for a smoother temple visit, subject to slot availability and temple rules.",
      hi: "शिरडी साईं बाबा मंदिर में दर्शन या उपलब्ध प्राथमिकता बुकिंग विकल्पों के लिए सहायता प्राप्त करें — स्लॉट की उपलब्धता और मंदिर के नियमों के अनुसार सुविधाजनक बुकिंग सहायता।"
    },

    benefits: {
      en: [
        "Assistance with booking available Darshan or priority booking options at Shirdi Sai Baba Temple.",
        "Guidance on available dates, time slots, booking options, and applicable temple requirements.",
        "Advance booking assistance to help reduce waiting and last-minute arrangements, especially during busy periods.",
        "Careful handling of devotee and visit details to help reduce errors in date, slot, or visitor information.",
        "Booking confirmation and important visit-related updates shared through WhatsApp.",
        "Assistance with rescheduling or checking alternative dates and slots where permitted and subject to availability."
      ],

      hi: [
        "शिरडी साईं बाबा मंदिर में उपलब्ध दर्शन या प्राथमिकता बुकिंग विकल्पों की बुकिंग में सहायता।",
        "उपलब्ध तिथियों, समय स्लॉट, बुकिंग विकल्पों और लागू मंदिर संबंधी आवश्यकताओं को समझने में मार्गदर्शन।",
        "अग्रिम बुकिंग में सहायता, ताकि विशेष रूप से अधिक भीड़ वाले समय में प्रतीक्षा और अंतिम समय की व्यवस्था को कम किया जा सके।",
        "दर्शनार्थी और यात्रा संबंधी विवरणों को सावधानीपूर्वक संभालने में सहायता, ताकि तिथि, स्लॉट या अन्य जानकारी में गलतियों की संभावना कम हो।",
        "बुकिंग कन्फर्मेशन और दर्शन से संबंधित महत्वपूर्ण अपडेट WhatsApp के माध्यम से साझा किए जाते हैं।",
        "जहां अनुमति हो और स्लॉट उपलब्ध हों, वहां बुकिंग को पुनर्निर्धारित करने या वैकल्पिक तिथि और स्लॉट देखने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Sai Baba Darshan Booking?",
          a: "Sai Baba Darshan Booking is advance assistance for arranging an available Darshan or priority booking option at Shirdi Sai Baba Temple, subject to the temple's booking system, rules, and availability."
        },
        {
          q: "Who should book Sai Baba Darshan in advance?",
          a: "Devotees and pilgrims planning to visit Shirdi Sai Baba Temple who prefer to arrange an eligible Darshan option in advance may use booking assistance. Availability depends on the selected date, slot, and temple guidelines."
        },
        {
          q: "What information is required for Sai Baba Darshan Booking?",
          a: "The required information may include the devotee's name, mobile number, preferred visit date, number of visitors, and valid identity details where required by the booking system. Additional information may be requested depending on the selected booking option."
        },
        {
          q: "What is the process for Sai Baba Darshan Booking?",
          a: "The process generally involves sharing your preferred visit date and visitor details, checking available Darshan options and slots, selecting an available option, completing the applicable booking or payment process, and receiving the booking confirmation."
        },
        {
          q: "How long does Sai Baba Darshan Booking take to process?",
          a: "Booking assistance can generally be processed within 1–3 working days when suitable slots are available and the required information is complete. During festivals, weekends, or high-demand periods, availability may change quickly. The timeline is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Sai Baba Darshan Booking?",
          a: "Aarambh India's service facilitation charge starts from ₹99. Any applicable temple or official booking fee is separate from the Aarambh service charge and may vary according to the selected booking option and current temple rules."
        },
        {
          q: "What happens if my preferred Sai Baba Darshan slot is unavailable?",
          a: "Darshan and priority booking slots may become unavailable during festivals, weekends, holidays, or other high-demand periods. If the preferred slot is unavailable, we can help check alternative dates or available options, subject to availability and applicable temple rules."
        },
        {
          q: "How does Aarambh India help with Sai Baba Darshan Booking?",
          a: "Aarambh India helps collect the required visit details, check available booking options, assist with the booking process, share confirmation and important updates through WhatsApp, and provide guidance regarding applicable booking requirements and changes."
        }
      ],

      hi: [
        {
          q: "साईं बाबा दर्शन बुकिंग क्या है?",
          a: "साईं बाबा दर्शन बुकिंग शिरडी साईं बाबा मंदिर में उपलब्ध दर्शन या प्राथमिकता बुकिंग विकल्प को पहले से व्यवस्थित करने की सहायता है। बुकिंग मंदिर की व्यवस्था, नियमों और उपलब्धता के अधीन होती है।"
        },
        {
          q: "साईं बाबा दर्शन की अग्रिम बुकिंग किसे करनी चाहिए?",
          a: "जो श्रद्धालु या तीर्थयात्री शिरडी साईं बाबा मंदिर जाने की योजना बना रहे हैं और उपलब्ध पात्र दर्शन विकल्प को पहले से व्यवस्थित करना चाहते हैं, वे बुकिंग सहायता ले सकते हैं। उपलब्धता तिथि, स्लॉट और मंदिर के दिशा-निर्देशों पर निर्भर करती है।"
        },
        {
          q: "साईं बाबा दर्शन बुकिंग के लिए कौन-सी जानकारी आवश्यक है?",
          a: "आम तौर पर दर्शनार्थी का नाम, मोबाइल नंबर, पसंदीदा दर्शन तिथि, दर्शनार्थियों की संख्या और जहां आवश्यक हो वहां वैध पहचान संबंधी जानकारी की आवश्यकता हो सकती है। चुने गए बुकिंग विकल्प के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "साईं बाबा दर्शन बुकिंग की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पसंदीदा दर्शन तिथि और दर्शनार्थियों की जानकारी साझा करना, उपलब्ध दर्शन विकल्प और स्लॉट की जांच करना, उपलब्ध विकल्प का चयन करना, लागू बुकिंग या भुगतान प्रक्रिया पूरी करना और बुकिंग कन्फर्मेशन प्राप्त करना शामिल है।"
        },
        {
          q: "साईं बाबा दर्शन बुकिंग में कितना समय लगता है?",
          a: "यदि उपयुक्त स्लॉट उपलब्ध हो और आवश्यक जानकारी पूरी हो, तो बुकिंग सहायता सामान्यतः 1–3 कार्य दिवसों में पूरी की जा सकती है। त्योहारों, सप्ताहांत या अधिक मांग वाले समय में स्लॉट तेजी से बदल सकते हैं। यह समय केवल अनुमानित है।"
        },
        {
          q: "साईं बाबा दर्शन बुकिंग के लिए कितने शुल्क लगते हैं?",
          a: "Aarambh India का सेवा सुविधा शुल्क ₹99 से शुरू होता है। मंदिर या आधिकारिक बुकिंग शुल्क Aarambh India के सेवा शुल्क से अलग हो सकता है और चुने गए बुकिंग विकल्प तथा वर्तमान मंदिर नियमों के अनुसार अलग-अलग हो सकता है।"
        },
        {
          q: "यदि मेरा पसंदीदा साईं बाबा दर्शन स्लॉट उपलब्ध नहीं है तो क्या होगा?",
          a: "त्योहारों, सप्ताहांत, छुट्टियों या अधिक मांग वाले समय में दर्शन और प्राथमिकता बुकिंग स्लॉट उपलब्ध नहीं हो सकते हैं। ऐसी स्थिति में उपलब्धता और मंदिर के नियमों के अनुसार वैकल्पिक तिथि या अन्य उपलब्ध विकल्प देखने में सहायता की जा सकती है।"
        },
        {
          q: "Aarambh India साईं बाबा दर्शन बुकिंग में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दर्शन और यात्रा संबंधी जानकारी एकत्र करने, उपलब्ध बुकिंग विकल्पों की जांच करने, बुकिंग प्रक्रिया में सहायता करने, WhatsApp के माध्यम से कन्फर्मेशन और महत्वपूर्ण अपडेट साझा करने तथा लागू बुकिंग आवश्यकताओं और बदलावों के संबंध में मार्गदर्शन देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "srisaila-darshan",
    image: temple_darshan,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Srisaila Devasthanam Darshan Booking",
      hi: "श्रीशैल देवस्थानम दर्शन बुकिंग"
    },

    category: {
      en: "Darshan",
      hi: "दर्शन"
    },

    price: {
      en: "₹299 onwards service charge",
      hi: "₹299 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Get assistance with Darshan slot booking at Srisailam Mallikarjuna Jyotirlinga Temple, Andhra Pradesh — convenient booking support for a smoother temple visit, subject to slot availability and temple rules.",
      hi: "आंध्र प्रदेश के श्रीशैलम मल्लिकार्जुन ज्योतिर्लिंग मंदिर में दर्शन स्लॉट बुकिंग के लिए सहायता प्राप्त करें — स्लॉट की उपलब्धता और मंदिर के नियमों के अनुसार सुविधाजनक बुकिंग सहायता।"
    },

    benefits: {
      en: [
        "Assistance with booking available Darshan slots at Srisailam Mallikarjuna Jyotirlinga Temple.",
        "Guidance on available dates, time slots, booking options, and applicable temple requirements.",
        "Advance booking assistance to help reduce uncertainty during peak pilgrimage periods and busy days.",
        "Careful handling of devotee and visit details to help reduce errors in date, slot, or visitor information.",
        "Booking confirmation and important visit-related updates shared through WhatsApp.",
        "Assistance checking alternative dates or available slots if the preferred option is unavailable, subject to availability and temple rules."
      ],

      hi: [
        "श्रीशैलम मल्लिकार्जुन ज्योतिर्लिंग मंदिर में उपलब्ध दर्शन स्लॉट की बुकिंग में सहायता।",
        "उपलब्ध तिथियों, समय स्लॉट, बुकिंग विकल्पों और लागू मंदिर संबंधी आवश्यकताओं को समझने में मार्गदर्शन।",
        "अधिक तीर्थयात्री वाले समय और व्यस्त दिनों में स्लॉट उपलब्धता को लेकर अनिश्चितता कम करने के लिए अग्रिम बुकिंग सहायता।",
        "दर्शनार्थी और यात्रा संबंधी विवरणों को सावधानीपूर्वक संभालने में सहायता, ताकि तिथि, स्लॉट या अन्य जानकारी में गलतियों की संभावना कम हो।",
        "बुकिंग कन्फर्मेशन और दर्शन से संबंधित महत्वपूर्ण अपडेट WhatsApp के माध्यम से साझा किए जाते हैं।",
        "पसंदीदा विकल्प उपलब्ध न होने पर उपलब्धता और मंदिर के नियमों के अनुसार वैकल्पिक तिथि या स्लॉट देखने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Srisaila Devasthanam Darshan Booking?",
          a: "Srisaila Devasthanam Darshan Booking is advance assistance for arranging an available Darshan slot at Srisailam Mallikarjuna Jyotirlinga Temple in Andhra Pradesh, subject to temple rules and slot availability."
        },
        {
          q: "Who should book Srisaila Darshan in advance?",
          a: "Devotees and pilgrims planning to visit Srisailam Mallikarjuna Temple who prefer to arrange an eligible Darshan slot in advance may use booking assistance. Availability depends on the selected date, slot, and temple guidelines."
        },
        {
          q: "What information is required for Srisaila Darshan Booking?",
          a: "The required information may include the devotee's name, mobile number, preferred visit date, number of visitors, and valid identity details where required by the booking system. Additional information may be requested depending on the selected booking option."
        },
        {
          q: "What is the process for Srisaila Darshan Booking?",
          a: "The process generally involves sharing your preferred visit date and visitor details, checking available Darshan options and slots, selecting an available option, completing the applicable booking or payment process, and receiving the booking confirmation."
        },
        {
          q: "How long does Srisaila Darshan Booking take to process?",
          a: "Booking assistance can generally be processed within 1–3 working days when suitable slots are available and the required information is complete. During festivals, special occasions, or peak pilgrimage periods, availability may change quickly. The timeline is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Srisaila Darshan Booking?",
          a: "Aarambh India's service facilitation charge starts from ₹299. Any applicable temple or official booking fee is separate from the Aarambh service charge and may vary according to the selected Darshan option and current temple rules."
        },
        {
          q: "What happens if my preferred Srisaila Darshan slot is unavailable?",
          a: "Darshan slots may become unavailable during festivals, special occasions, weekends, or peak pilgrimage periods. If the preferred slot is unavailable, we can help check alternative dates or available options, subject to availability and applicable temple rules."
        },
        {
          q: "How does Aarambh India help with Srisaila Darshan Booking?",
          a: "Aarambh India helps collect the required visit details, check available booking options, assist with the booking process, share confirmation and important updates through WhatsApp, and provide guidance regarding applicable booking requirements and changes."
        }
      ],

      hi: [
        {
          q: "श्रीशैल देवस्थानम दर्शन बुकिंग क्या है?",
          a: "श्रीशैल देवस्थानम दर्शन बुकिंग आंध्र प्रदेश के श्रीशैलम मल्लिकार्जुन ज्योतिर्लिंग मंदिर में उपलब्ध दर्शन स्लॉट को पहले से व्यवस्थित करने की सहायता है। बुकिंग मंदिर के नियमों और स्लॉट की उपलब्धता के अधीन होती है।"
        },
        {
          q: "श्रीशैलम दर्शन की अग्रिम बुकिंग किसे करनी चाहिए?",
          a: "जो श्रद्धालु या तीर्थयात्री श्रीशैलम मल्लिकार्जुन मंदिर जाने की योजना बना रहे हैं और उपलब्ध पात्र दर्शन स्लॉट को पहले से व्यवस्थित करना चाहते हैं, वे बुकिंग सहायता ले सकते हैं। उपलब्धता तिथि, स्लॉट और मंदिर के दिशा-निर्देशों पर निर्भर करती है।"
        },
        {
          q: "श्रीशैलम दर्शन बुकिंग के लिए कौन-सी जानकारी आवश्यक है?",
          a: "आम तौर पर दर्शनार्थी का नाम, मोबाइल नंबर, पसंदीदा दर्शन तिथि, दर्शनार्थियों की संख्या और जहां आवश्यक हो वहां वैध पहचान संबंधी जानकारी की आवश्यकता हो सकती है। चुने गए बुकिंग विकल्प के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "श्रीशैलम दर्शन बुकिंग की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पसंदीदा दर्शन तिथि और दर्शनार्थियों की जानकारी साझा करना, उपलब्ध दर्शन विकल्प और स्लॉट की जांच करना, उपलब्ध विकल्प का चयन करना, लागू बुकिंग या भुगतान प्रक्रिया पूरी करना और बुकिंग कन्फर्मेशन प्राप्त करना शामिल है।"
        },
        {
          q: "श्रीशैलम दर्शन बुकिंग में कितना समय लगता है?",
          a: "यदि उपयुक्त स्लॉट उपलब्ध हो और आवश्यक जानकारी पूरी हो, तो बुकिंग सहायता सामान्यतः 1–3 कार्य दिवसों में पूरी की जा सकती है। त्योहारों, विशेष अवसरों या अधिक तीर्थयात्री वाले समय में स्लॉट तेजी से बदल सकते हैं। यह समय केवल अनुमानित है।"
        },
        {
          q: "श्रीशैलम दर्शन बुकिंग के लिए कितने शुल्क लगते हैं?",
          a: "Aarambh India का सेवा सुविधा शुल्क ₹299 से शुरू होता है। मंदिर या आधिकारिक बुकिंग शुल्क Aarambh India के सेवा शुल्क से अलग हो सकता है और चुने गए दर्शन विकल्प तथा वर्तमान मंदिर नियमों के अनुसार अलग-अलग हो सकता है।"
        },
        {
          q: "यदि मेरा पसंदीदा श्रीशैलम दर्शन स्लॉट उपलब्ध नहीं है तो क्या होगा?",
          a: "त्योहारों, विशेष अवसरों, सप्ताहांत या अधिक तीर्थयात्री वाले समय में दर्शन स्लॉट उपलब्ध नहीं हो सकते हैं। ऐसी स्थिति में उपलब्धता और मंदिर के नियमों के अनुसार वैकल्पिक तिथि या अन्य उपलब्ध विकल्प देखने में सहायता की जा सकती है।"
        },
        {
          q: "Aarambh India श्रीशैलम दर्शन बुकिंग में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दर्शन और यात्रा संबंधी जानकारी एकत्र करने, उपलब्ध बुकिंग विकल्पों की जांच करने, बुकिंग प्रक्रिया में सहायता करने, WhatsApp के माध्यम से कन्फर्मेशन और महत्वपूर्ण अपडेट साझा करने तथा लागू बुकिंग आवश्यकताओं और बदलावों के संबंध में मार्गदर्शन देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "vitthal-rukmini-darshan",
    image: vitthal,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Vitthal Rukmini Darshan Booking",
      hi: "विठ्ठल रुक्मिणी दर्शन बुकिंग"
    },

    category: {
      en: "Darshan",
      hi: "दर्शन"
    },

    price: {
      en: "₹99 onwards service charge",
      hi: "₹99 से शुरू सेवा शुल्क"
    },

    summary: {
      en: "Get assistance with Darshan slot booking at Vitthal Rukmini Temple, Pandharpur — convenient booking support for a smoother temple visit, especially during busy pilgrimage and festival periods, subject to availability and temple rules.",
      hi: "पंढरपुर के विठ्ठल रुक्मिणी मंदिर में दर्शन स्लॉट बुकिंग के लिए सहायता प्राप्त करें — विशेष रूप से अधिक भीड़ वाले तीर्थ और त्योहारों के समय सुविधाजनक बुकिंग सहायता, जो उपलब्धता और मंदिर के नियमों के अधीन है।"
    },

    benefits: {
      en: [
        "Assistance with booking available Darshan slots at Vitthal Rukmini Temple, Pandharpur.",
        "Guidance on available dates, time slots, and booking options, especially during festival and Wari periods.",
        "Advance booking assistance to help reduce waiting and last-minute arrangements on the day of your visit.",
        "Careful handling of devotee and visit details to help reduce errors in date, slot, or visitor information.",
        "Booking confirmation and important visit-related updates shared through WhatsApp.",
        "Assistance checking alternative dates or available slots if the preferred option is unavailable, subject to availability and temple rules."
      ],

      hi: [
        "पंढरपुर के विठ्ठल रुक्मिणी मंदिर में उपलब्ध दर्शन स्लॉट की बुकिंग में सहायता।",
        "उपलब्ध तिथियों, समय स्लॉट और बुकिंग विकल्पों को समझने में मार्गदर्शन, विशेष रूप से त्योहार और वारी के समय।",
        "अग्रिम बुकिंग में सहायता, ताकि दर्शन के दिन लंबी प्रतीक्षा और अंतिम समय की व्यवस्था को कम किया जा सके।",
        "दर्शनार्थी और यात्रा संबंधी विवरणों को सावधानीपूर्वक संभालने में सहायता, ताकि तिथि, स्लॉट या अन्य जानकारी में गलतियों की संभावना कम हो।",
        "बुकिंग कन्फर्मेशन और दर्शन से संबंधित महत्वपूर्ण अपडेट WhatsApp के माध्यम से साझा किए जाते हैं।",
        "पसंदीदा विकल्प उपलब्ध न होने पर उपलब्धता और मंदिर के नियमों के अनुसार वैकल्पिक तिथि या स्लॉट देखने में सहायता।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is Vitthal Rukmini Darshan Booking?",
          a: "Vitthal Rukmini Darshan Booking is advance assistance for arranging an available Darshan slot at Vitthal Rukmini Temple in Pandharpur, Maharashtra, subject to temple rules and slot availability."
        },
        {
          q: "Who should book Vitthal Rukmini Darshan in advance?",
          a: "Devotees and pilgrims planning to visit Vitthal Rukmini Temple who prefer to arrange an eligible Darshan option in advance may use booking assistance. Availability depends on the selected date, slot, and temple guidelines."
        },
        {
          q: "What information is required for Vitthal Rukmini Darshan Booking?",
          a: "The required information may include the devotee's name, mobile number, preferred visit date, number of visitors, and valid identity details where required by the booking system. Additional information may be requested depending on the selected booking option."
        },
        {
          q: "What is the process for Vitthal Rukmini Darshan Booking?",
          a: "The process generally involves sharing your preferred visit date and visitor details, checking available Darshan options and slots, selecting an available option, completing the applicable booking or payment process, and receiving the booking confirmation."
        },
        {
          q: "How long does Vitthal Rukmini Darshan Booking take to process?",
          a: "Booking assistance can generally be processed within 1–3 working days when suitable slots are available and the required information is complete. During festivals, Wari periods, weekends, or other high-demand periods, availability may change quickly. The timeline is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in Vitthal Rukmini Darshan Booking?",
          a: "Aarambh India's service facilitation charge starts from ₹99. Any applicable temple or official booking fee is separate from the Aarambh service charge and may vary according to the selected Darshan option and current temple rules."
        },
        {
          q: "What happens if my preferred Vitthal Rukmini Darshan slot is unavailable?",
          a: "Darshan slots may become unavailable during festivals, Wari periods, weekends, holidays, or other high-demand periods. If the preferred slot is unavailable, we can help check alternative dates or available options, subject to availability and applicable temple rules."
        },
        {
          q: "How does Aarambh India help with Vitthal Rukmini Darshan Booking?",
          a: "Aarambh India helps collect the required visit details, check available booking options, assist with the booking process, share confirmation and important updates through WhatsApp, and provide guidance regarding applicable booking requirements and changes."
        }
      ],

      hi: [
        {
          q: "विठ्ठल रुक्मिणी दर्शन बुकिंग क्या है?",
          a: "विठ्ठल रुक्मिणी दर्शन बुकिंग महाराष्ट्र के पंढरपुर स्थित विठ्ठल रुक्मिणी मंदिर में उपलब्ध दर्शन स्लॉट को पहले से व्यवस्थित करने की सहायता है। बुकिंग मंदिर के नियमों और स्लॉट की उपलब्धता के अधीन होती है।"
        },
        {
          q: "विठ्ठल रुक्मिणी दर्शन की अग्रिम बुकिंग किसे करनी चाहिए?",
          a: "जो श्रद्धालु या तीर्थयात्री विठ्ठल रुक्मिणी मंदिर जाने की योजना बना रहे हैं और उपलब्ध पात्र दर्शन विकल्प को पहले से व्यवस्थित करना चाहते हैं, वे बुकिंग सहायता ले सकते हैं। उपलब्धता तिथि, स्लॉट और मंदिर के दिशा-निर्देशों पर निर्भर करती है।"
        },
        {
          q: "विठ्ठल रुक्मिणी दर्शन बुकिंग के लिए कौन-सी जानकारी आवश्यक है?",
          a: "आम तौर पर दर्शनार्थी का नाम, मोबाइल नंबर, पसंदीदा दर्शन तिथि, दर्शनार्थियों की संख्या और जहां आवश्यक हो वहां वैध पहचान संबंधी जानकारी की आवश्यकता हो सकती है। चुने गए बुकिंग विकल्प के अनुसार अतिरिक्त जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "विठ्ठल रुक्मिणी दर्शन बुकिंग की प्रक्रिया क्या है?",
          a: "प्रक्रिया में पसंदीदा दर्शन तिथि और दर्शनार्थियों की जानकारी साझा करना, उपलब्ध दर्शन विकल्प और स्लॉट की जांच करना, उपलब्ध विकल्प का चयन करना, लागू बुकिंग या भुगतान प्रक्रिया पूरी करना और बुकिंग कन्फर्मेशन प्राप्त करना शामिल है।"
        },
        {
          q: "विठ्ठल रुक्मिणी दर्शन बुकिंग में कितना समय लगता है?",
          a: "यदि उपयुक्त स्लॉट उपलब्ध हो और आवश्यक जानकारी पूरी हो, तो बुकिंग सहायता सामान्यतः 1–3 कार्य दिवसों में पूरी की जा सकती है। त्योहारों, वारी के समय, सप्ताहांत या अधिक मांग वाले समय में स्लॉट तेजी से बदल सकते हैं। यह समय केवल अनुमानित है।"
        },
        {
          q: "विठ्ठल रुक्मिणी दर्शन बुकिंग के लिए कितने शुल्क लगते हैं?",
          a: "Aarambh India का सेवा सुविधा शुल्क ₹99 से शुरू होता है। मंदिर या आधिकारिक बुकिंग शुल्क Aarambh India के सेवा शुल्क से अलग हो सकता है और चुने गए दर्शन विकल्प तथा वर्तमान मंदिर नियमों के अनुसार अलग-अलग हो सकता है।"
        },
        {
          q: "यदि मेरा पसंदीदा विठ्ठल रुक्मिणी दर्शन स्लॉट उपलब्ध नहीं है तो क्या होगा?",
          a: "त्योहारों, वारी के समय, सप्ताहांत, छुट्टियों या अधिक मांग वाले समय में दर्शन स्लॉट उपलब्ध नहीं हो सकते हैं। ऐसी स्थिति में उपलब्धता और मंदिर के नियमों के अनुसार वैकल्पिक तिथि या अन्य उपलब्ध विकल्प देखने में सहायता की जा सकती है।"
        },
        {
          q: "Aarambh India विठ्ठल रुक्मिणी दर्शन बुकिंग में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक दर्शन और यात्रा संबंधी जानकारी एकत्र करने, उपलब्ध बुकिंग विकल्पों की जांच करने, बुकिंग प्रक्रिया में सहायता करने, WhatsApp के माध्यम से कन्फर्मेशन और महत्वपूर्ण अपडेट साझा करने तथा लागू बुकिंग आवश्यकताओं और बदलावों के संबंध में मार्गदर्शन देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "abha-service",
    image: abha,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "ABHA Service",
      hi: "ABHA सेवा"
    },

    category: {
      en: "Health",
      hi: "स्वास्थ्य"
    },

    tag: {
      en: "New",
      hi: "नया"
    },

    price: {
      en: "₹99 onwards",
      hi: "₹99 से शुरू"
    },

    summary: {
      en: "Create your Ayushman Bharat Health Account (ABHA ID) — a digital health identity that can help you securely access and manage health records through supported digital health services.",
      hi: "अपना आयुष्मान भारत हेल्थ अकाउंट (ABHA ID) बनवाएं — एक डिजिटल स्वास्थ्य पहचान, जो समर्थित डिजिटल स्वास्थ्य सेवाओं के माध्यम से स्वास्थ्य रिकॉर्ड को सुरक्षित रूप से एक्सेस और मैनेज करने में सहायता कर सकती है।"
    },

    benefits: {
      en: [
        "Assistance creating your Ayushman Bharat Health Account (ABHA ID) for accessing supported digital health services.",
        "Convenient ABHA creation using Aadhaar or mobile-based verification, as applicable.",
        "Guidance on linking or accessing available digital health records through supported platforms.",
        "Helps simplify access to your digital health information at participating healthcare facilities and services.",
        "Assistance downloading and saving your ABHA card or ID details for future use.",
        "Guidance on securely sharing health records through supported digital health services when required."
      ],

      hi: [
        "समर्थित डिजिटल स्वास्थ्य सेवाओं का उपयोग करने के लिए आयुष्मान भारत हेल्थ अकाउंट (ABHA ID) बनाने में सहायता।",
        "लागू प्रक्रिया के अनुसार आधार या मोबाइल आधारित सत्यापन के माध्यम से सुविधाजनक ABHA बनाने में सहायता।",
        "समर्थित प्लेटफॉर्म के माध्यम से उपलब्ध डिजिटल स्वास्थ्य रिकॉर्ड को लिंक करने या एक्सेस करने में मार्गदर्शन।",
        "भाग लेने वाली स्वास्थ्य सुविधाओं और सेवाओं पर डिजिटल स्वास्थ्य जानकारी तक पहुंच को आसान बनाने में सहायता।",
        "भविष्य में उपयोग के लिए ABHA कार्ड या ID विवरण डाउनलोड और सुरक्षित रखने में सहायता।",
        "आवश्यकता पड़ने पर समर्थित डिजिटल स्वास्थ्य सेवाओं के माध्यम से स्वास्थ्य रिकॉर्ड को सुरक्षित रूप से साझा करने में मार्गदर्शन।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is ABHA Service?",
          a: "ABHA Service provides assistance in creating an Ayushman Bharat Health Account (ABHA), a digital health identity that can be used with supported digital health services to access and manage health information."
        },
        {
          q: "Who can create an ABHA ID?",
          a: "Individuals who meet the applicable requirements can create an ABHA ID. The available registration and verification options may depend on the current ABHA system and the individual's Aadhaar or mobile details."
        },
        {
          q: "What information is required for ABHA creation?",
          a: "Depending on the selected verification method, Aadhaar details or a mobile number and basic personal information may be required. Additional verification details may be requested by the applicable digital health platform."
        },
        {
          q: "What is the process for creating an ABHA ID?",
          a: "The process generally involves providing the required personal and verification details, completing Aadhaar or mobile-based verification where applicable, reviewing the information, and generating the ABHA ID through the supported system."
        },
        {
          q: "How long does ABHA creation take?",
          a: "ABHA creation can often be completed quickly once the required details and verification are successful. Aarambh assistance is generally completed within 1–2 working days, depending on verification and system availability. This is an estimate rather than a guarantee."
        },
        {
          q: "What are the charges involved in ABHA Service?",
          a: "Aarambh India's service facilitation charge starts from ₹99. ABHA creation through the official system may not involve a separate government registration fee, but any applicable charges or service conditions are subject to the current official rules."
        },
        {
          q: "What happens if my ABHA creation is delayed or unsuccessful?",
          a: "Issues may occur due to Aadhaar or mobile verification problems, incorrect personal details, duplicate records, or temporary technical issues. The relevant details can be reviewed and corrected where permitted before trying again."
        },
        {
          q: "How does Aarambh India help with ABHA Service?",
          a: "Aarambh India assists with checking the required details, completing the ABHA creation process, guiding you through applicable verification steps, helping with ABHA ID/card access, and providing status updates through WhatsApp."
        }
      ],

      hi: [
        {
          q: "ABHA सेवा क्या है?",
          a: "ABHA सेवा आयुष्मान भारत हेल्थ अकाउंट (ABHA) बनाने में सहायता प्रदान करती है। ABHA एक डिजिटल स्वास्थ्य पहचान है, जिसका उपयोग समर्थित डिजिटल स्वास्थ्य सेवाओं के माध्यम से स्वास्थ्य संबंधी जानकारी को एक्सेस और मैनेज करने के लिए किया जा सकता है।"
        },
        {
          q: "ABHA ID कौन बना सकता है?",
          a: "जो व्यक्ति लागू आवश्यकताओं को पूरा करते हैं, वे ABHA ID बना सकते हैं। उपलब्ध पंजीकरण और सत्यापन विकल्प वर्तमान ABHA प्रणाली तथा व्यक्ति के आधार या मोबाइल विवरण पर निर्भर कर सकते हैं।"
        },
        {
          q: "ABHA बनाने के लिए कौन-सी जानकारी आवश्यक है?",
          a: "चुनी गई सत्यापन प्रक्रिया के अनुसार आधार विवरण या मोबाइल नंबर और मूल व्यक्तिगत जानकारी आवश्यक हो सकती है। लागू डिजिटल स्वास्थ्य प्लेटफॉर्म द्वारा अतिरिक्त सत्यापन जानकारी भी मांगी जा सकती है।"
        },
        {
          q: "ABHA ID बनाने की प्रक्रिया क्या है?",
          a: "प्रक्रिया में आवश्यक व्यक्तिगत और सत्यापन संबंधी जानकारी देना, जहां लागू हो वहां आधार या मोबाइल आधारित सत्यापन पूरा करना, विवरण की जांच करना और समर्थित प्रणाली के माध्यम से ABHA ID बनाना शामिल है।"
        },
        {
          q: "ABHA ID बनने में कितना समय लगता है?",
          a: "आवश्यक जानकारी और सत्यापन सफल होने पर ABHA ID कई मामलों में जल्दी बनाई जा सकती है। Aarambh की सहायता सामान्यतः 1–2 कार्य दिवसों में पूरी की जा सकती है, जो सत्यापन और सिस्टम की उपलब्धता पर निर्भर करती है। यह समय केवल अनुमानित है।"
        },
        {
          q: "ABHA सेवा के लिए कितने शुल्क लगते हैं?",
          a: "Aarambh India का सेवा सुविधा शुल्क ₹99 से शुरू होता है। आधिकारिक प्रणाली के माध्यम से ABHA बनाने पर सामान्यतः अलग सरकारी पंजीकरण शुल्क नहीं हो सकता है, लेकिन कोई भी लागू शुल्क या सेवा संबंधी शर्तें वर्तमान आधिकारिक नियमों के अनुसार होंगी।"
        },
        {
          q: "यदि ABHA बनाने में देरी हो या आवेदन सफल न हो तो क्या होगा?",
          a: "आधार या मोबाइल सत्यापन की समस्या, गलत व्यक्तिगत जानकारी, डुप्लीकेट रिकॉर्ड या अस्थायी तकनीकी समस्या के कारण प्रक्रिया में परेशानी हो सकती है। जहां अनुमति हो, संबंधित जानकारी की जांच और सुधार करके दोबारा प्रयास किया जा सकता है।"
        },
        {
          q: "Aarambh India ABHA सेवा में कैसे सहायता करता है?",
          a: "Aarambh India आवश्यक विवरणों की जांच करने, ABHA बनाने की प्रक्रिया पूरी करने, लागू सत्यापन चरणों में मार्गदर्शन देने, ABHA ID या कार्ड एक्सेस करने में सहायता करने और WhatsApp के माध्यम से स्टेटस अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "ayushman-service",
    image: aayushman,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "Ayushman Bharat (PM-JAY) Card",
      hi: "आयुष्मान भारत (PM-JAY) कार्ड"
    },

    category: {
      en: "Health",
      hi: "स्वास्थ्य"
    },

    tag: {
      en: "Popular",
      hi: "लोकप्रिय"
    },

    price: {
      en: "₹99 onwards",
      hi: "₹99 से शुरू"
    },

    summary: {
      en: "Get assistance with your Ayushman Bharat (PM-JAY) Card and check eligibility for eligible healthcare coverage of up to ₹5 lakh per family per year, subject to scheme rules.",
      hi: "आयुष्मान भारत (PM-JAY) कार्ड बनवाने में सहायता प्राप्त करें और योजना के नियमों के अनुसार पात्र परिवारों के लिए प्रति वर्ष ₹5 लाख तक के स्वास्थ्य कवरेज हेतु पात्रता की जांच कराएं।"
    },

    benefits: {
      en: [
        "Assistance checking eligibility for Ayushman Bharat (PM-JAY) benefits.",
        "Guidance for completing the Ayushman Bharat card application accurately.",
        "Support verifying Aadhaar, family, and other required details.",
        "Guidance on empanelled hospitals where eligible PM-JAY benefits can be availed.",
        "Assistance with adding or verifying eligible family members, where applicable.",
        "Regular application and card-status updates until the process is completed."
      ],

      hi: [
        "आयुष्मान भारत (PM-JAY) लाभों के लिए पात्रता की जांच में सहायता।",
        "आयुष्मान भारत कार्ड का आवेदन सही तरीके से पूरा करने में मार्गदर्शन।",
        "आधार, परिवार और अन्य आवश्यक विवरणों के सत्यापन में सहायता।",
        "पात्र PM-JAY लाभों का उपयोग किए जा सकने वाले सूचीबद्ध अस्पतालों की जानकारी में सहायता।",
        "जहां लागू हो, पात्र परिवार के सदस्यों को जोड़ने या उनका विवरण सत्यापित करने में सहायता।",
        "प्रक्रिया पूरी होने तक आवेदन और कार्ड की स्थिति की नियमित जानकारी।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is the Ayushman Bharat (PM-JAY) Card?",
          a: "The Ayushman Bharat (PM-JAY) Card is issued to eligible beneficiaries under the Pradhan Mantri Jan Arogya Yojana. Eligible families may receive healthcare coverage of up to ₹5 lakh per family per year, subject to scheme rules and eligibility."
        },
        {
          q: "Who is eligible for the Ayushman Bharat (PM-JAY) Card?",
          a: "Eligibility is determined according to the applicable PM-JAY beneficiary database and current government scheme rules. We can help check your available beneficiary details before proceeding."
        },
        {
          q: "What documents are required for the Ayushman Bharat Card?",
          a: "Typically, Aadhaar or another accepted identity document, family or beneficiary details, and other information required for verification may be needed. Additional documents may be requested depending on the beneficiary record and applicable state or scheme requirements."
        },
        {
          q: "What is the process for getting an Ayushman Bharat Card?",
          a: "The process generally involves checking beneficiary eligibility, verifying identity and family details, completing the required application or e-KYC process, and generating the card through the applicable government system."
        },
        {
          q: "How long does the Ayushman Bharat Card process take?",
          a: "Once the required details and documents are available, the process may take around 7–15 working days in cases requiring verification. Actual time can vary depending on beneficiary verification, portal processing, and departmental requirements."
        },
        {
          q: "What are the charges for Ayushman Bharat Card assistance?",
          a: "Aarambh India's service facilitation charge starts from ₹99. Ayushman Bharat (PM-JAY) card creation through the official government process may not have a separate government registration fee, but any applicable official charges or requirements are subject to current scheme rules."
        },
        {
          q: "What happens if my Ayushman Bharat Card application is rejected or delayed?",
          a: "Delay or rejection may occur because of beneficiary-record mismatches, Aadhaar or e-KYC issues, incomplete information, or verification requirements. We can help identify the issue and guide you on the applicable correction or next step."
        },
        {
          q: "How does Aarambh India help with the Ayushman Bharat Card?",
          a: "Aarambh India helps check eligibility, organize the required information, complete the application or verification process, and provide status updates over WhatsApp until the applicable process is completed."
        }
      ],

      hi: [
        {
          q: "आयुष्मान भारत (PM-JAY) कार्ड क्या है?",
          a: "आयुष्मान भारत (PM-JAY) कार्ड प्रधानमंत्री जन आरोग्य योजना के अंतर्गत पात्र लाभार्थियों के लिए जारी किया जाता है। योजना के नियमों और पात्रता के अनुसार पात्र परिवारों को प्रति परिवार प्रति वर्ष ₹5 लाख तक का स्वास्थ्य कवरेज मिल सकता है।"
        },
        {
          q: "आयुष्मान भारत (PM-JAY) कार्ड के लिए कौन पात्र है?",
          a: "पात्रता संबंधित PM-JAY लाभार्थी डेटाबेस और वर्तमान सरकारी योजना के नियमों के अनुसार निर्धारित होती है। आवेदन से पहले उपलब्ध लाभार्थी विवरण की जांच करने में हम सहायता कर सकते हैं।"
        },
        {
          q: "आयुष्मान भारत कार्ड के लिए कौन से दस्तावेज आवश्यक हैं?",
          a: "आमतौर पर सत्यापन के लिए आधार या अन्य स्वीकार्य पहचान दस्तावेज, परिवार या लाभार्थी का विवरण और आवश्यक अन्य जानकारी की जरूरत हो सकती है। लाभार्थी रिकॉर्ड तथा लागू राज्य या योजना की आवश्यकताओं के अनुसार अतिरिक्त दस्तावेज भी मांगे जा सकते हैं।"
        },
        {
          q: "आयुष्मान भारत कार्ड बनवाने की प्रक्रिया क्या है?",
          a: "प्रक्रिया में सामान्यतः लाभार्थी की पात्रता जांचना, पहचान और परिवार के विवरण का सत्यापन, आवश्यक आवेदन या e-KYC प्रक्रिया पूरी करना और संबंधित सरकारी प्रणाली के माध्यम से कार्ड जारी करवाना शामिल होता है।"
        },
        {
          q: "आयुष्मान भारत कार्ड बनने में कितना समय लगता है?",
          a: "आवश्यक विवरण और दस्तावेज उपलब्ध होने के बाद, जिन मामलों में सत्यापन आवश्यक हो उनमें प्रक्रिया में लगभग 7–15 कार्यदिवस लग सकते हैं। वास्तविक समय लाभार्थी सत्यापन, पोर्टल प्रोसेसिंग और विभागीय आवश्यकताओं के अनुसार अलग हो सकता है।"
        },
        {
          q: "आयुष्मान भारत कार्ड बनवाने की क्या फीस है?",
          a: "आयुष्मान भारत कार्ड के लिए Aarambh India की सेवा सहायता फीस ₹99 से शुरू होती है। आधिकारिक सरकारी प्रक्रिया के तहत कार्ड बनाने के लिए सामान्यतः अलग सरकारी पंजीकरण शुल्क नहीं हो सकता है, लेकिन कोई भी लागू आधिकारिक शुल्क या आवश्यकता वर्तमान योजना नियमों के अनुसार होगी।"
        },
        {
          q: "अगर मेरा आयुष्मान भारत कार्ड आवेदन रिजेक्ट या डिले हो जाए तो क्या होगा?",
          a: "लाभार्थी रिकॉर्ड में अंतर, आधार या e-KYC समस्या, अधूरी जानकारी या अतिरिक्त सत्यापन की आवश्यकता के कारण आवेदन में देरी या अस्वीकृति हो सकती है। समस्या की पहचान करने और लागू सुधार या अगले चरण की जानकारी देने में हम सहायता कर सकते हैं।"
        },
        {
          q: "Aarambh India आयुष्मान भारत कार्ड में कैसे मदद करता है?",
          a: "Aarambh India पात्रता जांचने, आवश्यक जानकारी व्यवस्थित करने, आवेदन या सत्यापन प्रक्रिया पूरी करने और प्रक्रिया पूरी होने तक WhatsApp के माध्यम से स्टेटस अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
  {
    id: "udid-service",
    image: udid,
    apply_form: "/aarambh-aadhaar-form.html",

    name: {
      en: "UDID Card Service",
      hi: "UDID कार्ड सेवा"
    },

    category: {
      en: "Health",
      hi: "स्वास्थ्य"
    },

    price: {
      en: "₹149 onwards",
      hi: "₹149 से शुरू"
    },

    summary: {
      en: "Get assistance with your Unique Disability ID (UDID) Card and disability certificate application — an important document for accessing applicable disability-related benefits, concessions, and government welfare schemes.",
      hi: "Unique Disability ID (UDID) कार्ड और दिव्यांगता प्रमाण पत्र के आवेदन में सहायता प्राप्त करें — लागू दिव्यांगता संबंधी लाभ, रियायतों और सरकारी कल्याणकारी योजनाओं तक पहुंच के लिए एक महत्वपूर्ण दस्तावेज।"
    },

    benefits: {
      en: [
        "Assistance with applying for a Unique Disability ID (UDID) Card and disability certificate.",
        "Guidance on the online application process through the official UDID/Swavlamban system.",
        "Support with understanding the required documents and applicant details.",
        "Guidance regarding the medical assessment or disability evaluation process, where required.",
        "Help ensuring the application details and documents are submitted accurately to reduce avoidable delays.",
        "Regular application-status updates and guidance until the applicable process is completed."
      ],

      hi: [
        "Unique Disability ID (UDID) कार्ड और दिव्यांगता प्रमाण पत्र के आवेदन में सहायता।",
        "आधिकारिक UDID/Swavlamban प्रणाली के माध्यम से ऑनलाइन आवेदन प्रक्रिया में मार्गदर्शन।",
        "आवश्यक दस्तावेजों और आवेदक के विवरण को समझने में सहायता।",
        "जहां आवश्यक हो, मेडिकल असेसमेंट या दिव्यांगता मूल्यांकन प्रक्रिया के संबंध में मार्गदर्शन।",
        "अनावश्यक देरी को कम करने के लिए आवेदन और दस्तावेजों की जानकारी सही तरीके से जमा करने में सहायता।",
        "लागू प्रक्रिया पूरी होने तक आवेदन की स्थिति और अगले चरण की नियमित जानकारी।"
      ]
    },

    faqs: {
      en: [
        {
          q: "What is a UDID Card?",
          a: "The Unique Disability ID (UDID) Card is a government-issued identity document for eligible persons with disabilities. It helps maintain disability-related information digitally and can be used for applicable benefits and services, subject to government rules."
        },
        {
          q: "Who can apply for a UDID Card?",
          a: "Eligible persons with disabilities can apply for a UDID Card according to the applicable government guidelines. Final eligibility and disability assessment are determined by the concerned authorities."
        },
        {
          q: "What documents are required for UDID registration?",
          a: "Typically, Aadhaar or another accepted identity document, photograph, address and personal details, and relevant medical or disability-related documents may be required. Additional documents may be requested by the concerned authority during verification or assessment."
        },
        {
          q: "What is the process for getting a UDID Card?",
          a: "The process generally involves registering on the applicable UDID system, submitting the required details and documents, attending a medical or disability assessment where required, verification by the concerned authority, and issuance of the disability certificate and/or UDID Card as applicable."
        },
        {
          q: "How long does the UDID process take?",
          a: "The process may take around 15–21 working days in cases where the required verification and assessment are completed within the expected timeframe. Actual processing can vary depending on medical assessment, document verification, and the workload of the concerned authority."
        },
        {
          q: "What are the charges for UDID Service?",
          a: "Aarambh India's service facilitation charge starts from ₹149. Any official government, medical assessment, or other applicable charges, if applicable, are separate and depend on the current rules of the concerned authority."
        },
        {
          q: "What happens if my UDID application is rejected or delayed?",
          a: "An application may be delayed or require correction because of incomplete documents, incorrect personal details, verification issues, or the need for additional medical assessment. We can help identify the issue and guide you on the applicable next step."
        },
        {
          q: "How does Aarambh India help with UDID registration?",
          a: "Aarambh India helps organize the required information, complete the online application, guide you through the applicable verification or assessment steps, and provide status updates over WhatsApp until the process is completed."
        }
      ],

      hi: [
        {
          q: "UDID कार्ड क्या है?",
          a: "Unique Disability ID (UDID) कार्ड पात्र दिव्यांग व्यक्तियों के लिए सरकार द्वारा जारी पहचान दस्तावेज है। यह दिव्यांगता से संबंधित जानकारी को डिजिटल रूप से व्यवस्थित रखने में सहायता करता है और सरकारी नियमों के अनुसार लागू लाभों और सेवाओं के लिए उपयोग किया जा सकता है।"
        },
        {
          q: "UDID कार्ड के लिए कौन आवेदन कर सकता है?",
          a: "लागू सरकारी दिशा-निर्देशों के अनुसार पात्र दिव्यांग व्यक्ति UDID कार्ड के लिए आवेदन कर सकते हैं। अंतिम पात्रता और दिव्यांगता का मूल्यांकन संबंधित सक्षम प्राधिकारी द्वारा निर्धारित किया जाता है।"
        },
        {
          q: "UDID पंजीकरण के लिए कौन से दस्तावेज आवश्यक हैं?",
          a: "आमतौर पर आधार या अन्य स्वीकार्य पहचान दस्तावेज, फोटो, पता एवं व्यक्तिगत विवरण तथा संबंधित मेडिकल या दिव्यांगता से जुड़े दस्तावेज आवश्यक हो सकते हैं। सत्यापन या मेडिकल असेसमेंट के दौरान संबंधित प्राधिकारी द्वारा अतिरिक्त दस्तावेज भी मांगे जा सकते हैं।"
        },
        {
          q: "UDID कार्ड बनवाने की प्रक्रिया क्या है?",
          a: "प्रक्रिया में सामान्यतः संबंधित UDID प्रणाली पर पंजीकरण, आवश्यक विवरण और दस्तावेज जमा करना, जहां आवश्यक हो वहां मेडिकल या दिव्यांगता मूल्यांकन में शामिल होना, संबंधित प्राधिकारी द्वारा सत्यापन और लागू प्रक्रिया के अनुसार दिव्यांगता प्रमाण पत्र तथा UDID कार्ड जारी होना शामिल है।"
        },
        {
          q: "UDID कार्ड बनने में कितना समय लगता है?",
          a: "यदि आवश्यक सत्यापन और मूल्यांकन अपेक्षित समय में पूरा हो जाए तो प्रक्रिया में लगभग 15–21 कार्यदिवस लग सकते हैं। वास्तविक समय मेडिकल असेसमेंट, दस्तावेज सत्यापन और संबंधित प्राधिकारी के कार्यभार के अनुसार अलग हो सकता है।"
        },
        {
          q: "UDID Service की क्या फीस है?",
          a: "Aarambh India की सेवा सहायता फीस ₹149 से शुरू होती है। कोई भी लागू सरकारी शुल्क, मेडिकल असेसमेंट शुल्क या अन्य संबंधित शुल्क अलग हो सकते हैं और संबंधित प्राधिकारी के वर्तमान नियमों पर निर्भर करते हैं।"
        },
        {
          q: "अगर मेरा UDID आवेदन रिजेक्ट या डिले हो जाए तो क्या होगा?",
          a: "अधूरे दस्तावेज, गलत व्यक्तिगत जानकारी, सत्यापन संबंधी समस्या या अतिरिक्त मेडिकल असेसमेंट की आवश्यकता के कारण आवेदन में देरी या सुधार की जरूरत हो सकती है। समस्या की पहचान करने और लागू अगले चरण की जानकारी देने में हम सहायता कर सकते हैं।"
        },
        {
          q: "Aarambh India UDID पंजीकरण में कैसे मदद करता है?",
          a: "Aarambh India आवश्यक जानकारी व्यवस्थित करने, ऑनलाइन आवेदन पूरा करने, लागू सत्यापन या मेडिकल असेसमेंट प्रक्रिया के संबंध में मार्गदर्शन देने और प्रक्रिया पूरी होने तक WhatsApp के माध्यम से स्टेटस अपडेट देने में सहायता करता है।"
        }
      ]
    }
  },
];


export default SERVICES;