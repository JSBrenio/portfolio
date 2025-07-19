import type { Theme } from '../../types/theme';

export interface HomeContent {
  title: string;
  name: string;
  niche: string;
  statement: string;
}

export const getHomeContent = (theme: Theme, useThemedContent = true): HomeContent => {
  const baseContent: HomeContent = {
    title: "Hello, There!",
    name: "Jeremiah Brenio",
    niche: "Software Developer",
    statement: "Welcome to my **portfolio**! I am a *passionate* **software developer** who loves learning and creating anything `software`.",
  };

  // If themed content is disabled, always return base content
  if (!useThemedContent) {
    return baseContent;
  }

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Sup, Choom!",
      name: "Jeremiah Brenio",
      niche: "Netrunner",
      statement: "Welcome to my **neural interface**, nova. I'm a *netrunner* specializing in cutting-edge technologies and `digital architecture`.",
    };
  }

  if (theme === 'witcher') {
    return {
      title: "Greetings, Traveler!",
      name: "Jeremiah Brenio",
      niche: "Codermancer",
      statement: "Welcome to my bestiary, dh'oine. I'm a **codermancer** from *Toussaint*, crafting `digital enchantments`.",
    };
  }

  return baseContent;
};
