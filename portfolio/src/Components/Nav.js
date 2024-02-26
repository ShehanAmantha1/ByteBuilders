// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navStyle = {
        background: '#333',
        padding: '30px',
        //marginBottom: '20px',
        display: 'flex',
        justifyContent: 'flex-end', // Align items to the right
        width: '96.2%', // Make the navigation bar fit the page
        
      };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 50px',
  };

  return (
    <nav style={navStyle}>
      <img src="icons8-ranking-30.png" alt="Logo" style={{ marginRight: 'auto' }} />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline' }}>
          <Link to="/home" style={linkStyle}>Home</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/imageGallery" style={linkStyle}>My Works</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
