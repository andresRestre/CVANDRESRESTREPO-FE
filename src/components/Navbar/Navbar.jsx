import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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

  const navKey = (key) => {
    // Helper to map keys to ID if needed, but we use consistent IDs
    return key;
  };

  const menuItems = ['projects', 'experience', 'skills', 'studies', 'profile', 'home'];

  const sectionIds = {
    home: 'inicio',
    profile: 'perfil',
    studies: 'estudios',
    skills: 'habilidades',
    experience: 'experiencia',
    projects: 'projects'
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo" onClick={() => scrollTo('inicio')}>
          AR
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
          <button className="icon-btn" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
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
