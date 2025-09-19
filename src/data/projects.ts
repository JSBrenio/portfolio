// Project interface definition
export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string; // New field for markdown content
  keyFeatures?: string[]; // Array of key features
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  date: string; // Format: "YYYY-MM" (e.g., "2024-03")
  status?: string; // Project status i.e. 'live' | 'development' | 'archived'
  projectType?: string; // Project type i.e. 'fullStack' | 'frontend' | 'backend' | 'mobile' | 'desktop'
}

// Import markdown descriptions as raw text
import pathfindingMd from './project-descriptions/path-finding-visualizer.md?raw';
import lotusQueryMd from './project-descriptions/lotus-query.md?raw';
import courseFrontendMd from './project-descriptions/mock-library-frontend.md?raw';
import courseBackendMd from './project-descriptions/mock-library-backend.md?raw';
import jbashMd from './project-descriptions/jbash.md?raw';
import talelessMd from './project-descriptions/taleless.md?raw';
import areYouSureMd from './project-descriptions/are-you-sure.md?raw';
import projectHub from './project-descriptions/projuct-hub.md?raw';
import portfolio from './project-descriptions/portfolio.md?raw';

const image = 'plz.jpg'
export const realProjects: Project[] = [
  // Featured Projects
    {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'The **portfolio** you\'re looking at right now! A `static website` featuring all things *me*!',
    detailedDescription: portfolio,
    keyFeatures: [
      'Multi-theme support (4 themes)',
      'Markdown-based project descriptions',
      'Deployed on Cloudflare Pages',
      'Mobile Support',
    ],
    techStack: ['typescript', 'css3', 'html5', 'markdown', 'react', 'vitejs', 'cloudflare', 'git'],
    image: '/portfolio/image.gif',
    liveUrl: 'https://jsbrenio.com',
    githubUrl: 'https://github.com/JSBrenio/portfolio',
    featured: true,
    date: '2025-05',
    status: 'Live via Cloudflare',
    projectType: 'Static Website'
  },
  {
    id: 'lotus-query',
    name: 'Lotus Query',
    description: 'A **Magic the Gathering database** and *card searching application* with advanced filtering capabilities.',
    detailedDescription: lotusQueryMd,
    keyFeatures: [
      'Advanced card search and filtering',
      'Single Page Application with React Router',
      'Axios and CORS for communication with Scryfall API',
      'Comprehensive normalized MTG database',
    ],
    techStack: ['js', 'python', 'css3', 'axios', 'react', 'expressjs', 'nodejs', 'mysql'],
    image: '/lotus-query/image-1.gif',
    githubUrl: 'https://github.com/cnlwebber/Lotus-Query',
    featured: true,
    date: '2024-07',
    status: 'Local host only',
    projectType: 'Static Website'
  },  
  {
    id: 'path-finding-visualizer',
    name: 'Path Finding Visualizer',
    description: 'Interactive **visualization** of *pathfinding algorithms* including `A*`, `Dijkstra\'s`, and `BFS` with **real-time animation** and *performance metrics*.',
    detailedDescription: pathfindingMd,
    keyFeatures: [
      'Real-time algorithm visualization',
      'Multiple pathfinding algorithms (A*, Dijkstra, BFS)',
      'Interactive grid with wall drawing and random maze generation',
      'Data collection system for algorithm comparison studies',
    ],
    techStack: ['js', 'python', 'css3', 'html5', 'git', 'github'],
    image: '/path-finding-visualizer/image.gif',
    liveUrl: 'https://jsbrenio.github.io/Path-Finding-Visualizer/',
    githubUrl: 'https://github.com/JSBrenio/Path-Finding-Visualizer',
    featured: true,
    date: '2024-07',
    status: 'Live via GitHub pages',
    projectType: 'Static Website'
  },
  {
    id: 'mock-library-frontend',
    name: 'Mock Library - Frontend',
    description: '**Mock Library Web Service** using another team\'s `RESTful API` for querying *books* and designed with prebuilt **MUI React components** for a *modern design*.',
    detailedDescription: courseFrontendMd,
    keyFeatures: [
      'User Account creation and sign-in',
      'Large book service to view, rate, delete, and create books',
      'Modern Material-UI components for fast design',
      'RESTful API integration with external service',
      'Next.js framework with server-side rendering',
      'Advanced book search and filtering system',
    ],
    techStack: ['typescript', 'mui', 'nextjs', 'react', 'nodejs', 'docker', 'eslint', 'postman', 'prettier', 'yarn'],
    image: '/mock-library-frontend/image.gif',
    githubUrl: 'https://github.com/NeonAfro/TCSS460_FrontEnd',
    featured: true,
    date: '2024-11',
    status: 'Local host only',
    projectType: 'Static Website'
  },
  {
    id: 'mock-library-backend',
    name: 'Mock Library - Backend',
    description: 'A **fully documented** `RESTful API` for *getting*, *modifying*, *adding*, and *deleting* mock book data in a **Postgres database**.',
    detailedDescription: courseBackendMd,
    keyFeatures: [
      'API that handles user data, messages, and books',
      'Secure database of user data through salting & hashing passwords',
      'Fully documented RESTful API with full CRUD operations',
      'PostgreSQL database integration and management',
      'Containerized deployment with Docker',
      'Professional API testing with Postman',
    ],
    techStack: ['python', 'typescript', 'csv', 'expressjs', 'nodejs', 'postgresql', 'docker', 'eslint', 'github', 'postman', 'prettier', 'yarn'],
    image: '/mock-library-backend/image.gif',
    liveUrl: 'https://neonafro.github.io/TCSS460_BackEnd/',
    githubUrl: 'https://github.com/NeonAfro/TCSS460_BackEnd',
    featured: true,
    date: '2024-10',
    status: 'Local host only',
    projectType: 'API'
  },
    // Other Projects
  {
    id: 'jbash',
    name: 'JBash Shell',
    description: '**Custom Unix shell** implementation in `C` using `fork()`, `exec()`, and `wait()` with *basic line editing*.',
    detailedDescription: jbashMd,
    keyFeatures: [
      'Custom shell implementation with C programming',
      'Process management with fork( ), exec( ), and wait( )',
      'Character-by-character and terminal manipulation using termios.h',
      'Basic command line editing and navigation',
    ],
    techStack: ['c', 'bash', 'linux', 'ubuntu'],
    image: '/jbash/image.gif',
    githubUrl: 'https://github.com/JSBrenio/JBash',
    featured: false,
    date: '2025-01',
    status: 'Downloadable via Github Repo',
    projectType: 'Custom Unix Shell'
  },
  {
    id: 'taleless',
    name: 'Taleless',
    description: 'A **one week UW Game Jam** submission made in `Godot` by a *team of three*.',
    detailedDescription: talelessMd,
    keyFeatures: [
      'Dungeon adventure with combat, puzzle solving, and exploration',
      'Original art, music, and code developed in one week time constraint',
      'Godot engine implementation and game mechanics in GDScript',
      'Support for Windows, Mac, and Linux',
    ],
    techStack: ['godot', 'git', 'itchio'],
    image: '/taleless/image.gif',
    liveUrl: 'https://westerntoad.itch.io/taleless',
    featured: false,
    date: '2025-04',
    status: 'Live via itch.io',
    projectType: 'Game'
  },
  {
    id: 'are-you-sure',
    name: 'Synchro Reimagined',
    description: 'A **collaboration** with *Civil Engineering students* to redesign `Cubic\'s Synchro Studio` **user interface**',
    detailedDescription: areYouSureMd,
    keyFeatures: [
      'Collaborative interdisciplinary design project',
      'Iterative Design for rapid prototyping and better UI outcomes',
      'Low-Fidelity paper prototype and High-Fidelity digital prototype',
      'Professional UI/UX redesign of existing software through Figma',
    ],
    techStack: ['markdown', 'figma', 'github'],
    image: '/are-you-sure/image.png',
    githubUrl: 'https://github.com/JSBrenio/TCSS452-AreYouSure',
    featured: false,
    date: '2025-05',
    status: 'Design available via Github Repo',
    projectType: 'UI/UX Design'
  },
  {
    id: 'project-hub',
    name: 'Project Hub',
    description: 'A **project manager** made in `Java Swing` through *Agile Methodologies*.',
    detailedDescription: projectHub,
    keyFeatures: [
      'Desktop application built with Java Swing',
      'Agile development methodology implementation',
      'JSON data persistence and management',
      'Version control integration with Git and GitHub'
    ],
    techStack: ['java', 'json', 'git', 'github'],
    image: '/project-hub/image.gif',
    githubUrl: 'https://github.com/ChatGPTatHome/Project',
    featured: false,
    date: '2024-04',
    status: 'Downloadable via Github Repo',
    projectType: 'App'
  }
];
