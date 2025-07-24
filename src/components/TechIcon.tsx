import React from 'react';
import StackIcon from 'tech-stack-icons';
import type { IconName } from 'tech-stack-icons';
import '../styles/TechIcon.css';

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
}

const TechIcon = React.memo(({ tech, size = 64, className = "" }: TechIconProps) => {
  const iconName: IconName = tech;
  
  const getSizeClass = () => {
    if (size <= 20) return 'small';
    if (size <= 32) return 'medium';
    if (size <= 40) return 'large';
    return 'extra-large';
  };
  
  return (
    <div 
      className={`tech-icon-container ${getSizeClass()} ${className}`}
      title={tech}
    >      
      <StackIcon 
        name={iconName} 
        style={{ width: size, height: size }}
      />
    </div>
  );
});

TechIcon.displayName = 'TechIcon';

export default TechIcon;
