// LanguageProvider.tsx
import { useState, type ReactNode } from 'react';
import LanguageContext, { type LanguageContextType, type SupportedLanguage } from './LangContext';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<SupportedLanguage>('EN');
    const [showFlags, setShowFlags] = useState(true);

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