import { useLanguage } from '../context/language/LangContext';
import { translations } from '../translations';

export function useTranslation(): (path: string) => any {
    const { language } = useLanguage();

    return (path: string) => {
        const keys = path.split('.');
        let obj: Record<string, any> = translations[language];
        for (const key of keys) {
            obj = obj && key in obj ? obj[key] : undefined;
        }
        return obj !== undefined ? obj : path; // return obj if found, else path
    };
}
