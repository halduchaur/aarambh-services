import { createContext, useState } from "react";

import en from "./locales/en";
import hi from "./locales/hi";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const translations = language === "en" ? en : hi;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};