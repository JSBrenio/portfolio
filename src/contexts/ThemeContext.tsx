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
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    return savedTheme && themes.some(t => t.name === savedTheme) ? savedTheme : 'dark';
  });

  const [useThemedContent, setUseThemedContent] = useState<boolean>(() => {
    // Get themed content preference from localStorage or default to true
    const savedThemedContent = localStorage.getItem('portfolio-themed-content');
    return savedThemedContent !== null ? JSON.parse(savedThemedContent) as boolean : false;
  });

  useEffect(() => {
    // Apply theme to document body
    document.body.className = theme;
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Save themed content preference to localStorage
    localStorage.setItem('portfolio-themed-content', JSON.stringify(useThemedContent));
  }, [useThemedContent]);

  const value = {
    theme,
    setTheme,
    themes,
    useThemedContent,
    setUseThemedContent,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
