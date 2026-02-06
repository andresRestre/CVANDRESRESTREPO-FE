import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Education.css';

const Education = () => {
    const { t } = useLanguage();
    const degrees = t('education.degrees'); // Expecting an array

    return (
        <section id="estudios" className="section">
            <div className="container">
                <h2 className="reveal">{t('education.title')}</h2>
                <div className="education-grid">
                    {Array.isArray(degrees) && degrees.map((item, index) => (
                        <div key={index} className="edu-card card reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                            <GraduationCap size={40} className="edu-icon" />
                            <div className="edu-year">{item.year}</div>
                            <h3>{item.institution}</h3>
                            <p>{item.degree}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
