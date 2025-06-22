import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import TechIcon from './TechIcon';
import { useState, useRef, useEffect } from 'react';

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ProjectCard = ({ 
  project, 
  size = 'medium', 
  className = '' 
}: ProjectCardProps) => {  const { theme } = useTheme();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Maximum number of visible tech icons before showing carousel
  const maxVisibleIcons = 6;
  const showCarousel = project.techStack.length > maxVisibleIcons;

  useEffect(() => {
    const updateScrollButtons = () => {
      if (scrollRef.current && showCarousel) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    updateScrollButtons();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', updateScrollButtons);
      return () => scrollElement.removeEventListener('scroll', updateScrollButtons);
    }
  }, [showCarousel, project.techStack.length]);

  const scrollTech = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const iconWidth = size === 'small' ? 60 : size === 'medium' ? 70 : 80;
    const scrollAmount = iconWidth * 2;
    
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };  const styles = {    card: {
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: 'rgba(var(--background), 0.8)',
      border: '1px solid rgba(var(--secondary), 0.2)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
      position: 'relative' as const,
      ...(size === 'small' && { maxWidth: '300px' }),
      ...(size === 'medium' && { maxWidth: '400px' }),
      ...(size === 'large' && { maxWidth: '500px' })
    },
    header: {
      padding: size === 'small' ? '1rem 1rem 0.5rem' : size === 'medium' ? '1.5rem 1.5rem 0.75rem' : '2rem 2rem 1rem',
      position: 'relative' as const
    },
    title: {
      fontSize: size === 'small' ? '1.125rem' : size === 'medium' ? '1.25rem' : '1.5rem',
      fontWeight: '600',
      color: 'rgb(var(--primary))',
      marginBottom: '0',
      lineHeight: '1.3'
    },    featuredBadge: {
      position: 'absolute' as const,
      top: size === 'small' ? '0.75rem' : size === 'medium' ? '1rem' : '1.25rem',
      right: size === 'small' ? '0.75rem' : size === 'medium' ? '1rem' : '1.25rem',
      padding: '0.25rem 0.5rem',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '600',
      background: theme === 'cyberpunk' 
        ? 'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--highlight)))' 
        : theme === 'witcher'
        ? 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--amber)))'
        : theme === 'dark'
        ? 'linear-gradient(135deg, rgb(var(--violet)), rgb(var(--emerald)))'
        : 'linear-gradient(135deg, rgb(var(--highlight)), rgb(var(--teal)))',
      color: 'rgb(var(--background))',
      backdropFilter: 'blur(4px)',
      boxShadow: theme === 'cyberpunk' ? 'var(--glow-accent)' : undefined
    },
    imageContainer: {
      position: 'relative' as const,
      width: '100%',
      height: size === 'small' ? '150px' : size === 'medium' ? '200px' : '250px',
      overflow: 'hidden',
      backgroundColor: 'rgba(var(--neutral), 0.1)',
      cursor: 'pointer'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      transition: 'transform 0.3s ease'
    },
    overlay: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    content: {
      padding: size === 'small' ? '1rem' : size === 'medium' ? '1.5rem' : '2rem',
      flex: '1',
      display: 'flex',
      flexDirection: 'column' as const
    },
    description: {
      color: 'rgb(var(--text-light))',
      fontSize: size === 'small' ? '0.875rem' : '1rem',
      lineHeight: '1.5',
      marginBottom: '1.5rem',
      display: '-webkit-box',
      WebkitLineClamp: size === 'small' ? 2 : 3,
      WebkitBoxOrient: 'vertical' as const,
      overflow: 'hidden'
    },
    techContainer: {
      marginTop: 'auto'
    },
    techCarousel: {
      position: 'relative' as const,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },    carouselButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      border: '1px solid rgba(var(--accent), 0.3)',
      backgroundColor: 'rgba(var(--accent), 0.1)',
      color: 'rgb(var(--accent))',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      flexShrink: 0
    },
    carouselButtonDisabled: {
      opacity: 0.3,
      cursor: 'not-allowed'
    },
    techScrollContainer: {
      display: 'flex',
      overflow: 'hidden',
      scrollBehavior: 'smooth' as const,
      gap: '0.75rem',
      flex: 1,
      paddingBottom: '0.5rem'
    },
    techItem: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: '0.25rem',
      minWidth: size === 'small' ? '50px' : size === 'medium' ? '60px' : '70px',
      flexShrink: 0
    },
    techName: {
      fontSize: '0.75rem',
      color: 'rgb(var(--text-light))',
      textAlign: 'center' as const,
      textTransform: 'capitalize' as const,
      lineHeight: '1.2'
    }
  };

  const handleImageHover = (e: React.MouseEvent<HTMLElement>, isEntering: boolean) => {
    const container = e.currentTarget;
    const image = container.querySelector('img');
    const overlay = container.querySelector('.overlay');
    
    if (isEntering) {
      if (image) image.style.transform = 'scale(1.05)';
      if (overlay) (overlay as HTMLElement).style.opacity = '1';
    } else {
      if (image) image.style.transform = 'scale(1)';
      if (overlay) (overlay as HTMLElement).style.opacity = '0';
    }
  };

  const handleCarouselButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isEntering: boolean) => {
    if (isEntering) {
      e.currentTarget.style.backgroundColor = 'rgba(var(--primary), 0.2)';
      e.currentTarget.style.transform = 'scale(1.05)';
    } else {
      e.currentTarget.style.backgroundColor = 'rgba(var(--primary), 0.1)';
      e.currentTarget.style.transform = 'scale(1)';
    }
  };

  const getThemeVariant = () => {
    if (theme === 'dark' || theme === 'cyberpunk') return 'dark';
    return 'light';
  };

  return (
    <div
      style={styles.card}
      className={`project-card ${className} ${theme === 'cyberpunk' ? 'glow-primary' : ''}`}
    >
      {/* Header with title */}
      <div style={styles.header}>
        <h3 style={styles.title}>
          {project.name}
        </h3>
        {project.featured && (
          <div style={styles.featuredBadge}>
            {theme === 'cyberpunk' ? 'FEATURED' : theme === 'witcher' ? 'LEGENDARY' : 'Featured'}
          </div>
        )}
      </div>

      {/* Clickable Image */}
      <Link to={`/projects/${project.id}`}>
        <div 
          style={styles.imageContainer}
          onMouseEnter={(e) => handleImageHover(e, true)}
          onMouseLeave={(e) => handleImageHover(e, false)}
        >
          <img
            src={project.image}
            alt={project.name}
            style={styles.image}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/400x250/666666/ffffff?text=${encodeURIComponent(project.name)}`;
            }}
          />
          <div className="overlay" style={styles.overlay} />
        </div>
      </Link>

      {/* Content */}
      <div style={styles.content}>
        <p style={styles.description}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div style={styles.techContainer}>
          {showCarousel ? (
            <div style={styles.techCarousel}>
              <button
                style={{
                  ...styles.carouselButton,
                  ...(canScrollLeft ? {} : styles.carouselButtonDisabled)
                }}
                onClick={() => scrollTech('left')}
                disabled={!canScrollLeft}
                onMouseEnter={(e) => canScrollLeft && handleCarouselButtonHover(e, true)}
                onMouseLeave={(e) => canScrollLeft && handleCarouselButtonHover(e, false)}
              >
                <ChevronLeft size={16} />
              </button>
              
              <div ref={scrollRef} style={styles.techScrollContainer}>
                {project.techStack.map((tech) => (
                  <div key={tech} style={styles.techItem}>
                    <TechIcon
                      tech={tech.toLowerCase()}
                      size={size === 'small' ? 20 : size === 'medium' ? 24 : 28}
                      variant={getThemeVariant()}
                    />
                    <span style={styles.techName}>{tech}</span>
                  </div>
                ))}
              </div>

              <button
                style={{
                  ...styles.carouselButton,
                  ...(canScrollRight ? {} : styles.carouselButtonDisabled)
                }}
                onClick={() => scrollTech('right')}
                disabled={!canScrollRight}
                onMouseEnter={(e) => canScrollRight && handleCarouselButtonHover(e, true)}
                onMouseLeave={(e) => canScrollRight && handleCarouselButtonHover(e, false)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          ) : (
            <div style={styles.techScrollContainer}>
              {project.techStack.map((tech) => (
                <div key={tech} style={styles.techItem}>
                  <TechIcon
                    tech={tech.toLowerCase()}
                    size={size === 'small' ? 20 : size === 'medium' ? 24 : 28}
                    variant={getThemeVariant()}
                  />
                  <span style={styles.techName}>{tech}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
