// src/components/Sidebar/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  const sidebarStyle = {
    width: '200px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem',
    gap: '1rem',
    transition: 'transform 0.3s ease', // Smooth transition for showing/hiding
  };

  const sidebarItemStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    transition: 'background-color 0.3s ease',
  };

  const sidebarItemHoverStyle = {
    backgroundColor: '#555',
  };

  return (
    <div style={sidebarStyle}>
      <a
        href="/"
        style={sidebarItemStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = sidebarItemHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
      >
        Home
      </a>
      <a
        href="/about"
        style={sidebarItemStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = sidebarItemHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
      >
        About
      </a>
      <a
        href="/service"
        style={sidebarItemStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = sidebarItemHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
      >
        Service
      </a>
      <a
        href="/contact"
        style={sidebarItemStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = sidebarItemHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
      >
        Contact
      </a>
    </div>
  );
};

export default Sidebar;
