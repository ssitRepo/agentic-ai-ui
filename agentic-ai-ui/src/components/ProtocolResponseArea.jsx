import React from 'react';
import mockData from '../data/protocolData.json'; // Adjust path as needed

export default function ProtocolResponseArea({ selectedAgent, selectedProtocol }) {
  console.log('ProtocolResponseArea rendered, selectedAgent:', selectedAgent, 'selectedProtocol:', selectedProtocol);

  // Find the selected agent and protocol
  const agent = mockData.agents?.find(a => a.id === selectedAgent);
  const protocol = agent?.protocols?.find(p => p.id === selectedProtocol);
  const responses = protocol?.tabs || [];

  return (
    <div className="space-y-4">
      {responses.length > 0 ? (
        responses.map((resp, index) => (
          <div
            key={index}
          >
            <p className="mb-1">{resp.content}</p>

            {resp.cta && (
              <>
                {resp.cta.type === 'link' && (
                  <a
                    href={resp.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {resp.cta.label}
                  </a>
                )}
                {resp.cta.type === 'button' && (
                  <button
                    onClick={() => alert(`Action: ${resp.cta.action}`)}
                    className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    {resp.cta.label}
                  </button>
                )}
              </>
            )}
          </div>
        ))
      ) : (
        <p className="text-red-600">
          {selectedAgent && selectedProtocol
            ? 'No responses available for this protocol'
            : 'Please select an agent and protocol'}
        </p>
      )}
    </div>
  );
}