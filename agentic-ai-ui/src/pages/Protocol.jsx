import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ProtocolInfo from '../components/ProtocolInfo';
import ProtocolTabs from '../components/ProtocolTabs';
import ProtocolResponseArea from '../components/ProtocolResponseArea';

export default function Protocol() {
  const { selectedAgent, setSelectedAgent, selectedProtocol, setSelectedProtocol } = useOutletContext();

  console.log('Protocol rendered, selectedAgent:', selectedAgent, 'selectedProtocol:', selectedProtocol);

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">Protocol Page</h1>
      <p>Selected Agent: {selectedAgent || 'None'}, Protocol: {selectedProtocol || 'None'}</p>
      <ProtocolInfo selectedAgent={selectedAgent} selectedProtocol={selectedProtocol} />
      <ProtocolTabs selectedAgent={selectedAgent} selectedProtocol={selectedProtocol} />
      <ProtocolResponseArea selectedAgent={selectedAgent} selectedProtocol={selectedProtocol} />
    </div>
  );
}