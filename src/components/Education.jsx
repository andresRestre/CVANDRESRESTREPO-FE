import React from 'react';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const studies = [
    {
        year: '2025',
        institution: 'SENA',
        degree: 'Análisis y desarrollo de software'
    },
    {
        year: '2018',
        institution: 'Universidad tecnológica de Pereira',
        degree: 'Licenciatura en artes visuales'
    },
    {
        year: '2011',
        institution: 'Instituto Técnico Superior',
        degree: 'Bachiller técnico con especialidad en diseño gráfico asistido por computador'
    }
];

const Education = () => {
    return (
        <section id="estudios" className="section">
            <div className="container">
                <h2 className="reveal">Estudios</h2>
                <div className="education-grid">
                    {studies.map((item, index) => (
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
