import type { Theme } from '../../types/theme';

export interface AboutContent {
  title: string;
  subtitle: string;
  sections: {
    background: {
      title: string;
      content: string;
    };
    skills: {
      title: string;
      categories: {
        [key: string]: string[];
      };
      skillDetails: {
        [key: string]: {
          definition: string;
          experience: string;
        };
      };
    };
  };
}

export const getAboutContent = (theme: Theme): AboutContent => {
  const baseContent: AboutContent = {
    title: "About Me",
    subtitle: "This page demonstrates how themes persist across different routes. Notice how all colors automatically match your selected theme!",
    sections: {
      background: {
        title: "Background",
        content: "I'm a **passionate developer** who loves creating *beautiful, functional* web applications. This `theme system` demonstrates how **CSS variables** can create a seamless theming experience."
      },
      skills: {
        title: "Skills",
        categories: {
          "Languages & Frameworks": [
          "Java",
          "Python",
          "C",
          "R",
          "React",
          "TypeScript",
          "JavaScript",],
          "Tools & Technologies": ["Node.js", "Vite", "Git", "Docker", "VS Code", "Linux"],
          "Databases & Cloud": ["PostgreSQL", "MongoDB", "AWS", "Firebase", "Redis"],
          "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Leadership"],
          "Hard Skills": ["Algorithm Design", "System Architecture", "API Development", "Testing"]
        },
        skillDetails: {
          // Languages & Frameworks
          "Java": {
            definition: "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible, widely used for enterprise-scale applications.",
            experience: "Extensive experience building enterprise applications, Android development, and backend systems. Proficient with Spring Boot, JPA, Maven, and microservices architecture. Used in multiple large-scale projects including course management systems and distributed applications."
          },
          "Python": {
            definition: "A high-level, interpreted programming language with dynamic semantics, known for its clear syntax and code readability.",
            experience: "Versatile usage across data science, machine learning, web development, and automation scripts. Proficient in Django, Flask, NumPy, Pandas, and scikit-learn. Built data analysis tools, web APIs, and automation systems for various projects."
          },
          "C": {
            definition: "A general-purpose, procedural programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
            experience: "Low-level systems programming for operating systems, embedded systems, and performance-critical applications. Experience with memory management, hardware interaction, and system-level programming. Used for shell implementations and system utilities."
          },
          "R": {
            definition: "A programming language and software environment for statistical computing and graphics, widely used among statisticians and data scientists.",
            experience: "Statistical programming for data analysis, visualization, and machine learning projects. Experience with ggplot2, dplyr, tidyverse, and statistical modeling. Used for academic research and data science coursework."
          },
          "React": {
            definition: "A JavaScript library for building user interfaces, particularly single-page applications where data changes over time, using a component-based architecture.",
            experience: "Expert-level development of interactive user interfaces with modern React patterns. Extensive use of hooks, context API, state management, and component lifecycle. Built multiple full-stack applications including this portfolio and course management systems."
          },
          "TypeScript": {
            definition: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale by adding static type definitions.",
            experience: "Extensive experience enhancing JavaScript applications with type safety and improved developer productivity. Proficient with advanced type features, interfaces, generics, and type definitions. Used in all modern React projects for better code reliability."
          },
          "JavaScript": {
            definition: "A high-level, dynamic, untyped, and interpreted programming language, standardized in the ECMAScript language specification.",
            experience: "Comprehensive full-stack JavaScript development for both frontend and backend applications. Proficient in ES6+, async programming, modern frameworks, and Node.js ecosystem. Core language for web development projects."
          },
          
          // Tools & Technologies
          "Node.js": {
            definition: "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.",
            experience: "Server-side development building REST APIs, real-time applications, and microservices. Experience with Express.js, Socket.io, npm package management, and various middleware. Built backend services for multiple full-stack applications."
          },
          "Vite": {
            definition: "A build tool that aims to provide a faster and leaner development experience for modern web projects, leveraging native ES modules.",
            experience: "Modern build tool usage for optimizing development workflows and build processes. Experience configuring development environments, optimizing bundle sizes, and setting up efficient development servers for React applications."
          },
          "Git": {
            definition: "A distributed version control system for tracking changes in source code during software development, designed for coordinating work among programmers.",
            experience: "Proficient in collaborative development workflows including branching strategies, merge conflict resolution, code reviews, and Git best practices. Used across all projects for version control and team collaboration."
          },
          "Docker": {
            definition: "A platform as a service that uses OS-level virtualization to deliver software in packages called containers, ensuring consistency across environments.",
            experience: "Containerization for application deployment and development environment consistency. Experience creating Dockerfiles, managing containers, and setting up development environments for consistent deployment across platforms."
          },
          "VS Code": {
            definition: "A source-code editor made by Microsoft for Windows, Linux and macOS, featuring support for debugging, syntax highlighting, and extensive customization.",
            experience: "Primary development environment with extensive customization and productivity optimizations. Expert in extensions, debugging configurations, workspace settings, and productivity features across multiple programming languages."
          },
          "Linux": {
            definition: "A family of open-source Unix-like operating systems based on the Linux kernel, widely used for servers, development, and embedded systems.",
            experience: "System administration and development on Unix-like systems. Comfortable with command line operations, shell scripting, system configuration, and server management. Daily development environment for most projects."
          },
          
          // Databases & Cloud
          "PostgreSQL": {
            definition: "An open-source relational database management system emphasizing extensibility and SQL compliance, known for its reliability and robust feature set.",
            experience: "Advanced database design and optimization including complex queries, indexing strategies, and performance tuning. Used in multiple full-stack applications for data persistence, including course management and web applications."
          },
          "MongoDB": {
            definition: "A source-available cross-platform document-oriented database program, classified as a NoSQL database using JSON-like documents with optional schemas.",
            experience: "NoSQL database design for flexible data models and scalable applications. Experience with aggregation pipelines, indexing strategies, and schema design. Used for projects requiring flexible document storage and rapid prototyping."
          },
          "AWS": {
            definition: "Amazon Web Services, a comprehensive and evolving cloud computing platform providing infrastructure as a service, platform as a service, and software as a service.",
            experience: "Cloud platform experience with various managed services including EC2, S3, Lambda, and RDS. Used for scalable application deployment, serverless functions, and cloud-based development environments."
          },
          "Firebase": {
            definition: "Google's Backend-as-a-Service platform providing tools and infrastructure for building web and mobile applications, including real-time databases and authentication.",
            experience: "Backend-as-a-Service platform usage for rapid application development. Experience with real-time databases, authentication systems, hosting, and serverless functions. Used for web applications requiring real-time features."
          },
          "Redis": {
            definition: "An open-source, in-memory data structure store, used as a database, cache, and message broker, supporting various data structures.",
            experience: "In-memory data storage for caching, session management, and real-time applications. Experience with data structures, performance optimization, and integration with web applications for improved response times."
          },
          
          // Soft Skills
          "Problem Solving": {
            definition: "The process of finding solutions to difficult or complex issues through analytical thinking, creativity, and systematic approaches.",
            experience: "Strong analytical approach to breaking down complex technical challenges into manageable components. Demonstrated ability in debugging complex systems, optimizing performance bottlenecks, and finding creative solutions to technical constraints."
          },
          "Team Collaboration": {
            definition: "The ability to work effectively with others in a group setting, combining individual skills and knowledge to achieve common goals.",
            experience: "Extensive experience working in agile development teams using Scrum methodology. Comfortable with code reviews, pair programming, knowledge sharing sessions, and cross-functional collaboration with designers and product managers."
          },
          "Communication": {
            definition: "The ability to convey information effectively and efficiently to various audiences through verbal, written, and visual means.",
            experience: "Clear technical documentation writing, presentation skills for both technical and non-technical audiences, and ability to explain complex concepts simply. Experience mentoring junior developers and presenting project updates to stakeholders."
          },
          "Leadership": {
            definition: "The ability to guide, influence, and inspire others toward achieving common objectives while taking responsibility for outcomes.",
            experience: "Project leadership experience including technical decision making, team coordination, and mentoring junior developers. Led development initiatives, drove technical architecture decisions, and facilitated team problem-solving sessions."
          },
          
          // Hard Skills
          "Algorithm Design": {
            definition: "The process of creating step-by-step procedures for solving computational problems efficiently, considering time and space complexity.",
            experience: "Strong foundation in data structures, algorithms, and computational complexity analysis. Experience optimizing code performance, solving algorithmic challenges, and implementing efficient solutions for complex problems in various projects."
          },
          "System Architecture": {
            definition: "The conceptual model that defines the structure, behavior, and relationships of a system's components and their interactions.",
            experience: "Designing scalable, maintainable software systems with proper separation of concerns. Experience with microservices architecture, design patterns, database design, and making architectural decisions for long-term maintainability."
          },
          "API Development": {
            definition: "The process of creating application programming interfaces that allow different software applications to communicate and exchange data.",
            experience: "Building RESTful and GraphQL APIs with proper documentation, versioning, and security considerations. Experience with API design principles, authentication, rate limiting, and integration testing for robust backend services."
          },
          "Testing": {
            definition: "The process of evaluating and verifying that a software application or system meets specified requirements and functions correctly.",
            experience: "Comprehensive testing strategies including unit tests, integration tests, and end-to-end testing. Experience with Jest, Cypress, test-driven development, and automated testing pipelines for ensuring code quality and reliability."
          }
        }
      }
    }
  };

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Neural Profile",
      subtitle: "Access my **neural interface profile** and system specifications from *Night City's database*.",
      sections: {
        background: {
          title: "Neural History",
          content: baseContent.sections.background.content
        },
        skills: {
          title: "Skill Matrix",
          categories: baseContent.sections.skills.categories,
          skillDetails: baseContent.sections.skills.skillDetails
        }
      }
    };
  }

  if (theme === 'witcher') {
    return {
      title: "Character Sheet",
      subtitle: "Learn about this **traveling developer** from the *Northern Kingdoms* and their mystical coding arts.",
      sections: {
        background: {
          title: "Origins",
          content: baseContent.sections.background.content
        },
        skills: {
          title: "Abilities",
          categories: baseContent.sections.skills.categories,
          skillDetails: baseContent.sections.skills.skillDetails
        }
      }
    };
  }

  return baseContent;
};
