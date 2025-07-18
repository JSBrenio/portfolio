import type { Project } from '../components/ProjectCard';

// Import markdown descriptions as raw text
import pathfindingMd from './project-descriptions/path-finding-visualizer.md?raw';
import lotusQueryMd from './project-descriptions/lotus-query.md?raw';
import courseFrontendMd from './project-descriptions/course-management-frontend.md?raw';
import courseBackendMd from './project-descriptions/course-management-backend.md?raw';
import jCompilerMd from './project-descriptions/j-minus-minus-compiler.md?raw';
import jbashMd from './project-descriptions/jbash.md?raw';
import talelessMd from './project-descriptions/taleless.md?raw';
import areYouSureMd from './project-descriptions/are-you-sure.md?raw';
import chatgptHomeMd from './project-descriptions/chatgpt-at-home.md?raw';

export const realProjects: Project[] = [
  // Featured Projects
    {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'The portfolio you\'re looking at right now!',
    detailedDescription: pathfindingMd,
    techStack: ['js', 'html5', 'css3', 'react'],
    image: '/blue_nobg.png',
    liveUrl: 'jsbrenio.com',
    githubUrl: 'https://github.com/JSBrenio/Path-Finding-Visualizer',
    featured: true,
    date: '2025-05'
  },
  {
    id: 'path-finding-visualizer',
    name: 'Path Finding Visualizer',
    description: 'Interactive visualization of pathfinding algorithms including A*, Dijkstra\'s, and BFS with real-time animation and performance metrics.',
    detailedDescription: pathfindingMd,
    techStack: ['js', 'html5', 'css3'],
    image: '/blue_nobg.png',
    liveUrl: 'https://jsbrenio.github.io/Path-Finding-Visualizer/',
    githubUrl: 'https://github.com/JSBrenio/Path-Finding-Visualizer',
    featured: true,
    date: '2024-07'
  },
  {
    id: 'lotus-query',
    name: 'Lotus Query',
    description: 'Powerful SQL query builder and database management tool with visual interface, multi-database support, and collaboration features.',
    detailedDescription: lotusQueryMd,
    techStack: ['ts', 'react', 'nodejs', 'postgresql', 'express'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/cnlwebber/Lotus-Query',
    featured: true,
    date: '2024-07'
  },
  {
    id: 'course-management-frontend',
    name: 'Course Management System - Frontend',
    description: 'Comprehensive university course management frontend with student dashboards, enrollment system, and interactive scheduling.',
    detailedDescription: courseFrontendMd,
    techStack: ['react', 'ts', 'css3'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/NeonAfro/TCSS460_FrontEnd',
    featured: true,
    date: '2024-11'
  },
  {
    id: 'course-management-backend',
    name: 'Course Management System - Backend',
    description: 'Robust backend API for university course management with authentication, enrollment engine, and academic records.',
    detailedDescription: courseBackendMd,
    techStack: ['java', 'spring', 'postgresql'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/NeonAfro/TCSS460_BackEnd',
    featured: true,
    date: '2024-10'
  },
  {
    id: 'j-minus-minus-compiler',
    name: 'J-- Compiler',
    description: 'Complete compiler implementation for J-- (Java subset) with lexical analysis, parsing, semantic analysis, and bytecode generation.',
    detailedDescription: jCompilerMd,
    techStack: ['java', 'compiler-design', 'jvm', 'algorithms'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/westerntoad/tcss421-jminusminus',
    featured: true,
    date: '2025-01'
  },
  
  // Other Projects
  {
    id: 'jbash',
    name: 'JBash Shell',
    description: 'Custom Unix shell implementation in C with I/O redirection, pipes, background processing, and job control.',
    detailedDescription: jbashMd,
    techStack: ['C', 'unix', 'system-programming', 'bash'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/JSBrenio/JBash',
    featured: false,
    date: '2025-01'
  },
  {
    id: 'taleless',
    name: 'Taleless',
    description: 'Interactive storytelling platform with multimedia support, branching narratives, and community features for creative writers.',
    detailedDescription: talelessMd,
    techStack: ['js', 'nodejs', 'mongodb', 'express', 'html5'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/JSBrenio/taleless',
    featured: false,
    date: '2025-04'
  },
  {
    id: 'are-you-sure',
    name: 'Are You Sure? - Safety Critical Systems',
    description: 'Safety validation system with multi-level confirmations, error prevention, and audit logging for critical applications.',
    detailedDescription: areYouSureMd,
    techStack: ['java', 'javafx', 'testing', 'ui-ux'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/JSBrenio/TCSS452-AreYouSure',
    featured: false,
    date: '2025-05'
  },
  {
    id: 'chatgpt-at-home',
    name: 'ChatGPT at Home',
    description: 'Self-hosted AI chat application with privacy-first design, multiple model support, and custom deployment options.',
    detailedDescription: chatgptHomeMd,
    techStack: ['python', 'ai', 'docker', 'apis', 'machine-learning'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/ChatGPTatHome/Project',
    featured: false,
    date: '2024-04'
  }
];
