import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('navy-focus');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'navy-focus' ? 'green-focus' : 'navy-focus');
    };

    return (
        <div className="fixed bottom-24 right-8 z-50">
            <button
                onClick={toggleTheme}
                className="bg-white border border-gray-200 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center text-primary-navy group"
                title="Switch Branding Focus"
            >
                <Palette size={24} className="group-hover:rotate-12 transition-transform" />
                <span className="absolute right-full mr-4 bg-primary-navy text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                    Switch to {theme === 'navy-focus' ? 'Emerald Focus' : 'Navy Focus'}
                </span>
            </button>
        </div>
    );
};

export default ThemeSwitcher;
