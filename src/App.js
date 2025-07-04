import "./App.css";
import React from "react";
import "./ContactMe";
import ContactMe from "./ContactMe";
import ProjectsSection from "./ProjectsSection"



function AboutMe() {
  return (
    <div className="about-me">
      <img 
        src={require("./me.jpg")}
        alt="Carlos Marin" 
        className="profile-pic"
      />
      
      <h1>Carlos Marin</h1>
      <h2>Data Scientist | Analyst</h2>
      
      <p className="intro">
        Hi! I’m Carlos, a data professional passionate about transforming raw data 
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
      <AboutMe />
      < ProjectsSection />
      <ContactMe />
    </div>
  );
}
