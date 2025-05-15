import React, { useState } from 'react';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

export default function ProtocolTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="mb-4">
      <div className="flex space-x-4 border-b" style={{ borderColor: 'var(--text-secondary)' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="py-2 px-4 transition-colors duration-200"
            style={{
              color: activeTab === tab ? 'var(--text-tertiary)' : 'var(--text-secondary)',
              borderBottom: activeTab === tab ? '2px solid var(--primary)' : 'none',
              fontWeight: activeTab === tab ? '600' : 'normal',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4" style={{ color: 'var(--text)' }}>
        <p>
          Content for <strong>{activeTab}</strong> tab.
        </p>
      </div>
    </div>
  );
}
