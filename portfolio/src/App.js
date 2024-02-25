import './App.css';







import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Nav';
import HomePage from './Components/Home.js';
import About from './Components/About.js';
import ContactPage from './Components/Contact.js';
import ImageGallery from './Components/ImageGallery.js';
import Footer from './Components/Footer.js';
import LoadingPage from './Components/LoaddingPage.js';



const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<LoadingPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/imageGallery" element={<ImageGallery />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
