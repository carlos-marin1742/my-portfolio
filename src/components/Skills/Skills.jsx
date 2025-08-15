import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaChartLine, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiPostgresql, SiExpress, SiTensorflow, SiPytorch, SiJupyter, SiPandas, SiNumpy, SiFlask } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import './Skills.css';

const SkillsSection = ({ id }) => {
  const skillCategories = [
    {
      title: "PERN Stack",
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
        { name: "JavaScript", icon: <DiJavascript />, color: "#F7DF1E" }
      ]
    },
    {
      title: "Data Science",
      icon: <FaChartLine className="category-icon" />,
      skills: [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Pandas", icon: <SiPandas />, color: "#150458" },
        { name: "NumPy", icon: <SiNumpy />, color: "#4D77CF" },
        { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
        { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
        { name: "Jupyter", icon: <SiJupyter />, color: "#F37626" }
      ]
    }
  ];

  const additionalSkills = [
    { name: "RESTful APIs", icon: <SiFlask /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Data Wrangling" },
    { name: "Statistical Analysis" },
    { name: "Machine Learning" }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item" style={{ color: skill.color }}>
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
          {additionalSkills.map((skill, index) => (
            <div key={index} className="skill-tag">
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