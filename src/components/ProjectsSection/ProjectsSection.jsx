import { FaGithub } from "react-icons/fa";
import "./ProjectsSection.css";

const projects = [
  {
    title: "Agent Data Scientist",
    link: "https://github.com/carlos-marin1742/AgentDataScientist",
    description:
      "Two-stage AI agent that turns any CSV into production-ready EDA code and a strategic insights report — LLaMA 3.3 70B via Groq generates 7-section structured Python, executes it live, and renders visualizations inline. Zero manual analysis required.",
    tags: ["Python / FastAPI", "LangChain", "Groq (LLaMA 3.3 70B)", "React"],
  },
  {
    title: "NeuroScan AI — Brain Tumor Object Detection",
    link: "https://github.com/carlos-marin1742/BrainTumorObjectDetection",
    description:
      "High-performance MRI diagnostic platform that bridges a Node.js/Express backend with a custom-trained YOLO computer vision pipeline to automate brain tumor classification and confidence-score reporting.",
    tags: ["React", "Node.js", "YOLO (Computer Vision)", "Python"],
  },
  {
    title: "AI Cover Letter Architect",
    link: "https://github.com/carlos-marin1742/AI-cover-letter-generator",
    description:
      "Production-grade cover letter generator powered by a RAG pipeline — retrieves context from a personal knowledge base, injects it alongside your resume and job description, and uses Gemini to synthesize tailored, grounded cover letters. Includes a custom eval framework measuring retrieval precision, grounding, and output quality.",
    tags: ["Python / Flask", "LangChain", "Gemini 3 (LLM)", "Bootstrap"],
  },
  {
    title: "AI Image Generator",
    link: "https://github.com/carlos-marin1742/image-generator",
    description:
      "React-powered AI image generation app that leverages Hugging Face's Inference API to transform text prompts into visuals across multiple state-of-the-art diffusion models.",
    tags: ["React", "Hugging Face Inference API", "JavaScript"],
  },
  {
    title: "AI Stock Advisor",
    link: "https://github.com/carlos-marin1742/AI-Advisor-with-OLLAMA",
    description:
      "Real-time AI stock advisor that fetches live market data, computes technical indicators (RSI, EMA, Bollinger Bands), and generates LLM-powered trade insights on a scheduled pipeline.",
    tags: ["Python / Streamlit", "yFinance API", "Ollama (Gemma 3)", "Technical Analysis"],
  },
];

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <span className="project-index">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <FaGithub aria-hidden="true" /> View on GitHub
      </a>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section id="ProjectsSection" className="section">
      <div className="section-head">
        <span className="section-eyebrow">[ selected work ]</span>
        <h2>Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
