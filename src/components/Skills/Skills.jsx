import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Skills.css';

const professionalSkills = [
    { key: 'projectManagement', score: 4 },
    { key: 'agile', score: 5 },
    // These are tech names, usually don't need translation but let's see if I put them in JSON.
    // In JSON I didn't put specific tech names like React, Angular, Node JS, PostgreSQL.
    // I should probably add them or just render them as string if no translation found.
    // Actually, tech names are universal. `t` function returns key if not found.
    // Let's allow mixed content.
    { name: 'PostgreSQL', score: 4 },
    { name: 'React', score: 5 },
    { name: 'Angular', score: 4 },
    { name: 'Node JS', score: 4 },
    { name: 'QT & QML', score: 4 }
];

const softSkills = [
    { key: 'adaptability', score: 5 },
    { key: 'proactivity', score: 5 },
    { key: 'organization', score: 5 },
    { key: 'responsibility', score: 5 },
    { key: 'leadership', score: 4 },
    { key: 'communication', score: 4 },
    { key: 'english', score: 4 }
];

const SkillRating = ({ score }) => {
    return (
        <div className="skill-dots">
            {[...Array(5)].map((_, i) => (
                <div key={i} className={`dot ${i < score ? 'filled' : ''}`}></div>
            ))}
        </div>
    );
};

const Skills = () => {
    const { t } = useLanguage();

    return (
        <section id="habilidades" className="section">
            <div className="container">
                <h2 className="reveal">{t('skills.title')}</h2>
                <div className="skills-container">
                    <div className="skills-column reveal">
                        <h3>{t('skills.professional')}</h3>
                        <div className="skills-list card">
                            {professionalSkills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <span className="skill-name">
                                        {skill.key ? t(`skills.list.${skill.key}`) : skill.name}
                                    </span>
                                    <SkillRating score={skill.score} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-column reveal" style={{ animationDelay: '0.2s' }}>
                        <h3>{t('skills.soft')}</h3>
                        <div className="skills-list card">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <span className="skill-name">
                                        {skill.key ? t(`skills.list.${skill.key}`) : skill.name}
                                    </span>
                                    <SkillRating score={skill.score} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
