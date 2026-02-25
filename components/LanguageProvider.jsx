"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const LocaleContext = createContext({});

export function useLocale() {
  return useContext(LocaleContext);
}

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('ar');

  useEffect(() => {
    // Detect locale from URL path
    if (typeof window !== 'undefined') {
      const isEnglish = window.location.pathname.startsWith('/en');
      setLocale(isEnglish ? 'en' : 'ar');
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export { LocaleContext };
