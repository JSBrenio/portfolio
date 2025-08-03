import type { Theme } from '../../types/theme';

export interface ProjectsContent {
  title: string;
  subtitle: string;
  sections: {
    featured: string;
    other: string;
  };
}

export const getProjectsContent = (theme: Theme, useThemedContent = true): ProjectsContent => {
  const baseContent: ProjectsContent = {
    title: "My Projects",
    subtitle: "A ***showcase*** of my development work and **technical projects**. Each project demonstrates different skills and technologies in *detail*.",
    sections: {
      featured: "Featured Projects",
      other: "Other Projects"
    }
  };

  // If themed content is disabled, return base content regardless of theme
  if (!useThemedContent) {
    return baseContent;
  }

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Project Shards",
      subtitle: "Immersive ***braindance*** logs of my **netruns**. Each spec routed with Daemons, Quickhacks, and *detailed Cyberdecks*.",
      sections: {
        featured: "Main Jobs",
        other: "Side Jobs"
      }
    };
  }

  if (theme === 'witcher') {
    return {
      title: "Project Journal",
      subtitle: "A ***journey*** through the **Path of Creation**. Each project a contract completed, a skill mastered, a *tale worth telling*.",
      sections: {
        featured: "Legendary Quests",
        other: "Side Quests"
      }
    };
  }

  return baseContent;
};
