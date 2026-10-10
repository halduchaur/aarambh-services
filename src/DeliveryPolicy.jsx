import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import PolicyPage from "./PolicyPage";

const COPY = {
  en: { kicker: "Delivery policy", title: "Our Delivery Policy", ovKicker: "Delivery policy overview", ovTitle: "Key points of our delivery policy", cKicker: "Our commitment", cTitle: "Delivered digitally, kept simple", cText: "Your documents and status updates reach you on WhatsApp and Email." },
  hi: { kicker: "डिलीवरी नीति", title: "हमारी डिलीवरी नीति", ovKicker: "डिलीवरी नीति का सार", ovTitle: "हमारी डिलीवरी नीति के मुख्य बिंदु", cKicker: "हमारा वादा", cTitle: "डिजिटल डिलीवरी, सीधी और आसान", cText: "आपके दस्तावेज़ और स्टेटस अपडेट WhatsApp और ईमेल पर पहुंचते हैं।" },
};

const DeliveryPolicy = function () {
  const { language, translations } = useContext(LanguageContext);
  const d = translations.delivery, c = COPY[language] || COPY.en;
  const sections = [
    { icon: "send", id: "how-we-deliver", title: d.c1_title, intro: d.c1_intro, chip: d.c1_turnaround,
      rows: [{ k: d.c1_wa_title, v: d.c1_wa_desc, tone: "g" }, { k: d.c1_email_title, v: d.c1_email_desc, tone: "g" }] },
    { icon: "box", id: "no-physical-shipping", title: d.c2_title, intro: d.c2_body, bullets: [{ t: d.c2_i1 }], callout: d.c2_callout },
    { icon: "check", id: "service-scope", title: d.c3_title, intro: d.c3_intro, bullets: [1, 2, 3, 4].map((i) => ({ t: d[`c3_i${i}`] })), wide: true },
  ];
  return (
    <PolicyPage kind="delivery" copy={c} lede={d.intro} badge={d.badge} badgeDetail={d.badge_detail} sections={sections}
      seo={{ path: "/delivery", title: language === "hi" ? "डिलीवरी नीति" : "Delivery Policy", description: language === "hi" ? "आरंभ आपको सेवा अपडेट, दस्तावेज़ और आवेदन स्थिति कैसे और कब भेजता है।" : "How Aarambh delivers service updates, documents and application status to you, and expected timelines." }} />
  );
};
export default memo(DeliveryPolicy);
