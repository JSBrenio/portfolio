import type { Theme } from '../../types/theme';

export interface ContactContent {
  title: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
}

export const getContactContent = (theme: Theme): ContactContent => {
  const baseContent: ContactContent = {
    title: "Get In Touch",
    subtitle: "Have a project in mind? Let's **discuss** how we can bring your *ideas* to life.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message"
    }
  };

  // Theme-specific overrides
  if (theme === 'cyberpunk') {
    return {
      title: "Establish Neural Link",
      subtitle: "Ready to **jack in**? Send me your *data packet* and let's sync up for your next project.",
      form: {
        name: "Handle",
        email: "Contact Frequency",
        message: "Data Packet",
        submit: "Transmit"
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
        submit: "Send Raven"
      }
    };
  }

  return baseContent;
};
