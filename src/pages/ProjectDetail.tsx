import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { realProjects } from '../data/projects';
import { getProjectDetailContent } from '../data/text';
import TechIcon from '../components/TechIcon';
import MarkdownContent from '../components/MarkdownContent';
import ProjectNotFound from './ProjectNotFound';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { theme, useThemedContent } = useTheme();
  const content = getProjectDetailContent(theme, useThemedContent);
  const projects = realProjects;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <ProjectNotFound />;
  }

  // Format the date from YYYY-MM to "Month Year"
  const formatDate = (dateString: string): string => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className={`project-detail-container ${theme}`}>
      <div className="project-detail-wrapper">
        {/* Header */}
        <div className="project-detail-header">
          <Link
            to="/projects"
            className="back-link"
          >
            <ArrowLeft className="icon-sm" />
            {content.actions.backToProjects}
          </Link>

          <div className="header-content">
            {/* Project Image */}
            <div className="flex-shrink-none">
              <div className={`project-image-container ${theme}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/plz.jpg';
                  }}
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="project-info">
              <div className="project-title-section">
                <h1 className={`project-title ${theme}`}>
                  {project.name}
                </h1>
                <div className="project-date">
                  <Calendar className="icon-sm" />
                  <span>{formatDate(project.date)}</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span className="icon"><Code2 className="icon-md" /></span>
                    <span className='featured-badge-text'>
                      {content.featured.badge}
                    </span>
                  </div>
                )}
              </div>

              <MarkdownContent content={project.description} className='project-description'/>
              

              {/* Project Links */}
              {(project.liveUrl ?? project.githubUrl) && (
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link live-link ${theme}`}
                    >
                      <ExternalLink className="icon-sm" />
                      {content.actions.viewLive}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link github-link ${theme}`}
                    >
                      <Github className="icon-sm" />
                      {content.actions.viewCode}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>        
        <div className="main-grid">
          {/* Main Content */}
          <div className="main-content">
            {/* Overview */}
            <section className="section">
              <h2 className="project-section-title">
                {content.sections.overview}
              </h2>
              <div className="section-content">
                {project.detailedDescription ? (
                  <MarkdownContent 
                    content={project.detailedDescription} 
                    className="project-detail-markdown"
                  />
                ) : (
                  <p className="fallback-content">
                    Sorry! Either the project&apos;s content was malformed or I haven&apos;t created one!
                  </p>
                )}
              </div>
            </section>

            {/* Key Features */}
            <section className="section">
              <h2 className="project-section-title">
                {content.sections.features}
              </h2>
              <div className="features-grid">
                {project.keyFeatures ? (
                  project.keyFeatures.map((feature: string, index: number) => (
                    <div key={index} className="feature-item">
                      <div className="feature-bullet" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))
                ) : (
                  <p className="fallback-content">
                    No key features specified for this project.
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Technologies */}
            <section className="section">
              <h3 className="section-title-small">
                {content.sections.technologies}
              </h3>
              <div className="section-content">
                <div className="tech-grid">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="project-detail-tech-item">
                      <TechIcon
                        tech={tech.toLowerCase()}
                        size={32}
                      />
                      <span className="project-detail-tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Project Stats */}
            <section className="section">
              <h3 className="section-title-small">
                Project Info
              </h3>
              <div className="section-content">
                <div className="project-stats">
                  <div className="stat-item">
                    <span className="stat-label">Status</span>
                    <span className="stat-value highlight">
                      {project.status ?? "TBD"}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Type</span>
                    <span className="stat-value">
                      {project.projectType ?? "TBD"}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Technologies</span>
                    <span className="stat-value">
                      {project.techStack.length} Technologies
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
