import React, { useState } from 'react';
import mockData from '../data/protocolData.json';

export default function ProtocolResponseArea({ selectedProtocol }) {
  // Directly find the protocol from top-level protocols
  const protocol = mockData.protocols?.find(p => p.id === selectedProtocol);
  const responses = protocol?.tabs || [];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" style={{ color: 'var(--text)' }}>
      {responses.length > 0 ? (
        responses.map((resp, index) => (
          <div
            key={index}
            className="border rounded-lg"
            style={{ borderColor: 'var(--text-secondary)' }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-4 py-2 text-left focus:outline-none transition"
              style={{
                color: 'var(--text-tertiary)',
                fontWeight: '600',
                backgroundColor: 'transparent'
              }}
            >
              <span>{resp.label}</span>
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 py-2 space-y-2" style={{ color: 'var(--text)' }}>
                <p>{resp.content}</p>

                {resp.cta && (
                  <>
                    {resp.cta.type === 'link' && (
                      <a
                        href={resp.cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary)', textDecoration: 'underline' }}
                      >
                        {resp.cta.label}
                      </a>
                    )}
                    {resp.cta.type === 'button' && (
                      <button
                        onClick={() => alert(`Action: ${resp.cta.action}`)}
                        className="mt-2 px-4 py-1 rounded transition-colors"
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--text)',
                        }}
                      >
                        {resp.cta.label}
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <p style={{ color: 'var(--red)' }}>
          {selectedProtocol
            ? 'No responses available for this perspective'
            : 'Please select a perspective'}
        </p>
      )}
    </div>
  );
}
