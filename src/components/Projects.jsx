import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Github, Eye, BrainCircuit, FileText, Activity } from "lucide-react";

// ====== PROJECTS WITH VIDEO PATHS ======
const PROJECTS = [
  {
    id: 1,
    title: "Vehicle Detection System",
    subtitle: "Real-time Computer Vision",
    description:
      "A high-performance system using Deep Learning and OpenCV to detect and classify vehicles in real-time traffic feeds.",
    tags: ["Python", "OpenCV", "Deep Learning", "YOLO"],
    icon: <Eye size={20} />,
    video: require("../assets/videos/Vehicle-Detection.mp4")
  },
  {
    id: 2,
    title: "Smart AI Data Analyst",
    subtitle: "Agentic AI Workflow",
    description:
      "An autonomous agentic system that interprets complex datasets, generates automatic reports, and provides actionable business insights.",
    tags: ["LLMs", "LangChain", "Python", "Pandas"],
    icon: <BrainCircuit size={20} />,
    video: require("../assets/videos/Smart-Ai-Data-Analyst.mp4")
  },
  {
    id: 3,
    title: "Agentic Invoice Processor",
    subtitle: "Document Intelligence",
    description:
      "Automated pipeline utilizing OCR and LLMs to extract, classify, and process data from unstructured invoice documents.",
    tags: ["OCR", "NLP", "Node.js"],
    icon: <FileText size={20} />,
    video: require("../assets/videos/Agentic-Ai-Invoice-Processor.mp4")
  },
  {
    id: 4,
    title: "Vein Detection System",
    subtitle: "Medical Imaging U-Net",
    description:
      "Biomedical application using U-Net architecture for precise segmentation of vein structures in medical imaging.",
    tags: ["U-Net", "Keras", "TensorFlow", "Medical AI"],
    icon: <Activity size={20} />,
    video: require("../assets/videos/Vein-Detection.mp4")
  }
];

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoDurations, setVideoDurations] = useState({}); // <-- NEW

  return (
    <>
      {/* ==== VIDEO POPUP MODAL ==== */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video src={activeVideo} autoPlay controls />
            <button className="close-modal" onClick={() => setActiveVideo(null)}>
              ×
            </button>
          </div>
        </div>
      )}

      <section id="projects" className="section projects-section">
        <div className="container">

          {/* Header */}
          <div className="projects-header">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="projects-sub">
                Showcasing intelligent agents, computer vision systems, and automated pipelines.
              </p>
            </div>

            <a href="https://github.com/MuhammedNour10?tab=repositories" className="projects-github">
              View GitHub <Github size={20} />
            </a>
          </div>

          {/* ==== PROJECT GRID ==== */}
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >

                {/* ==== PROJECT VIDEO AREA ==== */}
                <div
                  className="project-video-header"
                  onClick={() => setActiveVideo(project.video)}
                  style={{ cursor: "pointer" }}
                >
                  <video
                    src={project.video}
                    className="project-video"
                    muted
                    playsInline
                    onLoadedMetadata={(e) => {
                      const duration = e.target.duration;
                      const minutes = Math.floor(duration / 60);
                      const seconds = Math.floor(duration % 60)
                        .toString()
                        .padStart(2, "0");

                      setVideoDurations((prev) => ({
                        ...prev,
                        [project.id]: `${minutes}:${seconds}`,
                      }));
                    }}
                  />

                  <div className="video-overlay"></div>

                  <div className="play-btn">
                    <Play size={32} fill="white" style={{ marginLeft: "4px" }} />
                  </div>

                  {/* DYNAMIC VIDEO TIME */}
                  <div className="video-timer">
                    {videoDurations[project.id] || "0:00"}
                  </div>
                </div>

                {/* ==== CONTENT ==== */}
                <div className="project-content">
                  <div className="proj-meta">
                    <div className="proj-icon">{project.icon}</div>
                    <span className="proj-sub">{project.subtitle}</span>
                  </div>

                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-desc">{project.description}</p>

                  <div className="proj-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="proj-tag">#{tag}</span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
