import React from 'react';
import './ContactMe.css';
// You can use react-icons or similar for better icons
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

function ContactMe({ id }) {
  const contactLinks = [
    {
      name: 'Email',
      icon: <FaEnvelope size={32} />,
      url: 'mailto:carlos-marinjr1@outlook.com',
      color: '#EA4335',
      hoverColor: '#D33426'
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={32} />,
      url: 'https://github.com/carlos-marin1742',
      color: '#333333',
      hoverColor: '#24292E'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={32} />,
      url: 'https://www.linkedin.com/in/carlos-marin-90482b13b/',
      color: '#0077B5',
      hoverColor: '#005582'
    },
    {
      name: 'Download Resume',
      icon: <FaFileDownload size={32} />,
      url: './Marin, Carlos - Resume DS_DA.pdf',
      color: '#6C63FF',
      hoverColor: '#564FC9',
      download: true
    }
  ];

    const handleDownload = (e, url) => {
    e.preventDefault();
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">Feel free to reach out through any of these platforms</p>
      
      <div className="contact-grid">
        {contactLinks.map((link, index) => (
          link.download ? (
            <button
              key={index}
              onClick={(e) => handleDownload(e, link.url)}
              className="contact-card"
              style={{ 
                '--bg-color': link.color,
                '--hover-color': link.hoverColor
              }}
            >
              <div className="contact-icon">{link.icon}</div>
              <span className="contact-label">{link.name}</span>
            </button>
          ) : (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              style={{ 
                '--bg-color': link.color,
                '--hover-color': link.hoverColor
              }}
            >
              <div className="contact-icon">{link.icon}</div>
              <span className="contact-label">{link.name}</span>
            </a>
          )
        ))}
      </div>
    </div>
  );
}

export default ContactMe;