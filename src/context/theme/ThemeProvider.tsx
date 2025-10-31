// src/context / theme / ThemeProvider.tsx
import { useState, type ReactNode, useEffect } from 'react';
import ThemeContext, { type Theme, type ThemeContextType } from './ThemeContext';

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme-eshop1') as Theme) || 'dark');
    
    useEffect(() => {
            if (!localStorage.getItem('theme-eshop1')) {
                localStorage.setItem('theme-eshop1', theme);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [] );

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme-eshop1', newTheme);
    };

    const value: ThemeContextType = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
