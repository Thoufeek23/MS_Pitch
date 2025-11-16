import React, { useState, useEffect } from 'react';

function Navbar({ isDisabled = false, onAlertNeeded }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (e) => {
    if (isDisabled) {
      e.preventDefault();
      if (onAlertNeeded) onAlertNeeded();
      return false;
    } else {
      // If enabled and on feedback page, redirect to home page with hash
      if (window.location.hash === '#/feedback') {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        window.location.href = `/#${href}`;
      }
    }
  };

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
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDisabled ? 'disabled' : ''}`}>
      <div className="container">
        <nav>
          <a href="#top" className="nav-logo" onClick={handleNavClick}>
            {/* This path works because the image is in the 'public' folder 
            */}
            <img src="/MS_logo.png" alt="MovieSocial Logo" height="40" />
          </a>
          <ul className="nav-links">
            <li><a href="#features" onClick={handleNavClick}>Features</a></li>
            <li><a href="#modle" onClick={handleNavClick}>The Game</a></li>
            <li><a href="#contact" className="nav-btn-contact" onClick={handleNavClick}>View Prototype</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;