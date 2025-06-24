import { Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { getTextContent } from '../data/textContent';
import MarkdownContent from '../components/MarkdownContent';
import '../styles/About.css';

const About = () => {
  const { theme } = useTheme();
  const textContent = getTextContent(theme);

  // Function to get different colors for skill tags
  const getSkillTagClass = (index: number) => {
    const colors = ['accent', 'secondary', 'highlight', 'primary'];
    return colors[index % colors.length];
  };

  return (
    <div className="about-container">
      {/* Page header */}
      <div className="about-header">        
        <h1 className={`about-title ${theme}`}>
          {textContent.pages.about.title}
        </h1>        <p className="about-subtitle">
          {textContent.pages.about.subtitle}
        </p>
      </div>

      {/* Content sections using theme colors */}
      <div className="about-grid">
        <div className={`about-card primary ${theme}`}>            <h2 className="about-card-title primary">
            {textContent.pages.about.sections.background.title}
          </h2>
          <MarkdownContent 
            content={textContent.pages.about.sections.background.content}
            className="about-card-text"
          />
        </div>

        <div className={`about-card secondary ${theme}`}>          
          <h2 className="about-card-title secondary">
            {textContent.pages.about.sections.skills.title}
          </h2>
          <div className="about-skills-container">
            {textContent.pages.about.sections.skills.skillsList.map((skill, index) => (
              <span key={skill} className={`about-skill-tag ${getSkillTagClass(index)}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className={`about-contact-section about-card highlight ${theme}`}>        
        <h2 className="about-card-title highlight">
          {textContent.pages.about.sections.contact.title}
        </h2>
        <div className="about-contact-buttons">
          {[
            { icon: Mail, label: 'Email' },
            { icon: Github, label: 'GitHub' },
            { icon: Linkedin, label: 'LinkedIn' }
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="about-contact-button"
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
