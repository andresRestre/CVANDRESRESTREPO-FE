import React from 'react';
import './Experience.css';

const jobs = [
    {
        year: '2025',
        title: 'Aprendiz en desarrollo de software',
        company: 'Met Group - Pereira/Risaralda',
        details: [
            'Desarrollo back-end / front-end Node js y Angular, manejo de bases de datos en PostgreSQL.',
            'Metodologías ágiles / Jira, documentación y levantamiento de requisitos.',
            'Quality Assurance de todas las plataformas y automatización de informes con Katalon.',
            'Manejo de dispositivos Linux y monitorización.'
        ]
    },
    {
        year: '2019',
        title: 'Supervisor Sisben IV',
        company: 'Alcaldía de Pereira - Pereira/Risaralda',
        details: [
            'Prestar los servicios como supervisor de campo para apoyar la implementación de la nueva plataforma de identificación de potenciales beneficiarios Sisben IV.',
            'Manejo de dispositivos móviles de captura de datos.',
            'Captura de datos según manual proporcionado por el DNP.',
            'Manejo de equipos de trabajo a cargo.'
        ]
    },
    {
        year: '2018',
        title: 'Auxiliar asuntos culturales',
        company: 'Banco de la republica - Pereira/Risaralda',
        details: [
            'Prestar el apoyo como bibliotecario y educador para el banco de la republica en la ciudad de Pereira.',
            'Manejo del sistema interno para clasificación de libros y optimización de recursos.',
            'Diseño de actividades educativas para promover la lectura.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experiencia" className="section">
            <div className="container">
                <h2 className="reveal">Experiencia Laboral</h2>
                <div className="timeline">
                    {jobs.map((job, index) => (
                        <div key={index} className="timeline-item reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="timeline-year">{job.year}</div>
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
