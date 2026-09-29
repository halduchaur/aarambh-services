import { CHATBOT_SERVICE_MAP } from "./chatbotMap";

/* Opens the Aarambh chatbot (built into index.html) with the service already
   selected. Falls back to a WhatsApp message if the chatbot is unavailable or
   does not offer that service. */
export function applyForService(service, language = "en") {
  const botName =
    service.id in CHATBOT_SERVICE_MAP ? CHATBOT_SERVICE_MAP[service.id] : service.name?.en;

  if (typeof window !== "undefined") {
    window.gtag?.("event", "apply_click", { service_id: service.id, language });
  }

  if (botName && typeof window !== "undefined" && typeof window.openAarambhChat === "function") {
    window.openAarambhChat({ service: botName, lang: language });
    return;
  }

  const msg = `Namaste Aarambh! Mujhe "${service.name?.[language] || service.name?.en}" service ke liye apply karna hai.`;
  window.open(
    `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank",
    "noopener,noreferrer"
  );
}
