// src/components/Sidebar/Home.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    padding: '2rem',
    backgroundColor: 'pink',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555',
    maxWidth: '600px',
    lineHeight: '1.6',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const socialMediaContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  };

  const socialMediaLinkStyle = {
    color: '#333',
    fontSize: '2rem',
    transition: 'color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome To </h1>
      <h2 style={headingStyle}>AURA EMANATING TEKNOLOGY PVT</h2>

      <p style={paragraphStyle}>
        Discover the amazing features we offer. Enjoy seamless navigation with our sidebar, and explore different sections to learn more about our services and offerings.
      </p>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => alert('You clicked the button!')}
      >
        Get Started
      </button>

      {/* Social Media Links */}
      <div style={socialMediaContainerStyle}>
        <a
          href="https://www.facebook.com/yourcompany" // Replace with your actual Facebook link
          style={socialMediaLinkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com/yourcompany" // Replace with your actual Twitter link
          style={socialMediaLinkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/yourcompany" // Replace with your actual Instagram link
          style={socialMediaLinkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/yourcompany" // Replace with your actual LinkedIn link
          style={socialMediaLinkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Home;
