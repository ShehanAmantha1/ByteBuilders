import React, { useState, useEffect } from 'react';
import HomePage from './Home';
//import { navigate } from 'react-router-dom';

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      //navigate('/'); // Redirect to the home page (adjust the path if needed)
    }, 3000); // Adjust the duration of the loading simulation

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <img
                    src="./Images/60e72028b41866ae64c5bd4711f81474.gif" // Replace with the actual path to your spinner image
                    alt="Loading Spinner"
                    style={{
                      width: '100vw',
                      height: '100vh',
                      marginRight: '10px',
                      position: 'fixed', // Add this line to fix the position of the spinner
                      top: 0, // Add this line to position the spinner at the top of the viewport
                      left: 0, // Add this line to position the spinner at the left of the viewport
                      zIndex: 9999, // Add this line to set a high z-index value for the spinner
                    }}
                />
            </div>
        </div>
    );
}

  // Once loading is complete, redirect to the home page
  return <HomePage />; // Render the HomePage component
};

export default LoadingPage;
