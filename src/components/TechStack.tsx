import TechIcon from './TechIcon';
import { useState, useRef, useEffect } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Map tech names to display names
  const getDisplayName = (tech: string) => {
    const displayNames: { [key: string]: string } = {
      'reactjs': 'React',
      'react': 'React',
      'typescript': 'TypeScript',
      'javascript': 'JavaScript',
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
    let scrollPosition = 0;
    
    const animate = () => {
      if (scrollContainer && !isDragging) {
        scrollPosition += 0.5; // Slow continuous scroll
        
        // Create seamless infinite scroll by duplicating content virtually
        const maxScroll = scrollContainer.scrollWidth / 2; // Half because we'll duplicate
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [showCarousel, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  if (technologies.length === 0) {
    return null;
  }  if (showCarousel) {
    // Duplicate technologies for seamless infinite scroll
    const duplicatedTechnologies = [...technologies, ...technologies];
    
    return (
      <div className={`tech-stack-carousel ${className}`}>
        <div 
          ref={scrollRef}
          className={`tech-stack-scroll ${spacingClasses[spacing]}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >          {duplicatedTechnologies.map((tech, index) => (
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
