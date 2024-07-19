// src/components/Home.js
import React from 'react';
import { useState, useEffect } from 'react';

const Home = ({ src, alt = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setIsLoaded(true);
    };

    const image = new Image();
    image.src = src;
    image.onload = handleImageLoad;

    return () => {
      image.onload = null; // Cleanup to prevent memory leaks
    };
  }, [src]);

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default Home;
