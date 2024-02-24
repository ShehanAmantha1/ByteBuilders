// HomePage.js
import React from 'react';
import "./StyleSheet.css";
import About from './About.js';

function HomePage() {
  return (
    <div>
      <div className="homepage-container">
        <div className="text-container">
          <h2>Hello I'm Thanushka Navod</h2>
          <h1>Photographer</h1>
          <h2>Currently working for Kapture Studio</h2>
          <div className="social-media-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="/icons8-facebook-50.png" alt="Facebook icon" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/icons8-instagram-50.png" alt="Instagram icon" /></a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
        <div className="image-container">
          {/* Image */}
          <img src="/WhatsApp Image 2024-02-24 at 11.41.05_24a44ceb.jpg" alt="Description of the content in the image" width="600" height="600" />
          {/* Social media icons */}
        </div>
      </div>

      {/* Add the About component below the homepage content */}
      <br/>
      <br/>
      <div>
        <About />
      </div>
    </div>
  );
}

export default HomePage;
