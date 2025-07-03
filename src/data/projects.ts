import type { Project } from '../components/ProjectCard';

// Import markdown descriptions as raw text
import portfolioMd from './project-descriptions/portfolio-website.md?raw';
import ecommerceMd from './project-descriptions/ecommerce-platform.md?raw';
import dataVizMd from './project-descriptions/data-visualization.md?raw';


export const sampleProjects: Project[] = [
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript. Features multiple themes including a cyberpunk theme with glow effects and a medieval witcher theme.',
    detailedDescription: portfolioMd,
    techStack: ['React', 'typescript', 'css3', 'vitejs', 'html5', 'nodejs'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://jeremiah-brenio.dev',
    githubUrl: 'https://github.com/jeremiah-brenio/portfolio',
    featured: true
  },
  {
    id: 'ecommerce-platform',
    name: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment processing, inventory management, user authentication, and admin dashboard.',
    detailedDescription: ecommerceMd,
    techStack: ['react', 'nodejs', 'mongodb', 'express'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://ecommerce-platform-demo.herokuapp.com',
    githubUrl: 'https://github.com/jeremiah-brenio/ecommerce-platform',
    featured: true
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization Tool',
    description: 'Interactive data visualization tool for analyzing complex datasets with charts, graphs, and customizable dashboards.',
    detailedDescription: dataVizMd,
    techStack: ['d3js', 'react', 'python', 'flask'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://data-viz-tool.herokuapp.com',
    githubUrl: 'https://github.com/jeremiah-brenio/data-visualization',
    featured: true
  },
];

// Theme-aware project data
export const getThemeAwareProjects = (theme: string): Project[] => {
  if (theme === 'cyberpunk') {
    return sampleProjects.map(project => ({
      ...project,
      name: getCyberpunkProjectName(project.name),
      description: getCyberpunkDescription(project.description)
    }));
  }
  
  if (theme === 'witcher') {
    return sampleProjects.map(project => ({
      ...project,
      name: getWitcherProjectName(project.name),
      description: getWitcherDescription(project.description)
    }));
  }
  
  return sampleProjects;
};

const getCyberpunkProjectName = (originalName: string): string => {
  const cyberpunkNames: { [key: string]: string } = {
    'Portfolio Website': 'Neural Interface Portfolio',
    'Task Management App': 'Corporate Task Matrix',
    'E-commerce Platform': 'Digital Marketplace Terminal',
    'Weather Dashboard': 'Atmospheric Data Interface',
    'Real-time Chat App': 'Secure Comm Channel',
    'Data Visualization Tool': 'Quantum Analytics Engine',
    'Social Media Platform': 'Neural Network Hub'
  };
  
  return cyberpunkNames[originalName] || originalName;
};

const getCyberpunkDescription = (originalDescription: string): string => {
  return originalDescription
    .replace(/website/gi, 'neural interface')
    .replace(/application/gi, 'system')
    .replace(/dashboard/gi, 'terminal')
    .replace(/modern/gi, 'cutting-edge')
    .replace(/collaborative/gi, 'multi-user neural')
    .replace(/real-time/gi, 'quantum-speed')
    .replace(/interactive/gi, 'neural-responsive');
};

const getWitcherProjectName = (originalName: string): string => {
  const witcherNames: { [key: string]: string } = {
    'Portfolio Website': 'Witcher\'s Chronicle',
    'Task Management App': 'Quest Log Keeper',
    'E-commerce Platform': 'Merchant\'s Exchange',
    'Weather Dashboard': 'Weather Divination Tool',
    'Real-time Chat App': 'Magical Correspondence',
    'Data Visualization Tool': 'Scrying Crystal Interface'
  };
  
  return witcherNames[originalName] || originalName;
};

const getWitcherDescription = (originalDescription: string): string => {
  return originalDescription
    .replace(/website/gi, 'chronicle')
    .replace(/application/gi, 'enchanted tool')
    .replace(/dashboard/gi, 'scrying interface')
    .replace(/modern/gi, 'mystical')
    .replace(/collaborative/gi, 'guild-based')
    .replace(/real-time/gi, 'instantaneous magical')
    .replace(/interactive/gi, 'enchanted');
};
