import React from 'react';

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">All Your Film-Life in One App</h2>
        <p className="section-subtitle">MovieSocial isn't just another movie app. It's a community.</p>
        
        <div className="features-grid">
          {/* Feature 1: Rated reviews (Keep) */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-star feature-icon" aria-hidden="true"></i>
            <h3>Rated reviews</h3>
            <p>Browse normalized, rated reviews with reviewer badges and averaged scores so you can quickly find trusted opinions.</p>
          </div>

          {/* Feature 2: Build Your Cinephile Profile (Keep, implicitly contains Follow) */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-users feature-icon"></i>
            <h3>Build Your Cinephile Profile</h3>
            <p>Create a profile, follow friends and film critics, and see what they're watching, reviewing, and discussing.</p>
          </div>
          
          {/* Feature 3: Write & Share Reviews (Keep) */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-star-half-alt feature-icon"></i>
            <h3>Write & Share Reviews</h3>
            <p>Give star ratings and write detailed reviews. Your followers will see your thoughts on their feed.</p>
          </div>

          {/* Feature 4: Join the Discussion (Keep) */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-comments feature-icon"></i>
            <h3>Join the Discussion</h3>
            <p>Jump into discussion threads for any movie. Debate fan theories, analyze plot points, or start your own topics.</p>
          </div>

          {/* Feature 5: New - Create & Rank Movie Lists (Ranks) */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-list-ol feature-icon"></i>
            <h3>Create & Rank Movie Lists</h3>
            <p>Create custom, titled lists to rank your favorite movies. Friends can react to your lists, leaving likes and comments.</p>
          </div>
          
          {/* Feature 6: New - Direct Message & Share */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-inbox feature-icon"></i>
            <h3>Direct Message & Share</h3>
            <p>Chat directly with other users, share your latest reviews, discussions, or custom movie ranks seamlessly within the app.</p>
          </div>

          {/* Feature 7: Curate Your Watchlist (Keep) */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-bookmark feature-icon"></i>
            <h3>Curate Your Watchlist</h3>
            <p>Never forget a recommendation. Bookmark movies and manage your personal "to-watch" list with ease.</p>
          </div>

          {/* Feature 8: Modified - Badges only (Original Feature) */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-award feature-icon"></i>
            <h3>Earn Badges & Achievements</h3>
            <p>Get recognized for your activity and consistency. Earn unique badges based on your reviewing milestones.</p>
          </div>

          {/* Feature 9: New - Letterboxd Import (Replaces Discover Hidden Gems) */}
          <div className="feature-card animate-on-scroll">
            <i className="fas fa-file-import feature-icon"></i>
            <h3>Easy Migration: Import Your Lists</h3>
            <p>New to MovieSocial? Import your existing watchlist and reviews from Letterboxd in a single tap for a smooth transition.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;