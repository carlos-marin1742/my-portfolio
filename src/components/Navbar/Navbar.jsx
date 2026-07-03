import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const links = [
  { label: "About", href: "#AboutMe" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#ProjectsSection" },
  { label: "Skills", href: "#Skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#ContactMe" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className= "navbar-inner">
      <a href="#AboutMe" className="logo">
        <span className="logo-mark">CM</span>
        <span className="logo-text">carlos.marin</span>
      </a>

      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="mobile-menu"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
