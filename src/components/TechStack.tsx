import TechIcon from './TechIcon';
import '../styles/TechStack.css';

interface TechStackProps {
  technologies: string[];
  size?: number;
  spacing?: 'sm' | 'md' | 'lg';
  layout?: 'row' | 'grid';
  showLabels?: boolean;
  className?: string;
}

const TechStack = ({ 
  technologies, 
  size = 40, 
  spacing = 'md',
  layout = 'row',
  showLabels = false,
  className = ""
}: TechStackProps) => {
  
  const spacingClasses = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3'
  };

  const layoutClasses = {
    row: 'flex flex-wrap items-center',
    grid: 'grid grid-cols-auto-fit'
  };

  if (technologies.length === 0) {
    return null;
  }

  return (
    <div className={`tech-stack ${layoutClasses[layout]} ${spacingClasses[spacing]} ${className}`}>
      {technologies.map((tech, index) => (
        <div key={`${tech}-${index}`} className="tech-item">
          <TechIcon 
            tech={tech} 
            size={size}
            className="hover:scale-110 transition-transform"
            variant='dark'
          />
          {showLabels && (
            <span className="text-xs text-gray-600 mt-1 block text-center capitalize">
              {tech}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
