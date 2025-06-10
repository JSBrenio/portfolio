import StackIcon from 'tech-stack-icons';
import type { IconName } from 'tech-stack-icons';

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
  variant?: 'light' | 'dark' | 'grayscale';
}

const TechIcon = ({ tech, size = 64, className = "", variant = 'light' }: TechIconProps) => {
  const iconName = tech as IconName;
  
  return (
    <div 
    className={`inline-flex items-center justify-center ${className}`}
    style={{ width: size, height: size }}
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
