import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="inicio" className="section hero">
            <div className="container hero-container">

                <div className="hero-sidebar reveal">
                    <div className="sidebar-sticky">
                        <div className="image-wrapper">
                            <img src="/profile.png" alt="Andres Felipe Restrepo" />
                        </div>
                        <h1 className="profile-name">Andres Felipe<br /> <span className="highlight">Restrepo Hurtado</span></h1>
                        <h3 className="profile-role">{t('hero.role')}</h3>
                        <h3 className="profile-role">{t('hero.role2')}</h3>
                    </div>
                </div>

                <div className="hero-main reveal">
                    <div className="readme-box">
                        
                        <div className="readme-content">
                            <h2 className="greeting">{t('hero.greeting')}</h2>
                            <p className="bio">
                                {t('hero.description')}
                            </p>
                            <hr className="divider" />
                            <p className="bio-detail">{t('about.p1')}</p>
                            <p className="bio-detail">{t('about.p2')}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
