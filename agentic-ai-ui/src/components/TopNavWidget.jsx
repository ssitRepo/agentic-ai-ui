import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaComment, FaBook, FaChevronDown } from 'react-icons/fa';

export default function TopNavWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-20 right-4">
      <div className="relative">
        {/* Dropdown Toggle Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 bg-dark-bg/90 text-text-light rounded-xl border border-gray-700/20 hover:bg-gradient-to-r hover:from-sigmasoft-purple/60 hover:to-sigmasoft-pink/60 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-sigmasoft-purple/50"
          aria-label="Switch between Chat and Protocol"
        >
          <span className="mr-2 hidden sm:inline">Mode</span>
          <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-12 right-0 w-40 bg-dark-bg border border-gray-700/20 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-text-light/90 hover:bg-gradient-to-r hover:from-sigmasoft-purple/60 hover:to-sigmasoft-pink/60 transition-all duration-200 ${
                  isActive ? 'bg-gradient-to-r from-sigmasoft-purple/30 to-sigmasoft-orange/30' : ''
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
                `flex items-center px-4 py-2 text-text-light/90 hover:bg-gradient-to-r hover:from-sigmasoft-purple/60 hover:to-sigmasoft-pink/60 transition-all duration-200 ${
                  isActive ? 'bg-gradient-to-r from-sigmasoft-purple/30 to-sigmasoft-orange/30' : ''
                }`
              }
            >
              <FaBook className="w-5 h-5 mr-2" />
              Protocol
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}