import React, { useState } from 'react';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

export default function ProtocolTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="mb-4">
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 ${
              activeTab === tab ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p>Content for <strong>{activeTab}</strong> tab.</p>
      </div>
    </div>
  );
}
