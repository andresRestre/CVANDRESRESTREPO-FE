import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem 0',
            borderTop: '1px solid var(--border-color)', /* Updated var */
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            paddingBottom: '4rem' /* Add space for fixed contact bar on mobile/desktop so it doesn't overlap too much if scrolled to very bottom */
        }}>
            <p>&copy; {new Date().getFullYear()} Andres Felipe Restrepo H. - {t('footer.rights')}</p>
        </footer>
    );
};

export default Footer;
