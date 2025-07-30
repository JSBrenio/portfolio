import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Zap, Sword, Settings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
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

const ThemeSwitcher = React.memo(({ variant = 'desktop', onThemeChange }: ThemeSwitcherProps) => {
  const { theme, setTheme, themes, useThemedContent, setUseThemedContent } = useTheme();
  const [showSettings, setShowSettings] = useState(false);
  const [highlightSettings, setHighlightSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const highlightTimeoutRef = useRef<number | null>(null);

  const handleThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme);
    onThemeChange?.();
    
    // Highlight settings icon when witcher/cyberpunk themes are selected
    if (newTheme === 'witcher' || newTheme === 'cyberpunk') {
      // Clear any existing timeout
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
      
      // Reset animation by briefly removing the class
      setHighlightSettings(false);
      
      // Force a reflow to ensure the class removal takes effect
      requestAnimationFrame(() => {
        setHighlightSettings(true);
        highlightTimeoutRef.current = setTimeout(() => {
          setHighlightSettings(false);
          highlightTimeoutRef.current = null;
        }, 2000);
      });
    }
  };

  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    };

    if (showSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSettings]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  if (variant === 'mobile') {
    return (
      <div className="mobile-theme-toggles" ref={settingsRef}>
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
          <button
            className={`mobile-theme-settings-button ${highlightSettings ? 'highlight' : ''}`}
            onClick={() => setShowSettings(!showSettings)}
            title="Theme settings"
          >
            <Settings size={16} />
          </button>
        </div>
        
        {showSettings && (
          <div className="mobile-theme-settings">
            <label className="setting-item">
              <input
                type="checkbox"
                checked={useThemedContent}
                onChange={(e) => setUseThemedContent(e.target.checked)}
              />
              <span>Use themed content</span>
            </label>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="theme-switcher" ref={settingsRef}>
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
        <button
          className={`theme-settings-button ${highlightSettings ? 'highlight' : ''}`}
          onClick={() => setShowSettings(!showSettings)}
          title="Theme settings"
        >
          <Settings size={16} />
        </button>
      </div>
      
      {showSettings && (
        <div className="theme-settings">
          <label className="setting-item">
            <input
              type="checkbox"
              checked={useThemedContent}
              onChange={(e) => setUseThemedContent(e.target.checked)}
            />
            <span>Use themed content</span>
          </label>
        </div>
      )}
    </div>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;
