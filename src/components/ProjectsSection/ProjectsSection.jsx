
import "./ProjectsSection.css";

const projects = [
    {
    title: "Agent Data Scientist",
    link: "https://github.com/carlos-marin1742/AgentDataScientist",
    description: "Two-stage AI agent that turns any CSV into production-ready EDA code and a strategic insights report — LLaMA 3.3 70B via Groq generates 7-section structured Python, executes it live, and renders visualizations inline. Zero manual analysis required.",
    tags: ["Python / Streamlit", "Langchain", "Groq", "LLAMA 3.3 70B", "Pandas", "Matplotlib", "Seaborn"]
  },  
  {
    title: "NeuroScan AI - Brain Tumor Object Detection",
    link: "https://github.com/carlos-marin1742/BrainTumorObjectDetection",
    description: "Engineered a high-performance MRI diagnostic platform that bridges a Node.js/Express backend with a custom-trained YOLO computer vision pipeline to automate brain tumor classification and confidence-score reporting.",
    tags: ["React", "Node.js", "YOLO (Computer Vision)", "Python"]
  },
  {
    title: "AI Image Generator",
    link: "https://github.com/carlos-marin1742/image-generator",
    description: "A React-powered AI image generation app that leverages Hugging Face's Inference API to transform text prompts into stunning visuals across multiple state-of-the-art diffusion models.",
    tags: ["React", "Hugging Face Inference API", "Javascript"]
  },
    {
    title: "AI Cover Letter Architect",
    link: "https://github.com/carlos-marin1742/AI-cover-letter-generator",
    description: "A production-grade cover letter generator powered by a RAG pipeline — retrieves relevant context from a personal knowledge base, injects it alongside your resume and job description, and uses Gemini to synthesize tailored, grounded cover letters in seconds. Includes a custom eval framework measuring retrieval precision, grounding, and output quality.",
    tags: ["Python / Flask", "Langchain", "Gemini 3 (LLM)", "Bootstrap"]
  },
  {
    title: "AI Stock Advisor",
    link: "https://github.com/carlos-marin1742/AI-Advisor-with-OLLAMA",
    description: "Real-time AI stock advisor that fetches live market data, computes technical indicators (RSI, EMA, Bollinger Bands), and generates LLM-powered trade insights on a scheduled pipeline.",
    tags: ["Python / Streamlit", "yFinance API", "Ollama (Gemma 3 LLM)", "Pandas & Technical Analysis"]
  }
];

// component
function ProjectCard({ project }) {
  return (
    <div className="project-container">
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
    </div>
  );
}

// Projects section component
function ProjectsSection({ id }) {
  return (
    <section id = "ProjectsSection" className="projects-section">
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
