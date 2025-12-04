import React from "react";
import { Download } from "lucide-react";

// استيراد ملف الـ PDF
import myCV from "../assets/Muhammed_Nour_Maama_CV_Updated.pdf";

const CVSection = () => {
  return (
    <section id="cv" className="section cv-section">
      <div className="container cv-container">
        <h2 className="section-title">Ready to collaborate?</h2>

        <p className="cv-desc">
          Download my comprehensive resume to see detailed work history, academic achievements,
          and technical breakdowns.
        </p>

        {/* زر تحميل الـ CV */}
        <a href={myCV} download className="btn cv-btn">
          <Download size={20} style={{ marginRight: "0.75rem" }} />
          Download Professional CV (PDF)
        </a>
      </div>
    </section>
  );
};

export default CVSection;
