import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    movieFrequency: '',
    readReviews: '',
    postReviews: '',
    platform: '',
    uiRating: 0,
    signupRating: 0,
    languagePreferenceRating: 0,
    performanceRating: 0,
    navigationRating: 0,
    dailyUsageRating: 0,
    comparisonRating: 0,
    watchlistRating: 0,
    aiRecommendationRating: 0,
    communityRating: 0,
    socialRating: 0,
    discussionRating: 0,
    feedPopulationRating: 0,
    gameRating: 0,
    badgesRating: 0,
    ranksRating: 0, // NEW
    dmRating: 0, // NEW
    importRating: 0, // NEW
    recommendationRating: 0,
    oneFeature: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const StarRating = ({ rating, onRatingChange, label }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const getStarType = (starIndex) => {
      const currentRating = hoverRating || rating;
      const starValue = starIndex + 1;
      const halfStarValue = starIndex + 0.5;
      
      if (currentRating >= starValue) return 'full';
      if (currentRating >= halfStarValue) return 'half';
      return 'empty';
    };

    return (
      <div className="star-rating-container">
        <label className="rating-label">{label}</label>
        <div className="stars-row">
          {[0, 1, 2, 3, 4].map((starIndex) => (
            <div key={starIndex} className="single-star">
              <span className={`star-display ${getStarType(starIndex)}`}>
                ★
              </span>
              <div 
                className="half-click-area"
                onMouseEnter={() => setHoverRating(starIndex + 0.5)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => onRatingChange(starIndex + 0.5)}
              />
              <div 
                className="full-click-area"
                onMouseEnter={() => setHoverRating(starIndex + 1)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => onRatingChange(starIndex + 1)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for Google Sheets
      const submissionData = {
        timestamp: new Date().toLocaleString("en-US", {
          timeZone: "America/New_York",
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }),
        name: formData.name,
        movieFrequency: formData.movieFrequency,
        readReviews: formData.readReviews,
        postReviews: formData.postReviews,
        platform: formData.platform,
        uiRating: formData.uiRating,
        signupRating: formData.signupRating,
        languagePreferenceRating: formData.languagePreferenceRating,
        performanceRating: formData.performanceRating,
        navigationRating: formData.navigationRating,
        dailyUsageRating: formData.dailyUsageRating,
        comparisonRating: formData.comparisonRating,
        watchlistRating: formData.watchlistRating,
        aiRecommendationRating: formData.aiRecommendationRating,
        communityRating: formData.communityRating,
        socialRating: formData.socialRating,
        discussionRating: formData.discussionRating,
        feedPopulationRating: formData.feedPopulationRating,
        gameRating: formData.gameRating,
        badgesRating: formData.badgesRating,
        // Removed leaderboardRating
        ranksRating: formData.ranksRating, // NEW
        dmRating: formData.dmRating, // NEW
        importRating: formData.importRating, // NEW
        recommendationRating: formData.recommendationRating,
        oneFeature: formData.oneFeature
      };

      // Submit to Google Sheets via Google Apps Script Web App
      await fetch('https://script.google.com/macros/s/AKfycbwXqYK6Fs84WmnN75zP5AmkPCiPxLMBbQvkNe-hNXcAPRIdM1GCd91UNRal6CEqIbsCUw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('✅ Feedback submitted successfully to Google Sheets');

      // Reset form after successful submission
      setFormData({
        name: '',
        movieFrequency: '',
        readReviews: '',
        postReviews: '',
        platform: '',
        uiRating: 0,
        signupRating: 0,
        languagePreferenceRating: 0,
        performanceRating: 0,
        navigationRating: 0,
        dailyUsageRating: 0,
        comparisonRating: 0,
        watchlistRating: 0,
        aiRecommendationRating: 0,
        communityRating: 0,
        socialRating: 0,
        discussionRating: 0,
        feedPopulationRating: 0,
        gameRating: 0,
        badgesRating: 0,
        // Removed leaderboardRating
        ranksRating: 0, // NEW
        dmRating: 0, // NEW
        importRating: 0, // NEW
        recommendationRating: 0,
        oneFeature: ''
      });

      setSubmitMessage('🎉 Thank you for your valuable feedback! Your responses have been recorded successfully.');
      setIsFormSubmitted(true);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('⚠️ There was an error submitting your feedback. Please try again or contact us directly at thoufeek2306@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-page">
      <Navbar 
        isDisabled={!isFormSubmitted} 
        onAlertNeeded={() => setShowAlert(true)}
      />
      
      {showAlert && (
        <div className="alert-overlay">
          <div className="alert-modal">
            <div className="alert-content">
              <h3>Access Restricted</h3>
              <p>Please submit the form before going to the pitch site</p>
              <button 
                className="alert-button"
                onClick={() => setShowAlert(false)}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="feedback-container">
        <div className="container">
          <div className="feedback-header">
            <h1 className="feedback-title">MovieSocial Beta Testing Survey</h1>
            <p className="feedback-subtitle">Help us improve your movie discovery experience</p>
            <p className="feedback-honesty-note">Please don't feel like you have to rate it highly just because you know me. Just give your honest feedback, it'll really help us improve</p>
          </div>

          <form onSubmit={handleSubmit} className="feedback-form">
            {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>            {/* General Section */}
            <div className="form-section">
              <h2 className="section-title-small">General</h2>
              
              <div className="form-group">
                <label>How often do you watch movies?</label>
                <div className="radio-group">
                  {['2-3 times a week', 'Once a week', '2-3 times a month', 'Once a month', 'Rarely'].map(option => (
                    <label key={option} className="radio-label">
                      <input
                        type="radio"
                        name="movieFrequency"
                        value={option}
                        checked={formData.movieFrequency === option}
                        onChange={(e) => handleInputChange('movieFrequency', e.target.value)}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Do you watch movie reviews before watching movies?</label>
                <div className="radio-group">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="radio-label">
                      <input
                        type="radio"
                        name="readReviews"
                        value={option}
                        checked={formData.readReviews === option}
                        onChange={(e) => handleInputChange('readReviews', e.target.value)}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Do you usually post reviews after watching movies?</label>
                <div className="radio-group">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="radio-label">
                      <input
                        type="radio"
                        name="postReviews"
                        value={option}
                        checked={formData.postReviews === option}
                        onChange={(e) => handleInputChange('postReviews', e.target.value)}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* First Impressions & Setup */}
            <div className="form-section">
              <h2 className="section-title-small">First Impressions & Setup</h2>
              
              <div className="form-group">
                <label>I used MovieSocial app:</label>
                <div className="button-group">
                  {['on Phone', 'on Web'].map(option => (
                    <button
                      key={option}
                      type="button"
                      className={`platform-btn ${formData.platform === option ? 'active' : ''}`}
                      onClick={() => handleInputChange('platform', option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <StarRating
                rating={formData.uiRating}
                onRatingChange={(rating) => handleInputChange('uiRating', rating)}
                label="Rate the UI"
              />

              <StarRating
                rating={formData.signupRating}
                onRatingChange={(rating) => handleInputChange('signupRating', rating)}
                label="Rate how easy it was to sign up and get started (1-5 stars)"
              />

              <StarRating
                rating={formData.languagePreferenceRating}
                onRatingChange={(rating) => handleInputChange('languagePreferenceRating', rating)}
                label="How clear was the movie language preference selection during signup?"
              />

              <StarRating
                rating={formData.performanceRating}
                onRatingChange={(rating) => handleInputChange('performanceRating', rating)}
                label="Rate the overall speed and performance of the app"
              />

              <StarRating
                rating={formData.navigationRating}
                onRatingChange={(rating) => handleInputChange('navigationRating', rating)}
                label="How easy was it to navigate and find what you were looking for?"
              />
            </div>

            {/* Daily Usage & Value */}
            <div className="form-section">
              <h2 className="section-title-small">Daily Usage & Value</h2>
              
              <StarRating
                rating={formData.dailyUsageRating}
                onRatingChange={(rating) => handleInputChange('dailyUsageRating', rating)}
                label="How likely are you to use this app daily?"
              />

              <StarRating
                rating={formData.comparisonRating}
                onRatingChange={(rating) => handleInputChange('comparisonRating', rating)}
                label="How much better is MovieSocial compared to just using IMDb or Google for movies?"
              />
            </div>

            {/* Movie Features */}
            <div className="form-section">
              <h2 className="section-title-small">Movie Features</h2>
              
              <StarRating
                rating={formData.watchlistRating}
                onRatingChange={(rating) => handleInputChange('watchlistRating', rating)}
                label="How useful is the watchlist feature for organizing movies you want to watch?"
              />

              <StarRating
                rating={formData.aiRecommendationRating}
                onRatingChange={(rating) => handleInputChange('aiRecommendationRating', rating)}
                label="How accurate/relevant did you find the AI-powered movie recommendations?"
              />
            </div>

            {/* Essential Feature */}
            <div className="form-section">
              <h2 className="section-title-small">Essential Feature</h2>
              
              <StarRating
                rating={formData.communityRating}
                onRatingChange={(rating) => handleInputChange('communityRating', rating)}
                label="How do you feel about MovieSocial's community rating system?"
              />
            </div>

            {/* Social Features */}
            <div className="form-section">
              <h2 className="section-title-small">Social Features</h2>
              
              <StarRating
                rating={formData.socialRating}
                onRatingChange={(rating) => handleInputChange('socialRating', rating)}
                label="How valuable is seeing friends' movie activity and reviews?"
              />

              <StarRating
                rating={formData.discussionRating}
                onRatingChange={(rating) => handleInputChange('discussionRating', rating)}
                label="How engaging are the movie discussions features?"
              />

              <StarRating
                rating={formData.ranksRating}
                onRatingChange={(rating) => handleInputChange('ranksRating', rating)}
                label="How useful do you find the custom Movie Ranks/List feature?"
              />

              <StarRating
                rating={formData.dmRating}
                onRatingChange={(rating) => handleInputChange('dmRating', rating)}
                label="How valuable is the Direct Message feature for sharing movie content?"
              />

              <StarRating
                rating={formData.feedPopulationRating}
                onRatingChange={(rating) => handleInputChange('feedPopulationRating', rating)}
                label="How well did the 'For You' feed populate with content based on your interests?"
              />
            </div>

            {/* Daily Movie Game (Modle) */}
            <div className="form-section">
              <h2 className="section-title-small">Daily Movie Game (Modle)</h2>
              
              <StarRating
                rating={formData.gameRating}
                onRatingChange={(rating) => handleInputChange('gameRating', rating)}
                label="Rate the fun factor of the daily movie guessing game (Modle)"
              />

              <StarRating
                rating={formData.badgesRating}
                onRatingChange={(rating) => handleInputChange('badgesRating', rating)}
                label="How motivating are badges and achievements for your app usage?"
              />
              
              {/* Removed: Leaderboard Rating was here */}
            </div>

            {/* Overall Value */}
            <div className="form-section">
              <h2 className="section-title-small">Overall Value</h2>
              
              <StarRating
                rating={formData.recommendationRating}
                onRatingChange={(rating) => handleInputChange('recommendationRating', rating)}
                label="Overall, how likely are you to recommend MovieSocial to movie-loving friends?"
              />

              <StarRating
                rating={formData.importRating}
                onRatingChange={(rating) => handleInputChange('importRating', rating)}
                label="How important is the Letterboxd profile import feature for you?"
              />

              <div className="form-group">
                <label htmlFor="oneFeature">Any feedback/suggestions</label>
                <textarea
                  id="oneFeature"
                  value={formData.oneFeature}
                  onChange={(e) => handleInputChange('oneFeature', e.target.value)}
                  className="form-textarea"
                  rows="4"
                  placeholder="Share your thoughts..."
                />
              </div>
            </div>

            <div className="form-submit">
              <button 
                type="submit" 
                className="cta-button submit-btn" 
                disabled={isSubmitting || !formData.name || !formData.movieFrequency || !formData.readReviews || !formData.postReviews || !formData.platform || formData.uiRating === 0 || formData.signupRating === 0 || formData.languagePreferenceRating === 0 || formData.performanceRating === 0 || formData.navigationRating === 0 || formData.dailyUsageRating === 0 || formData.comparisonRating === 0 || formData.watchlistRating === 0 || formData.aiRecommendationRating === 0 || formData.communityRating === 0 || formData.socialRating === 0 || formData.discussionRating === 0 || formData.feedPopulationRating === 0 || formData.gameRating === 0 || formData.badgesRating === 0 || formData.ranksRating === 0 || formData.dmRating === 0 || formData.importRating === 0 || formData.recommendationRating === 0}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Submitting...
                  </>
                ) : (
                  'Submit Feedback'
                )}
              </button>
              {submitMessage && <p className="submit-message">{submitMessage}</p>}
              <p className="form-note">
                All fields are required. Your feedback will be stored securely and used to improve MovieSocial.
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;