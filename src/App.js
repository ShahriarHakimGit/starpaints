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
        <div className="flex">
          <Banner />
          <Navbar />
        </div>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home  src = {starpaintImage} alt="Placeholder Image" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
