/* Pure URL/language helpers (no React) — also used by scripts/prerender.js */
export const HI_PREFIX = "/hi";

export function langFromPath(pathname = "/") {
  return pathname === HI_PREFIX || pathname.startsWith(HI_PREFIX + "/") ? "hi" : "en";
}

// "/hi/services/x" -> "/services/x" ; "/hi" -> "/"
export function stripLang(pathname = "/") {
  if (langFromPath(pathname) === "hi") {
    const rest = pathname.slice(HI_PREFIX.length);
    return rest === "" ? "/" : rest;
  }
  return pathname || "/";
}

// ("/services", "hi") -> "/hi/services" ; ("/", "hi") -> "/hi"
export function withLang(path = "/", lang = "en") {
  const clean = stripLang(path);
  if (lang !== "hi") return clean;
  return clean === "/" ? HI_PREFIX : HI_PREFIX + clean;
}

