import "./home.css";          // kept: other pages share a few of its global rules
import "./home_v2.css";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "./i18nRouting";
import { withLang } from "./i18nPaths";
import { LanguageContext } from "./LanguageContext";
import SEO from "./components/SEO";
import { orgSchemas } from "./seoSchemas";
import servicesData from "./servicesData";
import ServiceIcon from "./ServiceIcon";

/* Popular cards are read from servicesData, so names, prices and images stay in one place. */
const POPULAR = ["aadhaar-address-update", "new-pan-card", "hsrp", "new-passport"];
const TABS = [
  { en: "Identity", hi: "पहचान", icon: "identity" },
  { en: "Certificates", hi: "प्रमाणपत्र", icon: "certificates" },
  { en: "Business", hi: "व्यापार", icon: "business" },
  { en: "Transport", hi: "परिवहन", icon: "vehicle" },
  { en: "Travel", hi: "यात्रा", icon: "travel" },
  { en: "Insurance", hi: "बीमा", icon: "insurance" },
  { en: "Employment", hi: "रोज़गार", icon: "employment" },
];

const C = {
  en: {
    eyebrow: "Your trusted digital service partner",
    title1: "Government services,", title2: "made simple", title3: "for you.",
    sub: "Apply for Aadhaar, PAN, passport, vehicle and 50+ other services from one place — with expert guidance at every step.",
    trust: [["100% secure", "Your data stays safe"], ["Fast processing", "Quick and reliable"], ["Expert support", "A dedicated team"], ["Verified process", "Checked before submission"]],
    placeholder: "Search a service, e.g. Aadhaar, PAN, HSRP…", search: "Search",
    checks: ["Aadhaar", "PAN Card", "Passport", "GST", "and more…"],
    all: "All services",
    popEyebrow: "Popular services", popTitle: "Start with our most requested services",
    popSub: "Pick a service, fill in your details and we take it from there.", viewAll: "View all services", start: "Get started",
    whyTitle: "Why choose Aarambh?", whySub: "We keep the whole journey clear, careful and easy to follow.",
    why: ["Trusted and verified", "Expert guidance", "Clear process", "Doorstep support"], learn: "Learn more",
    howEyebrow: "How it works", howTitle: "Your service in 4 simple steps",
    how: [["Find your service", "Search or browse and pick what you need."], ["Share details", "Fill a short form and add documents."], ["Pay securely", "Complete the payment online."], ["Track to completion", "We guide you until it is done."]],
    revEyebrow: "Customer stories", revTitle: "Trusted by customers across India",
    helpTitle: "Need help? Message us anytime.", helpSub: "Ask about any service on WhatsApp and our team will reply.", chat: "Chat on WhatsApp",
  },
  hi: {
    eyebrow: "आपका भरोसेमंद डिजिटल सेवा साथी",
    title1: "सरकारी सेवाएं,", title2: "अब आसान", title3: "आपके लिए।",
    sub: "आधार, PAN, पासपोर्ट, वाहन और 50+ अन्य सेवाओं के लिए एक ही जगह आवेदन करें — हर कदम पर विशेषज्ञ मार्गदर्शन के साथ।",
    trust: [["100% सुरक्षित", "आपका डेटा सुरक्षित"], ["तेज़ प्रोसेसिंग", "तेज़ और भरोसेमंद"], ["विशेषज्ञ सहायता", "समर्पित टीम"], ["जांची हुई प्रक्रिया", "जमा करने से पहले जांच"]],
    placeholder: "सेवा खोजें, जैसे आधार, PAN, HSRP…", search: "खोजें",
    checks: ["आधार", "PAN कार्ड", "पासपोर्ट", "GST", "और भी…"],
    all: "सभी सेवाएं",
    popEyebrow: "लोकप्रिय सेवाएं", popTitle: "सबसे ज़्यादा मांगी जाने वाली सेवाओं से शुरू करें",
    popSub: "सेवा चुनें, विवरण भरें, बाकी हम संभाल लेंगे।", viewAll: "सभी सेवाएं देखें", start: "शुरू करें",
    whyTitle: "Aarambh क्यों चुनें?", whySub: "हम पूरी प्रक्रिया को साफ, सावधान और आसान रखते हैं।",
    why: ["भरोसेमंद और सत्यापित", "विशेषज्ञ मार्गदर्शन", "स्पष्ट प्रक्रिया", "डोरस्टेप सहायता"], learn: "और जानें",
    howEyebrow: "कैसे काम करता है", howTitle: "आपकी सेवा 4 आसान चरणों में",
    how: [["सेवा चुनें", "खोजें या ब्राउज़ करें और अपनी ज़रूरत चुनें।"], ["विवरण दें", "छोटा फॉर्म भरें और दस्तावेज़ जोड़ें।"], ["सुरक्षित भुगतान", "ऑनलाइन भुगतान पूरा करें।"], ["पूरा होने तक ट्रैक करें", "काम पूरा होने तक हम साथ हैं।"]],
    revEyebrow: "ग्राहकों की कहानियां", revTitle: "पूरे भारत के ग्राहकों का भरोसा",
    helpTitle: "मदद चाहिए? कभी भी संदेश भेजें।", helpSub: "किसी भी सेवा के बारे में WhatsApp पर पूछें, हमारी टीम जवाब देगी।", chat: "WhatsApp पर चैट करें",
  },
};

const Arrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Tick = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>;
const TRUST_ICONS = [
  <path key="a" d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z M9.5 12l1.8 1.8 3.2-3.6" />,
  <path key="b" d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />,
  <g key="c"><circle cx="9" cy="8" r="3" /><path d="M3 20c.8-3.4 3.2-5 6-5s5.2 1.6 6 5M16 5.5a3 3 0 0 1 0 5.5M18 15c1.8.7 3 2.2 3.5 5" /></g>,
  <g key="d"><circle cx="12" cy="12" r="8.5" /><path d="M8 12.2l2.7 2.7L16.3 9" /></g>,
];
const HOW_ICONS = [
  <g key="a"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></g>,
  <g key="b"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3.5" /></g>,
  <g key="c"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18M7 15h3" /></g>,
  <g key="d"><circle cx="12" cy="12" r="8.5" /><path d="M8 12.2l2.7 2.7L16.3 9" /></g>,
];

/* Original hero artwork: fanned document cards, a progress checklist and a verified seal. */
function HeroArt() {
  return (
    <svg className="hm_art" viewBox="0 0 460 360" role="img" aria-label="Documents being processed">
      <defs>
        <linearGradient id="hmg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFF6DF" /><stop offset="1" stopColor="#F2D9A0" /></linearGradient>
        <linearGradient id="hmg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#EAF6F0" /><stop offset="1" stopColor="#BFE3D2" /></linearGradient>
        <linearGradient id="hmg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0E7A52" /><stop offset="1" stopColor="#05412B" /></linearGradient>
      </defs>
      <circle cx="250" cy="190" r="150" fill="#DDF0E6" />
      <g transform="rotate(-12 150 150)"><rect x="60" y="70" width="200" height="124" rx="14" fill="url(#hmg1)" stroke="#E0C07A" /><circle cx="105" cy="118" r="19" fill="#C3872D" opacity=".85" /><rect x="140" y="104" width="90" height="9" rx="4.5" fill="#B98A3A" opacity=".7" /><rect x="140" y="124" width="64" height="9" rx="4.5" fill="#B98A3A" opacity=".5" /><rect x="80" y="160" width="150" height="8" rx="4" fill="#B98A3A" opacity=".4" /></g>
      <g transform="rotate(6 250 170)"><rect x="150" y="110" width="200" height="124" rx="14" fill="url(#hmg2)" stroke="#9CCDB7" /><rect x="170" y="130" width="46" height="46" rx="10" fill="#076140" opacity=".85" /><rect x="228" y="134" width="96" height="9" rx="4.5" fill="#076140" opacity=".6" /><rect x="228" y="154" width="70" height="9" rx="4.5" fill="#076140" opacity=".4" /><rect x="170" y="196" width="150" height="8" rx="4" fill="#076140" opacity=".3" /></g>
      <g><rect x="250" y="150" width="140" height="180" rx="14" fill="url(#hmg3)" /><rect x="268" y="172" width="104" height="9" rx="4.5" fill="#DFB16B" /><circle cx="150" cy="150" r="0" /></g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(268 ${200 + i * 36})`}>
          <circle cx="10" cy="10" r="10" fill="#DFB16B" /><path d="M5.5 10.3l3 3 6-6.3" fill="none" stroke="#05412B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="28" y="5" width={[70, 56, 64][i]} height="9" rx="4.5" fill="#fff" opacity=".85" />
        </g>
      ))}
      <g transform="translate(70 238)"><circle cx="38" cy="38" r="38" fill="#fff" stroke="#DFB16B" strokeWidth="3" /><path d="M38 14l20 7v14c0 14-8.6 23-20 27-11.4-4-20-13-20-27V21l20-7Z" fill="#076140" /><path d="M29 38l7 7 13-14" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></g>
    </svg>
  );
}

export default function Home() {
  const { language, translations } = useContext(LanguageContext);
  const t = C[language] || C.en;
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const rail = useRef(null);
  const h = translations.home;
  const wa = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`;
  const popular = POPULAR.map((id) => servicesData.find((s) => s.id === id)).filter(Boolean);
  const reviews = ["t1", "t3", "t4", "t2"].map((k) => ({ text: h[k + "_text"], name: h[k + "_name"], role: h[k + "_role"] }));

  const go = (e) => {
    e.preventDefault();
    navigate(withLang("/services", language) + (q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ""));
  };
  const scrollRail = (d) => rail.current?.scrollBy({ left: d * (rail.current.clientWidth * 0.8), behavior: "smooth" });

  return (
    <>
      <SEO title={null} description={h.hero_sub} path="/" jsonLd={orgSchemas(h.hero_sub)} />

      {/* ---------- hero ---------- */}
      <section className="hm_hero">
        <div className="hm_wrap hm_hero-grid">
          <div>
            <span className="hm_eyebrow">{t.eyebrow}</span>
            <h1 className="hm_h1">{t.title1}<br />{t.title2} <em>{t.title3}</em></h1>
            <p className="hm_sub">{t.sub}</p>
            <ul className="hm_trust">
              {t.trust.map(([a, b], i) => (
                <li key={a}><span className="hm_trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{TRUST_ICONS[i]}</svg></span><span><b>{a}</b><small>{b}</small></span></li>
              ))}
            </ul>
            <form className="hm_search" onSubmit={go} role="search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></svg>
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.placeholder} aria-label={t.search} />
              <button type="submit">{t.search} <Arrow /></button>
            </form>
          </div>
          <div className="hm_hero-art">
            <HeroArt />
            <ul className="hm_checks">{t.checks.map((c) => <li key={c}><span><Tick /></span>{c}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* ---------- category tabs ---------- */}
      <div className="hm_wrap">
        <nav className="hm_tabs" aria-label={t.all}>
          <Link to="/services" className="hm_tab hm_tab-on">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></svg>
            <span>{t.all}</span>
          </Link>
          {TABS.map((c) => (
            <Link key={c.en} to={`/services?cat=${encodeURIComponent(c.en)}`} className="hm_tab">
              <span className="hm_tab-ic">
                {c.icon === "certificates"
                  ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></svg>
                  : <ServiceIcon category={c.icon} />}
              </span>
              <span>{c[language] || c.en}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* ---------- popular services ---------- */}
      <section className="hm_sec">
        <div className="hm_wrap hm_pop">
          <div className="hm_pop-copy">
            <span className="hm_kicker">{t.popEyebrow}</span>
            <h2 className="hm_h2">{t.popTitle}</h2>
            <p>{t.popSub}</p>
            <Link to="/services" className="hm_btn hm_btn-line">{t.viewAll} <Arrow /></Link>
          </div>
          <div className="hm_cards">
            {popular.map((s) => (
              <article className="hm_card" key={s.id}>
                <span className="hm_pill">{s.category?.[language]}</span>
                <img src={s.image} alt="" loading="lazy" />
                <h3>{s.name?.[language]}</h3>
                <p>{s.summary?.[language]}</p>
                <strong>{s.price?.[language]}</strong>
                <Link to={`/services/${s.id}`} className="hm_btn hm_btn-solid">{t.start} <Arrow /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- why + how ---------- */}
      <section className="hm_sec hm_sec-tint">
        <div className="hm_wrap hm_duo">
          <div className="hm_why">
            <h2 className="hm_h2">{t.whyTitle}</h2>
            <p>{t.whySub}</p>
            <ul>{t.why.map((w) => <li key={w}><span><Tick /></span>{w}</li>)}</ul>
            <Link to="/about-us" className="hm_btn hm_btn-solid">{t.learn} <Arrow /></Link>
          </div>
          <div className="hm_how">
            <span className="hm_kicker">{t.howEyebrow}</span>
            <h2 className="hm_h2">{t.howTitle}</h2>
            <ol>
              {t.how.map(([a, b], i) => (
                <li key={a}>
                  <span className="hm_how-ic"><em>{i + 1}</em><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{HOW_ICONS[i]}</svg></span>
                  <b>{a}</b><small>{b}</small>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- reviews ---------- */}
      <section className="hm_sec">
        <div className="hm_wrap">
          <div className="hm_rev-head">
            <div><span className="hm_kicker">{t.revEyebrow}</span><h2 className="hm_h2">{t.revTitle}</h2></div>
            <div className="hm_arrows">
              <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous">←</button>
              <button type="button" onClick={() => scrollRail(1)} aria-label="Next">→</button>
            </div>
          </div>
          <div className="hm_rail" ref={rail}>
            {reviews.map((r) => (
              <figure className="hm_rev" key={r.name}>
                <blockquote>{r.text}</blockquote>
                <figcaption>
                  <span className="hm_av">{String(r.name).charAt(0)}</span>
                  <span><b>{r.name}</b><small>{r.role}</small></span>
                  <span className="hm_stars" aria-label="5 stars">★★★★★</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- help band ---------- */}
      <div className="hm_wrap hm_band-wrap">
        <div className="hm_band">
          <span className="hm_band-ic"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.3-3.5A7.96 7.96 0 0 1 4 12Z" /></svg></span>
          <div><h2>{t.helpTitle}</h2><p>{t.helpSub}</p></div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="hm_btn hm_btn-white">{t.chat} <Arrow /></a>
        </div>
      </div>
    </>
  );
}
