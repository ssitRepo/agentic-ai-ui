import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-gray-700/20 py-6 px-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Left: Copyright Notice */}
        <div className="text-center sm:text-left">
          <p className="text-text text-sm">
            © 2025 Agentic AI. All rights reserved.
          </p>
        </div>

        {/* Right: Navigation Links and Social Icons */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a
              href="/about"
              className="text-text text-sm hover:text-primary transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-text text-sm hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-text text-sm hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}