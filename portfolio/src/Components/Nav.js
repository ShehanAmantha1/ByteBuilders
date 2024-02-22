// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navStyle = {
        background: '#333',
        padding: '30px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'flex-end', // Align items to the right
      };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline' }}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
