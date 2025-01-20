// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import starpaintImage from './starpaint.jpeg';


function App() {
  return (
    <Router>
      <div className="App">
        
          <Navbar />
        </div>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      
    </Router>
  );
}

export default App;
