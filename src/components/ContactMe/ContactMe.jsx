import React from "react";
import "./ContactMe.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const RESUME_URL = `${process.env.PUBLIC_URL}/TECH-RESUME.pdf`;

const contactLinks = [
  {
    name: "Email",
    detail: "carlos-marinjr1@outlook.com",
    icon: <FaEnvelope size={24} />,
    url: "mailto:carlos-marinjr1@outlook.com",
  },
  {
    name: "GitHub",
    detail: "carlos-marin1742",
    icon: <FaGithub size={24} />,
    url: "https://github.com/carlos-marin1742",
  },
  {
    name: "LinkedIn",
    detail: "carlos-marin",
    icon: <FaLinkedin size={24} />,
    url: "https://www.linkedin.com/in/carlos-marin-90482b13b/",
  },
  {
    name: "Resume",
    detail: "Download PDF",
    icon: <FaFileDownload size={24} />,
    url: RESUME_URL,
    download: true,
  },
];

function ContactMe() {
  const handleDownload = (e, url) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="ContactMe" className="section contact-section">
      <div className="section-head">
        <span className="section-eyebrow">[ contact ]</span>
        <h2>Let's Connect</h2>
      </div>
      <p className="contact-subtitle">
        Open to full-time roles, freelance projects, and interesting
        conversations about AI.
      </p>

      <div className="contact-grid">
        {contactLinks.map((link) =>
          link.download ? (
            <button
              key={link.name}
              onClick={(e) => handleDownload(e, link.url)}
              className="contact-card"
            >
              <span className="contact-icon">{link.icon}</span>
              <span className="contact-text">
                <span className="contact-label">{link.name}</span>
                <span className="contact-detail">{link.detail}</span>
              </span>
            </button>
          ) : (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">{link.icon}</span>
              <span className="contact-text">
                <span className="contact-label">{link.name}</span>
                <span className="contact-detail">{link.detail}</span>
              </span>
            </a>
          )
        )}
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Carlos Marin</span>
        <span className="footer-mono">built with React · Houston, TX</span>
      </footer>
    </section>
  );
}

export default ContactMe;
