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
    subtitle: "Let's ***connect!*** Contact me through *any* of these **platforms**.",
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
        value: "jsbrenio@gmail.com"
      },
      phone: {
        title: "Phone",
        value: "+1 (206) 503-1211"
      },
      location: {
        title: "Location",
        value: "Seattle, WA"
      },
      social: {
        title: "Social Links"
      }
    },
    alerts: {
      success: "Success!"
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
      subtitle: "Ready to ***jack in?*** Send me your *data packet*.",
      form: baseContent.form,
      info: {
        email: {
          title: "Handle",
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
          title: "Access Points"
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
      subtitle: "***Toss a coin*** to your **coder**?",
      form: baseContent.form,
      info: {
        email: {
          title: "Xenovox",
          value: baseContent.info.email.value
        },
        phone: {
          title: "Megascope",
          value: baseContent.info.phone.value
        },
        location: {
          title: "Keep",
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
