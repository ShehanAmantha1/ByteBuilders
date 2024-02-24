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
        position: 'relative', // Set the position to relative for the parent div
        display: 'flex',
        flexDirection: 'column',
        width: '1000px',
        height: '700px',
        background: '#fff',
        color: '#000',
        borderRadius: '30px 0 0 30px', // Top left and bottom left corners are rounded
        marginLeft: 'auto', // Adjust the left margin to align the rectangle to the right
        marginTop: '0px', // Adjust the top margin as needed
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
        marginTop: '50px', // Adjust the top margin to position the text under the circle
        color: '#000',
    };

    const leftSectionStyle = {
        position: 'relative', // Set the position to relative for the parent div
        flex: '1',
        backgroundColor: '#ddd', // Gray background for the left section
        borderRadius: '30px 0 0 30px', // Top left and bottom left corners are rounded
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
                    <h2 style={textUnderCircleStyle}>Contact Us</h2>
                    <p style={textUnderCircleStyle1}>If you have any questions or inquiries, please feel free to contact us using the form below:</p>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                        <input type="text" placeholder="Name" style={{ marginBottom: '10px' }} />
                        <input type="email" placeholder="Email" style={{ marginBottom: '10px' }} />
                        <textarea placeholder="Message" style={{ marginBottom: '10px', width: '100%' }}></textarea>
                        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
                    </form>
                    <div style={contactInfoStyle}>
                        <p>Contact Information:</p>
                        <p>Email: example@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div style={socialMediaLinksStyle}>
                        <a href="https://www.facebook.com" style={{ margin: '0 10px' }}>Facebook</a>
                        <a href="https://www.twitter.com" style={{ margin: '0 10px' }}>Twitter</a>
                        <a href="https://www.instagram.com" style={{ margin: '0 10px' }}>Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
