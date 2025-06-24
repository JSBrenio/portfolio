import { useTheme } from '../hooks/useTheme';
import ProjectCard from '../components/ProjectCard';
import { getThemeAwareProjects } from '../data/projects';
import { getTextContent } from '../data/textContent';
import '../styles/Projects.css';

const Projects = () => {
  const { theme } = useTheme();
  const textContent = getTextContent(theme);
  const projects = getThemeAwareProjects(theme);
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className={`projects-title ${theme} ${theme === 'cyberpunk' ? 'glow-primary' : ''}`}>
          {textContent.pages.projects.title}
        </h1>
        <p className="projects-subtitle">
          {textContent.pages.projects.subtitle}
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="projects-section">
          <h2 className={`projects-section-title ${theme} ${theme === 'cyberpunk' ? 'glow-secondary' : ''}`}>
            {textContent.pages.projects.sections.featured}
          </h2>          
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                size="large"
                className="shadow-orange"
              />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="projects-section">
          <h2 className={`projects-section-title ${theme} ${theme === 'cyberpunk' ? 'glow-accent' : ''}`}>
            {textContent.pages.projects.sections.other}
          </h2>          
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                size="medium"
                className="shadow-emerald"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
