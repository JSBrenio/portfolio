import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Project } from '../data/projects';
import TechStack from './TechStack';
import '../styles/ProjectCard.css';
import MarkdownContent from './MarkdownContent';

interface ProjectCardProps {
  project: Project;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ProjectCard = ({ 
  project, 
  size = 'medium', 
  className = '' 
}: ProjectCardProps) => {
  const { theme } = useTheme();

  // Format the date from YYYY-MM to "Month Year"
  const formatDate = (dateString: string): string => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getThemeVariant = () => {
    if (theme === 'dark' || theme === 'cyberpunk') return 'dark';
    return 'light';
  };

  return (
    <div
      className={`project-card ${size} ${className} glow-primary`}
    >
      {/* Title Header - Spans full width */}
      <div className={`project-card-title-header ${size}`}>
        <div className="project-card-title-row">
          <h3 className={`project-card-title ${size}`}>
            {project.name}
          </h3>
          <span className="project-card-date">
            {formatDate(project.date)}
          </span>
        </div>
      </div>

      {/* Main Content Area - Image and Description */}
      <div className="project-card-main-content">
        {/* Clickable Image - Left side */}
        <Link to={`/projects/${project.id}`}>
          <div className={`project-card-image-container ${size}`}>
            <img
              src={project.image}
              alt={project.name}
              className="project-card-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/400x250/666666/ffffff?text=${encodeURIComponent(project.name)}`;
              }}
            />
            <div className="project-card-overlay" />
          </div>
        </Link>

        {/* Content - Right side */}
        <div className={`project-card-content ${size}`}>
          {/* Description */}
          <MarkdownContent content={project.description} className={`project-card-description ${size}`}/>
        </div>
      </div>

      {/* Tech Stack Footer - Spans full width */}
      <div className="project-card-tech-footer">
        <TechStack
          technologies={project.techStack}
          size={size === 'small' ? 18 : size === 'medium' ? 20 : 22}
          spacing="sm"
          layout="row"
          showLabels={true}
          variant={getThemeVariant()}
          className="project-card-tech-stack"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
