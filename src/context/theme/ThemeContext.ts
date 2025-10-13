// src/context/theme/ThemeContext.ts
import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('...');
    return context;
}
// Initialize with undefined — will be provided by ThemeProvider
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;