import React, { useState } from 'react';
import { ExternalLink, Database, Server, AppWindow, Play, X, Github, Gitlab, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const projectsList = t('projects.list') || [];
    const [selectedVideo, setSelectedVideo] = useState(null);

    const projectImages = [
        '/images/project-sena.png',
        '/images/plm-project.png', // Assuming user saves the image with this name
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ];

    const getIcon = (techName) => {
        const lower = techName.toLowerCase();
        if (lower.includes('react') || lower.includes('angular')) return <AppWindow size={14} />;
        if (lower.includes('node')) return <Server size={14} />;
        if (lower.includes('sql') || lower.includes('data') || lower.includes('postgres') || lower.includes('sequel')) return <Database size={14} />;
        if (lower.includes('gitlab')) return <Gitlab size={14} />;
        if (lower.includes('jwt')) return <ShieldCheck size={14} />;
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
                                <img src={projectImages[index] || projectImages[0]} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-actions">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                                            {t('projects.viewMore')} <ExternalLink size={16} />
                                        </a>
                                        {project.video && (
                                            <button onClick={() => setSelectedVideo(project.video)} className="project-btn video-btn">
                                                {t('projects.viewVideo')} <Play size={16} />
                                            </button>
                                        )}
                                    </div>
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

            {/* Video Modal */}
            {selectedVideo && (
                <div className="video-modal" onClick={() => setSelectedVideo(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedVideo(null)}>
                            <X size={24} />
                        </button>
                        <video controls autoPlay className="modal-video">
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
