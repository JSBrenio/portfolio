import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code2, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { getThemeAwareProjects } from '../data/projects';
import TechIcon from '../components/TechIcon';
import MarkdownContent from '../components/MarkdownContent';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { theme } = useTheme();
  
  const projects = getThemeAwareProjects(theme);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const getThemeVariant = () => {
    if (theme === 'dark' || theme === 'cyberpunk') return 'dark';
    return 'light';
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'cyberpunk':
        return <Zap className="w-5 h-5" />;
      case 'witcher':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getThemeText = (key: string) => {
    const texts = {
      overview: {
        cyberpunk: 'System Overview',
        witcher: 'Quest Details',
        default: 'Project Overview'
      },
      technologies: {
        cyberpunk: 'Tech Stack Matrix',
        witcher: 'Magical Components',
        default: 'Technologies Used'
      },
      features: {
        cyberpunk: 'Core Functions',
        witcher: 'Enchantments',
        default: 'Key Features'
      },
      links: {
        cyberpunk: 'Access Points',
        witcher: 'Portals',
        default: 'Project Links'
      },
      viewLive: {
        cyberpunk: 'Access System',
        witcher: 'Enter Realm',
        default: 'View Live'
      },
      viewCode: {
        cyberpunk: 'Inspect Code',
        witcher: 'Study Scrolls',
        default: 'View Code'
      },
      backToProjects: {
        cyberpunk: 'Return to Matrix',
        witcher: 'Back to Quests',
        default: 'Back to Projects'
      }
    };
    
    return texts[key as keyof typeof texts]?.[theme as keyof typeof texts[keyof typeof texts]] || 
           texts[key as keyof typeof texts]?.default || 
           key;
  };

  // Generate some sample features based on the project
  const getProjectFeatures = () => {
    const baseFeatures = [
      'Responsive Design',
      'Modern UI/UX',
      'Performance Optimized',
      'Cross-browser Compatible'
    ];

    if (project.techStack.includes('React')) {
      baseFeatures.push('Component-based Architecture', 'State Management');
    }
    if (project.techStack.includes('TypeScript')) {
      baseFeatures.push('Type Safety', 'Enhanced Developer Experience');
    }
    if (project.techStack.includes('Node.js')) {
      baseFeatures.push('RESTful API', 'Server-side Rendering');
    }
    if (project.techStack.includes('MongoDB') || project.techStack.includes('PostgreSQL')) {
      baseFeatures.push('Database Integration', 'Data Persistence');
    }
    if (project.techStack.includes('Socket.io')) {
      baseFeatures.push('Real-time Communication', 'Live Updates');
    }

    return baseFeatures.slice(0, 6); // Limit to 6 features
  };

  const features = getProjectFeatures();
  return (
    <div className={`project-detail-container ${theme}`}>
      <div className="project-detail-wrapper">
        {/* Header */}
        <div className="project-detail-header">
          <Link
            to="/projects"
            className="back-link"
          >
            <ArrowLeft className="w-4 h-4" />
            {getThemeText('backToProjects')}
          </Link>

          <div className="header-content">
            {/* Project Image */}
            <div className="flex-shrink-0">
              <div className={`project-image-container ${theme}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/500x312/666666/ffffff?text=${encodeURIComponent(project.name)}`;
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
                {project.featured && (
                  <div className="featured-badge">
                    <span className="icon">{getThemeIcon()}</span>
                    <span>
                      {theme === 'cyberpunk' ? 'FEATURED SYSTEM' : 
                       theme === 'witcher' ? 'LEGENDARY QUEST' : 
                       'Featured Project'}
                    </span>
                  </div>
                )}
              </div>

              <p className="project-description">
                {project.description}
              </p>

              {/* Project Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link live-link ${theme}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {getThemeText('viewLive')}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link github-link ${theme}`}
                    >
                      <Github className="w-4 h-4" />
                      {getThemeText('viewCode')}
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
              <h2 className="section-title">
                {getThemeText('overview')}
              </h2>
              <div className="section-content">
                {project.detailedDescription ? (
                  <MarkdownContent 
                    content={project.detailedDescription} 
                    className="project-detail-markdown"
                  />
                ) : (
                  <p className="fallback-content">
                    {project.description} This project demonstrates modern web development practices, 
                    responsive design principles, and clean, maintainable code architecture. 
                    The implementation focuses on user experience, performance optimization, 
                    and scalable development patterns.
                  </p>
                )}
              </div>
            </section>

            {/* Key Features */}
            <section className="section">
              <h2 className="section-title">
                {getThemeText('features')}
              </h2>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-bullet" />
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Technologies */}
            <section className="section">
              <h3 className="section-title-small">
                {getThemeText('technologies')}
              </h3>
              <div className="section-content">
                <div className="tech-grid">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="tech-item">
                      <TechIcon
                        tech={tech.toLowerCase()}
                        size={32}
                        variant={getThemeVariant()}
                      />
                      <span className="tech-name">{tech}</span>
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
                      {project.liveUrl ? 'Live & Deployed' : 'In Development'}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Type</span>
                    <span className="stat-value">
                      {project.techStack.includes('Node.js') ? 'Full Stack' : 'Frontend'}
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
