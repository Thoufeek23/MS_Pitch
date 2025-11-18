import React, { useState, useEffect } from 'react';

function Navbar({ isDisabled = false, onAlertNeeded }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (e) => {
    if (isDisabled) {
      e.preventDefault();
      if (onAlertNeeded) onAlertNeeded();
      return false;
    }
    const href = e.currentTarget.getAttribute('href');
    // Logo click: scroll to top
    if (href === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // If on feedback page, go to homepage and scroll to section
    if (window.location.hash === '#/feedback') {
      e.preventDefault();
      window.location.href = `/#${href}`;
      return;
    }
    // If already on homepage, scroll to section
    if (window.location.hash === '' || window.location.hash === '#/') {
      e.preventDefault();
      const sectionId = href.replace('#/', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Otherwise, let default behavior happen
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDisabled ? 'disabled' : ''}`}>
      <div className="container">
        <nav>
          <a href="#top" className="nav-logo" onClick={handleNavClick}>
            <img src="/MS_logo.png" alt="MovieSocial Logo" height="40" />
          </a>
          <ul className="nav-links">
            <li><a href="#/features" onClick={handleNavClick}>Features</a></li>
            <li><a href="#/modle" onClick={handleNavClick}>The Game</a></li>
            <li><a href="#/contact" className="nav-btn-contact" onClick={handleNavClick}>View Prototype</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;