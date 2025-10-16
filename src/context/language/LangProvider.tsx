// LanguageProvider.tsx
import { useState, useEffect, type ReactNode } from 'react';
import LanguageContext, { type LanguageContextType, type SupportedLanguage } from './LangContext';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<SupportedLanguage>('EN');
    const [showFlags, setShowFlags] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem('language') as SupportedLanguage;
        if (saved) setLanguageState(saved);
    }, []);

    const setLanguage = (lang: SupportedLanguage) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const toggleFlags = () => setShowFlags(!showFlags);

    const value: LanguageContextType = {
        language,
        setLanguage,
        showFlags,
        toggleFlags,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}
