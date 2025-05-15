import React from 'react';
import mockData from '../data/protocolData.json'; // Adjust path as needed

export default function ProtocolResponseArea({ selectedAgent, selectedProtocol }) {
  const agent = mockData.agents?.find(a => a.id === selectedAgent);
  const protocol = agent?.protocols?.find(p => p.id === selectedProtocol);
  const responses = protocol?.tabs || [];

  return (
    <div className="space-y-4" style={{ color: 'var(--text)' }}>
      {responses.length > 0 ? (
        responses.map((resp, index) => (
          <div key={index}>
            <p className="mb-1">{resp.content}</p>

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
        ))
      ) : (
        <p style={{ color: 'var(--red)' }}>
          {selectedAgent && selectedProtocol
            ? 'No responses available for this perspective'
            : 'Please select an agent and perspective'}
        </p>
      )}
    </div>
  );
}
