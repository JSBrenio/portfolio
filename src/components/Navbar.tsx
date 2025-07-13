import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Zap, Sword, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

const themeIcons = {
  light: Sun,
  dark: Moon,
  witcher: Sword,
  cyberpunk: Zap,
};

const Navbar = () => {
  const { theme, setTheme, themes } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Calculate active states once
  const activeStates = {
    home: isActive('/'),
    about: isActive('/about'),
    projects: isActive('/projects'),
    resume: isActive('/resume'),
    contact: isActive('/contact'),
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">        
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <h2 className="navbar-brand-text">
            JSBrenio
          </h2>
        </div>
        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${activeStates.home ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${activeStates.about ? 'active' : ''}`}>About</Link>
          <Link to="/projects" className={`nav-link ${activeStates.projects ? 'active' : ''}`}>Projects</Link>
          <Link to="/resume" className={`nav-link ${activeStates.resume ? 'active' : ''}`}>Resume</Link>
          <Link to="/contact" className={`nav-link ${activeStates.contact ? 'active' : ''}`}>Contact</Link>
        </div>        
        {/* Theme Toggles */}
        <div className="theme-toggles">
          {themes.map((themeOption) => {
            const IconComponent = themeIcons[themeOption.name as keyof typeof themeIcons];
            return (
              <button
                key={themeOption.name}
                className={`theme-toggle ${theme === themeOption.name ? 'active' : ''}`}
                onClick={() => setTheme(themeOption.name)}
                title={`Switch to ${themeOption.label} theme`}
              >
                <IconComponent size={18} />
                <span className="theme-toggle-label">{themeOption.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (        
        <div className="mobile-menu">
          <div className="mobile-nav-links">
            <Link to="/" className={`mobile-nav-link ${activeStates.home ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={`mobile-nav-link ${activeStates.about ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/projects" className={`mobile-nav-link ${activeStates.projects ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/resume" className={`mobile-nav-link ${activeStates.resume ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Resume
            </Link>
            <Link to="/contact" className={`mobile-nav-link ${activeStates.contact ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
          
          <div className="mobile-theme-toggles">
            <span className="mobile-theme-label">Theme:</span>
            <div className="mobile-theme-buttons">
              {themes.map((themeOption) => {
                const IconComponent = themeIcons[themeOption.name as keyof typeof themeIcons];
                return (
                  <button
                    key={themeOption.name}
                    className={`mobile-theme-toggle ${theme === themeOption.name ? 'active' : ''}`}
                    onClick={() => {
                      setTheme(themeOption.name);
                      setIsMenuOpen(false);
                    }}
                    title={`Switch to ${themeOption.label} theme`}
                  >
                    <IconComponent size={16} />
                    <span>{themeOption.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
