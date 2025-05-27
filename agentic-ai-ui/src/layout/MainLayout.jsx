import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import TopNavWidget from "../components/TopNavWidget";
import mockData from "../data/protocolData.json";
import MainSelectorDropdown from "../components/MainSelectorDropdown";

export default function MainLayout() {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState("");
  const [theme, setTheme] = useState("sigmasoft");

  // Set the sidebar to be closed by default
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set initial state to false

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col h-screen">
      <TopNavWidget />
      <MainSelectorDropdown
        agents={mockData.agents}
        protocols={mockData.protocols} // assuming you separate this from agents now
        selectedAgent={selectedAgent}
        setSelectedAgent={setSelectedAgent}
        selectedProtocol={selectedProtocol}
        setSelectedProtocol={setSelectedProtocol}
      />
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen} // ✅ Add this line
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
          selectedProtocol={selectedProtocol}
          setSelectedProtocol={setSelectedProtocol}
        />
        <main
          className="flex-1 overflow-hidden p-4 pt-16" // pt-16 = 4rem = 64px
          style={{ backgroundColor: "var(--chat-window-bg)" }}
        >
          <Outlet
            context={{
              selectedAgent,
              setSelectedAgent,
              selectedProtocol,
              setSelectedProtocol,
            }}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}
