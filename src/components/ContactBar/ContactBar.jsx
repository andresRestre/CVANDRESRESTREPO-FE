import React from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip } from 'react-tooltip'
import './ContactBar.css';

const ContactBar = () => {
    const { t } = useLanguage();

    return (
        <div className="contact-bar">
            <div className="contact-content">

                <div className="contact-left">
                    <span className="contact-legend">{t('contact.legend')}</span>

                    <a
                        href="https://wa.me/573226489850"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                        data-tooltip-id="contact-tooltip"
                        data-tooltip-content={t('contact.whatsapp')}
                    >
                        <MessageCircle size={20} className="icon" />
                    </a>

                    <a
                        href="mailto:gozmey@gmail.com"
                        className="contact-item"
                        data-tooltip-id="contact-tooltip"
                        data-tooltip-content={t('contact.email')}
                    >
                        <Mail size={20} className="icon" />
                    </a>
                </div>

                <div className="contact-right">
                    <a
                        href="https://www.linkedin.com/in/andres-felipe-restrepo-hurtado-786ab6166/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                        data-tooltip-id="contact-tooltip"
                        data-tooltip-content={t('contact.linkedin')}
                    >
                        <Linkedin size={20} className="icon" />
                    </a>

                    <a
                        href="https://github.com/andresRestre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                        data-tooltip-id="contact-tooltip"
                        data-tooltip-content={t('contact.github')}
                    >
                        <Github size={20} className="icon" />
                    </a>
                </div>

                <Tooltip
                    id="contact-tooltip"
                    place="top"
                    style={{ backgroundColor: 'var(--accent)', color: '#fff', fontSize: '0.8rem', zIndex: 1000 }}
                />
            </div>
        </div>
    );
};

export default ContactBar;
