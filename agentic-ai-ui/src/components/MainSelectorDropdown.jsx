import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronDown, FaUser, FaCogs } from "react-icons/fa";

export default function MainSelectorDropdown({
  agents = [],
  protocols = [],
  selectedAgent,
  setSelectedAgent,
  selectedProtocol,
  setSelectedProtocol,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isChatPage = location.pathname === "/";
  const isProtocolPage = location.pathname === "/protocol";

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (id) => {
    if (isChatPage) {
      setSelectedAgent(id);
    } else if (isProtocolPage) {
      setSelectedProtocol(id);
    }
    setIsOpen(false);
  };

  const displayLabel = () => {
    if (isChatPage) {
      return selectedAgent
        ? agents.find((a) => a.id === selectedAgent)?.name
        : "Choose an agent";
    } else if (isProtocolPage) {
      return selectedProtocol
        ? protocols.find((p) => p.id === selectedProtocol)?.name
        : "Choose a perspective";
    }
    return "";
  };

  const options = isChatPage ? agents : isProtocolPage ? protocols : [];

  return (
    <div className="fixed top-40 right-4 z-50 hidden sm:block">
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between px-4 py-2 rounded-lg bg-[var(--bg)] border-2 border-[var(--primary)]/50 hover:border-[var(--primary)] text-[var(--text)] cursor-pointer select-none"
        role="button"
        tabIndex={0}
      >
        <span>{displayLabel()}</span>
        <FaChevronDown
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <ul className="absolute mt-4 w-full max-h-60 overflow-y-auto rounded-lg border-2 border-[var(--primary)]/40 bg-[var(--bg)] shadow-lg">
          {options.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className="flex items-center px-4 py-2 hover:bg-[var(--primary)]/20 cursor-pointer text-[var(--text)]"
            >
              {isChatPage ? (
                <FaUser className="w-4 h-4 mr-4" /> // Added `mr-4` here to add space between icon and text
              ) : (
                <FaCogs className="w-4 h-4 mr-4" /> // Added `mr-4` here to add space between icon and text
              )}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
