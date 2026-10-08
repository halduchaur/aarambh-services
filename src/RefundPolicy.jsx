import "./refund.css";   // kept so site-wide rules that other pages may rely on stay unchanged
import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import PolicyPage from "./PolicyPage";

const COPY = {
  en: { kicker: "Refund policy", title: "Our Refund Policy", ovKicker: "Refund policy overview", ovTitle: "Key points of our refund policy", cKicker: "Our commitment", cTitle: "Your satisfaction matters", cText: "We aim for a fair and transparent refund process that keeps your trust.",
    q: ["When can I expect my refund?", "Will I get the full amount back?", "How will I receive the refund?", "What if my refund is not credited?"] },
  hi: { kicker: "रिफंड नीति", title: "हमारी रिफंड नीति", ovKicker: "रिफंड नीति का सार", ovTitle: "हमारी रिफंड नीति के मुख्य बिंदु", cKicker: "हमारा वादा", cTitle: "आपकी संतुष्टि हमारे लिए ज़रूरी है", cText: "हम निष्पक्ष और पारदर्शी रिफंड प्रक्रिया रखते हैं ताकि आपका भरोसा बना रहे।",
    q: ["रिफंड कब तक मिलेगा?", "क्या पूरा पैसा वापस मिलेगा?", "रिफंड कैसे मिलेगा?", "अगर रिफंड क्रेडिट न हो तो?"] },
};

const RefundPolicy = function () {
  const { language, translations } = useContext(LanguageContext);
  const r = translations.refund, c = COPY[language] || COPY.en;
  const row = (k, tone) => ({ k: r[k + "_title"], v: r[k + "_desc"], tone });
  const sections = [
    { icon: "shield", id: "overview", title: r.c1_title, intro: r.c1_intro, bullets: [{ b: r.c1_i1_b, t: r.c1_i1, tag: r.c1_i1_tag }, { b: r.c1_i2_b, t: r.c1_i2 }] },
    { icon: "card", id: "platform-fee", title: r.cfee_title || "Platform Fee on Refunds", chip: r.cfee_chip || "3% platform fee applies to the refundable amount",
      intro: r.cfee_text || "Wherever an amount qualifies for a refund under this policy — whether in full or in part — a platform fee of 3% of the refundable amount is deducted to cover payment-gateway and processing costs. The remaining amount, after this deduction, is transferred back to you using your original payment method." },
    { icon: "check", id: "full-refund", title: r.c2_title, intro: r.c2_intro, rows: [row("c2_s1", "g"), row("c2_s2", "g"), row("c2_s3", "g")] },
    { icon: "refresh", id: "partial-refund", title: r.c3_title, intro: r.c3_intro, rows: [row("c3_s1", "y"), row("c3_s2", "y")] },
    { icon: "cross", id: "non-refundable", title: r.c4_title, intro: r.c4_intro, rows: [row("c4_s1", "r"), row("c4_s2", "r"), row("c4_s3", "r"), row("c4_s4", "r")] },
    { icon: "clock", id: "timeline", title: r.c5_title, rows: [1, 2, 3].map((i) => ({ k: r[`c5_i${i}_label`], v: r[`c5_i${i}_value`], tone: "n" })) },
    { icon: "list", id: "how-to-file", title: r.c6_title, intro: r.c6_intro, steps: [r.c6_s1, r.c6_s2, r.c6_s3], wide: true },
  ];
  const faqs = [
    { q: c.q[0], a: `${r.c5_i1_value} ${r.c5_i3_value}` },
    { q: c.q[1], a: `${r.c2_intro} ${r.c2_s1_title}, ${r.c2_s2_title}, ${r.c2_s3_title}.` },
    { q: c.q[2], a: r.c5_i2_value },
    { q: c.q[3], a: `${r.c6_s2} ${r.c6_s3}` },
  ];
  return (
    <PolicyPage kind="refund" copy={c} lede={r.intro} badge={r.badge} badgeDetail={r.badge_detail} sections={sections} faqs={faqs}
      seo={{ path: "/refund", title: language === "hi" ? "रिफंड नीति" : "Refund Policy", description: language === "hi" ? "आरंभ की सेवा सुविधा शुल्क के लिए रिफंड और रद्दीकरण नीति।" : "Aarambh's refund and cancellation policy for service facilitation charges." }} />
  );
};
export default memo(RefundPolicy);
