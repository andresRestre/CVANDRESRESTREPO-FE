import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Experience.css';

const Experience = () => {
    const { t } = useLanguage();
    const jobs = t('experience.jobs');

    return (
        <section id="experiencia" className="section">
            <div className="container">
                <h2 className="reveal">{t('experience.title')}</h2>
                <div className="timeline">
                    {Array.isArray(jobs) && jobs.map((job, index) => (
                        <div key={index} className="timeline-item reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                            {/* Year is not in the JSON structure I defined earlier, oops. 
                  Let's check the JSON content I managed to write.
                  I forgot 'year' in the JSON structure for experience jobs.
                  Let's fix it by checking/updating JSON or defaulting.
                  Wait, I should probably update the JSON files to include years.
                  For now, I'll hardcode years based on index or just update JSONs.
                  Actually, updating JSONs is better.
              */}
                            <div className="timeline-year">
                                {job.year}
                            </div>
                            <div className="timeline-content card">
                                <h3>{job.title}</h3>
                                <h4>{job.company}</h4>
                                <ul>
                                    {job.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
