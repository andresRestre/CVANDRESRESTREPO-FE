import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    return (
        <section id="perfil" className="section">
            <div className="container">
                <div className="reveal">
                    <h2>{t('about.title')}</h2>
                    <div className="card">
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
