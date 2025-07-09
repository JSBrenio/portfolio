import type { Theme } from '../../types/theme';

export interface ProjectsContent {
  title: string;
  subtitle: string;
  sections: {
    featured: string;
    other: string;
  };
}

export const getProjectsContent = (theme: Theme): ProjectsContent => {
  const baseContent: ProjectsContent = {
    title: "My Projects",
    subtitle: "A showcase of my development work and technical projects. Each project demonstrates different skills and technologies.",
    sections: {
      featured: "Featured Projects",
      other: "Other Projects"
    }
  };

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Neural Projects Archive",
      subtitle: "Explore my digital constructs and neural interface designs from the depths of Night City's cyberspace.",
      sections: {
        featured: "Priority Systems",
        other: "Additional Neural Networks"
      }
    };
  }

  if (theme === 'witcher') {
    return {
      title: "Quest Chronicles",
      subtitle: "Discover the mystical projects and digital enchantments crafted in the Northern Kingdoms.",
      sections: {
        featured: "Legendary Quests",
        other: "Side Quests"
      }
    };
  }

  return baseContent;
};
