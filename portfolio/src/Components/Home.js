// HomePage.js
import React from 'react';
import "./StyleSheet.css";
import About from './About.js';

function HomePage() {
  return (
    <div>
      <div className="homepage-container">
        <div className="text-container">
          <h2>Hello I'm Thulshika Nawod</h2>
          <h1>Photographer</h1>
          <h2>Currently working for Kapture Studio</h2>
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
            <div>
            <div>
            <img src="/Screenshot 2024-02-24 181451.png" alt="Tiktok icon" />

            </div>

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
      <br />
      <div>
        <About />
      </div>
    </div>
  );
}

export default HomePage;
