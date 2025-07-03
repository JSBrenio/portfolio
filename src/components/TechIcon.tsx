import StackIcon from 'tech-stack-icons';
import type { IconName } from 'tech-stack-icons';
import '../styles/TechIcon.css';

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
  variant?: 'light' | 'dark' | 'grayscale';
}

const TechIcon = ({ tech, size = 64, className = "", variant = 'light' }: TechIconProps) => {
  const iconName = tech as IconName;
  
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
        variant={variant}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default TechIcon;
