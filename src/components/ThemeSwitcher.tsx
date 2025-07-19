import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Zap, Sword } from 'lucide-react';
import '../styles/ThemeSwitcher.css';

const themeIcons = {
  light: Sun,
  dark: Moon,
  witcher: Sword,
  cyberpunk: Zap,
};

interface ThemeSwitcherProps {
  variant?: 'desktop' | 'mobile';
  onThemeChange?: () => void;
}

const ThemeSwitcher = ({ variant = 'desktop', onThemeChange }: ThemeSwitcherProps) => {
  const { theme, setTheme, themes } = useTheme();

  const handleThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme);
    onThemeChange?.();
  };

  if (variant === 'mobile') {
    return (
      <div className="mobile-theme-toggles">
        <span className="mobile-theme-label">Theme:</span>
        <div className="mobile-theme-buttons">
          {themes.map((themeOption) => {
            const IconComponent = themeIcons[themeOption.name as keyof typeof themeIcons];
            return (
              <button
                key={themeOption.name}
                className={`mobile-theme-toggle ${theme === themeOption.name ? 'active' : ''}`}
                onClick={() => handleThemeChange(themeOption.name)}
                title={`Switch to ${themeOption.label} theme`}
              >
                <IconComponent size={16} />
                <span>{themeOption.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="theme-toggles">
      {themes.map((themeOption) => {
        const IconComponent = themeIcons[themeOption.name as keyof typeof themeIcons];
        return (
          <button
            key={themeOption.name}
            className={`theme-toggle ${theme === themeOption.name ? 'active' : ''}`}
            onClick={() => handleThemeChange(themeOption.name)}
            title={`Switch to ${themeOption.label} theme`}
          >
            <IconComponent size={18} />
            <span className="theme-toggle-label">{themeOption.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
