import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import '../styles/ScrollToTop.css';

const ScrollToTop = React.memo(() => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user has scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Throttle scroll events for better performance
    let timeoutId: number | null = null;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(toggleVisibility, 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const scrollToTop = () => {
    // Immediately hide the button when clicked
    setIsVisible(false);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-button visible"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
});

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;
