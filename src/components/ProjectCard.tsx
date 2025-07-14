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
      {/* Header with title */}
      <div className={`project-card-header ${size}`}>
        <h3 className={`project-card-title ${size}`}>
          {project.name}
        </h3>
        {project.featured && (
          <div className={`project-card-featured-badge ${size} ${theme}`}>
            {theme === 'cyberpunk' ? 'FEATURED' : theme === 'witcher' ? 'LEGENDARY' : 'Featured'}
          </div>
        )}
      </div>

      {/* Clickable Image */}
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

      {/* Content */}
      <div className={`project-card-content ${size}`}>
        <p className={`project-card-description ${size}`}>
          {project.description}
        </p>        {/* Tech Stack using TechStack component with carousel */}
        <div className="project-card-tech-container">
          <TechStack
            technologies={project.techStack}
            size={size === 'small' ? 20 : size === 'medium' ? 24 : 28}
            spacing="md"
            layout="row"
            showLabels={true}
            variant={getThemeVariant()}
            className="project-card-tech-stack"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
