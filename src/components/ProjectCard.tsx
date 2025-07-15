import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import TechStack from './TechStack';
import '../styles/ProjectCard.css';

export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string; // New field for markdown content
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

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
        <h3 className={`project-card-title ${size}`}>
          {project.name}
        </h3>
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
          <p className={`project-card-description ${size}`}>
            {project.description}
          </p>

          {/* Action Links */}
          <div className="project-card-actions">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card-link primary"
              >
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card-link secondary"
              >
                View Code
              </a>
            )}
          </div>
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
