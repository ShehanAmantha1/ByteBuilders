import './App.css';







import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Nav';
import HomePage from './Components/Home.js';
import About from './Components/About.js';



const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
       
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
};

export default App;
