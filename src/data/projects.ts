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
    id: 'path-finding-visualizer',
    name: 'Path Finding Visualizer',
    description: 'Interactive visualization of pathfinding algorithms including A*, Dijkstra\'s, and BFS with real-time animation and performance metrics.',
    detailedDescription: pathfindingMd,
    techStack: ['javascript', 'html5', 'css3', 'algorithms'],
    image: '/blue_nobg.png',
    liveUrl: 'https://jsbrenio.github.io/Path-Finding-Visualizer/',
    githubUrl: 'https://github.com/JSBrenio/Path-Finding-Visualizer',
    featured: true
  },
  {
    id: 'lotus-query',
    name: 'Lotus Query',
    description: 'Powerful SQL query builder and database management tool with visual interface, multi-database support, and collaboration features.',
    detailedDescription: lotusQueryMd,
    techStack: ['typescript', 'react', 'nodejs', 'postgresql', 'express'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/cnlwebber/Lotus-Query',
    featured: true
  },
  {
    id: 'course-management-frontend',
    name: 'Course Management System - Frontend',
    description: 'Comprehensive university course management frontend with student dashboards, enrollment system, and interactive scheduling.',
    detailedDescription: courseFrontendMd,
    techStack: ['react', 'typescript', 'css3', 'javascript'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/NeonAfro/TCSS460_FrontEnd',
    featured: true
  },
  {
    id: 'course-management-backend',
    name: 'Course Management System - Backend',
    description: 'Robust backend API for university course management with authentication, enrollment engine, and academic records.',
    detailedDescription: courseBackendMd,
    techStack: ['java', 'spring', 'postgresql', 'hibernate', 'jwt'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/NeonAfro/TCSS460_BackEnd',
    featured: true
  },
  {
    id: 'j-minus-minus-compiler',
    name: 'J-- Compiler',
    description: 'Complete compiler implementation for J-- (Java subset) with lexical analysis, parsing, semantic analysis, and bytecode generation.',
    detailedDescription: jCompilerMd,
    techStack: ['java', 'compiler-design', 'jvm', 'algorithms'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/westerntoad/tcss421-jminusminus',
    featured: true
  },
  
  // Other Projects
  {
    id: 'jbash',
    name: 'JBash Shell',
    description: 'Custom Unix shell implementation in C with I/O redirection, pipes, background processing, and job control.',
    detailedDescription: jbashMd,
    techStack: ['c', 'unix', 'system-programming', 'bash'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/JSBrenio/JBash',
    featured: false
  },
  {
    id: 'taleless',
    name: 'Taleless',
    description: 'Interactive storytelling platform with multimedia support, branching narratives, and community features for creative writers.',
    detailedDescription: talelessMd,
    techStack: ['javascript', 'nodejs', 'mongodb', 'express', 'html5'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/JSBrenio/taleless',
    featured: false
  },
  {
    id: 'are-you-sure',
    name: 'Are You Sure? - Safety Critical Systems',
    description: 'Safety validation system with multi-level confirmations, error prevention, and audit logging for critical applications.',
    detailedDescription: areYouSureMd,
    techStack: ['java', 'javafx', 'testing', 'ui-ux'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/JSBrenio/TCSS452-AreYouSure',
    featured: false
  },
  {
    id: 'chatgpt-at-home',
    name: 'ChatGPT at Home',
    description: 'Self-hosted AI chat application with privacy-first design, multiple model support, and custom deployment options.',
    detailedDescription: chatgptHomeMd,
    techStack: ['python', 'ai', 'docker', 'apis', 'machine-learning'],
    image: '/blue_nobg.png',
    githubUrl: 'https://github.com/ChatGPTatHome/Project',
    featured: false
  }
];
