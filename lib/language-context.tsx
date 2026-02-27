"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("egel-lang") as Locale | null;
    if (saved === "en" || saved === "fr") {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("egel-lang", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
