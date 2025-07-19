import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Theme, ThemeContextType } from '../types/theme';
import { themes } from '../types/theme';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    return savedTheme && themes.some(t => t.name === savedTheme) ? savedTheme : 'dark';
  });

  useEffect(() => {
    // Apply theme to document body
    document.body.className = theme;
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
