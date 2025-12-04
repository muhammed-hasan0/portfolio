import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Eye, Code2, Server, Smartphone, Terminal } from "lucide-react";

const SKILLS = [
  {
    category: "AI & Agentic Systems",
    icon: <BrainCircuit className="w-6 h-6" />,
    items: ["Agentic AI Workflows", "Multi-Agent Systems", "LLMs", "TensorFlow", "Keras", "OpenCV", "Neural Networks"]
  },
  {
    category: "Computer Vision",
    icon: <Eye className="w-6 h-6" />,
    items: ["Object Detection", "Image Segmentation", "U-Net", "Real-time Processing", "Medical Imaging"]
  },
  {
    category: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Python", "C#", "C/C++", "SQL", "Dart"]
  },
  {
    category: "Backend Engineering",
    icon: <Server className="w-6 h-6" />,
    items: ["ASP.NET Core", "Web API", "Clean Architecture", "Entity Framework", "RESTful APIs"]
  },
  {
    category: "Mobile & Frontend",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["Flutter", "Blazor", "HTML/CSS"]
  },
  {
    category: "Infrastructure",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Linux", "Docker", "Git/GitHub", "CI/CD Pipelines"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="skills-title">Technical Expertise</h2>
          <p className="skills-desc">
            A comprehensive toolkit enabling end-to-end development of intelligent systems.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-head">
                <div className="skill-icon-box">{skill.icon}</div>
                <h3 className="skill-name">{skill.category}</h3>
              </div>

              <div className="skill-items">
                {skill.items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
