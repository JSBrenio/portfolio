import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft, Search } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import '../styles/NotFound.css';

const NotFound = () => {
  const { theme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'cyberpunk':
        return <AlertTriangle className="error-icon cyberpunk" />;
      case 'witcher':
        return <AlertTriangle className="error-icon witcher" />;
      default:
        return <AlertTriangle className="error-icon default" />;
    }
  };

  const getThemeText = () => {
    switch (theme) {
      case 'cyberpunk':
        return {
          title: 'SYSTEM ERROR 404',
          subtitle: 'Neural pathway not found',
          description: 'The requested data stream could not be located in the matrix. The connection may have been severed or the data corrupted.',
          homeText: 'Return to Main Terminal',
          projectsText: 'Browse Available Systems'
        };
      case 'witcher':
        return {
          title: 'Quest Not Found',
          subtitle: 'The path has gone cold',
          description: 'The trail you seek has vanished like morning mist. Perhaps this quest was never meant to be, or the winds of time have scattered its traces.',
          homeText: 'Return to the Tavern',
          projectsText: 'Browse Other Quests'
        };
      default:
        return {
          title: 'Page Not Found',
          subtitle: 'Error 404',
          description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
          homeText: 'Go Home',
          projectsText: 'View Projects'
        };
    }
  };

  const themeText = getThemeText();

  return (
    <div className={`not-found-container ${theme}`}>
      <div className="not-found-content">
        <div className="error-visual">
          {getThemeIcon()}
          <div className="error-code">404</div>
        </div>
        
        <div className="error-text">
          <h1 className="error-title">{themeText.title}</h1>
          <h2 className="error-subtitle">{themeText.subtitle}</h2>
          <p className="error-description">{themeText.description}</p>
        </div>

        <div className="error-actions">
          <Link to="/" className="action-button primary">
            <Home size={20} />
            {themeText.homeText}
          </Link>
          <Link to="/projects" className="action-button secondary">
            <Search size={20} />
            {themeText.projectsText}
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="action-button tertiary"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="error-footer">
          <p>If you believe this is an error, please <Link to="/contact">contact me</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
