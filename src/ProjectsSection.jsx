
import "./ProjectsSection.css";

const projects = [
  {
    title: "Quantitative Analysis of Stock Market",
    link: "https://github.com/carlos-marin1742/quantitative-analysis-stocks",
    description: "Analyzed Stock Market data for Netflix, Google, Microsoft, and Apple using time series analysis, volatility analysis, and comparative analysis techniques.",
    tags: ["Python", "Pandas", "Matplotlib", "Finance"]
  },
  {
    title: "Inflation Impact Analysis",
    link: "https://github.com/carlos-marin1742/inflation-impact-analysis",
    description: "Analyzed the impact of inflation on consumer goods and economic indicators across multiple sectors (add more details).",
    tags: ["Python", "Data Visualization", "Economics"]
  }
];

// component
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
      >
        <button className="project-button">
          <i className="fab fa-github"></i> View on GitHub
        </button>
      </a>
    </div>
  );
}

// Projects section component
function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
