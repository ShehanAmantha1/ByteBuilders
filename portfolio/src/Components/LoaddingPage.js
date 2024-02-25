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
                    src="./Guest-with-camera-gear-on-safari-in-Botswana-Pangolin-Photo-Safaris-1536x1024.webp" // Replace with the actual path to your spinner image
                    alt="Loading Spinner"
                    style={{ width: '1500px', height: '670px', marginRight: '10px' }}
                />
            </div>
        </div>
    );
}

  // Once loading is complete, redirect to the home page
  return <HomePage />; // Render the HomePage component
};

export default LoadingPage;
