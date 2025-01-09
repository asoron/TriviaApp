/** @format */

import React, { createContext, useContext, useState } from 'react';
import { TEXTS } from '../services/textContent';

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('en');

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === 'en' ? 'tr' : 'en'));
	};

	const getText = (section, key) => {
		return TEXTS[language][section][key] || TEXTS['en'][section][key];
	};

	const value = {
		language,
		toggleLanguage,
		getText,
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};
