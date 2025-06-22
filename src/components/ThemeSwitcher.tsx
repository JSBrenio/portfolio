import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Zap } from 'lucide-react';
import '../styles/ThemeSwitcher.css';

const themeIcons = {
  light: Sun,
  dark: Moon,
  cyberpunk: Zap,
};

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="theme-switcher">
      <label className="theme-label">Theme:</label>
      <div className="theme-options">
        {themes.map((themeOption) => {
          const IconComponent = themeIcons[themeOption.name];
          return (
            <button
              key={themeOption.name}
              className={`theme-button ${theme === themeOption.name ? 'active' : ''}`}
              onClick={() => setTheme(themeOption.name)}
              title={themeOption.description}
            >
              <div className="theme-icon-container">
                <IconComponent 
                  size={20} 
                  className={`theme-icon ${themeOption.name}`}
                />
              </div>
              <span className="theme-name">{themeOption.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
