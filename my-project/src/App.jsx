import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Sidebar/Home";
import About from "./components/Sidebar/About";
import Service from "./components/Sidebar/Service";
import Contact from "./components/Sidebar/Contact";

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

  // Define routes where the sidebar should be visible
  const routesWithSidebar = ['/', '/about', '/service', '/contact'];

  // Check if the current location path is in the list of routes with sidebar
  const showSidebar = routesWithSidebar.includes(location.pathname);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div style={{ display: "flex", textAlign:"center" }}>
      {/* Hamburger Button */}
      <button 
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 1000,
          backgroundColor: "#333",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer"
        }}
      >
        ☰
      </button>

      {showSidebar && isSidebarOpen && <Sidebar />} 

      {/* Adjust content width when sidebar is present */}
      <div style={{ marginLeft: showSidebar && isSidebarOpen ? "200px" : "0", padding: "1rem", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
