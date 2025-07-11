import { Link } from 'react-router-dom';
import { AlertTriangle, Search, ArrowLeft, Home } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import '../styles/NotFound.css';

const ProjectNotFound = () => {
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
          title: 'PROJECT NOT FOUND',
          subtitle: 'Database query returned null',
          description: 'The requested project file could not be located in the system archives. It may have been deleted, moved, or never existed in this timeline.',
          projectsText: 'Browse Available Projects',
          homeText: 'Return to Main Terminal'
        };
      case 'witcher':
        return {
          title: 'Quest Unavailable',
          subtitle: 'The contract has expired',
          description: 'This particular quest seems to have vanished from the notice board. Perhaps it was completed by another witcher, or the winds of time have blown it away.',
          projectsText: 'Browse Other Contracts',
          homeText: 'Return to the Tavern'
        };
      default:
        return {
          title: 'Project Not Found',
          subtitle: 'The requested project does not exist',
          description: 'The project you are looking for might have been removed, renamed, or never existed. Please check the URL and try again.',
          projectsText: 'View All Projects',
          homeText: 'Go Home'
        };
    }
  };

  const themeText = getThemeText();

  return (
    <div className={`not-found-container ${theme}`}>
      <div className="not-found-content">
        <div className="error-visual">
          {getThemeIcon()}
          <div className="error-code project-error">
            {theme === 'cyberpunk' ? 'NULL' : theme === 'witcher' ? '404' : '404'}
          </div>
        </div>
        
        <div className="error-text">
          <h1 className="error-title">{themeText.title}</h1>
          <h2 className="error-subtitle">{themeText.subtitle}</h2>
          <p className="error-description">{themeText.description}</p>
        </div>

        <div className="error-actions">
          <Link to="/projects" className="action-button primary">
            <Search size={20} />
            {themeText.projectsText}
          </Link>
          <Link to="/" className="action-button secondary">
            <Home size={20} />
            {themeText.homeText}
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
          <p>If you believe this project should exist, please <Link to="/contact">let me know</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectNotFound;
