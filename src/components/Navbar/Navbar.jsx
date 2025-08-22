import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Carlos Marin's Portfolio</div>

      <div className="nav-links">
        <a href="#AboutMe">About Me</a>
        <a href="#ProjectsSection">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="#ContactMe">Contact</a>
        <a href="#Recommendations">Recommendations</a>
      </div>

      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} />
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu"
        >
          <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
