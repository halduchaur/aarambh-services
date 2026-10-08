import "./policy.css";
import { useContext } from "react";
import { Link } from "./i18nRouting";
import { LanguageContext } from "./LanguageContext";
import SEO from "./components/SEO";

/* Shared layout for Refund, Privacy, Delivery and Terms pages.
   A page only passes its content (sections) — the design lives here and in policy.css. */

const L = {
  en: { trust: ["Secure & private", "Transparent process", "Customer first"], support: "Contact support", chat: "Chat on WhatsApp", faqK: "Frequently asked questions", faqT: "Have questions? Find answers here" },
  hi: { trust: ["सुरक्षित और निजी", "पारदर्शी प्रक्रिया", "ग्राहक पहले"], support: "सहायता से संपर्क करें", chat: "WhatsApp पर चैट करें", faqK: "अक्सर पूछे जाने वाले प्रश्न", faqT: "सवाल हैं? जवाब यहां पाएं" },
};

const I = {
  shield: <><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" /><path d="m9 12 2.2 2.2L15.5 10" /></>,
  card: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18M7 15h3" /></>,
  check: <><circle cx="12" cy="12" r="8.5" /><path d="m8.5 12.3 2.4 2.4 4.6-5" /></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14-4L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4l2-2M20 20v-5h-5" /></>,
  cross: <><circle cx="12" cy="12" r="8.5" /><path d="m9 9 6 6M15 9l-6 6" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  list: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3.5" /></>,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  eye: <><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  send: <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3ZM10 13l5-5" />,
  box: <><path d="M3 8 12 3l9 5v8l-9 5-9-5V8Z" /><path d="M3 8l9 5 9-5M12 13v8" /></>,
  scale: <><path d="M12 4v16M6 20h12M5 7h14" /><path d="M5 7 2.5 13a3 3 0 0 0 5 0L5 7ZM19 7l-2.5 6a3 3 0 0 0 5 0L19 7Z" /></>,
  user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c1-4 4-5.5 7-5.5s6 1.5 7 5.5" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>,
};
export const Icon = ({ n, size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{I[n]}</svg>
);

/* Original hero artwork: a shield with a page-specific symbol. */
const GLYPH = {
  refund: <text x="200" y="232" textAnchor="middle" fontSize="92" fontWeight="700" fill="#05412B" fontFamily="Playfair Display, serif">₹</text>,
  privacy: <g fill="none" stroke="#05412B" strokeWidth="9" strokeLinecap="round"><rect x="166" y="188" width="68" height="52" rx="9" fill="#05412B" /><path d="M178 188v-14a22 22 0 0 1 44 0v14" /></g>,
  delivery: <path d="M160 200 246 160 218 250 196 214 160 200Z M196 214 246 160" fill="#05412B" stroke="#05412B" strokeWidth="6" strokeLinejoin="round" />,
  terms: <g fill="none" stroke="#05412B" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"><path d="M200 150v100M160 250h80M170 175h60" /><path d="M170 175l-18 42a20 20 0 0 0 36 0l-18-42ZM230 175l-18 42a20 20 0 0 0 36 0l-18-42Z" /></g>,
};
function Art({ kind }) {
  return (
    <svg className="pl_art" viewBox="0 0 460 340" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="plg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F9D77A" /><stop offset="1" stopColor="#D79A2F" /></linearGradient>
        <linearGradient id="plr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#12895B" /><stop offset="1" stopColor="#05412B" /></linearGradient>
      </defs>
      <circle cx="230" cy="170" r="150" fill="#DCEFE4" />
      <path d="M92 300c-8-50 10-86 52-104-18 30-14 62 6 104H92Z" fill="#A9D6BE" opacity=".75" />
      <path d="M368 300c6-44-6-78-40-98 12 28 8 60-8 98h48Z" fill="#A9D6BE" opacity=".75" />
      <path d="M230 40c58 0 100 18 100 18v96c0 70-48 118-100 140-52-22-100-70-100-140V58s42-18 100-18Z" fill="url(#plr)" />
      <path d="M230 62c44 0 78 13 78 13v78c0 56-38 94-78 112-40-18-78-56-78-112V75s34-13 78-13Z" fill="url(#plg)" />
      <g transform="translate(30 -10)">{GLYPH[kind]}</g>
      <g transform="translate(300 214) rotate(8)"><rect width="104" height="82" rx="10" fill="#fff" stroke="#BFE3D2" /><rect x="14" y="16" width="52" height="7" rx="3.5" fill="#BFE3D2" /><rect x="14" y="32" width="72" height="7" rx="3.5" fill="#D8EBE0" /><circle cx="78" cy="62" r="13" fill="#076140" /><path d="m72 62 4.5 4.5L85 57" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></g>
    </svg>
  );
}

function Card({ n, s }) {
  return (
    <section className={"pl_card" + (s.wide ? " pl_wide" : "")} id={s.id}>
      <div className="pl_card-top"><span className="pl_num">{String(n).padStart(2, "0")}</span><span className="pl_card-ic"><Icon n={s.icon} size={34} /></span></div>
      <h3>{s.title}</h3>
      {s.intro && <p className="pl_p">{s.intro}</p>}
      {s.bullets && <ul className="pl_ul">{s.bullets.map((b, i) => <li key={i}>{b.b && <strong>{b.b} </strong>}{b.t}{b.tag && <span className="pl_tag">{b.tag}</span>}</li>)}</ul>}
      {s.rows && <div className="pl_rows">{s.rows.map((r, i) => <div className={"pl_row pl_" + (r.tone || "n")} key={i}><b>{r.k}</b>{r.v && <p>{r.v}</p>}</div>)}</div>}
      {s.steps && <ol className="pl_steps">{s.steps.map((x, i) => <li key={i}>{x}</li>)}</ol>}
      {s.chip && <span className="pl_chip">{s.chip}</span>}
      {s.callout && <div className="pl_callout">{s.callout}</div>}
    </section>
  );
}

export default function PolicyPage({ seo, kind, copy, lede, badge, badgeDetail, sections, faqs }) {
  const { language } = useContext(LanguageContext);
  const t = L[language] || L.en;
  const wa = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_AUTO_MESSAGE)}`;
  const trustIcons = ["shield", "send", "user"];
  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <div className="pl_page">
        <header className="pl_hero">
          <div className="pl_wrap pl_hero-grid">
            <div>
              <span className="pl_kicker">{copy.kicker}</span>
              <h1>{copy.title}</h1>
              <p className="pl_lede">{lede}</p>
              <ul className="pl_trust">{t.trust.map((x, i) => <li key={x}><Icon n={trustIcons[i]} size={24} />{x}</li>)}</ul>
            </div>
            <Art kind={kind} />
          </div>
        </header>

        <div className="pl_assure"><div className="pl_wrap"><b>{badge}</b><span>{badgeDetail}</span></div></div>

        <div className="pl_wrap pl_body">
          <span className="pl_kicker">{copy.ovKicker}</span>
          <h2 className="pl_h2">{copy.ovTitle}</h2>
          <div className="pl_grid">{sections.map((s, i) => <Card key={i} n={i + 1} s={s} />)}</div>

          <div className="pl_commit">
            <span className="pl_commit-ic"><Icon n="shield" size={46} /></span>
            <div className="pl_commit-txt"><span className="pl_kicker">{copy.cKicker}</span><h3>{copy.cTitle}</h3><p>{copy.cText}</p></div>
            <div className="pl_commit-btns">
              <Link to="/contact-us" className="pl_btn pl_btn-solid">{t.support} →</Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="pl_btn pl_btn-wa">{t.chat}</a>
            </div>
          </div>

          {faqs && (
            <div className="pl_faq">
              <span className="pl_kicker">{t.faqK}</span>
              <h2 className="pl_h2">{t.faqT}</h2>
              {faqs.map((f, i) => (
                <details key={i}><summary><span>{i + 1}. {f.q}</span><i aria-hidden="true">+</i></summary><p>{f.a}</p></details>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
