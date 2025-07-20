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
  Instagram,
} from "lucide-react";
import { 
  FaSteam,
} from "react-icons/fa";
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
                href="https://github.com/jsbrenio"
                className="contact-social-link accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jeremiah-brenio"
                className="contact-social-link secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://steamcommunity.com/id/capncandy/"
                className="contact-social-link highlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSteam size={20}/>
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
