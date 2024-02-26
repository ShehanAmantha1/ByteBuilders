// HomePage.js
import React from 'react';
import "./StyleSheet.css";
import About from './About.js';

const nameStyle = {
  fontFamily: 'Georgia, serif', // Change the font family as needed
  fontSize: '24px', // Change the font size as needed
  fontWeight: 'bold', // Add other font styles as needed
};

const titleStyle = {
  fontFamily: 'Georgia, serif', // Change the font family as needed
  fontSize: '76px', // Change the font size as needed
  fontStyle: 'italic', // Add other font styles as needed
  marginTop: '5px'
};

const currentWorkStyle = {
  fontFamily: 'Georgia, serif', // Change the font family as needed
  fontSize: '18px', // Change the font size as needed
  color: '#555', // Change the text color as needed
  marginTop: '10px'
};

function HomePage() {
  return (
    
    <div>
      <div className="homepage-container">
        <div className="text-container">
        <h2 style={nameStyle}>Hello I'm Thulshika Nawod</h2>
      <h1 style={titleStyle}>Photographer</h1>
      <h2 style={currentWorkStyle}>Currently working for Kapture Studio</h2>
          <div className="social-media-icons">
            <div>
            <div className="social-media-icon" data-name="Thulshika Nawod">
              <a href="https://www.facebook.com/Thulshika?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <span>Facebook</span>

                <img src="/icons8-facebook-50.png" alt="Facebook icon" />
              </a>
            </div>
            </div>
<div>
            <div className="social-media-icon" data-name="thul_99_">
              <a href="https://www.instagram.com/thul_99_?igsh=dzR0Nm9mcTZyOWZm" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>

                <img src="/icons8-instagram-50.png" alt="Instagram icon" />
              </a>
            </div>
            </div>
<div>
            <div className="social-media-icon" data-name="photo_gallery__thulshika">
              <a href="https://www.tiktok.com/@photo_gallery__thulshika?_t=8k6MKbfwMlx&_r=1" target="_blank" rel="noopener noreferrer">
              <span>Tiktok</span>

                <img src="/icons8-tiktok-50.png" alt="Tiktok icon" />
              </a>

            </div>
            <div >
            <img src="/Screenshot 2024-02-24 181451.png" alt="Tiktok icon" />

            </div>
            <div>
            
            </div>

            </div>

          </div>
          

        </div>

        <div className="image-container">
          {/* Image */}
          <img src="/WhatsApp Image 2024-02-24 at 11.41.05_24a44ceb.jpg" alt="Description of the content in the image" width="600" height="600" />
        </div>
      </div>

      {/* Add the About component below the homepage content */}
      <br />
      <div>
        <About />

      </div>
      <div>

      </div>
    </div>
    
    
  );
  
}

export default HomePage;
