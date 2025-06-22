import { useTheme } from '../hooks/useTheme';
import ProjectCard from '../components/ProjectCard';
import { getThemeAwareProjects } from '../data/projects';

const Projects = () => {
  const { theme } = useTheme();
  const projects = getThemeAwareProjects(theme);
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const styles = {
    container: {
      padding: '2rem',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem'
    },    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: theme === 'cyberpunk' 
        ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--secondary)))'
        : theme === 'witcher'
        ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--accent)))'
        : theme === 'dark'
        ? 'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--highlight)))'
        : 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--secondary)))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: 'rgb(var(--text-light))',
      maxWidth: '600px',
      margin: '0 auto'
    },
    section: {
      marginBottom: '3rem'
    },    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: theme === 'cyberpunk' 
        ? 'rgb(var(--secondary))'
        : theme === 'witcher'
        ? 'rgb(var(--accent))'
        : theme === 'dark'
        ? 'rgb(var(--accent))'
        : 'rgb(var(--highlight))',
      marginBottom: '2rem',
      textAlign: 'center' as const
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      justifyItems: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title} className={theme === 'cyberpunk' ? 'glow-primary' : ''}>
          {theme === 'cyberpunk' ? 'Neural Projects Archive' : theme === 'witcher' ? 'Quest Chronicles' : 'My Projects'}
        </h1>
        <p style={styles.subtitle}>
          {theme === 'cyberpunk' 
            ? 'Explore my digital constructs and neural interface designs from the depths of Night City\'s cyberspace.'
            : theme === 'witcher'
            ? 'Discover the mystical projects and digital enchantments crafted in the Northern Kingdoms.'
            : 'A showcase of my development work and technical projects. Each project demonstrates different skills and technologies.'
          }
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle} className={theme === 'cyberpunk' ? 'glow-secondary' : ''}>
            {theme === 'cyberpunk' ? 'Priority Systems' : theme === 'witcher' ? 'Legendary Quests' : 'Featured Projects'}
          </h2>          <div style={styles.grid}>
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
        <div style={styles.section}>
          <h2 style={styles.sectionTitle} className={theme === 'cyberpunk' ? 'glow-accent' : ''}>
            {theme === 'cyberpunk' ? 'Additional Neural Networks' : theme === 'witcher' ? 'Side Quests' : 'Other Projects'}
          </h2>          <div style={styles.grid}>
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
