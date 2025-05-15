import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import TopNavWidget from "../components/TopNavWidget";

export default function MainLayout() {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState("");
  const [theme, setTheme] = useState("light"); // Add state for theme

  // Set the theme on the document root (html element)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col h-screen">
      <TopNavWidget />
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
          selectedProtocol={selectedProtocol}
          setSelectedProtocol={setSelectedProtocol}
        />
        <main
          className="flex-1 overflow-auto p-4 bg-gray-50"
          style={{
            backgroundColor: "var(--chat-window-bg)", // Use CSS variable directly
          }}
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
