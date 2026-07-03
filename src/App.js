import "./App.css";
import React from "react";
import ContactMe from "./components/ContactMe/ContactMe";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Navbar from "./components/Navbar/Navbar";
import SkillsSection from "./components/Skills/Skills";
import CertificateCard from "./components/Certifications/Certifications";

const certifications = [
  {
    title: "IBM AI Engineer Professional Certificate",
    issuer: "Coursera / IBM",
    date: "April 2026",
    certificateId: "8MVTIBFQMGZ9",
    verifyUrl:
      "https://coursera.org/share/5dd1265e3197e86e5c22226a6468015a",
  },
  {
    title: "IBM AI Developer Professional Certificate",
    issuer: "Coursera / IBM",
    date: "October 2025",
    certificateId: "6YBEK5B0YG6Q",
    verifyUrl:
      "https://coursera.org/share/d1f0df2fba82abc989de0f0199ab18a6",
  },
  {
    title: "Full Stack Engineer Professional Certificate",
    issuer: "Codecademy",
    date: "December 2025",
    verifyUrl:
      "https://www.codecademy.com/profiles/carlosmarin777/certificates/ffd0f42cce1a44e9a0108b365047a0a6",
  },
];

function AboutMe() {
  return (
    <header id="AboutMe" className="hero">
      {/* Signature element: object-detection bounding box,
          a nod to the NeuroScan YOLO project */}
      <div className="detection-frame">
        <span className="detection-label">carlos_marin · conf 0.99</span>
        <img src={require("./me.jpg")} alt="Carlos Marin" />
        <span className="tick tl" aria-hidden="true" />
        <span className="tick tr" aria-hidden="true" />
        <span className="tick bl" aria-hidden="true" />
        <span className="tick br" aria-hidden="true" />
      </div>

      <div className="hero-text">
        <p className="kicker">Houston, TX — open to opportunities</p>
        <h1>Carlos Marin</h1>
        <p className="role">Full Stack AI Engineer</p>
        <p className="intro">
          I build applications that think. With a background in{" "}
          <strong>Data Science and Clinical Research</strong>, I spent years
          analyzing complex biological data — then realized I didn't just want
          to analyze the data, I wanted to build the tools that power it. I'm
          dual <strong>IBM Certified</strong> in AI Development and AI
          Engineering, and a <strong>Codecademy Certified Full Stack
          Engineer</strong>. I don't just train GenAI models in Python; I ship
          them to production with React, Node.js, and Python — bridging
          sophisticated machine learning and seamless user experiences.
        </p>
        <div className="hero-actions">
          <a href="#ProjectsSection" className="btn btn-primary">
            View my projects
          </a>
          <a href="#ContactMe" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="section-head">
        <span className="section-eyebrow">[ credentials ]</span>
        <h2>Certifications</h2>
      </div>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <CertificateCard key={cert.title} {...cert} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactMe />
    </div>
  );
}
