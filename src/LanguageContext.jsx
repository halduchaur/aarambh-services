import { createContext, useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import en from "./locales/en";
import hi from "./locales/hi";
import { langFromPath, stripLang, withLang } from "./i18nPaths";

export const LanguageContext = createContext();

/* The language is derived from the URL (/hi/... = Hindi, everything else =
   English). setLanguage() keeps the same page and just switches the URL, so
   every existing `setLanguage("hi")` call in the app keeps working. */
export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const language = langFromPath(location.pathname);
    const translations = language === "en" ? en : hi;

    const setLanguage = useCallback((lang) => {
        if (lang === language) return;
        const target = withLang(stripLang(location.pathname), lang);
        navigate(target + location.search + location.hash);
    }, [language, location.pathname, location.search, location.hash, navigate]);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo(() => ({ language, setLanguage, translations }), [language, setLanguage, translations]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
