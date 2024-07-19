// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-6 w-2/3 flex items-center justify-center">
      <ul className="flex w-full justify-evenly">
        <li><Link to="/" className="text-2xl hover:underline">Home</Link></li>
        <li><Link to="/about" className="text-2xl hover:underline">About</Link></li>
        <li><Link to="/contact" className="text-2xl hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
