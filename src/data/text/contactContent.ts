import type { Theme } from '../../types/theme';

export interface ContactContent {
  title: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
    title: string;
  };
  info: {
    email: {
      title: string;
      value: string;
    };
    phone: {
      title: string;
      value: string;
    };
    location: {
      title: string;
      value: string;
    };
    social: {
      title: string;
    };
  };
  alerts: {
    success: string;
  };
}

export const getContactContent = (theme: Theme, useThemedContent = true): ContactContent => {
  const baseContent: ContactContent = {
    title: "Get In Touch",
    subtitle: "Have a project in mind? Let's **discuss** how we can bring your *ideas* to life.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      title: "Send Message"
    },
    info: {
      email: {
        title: "Email",
        value: "jeremiah.brenio@example.com"
      },
      phone: {
        title: "Phone",
        value: "+1 (555) 123-4567"
      },
      location: {
        title: "Location",
        value: "San Francisco, CA"
      },
      social: {
        title: "Social Links"
      }
    },
    alerts: {
      success: "Message sent!"
    }
  };

  // If themed content is disabled, always return base content
  if (!useThemedContent) {
    return baseContent;
  }

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Establish Neural Link",
      subtitle: "Ready to **jack in**? Send me your *data packet* and let's sync up for your next project.",
      form: {
        name: "Handle",
        email: "Contact Frequency",
        message: "Data Packet",
        submit: "Transmit",
        title: "Initiate Contact Protocol"
      },
      info: {
        email: {
          title: "Neural Mail",
          value: baseContent.info.email.value
        },
        phone: {
          title: "Holo Call",
          value: baseContent.info.phone.value
        },
        location: {
          title: "Coordinates",
          value: baseContent.info.location.value
        },
        social: {
          title: "Network Links"
        }
      },
      alerts: {
        success: "Neural link established!"
      }
    };
  }

  if (theme === 'witcher') {
    return {
      title: "Send a Raven",
      subtitle: "Need a **witcher** for your *digital monsters*? Send word through the mystical channels.",
      form: {
        name: "Your Name",
        email: "Correspondence Address",
        message: "Your Quest",
        submit: "Send Raven",
        title: "Send Message"
      },
      info: {
        email: {
          title: "Raven Post",
          value: baseContent.info.email.value
        },
        phone: {
          title: "Megascope",
          value: baseContent.info.phone.value
        },
        location: {
          title: "Location",
          value: baseContent.info.location.value
        },
        social: {
          title: "Guild Connections"
        }
      },
      alerts: {
        success: "Message sent by raven!"
      }
    };
  }

  return baseContent;
};
