import { useTheme } from "../hooks/useTheme";
import { getContactContent } from "../data/text";
import MarkdownContent from "../components/MarkdownContent";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const { theme } = useTheme();
  const contactContent = getContactContent(theme);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(
      theme === "cyberpunk"
        ? "Neural link established!"
        : theme === "witcher"
          ? "Message sent by raven!"
          : "Message sent!",
    );
  };

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
                  {theme === "cyberpunk"
                    ? "Neural Mail"
                    : theme === "witcher"
                      ? "Raven Post"
                      : "Email"}
                </h3>
                <p className="contact-info-description">
                  jeremiah.brenio@example.com
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
                  {theme === "cyberpunk"
                    ? "Holo Call"
                    : theme === "witcher"
                      ? "Megascope"
                      : "Phone"}
                </h3>
                <p className="contact-info-description">+1 (555) 123-4567</p>
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
                  {theme === "cyberpunk"
                    ? "Coordinates"
                    : theme === "witcher"
                      ? "Location"
                      : "Location"}
                </h3>
                <p className="contact-info-description">
                  {theme === "cyberpunk"
                    ? "Night City, Sector 7"
                    : theme === "witcher"
                      ? "Oxenfurt, Redania"
                      : "San Francisco, CA"}
                </p>
              </div>
            </div>
          </div>{" "}
          {/* Social Links */}
          <div className="contact-info-card">
            <h3 className="contact-info-title social-links-title">
              {theme === "cyberpunk"
                ? "Network Links"
                : theme === "witcher"
                  ? "Guild Connections"
                  : "Social Links"}
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
        <div
          className={`contact-form glow-highlight`}
        >
          <h2 className="contact-form-title">
            {theme === "cyberpunk"
              ? "Initiate Contact Protocol"
              : theme === "witcher"
                ? "Send Message"
                : "Send Message"}
          </h2>

          <form onSubmit={handleSubmit}>
            {" "}
            <div className="contact-form-group">
              {" "}
              <label className="contact-form-label" htmlFor="name">
                {contactContent.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="contact-form-input"
                required
              />
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="email">
                {contactContent.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-form-input"
                required
              />
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="message">
                {contactContent.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="contact-form-textarea"
                required
              />
            </div>
            <button type="submit" className="contact-form-button">
              <Send size={18} />
              {contactContent.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
