// About.js
import React from 'react';

const About = () => {
    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        background: '#000', // Background color for the entire page
        border: '40px solid #000', // Border color for the entire page
        backgroundImage: 'url("./grungy-white-background-natural-cement-stone-old-texture-as-retro-pattern-wall-conceptual-wall-banner-grunge-material-construction.jpg")', // Specify the path to your background image
        backgroundSize: '1200px', // Adjust the background image size (cover, contain, or custom size)
        backgroundPosition: 'center', // Center the background image
    };
    

    const rectangleStyle = {
        display: 'flex',
        width: '1200px',
        height: '500px',
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
        <div>

        <div style={pageStyle}>

            <div style={rectangleStyle}>
            <div style={leftSectionStyle}>
    {/* Content for the left section */}
    <h1 style={{ fontFamily: 'PopArt' }}>Hey I'm Thulshika</h1>
    <br></br>
    <p style={{ fontFamily: 'Arial' ,fontSize:'18px'}}>
        Greetings from the lens of Thulshika Nawod! I'm a local small business photographer with an insatiable love for nature and a knack for capturing those fleeting, magical moments that make life truly extraordinary. My lens is my paintbrush, and the world around me is my canvas.
    </p>
    <p style={{ fontFamily: 'Arial' ,fontSize:'18px'}}>
        Whether it's the gentle sway of a blade of grass, the ethereal glow of a sunrise, or the quiet intimacy of a shared glance, I believe every moment is worth preserving. Through my photography, I aim to not just capture images, but to evoke emotions, tell stories, and create memories that will last a lifetime. So, if you're looking for a photographer who's as passionate about nature and photographic moments as you are, look no further. I'm here to bring your vision to life, one click at a time.
    </p>
</div>

                <div style={rightSectionStyle}>
                <img src="./WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Additional Info" style={rightImageStyle} />

                </div>
            </div>
        </div>
        </div>
    );
};

export default About;
