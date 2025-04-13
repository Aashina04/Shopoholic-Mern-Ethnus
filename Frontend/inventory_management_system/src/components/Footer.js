import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor:"#E8F9FF",
    // color: '#ecf0f1',
    color:"black",
    padding: '40px 20px',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '0.9rem',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const sectionStyle = {
    flex: '1 1 300px',
    margin: '10px',
  };

  const headingStyle = {
    fontSize: '1.2rem',
    marginBottom: '15px',
    fontWeight: 'bold',
    // color: '#f39c12',
    color:"dark grey"
  };

  const linkStyle = {
    // color: '#ecf0f1',
    color:"black",
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    fontSize: '0.9rem',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  const socialStyle = {
    display: 'flex',
    marginTop: '15px',
  };

  const iconStyle = {
    margin: '0 10px',
    // color: '#f39c12',
    color:"black",
    fontSize: '1.5rem',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* About Section */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>About Us</h3>
          <p>
            The Inventory Management System is designed to help businesses efficiently manage their
            stock, track inventory, and streamline operations.
          </p>
        </div>

        {/* Navigation Section */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          <a href="/about" style={linkStyle}>
            About
          </a>
          <a href="/contact" style={linkStyle}>
            Contact
          </a>
          <a href="/privacy" style={linkStyle}>
            Privacy Policy
          </a>
          <a href="/terms" style={linkStyle}>
            Terms of Service
          </a>
        </div>

        {/* Contact Section */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p>Email: support@inventorysystem.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address:VIT Bhopal University</p>
        </div>

        {/* Social Media Section */}
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          <div style={socialStyle}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} Inventory Management System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;