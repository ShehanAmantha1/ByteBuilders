// HomePage.js
import React from 'react';

function HomePage() {
  const navStyle = {
    backgroundColor: 'black',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-start', // Align links to the left
    alignItems: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '10px',
    cursor: 'pointer',
  };

  const hoverStyle = {
    color: 'lightblue', // Change text color on hover
  };

  const handleMouseOver = (e) => {
    e.target.style = hoverStyle;
  };

  const handleMouseOut = (e) => {
    e.target.style = linkStyle;
  };

  const handleFocus = (e) => {
    e.target.style = hoverStyle;
  };

  const handleBlur = (e) => {
    e.target.style = linkStyle;
  };

  return (
    <div>
      <nav style={navStyle}>
        <div>
          <a
            href="/"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            Home
          </a>
          <a
            href="/about"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            About
          </a>
          
          <a
            href="/contact"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            Contact
          </a>
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
