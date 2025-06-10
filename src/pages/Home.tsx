import { useState, useEffect } from 'react';
import TechStack from '../components/TechStack';

// Example usage of TechStack with different formats
const projectTechs1 = ['html5', 'css3', 'js', 'react'];

function Home() {
  const [theme, setTheme] = useState('ocean');  useEffect(() => {
    // Remove any existing theme classes and add the new one
    document.body.classList.remove('ocean', 'fire');
    document.body.classList.add(theme);
    
    // Also apply to document element for better CSS variable inheritance
    document.documentElement.classList.remove('ocean', 'fire');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'ocean' ? 'fire' : 'ocean');
  };

  return (
    <div className="min-h-screen bg-background text-primary transition-colors duration-300">
      <div className="container mx-auto p-6">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-highlight transition-colors duration-200"
          >
            Switch to {theme === 'ocean' ? 'Fire' : 'Ocean'} Theme
          </button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Jeremiah Brenio</h1>
          
          {/* Theme Demo Section */}
          <div className="mb-8 p-6 bg-neutral/10 rounded-lg border border-neutral/20">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Theme Demo</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-3 bg-primary text-white rounded">Primary</div>
              <div className="p-3 bg-secondary text-white rounded">Secondary</div>
              <div className="p-3 bg-accent text-white rounded">Accent</div>
              <div className="p-3 bg-highlight text-white rounded">Highlight</div>
              <div className="p-3 bg-neutral text-primary rounded">Neutral</div>
              <div className="p-3 bg-background border border-primary rounded">Background</div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Technologies</h2>
            <TechStack technologies={projectTechs1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;