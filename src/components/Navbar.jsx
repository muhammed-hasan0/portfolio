import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 دالة حركة السكروول مع إغلاق المينيو
  const handleMobileNavigation = (href) => {
    setIsOpen(false); // أغلق المينيو

    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        const offset = section.offsetTop - 70; // تجنّب النافبار
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 300); // انتظار إغلاق المينيو
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        {/* Logo */}
        <div className="nav-logo">
          MNM<span style={{ color: "var(--primary)" }}>.AI</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#cv" className="cv-btn-nav">
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mobile-menu"
          >
            <div className="container mobile-menu-content">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleMobileNavigation(link.href)}
                  className="nav-link mobile-link"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
