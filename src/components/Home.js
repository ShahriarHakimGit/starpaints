import React, { useState, useEffect } from 'react';
import paint1 from '../paint1.jpeg';
import paint2 from '../paint2.jpeg';
import paint3 from '../spd.jpg';

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
    <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 mt-16">
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-full sm:w-1/2 lg:w-1/3 object-contain`}
      />
      <img
        src={paint1}
        alt={alt}
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-full sm:w-1/2 lg:w-1/3 object-contain`}
      />
      <img
        src={paint3}
        alt={alt}
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-full sm:w-1/2 lg:w-1/3 object-contain`}
      />
    </div>
  );
};

export default Home;
