import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <p>&copy; {new Date().getFullYear()} Andres Felipe Restrepo H.</p>
        </footer>
    );
};

export default Footer;
