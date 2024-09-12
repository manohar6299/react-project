// src/components/Sidebar/About.jsx
import React from 'react';

const About = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    height: '100vh', // Full viewport height
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#555',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    color: '#666',
    maxWidth: '700px',
  };

  const missionStyle = {
    fontSize: '1.3rem',
    marginBottom: '1.5rem',
    color: '#007bff',
    fontStyle: 'italic',
    maxWidth: '700px',
  };
  const headingStyle1={
    color:'blue'
  }
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About AURA </h1>
      <h1  style={headingStyle1}> AURA EMANATING TEKNOLOGY PVT</h1>

      <h2 style={subheadingStyle}>Innovating for a Brighter Tomorrow</h2>
      <p style={paragraphStyle}>
        At AURA Emanating Teknology Pvt Ltd, we are dedicated to pioneering cutting-edge technological solutions that empower businesses and individuals alike. Our team of experts is committed to driving innovation in every project we undertake, with a focus on enhancing user experiences, optimizing performance, and creating sustainable value.
      </p>
      <p style={missionStyle}>
        Our mission is to harness the power of technology to create a more connected and efficient world.
      </p>
      <p style={paragraphStyle}>
        Founded with a vision to be at the forefront of technological advancement, Aura Emanating Teknology Pvt Ltd has consistently pushed the boundaries of what is possible. We believe in a future where technology and human potential go hand in hand, creating new opportunities for growth and prosperity.
      </p>
    </div>
  );
};

export default About;
