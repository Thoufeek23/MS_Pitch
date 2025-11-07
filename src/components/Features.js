import React from 'react';

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">All Your Film-Life in One App</h2>
        <p className="section-subtitle">MovieSocial isn't just another movie app. It's a community.</p>
        
        <div className="features-grid">
          {/* New Feature (card 1) - Rated reviews */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-star feature-icon" aria-hidden="true"></i>
            <h3>Rated reviews</h3>
            <p>Browse normalized, rated reviews with reviewer badges and averaged scores so you can quickly find trusted opinions.</p>
          </div>

          {/* Feature 1 */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-users feature-icon"></i>
            <h3>Build Your Cinephile Profile</h3>
            <p>Create a profile, follow friends and film critics, and see what they're watching, reviewing, and discussing.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-star-half-alt feature-icon"></i>
            <h3>Write & Share Reviews</h3>
            <p>Give star ratings and write detailed reviews. Your followers will see your thoughts on their feed.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-comments feature-icon"></i>
            <h3>Join the Discussion</h3>
            <p>Jump into discussion threads for any movie. Debate fan theories, analyze plot points, or start your own topics.</p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-bookmark feature-icon"></i>
            <h3>Curate Your Watchlist</h3>
            <p>Never forget a recommendation. Bookmark movies and manage your personal "to-watch" list with ease.</p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-trophy feature-icon"></i>
            <h3>Earn Badges & Climb</h3>
            <p>Get recognized for your activity. Earn unique badges and compete on the leaderboard for "Top Critic" of the week.</p>
          </div>

          {/* Feature 6 */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-search feature-icon"></i>
            <h3>Discover Hidden Gems</h3>
            <p>Search our vast movie database. Find films, actors, or other users instantly with our powerful search.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;