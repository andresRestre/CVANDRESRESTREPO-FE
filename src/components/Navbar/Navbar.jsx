import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = ['home', 'skills', 'projects', 'experience', 'studies', 'courses'];

  const sectionIds = {
    home: 'inicio',
    skills: 'habilidades',
    projects: 'projects',
    experience: 'experiencia',
    studies: 'estudios',
    courses: 'cursos'
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo" onClick={() => scrollTo('inicio')}>
          <img src="/icons/ARlogo.svg" alt="AR Logo" className="logo-img" />
        </div>

        <div className="desktop-menu">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(sectionIds[item])}
              className="nav-link"
            >
              {t(`navbar.${item}`)}
            </button>
          ))}
        </div>

        <div className="controls">
          <button className="icon-btn" onClick={toggleLanguage} title="Change Language">
            <Globe size={20} />
            <span className="lang-code">{language.toUpperCase()}</span>
          </button>

          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(sectionIds[item])}
                className="mobile-link"
              >
                {t(`navbar.${item}`)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
