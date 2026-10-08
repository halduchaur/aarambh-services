import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { hasInlineForm } from "./applyFormIds";

/* Application form shown INSIDE a service page (above the FAQs).
   It only renders for services listed in applyFormIds.js, and shows only that service's form.
   The form engine (./aarambh-apply.js) is loaded on demand, so other pages stay light. */
const COPY = {
  en: { title: "Apply for this service", sub: "Fill in your details, pay securely and upload your documents — all on this page." },
  hi: { title: "इस सेवा के लिए आवेदन करें", sub: "विवरण भरें, सुरक्षित भुगतान करें और दस्तावेज़ अपलोड करें — सब कुछ इसी पेज पर।" },
};

export default function InlineApplyForm({ service, language }) {
  const box = useRef(null);
  const { hash } = useLocation();
  const enabled = hasInlineForm(service.id);
  const c = COPY[language] || COPY.en;

  useEffect(() => {
    if (!enabled) return undefined;
    let alive = true;
    import("./aarambh-apply.js").then(() => {
      if (alive && box.current) window.mountAarambhApply(box.current, { id: service.id, lang: language });
    });
    return () => { alive = false; if (window.unmountAarambhApply) window.unmountAarambhApply(); };
  }, [service.id, language, enabled]);

  /* "Apply Now" links point to  /services/<id>#apply-form  */
  useEffect(() => {
    if (!enabled || hash !== "#apply-form") return undefined;
    const t = setTimeout(() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" }), 400);
    return () => clearTimeout(t);
  }, [hash, service.id, enabled]);

  if (!enabled) return null;
  return (
    <section id="apply-form" style={{ margin: "34px 0", scrollMarginTop: 96 }} aria-label={c.title}>
      <h3 className="sp-sub-title">{c.title}</h3>
      <p style={{ margin: "0 0 14px", color: "#557B6D", fontSize: 14, lineHeight: 1.6 }}>{c.sub}</p>
      <div ref={box} />
    </section>
  );
}
