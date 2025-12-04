import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

import ProfileImage from "../assets/images/Profile-Image.jpeg"; 
// 🔥 استدعاء الصورة بشكل صحيح

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* LEFT SIDE — PROFILE IMAGE & STATS */}
          <div className="profile-wrapper">
            <div className="profile-frame">
              <img
                src={ProfileImage}
                alt="Profile"
                className="profile-img"
              />
            </div>

            <div className="stats-card">
              <div className="stats-icon">
                <Award size={24} />
              </div>
              <div>
                <div className="stats-number">13+</div>
                <div className="stats-text">Professional Certificates</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — TEXT */}
          <div>
            <div className="section-title-wrap">
              <span className="title-pill"></span>
              <h2 className="section-title">About Me</h2>
            </div>

            <p className="about-p">
              I am an AI Engineer specializing in{" "}
              <strong className="text-white">Agentic Systems</strong> and{" "}
              <strong className="text-white">Computer Vision</strong>. My passion
              lies in bridging the gap between theoretical AI models and
              real-world applications.
            </p>

            <p className="about-p-muted">
              I combine robust backend engineering with cutting-edge data
              processing and multi-agent workflows to create complete smart
              applications.
            </p>

            <div className="highlight-box">
              <div className="highlight-icon">
                <Award color="#EAB308" size={24} />
              </div>
              <div>
                <h3 className="highlight-title">AI Competition Winner</h3>
                <p className="highlight-text">
                  Secured 1st place developing a specialized Deep Learning
                  Computer Vision project for real-time analysis.
                </p>
              </div>
            </div>

            <div className="tag-cloud">
              {[
                "Agentic AI",
                "Computer Vision",
                "Backend Dev",
                "Clean Architecture",
              ].map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
