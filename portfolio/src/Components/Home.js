// HomePage.js
import React from 'react';

function HomePage() {
  const navStyle = {
    backgroundColor: 'black',
    padding: '30px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '10px',
    cursor: 'pointer',
    margin:'20px'
  };

  const hoverStyle = {
    textDecoration: 'non',
  };

  return (
    <div>
      <nav style={navStyle}>
        {/* Removed the h1 for the app name */}
        <div>
          <a href="/" style={linkStyle} onMouseOver={(e) => e.target.style = hoverStyle} onMouseOut={(e) => e.target.style = linkStyle}>Home</a>
          <a href="/about" style={linkStyle} onMouseOver={(e) => e.target.style = hoverStyle} onMouseOut={(e) => e.target.style = linkStyle}>About</a>
          <a href="/contact" style={linkStyle} onMouseOver={(e) => e.target.style = hoverStyle} onMouseOut={(e) => e.target.style = linkStyle}>Contact</a>
        </div>
      </nav>

      <div>
        <h1>Welcome to the Home Page!</h1>
        {/* Add your home page content here */}
      </div>
    </div>
  );
}

export default HomePage;
