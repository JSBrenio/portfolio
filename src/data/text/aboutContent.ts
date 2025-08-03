import type { Theme } from '../../types/theme';
import backgroundContent from '/src/data/text/about-background.md?raw';

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
      categories: Record<string, string[]>;
      skillDetails: Record<string, {
          definition: string;
          experience: string;
      }>;
    };
  };
}

export const getAboutContent = (theme: Theme, useThemedContent = true): AboutContent => {
  // Base content for the About page
  const baseContent: AboutContent = {
    title: "About Me",
    subtitle: "***Learn*** more about me as a **developer** and as a *person*!",
    sections: {
      background: {
        title: "Background",
        content: backgroundContent
      },
      skills: {
        title: "Skills",
        categories: {
          "Languages & Frameworks": [
            "Python",
            "Java",
            "C",
            "JavaScript",
            "TypeScript",
            "SQL"
          ],

          "Tools & Technologies": [
            "Git",
            "GitHub",
            "VS Code",
            "Ubuntu Linux",
            "Docker",
            "Postman",
          ],

          "Full-Stack Development": [
            "HTML",
            "CSS",
            "Express.js",
            "Node.js",
            "Next.js",
            "React",
            "Vite",
            "Axios",
            "MySQL",
            "PostgreSQL",
            "MSSQL"
          ],

          "Soft Skills": [
            "Communication",
            "Problem Solving",
            "Agile Methodology",
            "Mentorship",
            "Detail Oriented",
            "Team Collaboration",
            "Leadership",
            "Technical Writing",
          ],

          "Hard Skills": [
            "Debugging",
            "Algorithms",
            "Data Structures",
            "Computer Architecture",
            "Operating Systems",
            "Application Programming Interface (API)",
            "Testing",
            "Automation",
            "Human-Computer Interaction"
          ]
        },
        skillDetails: {
          // Languages & Frameworks
          Python: {
            definition: `A versatile, beginner-friendly programming language known for simple scripts to advanced applications.`,
            experience: `My **first** programming language I learned in community college. 
                        I *loved* the simplicity of the syntax in order to learn the basics of 
                        \`loop constructs\`, \`conditional statements\`, \`string manipulation\`, 
                        and \`functions\`.
                        
                        \n\nNowadays, I still use Python to practice **Leetcode**, 
                        create **scripts** for data manipulation, and code fast **prototypes**.`
          },
          Java: {
            definition: `A robust, object-oriented language for enterprise and Android apps.`,
            experience: `My **second** programming language I learned after Python, 
                        contributing to many projects throughout my education. 
                        The jump from Python's simple syntax to Java was very jarring and 
                        confusing at first, but learning \`Object-Oriented Programming\` 
                        helped me understand why Java's syntax is the way it is.
                        
                        \n\nI now consider **Java** a *comfy* language to code in, 
                        creating *reusable code* through \`inheritance\`, \`abstraction\`, and \`polymorphism\`.`
          },
          C: {
            definition: `A foundational language for systems, embedded, and performance-critical code.`,
            experience: `One of my *favorite* languages I have learned in my **Programming Languages Concepts** 
                        and **Operating Systems** classes. \`Memory Management\`, \`parameter passing\`, 
                        \`pointers\`, and \`multi-threading\` have only *enhanced* my 
                        existing programming knowledge.
                        
                        \n\nMy **low-level** knowledge has given me a *unique* perspective in **high-level** 
                        programming through *awareness* of \`memory\`, \`speed\`, and \`scalability\`.`
          },
          JavaScript: {
            definition: `The core language of the web, powering interactive sites and apps.`,
            experience: `A language that I have a **love/hate** relationship with. The *freedom* to do 
                        anything you want with \`objects\` without \`explicitely typing\` appealed to me, 
                        until you spend hours of \`debugging\` over one character in the codebase.
                        
                        \n\nStill, Being able to use **Higher-Order Functions** like 
                        \`map\`, \`filter\`, and \`reduce\` so *naturally*—and having JavaScript 
                        as my introduction to **web development**—holds a special place in my heart.`
          },
          TypeScript: {
            definition: `JavaScript with static typing for safer, scalable web development.`,
            experience: `While I *dislike* the constraints TypeScript imposes on JavaScript's chaos, 
                        I've gradually come to *appreciate* its **practicality** in production.
                        
                        \n\nI love \`interfaces\`, I hate *refactoring* them. I love \`any\`, 
                        I hate how it *makes* **TypeScript JavaScript** again. I love \`typing variables\`, 
                        I hate **Typing Hell**.`
          },
          SQL: {
            definition: `A query language for managing and retrieving data in databases.`,
            experience: `I have taken both **Database Systems Design** & **Internals** through *MySQL* Workbench to learn the
                        \`declaritive language\` and *MSSQL* (Microsoft SQL Server) to learn the \`Query Optimizer\`, respectively
                        
                        \n\n Relational Databases are an important aspect in development, and knowing how to *use* one and how they *work* has
                        helped me in making **schemas** and **efficient queries**.`
          },
          // Tools & Technologies
          Git: {
            definition: `A version control system for tracking code changes and collaboration.`,
            experience: `Git has been an *integral* part of my career, 
                        using version control for all my **projects**—big and small, 
                        collaborative and solo.
                        
                        \n\n Shout out to [Learn Git Branching](https://learngitbranching.js.org/)
                        for helping me learn \`git merge\` and the basics of the \`CLI\` git commands.`
          },
          GitHub: {
            definition: `A platform for hosting, sharing, and collaborating on code projects.`,
            experience: ``
          },
          'VS Code': {
            definition: `A popular, extensible code editor for many languages.`,
            experience: `Coming from Python's **IDLE** then to Java's **Eclipse**, 
                        VSCode quickly became my *favorite* IDE. It's become my *main*
                        environment for all langauges to code and learn.

                        \n\n When given creative liberty for *styling* my editor
                        and changing from defaults,
                        I struggle with *choice fatigue*, so I keep it **simple**.
                        
                        \n\nMy favorite theme is \`Dark+\`.`
          },
          'Ubuntu Linux': {
            definition: `An open-source operating system for development and servers.`,
            experience: `My first introduction to the Linux ecosystem and using
                        \`Bash\`. I used to be afraid of the complexities of using a
                        terminal, but after some *demystification*, I learned that the 
                        **Open-Source Operating System** is critical for servers and most systems.

                        \n\nThese days, I use \`WSL\` (Windows Subsystem for Linux) for tasks
                        needing \`Bash\` or the Linux OS.
                        `
          },
          Docker: {
            definition: `A tool for packaging apps into containers for portability and deployment.`,
            experience: ``
          },
          Postman: {
            definition: `A tool for testing, debugging, and documenting APIs.`,
            experience: ``
          },
          // Full-Stack Development
          HTML: {
            definition: `The standard markup language for creating and structuring content on web pages.`,
            experience: ``
          },
          CSS: {
            definition: `A style sheet language that controls the visual presentation and layout of HTML documents.`,
            experience: ``
          },
          'Express.js': {
            definition: `A Node.js framework for building web servers and APIs.`,
            experience: ``
          },
          'Node.js': {
            definition: `JavaScript runtime for building scalable server-side applications.`,
            experience: ``
          },
          'Next.js': {
            definition: `A React framework for server-side rendering and static sites.`,
            experience: ``
          },
          React: {
            definition: `A library for building interactive user interfaces with components.`,
            experience: ``
          },
          Vite: {
            definition: `A fast build tool for modern web projects.`,
            experience: ``
          },
          Axios: {
            definition: `A promise-based HTTP client for making API requests.`,
            experience: ``
          },
          MySQL: {
            definition: `A popular open-source relational database.`,
            experience: ``
          },
          PostgreSQL: {
            definition: `An advanced open-source relational database.`,
            experience: ``
          },
          MSSQL: {
            definition: `Microsoft's relational database for enterprise applications.`,
            experience: ``
          },
          // Soft Skills
          Communication: {
            definition: `Sharing ideas clearly and listening effectively.`,
            experience: ``
          },
          'Problem Solving': {
            definition: `Finding solutions to technical and team challenges.`,
            experience: ``
          },
          'Agile Methodology': {
            definition: `An iterative development approach that emphasizes flexibility, collaboration, and continuous improvement through short development cycles.`,
            experience: ``
          },
          Mentorship: {
            definition: `Providing guidance, knowledge sharing, and support to help others develop their technical and professional skills.`,
            experience: ``
          },
          'Detail Oriented': {
            definition: `Meticulous attention to accuracy, quality, and thoroughness in code, documentation, and project deliverables.`,
            experience: ``
          },
          'Team Collaboration': {
            definition: `Working well with others to achieve shared goals.`,
            experience: ``
          },
          Leadership: {
            definition: `Inspiring and organizing teams to achieve objectives while fostering growth, innovation, and accountability.`,
            experience: ``
          },
          'Technical Writing': {
            definition: `Creating clear, concise documentation for code, processes, and technical concepts to enable knowledge sharing and maintainability.`,
            experience: ``
          },
          // Hard Skills
          Debugging: {
            definition: `Identifying and fixing errors in code.`,
            experience: ``
          },
          Algorithms: {
            definition: `Step-by-step procedures for solving problems efficiently.`,
            experience: ``
          },
          'Data Structures': {
            definition: `Methods of organizing, storing, and accessing data efficiently, including arrays, linked lists, trees, graphs, and hash tables.`,
            experience: ``
          },
          'Computer Architecture': {
            definition: `The design principles and organization of computer hardware components, including CPU and main memory.`,
            experience: ``
          },
          'Operating Systems': {
            definition: `System software that manages computer hardware resources and provides essential services for application programs.`,
            experience: ``
          },
          'Application Programming Interface (API)': {
            definition: `A set of protocols, routines, and tools that allow different software applications to communicate and interact with each other.`,
            experience: ``
          },
          Testing: {
            definition: `The systematic process of evaluating software functionality to ensure it meets requirements and performs as expected.`,
            experience: ``
          },
          Automation: {
            definition: `Using technology to perform tasks with minimal human intervention.`,
            experience: ``
          },
          'Human-Computer Interaction': {
            definition: `Designing interfaces for effective user experiences.`,
            experience: ``
          }
        }
      }
    }
  };

  // If themed content is disabled, return base content regardless of theme
  if (!useThemedContent) {
    return baseContent;
  }

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Neural Profile",
      subtitle: "***Access*** my **neural interface specs** from *Night City's database*.",
      sections: {
        background: {
          title: "Neural History",
          content: backgroundContent
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
      subtitle: "***Learn*** about this **traveling developer** from the *Northern Kingdoms*.",
      sections: {
        background: {
          title: "Origins",
          content: backgroundContent
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
