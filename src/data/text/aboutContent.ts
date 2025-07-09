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
      skillsList: string[];
    };
    contact: {
      title: string;
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
        skillsList: ["React", "TypeScript", "CSS", "Node.js", "Git"]
      },
      contact: {
        title: "Let's Connect"
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
          content: "A skilled **netrunner** specializing in creating `secure digital interfaces` and *neural-link compatible* applications. Extensive experience in **Night City's corporate** data systems."
        },
        skills: {
          title: "Skill Matrix",
          skillsList: ["Neural Hacking", "Quantum Code", "Cyber Security", "AI Systems", "Data Mining"]
        },
        contact: {
          title: "Establish Connection"
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
          content: "A traveling **code-weaver** from the *Northern Kingdoms*, skilled in the ancient arts of `web development` and **digital alchemy**. Trained in the schools of *React* and `TypeScript`."
        },
        skills: {
          title: "Abilities",
          skillsList: ["Web Sorcery", "Code Alchemy", "Digital Runes", "Server Conjuring", "API Spells"]
        },
        contact: {
          title: "Send Correspondence"
        }
      }
    };
  }

  return baseContent;
};
