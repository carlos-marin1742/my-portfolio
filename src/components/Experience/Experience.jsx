import React from "react";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

const roles = [
  {
    title: "Software Developer",
    company: "Texas Regional Physicians", 
    location: "Houston, TX",
    start: "June 2026",
    end: "Present",
    focus: "AI application development",
    summary:
      "Building a full-stack clinical operations platform (React, Node.js/Express, PostgreSQL) serving multi-location medical scheduling, case management, and billing workflows.",
    bullets: [
      "Contributing across the stack: role-based access control, cookie-based session auth with login throttling, and conflict-detection scheduling logic.",
      "Implementing an audited billing ledger with database-enforced integrity constraints.",
    ],
    stack: ["React", "Node.js / Express", "PostgreSQL", "Vite"],
  },
];

function ExperienceCard({ role }) {
  return (
    <article className="exp-card">
      <div className="exp-marker" aria-hidden="true">
        <FaBriefcase />
      </div>

      <div className="exp-body">
        <div className="exp-top-row">
          <h3 className="exp-title">{role.title}</h3>
          <span className="exp-dates">
            {role.start} — {role.end}
          </span>
        </div>

        <p className="exp-company">
          {role.company} · {role.location}
        </p>

        {role.focus && <p className="exp-focus">Focus: {role.focus}</p>}

        <p className="exp-summary">{role.summary}</p>

        {role.bullets?.length > 0 && (
          <ul className="exp-bullets">
            {role.bullets.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}

        {role.stack?.length > 0 && (
          <div className="exp-stack">
            {role.stack.map((item) => (
              <span key={item} className="exp-tag">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ExperienceSection() {
  return (
    <section id="Experience" className="section">
      <div className="section-head">
        <span className="section-eyebrow">[ experience ]</span>
        <h2>Experience</h2>
      </div>

      <div className="exp-list">
        {roles.map((role) => (
          <ExperienceCard key={role.title + role.start} role={role} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;