// src/components/Banner.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="bg-yellow-400 text-blue-800 p-6 flex items-center  w-1/3">
      <FontAwesomeIcon icon={faStar} className="text-4xl mr-4" />
      <h1 className="text-4xl font-bold">Company Name</h1>
    </div>
  );
};

export default Banner;
