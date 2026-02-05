import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="section hero">
            <div className="container hero-content">
                <div className="hero-text reveal">
                    <h2 className="greeting">Hola, soy</h2>
                    <h1>Andres Felipe<br /> <span className="highlight">Restrepo H.</span></h1>
                    <h3 className="role">Desarrollador de Software</h3>
                    <p className="bio">
                        Especializado en crear soluciones digitales eficientes y escalables.
                        Licencia de conducción (A2-B1). Disponibilidad inmediata.
                    </p>

                    <div className="contact-info">
                        <div className="info-item">
                            <Phone size={18} className="icon" />
                            <span>+57 322 648 9850</span>
                        </div>
                        <div className="info-item">
                            <Mail size={18} className="icon" />
                            <span>gozmey@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <MapPin size={18} className="icon" />
                            <span>Dosquebradas - Risaralda</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image reveal">
                    <div className="image-wrapper">
                        <img src="/profile.png" alt="Andres Felipe Restrepo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
