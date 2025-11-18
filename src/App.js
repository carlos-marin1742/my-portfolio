import "./App.css";
import React from "react";
import ContactMe from "./components/ContactMe/ContactMe";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Navbar from "./components/Navbar/Navbar";
import SkillsSection from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";



function AboutMe({ id }) {
  return (
    <div id = "AboutMe" className="about-me">
      <img 
        src={require("./me.jpg")}
        alt="Carlos Marin" 
        className="profile-pic"
      />
      
      <h1>Carlos Marin</h1>
      <h2>Data Scientist | Analyst</h2>
      
      <p className="intro">
        Hi! I’m Carlos Marin, a data professional passionate about transforming raw data 
        into actionable insights. With expertise in <strong>Python</strong>, <strong>SQL</strong>, 
        <strong>Tableau</strong>, and <strong>Power BI</strong>, I help businesses make data-driven decisions 
        through clear visualizations and robust analytics.
      </p>

    </div>
  );
}


export default function App() {
  return (
    <div>
      <Navbar />
       <AboutMe id = "AboutMe" /> 
      < ProjectsSection id = "ProjectsSection" />
      <SkillsSection id = "Skills" />
      <Certifications />
      <ContactMe id = "ContactMe" />
    </div>
  );
}
