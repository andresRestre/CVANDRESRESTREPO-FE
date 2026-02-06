import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import ContactBar from './components/ContactBar/ContactBar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Re-observe when language changes potentially (though DOM stays mostly same structure)
    // We might need to observe in a separate layout effect or MutationObserver.
    // For simplicity, we just run it. Using a timeout to ensure DOM is ready if lang switches fast.
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="app">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Education />
          <Skills />
          <Experience />
          <Footer />
          <ContactBar />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
