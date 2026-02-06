import React from 'react';
import { ExternalLink, Database, Server, AppWindow } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const projectsList = t('projects.list') || [];
    // Fallback if list is empty or undefined, though keys are set.
    // We only have one real project now, but logic supports many.
    // We add images manually since JSON doesn't handle imports well or we map by index.

    // Manual mapping for images and links since translation files are text only
    const projectImages = [
        '/project-sena.png',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ];

    const getIcon = (techName) => {
        const lower = techName.toLowerCase();
        if (lower.includes('react')) return <AppWindow size={16} />;
        if (lower.includes('node')) return <Server size={16} />;
        if (lower.includes('sql') || lower.includes('data')) return <Database size={16} />;
        return null;
    };

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="reveal">{t('projects.title')}</h2>
                <div className="projects-grid">
                    {Array.isArray(projectsList) && projectsList.map((project, index) => (
                        <div key={index} className="project-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-image">
                                <img src={projectImages[index] || projectImages[1]} alt={project.title} />
                                <div className="project-overlay">
                                    <a href="https://talentorisaralda.com/competiciones" className="project-btn">
                                        {t('projects.viewMore')} <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="tech-stack">
                                    {project.tech && project.tech.map((tech, i) => (
                                        <span key={i} className="tech-badge">
                                            {getIcon(tech)} {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
