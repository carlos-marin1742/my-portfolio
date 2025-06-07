import "./App.css";
import React from "react";
import "./ContactMe";
import ContactMe from "./ContactMe";
/*import "./navbar";*/

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

function AboutMe() {
  return (
    <div className="about-me">
      <h1>Carlos Marin</h1>
      <p>
        Hello my name is Carlos Marin. I am a data scientist / data analyst,
        with experience working with Python, SQL, Tableau, and PowerBI.
      </p>
    </div>
  );
}

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

export default function App() {
  return (
    <div>
      <navbar />
      <AboutMe />
      <ProjectCard1 />
      <ProjectCard2 />
      <ContactMe />
    </div>
  );
}
