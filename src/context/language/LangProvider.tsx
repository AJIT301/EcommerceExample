// LanguageProvider.tsx
import { useState, useEffect, type ReactNode } from 'react';
import LanguageContext, { type LanguageContextType, type SupportedLanguage } from './LangContext';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<SupportedLanguage>(() => (localStorage.getItem('language-eshop1') as SupportedLanguage) || 'EN');
    const [showFlags, setShowFlags] = useState(true);

    useEffect(() => {
        if (!localStorage.getItem('language-eshop1')) {
            localStorage.setItem('language-eshop1', language);
            console.log("Language was changed to: " + language)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const setLanguage = (lang: SupportedLanguage) => {
        setLanguageState(lang);
        localStorage.setItem('language-eshop1', lang);
        console.log("Language was set to: " + lang)
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
