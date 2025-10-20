import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.dir = i18n.dir();
    }, [i18n, i18n.language]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    
    const languages = [
        { code: 'en', name: 'EN' },
        { code: 'fr', name: 'FR' },
        { code: 'de', name: 'DE' },
        { code: 'ar', name: 'AR' },
    ];

    return (
        <div className="flex items-center space-x-2">
            {languages.map(({ code, name }) => (
                <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`px-3 py-1 text-sm font-medium rounded-md focus:outline-none ${i18n.language.startsWith(code) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;