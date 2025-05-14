import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-800">Agentic AI</div>
      <div className="flex items-center space-x-4">
        {/* Add user avatar or settings icon here */}
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
