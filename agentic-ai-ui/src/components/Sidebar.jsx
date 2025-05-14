import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import mockData from '../data/protocolData.json';

export default function Sidebar({ selectedAgent, setSelectedAgent, selectedProtocol, setSelectedProtocol }) {
  const location = useLocation();
  const isChatPage = location.pathname === '/';
  const isProtocolPage = location.pathname === '/protocol';
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    console.log('mockData in Sidebar:', mockData);
    setAgents(mockData.agents || []);
  }, []);

  const handleAgentChange = (e) => {
    const agentId = e.target.value;
    setSelectedAgent(agentId);
    setSelectedProtocol(''); // Reset protocol when agent changes
  };

  const handleProtocolChange = (e) => {
    setSelectedProtocol(e.target.value);
  };

  const selectedAgentObj = agents.find(agent => agent.id === selectedAgent);

  return (
    <aside className="w-64 bg-gray-100 border-r p-4 space-y-4">
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-200'
            }`
          }
        >
          Chat
        </NavLink>
        <NavLink
          to="/protocol"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-200'
            }`
          }
        >
          Protocol
        </NavLink>
      </nav>

      {isChatPage && (
        <div className="space-y-4">
          <div>
            <label htmlFor="agent-select" className="block text-sm font-medium text-gray-700">
              Agent
            </label>
            <select
              id="agent-select"
              value={selectedAgent}
              onChange={handleAgentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select an agent</option>
              {agents.map(agent => (
                <option key={agent.id} value={agent.id}>{agent.name}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
      )}

      {isProtocolPage && (
        <div className="space-y-4">
          <div>
            <label htmlFor="agent-select" className="block text-sm font-medium text-gray-700">
              Agent
            </label>
            <select
              id="agent-select"
              value={selectedAgent}
              onChange={handleAgentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select an agent</option>
              {agents.map(agent => (
                <option key={agent.id} value={agent.id}>{agent.name}</option>
              ))}
            </select>
          </div>

          {selectedAgent && (
            <div>
              <label htmlFor="protocol-select" className="block text-sm font-medium text-gray-700">
                Protocol
              </label>
              <select
                id="protocol-select"
                value={selectedProtocol}
                onChange={handleProtocolChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a protocol</option>
                {selectedAgentObj?.protocols.map(protocol => (
                  <option key={protocol.id} value={protocol.id}>{protocol.name}</option>
                ))}
              </select>
            </div>
          )}

          <button
            onClick={() => localStorage.clear()}
            className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Clear Cache
          </button>
        </div>
      )}
    </aside>
  );
}