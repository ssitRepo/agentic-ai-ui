import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState("");

  console.log(
    "MainLayout rendered, selectedAgent:",
    selectedAgent,
    "selectedProtocol:",
    selectedProtocol
  );

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
          selectedProtocol={selectedProtocol}
          setSelectedProtocol={setSelectedProtocol}
        />

        <main className="flex-1 overflow-auto p-4 bg-gray-50">
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
