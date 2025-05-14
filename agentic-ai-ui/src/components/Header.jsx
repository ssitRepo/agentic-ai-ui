import React, { useState } from 'react';
import ColorLogo from '../assets/White Colour.png';
import avatar from '../assets/avtar.png';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow">
      <div className="flex items-center justify-between py-4 px-0">
        {/* Left: Logo with Minimal Margin */}
        <a href="/" className="ml-10">
          <img
            src={ColorLogo}
            alt="Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Right: Profile Dropdown */}
        <div className="relative mr-4">
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
            <div className="absolute right-0 mt-2 w-48 bg-bg rounded-lg shadow-lg z-20000 border border-gray-700/20 bg-white border-gray-200 dark:bg-blue-900 shadow">
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
                    className="block px-4 py-2 text-sm text-text hover:bg-primary/20"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-text hover:bg-primary/20"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-text hover:bg-primary/20"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
