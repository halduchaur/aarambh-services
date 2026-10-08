/* ==========================================================================
   Copy for the redesigned Services directory page (English + Hindi).

   Kept in its own file so the page can be dropped into the project without
   editing en.js / hi.js. If you'd rather keep everything in the locale files,
   move these objects under `services` there and read them from
   `translations.services` instead.

   Functions (lead, count) receive numbers so wording stays natural in both
   languages.
   ========================================================================== */

const pageCopy = {
    en: {
        seo_title: "All Services",
        seo_description:
            "Browse Aarambh's catalogue of government documentation and everyday services — with starting prices and plain-language guidance.",

        kicker: "Service Catalogue",
        h1_pre: "Choose a service.",
        h1_em: "We'll handle the paperwork.",
        lead: (n) =>
            `${n} government and everyday services, explained in plain language with the starting price shown up front. Open any service to see what you need and how it works.`,

        steps_title: "How it works",
        steps: [
            { title: "Pick a service", text: "Read what it covers and which documents you'll need." },
            { title: "Share your documents", text: "Send clear copies to our team on WhatsApp." },
            { title: "Receive it digitally", text: "Your document or acknowledgement arrives on WhatsApp and email." },
        ],

        rail_title: "Browse by category",
        rail_all: "All services",
        help_title: "Not sure which one you need?",
        help_text: "Describe your situation and our team will point you to the right service.",
        help_cta: "Ask on WhatsApp",

        search_label: "Search services",
        search_placeholder: "Search Aadhaar, PAN, passport…",
        search_clear: "Clear search",
        sort_label: "Sort by",
        sort_options: {
            recommended: "Recommended",
            "price-asc": "Price: low to high",
            "price-desc": "Price: high to low",
            name: "Name: A to Z",
        },
        count: (shown, total) => `Showing ${shown} of ${total} services`,
        reset: "Reset filters",

        starting_at: "Starting at",
        view_details: "View details",

        empty_title: "No service matches your search",
        empty_text: "Try a different word, or tell us what you need and we'll guide you.",
        empty_clear: "Clear search",
        empty_ask: "Ask our team",

        promise: [
            { title: "Prices up front", text: "See the starting fee before you begin." },
            { title: "Plain-language guidance", text: "Documents and steps explained simply." },
            { title: "100% digital delivery", text: "Everything is delivered on WhatsApp and email." },
            { title: "Hindi & English", text: "Ask in the language you're comfortable with." },
        ],

        ask_title: "Still have a question?",
        ask_text: "Our team is reachable every day — tell us where you're stuck.",
        ask_wa: "Chat on WhatsApp",
        ask_contact: "Contact page",
    },

    hi: {
        seo_title: "सभी सेवाएं",
        seo_description:
            "आरंभ की सरकारी दस्तावेज़ीकरण और रोज़मर्रा की सेवाओं की सूची देखें — शुरुआती शुल्क और सरल भाषा में मार्गदर्शन के साथ।",

        kicker: "सेवा सूची",
        h1_pre: "सेवा चुनिए।",
        h1_em: "कागज़ी काम हम संभालेंगे।",
        lead: (n) =>
            `${n} सरकारी और रोज़मर्रा की सेवाएं — सरल भाषा में समझाई गईं और शुरुआती शुल्क पहले से स्पष्ट। किसी भी सेवा को खोलकर देखें कि क्या चाहिए और प्रक्रिया कैसे चलती है।`,

        steps_title: "प्रक्रिया कैसे चलती है",
        steps: [
            { title: "सेवा चुनें", text: "देखें कि सेवा में क्या शामिल है और कौन-से दस्तावेज़ चाहिए।" },
            { title: "दस्तावेज़ भेजें", text: "साफ़ प्रतियां WhatsApp पर हमारी टीम को भेजें।" },
            { title: "डिजिटल रूप में पाएं", text: "आपका दस्तावेज़ या पावती WhatsApp और ईमेल पर पहुंचा दी जाती है।" },
        ],

        rail_title: "श्रेणी के अनुसार देखें",
        rail_all: "सभी सेवाएं",
        help_title: "तय नहीं कर पा रहे कि कौन-सी सेवा चाहिए?",
        help_text: "अपनी स्थिति बताइए — हमारी टीम आपको सही सेवा तक पहुंचाएगी।",
        help_cta: "WhatsApp पर पूछें",

        search_label: "सेवाएं खोजें",
        search_placeholder: "आधार, पैन, पासपोर्ट खोजें…",
        search_clear: "खोज साफ़ करें",
        sort_label: "क्रम",
        sort_options: {
            recommended: "अनुशंसित",
            "price-asc": "शुल्क: कम से ज़्यादा",
            "price-desc": "शुल्क: ज़्यादा से कम",
            name: "नाम: अ से ज्ञ",
        },
        count: (shown, total) => `${total} में से ${shown} सेवाएं दिखाई जा रही हैं`,
        reset: "फ़िल्टर हटाएं",

        starting_at: "शुरुआती शुल्क",
        view_details: "विवरण देखें",

        empty_title: "आपकी खोज से कोई सेवा मेल नहीं खाती",
        empty_text: "कोई दूसरा शब्द आज़माएं, या बताइए आपको क्या चाहिए — हम मार्गदर्शन करेंगे।",
        empty_clear: "खोज साफ़ करें",
        empty_ask: "हमारी टीम से पूछें",

        promise: [
            { title: "शुल्क पहले से स्पष्ट", text: "शुरू करने से पहले शुरुआती शुल्क देखें।" },
            { title: "सरल भाषा में मार्गदर्शन", text: "दस्तावेज़ और चरण आसान शब्दों में समझाए जाते हैं।" },
            { title: "100% डिजिटल डिलीवरी", text: "सब कुछ WhatsApp और ईमेल पर पहुंचाया जाता है।" },
            { title: "हिंदी और अंग्रेज़ी", text: "जिस भाषा में सहज हों, उसी में बात करें।" },
        ],

        ask_title: "अब भी कोई सवाल है?",
        ask_text: "हमारी टीम हर दिन उपलब्ध है — बताइए आप कहां अटके हैं।",
        ask_wa: "WhatsApp पर बात करें",
        ask_contact: "संपर्क पेज",
    },
};

export default pageCopy;
