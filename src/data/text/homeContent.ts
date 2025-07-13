import type { Theme } from '../../types/theme';

export interface HomeContent {
  title: string;
  name: string;
  niche: string;
  statement: string;
}

export const getHomeContent = (theme: Theme): HomeContent => {
  const baseContent: HomeContent = {
    title: "Hello, There!",
    name: "Jeremiah Brenio",
    niche: "Software Developer",
    statement: "Welcome to my **portfolio**! I'm a *passionate* full-stack developer who loves creating beautiful, `functional web applications`.",
  };

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Sup, Choom!",
      name: "Jeremiah Brenio",
      niche: "Netrunner",
      statement: "Welcome to my **neural interface**, choom. I'm a *netrunner* specializing in cutting-edge web technologies and `digital architecture`.",
    };
  }

  if (theme === 'witcher') {
    return {
      title: "Greetings, Traveler!",
      name: "Jeremiah Brenio",
      niche: "Codermancer",
      statement: "Greetings, traveler. I'm a **code-weaver** from the *Northern Kingdoms*, crafting `digital enchantments` and web sorcery.",
    };
  }

  return baseContent;
};
