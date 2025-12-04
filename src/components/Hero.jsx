import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            Available for Projects & Collaborations
          </span>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">MUHAMMED NOUR MAAMA</span>
          </h1>

          <h2 className="hero-subtitle">AI Engineer & Agentic Systems Developer</h2>

          <p className="hero-desc">
            I build intelligent systems that can analyze, reason, and make
            decisions autonomously. Combining advanced Computer Vision,
            Multi-Agent workflows, and robust Backend Engineering.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <div className="float-icon icon-1">
        <Code2 size={32} />
      </div>
      <div className="float-icon icon-2">
        <BrainCircuit size={32} />
      </div>
    </section>
  );
};

export default Hero;
