import React from 'react';
import TechIcon from './TechIcon';
import { useRef, useEffect, useState } from 'react';
import '../styles/TechStack.css';

interface TechStackProps {
  technologies: string[];
  size?: number;
  spacing?: 'sm' | 'md' | 'lg';
  layout?: 'row' | 'grid';
  showLabels?: boolean;
  className?: string;
}

const TechStack = React.memo(({ 
  technologies, 
  size = 40, 
  spacing = 'md',
  layout = 'row',
  showLabels = false,
  className = ""
}: TechStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCarousel, setShowCarousel] = useState(false);
  
  // Check if content overflows and needs carousel
  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && layout === 'row') {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const scrollWidth = container.scrollWidth;
        setShowCarousel(scrollWidth > containerWidth);
      } else {
        setShowCarousel(false);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [technologies, layout, size]);
  
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
  
  const spacingClasses = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3'
  };

  const layoutClasses = {
    row: '',
    grid: 'grid'
  };

  // No JavaScript animation needed - using CSS animations instead
  useEffect(() => {
    return;
  }, [showCarousel]);

  if (technologies.length === 0) {
    return null;
  }

  if (showCarousel) {
    // Duplicate the technologies for seamless infinite scroll
    const duplicatedTechnologies = [...technologies, ...technologies];
    
    return (
      <div className={`tech-stack-carousel ${className}`}>
        <div 
          className={`tech-stack-scroll ${spacingClasses[spacing]} infinite-scroll`}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div key={`${tech}-${index}`} className="tech-item carousel-item">
              <TechIcon 
                tech={tech} 
                size={size}
                className="hover-scale"
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
    <div 
      ref={containerRef}
      className={`tech-stack ${layoutClasses[layout]} ${spacingClasses[spacing]} ${className}`}
    >
      {technologies.map((tech, index) => (
        <div key={`${tech}-${index}`} className="tech-item">
          <TechIcon 
            tech={tech} 
            size={size}
            className="hover-scale"
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
});

TechStack.displayName = 'TechStack';

export default TechStack;
