import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaSyncAlt,
  FaCogs,
  FaChevronDown,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import mockData from "../data/protocolData.json";

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  selectedAgent,
  setSelectedAgent,
  selectedProtocol,
  setSelectedProtocol,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const isChatPage = location.pathname === "/";
  const isProtocolPage = location.pathname === "/protocol";

  const [agents, setAgents] = useState([]);
  const [agentsOpen, setAgentsOpen] = useState(false);
  const [protocolsOpen, setProtocolsOpen] = useState(false);

  useEffect(() => {
    setAgents(mockData.agents || []);
  }, []);

  const handleProtocolChange = (protocolId) => {
    setSelectedProtocol(protocolId);
    setProtocolsOpen(false);
  };

  const selectedAgentObj = agents.find((agent) => agent.id === selectedAgent);

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-50 transition-all duration-500 ease-in-out bg-[var(--bg)] border-r pt-5
    ${isSidebarOpen ? "w-64 px-4" : "w-0 px-0"}
    sm:hidden overflow-hidden`}
    >
      {isSidebarOpen && (
        <div className="h-full px-2 pb-4 overflow-y-auto relative">
          {/* Close Button */}
          <div className="absolute top-1 right-4 z-20">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition"
              aria-label="Close Sidebar"
            >
              <FaTimes className="w-5 h-5 text-[var(--text)]" />
            </button>
          </div>

          {/* Sidebar Content - padded to avoid overlap */}
          <div className="pt-12">
            <ul className="space-y-4 text-sm font-medium text-[var(--text)]">
              {/* Mobile Page Navigation */}
              <li className="space-y-2">
                <button
                  onClick={() => navigate("/")}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    isChatPage
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  <FaUser className="w-4 h-4" />
                  <span>Chat</span>
                </button>

                <button
                  onClick={() => navigate("/protocol")}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    isProtocolPage
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  <FaCogs className="w-4 h-4" />
                  <span>Perspective</span>
                </button>
              </li>

              {/* Agent and Protocol Selectors */}
              {(isChatPage || isProtocolPage) && (
                <li className="space-y-4">
                  {/* Agent Dropdown */}
                  {isChatPage && (
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
                              onClick={() => {
                                setSelectedAgent(agent.id);
                                setAgentsOpen(false);
                              }}
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
                  )}

                  {/* Protocol Dropdown */}
                  {isProtocolPage && (
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
                            ? mockData.protocols.find(
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
                          {mockData.protocols.map((protocol) => (
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
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
}
