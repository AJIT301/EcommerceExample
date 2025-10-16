import cx from 'classnames';
import styles from '../styles/Header.module.css';
import { useTheme } from '../context/theme/ThemeContext';
import { useLanguage } from '../context/language/LangContext';
import { useTranslation } from '../Hooks/useTranslation';
import type { SupportedLanguage } from '../context/language/LangContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const t = useTranslation();

    const languages: { value: SupportedLanguage; label: string }[] = [
        { value: 'EN', label: 'English' },
        { value: 'LT', label: 'Lietuviškai'},
        { value: 'UA', label: 'Українська' },
        { value: 'NL', label: 'Nederlands' },
    ];

    return (
        <header className={cx(styles.header, styles[theme])}>
            <p>{t('header.title')}</p>
            <nav className={cx(styles.nav, styles[theme])}>
                <a href="#">{t('header.nav.menu')}</a>
                <a href="#">{t('header.nav.shop')}</a>
                <a href="#">{t('header.nav.contact')}</a>
                <a href="#">{t('header.nav.aboutUs')}</a>
            </nav>

            <div className={cx(styles.buttonGroup)}>
                <button
                    className={cx(styles.buttonTheme, styles[theme])}
                    onClick={toggleTheme}
                >
                    {t('header.themeButton')}{theme === 'light' ? ' Light' : ' Dark'}
                </button>

                <select
                    title='Language'
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                    className={cx(styles.langSelect, styles[theme])}
                >
                    {languages.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
}
