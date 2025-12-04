import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://YOUR-DOMAIN.com/contact.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus(result.message || "Error sending message");
      }
    } catch (error) {
      setStatus("Server error. Try again later.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-wrap">
        <div>
          <h2 className="section-title">Let's Connect</h2>

          <p className="contact-desc">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>

          <div className="contact-links">
            <a href="mailto:muhammedmame09@gmail.com" className="email-link">
              <Mail size={24} className="email-icon" />
              <span>muhammedmame09@gmail.com</span>
            </a>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/muhammed-nour-075620287/" className="social-btn linkedin">
                <Linkedin size={24} /> LinkedIn
              </a>

              <a href="https://github.com/MuhammedNour10" className="social-btn github">
                <Github size={24} /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input name="name" type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input name="email" type="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea name="message" rows="4" className="form-input" required></textarea>
            </div>

            <button className="btn btn-primary contact-submit">Send Message</button>

            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
