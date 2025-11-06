import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array ensures this effect runs only once

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav>
          <a href="#top" className="nav-logo">
            {/* This path works because the image is in the 'public' folder 
            */}
            <img src="/MS_logo.png" alt="MovieSocial Logo" height="40" />
          </a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#modle">The Game</a></li>
            <li><a href="#contact" className="nav-btn-contact">View Prototype</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;