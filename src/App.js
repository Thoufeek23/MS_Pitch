import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ModleSpotlight from './components/ModleSpotlight';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  // This hook sets up the "innovative" fade-in-on-scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Triggers when 10% of the element is in view
    });

    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Clean up the observer when the component unmounts
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ModleSpotlight />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;