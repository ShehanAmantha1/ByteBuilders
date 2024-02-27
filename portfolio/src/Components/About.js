import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // Full viewport height
        background: '#3F3A3A', // Background color for the entire page
        backgroundSize: '1200px', // Adjust the background image size (cover, contain, or custom size)
        backgroundPosition: 'center', // Center the background image
        
    };
    const imagerectangle = {
        display: 'flex',
        width: '1500px',
        height: '700px',
        borderRadius: '30px', // Top right and bottom left corners are rounded
        backgroundImage: 'url("./Images/augustine-wong-li0iC0rjvvg.jpg")',
        alignItems:'flex-end',
        justifyContent: 'center',
        marginTop:'50px',
        marginBottom:'20px'
    };
    

    const rectangleStyle = {
        display: 'flex',
        width: '1000px',
        height: '600px',
        background: '#000',
        color: '#fff',
        borderRadius: '0 70px 0 0', // Top right and bottom left corners are rounded
    };

    const leftSectionStyle = {
        flex: '1',
        padding: '20px',
        backgroundColor: '#ddd', // Gray background for the left section
        borderRadius: '0 0 0 0', // Top right and bottom left corners are rounded
        color: '#000',
        position: 'relative', // Add position relative to the left section
    };

    const rightSectionStyle = {
        flex: '1',
        padding: '20px',
    };

    
    const rightImageStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px', // Optional: Add border radius to the image
        textAlign: 'center', // Center the image horizontally
        margin: 'auto', // Center the image vertically
        padding: '50 10 10 10'
    };

    const readMoreButtonStyle = {
        position: 'absolute',
        bottom: '100px',
        left: '50%', // Center align the button horizontally
        transform: 'translateX(-50%)', // Center align the button horizontally
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    };
    

    const handleReadMore = () => {
        // Handle the "Read More" button click event
        navigate('/Contact');

    };

    return (
        <div>
            <div style={pageStyle}>
                <div style={imagerectangle}>
                    <div style={rectangleStyle}>
                    <div style={leftSectionStyle}>
                        {/* Content for the left section */}
                        <h1 style={{ fontFamily: 'Arial' }}>Hey I'm Thulshika</h1>
                        <br></br>
    <p style={{ fontFamily: 'Arial' }}>
        Greetings from the lens of Thulshika Nawod! I'm a local small business photographer with an insatiable love for nature and a knack for capturing those fleeting, magical moments that make life truly extraordinary. My lens is my paintbrush, and the world around me is my canvas.
    </p>
    <p style={{ fontFamily: 'Arial' }}>
        Whether it's the gentle sway of a blade of grass, the ethereal glow of a sunrise, or the quiet intimacy of a shared glance, I believe every moment is worth preserving. Through my photography, I aim to not just capture images, but to evoke emotions, tell stories, and create memories that will last a lifetime. So, if you're looking for a photographer who's as passionate about nature and photographic moments as you are, look no further. I'm here to bring your vision to life, one click at a time.
    </p>
                        <button style={readMoreButtonStyle} onClick={handleReadMore}>Get To Know Me</button>

                    </div>
                    <div style={rightSectionStyle}>
                        <img src="./Images/PicsArt_05-17-02.19.40.jpg" alt="Additional Info" style={rightImageStyle} />
                    </div>
                    </div>
                <div/>
            </div>  
        </div>
        </div>
    );
};

export default About;
