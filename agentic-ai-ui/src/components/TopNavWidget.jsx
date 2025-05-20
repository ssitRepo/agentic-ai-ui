import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function TopNavWidget() {
  const location = useLocation();
  const navigate = useNavigate();

  const isPerspective = location.pathname === '/protocol';

  const toggleMode = () => {
    navigate(isPerspective ? '/' : '/protocol');
  };

  return (
    <div className="fixed top-20 right-4 z-50 hidden sm:block">
      <button
        onClick={toggleMode}
        className="relative flex w-40 sm:w-48 h-10 bg-[var(--bg)] border border-gray-700/20 rounded-full shadow-md transition-all duration-300 overflow-hidden focus:outline-none"
        aria-label="Toggle between Chat and Perspective"
      >
        {/* Sliding knob */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full rounded-full bg-[var(--primary)] transition-transform duration-300 z-10 ${
            isPerspective ? 'translate-x-full' : ''
          }`}
        />

        {/* Labels */}
        <div className="relative z-20 w-1/2 flex items-center justify-center text-sm sm:text-base font-medium">
          <span
            className={`transition-colors duration-300 ${
              !isPerspective ? 'text-white' : 'text-[var(--text)]'
            }`}
          >
            Chat
          </span>
        </div>
        <div className="relative z-20 w-1/2 flex items-center justify-center text-sm sm:text-base font-medium">
          <span
            className={`transition-colors duration-300 ${
              isPerspective ? 'text-white' : 'text-[var(--text)]'
            }`}
          >
            Perspective
          </span>
        </div>
      </button>
    </div>
  );
}
