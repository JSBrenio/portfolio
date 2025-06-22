import type { Project } from '../components/ProjectCard';

export const sampleProjects: Project[] = [
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript. Features multiple themes including a cyberpunk theme with glow effects and a medieval witcher theme.',
    techStack: ['React', 'TypeScript', 'CSS3', 'Vite'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://jeremiah-brenio.dev',
    githubUrl: 'https://github.com/jeremiah-brenio/portfolio',
    featured: true
  },
  {
    id: 'task-manager',
    name: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built with React and Firebase.',
    techStack: ['React', 'Firebase', 'JavaScript', 'CSS3'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://taskmanager-demo.netlify.app',
    githubUrl: 'https://github.com/jeremiah-brenio/task-manager',
    featured: false
  },
  {
    id: 'ecommerce-platform',
    name: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment processing, inventory management, user authentication, and admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://ecommerce-platform-demo.herokuapp.com',
    githubUrl: 'https://github.com/jeremiah-brenio/ecommerce-platform',
    featured: true
  },
  {
    id: 'weather-dashboard',
    name: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.',
    techStack: ['Vue.js', 'JavaScript', 'CSS3', 'API'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://weather-dashboard-vue.netlify.app',
    githubUrl: 'https://github.com/jeremiah-brenio/weather-dashboard',
    featured: false
  },
  {
    id: 'chat-application',
    name: 'Real-time Chat App',
    description: 'Modern chat application with real-time messaging, file sharing, emoji support, and multiple chat rooms.',
    techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://chat-app-realtime.herokuapp.com',
    githubUrl: 'https://github.com/jeremiah-brenio/chat-application',
    featured: false
  },  
  {
    id: 'data-visualization',
    name: 'Data Visualization Tool',
    description: 'Interactive data visualization tool for analyzing complex datasets with charts, graphs, and customizable dashboards.',
    techStack: ['D3.js', 'React', 'Python', 'Flask'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://data-viz-tool.herokuapp.com',
    githubUrl: 'https://github.com/jeremiah-brenio/data-visualization',
    featured: true
  },
  {
    id: 'full-stack-social-platform',
    name: 'Social Media Platform',
    description: 'Comprehensive social media platform with user profiles, post creation, commenting, real-time notifications, messaging, and advanced content moderation.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Socket.io', 'AWS', 'Docker', 'Jest'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://social-platform-demo.vercel.app',
    githubUrl: 'https://github.com/jeremiah-brenio/social-platform',
    featured: true
  }
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
