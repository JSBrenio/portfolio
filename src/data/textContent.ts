import type { Theme } from '../types/theme';

export interface TextContent {
  pages: {
    home: {
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
    };
    about: {
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
    };
    projects: {
      title: string;
      subtitle: string;
      sections: {
        featured: string;
        other: string;
      };
    };
    contact: {
      title: string;
      subtitle: string;
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
      };
    };
  };
}

export const getTextContent = (theme: Theme): TextContent => {
  const baseContent: TextContent = {
    pages: {
      home: {
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
      },      about: {
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
      },
      projects: {
        title: "My Projects",
        subtitle: "A showcase of my development work and technical projects. Each project demonstrates different skills and technologies.",
        sections: {
          featured: "Featured Projects",
          other: "Other Projects"
        }
      },      contact: {
        title: "Get In Touch",
        subtitle: "Have a project in mind? Let's **discuss** how we can bring your *ideas* to life.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Send Message"
        }
      }
    }
  };

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      pages: {        home: {
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
        },        about: {
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
        },
        projects: {
          title: "Neural Projects Archive",
          subtitle: "Explore my digital constructs and neural interface designs from the depths of Night City's cyberspace.",
          sections: {
            featured: "Priority Systems",
            other: "Additional Neural Networks"
          }
        },        contact: {
          title: "Establish Neural Link",
          subtitle: "Ready to **jack in**? Send me your *data packet* and let's sync up for your next project.",
          form: {
            name: "Handle",
            email: "Contact Frequency",
            message: "Data Packet",
            submit: "Transmit"
          }
        }
      }
    };
  }

  if (theme === 'witcher') {
    return {
      pages: {        home: {
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
        },        about: {
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
        },
        projects: {
          title: "Quest Chronicles",
          subtitle: "Discover the mystical projects and digital enchantments crafted in the Northern Kingdoms.",
          sections: {
            featured: "Legendary Quests",
            other: "Side Quests"
          }
        },        contact: {
          title: "Send a Raven",
          subtitle: "Need a **witcher** for your *digital monsters*? Send word through the mystical channels.",
          form: {
            name: "Your Name",
            email: "Correspondence Address",
            message: "Your Quest",
            submit: "Send Raven"
          }
        }
      }
    };
  }

  return baseContent;
};

// Example of HTML formatting in text content:
// For rich formatting, you can use HTML strings like:
// content: "I'm a <strong>passionate developer</strong> who loves creating <em>beautiful, functional</em> web applications. This <code>theme system</code> demonstrates how <span className='highlight'>CSS variables</span> can create a seamless theming experience."

// Then in your component, use dangerouslySetInnerHTML:
// <p dangerouslySetInnerHTML={{ __html: textContent.pages.about.sections.background.content }} />
