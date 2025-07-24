import React from 'react';
import TechIcon from './TechIcon';
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
  
  // Map tech names to display names
  const getDisplayName = (tech: string) => {
    const displayNames: Record<string, string> = {
      'reactjs': 'React',
      'c++': 'C/C++',
      'react': 'React',
      'ts': 'TypeScript',
      'js': 'JavaScript',
      'nodejs': 'Node.js',
      'node.js': 'Node.js',
      'css3': 'CSS3',
      'html5': 'HTML5',
      'vitejs': 'Vite',
      'vite': 'Vite',
      'mongodb': 'MongoDB',
      'express': 'Express',
      'python': 'Python',
      'flask': 'Flask',
      'd3js': 'D3.js',
      'd3.js': 'D3.js'
    };
    return displayNames[tech.toLowerCase()] || tech;
  };

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
            {getDisplayName(tech)}
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