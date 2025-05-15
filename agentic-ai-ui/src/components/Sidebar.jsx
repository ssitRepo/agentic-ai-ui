import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaSyncAlt,
  FaTrashAlt,
  FaUser,
  FaCogs,
  FaChevronDown,
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
  const [agentsOpen, setAgentsOpen] = useState(false);
  const [protocolsOpen, setProtocolsOpen] = useState(false);

  useEffect(() => {
    setAgents(mockData.agents || []);
  }, []);

  const handleAgentChange = (agentId) => {
    setSelectedAgent(agentId);
    setSelectedProtocol(""); // Reset protocol when agent changes
    setAgentsOpen(false);
  };

  const handleProtocolChange = (protocolId) => {
    setSelectedProtocol(protocolId);
    setProtocolsOpen(false);
  };

  const selectedAgentObj = agents.find((agent) => agent.id === selectedAgent);

  return (
    <aside className="w-64 bg-[var(--bg)] border-r p-4 pt-20">
      <div className="h-full px-2 pb-4 overflow-y-auto">
        <ul className="space-y-4 text-sm font-medium text-[var(--text)]">
          {(isChatPage || isProtocolPage) && (
            <li className="space-y-4">

              {/* Agent Dropdown */}
              <div>
                <div
                  onClick={() => setAgentsOpen(!agentsOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setAgentsOpen(!agentsOpen);
                    }
                  }}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--bg)] border-2 border-[var(--primary)]/50 hover:border-[var(--primary)] transition-all cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  <span>
                    {selectedAgent
                      ? agents.find((a) => a.id === selectedAgent)?.name
                      : "Choose an agent"}
                  </span>
                  <FaChevronDown
                    className={`w-4 h-4 transition-transform ${
                      agentsOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {agentsOpen && (
                  <ul className="mt-2 rounded-lg border-2 border-[var(--primary)]/40 bg-[var(--bg)] max-h-40 overflow-y-auto">
                    {agents.map((agent) => (
                      <li
                        key={agent.id}
                        onClick={() => handleAgentChange(agent.id)}
                        className={`flex items-center px-3 py-2 hover:bg-[var(--primary)]/20 transition cursor-pointer ${
                          selectedAgent === agent.id
                            ? "bg-[var(--primary)]/10"
                            : ""
                        }`}
                        role="option"
                        tabIndex={0}
                      >
                        <FaUser className="w-4 h-4 mr-2" />
                        {agent.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Protocol Dropdown */}
              {isProtocolPage && selectedAgent && (
                <div>
                  <div
                    onClick={() => setProtocolsOpen(!protocolsOpen)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setProtocolsOpen(!protocolsOpen);
                      }
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--bg)] border-2 border-[var(--primary)]/50 hover:border-[var(--primary)] transition-all cursor-pointer"
                    role="button"
                    tabIndex={0}
                  >
                    <span>
                      {selectedProtocol
                        ? selectedAgentObj?.protocols.find(
                            (p) => p.id === selectedProtocol
                          )?.name
                        : "Choose a perspective"}
                    </span>
                    <FaChevronDown
                      className={`w-4 h-4 transition-transform ${
                        protocolsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {protocolsOpen && (
                    <ul className="mt-2 rounded-lg border-2 border-[var(--primary)]/40 bg-[var(--bg)] max-h-40 overflow-y-auto">
                      {selectedAgentObj?.protocols.map((protocol) => (
                        <li
                          key={protocol.id}
                          onClick={() => handleProtocolChange(protocol.id)}
                          className={`flex items-center px-3 py-2 hover:bg-[var(--primary)]/20 transition cursor-pointer ${
                            selectedProtocol === protocol.id
                              ? "bg-[var(--primary)]/10"
                              : ""
                          }`}
                          role="option"
                          tabIndex={0}
                        >
                          <FaCogs className="w-4 h-4 mr-2" />
                          {protocol.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Refresh Button (for Chat page) */}
              {isChatPage && (
                <button
                  onClick={() => window.location.reload()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition"
                >
                  <FaSyncAlt className="text-sm" />
                  <span className="text-sm">Refresh Chat</span>
                </button>
              )}

              {/* Clear Cache Button (for Protocol page) */}
              {isProtocolPage && (
                <button
                  onClick={() => localStorage.clear()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[var(--primary)] text-[var(--text)] hover:bg-[var(--primary)]/10 transition"
                >
                  <FaTrashAlt className="text-sm" />
                  <span className="text-sm">Clear Cache</span>
                </button>
              )}
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
}
