import React from 'react';
import mockData from '../data/protocolData.json';

export default function ProtocolInfo({ selectedAgent, selectedProtocol }) {
  const agent = mockData.agents?.find(a => a.id === selectedAgent);
  const protocol = agent?.protocols?.find(p => p.id === selectedProtocol);

  return (
    <div style={{ color: 'var(--text)' }}>
      {protocol ? (
        <>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{protocol.name}</h2>
          <p>{protocol.description}</p>
        </>
      ) : (
        <p style={{ color: 'var(--red)' }}>Please select an agent and protocol</p>
      )}
    </div>
  );
}
