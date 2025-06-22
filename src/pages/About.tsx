import { Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const About = () => {
  const { theme } = useTheme();

  // Function to get different colors for skill tags
  const getSkillTagStyle = (index: number) => {
    const colors = ['accent', 'secondary', 'highlight', 'primary'];
    const colorVar = colors[index % colors.length];
    
    return {
      padding: '0.25rem 0.75rem',
      backgroundColor: `rgba(var(--${colorVar}), 0.2)`,
      color: `rgb(var(--${colorVar}))`,
      borderRadius: '16px',
      fontSize: '0.875rem',
      fontWeight: '500'
    };
  };// Style objects for better readability
  const styles = {
    container: {
      padding: '2rem',
      minHeight: '100vh'
    },
    pageHeader: {
      textAlign: 'center' as const,
      marginBottom: '3rem'
    },    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: theme === 'cyberpunk' 
        ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--highlight)))'
        : theme === 'witcher'
        ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--accent)))'
        : theme === 'dark'
        ? 'linear-gradient(135deg, rgb(var(--secondary)), rgb(var(--accent)))'
        : 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--highlight)))',
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    },
    card: {
      padding: '2rem',
      borderRadius: '12px'
    },    primaryCard: {
      background: theme === 'cyberpunk' 
        ? 'linear-gradient(135deg, rgba(var(--primary), 0.1), rgba(var(--secondary), 0.05))'
        : theme === 'witcher'
        ? 'linear-gradient(135deg, rgba(var(--primary), 0.1), rgba(var(--accent), 0.05))'
        : 'linear-gradient(135deg, rgba(var(--primary), 0.1), rgba(var(--secondary), 0.05))',
      border: '1px solid rgba(var(--primary), 0.2)',
      boxShadow: theme === 'cyberpunk' ? 'var(--glow-primary)' : undefined
    },
    secondaryCard: {
      background: theme === 'cyberpunk' 
        ? 'linear-gradient(135deg, rgba(var(--secondary), 0.1), rgba(var(--accent), 0.05))'
        : theme === 'witcher'
        ? 'linear-gradient(135deg, rgba(var(--secondary), 0.1), rgba(var(--highlight), 0.05))'
        : 'linear-gradient(135deg, rgba(var(--secondary), 0.1), rgba(var(--accent), 0.05))',
      border: '1px solid rgba(var(--secondary), 0.2)'
    },
    highlightCard: {
      background: theme === 'cyberpunk' 
        ? 'linear-gradient(135deg, rgba(var(--highlight), 0.1), rgba(var(--secondary), 0.05))'
        : theme === 'witcher'
        ? 'linear-gradient(135deg, rgba(var(--highlight), 0.1), rgba(var(--accent), 0.05))'
        : 'linear-gradient(135deg, rgba(var(--highlight), 0.1), rgba(var(--secondary), 0.05))',
      border: '1px solid rgba(var(--highlight), 0.2)'
    },
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem'
    },
    cardText: {
      color: 'rgb(var(--text))',
      lineHeight: '1.6'
    },
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '0.5rem'
    },
    skillTag: {
      padding: '0.25rem 0.75rem',
      backgroundColor: 'rgba(var(--accent), 0.2)',
      color: 'rgb(var(--accent))',
      borderRadius: '16px',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    contactSection: {
      textAlign: 'center' as const,
      padding: '2rem',
      borderRadius: '12px'
    },
    contactButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap' as const
    },
    contactButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.25rem',
      backgroundColor: 'rgba(var(--background), 0.8)',
      border: '1px solid rgba(var(--neutral), 0.3)',
      borderRadius: '8px',
      color: 'rgb(var(--text))',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };
  const handleContactButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isEntering: boolean) => {
    if (isEntering) {
      e.currentTarget.style.backgroundColor = 'rgba(var(--accent), 0.1)';
      e.currentTarget.style.borderColor = 'rgb(var(--accent))';
      e.currentTarget.style.color = 'rgb(var(--accent))';
    } else {
      e.currentTarget.style.backgroundColor = 'rgba(var(--background), 0.8)';
      e.currentTarget.style.borderColor = 'rgba(var(--neutral), 0.3)';
      e.currentTarget.style.color = 'rgb(var(--text))';
    }
  };

  return (
  <div style={styles.container}>
      {/* Page header */}
      <div style={styles.pageHeader}>        
        <h1 style={styles.title}>
          {theme === 'cyberpunk' ? 'Neural Profile' : theme === 'witcher' ? 'Character Sheet' : 'About Me'}
        </h1>
        <p style={styles.subtitle}>
          {theme === 'cyberpunk' 
            ? 'Access my neural interface profile and system specifications from Night City\'s database.'
            : theme === 'witcher'
            ? 'Learn about this traveling developer from the Northern Kingdoms and their mystical coding arts.'
            : 'This page demonstrates how themes persist across different routes. Notice how all colors automatically match your selected theme!'
          }
        </p>
      </div>

      {/* Content sections using theme colors */}
      <div style={styles.grid}>
        <div style={{...styles.card, ...styles.primaryCard}}>          <h2 style={{...styles.cardTitle, color: 'rgb(var(--primary))'}}>
            {theme === 'cyberpunk' ? 'Neural History' : theme === 'witcher' ? 'Origins' : 'Background'}
          </h2>
          <p style={styles.cardText}>
            {theme === 'cyberpunk' 
              ? 'A skilled netrunner specializing in creating secure digital interfaces and neural-link compatible applications. Extensive experience in Night City\'s corporate data systems.'
              : theme === 'witcher'
              ? 'A traveling code-weaver from the Northern Kingdoms, skilled in the ancient arts of web development and digital alchemy. Trained in the schools of React and TypeScript.'
              : 'I\'m a passionate developer who loves creating beautiful, functional web applications. This theme system demonstrates how CSS variables can create a seamless theming experience.'
            }
          </p>
        </div>

        <div style={{...styles.card, ...styles.secondaryCard}}>          <h2 style={{...styles.cardTitle, color: 'rgb(var(--secondary))'}}>
            {theme === 'cyberpunk' ? 'Skill Matrix' : theme === 'witcher' ? 'Abilities' : 'Skills'}
          </h2>
          <div style={styles.skillsContainer}>
            {(theme === 'cyberpunk' 
              ? ['Neural Hacking', 'Quantum Code', 'Cyber Security', 'AI Systems', 'Data Mining']
              : theme === 'witcher'
              ? ['Web Sorcery', 'Code Alchemy', 'Digital Runes', 'Server Conjuring', 'API Spells']
              : ['React', 'TypeScript', 'CSS', 'Node.js', 'Git']            ).map((skill, index) => (
              <span key={skill} style={getSkillTagStyle(index)}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div style={{...styles.contactSection, ...styles.highlightCard}}>        <h2 style={{...styles.cardTitle, color: 'rgb(var(--highlight))'}}>
          {theme === 'cyberpunk' ? 'Establish Connection' : theme === 'witcher' ? 'Send Correspondence' : 'Let\'s Connect'}
        </h2>
        <div style={styles.contactButtons}>
          {[
            { icon: Mail, label: 'Email' },
            { icon: Github, label: 'GitHub' },
            { icon: Linkedin, label: 'LinkedIn' }
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              style={styles.contactButton}
              onMouseEnter={(e) => handleContactButtonHover(e, true)}
              onMouseLeave={(e) => handleContactButtonHover(e, false)}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
