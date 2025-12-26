 import "./App.css";
import React from "react";
import ContactMe from "./components/ContactMe/ContactMe";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Navbar from "./components/Navbar/Navbar";
import SkillsSection from "./components/Skills/Skills";
import CertificateCard from "./components/Certifications/Certifications";



function AboutMe({ id }) {
  return (
    <div id = "AboutMe" className="about-me">
      <img 
        src={require("./me.jpg")}
        alt="Carlos Marin" 
        className="profile-pic"
      />
      
      <h1>Carlos Marin</h1>
      <h2>AI Developer | Full Stack Engineer</h2>
      
      <p className="intro">


        Hi! I’m <strong>Carlos Marin</strong>, a developer who builds applications that think. 
        With a background in Data Science and Clinical Research, I spent years 
        analyzing complex biological data. But I realized I didn't just want to analyze the 
        data—I wanted to build the tools that power it. I am an <strong>IBM Certified AI Developer</strong> and 
        a <strong>Codecademy Certified Full Stack Engineer</strong>. This dual expertise allows me to 
        handle the entire lifecycle of an intelligent application. I don’t just train GenAI models in Python; 
        I deploy them into production using React, Node.js, and Flask.
        My goal is to bridge the gap between sophisticated Machine Learning and 
        seamless user experiences, creating software that is efficient, scalable, and 
        solves real-world problems.
      </p>

    </div>
  );
}


export default function App() {
  return (
    <div>
      <Navbar />
       <AboutMe id = "AboutMe" /> 
       <CertificateCard
       title = "IBM AI Developer Professional Certificate"
       issuer = " Coursera / IBM"
       date = "October 2025"
       certificateId="6YBEK5B0YG6Q"
       verifyUrl="https://coursera.org/share/d1f0df2fba82abc989de0f0199ab18a6"
       /*imageUrl="/Coursera-6YBEK5B0YG6Q.jpg"*/
       /*pdfUrl="/Coursera-6YBEK5B0YG6Q.pdf"*//>
              <CertificateCard
       title = "Full Stack Engineer Professional Certificate "
       issuer = "Codecademy"
       date = "December 2025"
       /*certificateId=""*/
       verifyUrl="https://www.codecademy.com/profiles/carlosmarin777/certificates/ffd0f42cce1a44e9a0108b365047a0a6"
       /*imageUrl="/Coursera-6YBEK5B0YG6Q.jpg"*/
       /*pdfUrl="/Coursera-6YBEK5B0YG6Q.pdf"*//>
      < ProjectsSection id = "ProjectsSection" />
      <SkillsSection id = "Skills" />
      <ContactMe id = "ContactMe" />
    </div>
  );
}
