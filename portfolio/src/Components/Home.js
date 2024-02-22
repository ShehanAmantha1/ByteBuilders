// HomePage.js
import React from 'react';
import "C:/Users/janit/source/repos/ByteBuilders/ByteBuilders/portfolio/src/StyleSheet.css"
function HomePage() {
  return (
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
        <img src="/426495649_1790483054760524_9089709248450113505_n.jpg" alt="Description of the content in the image" width="700" height="700" />
        {/* Social media icons */}
        
      </div>
    </div>
  );
}

export default HomePage;

