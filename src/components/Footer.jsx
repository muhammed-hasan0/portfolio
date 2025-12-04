import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} MUHAMMED NOUR MAAMA. Built with AI Innovation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
