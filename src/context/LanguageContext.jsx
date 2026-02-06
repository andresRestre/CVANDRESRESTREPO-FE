import { createContext, useState, useContext, useEffect } from 'react';
import es from '../vocals/es.json';
import en from '../vocals/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = language === 'es' ? es : en;
        for (const k of keys) {
            value = value[k];
            if (!value) return key;
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
