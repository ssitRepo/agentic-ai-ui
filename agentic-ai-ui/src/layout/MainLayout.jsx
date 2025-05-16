import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import TopNavWidget from "../components/TopNavWidget";

export default function MainLayout() {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState("");
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col h-screen">
      <TopNavWidget />
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
          selectedProtocol={selectedProtocol}
          setSelectedProtocol={setSelectedProtocol}
        />
        <main
          className="flex-1 overflow-auto p-4"
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
