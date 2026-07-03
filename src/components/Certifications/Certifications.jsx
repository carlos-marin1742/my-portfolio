import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Certifications.css";

const CertificateCard = ({ title, issuer, date, certificateId, verifyUrl }) => {
  return (
    <article className="cert-card">
      <div className="cert-issuer-row">
        <span className="cert-issuer">{issuer}</span>
        <span className="cert-date">{date}</span>
      </div>

      <h3 className="cert-title">{title}</h3>

      {certificateId && (
        <p className="cert-id">
          ID <code>{certificateId}</code>
        </p>
      )}

      <a
        href={verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-verify"
      >
        Verify credential <FaExternalLinkAlt aria-hidden="true" />
      </a>
    </article>
  );
};

export default CertificateCard;
