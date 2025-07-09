export type Theme = 'light' | 'dark' | 'witcher' | 'cyberpunk';

export const themes = [
  {
    name: 'light' as Theme,
    label: 'Light',
    description: 'Clean and bright theme',
  },
  { 
    name: 'dark' as Theme,
    label: 'Dark',
    description: 'Modern dark theme'
  },
  {
    name: 'witcher' as Theme,
    label: 'Witcher',
    description: 'Warm medieval fantasy vibes',
  },
  {
    name: 'cyberpunk' as Theme,
    label: 'Cyberpunk',
    description: 'Neon-lit Night City vibes',
  },
];

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { name: Theme; label: string; description: string }[];
}
