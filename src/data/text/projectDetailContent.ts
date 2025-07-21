import type { Theme } from '../../types/theme';

export interface ProjectDetailContent {
  sections: {
    overview: string;
    technologies: string;
    features: string;
    links: string;
  };
  actions: {
    viewLive: string;
    viewCode: string;
    backToProjects: string;
  };
  featured: {
    badge: string;
  };
}

export const getProjectDetailContent = (theme: Theme, useThemedContent = true): ProjectDetailContent => {
  const baseContent: ProjectDetailContent = {
    sections: {
      overview: 'Project Overview',
      technologies: 'Technologies Used',
      features: 'Key Features',
      links: 'Project Links'
    },
    actions: {
      viewLive: 'View Live',
      viewCode: 'View Code',
      backToProjects: 'Back to Projects'
    },
    featured: {
      badge: 'Featured Project'
    }
  };

  // If themed content is disabled, return base content regardless of theme
  if (!useThemedContent) {
    return baseContent;
  }

  if (theme === 'cyberpunk') {
    return {
      sections: {
        overview: 'System Overview',
        technologies: 'Tech Stack Matrix',
        features: 'Core Functions',
        links: 'Access Points'
      },
      actions: {
        viewLive: 'Access System',
        viewCode: 'Inspect Code',
        backToProjects: 'Return to Matrix'
      },
      featured: {
        badge: 'FEATURED SYSTEM'
      }
    };
  }

  if (theme === 'witcher') {
    return {
      sections: {
        overview: 'Quest Details',
        technologies: 'Magical Components',
        features: 'Enchantments',
        links: 'Portals'
      },
      actions: {
        viewLive: 'Enter Realm',
        viewCode: 'Study Scrolls',
        backToProjects: 'Back to Quests'
      },
      featured: {
        badge: 'LEGENDARY QUEST'
      }
    };
  }

  return baseContent;
};
