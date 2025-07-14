import { useTheme } from '../hooks/useTheme';
import { getResumeContent } from '../data/text/resumeContent';
import { GraduationCap, Briefcase } from 'lucide-react';
import { MarkdownContent } from '../components/MarkdownContent';
import '../styles/Resume.css';

const Resume = () => {
  const { theme } = useTheme();
  const resumeContent = getResumeContent(theme);

  return (
    <div className="resume-page">
      <div className="resume-container">
        <header className="page-header">
          <h1 className="page-title glow-primary">Resume</h1>
        </header>

        <div className="resume-content">
          {/* Education Section */}
          <section className="resume-section">
            <div className="section-header">
              <GraduationCap className="section-icon" />
              <h2 className="section-title">Education</h2>
            </div>
            
            <div className="timeline">
              {resumeContent.education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="item-title">{item.institution}</h3>
                    <p className="item-subtitle">{item.degree}</p>
                    <span className="item-period">{item.period}</span>
                    {item.location && <span className="item-location">{item.location}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="resume-section">
            <div className="section-header">
              <Briefcase className="section-icon" />
              <h2 className="section-title">Experience</h2>
            </div>
            
            <div className="timeline">
              {resumeContent.experience.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-subtitle">{item.company}</p>
                    <span className="item-period">{item.period}</span>
                    <span className="item-location">{item.location}</span>
                    
                    <ul className="achievements-list">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="achievement-item">
                          <MarkdownContent 
                            content={achievement} 
                            className="achievement-content"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
