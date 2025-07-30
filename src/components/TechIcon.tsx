import React from 'react';
import { TECH_ICONS, getTechDisplayName } from './TechIcons';
import '../styles/TechIcon.css';

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
}

const TechIcon = React.memo(({ tech, size = 64, className = "" }: TechIconProps) => {
  const techName = tech.toLowerCase();

  // Get color class using the same method as InteractiveSkills
  const getIconColorClass = () => {
    const colors = ['accent', 'secondary', 'highlight', 'primary'];
    // Use tech name to generate consistent color index
    const techIndex = Object.keys(TECH_ICONS).indexOf(techName);
    return colors[techIndex % colors.length];
  };
  
  // Get the appropriate icon component
  const IconComponent = TECH_ICONS[techName];
  
  if (IconComponent) {
    return (
      <div 
        className={`tech-icon-container ${className}`}
        title={getTechDisplayName(tech)}
      >      
        <IconComponent 
          style={{ width: size, height: size }}
          className={`tech-icon ${getIconColorClass()}`}
        />
      </div>
    );
  }
  
  // Fallback for unknown technologies
  return (
    <div 
      className={`tech-icon-container ${className}`}
      title={tech}
    >      
      <div 
        className="tech-icon-fallback"
        style={{ 
          width: size, 
          height: size,
          fontSize: Math.min(size * 0.3, 12),
        }}
      >
        {tech}
      </div>
    </div>
  );
});

TechIcon.displayName = 'TechIcon';

export default TechIcon;
