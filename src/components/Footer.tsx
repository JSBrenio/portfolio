import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/Footer.css';

export const Footer: React.FC = React.memo(() => {
  const { theme, useThemedContent } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const getFooterContent = () => {
    const baseContent = {
      copyright: `© ${currentYear} Jeremiah Brenio. All rights reserved.`,
      additionalText: "Built with React and Passion <3."
    };

    if (!useThemedContent) {
      return baseContent
    }
    if (theme === 'cyberpunk') {
      return {
        copyright: `© ${currentYear} Jeremiah Brenio. All rights protected with ICE.`,
        additionalText: "Developed in chaos beyond The Blackwall amidst Night City."
      };
    }

    if (theme === 'witcher') {
      return {
        copyright: `© ${currentYear} Jeremiah Brenio. All rights protected with Quen.`,
        additionalText: "Mutated in the trial of the Codes inside Kaer Morhen."
      };
    }

    return baseContent;
  };

  const content = getFooterContent();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">{content.copyright}</p>
          <p className="footer-additional">{content.additionalText}</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
