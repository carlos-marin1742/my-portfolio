import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaChartLine,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiFlask,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import "./Skills.css";

const skillCategories = [
  {
    title: "Full-Stack Engineer - PERN Stack",
    icon: <FaDatabase className="category-icon" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "Express", icon: <SiExpress />, color: "#121619" },
      { name: "React", icon: <FaReact />, color: "#149eca" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
      { name: "JavaScript", icon: <DiJavascript />, color: "#b7950b" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" }
    ],
  },
  {
    title: "Data Science & ML",
    icon: <FaChartLine className="category-icon" />,
    skills: [
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Pandas", icon: <SiPandas />, color: "#150458" },
      { name: "NumPy", icon: <SiNumpy />, color: "#4D77CF" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#e65c00" },
      { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
      { name: "Jupyter", icon: <SiJupyter />, color: "#d96a1c" },
    ],
  },
];

const additionalSkills = [
  { name: "RESTful APIs", icon: <SiFlask /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Data Wrangling" },
  { name: "Statistical Analysis" },
  { name: "Machine Learning" },
];

const SkillsSection = () => {
  return (
    <section id="Skills" className="section">
      <div className="section-head">
        <span className="section-eyebrow">[ toolkit ]</span>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <div className="category-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  style={{ "--skill-color": skill.color }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-skills">
        <h3 className="additional-skills-title">Additional Skills & Tools</h3>
        <div className="skills-tags">
          {additionalSkills.map((skill) => (
            <div key={skill.name} className="skill-tag">
              {skill.icon && <span className="tag-icon">{skill.icon}</span>}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
