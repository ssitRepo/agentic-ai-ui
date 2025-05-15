import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] sigmasoft-gradient border-t border-gray-100/20 py-2 px-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center space-y-4 sm:space-y-0">
        <div className="text-center">
          <p className="text-text text-sm">
            © 2025  Sigmasoft Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
