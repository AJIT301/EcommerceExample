// LanguageContext.ts
import { createContext, useContext } from 'react';

export type SupportedLanguage = 'EN' | 'LT' | 'UA' | 'NL';

export interface LanguageContextType {
    language: SupportedLanguage;
    setLanguage: (lang: SupportedLanguage) => void;
    showFlags: boolean;
    toggleFlags: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export default LanguageContext;
