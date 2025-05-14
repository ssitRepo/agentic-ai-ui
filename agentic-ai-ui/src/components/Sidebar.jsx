import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaComment,
  FaBook,
  FaSyncAlt,
  FaTrashAlt,
  FaBars,
  FaTachometerAlt,
  FaTh,
  FaInbox,
  FaUsers,
  FaBox,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import mockData from "../data/protocolData.json";

export default function Sidebar({
  selectedAgent,
  setSelectedAgent,
  selectedProtocol,
  setSelectedProtocol,
}) {
  const location = useLocation();
  const isChatPage = location.pathname === "/";
  const isProtocolPage = location.pathname === "/protocol";
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    console.log("mockData in Sidebar:", mockData);
    setAgents(mockData.agents || []);
  }, []);

  const handleAgentChange = (e) => {
    const agentId = e.target.value;
    setSelectedAgent(agentId);
    setSelectedProtocol(""); // Reset protocol when agent changes
  };

  const handleProtocolChange = (e) => {
    setSelectedProtocol(e.target.value);
  };

  const selectedAgentObj = agents.find((agent) => agent.id === selectedAgent);

  return (
    <aside className="w-64 bg-gray-100 border-r p-4 space-y-4">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-dark-bg">
        <ul className="space-y-2 font-medium">


          {/* Agent and Protocol Selection */}
          {isChatPage && (
            <li className="pt-4 space-y-4">
              <div>
                <label
                  htmlFor="agent-select"
                  className="block text-sm font-medium text-text-light/80 mb-3"
                >
                  Select Agent
                </label>
                <select
                  id="agent-select"
                  value={selectedAgent}
                  onChange={handleAgentChange}
                  className="block w-full rounded-xl border-gray-600/50 bg-dark-bg text-text-light/90 py-3 px-4 focus:border-sigmasoft-purple focus:ring-sigmasoft-purple focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-300"
                >
                  <option value="">Choose an agent</option>
                  {agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center w-full px-4 py-3 bg-atomic-red text-text-light rounded-xl hover:bg-sigmasoft-orange transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaSyncAlt className="mr-3 text-base" />
                Refresh
              </button>
            </li>
          )}

          {isProtocolPage && (
            <li className="pt-4 space-y-4">
              <div>
                <label
                  htmlFor="agent-select"
                  className="block text-sm font-medium text-text-light/80 mb-3"
                >
                  Select Agent
                </label>
                <select
                  id="agent-select"
                  value={selectedAgent}
                  onChange={handleAgentChange}
                  className="block w-full rounded-xl border-gray-600/50 bg-dark-bg text-text-light/90 py-3 px-4 focus:border-sigmasoft-purple focus:ring-sigmasoft-purple focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-300"
                >
                  <option value="">Choose an agent</option>
                  {agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedAgent && (
                <div>
                  <label
                    htmlFor="protocol-select"
                    className="block text-sm font-medium text-text-light/80 mb-3"
                  >
                    Select Protocol
                  </label>
                  <select
                    id="protocol-select"
                    value={selectedProtocol}
                    onChange={handleProtocolChange}
                    className="block w-full rounded-xl border-gray-600/50 bg-dark-bg text-text-light/90 py-3 px-4 focus:border-sigmasoft-purple focus:ring-sigmasoft-purple focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Choose a protocol</option>
                    {selectedAgentObj?.protocols.map((protocol) => (
                      <option key={protocol.id} value={protocol.id}>
                        {protocol.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                onClick={() => localStorage.clear()}
                className="flex items-center justify-center w-full px-4 py-3 bg-atomic-red text-text-light rounded-xl hover:bg-sigmasoft-orange transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaTrashAlt className="mr-3 text-base" />
                Clear Cache
              </button>
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
}
