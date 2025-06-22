import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code2, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { getThemeAwareProjects } from '../data/projects';
import TechIcon from '../components/TechIcon';

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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: 'rgb(var(--background))',
      backgroundImage: theme === 'cyberpunk' ? 
        'radial-gradient(circle at 20% 50%, rgba(var(--primary), 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--secondary), 0.05) 0%, transparent 50%)' :
        theme === 'witcher' ?
        'radial-gradient(circle at 30% 80%, rgba(var(--highlight), 0.03) 0%, transparent 60%)' :
        undefined
    }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors hover:opacity-80"
            style={{ color: 'rgb(var(--primary))' }}
          >
            <ArrowLeft className="w-4 h-4" />
            {getThemeText('backToProjects')}
          </Link>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Project Image */}
            <div className="flex-shrink-0">
              <div 
                className={`relative rounded-lg overflow-hidden ${theme === 'cyberpunk' ? 'glow-primary' : ''}`}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  aspectRatio: '16/10',
                  backgroundColor: 'rgba(var(--neutral), 0.1)',
                  border: '1px solid rgba(var(--neutral), 0.2)'
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/500x312/666666/ffffff?text=${encodeURIComponent(project.name)}`;
                  }}
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1 min-w-0">
              <div className="mb-4">              <h1 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ 
                  background: theme === 'cyberpunk' 
                    ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--secondary)))'
                    : theme === 'witcher'
                    ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--amber)))'
                    : theme === 'dark'
                    ? 'linear-gradient(135deg, rgb(var(--violet)), rgb(var(--emerald)))'
                    : 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--teal)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                  {project.name}
                </h1>
                {project.featured && (
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: 'rgba(var(--highlight), 0.9)',
                      color: 'rgb(var(--background))'
                    }}
                  >
                    {getThemeIcon()}
                    <span className="ml-2">
                      {theme === 'cyberpunk' ? 'FEATURED SYSTEM' : 
                       theme === 'witcher' ? 'LEGENDARY QUEST' : 
                       'Featured Project'}
                    </span>
                  </div>
                )}
              </div>

              <p 
                className="text-lg mb-6 leading-relaxed"
                style={{ color: 'rgb(var(--text-light))' }}
              >
                {project.description}
              </p>

              {/* Project Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-4">                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-orange"
                      style={{
                        background: theme === 'cyberpunk' 
                          ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--secondary)))'
                          : theme === 'witcher'
                          ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--amber)))'
                          : 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--teal)))',
                        color: 'rgb(var(--background))',
                        boxShadow: theme === 'cyberpunk' ? 'var(--glow-primary)' : undefined
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {getThemeText('viewLive')}
                    </a>
                  )}                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border transition-all hover:scale-105 shadow-violet"
                      style={{
                        borderColor: theme === 'cyberpunk' 
                          ? 'rgba(var(--accent), 0.4)'
                          : theme === 'witcher'
                          ? 'rgba(var(--amber), 0.4)'
                          : 'rgba(var(--violet), 0.3)',
                        background: theme === 'cyberpunk' 
                          ? 'linear-gradient(135deg, rgba(var(--accent), 0.1), rgba(var(--highlight), 0.1))'
                          : theme === 'witcher'
                          ? 'linear-gradient(135deg, rgba(var(--amber), 0.1), rgba(var(--highlight), 0.1))'
                          : 'linear-gradient(135deg, rgba(var(--violet), 0.1), rgba(var(--emerald), 0.1))',
                        color: theme === 'cyberpunk' 
                          ? 'rgb(var(--accent))'
                          : theme === 'witcher'
                          ? 'rgb(var(--amber))'
                          : 'rgb(var(--violet))'
                      }}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 
                className="text-2xl font-bold mb-4"
                style={{ color: 'rgb(var(--primary))' }}
              >
                {getThemeText('overview')}
              </h2>
              <div 
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'rgba(var(--background), 0.8)',
                  border: '1px solid rgba(var(--neutral), 0.2)'
                }}
              >
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: 'rgb(var(--text))' }}
                >
                  {project.description} This project demonstrates modern web development practices, 
                  responsive design principles, and clean, maintainable code architecture. 
                  The implementation focuses on user experience, performance optimization, 
                  and scalable development patterns.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 
                className="text-2xl font-bold mb-4"
                style={{ color: 'rgb(var(--primary))' }}
              >
                {getThemeText('features')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg flex items-center gap-3"
                    style={{
                      backgroundColor: 'rgba(var(--background), 0.8)',
                      border: '1px solid rgba(var(--neutral), 0.2)'
                    }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'rgb(var(--highlight))' }}
                    />
                    <span style={{ color: 'rgb(var(--text))' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <section>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: 'rgb(var(--primary))' }}
              >
                {getThemeText('technologies')}
              </h3>
              <div 
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'rgba(var(--background), 0.8)',
                  border: '1px solid rgba(var(--neutral), 0.2)'
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg transition-colors hover:bg-opacity-80"
                      style={{ backgroundColor: 'rgba(var(--neutral), 0.1)' }}
                    >
                      <TechIcon
                        tech={tech.toLowerCase()}
                        size={32}
                        variant={getThemeVariant()}
                      />
                      <span 
                        className="text-sm text-center font-medium"
                        style={{ color: 'rgb(var(--text))' }}
                      >
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Project Stats */}
            <section>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: 'rgb(var(--primary))' }}
              >
                Project Info
              </h3>
              <div 
                className="p-6 rounded-lg space-y-4"
                style={{
                  backgroundColor: 'rgba(var(--background), 0.8)',
                  border: '1px solid rgba(var(--neutral), 0.2)'
                }}
              >
                <div>
                  <span 
                    className="text-sm font-medium block mb-1"
                    style={{ color: 'rgb(var(--text-light))' }}
                  >
                    Status
                  </span>
                  <span 
                    className="text-sm font-semibold"
                    style={{ color: 'rgb(var(--highlight))' }}
                  >
                    {project.liveUrl ? 'Live & Deployed' : 'In Development'}
                  </span>
                </div>
                <div>
                  <span 
                    className="text-sm font-medium block mb-1"
                    style={{ color: 'rgb(var(--text-light))' }}
                  >
                    Type
                  </span>
                  <span 
                    className="text-sm"
                    style={{ color: 'rgb(var(--text))' }}
                  >
                    {project.techStack.includes('Node.js') ? 'Full Stack' : 'Frontend'}
                  </span>
                </div>
                <div>
                  <span 
                    className="text-sm font-medium block mb-1"
                    style={{ color: 'rgb(var(--text-light))' }}
                  >
                    Technologies
                  </span>
                  <span 
                    className="text-sm"
                    style={{ color: 'rgb(var(--text))' }}
                  >
                    {project.techStack.length} Technologies
                  </span>
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
