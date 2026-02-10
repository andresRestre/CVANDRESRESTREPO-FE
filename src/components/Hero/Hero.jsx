import { Plane, Car } from 'lucide-react';
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
                            <img src="/images/profile.png" alt="Andres Felipe Restrepo" />
                        </div>
                        <h1 className="profile-name">Andres Felipe<br /> <span className="highlight">Restrepo Hurtado</span></h1>
                        <h3 className="profile-role">{t('hero.role')}</h3>
                        <h3 className="profile-role">{t('hero.role2')}</h3>

                        <div className="hero-badges">
                            <div className="badge">
                                <Plane size={18} />
                                <span>{t('hero.passport')}: <strong className="status-valid">{t('hero.passportStatus')}</strong></span>
                            </div>
                            <div className="badge">
                                <Car size={18} />
                                <span>{t('hero.license')}: <strong className="status-valid">{t('hero.licenseStatus')}</strong></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-main reveal">
                    <div className="readme-box">

                        <div className="readme-content">
                            <h2 className="greeting">{t('hero.greeting')}</h2>
                            <p className="bio">
                                {t('hero.description')}
                            </p>

                            <div className="bio-details">
                                <p className="bio-paragraph">{t('about.p1')}</p>
                                <p className="bio-paragraph">{t('about.p2')}</p>
                            </div>

                            <div className="hero-actions">
                                <a href="/documents/AndresFelipeRestrepoHurtado.pdf" download="AndresFelipeRestrepoHurtado.pdf" className="btn btn-primary">
                                    {t('hero.downloadCV')}
                                </a>
                                <a href="#projects" className="btn btn-outline">
                                    {t('hero.viewPortfolio')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
