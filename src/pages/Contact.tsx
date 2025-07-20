import { useTheme } from "../hooks/useTheme";
import { getContactContent } from "../data/text";
import MarkdownContent from "../components/MarkdownContent";
import ContactForm from "../components/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  const { theme, useThemedContent } = useTheme();
  const contactContent = getContactContent(theme, useThemedContent);

  return (
    <div className="contact-container">
      <header className="page-header">
        <h1 className="page-title glow-primary">
          {contactContent.title}
        </h1>
        <MarkdownContent
          content={contactContent.subtitle}
          className="contact-subtitle"
        />
      </header>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <div
            className={`contact-info-card glow-primary`}
          >
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">
                  {contactContent.info.email.title}
                </h3>
                <p className="contact-info-description">
                  {contactContent.info.email.value}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`contact-info-card glow-secondary`}
          >
            <div className="contact-info-item">
              <div className="contact-info-icon secondary">
                <Phone size={24} />
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">
                  {contactContent.info.phone.title}
                </h3>
                <p className="contact-info-description">{contactContent.info.phone.value}</p>
              </div>
            </div>
          </div>
          <div
            className={`contact-info-card glow-accent`}
          >
            <div className="contact-info-item">
              <div className="contact-info-icon accent">
                <MapPin size={24} />
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">
                  {contactContent.info.location.title}
                </h3>
                <p className="contact-info-description">
                  {contactContent.info.location.value}
                </p>
              </div>
            </div>
          </div>{" "}
          {/* Social Links */}
          <div className="contact-info-card">
            <h3 className="contact-info-title social-links-title">
              {contactContent.info.social.title}
            </h3>
            <div className="contact-social-links">
              <a
                href="#"
                className="contact-social-link accent"
                onClick={(e) => e.preventDefault()}
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="contact-social-link secondary"
                onClick={(e) => e.preventDefault()}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="contact-social-link highlight"
                onClick={(e) => e.preventDefault()}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm contactContent={contactContent} />
      </div>
    </div>
  );
};

export default Contact;
