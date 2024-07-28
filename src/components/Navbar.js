// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-400 text-white p-6 w-full flex items-center justify-between">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center text-2xl hover:underline text-green-800 font-bold">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <Link to="/">StarPaints</Link>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-red-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} w-full sm:w-auto mt-4 sm:mt-0 `}>
        <ul className="flex flex-col sm:flex-row sm:space-x-4 w-full justify-evenly sm:justify-center text-green-500">
          <li className="text-center sm:text-left">
            <Link to="/" className="text-2xl hover:underline block py-2 sm:py-0">Home</Link>
          </li>
          <li className="text-center sm:text-left">
            <Link to="/about" className="text-2xl hover:underline block py-2 sm:py-0">About</Link>
          </li>
          <li className="text-center sm:text-left">
            <Link to="/contact" className="text-2xl hover:underline block py-2 sm:py-0">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
