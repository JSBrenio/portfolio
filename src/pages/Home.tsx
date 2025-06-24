import { User, Code, Palette, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { getTextContent } from '../data/textContent';
import MarkdownContent from '../components/MarkdownContent';
import '../styles/Home.css';

function Home() {
  const { theme } = useTheme();
  const textContent = getTextContent(theme);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-hero">
        <h1 
          className={`home-title ${theme === 'cyberpunk' ? 'glow-primary' : ''}`}
        >
          <User size={32} className="home-user-icon" />
          {textContent.pages.home.title}
        </h1>        <MarkdownContent 
          content={textContent.pages.home.subtitle}
          className="home-subtitle"
        />
      </div>

      {/* Skills Highlight Section */}
      <div className="home-section">
        <div className="home-skills-grid">
          <div className="home-skill-card secondary">
            <Code size={32} className="home-skill-icon secondary" />
            <h3 className="home-skill-title secondary">
              {textContent.pages.home.skills.frontend.title}
            </h3>
            <p className="home-skill-description">
              {textContent.pages.home.skills.frontend.description}
            </p>
          </div>

          <div className="home-skill-card highlight">
            <Zap size={32} className="home-skill-icon highlight" />
            <h3 className="home-skill-title highlight">
              {textContent.pages.home.skills.performance.title}
            </h3>
            <p className="home-skill-description">
              {textContent.pages.home.skills.performance.description}
            </p>
          </div>

          <div className="home-skill-card accent">
            <Palette size={32} className="home-skill-icon accent" />
            <h3 className="home-skill-title accent">
              {textContent.pages.home.skills.design.title}
            </h3>
            <p className="home-skill-description">
              {textContent.pages.home.skills.design.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;