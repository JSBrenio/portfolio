import { useTheme } from '../hooks/useTheme';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
        ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--accent)))'
        : theme === 'witcher'
        ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--accent)))'
        : theme === 'dark'
        ? 'linear-gradient(135deg, rgb(var(--secondary)), rgb(var(--accent)))'
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
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '2rem'
    },
    infoCard: {
      padding: '1.5rem',
      borderRadius: '12px',
      backgroundColor: 'rgba(var(--background), 0.5)',
      border: '1px solid rgba(var(--neutral), 0.2)',
      transition: 'all 0.3s ease'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    },
    infoIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgb(var(--primary))',
      backgroundColor: 'rgba(var(--primary), 0.1)'
    },
    infoText: {
      flex: 1
    },
    infoTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: 'rgb(var(--text))',
      marginBottom: '0.25rem'
    },
    infoDescription: {
      color: 'rgb(var(--text-light))',
      fontSize: '0.875rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem'
    },
    socialLink: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(var(--accent), 0.1)',
      color: 'rgb(var(--accent))',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    },
    form: {
      padding: '2rem',
      borderRadius: '12px',
      backgroundColor: 'rgba(var(--background), 0.5)',
      border: '1px solid rgba(var(--neutral), 0.2)'
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'rgb(var(--text))',
      marginBottom: '1.5rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'rgb(var(--text))',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '8px',
      border: '1px solid rgba(var(--neutral), 0.3)',
      backgroundColor: 'rgba(var(--background), 0.8)',
      color: 'rgb(var(--text))',
      fontSize: '1rem',
      transition: 'all 0.2s ease'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '8px',
      border: '1px solid rgba(var(--neutral), 0.3)',
      backgroundColor: 'rgba(var(--background), 0.8)',
      color: 'rgb(var(--text))',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical' as const,
      transition: 'all 0.2s ease'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      width: '100%',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      border: '1px solid rgb(var(--primary))',
      backgroundColor: 'rgba(var(--primary), 0.1)',
      color: 'rgb(var(--primary))',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(theme === 'cyberpunk' ? 'Neural link established!' : theme === 'witcher' ? 'Message sent by raven!' : 'Message sent!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title} className={theme === 'cyberpunk' ? 'glow-primary' : ''}>
          {theme === 'cyberpunk' ? 'Neural Interface' : theme === 'witcher' ? 'Send Word' : 'Contact'}
        </h1>
        <p style={styles.subtitle}>
          {theme === 'cyberpunk' 
            ? 'Establish a secure connection to discuss your next cybernetic enhancement project.'
            : theme === 'witcher'
            ? 'Send word through the mystical networks of the Northern Kingdoms.'
            : 'Get in touch to discuss your next project or just say hello!'
          }
        </p>
      </div>

      <div style={styles.content}>
        {/* Contact Information */}
        <div style={styles.contactInfo}>
          <div style={styles.infoCard} className={theme === 'cyberpunk' ? 'glow-primary' : ''}>
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <Mail size={24} />
              </div>
              <div style={styles.infoText}>
                <h3 style={styles.infoTitle}>
                  {theme === 'cyberpunk' ? 'Neural Mail' : theme === 'witcher' ? 'Raven Post' : 'Email'}
                </h3>
                <p style={styles.infoDescription}>jeremiah.brenio@example.com</p>
              </div>
            </div>
          </div>

          <div style={styles.infoCard} className={theme === 'cyberpunk' ? 'glow-secondary' : ''}>
            <div style={styles.infoItem}>
              <div style={{...styles.infoIcon, color: 'rgb(var(--secondary))', backgroundColor: 'rgba(var(--secondary), 0.1)'}}>
                <Phone size={24} />
              </div>
              <div style={styles.infoText}>
                <h3 style={styles.infoTitle}>
                  {theme === 'cyberpunk' ? 'Holo Call' : theme === 'witcher' ? 'Megascope' : 'Phone'}
                </h3>
                <p style={styles.infoDescription}>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div style={styles.infoCard} className={theme === 'cyberpunk' ? 'glow-accent' : ''}>
            <div style={styles.infoItem}>
              <div style={{...styles.infoIcon, color: 'rgb(var(--accent))', backgroundColor: 'rgba(var(--accent), 0.1)'}}>
                <MapPin size={24} />
              </div>
              <div style={styles.infoText}>
                <h3 style={styles.infoTitle}>
                  {theme === 'cyberpunk' ? 'Coordinates' : theme === 'witcher' ? 'Location' : 'Location'}
                </h3>
                <p style={styles.infoDescription}>
                  {theme === 'cyberpunk' ? 'Night City, Sector 7' : theme === 'witcher' ? 'Oxenfurt, Redania' : 'San Francisco, CA'}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={styles.infoCard}>
            <h3 style={{...styles.infoTitle, marginBottom: '1rem'}}>
              {theme === 'cyberpunk' ? 'Network Links' : theme === 'witcher' ? 'Guild Connections' : 'Social Links'}
            </h3>            <div style={styles.socialLinks}>
              <a 
                href="#" 
                style={{
                  ...styles.socialLink,
                  backgroundColor: 'rgba(var(--accent), 0.1)',
                  color: 'rgb(var(--accent))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--accent), 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--accent), 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                style={{
                  ...styles.socialLink,
                  backgroundColor: 'rgba(var(--secondary), 0.1)',
                  color: 'rgb(var(--secondary))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--secondary), 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--secondary), 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Linkedin size={20} />
              </a>              <a 
                href="#" 
                style={{
                  ...styles.socialLink,
                  backgroundColor: 'rgba(var(--highlight), 0.1)',
                  color: 'rgb(var(--highlight))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--highlight), 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--highlight), 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.form} className={theme === 'cyberpunk' ? 'glow-highlight' : ''}>
          <h2 style={styles.formTitle}>
            {theme === 'cyberpunk' ? 'Initiate Contact Protocol' : theme === 'witcher' ? 'Send Message' : 'Send Message'}
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="name">
                {theme === 'cyberpunk' ? 'Handle' : theme === 'witcher' ? 'Name' : 'Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">
                {theme === 'cyberpunk' ? 'Neural Address' : theme === 'witcher' ? 'Contact Method' : 'Email'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="message">
                {theme === 'cyberpunk' ? 'Data Payload' : theme === 'witcher' ? 'Message' : 'Message'}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.textarea}
                required
              />
            </div>

            <button type="submit" style={styles.button}>
              <Send size={18} />
              {theme === 'cyberpunk' ? 'Transmit Data' : theme === 'witcher' ? 'Send by Raven' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
