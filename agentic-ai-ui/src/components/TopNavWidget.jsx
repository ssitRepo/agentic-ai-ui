import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaComment, FaBook, FaChevronDown } from 'react-icons/fa';

export default function TopNavWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Detect click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Determine active mode label
  const currentMode = location.pathname === '/protocol' ? 'Perspective' : 'Chat';

  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="relative" ref={dropdownRef}>
        {/* Toggle Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 bg-[var(--bg)] text-[var(--text)] rounded-xl border border-gray-700/20 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
          aria-label="Switch between Chat and Perspective"
        >
          <span className="mr-2 hidden sm:inline">{currentMode}</span>
          <FaChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-12 right-0 w-40 bg-[var(--bg)] border border-gray-700/20 rounded-xl shadow-lg overflow-hidden">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-[var(--text)] hover:bg-primary/10 transition-colors duration-200 ${
                  isActive ? 'font-semibold' : ''
                }`
              }
            >
              <FaComment className="w-5 h-5 mr-2" />
              Chat
            </NavLink>
            <NavLink
              to="/protocol"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-[var(--text)] hover:bg-primary/10 transition-colors duration-200 ${
                  isActive ? 'font-semibold' : ''
                }`
              }
            >
              <FaBook className="w-5 h-5 mr-2" />
              Perspective
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
