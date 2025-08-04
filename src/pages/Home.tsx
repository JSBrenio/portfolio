import { User, FileText, Mail, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { getHomeContent } from '../data/text';
import MarkdownContent from '../components/MarkdownContent';
import '../styles/Home.css';
import LazyImage from '../components/LazyImage';

function Home() {
  const { theme, useThemedContent } = useTheme();
  const homeContent = getHomeContent(theme, useThemedContent);

  return (
    <div className="home-container">
      {/* Title Section */}
      <header className="page-header">
        <h1 className="page-title glow-primary">
          {homeContent.title}
        </h1>
      </header>

      {/* Main Content Section */}
      <div className="home-main">
        {/* Profile Picture */}
        <div className="home-profile">
          <div className="profile-image-container">
            <LazyImage
              src={"/me.jpg"}
              alt={"Profile Image"}
              className="profile-image"
            />
            <p className="profile-niche">{homeContent.niche}</p>
            <div className="profile-border"></div>
          </div>
        </div>

        {/* Content Side */}
        <div className="home-content">
          <div className="home-info">
            <div className="home-name-section">
              <h2 className="home-name">
                {homeContent.name}
              </h2>
            </div>
            
            <div className="home-divider"></div>
            
            <div className="home-statement-section">
              <MarkdownContent 
                content={homeContent.statement}
                className="home-statement"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="home-navigation">
            <Link to="/about" className="nav-card">
              <User className="nav-icon" />
              <span className="nav-text">About</span>
            </Link>
            
            <Link to="/projects" className="nav-card">
              <FolderOpen className="nav-icon" />
              <span className="nav-text">Projects</span>
            </Link>
            
            <Link to="/resume" className="nav-card">
              <FileText className="nav-icon" />
              <span className="nav-text">Resume</span>
            </Link>

            <Link to="/contact" className="nav-card">
              <Mail className="nav-icon" />
              <span className="nav-text">Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;