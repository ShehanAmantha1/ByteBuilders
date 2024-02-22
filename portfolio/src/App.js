import './App.css';







import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Nav';
import HomePage from 'C:/Users/janit/source/repos/ByteBuilders/ByteBuilders/portfolio/src/Components/Home.js';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
       
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
