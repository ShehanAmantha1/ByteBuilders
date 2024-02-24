// About.js
import React from 'react';

const About = () => {
    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
    };

    const rectangleStyle = {
        display: 'flex',
        width: '1400px',
        height: '700px',
        background: '#000',
        color: '#fff',
        borderRadius: '30px 0 30px 0', // Top right and bottom left corners are rounded
    };

    const leftSectionStyle = {
        flex: '1',
        padding: '20px',
        backgroundColor: '#ddd', // Gray background for the left section
        borderRadius: '30px 0 0 0', // Top right and bottom left corners are rounded
        color: '#000'

    };

    const rightSectionStyle = {
        flex: '1',
        padding: '20px',
    };

    
    const rightImageStyle = {
        width: '600px',
        maxHeight: '100%',
        borderRadius: '10px', // Optional: Add border radius to the image
        textAlign: 'center', // Center the image horizontally
        margin: 'auto', // Center the image vertically
        padding: '50 10 10 10'
    };
    return (
        <div style={pageStyle}>
            <div style={rectangleStyle}>
                <div style={leftSectionStyle}>
                    {/* Content for the left section */}
                    <h2>Meet Thulshika</h2>
                    <p>Greetings from the lens of Thulshika Nawod! I'm a local small business photographer with an insatiable love for nature and a knack for capturing those fleeting, magical moments that make life truly extraordinary. My lens is my paintbrush, and the world around me is my canvas. Whether it's the gentle sway of a blade of grass, the ethereal glow of a sunrise, or the quiet intimacy of a shared glance, I believe every moment is worth preserving. Through my photography, I aim to not just capture images, but to evoke emotions, tell stories, and create memories that will last a lifetime. So, if you're looking for a photographer who's as passionate about nature and photographic moments as you are, look no further. I'm here to bring your vision to life, one click at a time.</p>
                </div>
                <div style={rightSectionStyle}>
                <img src="./WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Additional Info" style={rightImageStyle} />

                </div>
            </div>
        </div>
    );
};

export default About;
