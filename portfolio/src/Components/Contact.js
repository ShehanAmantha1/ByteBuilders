import React from 'react';

const Contact = () => {
    const pageStyle = {
        position: 'relative', // Set the position to relative for the parent div
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120vh', // Full viewport height
        backgroundImage: 'url("./stefan-kunze--6-uqd2hMCg-unsplash.jpg")', // Specify the path to your background image
        backgroundSize: 'cover', // Cover the entire viewport
        backgroundPosition: 'center', // Center the background image
    };
    
    

    const rectangleStyle = {
        display: 'flex',
        width: '1000px',
        height: '500px',
        background: '#000',
        color: '#fff',
        borderRadius: '34px 34px 34px 34px', // Top left and bottom left corners are rounded
        margin: 'auto', // Center the rectangle horizontally
    };
    

    const profileCircleStyle = {
        position: 'absolute', // Set the position to absolute for the circle
        top: '0', // Position the circle at the top of the rectangle
        left: '48%', // Position the circle horizontally in the middle
        transform: 'translate(-50%, -50%)', // Center the circle horizontally
        width: '150px',
        height: '150px',
        borderRadius: '50%', // Make the circle shape
        backgroundImage: 'url("./WhatsApp Image 2024-02-24 at 11.41.06 AM.jpeg")', // Specify the path to your image
        backgroundSize: 'cover', // Cover the entire circle
        backgroundPosition: 'center', // Center the image
        padding: '20',
        margin:'20px'
    };
    

    const textUnderCircleStyle = {
        textAlign: 'center', // Center the text horizontally
        marginTop: '150px', // Adjust the top margin to position the text under the circle
        color: '#000',
    };
    const textUnderCircleStyle1 = {
        textAlign: 'center', // Center the text horizontally
        marginTop: '30px', // Adjust the top margin to position the text under the circle
        color: '#000',
    };

    const leftSectionStyle = {
        position: 'relative', // Set the position to relative for the parent div
        flex: '1',
        backgroundColor: '#ddd', // Gray background for the left section
        borderRadius: '30px 30px 30px 30px', // Top left and bottom left corners are rounded
        color: '#000',
        //padding: '20px',
    };

    const contactInfoStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    const socialMediaLinksStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    return (
        <div style={pageStyle}>
            <div style={rectangleStyle}>
                <div style={leftSectionStyle}>
                    <div style={profileCircleStyle}></div>
                
                    {/* Content for the left section */}
                    <h2 style={textUnderCircleStyle}>Contacts</h2>
                    <p style={textUnderCircleStyle1}>"Communication is at the heart of every successful relationship, and we're here to listen.<br/> Whether you have questions, feedback, or just want to say hello, I'am always ready to connect.<br/> Reach out to us today and let's start a conversation that can lead to great things."</p>
                  
                    <div style={contactInfoStyle}>
                        <p>Contact Information:</p>
                        <p>Email: example@example.com</p>
                        <p>Phone: +94 71 347 9447</p>
                    </div>
                    <div style={socialMediaLinksStyle}>
                    <div className="social-media-icon" data-name="Thulshika Nawod">
              <a href="https://www.facebook.com/Thulshika?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <span>Facebook</span>

                <img src="/icons8-facebook-50.png" alt="Facebook icon" />
              </a>
            </div>
            <div className="social-media-icon" data-name="thul_99_">
              <a href="https://www.instagram.com/thul_99_?igsh=dzR0Nm9mcTZyOWZm" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>

                <img src="/icons8-instagram-50.png" alt="Instagram icon" />
              </a>
            </div>
            <div className="social-media-icon" data-name="photo_gallery__thulshika">
              <a href="https://www.tiktok.com/@photo_gallery__thulshika?_t=8k6MKbfwMlx&_r=1" target="_blank" rel="noopener noreferrer">
              <span>Tiktok</span>

                <img src="/icons8-tiktok-50.png" alt="Tiktok icon" />
              </a>

            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
