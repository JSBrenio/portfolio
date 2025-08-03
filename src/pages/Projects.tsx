import React, { useMemo } from 'react';
import { useTheme } from '../hooks/useTheme';
import ProjectCard from '../components/ProjectCard';
import { realProjects } from '../data/projects';
import { getProjectsContent } from '../data/text';
import '../styles/Projects.css';
import MarkdownContent from '../components/MarkdownContent';

const Projects = React.memo(() => {
  const { theme, useThemedContent } = useTheme();
  const projectsContent = getProjectsContent(theme, useThemedContent);
  
  // Memoize the sorted projects to prevent recalculation on every render
  const { featuredProjects, otherProjects } = useMemo(() => {
    const sortedProjects = [...realProjects].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    return {
      featuredProjects: sortedProjects.filter(project => project.featured),
      otherProjects: sortedProjects.filter(project => !project.featured)
    };
  }, []); // Empty dependency array since realProjects is static

  return (
    <div className="projects-container">      
      <header className="page-header">
        <h1 className="page-title glow-primary">
          {projectsContent.title}
        </h1>
        <MarkdownContent className="projects-subtitle" content={projectsContent.subtitle}/>

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
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
