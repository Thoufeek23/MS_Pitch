import React from 'react';

function ModleSpotlight() {
  const handleSeeItClick = (e) => {
    e.preventDefault();
    if (window.location.hash === '' || window.location.hash === '#/') {
      // On homepage, scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other route, redirect to homepage and scroll
      window.location.href = '/#/contact';
    }
  };

  return (
    <section id="modle" className="modle-section">
      <div className="container modle-content">
        
        <div className="modle-text animate-on-scroll">
          <span className="modle-tag">A Unique Feature</span>
          <h3>Introducing: <span className="modle-name">MODLE</span></h3>
          <p>
            Think you know movies? Prove it.
            <br /><br />
            We've included "Modle," our daily movie-guessing game. You get six tries to guess the movie from subtle clues.
            It's addictive, fun, and available in multiple languages right inside the app.
          </p>
          <a href="#contact" className="cta-button-secondary" onClick={handleSeeItClick}>See it in Action</a>
        </div>

        <div className="modle-visual animate-on-scroll">
          {/* This is a placeholder visual for the game */}
          <div className="game-placeholder">
            <div className="row correct"><span>M</span><span>O</span><span>V</span><span>I</span><span>E</span></div>
            <div className="row partial"><span>S</span><span>T</span><span>A</span><span>R</span><span>S</span></div>
            <div className="row wrong"><span>G</span><span>U</span><span>E</span><span>S</span><span>S</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ModleSpotlight;