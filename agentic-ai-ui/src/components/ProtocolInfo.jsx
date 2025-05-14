// ProtocolInfo.jsx (example)
import React from 'react';
import mockData from '../data/protocolData.json';

export default function ProtocolInfo({ selectedAgent, selectedProtocol }) {
  const agent = mockData.agents?.find(a => a.id === selectedAgent);
  const protocol = agent?.protocols?.find(p => p.id === selectedProtocol);

  return (
    <div>
      {protocol ? (
        <>
          <h2>{protocol.name}</h2>
          <p>{protocol.description}</p>
        </>
      ) : (
        <p className="text-red-600">Please select an agent and protocol</p>
      )}
    </div>
  );
}