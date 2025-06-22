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
    row: '',
    grid: 'grid'
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
            className="hover-scale"
            variant='dark'
          />
          {showLabels && (
            <span style={{ color: 'rgb(var(--text-light))' }}>
              {tech}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
