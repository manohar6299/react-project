// src/components/Sidebar/Contact.jsx
import React from 'react';

const Contact = () => {
  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    color: '#333',
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  };

  const sectionStyle = {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const corporateOfficeStyle = {
    border: '2px solid #007BFF', // Blue border for distinction
    padding: '1.5rem',
    backgroundColor: '#e9f5ff', // Light blue background
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const sectionHeaderStyle = {
    fontSize: '1.75rem',
    marginBottom: '1rem',
    color: '#444',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#666',
  };

  const contactDetailStyle = {
    marginBottom: '0.5rem',
  };

  const mapContainerStyle = {
    marginTop: '2rem',
    width: '100%',
    height: '400px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Contact Us</h1>

      {/* Corporate Office Box */}
      <div style={corporateOfficeStyle}>
        <h2 style={sectionHeaderStyle}>Corporate Office, New Delhi</h2>
        <p style={paragraphStyle}>
          Research & Development Department<br />
          3rd Floor, 306, Plot No. 11, LSC Pocket-B,<br />
          Durga Complex, Mayur Vihar Phase II,<br />
          Delhi - 110 091 (INDIA)
        </p>
        <p style={contactDetailStyle}>Tel: +91-11-22722301, 43052001</p>
        <p style={contactDetailStyle}>
          Emails: 
          <br />azad@aetpl.org, deepika@aetpl.org, aetpl@aetpl.org
          <br />oper_management@aetpl.org, techsupport@aetpl.org
        </p>
        <p style={contactDetailStyle}>OPEN: Closes 6PM</p>
      </div>

      {/* Branch Office Section */}
      <div style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Branch Office - Delhi</h2>
        <p style={paragraphStyle}>
          Aura Emanating Teknology Pvt Ltd.,<br />
          Pocket B, 306, Third Floor, Plot No: 11,<br />
          Durga Complex LSC, Mayur Vihar Phase I,<br />
          New Delhi, Delhi 110091
        </p>
      </div>

      {/* Embedded Google Map */}
      <div style={mapContainerStyle}>
        <iframe
          title="Company Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6224521790834!2d77.31067477597752!3d28.605276682405946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4cbf0aa9b7b%3A0x9e098c60b93c5d6e!2sDurga%20Complex%2C%20Mayur%20Vihar%20Phase%201%2C%20New%20Delhi%2C%20Delhi%20110091%2C%20India!5e0!3m2!1sen!2sus!4v1694515865937!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
