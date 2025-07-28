import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/TestPage.css';

const TestPage: React.FC = () => {
  const { theme } = useTheme();

  const colorVariables = [
    { name: 'Primary', var: '--primary' },
    { name: 'Secondary', var: '--secondary' },
    { name: 'Accent', var: '--accent' },
    { name: 'Highlight', var: '--highlight' },
    { name: 'neutral', var: '--neutral'},
    { name: 'Background', var: '--background' },
    { name: 'Text', var: '--text' },
    { name: 'Text Light', var: '--text-light' },
    { name: 'Navbar BG', var: '--navbar-bg' }
  ];

  const glowVariables = [
    { name: 'Primary Glow', var: '--glow-primary' },
    { name: 'Secondary Glow', var: '--glow-secondary' },
    { name: 'Accent Glow', var: '--glow-accent' },
    { name: 'Highlight Glow', var: '--glow-highlight' }
  ];

  const fontSizes = [
    { name: 'Extra Small', size: '0.75rem' },
    { name: 'Small', size: '0.875rem' },
    { name: 'Base', size: '1rem' },
    { name: 'Large', size: '1.125rem' },
    { name: 'Extra Large', size: '1.25rem' },
    { name: '2X Large', size: '1.5rem' },
    { name: '3X Large', size: '1.875rem' },
    { name: '4X Large', size: '2.25rem' },
    { name: '5X Large', size: '3rem' },
    { name: '6X Large', size: '3.75rem' }
  ];

  return (
    <div className="test-page">
      <div className="test-container">
        <div className="page-header">
          <h1 className="page-title">Theme Test Page</h1>
          <p className="test-subtitle">Current Theme: <span className="theme-name">{theme}</span></p>
        </div>

        {/* Color Palette Section */}
        <section className="test-section">
          <h2 className="section-title">Color Palette</h2>
          <div className="color-grid">
            {colorVariables.map((color) => (
              <div key={color.name} className="color-card">
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: `rgb(var(${color.var}))` }}
                ></div>
                <div className="color-info">
                  <span className="color-name">{color.name}</span>
                  <span className="color-var">{color.var}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Glow Effects Section */}
        <section className="test-section">
          <h2 className="section-title">Glow Effects</h2>
          <div className="glow-grid">
            {glowVariables.map((glow) => (
              <div key={glow.name} className="glow-card">
                <div 
                  className="glow-sample"
                  style={{ 
                    backgroundColor: `rgb(var(${glow.var.replace('--glow-', '--')}))`,
                    boxShadow: `var(${glow.var})`
                  }}
                >
                  {glow.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="test-section">
          <h2 className="section-title">Typography & Font Sizes</h2>
          <div className="typography-grid">
            {fontSizes.map((size) => (
              <div key={size.name} className="typography-sample">
                <span 
                  className="font-sample"
                  style={{ fontSize: size.size }}
                >
                  {size.name} Text Sample
                </span>
                <span className="font-var">{size.size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Text on Background Combinations */}
        <section className="test-section">
          <h2 className="section-title">Text on Background Combinations</h2>
          <div className="bg-combinations">
            {colorVariables.map((bgColor) => (
              <div key={bgColor.name} className="bg-test-card">
                <h3 className="bg-title">Text on {bgColor.name} Background</h3>
                <div 
                  className="bg-sample"
                  style={{ backgroundColor: `rgb(var(${bgColor.var}))` }}
                >
                  <p style={{ color: `rgb(var(--text))` }}>Primary Text</p>
                  <p style={{ color: `rgb(var(--text-light))` }}>Light Text</p>
                  <p style={{ color: `rgb(var(--primary))` }}>Primary Color</p>
                  <p style={{ color: `rgb(var(--secondary))` }}>Secondary Color</p>
                  <p style={{ color: `rgb(var(--accent))` }}>Accent Color</p>
                  <p style={{ color: `rgb(var(--highlight))` }}>Highlight Color</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="test-section">
          <h2 className="section-title">Interactive Elements</h2>
          <div className="interactive-grid">
            <button className="test-button primary">Primary Button</button>
            <button className="test-button secondary">Secondary Button</button>
            <button className="test-button accent">Accent Button</button>
            <button className="test-button highlight">Highlight Button</button>
            
            <div className="test-card">
              <h3>Test Card</h3>
              <p>This card demonstrates the standard content styling with glow effects.</p>
            </div>

            <div className="test-input-group">
              <label htmlFor="test-input">Test Input Field:</label>
              <input 
                id="test-input" 
                type="text" 
                placeholder="Enter test text..." 
                className="test-input"
              />
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="test-section">
          <div className="test-note">
            <p><strong>Note:</strong> This is a development test page. It will be removed from the final build.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestPage;
