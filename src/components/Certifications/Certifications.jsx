import React from "react";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

const CertificateCard = ({
  title,
  issuer,
  date,
  certificateId,
  verifyUrl,
  imageUrl,
  pdfUrl
}) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img src={imageUrl} alt={`${title} Certificate`} style={styles.image} />

        <div style={styles.content}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.details}><strong>Issued by:</strong> {issuer}</p>
          <p style={styles.details}><strong>Date Issued:</strong> {date}</p>

          {certificateId && (
            <p style={styles.details}>
              <strong>Certificate ID:</strong> {certificateId}
            </p>
          )}

          {/* Button Row */}
          <div style={styles.buttonContainer}>
            <a
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Verify <FaExternalLinkAlt style={styles.icon} />
            </a>

            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.secondaryButton }}
              >
                View PDF <FaFilePdf style={styles.icon} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  card: {
    width: "600px",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #ddd",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    background: "white",
    fontFamily: "'Inter', sans-serif",
  },
  image: {
    width: "100%",
    display: "block",
  },
  content: {
    padding: "20px",
  },
  title: {
    fontSize: "1.7rem",
    marginBottom: "10px",
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
  },
  details: {
    margin: "6px 0",
    color: "#444",
    fontSize: "0.95rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#0056D2",
    color: "white",
    fontWeight: "600",
    textDecoration: "none",
    borderRadius: "6px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  secondaryButton: {
    backgroundColor: "#444",
  },
  icon: {
    fontSize: "0.9rem",
  },
};

export default CertificateCard;

