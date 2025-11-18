import React from "react";
import { Award, ExternalLink } from "lucide-react";
import "./Certifications.css";

const certifications = [
  {
    title: "IBM AI Developer Professional Certificate",
    issuer: "Coursera",
    link: "/Coursera-6YBEK5B0YG6Q.pdf", // Assuming this link is for the IBM AI Developer cert
  },
];

const Certifications = () => {
  return (
    <div id="certifications" className="certifications-container">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid single-cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-header">
              <Award className="cert-icon" />
              <h3 className="cert-title">{cert.title}</h3>
            </div>
            <p className="cert-issuer">Issued by: {cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
              <ExternalLink size={18} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;