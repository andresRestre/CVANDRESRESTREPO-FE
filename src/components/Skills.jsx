import React from 'react';
import './Skills.css';

const professionalSkills = [
    { name: 'Administración de proyectos', score: 4 },
    { name: 'PostgreSQL', score: 4 },
    { name: 'Metodologías agiles de trabajo', score: 5 },
    { name: 'React', score: 5 },
    { name: 'Angular', score: 4 },
    { name: 'Node JS', score: 4 }
];

const softSkills = [
    { name: 'Adaptabilidad / Aprendizaje', score: 5 },
    { name: 'Proactividad', score: 5 },
    { name: 'Organización / Planeación', score: 5 },
    { name: 'Responsabilidad', score: 5 },
    { name: 'Liderazgo', score: 4 },
    { name: 'Comunicación asertiva', score: 4 }
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
    return (
        <section id="habilidades" className="section">
            <div className="container">
                <h2 className="reveal">Habilidades</h2>
                <div className="skills-container">
                    <div className="skills-column reveal">
                        <h3>Profesionales</h3>
                        <div className="skills-list card">
                            {professionalSkills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <span className="skill-name">{skill.name}</span>
                                    <SkillRating score={skill.score} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-column reveal" style={{ animationDelay: '0.2s' }}>
                        <h3>Blandas</h3>
                        <div className="skills-list card">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <span className="skill-name">{skill.name}</span>
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
