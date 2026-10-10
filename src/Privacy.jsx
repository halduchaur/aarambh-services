import { memo, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import PolicyPage from "./PolicyPage";

const COPY = {
  en: { kicker: "Privacy policy", title: "Your Privacy Matters", ovKicker: "Privacy policy overview", ovTitle: "Key points of our privacy policy", cKicker: "Our commitment", cTitle: "Your information, handled with care", cText: "Questions about how your data is used? Our team is happy to explain." },
  hi: { kicker: "गोपनीयता नीति", title: "आपकी गोपनीयता ज़रूरी है", ovKicker: "गोपनीयता नीति का सार", ovTitle: "हमारी गोपनीयता नीति के मुख्य बिंदु", cKicker: "हमारा वादा", cTitle: "आपकी जानकारी, पूरी सावधानी से", cText: "आपका डेटा कैसे इस्तेमाल होता है, इस बारे में सवाल हैं? हमारी टीम बताने को तैयार है।" },
};

const Privacy = function () {
  const { language, translations } = useContext(LanguageContext);
  const p = translations.privacy, c = COPY[language] || COPY.en;
  const sections = [
    { icon: "doc", id: "introduction", title: p.c1_title, intro: p.c1_body },
    { icon: "eye", id: "information-we-collect", title: p.c2_title, intro: p.c2_intro, bullets: [1, 2, 3].map((i) => ({ b: p[`c2_i${i}_b`], t: p[`c2_i${i}`] })) },
    { icon: "list", id: "how-we-use", title: p.c3_title, intro: p.c3_intro, bullets: [1, 2, 3].map((i) => ({ t: p[`c3_i${i}`] })) },
    { icon: "clock", id: "retention", title: p.c4_title, intro: p.c4_intro, bullets: [1, 2].map((i) => ({ t: p[`c4_i${i}`] })) },
    { icon: "lock", id: "third-party", title: p.c5_title, bullets: [1, 2].map((i) => ({ b: p[`c5_i${i}_b`], t: p[`c5_i${i}`] })),
      intro: <>{p.c5_intro_pre} <strong className="pl_hl">{p.c5_intro_em}</strong> {p.c5_intro_post}</> },
    { icon: "refresh", id: "updates", title: p.c6_title, intro: p.c6_body },
  ];
  return (
    <PolicyPage kind="privacy" copy={c} lede={p.consent} badge={p.badge} badgeDetail={p.badge_detail} sections={sections}
      seo={{ path: "/privacy", title: language === "hi" ? "गोपनीयता नीति" : "Privacy Policy", description: language === "hi" ? "आरंभ आपकी व्यक्तिगत जानकारी और दस्तावेज़ों को कैसे एकत्र, उपयोग और सुरक्षित करता है, जानें।" : "Read how Aarambh collects, uses and protects your personal information and documents when you use our government service guidance." }} />
  );
};
export default memo(Privacy);
