import { useTheme } from '../hooks/useTheme';
import ProjectCard from '../components/ProjectCard';
import { realProjects } from '../data/projects';
import { getProjectsContent } from '../data/text';
import '../styles/Projects.css';

const Projects = () => {
  const { theme, useThemedContent } = useTheme();
  const projectsContent = getProjectsContent(theme, useThemedContent);
  const projects = realProjects;
  
  // Sort projects by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  const featuredProjects = sortedProjects.filter(project => project.featured);
  const otherProjects = sortedProjects.filter(project => !project.featured);

  return (
    <div className="projects-container">      
      <header className="page-header">
        <h1 className="page-title glow-primary">
          {projectsContent.title}
        </h1>
        <p className="projects-subtitle">
          {projectsContent.subtitle}
        </p>
      </header>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="projects-section">
          <div className={`projects-card featured ${theme}`}>
            <h2 className={`projects-section-title featured`}>
              {projectsContent.sections.featured}
            </h2>          
            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  size="medium"
                  className="shadow-orange"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="projects-section">
          <div className={`projects-card other ${theme}`}>
            <h2 className={`projects-section-title other`}>
              {projectsContent.sections.other}
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
        </div>
      )}
    </div>
  );
};

export default Projects;
