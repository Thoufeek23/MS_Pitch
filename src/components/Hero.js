import React from 'react';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Where Movies Meet Their Match.</h1>
        <p className="hero-subtitle">
          The new social network for film lovers, critics, and friends.
          Discover, discuss, review, and play.
        </p>
        <a href="https://www.instagram.com/movie_social/" className="cta-button">
          Contact Me to View the Prototype
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;