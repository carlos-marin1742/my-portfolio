import "./App.css";
import React from "react";
import "./ContactMe";
import ContactMe from "./ContactMe";
import NavigationBar from "./NavigationBar";

const project1 = {
  title: "Quantitative Analysis of Stock Market",
  link: "https://github.com/carlos-marin1742/quantitative-analysis-stocks",
  description:
    "Analyzed Stock Market data for Netflix, Google, Microsoft, and Apple. Including time series analysis, volatility analysis, and comparative analysis techniques used in finance",
};

const project2 = {
  title: "Inflation Impact Analysis",
  link: "https://github.com/carlos-marin1742/inflation-impact-analysis",
  description: "sample description",
};



function ProjectCard1() {
  return (
    <div className="project-container">
      <div className="project-card">
        <h3>{project1.title}</h3>
        <p>{project1.description}</p>
        <a href={project1.link} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </div>
    </div>
  );
}

function ProjectCard2() {
  return (
    <div className="project-container">
      <div className="project-card">
        <h3>{project2.title}</h3>
        <p>{project2.description}</p>
        <a href={project2.link} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="about-me">
      <img 
        src={require("./me.jpg")}
        alt="Carlos Marin" 
        className="profile-pic"
      />
      
      <h1>Carlos Marín</h1>
      <h2>Data Scientist | Analyst</h2>
      
      <p className="intro">
        Hi! I’m Carlos, a data professional passionate about transforming raw data 
        into actionable insights. With expertise in <strong>Python</strong>, <strong>SQL</strong>, 
        <strong>Tableau</strong>, and <strong>Power BI</strong>, I help businesses make data-driven decisions 
        through clear visualizations and robust analytics.
      </p>
      
      <div className="highlights">
        <p>🔹 Turning complex problems into intuitive solutions</p>
        <p>🔹 Building dashboards that tell compelling stories</p>
        <p>🔹 Optimizing workflows with automation</p>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div>
      <NavigationBar />
      <AboutMe />
      <ProjectCard1 />
      <ProjectCard2 />
      <ContactMe />
    </div>
  );
}
