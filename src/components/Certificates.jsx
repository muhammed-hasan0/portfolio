import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ==== IMPORT CERTIFICATE IMAGES ==== */
import img1 from "../assets/images/Certificate/AdvancedLearningAlgorithm.jpg";
import img2 from "../assets/images/Certificate/Asp.Net Core Complete.jpg";
import img3 from "../assets/images/Certificate/ASP.NET CORE MVC.jpg";
import img4 from "../assets/images/Certificate/Database Design.jpg";
import img5 from "../assets/images/Certificate/database with python.jpg";
import img6 from "../assets/images/Certificate/Javascript.jpg";
import img7 from "../assets/images/Certificate/MYSQL.jpg";
import img8 from "../assets/images/Certificate/python for dataSceint,Ai.jpg";
import img9 from "../assets/images/Certificate/python project for datascience.jpg";
import img10 from "../assets/images/Certificate/SQL.jpg";
import img11 from "../assets/images/Certificate/start with python.jpg";
import img12 from "../assets/images/Certificate/Supervised.jpg";
import img13 from "../assets/images/Certificate/webApi.jpg";

/* ==== CERTIFICATE LIST ==== */
const CERTIFICATES = [
  { id: 1, title: "Advanced Learning Algorithm", img: img1 },
  { id: 2, title: "ASP.NET Core Complete", img: img2 },
  { id: 3, title: "ASP.NET Core MVC", img: img3 },
  { id: 4, title: "Database Design", img: img4 },
  { id: 5, title: "Database with Python", img: img5 },
  { id: 6, title: "JavaScript", img: img6 },
  { id: 7, title: "MySQL", img: img7 },
  { id: 8, title: "Python for Data Science & AI", img: img8 },
  { id: 9, title: "Python Project for Data Science", img: img9 },
  { id: 10, title: "SQL", img: img10 },
  { id: 11, title: "Start with Python", img: img11 },
  { id: 12, title: "Supervised Machine Learning", img: img12 },
  { id: 13, title: "Web API", img: img13 },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <div className="cert-header">
          <h2 className="section-title">Certifications</h2>
          <p className="cert-sub">
            Validation of expertise in AI, Machine Learning, and Data Science.
          </p>
        </div>

        <div className="cert-grid">
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              className="cert-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(cert)}
            >
              <img src={cert.img} alt={cert.title} className="cert-thumb" />
              <span className="cert-title">{cert.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===================== LIGHTBOX ===================== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-header">
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <button
                  className="lightbox-close"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="lightbox-body">
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  className="lightbox-img"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
