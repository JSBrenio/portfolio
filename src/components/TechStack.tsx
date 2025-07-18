import TechIcon from './TechIcon';
import { useRef, useEffect } from 'react';
import '../styles/TechStack.css';

interface TechStackProps {
  technologies: string[];
  size?: number;
  spacing?: 'sm' | 'md' | 'lg';
  layout?: 'row' | 'grid';
  showLabels?: boolean;
  variant?: 'light' | 'dark' | 'grayscale';
  className?: string;
}

const TechStack = ({ 
  technologies, 
  size = 40, 
  spacing = 'md',
  layout = 'row',
  showLabels = false,
  variant = 'dark',
  className = ""
}: TechStackProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Map tech names to display names
  const getDisplayName = (tech: string) => {
    const displayNames: { [key: string]: string } = {
      'reactjs': 'React',
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
  
  // Show carousel if more than 4 technologies and layout is row
  const showCarousel = technologies.length > 4 && layout === 'row';
  
  const spacingClasses = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3'
  };

  const layoutClasses = {
    row: '',
    grid: 'grid'
  };  useEffect(() => {
    // Continuous scrolling animation
    if (!showCarousel || !scrollRef.current) return;
    
    const scrollContainer = scrollRef.current;
    let animationId: number;
    
    const animate = () => {
      if (scrollContainer) {
        const currentScroll = scrollContainer.scrollLeft;
        const singleSetWidth = scrollContainer.scrollWidth / 3; // Third because content is tripled
        
        // Auto-scroll continuously
        scrollContainer.scrollLeft = currentScroll + 0.5;
        
        // Seamless reset when we've scrolled through one complete set
        if (scrollContainer.scrollLeft >= singleSetWidth) {
          scrollContainer.scrollLeft = scrollContainer.scrollLeft - singleSetWidth;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [showCarousel]);

  if (technologies.length === 0) {
    return null;
  }  if (showCarousel) {
    // Triple the technologies for better seamless infinite scroll
    const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];
    
    return (
      <div className={`tech-stack-carousel ${className}`}>
        <div 
          ref={scrollRef}
          className={`tech-stack-scroll ${spacingClasses[spacing]}`}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div key={`${tech}-${index}`} className="tech-item carousel-item">
              <TechIcon 
                tech={tech} 
                size={size}
                className="hover-scale"
                variant={variant}
              />
              {showLabels && (
                <span className="tech-item-label">
                  {getDisplayName(tech)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`tech-stack ${layoutClasses[layout]} ${spacingClasses[spacing]} ${className}`}>      {technologies.map((tech, index) => (
        <div key={`${tech}-${index}`} className="tech-item">
          <TechIcon 
            tech={tech} 
            size={size}
            className="hover-scale"
            variant={variant}
          />
          {showLabels && (
            <span className="tech-item-label">
              {getDisplayName(tech)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
