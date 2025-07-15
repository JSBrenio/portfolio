import { useTheme } from '../hooks/useTheme';
import { getAboutContent } from '../data/text';
import MarkdownContent from '../components/MarkdownContent';
import InteractiveSkills from '../components/InteractiveSkills';
import '../styles/About.css';

const About = () => {
  const { theme } = useTheme();
  const aboutContent = getAboutContent(theme);

  return (
    <div className="about-container">
      {/* Page header */}      
      <header className="page-header">        
        <h1 className="page-title glow-primary">
          {aboutContent.title}
        </h1>        
        <MarkdownContent
          content={aboutContent.subtitle}
          className="about-subtitle"
        />
      </header>

      {/* Content sections using theme colors */}
      <div className="about-grid">
        <div className={`about-card primary ${theme}`}>            
          <h2 className="about-card-title primary">
            {aboutContent.sections.background.title}
          </h2>
          <MarkdownContent 
            content={aboutContent.sections.background.content}
            className="about-card-text"
          />
        </div>

        <div className={`about-card secondary ${theme}`}>          
          <h2 className="about-card-title secondary">
            {aboutContent.sections.skills.title}
          </h2>
          <InteractiveSkills 
            categories={aboutContent.sections.skills.categories}
            skillDetails={aboutContent.sections.skills.skillDetails}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
