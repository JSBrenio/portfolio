import React from 'react';
import TechIcon from './TechIcon';
import { getTechDisplayName } from './TechIcons';
import '../styles/TechStack.css';

interface TechStackProps {
  technologies: string[];
  size?: number;
  showLabels?: boolean;
  className?: string;
}

const TechStack = React.memo(({ 
  technologies, 
  size = 40, 
  showLabels = false,
  className = ""
}: TechStackProps) => {

  if (technologies.length === 0) {
    return null;
  }

  const totalItems = technologies.length;
  const animationDuration = Math.max(totalItems * 2, 15);
  
  const marqueStyle = {
    '--total-items': totalItems,
    '--animation-duration': `${animationDuration}s`,
    '--gap': '0.5rem'
  } as React.CSSProperties;
  
  const renderTechItems = () => (
    technologies.map((tech, index) => (
      <li key={`${tech}-${index}`} className="tech-item">
        <span className="tech-icon-container">
          <TechIcon 
            tech={tech} 
            size={size}
            className="hover-scale"
          />
        </span>
        {showLabels && (
          <span className="tech-item-label">
            {getTechDisplayName(tech)}
          </span>
        )}
      </li>
    ))
  );
  
  return (
    <div className={`tech-stack-marquee ${className}`} style={marqueStyle}>
      <ul>
        {renderTechItems()}
      </ul>
      <ul aria-hidden="true">
        {renderTechItems()}
      </ul>
    </div>
  );
});

TechStack.displayName = 'TechStack';

export default TechStack;