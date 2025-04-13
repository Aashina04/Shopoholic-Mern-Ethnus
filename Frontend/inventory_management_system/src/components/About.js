import React from 'react';
import Footer from './Footer';

const About = () => {
  const containerStyle = {
    padding: '40px',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#f9f9f9',
    color: '#333',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '50px auto',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: '600',
    color: '#4a90e2',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: '#555',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.2rem',
    color: '#555',
  };

  const listItemStyle = {
    marginBottom: '10px',
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease',
  };

  const listItemHoverStyle = {
    transform: 'scale(1.02)',
  };

  return (
    <>

    <div style={containerStyle}>
      <h1 style={headingStyle}>About Inventory Management System</h1>
      <p style={paragraphStyle}>
        Welcome to the Inventory Management System! This application is designed to help businesses
        efficiently manage their inventory, track stock levels, and streamline operations.
      </p>
      <h2 style={{ ...headingStyle, fontSize: '2rem', marginBottom: '15px', color: '#333' }}>Features</h2>
      <ul style={listStyle}>
        <li
          style={listItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          CRUD operations for inventory items
        </li>
        <li
          style={listItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Real-time stock tracking
        </li>
        <li
          style={listItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          User-friendly interface
        </li>
        <li
          style={listItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Secure and scalable architecture
        </li>
      </ul>
      <p style={paragraphStyle}>
        This project is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to
        deliver a robust and modern web application.
      </p>
    </div>
    </>
  );
};

export default About;