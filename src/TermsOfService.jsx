import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import PolicyPage from "./PolicyPage";

const COPY = {
  en: { kicker: "Terms of service", title: "Terms of Service", ovKicker: "Terms overview", ovTitle: "Key points of our terms of service", cKicker: "Our commitment", cTitle: "Clear terms, no surprises", cText: "Not sure about something in these terms? Our team is happy to help." },
  hi: { kicker: "सेवा की शर्तें", title: "सेवा की शर्तें", ovKicker: "शर्तों का सार", ovTitle: "हमारी सेवा शर्तों के मुख्य बिंदु", cKicker: "हमारा वादा", cTitle: "साफ शर्तें, कोई छुपी बात नहीं", cText: "इन शर्तों में कुछ समझ न आए तो हमारी टीम मदद के लिए तैयार है।" },
};

const TermsOfService = () => {
  const { language, translations } = useContext(LanguageContext);
  const m = translations.terms, c = COPY[language] || COPY.en;
  const sections = [
    { icon: "doc", id: "services-description", title: m.c1_title, intro: <>{m.c1_body_pre} <strong>{m.c1_body_not}</strong> {m.c1_body_post}</> },
    { icon: "user", id: "user-representations", title: m.c2_title, intro: m.c2_intro, callout: m.c2_callout,
      bullets: [{ t: m.c2_i1 }, { b: m.c2_i2_b, t: m.c2_i2 }, { b: m.c2_i3_b, t: m.c2_i3 }] },
    { icon: "card", id: "payment-fees", title: m.c3_title, intro: m.c3_body },
    { icon: "shield", id: "limitation-of-liability", title: m.c4_title, bullets: [1, 2, 3].map((i) => ({ t: m[`c4_i${i}`] })),
      intro: <>{m.c4_intro_pre} <strong className="pl_hl pl_hl-red">{m.c4_intro_em}</strong> {m.c4_intro_post}</> },
    { icon: "lock", id: "intellectual-property", title: m.c5_title, intro: m.c5_body },
    { icon: "scale", id: "governing-law", title: m.c6_title, rows: [{ k: m.c6_law_label, v: m.c6_law_value, tone: "n" }, { k: m.c6_juris_label, v: m.c6_juris_value, tone: "n" }] },
  ];
  return (
    <PolicyPage kind="terms" copy={c} lede={m.intro} badge={m.badge} badgeDetail={m.badge_detail} sections={sections}
      seo={{ path: "/terms", title: language === "hi" ? "सेवा की शर्तें" : "Terms of Service", description: language === "hi" ? "आरंभ की मार्गदर्शन, दस्तावेज़ीकरण और सरकारी सेवा सहायता के उपयोग की नियम व शर्तें।" : "Terms and conditions for using Aarambh's guidance, documentation and government service assistance." }} />
  );
};
export default memo(TermsOfService);
