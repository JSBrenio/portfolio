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

export const getAboutContent = (theme: Theme, useThemedContent = true): AboutContent => {
  // Base content for the About page
  const baseContent: AboutContent = {
    title: "About Me",
    subtitle: "Learn more about me as a **developer** and as a *person*!",
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
            "TypeScript",
            "JavaScript",
            "R",
            "SQL"
          ],

          "Tools & Technologies": [
            "Git",
            "GitHub",
            "VS Code",
            "Ubuntu Linux",
            "Docker",
            "Postman",
            "Eclipse",
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

          // Tools & Technologies

          // Databases

          // Soft Skills

          // Hard Skills
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
      subtitle: "Access my **neural interface profile** and system specifications from *Night City's database*.",
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
      subtitle: "Learn about this **traveling developer** from the *Northern Kingdoms* and their mystical coding arts.",
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
