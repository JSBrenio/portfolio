import React, { useState } from 'react';
import '../styles/InteractiveSkills.css';
import MarkdownContent from './MarkdownContent';

interface InteractiveSkillsProps {
  categories: Record<string, string[]>;
  skillDetails: Record<string, { definition: string; experience: string }>;
  theme: string;
}

const InteractiveSkills: React.FC<InteractiveSkillsProps> = ({ 
  categories, 
  skillDetails,
}) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Function to get different colors for skill tags
  const getSkillTagClass = (index: number) => {
    const colors = ['accent', 'secondary', 'highlight', 'primary'];
    return colors[index % colors.length];
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  return (
    <div className="interactive-skills-container">
      {/* Left Side - Skills Categories */}
      <div className="skills-left-panel">
        {Object.entries(categories).map(([category, skills], categoryIndex) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-tags">
              {skills.map((skill, skillIndex) => (
                <button
                  key={skill}
                  onClick={() => handleSkillClick(skill)}
                  className={`interactive-skill-tag ${getSkillTagClass(categoryIndex * 10 + skillIndex)} ${
                    selectedSkill === skill ? 'selected' : ''
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Skill Description */}
      <div className="skills-right-panel">
        <div className="skill-description-container">
          {selectedSkill ? (
            <div className="skill-description-content">
              <h4 className="skill-description-title glow-primary">
                {selectedSkill}
              </h4>
              <div className="skill-definition-section">
                <h5 className="skill-section-header">Definition</h5>
                <MarkdownContent 
                content={selectedSkill ? (skillDetails[selectedSkill]?.definition || 'Still writing it! 😅.') : 'Still writing it! 😅.'} 
                className="skill-definition-text"/>
              </div>
              <div className="skill-experience-section">
                <h5 className="skill-section-header">My Experience</h5>
                <MarkdownContent 
                content={selectedSkill ? (skillDetails[selectedSkill]?.experience || 'Still writing it! 😅.') : 'Still writing it! 😅.'} 
                className="skill-experience-text"/>
              </div>
            </div>
          ) : (
            <div className="skill-description-placeholder">
              <div className="placeholder-icon">💡</div>
              <h4 className="placeholder-title">Select a Skill</h4>
              <p className="placeholder-text">
                Click on any skill to learn more about my experience and expertise in that area.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveSkills;
