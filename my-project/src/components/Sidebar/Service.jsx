// src/components/Sidebar/Service.jsx
import React from 'react';

const Service = () => {
  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
  };

  const boxHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '0.5rem',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#666',
  };

  // List of services
  const services = [
    { title: 'Web Development', description: 'Creating stunning and responsive websites tailored to your needs.' },
    { title: 'Linux Service', description: 'Expert support and services for Linux-based systems and servers.' },
    { title: 'PostgreSQL Service', description: 'Database management, optimization, and support for PostgreSQL.' },
    { title: 'Firewall Service', description: 'Network security solutions with our comprehensive firewall services.' },
    { title: 'Weather Service', description: 'Reliable weather data and forecasting services for various applications.' },
    { title: 'Server Service', description: 'Comprehensive server management, maintenance, and optimization services.' },
    { title: 'Hardware Service', description: 'Reliable hardware diagnostics, repair, and upgrade services.' },
    { title: 'Meteorological Service', description: 'Reliable hardware diagnostics, repair, and upgrade services.' },

  ];

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>My Services</h1>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div
            key={index}
            style={boxStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = boxHoverStyle.transform;
              e.currentTarget.style.boxShadow = boxHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <h3 style={headingStyle}>{service.title}</h3>
            <p style={paragraphStyle}>{service.description}</p>
            <p style={paragraphStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
