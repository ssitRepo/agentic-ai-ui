// src/components/ThemeSwitcher.jsx
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          className="flex items-center px-4 py-2 bg-bg/90 text-text rounded-xl border border-gray-700/20 hover:bg-primary/60 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Switch theme"
        >
          <FaPalette className="w-5 h-5" />
        </button>
        <div className="absolute bottom-12 right-0 w-40 bg-bg border border-gray-700/20 rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => handleThemeChange('dark')}
            className={`flex items-center w-full px-4 py-2 text-text hover:bg-primary/60 transition-all duration-200 ${
              theme === 'dark' ? 'bg-primary/30' : ''
            }`}
          >
            <FaMoon className="w-5 h-5 mr-2" />
            Dark
          </button>
          <button
            onClick={() => handleThemeChange('light')}
            className={`flex items-center w-full px-4 py-2 text-text hover:bg-primary/60 transition-all duration-200 ${
              theme === 'light' ? 'bg-primary/30' : ''
            }`}
          >
            <FaSun className="w-5 h-5 mr-2" />
            Light
          </button>
          <button
            onClick={() => handleThemeChange('sigmasoft')}
            className={`flex items-center w-full px-4 py-2 text-text hover:bg-primary/60 transition-all duration-200 ${
              theme === 'sigmasoft' ? 'bg-primary/30' : ''
            }`}
          >
            <FaPalette className="w-5 h-5 mr-2" />
            Sigmasoft
          </button>
        </div>
      </div>
    </div>
  );
}