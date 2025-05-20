import React from 'react';
import mockData from '../data/protocolData.json';

export default function ProtocolInfo({ selectedProtocol }) {
  // Find the selected protocol directly from the mockData
  const protocol = mockData.protocols?.find(p => p.id === selectedProtocol);

  return (
    <div style={{ color: 'var(--text)' }}>
      {protocol ? (
        <>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{protocol.name}</h2>
          <p>{protocol.description}</p>
        </>
      ) : (
        <p style={{ color: 'var(--red)' }}>
          Please select a perspective
        </p>
      )}
    </div>
  );
}
