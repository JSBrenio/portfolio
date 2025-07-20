import { useState } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';
import '../styles/ContactForm.css';
import HCaptcha from '@hcaptcha/react-hcaptcha';

interface ContactFormProps {
  contactContent: {
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    alerts: {
      success: string;
    };
  };
  className?: string;
}

const ACCESS_KEY = "a3661aa4-593b-443a-906e-cabf1373d884";

// Set to true for testing to avoid sending actual emails
const TESTING_MODE = false;

const ContactForm = ({ contactContent, className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if captcha is completed (in production mode)
    if (!TESTING_MODE && !captchaToken) {
      alert("Please complete the captcha verification.");
      return;
    }
    
    // Testing mode - simulate success without sending email
    if (TESTING_MODE) {
      console.log("TESTING MODE: Form data would be sent:", formData);
      console.log("TESTING MODE: Captcha token:", captchaToken);
      setShowSuccessPopup(true);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setCaptchaToken(null);
      // Auto-hide popup after 3 seconds
      setTimeout(() => setShowSuccessPopup(false), 3000);
      return;
    }
    
    // Production mode - actual API call
    const formDataObj = new FormData(e.target as HTMLFormElement);
    formDataObj.append("access_key", ACCESS_KEY);
    
    // Add captcha token to form data
    if (captchaToken) {
      formDataObj.append("h-captcha-response", captchaToken);
    }

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setShowSuccessPopup(true);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken(null);
        // Auto-hide popup after 3 seconds
        setTimeout(() => setShowSuccessPopup(false), 3000);
      } else {
        console.error("Form submission failed", res);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={`contact-form glow-highlight ${className}`}>
      <h2 className="contact-form-title">
        {contactContent.form.title}
      </h2>

      <form onSubmit={handleSubmit}>
      <div className="contact-form-group">
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

      <div className="contact-form-group">
        <HCaptcha
           sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
           reCaptchaCompat={false}
           onVerify={onHCaptchaChange} 
        /> 
      </div>

      <button type="submit" className="contact-form-button">
        <Send size={18} />
        {contactContent.form.submit}
      </button>
    </form>

    {/* Success Popup */}
    {showSuccessPopup && (
      <div className="success-popup-overlay">
        <div className="success-popup">
          <button 
            className="success-popup-close"
            onClick={() => setShowSuccessPopup(false)}
          >
            <X size={20} />
          </button>
          <div className="success-popup-content">
            <CheckCircle size={48} className="success-icon" />
            <h3 className="success-title">Message Sent!</h3>
            <p className="success-message">{contactContent.alerts.success}</p>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default ContactForm;
