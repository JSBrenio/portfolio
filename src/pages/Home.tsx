import { User, ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import ProjectCard from '../components/ProjectCard';
import { getThemeAwareProjects } from '../data/projects';

function Home() {
  const { theme } = useTheme();

  const styles = {
    container: {
      padding: '2rem',
      minHeight: '100vh'
    },
    hero: {
      textAlign: 'center' as const,
      marginBottom: '4rem'
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginTop: '2rem',
      color: 'rgb(var(--primary))',
      transition: 'color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: 'rgb(var(--text-light))',
      marginTop: '1rem',
      maxWidth: '600px',
      margin: '1rem auto 0'
    },
    section: {
      marginBottom: '4rem'
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: 'rgb(var(--secondary))',
      textAlign: 'center' as const,
      marginBottom: '2rem'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      justifyItems: 'center',
      marginBottom: '2rem'
    },
    viewAllButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: 'rgba(var(--primary), 0.1)',
      border: '1px solid rgb(var(--primary))',
      borderRadius: '8px',
      color: 'rgb(var(--primary))',
      fontSize: '1rem',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      margin: '0 auto',
      width: 'fit-content'
    }
  };
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 
          style={styles.title}
          className={theme === 'cyberpunk' ? 'glow-primary' : ''}
        >
          <User size={32} style={{ color: 'rgb(var(--accent))' }} />
          Jeremiah Brenio
        </h1>
        <p style={styles.subtitle}>
          {theme === 'cyberpunk' 
            ? 'Welcome to my neural interface, choom. I\'m a netrunner specializing in cutting-edge web technologies and digital architecture.'
            : theme === 'witcher'
            ? 'Greetings, traveler. I\'m a code-weaver from the Northern Kingdoms, crafting digital enchantments and web sorcery.'
            : 'Welcome to my portfolio! I\'m a passionate full-stack developer who loves creating beautiful, functional web applications.'
          }
        </p>
      </div>

      {/* Skills Highlight Section */}
      <div style={styles.section}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(var(--secondary), 0.1)',
            border: '1px solid rgba(var(--secondary), 0.2)',
            textAlign: 'center' as const
          }}>
            <Code size={32} style={{ color: 'rgb(var(--secondary))', marginBottom: '1rem' }} />
            <h3 style={{ color: 'rgb(var(--secondary))', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Frontend Development
            </h3>
            <p style={{ color: 'rgb(var(--text-light))', fontSize: '0.9rem' }}>
              React, TypeScript, Modern CSS
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(var(--highlight), 0.1)',
            border: '1px solid rgba(var(--highlight), 0.2)',
            textAlign: 'center' as const
          }}>
            <Zap size={32} style={{ color: 'rgb(var(--highlight))', marginBottom: '1rem' }} />
            <h3 style={{ color: 'rgb(var(--highlight))', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Performance & UX
            </h3>
            <p style={{ color: 'rgb(var(--text-light))', fontSize: '0.9rem' }}>
              Optimized & Accessible
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(var(--accent), 0.1)',
            border: '1px solid rgba(var(--accent), 0.2)',
            textAlign: 'center' as const
          }}>
            <Palette size={32} style={{ color: 'rgb(var(--accent))', marginBottom: '1rem' }} />
            <h3 style={{ color: 'rgb(var(--accent))', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Design Systems
            </h3>
            <p style={{ color: 'rgb(var(--text-light))', fontSize: '0.9rem' }}>
              Themes & Components
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;