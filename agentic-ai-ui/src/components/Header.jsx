import React, { useState, useEffect } from 'react';
import White from '../assets/White Colour.png';
import Black from '../assets/Colour Logo.png';
import avatar from '../assets/avtar.png';
import { FaPalette, FaMoon, FaSun, FaPaintRoller } from 'react-icons/fa';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  // Detect theme changes
  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      setCurrentTheme(theme);
    };

    // Initial theme
    updateTheme();

    // Listen for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setThemeDropdownOpen(false); // Close theme dropdown when profile dropdown opens
  };

  const handleToggleThemeDropdown = () => {
    setThemeDropdownOpen(!themeDropdownOpen);
    setDropdownOpen(false); // Close profile dropdown when theme dropdown opens
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleThemeKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setThemeDropdownOpen(!themeDropdownOpen);
    }
  };

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setThemeDropdownOpen(false); // Close dropdown after selection
  };

  // Select logo based on theme
  const logoSrc = currentTheme === 'light' ? Black : White;

  return (
    <nav className="bg-[var(--bg)] border-b border-gray-100/20 shadow z-50 fixed top-0 left-0 w-full sigmasoft-gradient">
      <div className="flex items-center justify-between py-4 px-0">
        {/* Left: Logo with Minimal Margin */}
        <a href="/" className="ml-8">
          <img
            src={logoSrc}
            alt="Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Right: Profile and Theme Switcher Dropdowns */}
        <div className="flex items-center space-x-3 mr-4">
          {/* Theme Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={handleToggleThemeDropdown}
              onKeyDown={handleThemeKeyDown}
              className="text-text hover:text-primary transition-all duration-200 focus:ring-4 focus:ring-primary/50 p-1 rounded-full"
              role="button"
              tabIndex={0}
              aria-label="Toggle theme menu"
            >
              <FaPalette className="w-6 h-6" />
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-bg rounded-lg shadow-lg z-60 border border-gray-700/20">
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`flex items-center w-full px-4 py-2 text-text hover:bg-primary/20 transition-all duration-200 ${
                    currentTheme === 'dark' ? 'bg-primary/30' : ''
                  }`}
                >
                  <FaMoon className="w-5 h-5 mr-2" />
                  Dark
                </button>
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`flex items-center w-full px-4 py-2 text-text hover:bg-primary/20 transition-all duration-200 ${
                    currentTheme === 'light' ? 'bg-primary/30' : ''
                  }`}
                >
                  <FaSun className="w-5 h-5 mr-2" />
                  Light
                </button>
                <button
                  onClick={() => handleThemeChange('sigmasoft')}
                  className={`flex items-center w-full px-4 py-2 text-text hover:bg-primary/20 transition-all duration-200 ${
                    currentTheme === 'sigmasoft' ? 'bg-primary/30' : ''
                  }`}
                >
                  <FaPaintRoller className="w-5 h-5 mr-2" />
                  Sigmasoft
                </button>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <img
              src={avatar}
              alt="User Profile"
              className="w-8 h-8 rounded-full object-cover cursor-pointer focus:ring-4 focus:ring-primary/50"
              onClick={handleToggleDropdown}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex={0}
              aria-label="Toggle user menu"
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-bg rounded-lg shadow-lg z-60 border border-gray-700/20">
                <div className="px-4 py-3 border-b border-gray-700/20">
                  <span className="block text-sm text-text">
                    Bonnie Green
                  </span>
                  <span className="block text-sm text-text/50 truncate">
                    name@yourmail.com
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary/20 transition-all duration-200"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary/20 transition-all duration-200"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text hover:bg-primary/20 transition-all duration-200"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}