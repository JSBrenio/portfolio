import { useTheme } from '../hooks/useTheme';
import ProjectCard from '../components/ProjectCard';
import { getThemeAwareProjects } from '../data/projects';
import { getProjectsContent } from '../data/text';
import '../styles/Projects.css';

const Projects = () => {
  const { theme } = useTheme();
  const projectsContent = getProjectsContent(theme);
  const projects = getThemeAwareProjects(theme);
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
          <h2 className={`projects-section-title ${theme} glow-secondary`}>
            {projectsContent.sections.featured}
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
          <h2 className={`projects-section-title ${theme} glow-accent`}>
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
      )}
    </div>
  );
};

export default Projects;
