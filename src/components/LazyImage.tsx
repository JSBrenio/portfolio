import React, { useState } from 'react';
import { useLazyLoading } from '../hooks/useLazyLoading';
import '../styles/LazyImage.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  style?: React.CSSProperties;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = '/plz.jpg',
  onError,
  style,
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [fallbackLoaded, setFallbackLoaded] = useState(false);
  const { elementRef, hasLoaded } = useLazyLoading({
    threshold: 0.1,
    rootMargin: '100px', // Start loading when image is 100px away from viewport
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
    if (onError) {
      onError(e);
    }
  };

  const handleFallbackLoad = () => {
    setFallbackLoaded(true);
  };

  const handleFallbackError = (_e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Both original and fallback images failed to load: ${src}, ${placeholder}`);
    setFallbackLoaded(true); // Still set as loaded to stop skeleton
  };

  // Determine if we should show skeleton
  const showSkeleton = hasLoaded && !imageLoaded && !imageError && !fallbackLoaded;
  
  return (
    <div 
      ref={elementRef} 
      className={`lazy-image-container ${className}`}
      style={style}
      {...props}
    >
      {/* Placeholder while loading */}
      {showSkeleton && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-skeleton"></div>
        </div>
      )}
      
      {/* Original image - only render when in viewport and no error */}
      {hasLoaded && !imageError && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy" // Native lazy loading as fallback
          decoding="async" // Improve performance
        />
      )}

      {/* Fallback image - only render when original image failed */}
      {hasLoaded && imageError && (
        <img
          src={placeholder}
          alt={`${alt} (fallback)`}
          className={`lazy-image ${fallbackLoaded ? 'loaded' : 'loading'} fallback`}
          onLoad={handleFallbackLoad}
          onError={handleFallbackError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default LazyImage;
