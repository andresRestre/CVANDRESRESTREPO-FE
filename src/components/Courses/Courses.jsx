import React from 'react';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Courses.css';

const Courses = () => {
    const { t } = useLanguage();
    const coursesList = t('courses.list');

    return (
        <section id="cursos" className="section">
            <div className="container">
                <h2 className="reveal">{t('courses.title')}</h2>
                <div className="courses-grid">
                    {Array.isArray(coursesList) && coursesList.map((item, index) => (
                        <div key={index} className="course-card card reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                            <BookOpen size={40} className="course-icon" />
                            <div className="course-year">{item.year}</div>
                            <h3>{item.title}</h3>
                            <div className="course-duration">{item.duration}</div>
                            <p className="course-details">{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
