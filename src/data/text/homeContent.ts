import type { Theme } from '../../types/theme';

export interface HomeContent {
  title: string;
  subtitle: string;
  skills: {
    frontend: {
      title: string;
      description: string;
    };
    performance: {
      title: string;
      description: string;
    };
    design: {
      title: string;
      description: string;
    };
  };
}

export const getHomeContent = (theme: Theme): HomeContent => {
  const baseContent: HomeContent = {
    title: "Jeremiah Brenio",
    subtitle: "Welcome to my portfolio! I'm a passionate full-stack developer who loves creating beautiful, functional web applications.",
    skills: {
      frontend: {
        title: "Frontend Development",
        description: "React, TypeScript, Modern CSS"
      },
      performance: {
        title: "Performance & UX",
        description: "Optimized & Accessible"
      },
      design: {
        title: "Design Systems",
        description: "Themes & Components"
      }
    }
  };

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Jeremiah Brenio",
      subtitle: "Welcome to my **neural interface**, choom. I'm a *netrunner* specializing in cutting-edge web technologies and `digital architecture`.",
      skills: {
        frontend: {
          title: "Frontend Development",
          description: "React, TypeScript, Modern CSS"
        },
        performance: {
          title: "Performance & UX",
          description: "Optimized & Accessible"
        },
        design: {
          title: "Design Systems",
          description: "Themes & Components"
        }
      }
    };
  }

  if (theme === 'witcher') {
    return {
      title: "Jeremiah Brenio",
      subtitle: "Greetings, traveler. I'm a **code-weaver** from the *Northern Kingdoms*, crafting `digital enchantments` and web sorcery.",
      skills: {
        frontend: {
          title: "Frontend Development",
          description: "React, TypeScript, Modern CSS"
        },
        performance: {
          title: "Performance & UX",
          description: "Optimized & Accessible"
        },
        design: {
          title: "Design Systems",
          description: "Themes & Components"
        }
      }
    };
  }

  return baseContent;
};
