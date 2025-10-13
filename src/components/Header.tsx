import cx from 'classnames';
import styles from '../styles/Header.module.css'
import { useTheme } from '../context/theme/ThemeContext';


export default function Header() {

    const { theme, toggleTheme } = useTheme();

    return (

        <header className={cx(styles.header, styles[theme])}>
            <p>E-commerce Shop</p>
            <nav className={cx(styles.nav, styles[theme])}>
                <a href="#">Menu</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
                <a href="#">About Us</a>
            </nav>

            <button
                className={cx(styles.buttonTheme, styles[theme])}
                onClick={toggleTheme}>Mode:
                {theme === 'light' ? ' Light' : ' Dark'}
            </button>

        </header>
    )
}
