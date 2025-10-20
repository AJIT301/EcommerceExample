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
        { value: 'LT', label: 'Lietuvių'},
        { value: 'UA', label: 'Українська' },
        { value: 'NL', label: 'Nederlands' },
    ];

    return (
        <header data-testid="header" className={cx(styles.header, styles[theme])}>
            <p data-testid="header-title">{t('header.title')}</p>
            <nav data-testid="nav" className={cx(styles.nav, styles[theme])}>
                <a data-testid="nav-menu" href="#">{t('header.nav.menu')}</a>
                <a data-testid="nav-shop" href="#">{t('header.nav.shop')}</a>
                <a data-testid="nav-contact" href="#">{t('header.nav.contact')}</a>
                <a data-testid="nav-aboutUs" href="#">{t('header.nav.aboutUs')}</a>
            </nav>

            <div data-testid="button-group" className={cx(styles.buttonGroup)}>
                <button
                    data-testid="theme-toggle-button"
                    className={cx(styles.buttonTheme, styles[theme])}
                    onClick={toggleTheme}
                >
                    {t('header.themeButton')}{theme === 'light' ? ' Light' : ' Dark'}
                </button>

                <select
                    data-testid="language-select"
                    title='Language'
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                    className={cx(styles.langSelect, styles[theme])}
                >
                    {languages.map(({ value, label }) => (
                        <option data-testid={`language-option-${value}`} key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
}
