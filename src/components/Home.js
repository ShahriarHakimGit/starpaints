import React, { useState, useEffect } from 'react';
import paint1 from '../paint0.jpeg';
import paint2 from '../paint2.jpeg';
import paint3 from '../paint3.jpeg';
import paint4 from '../paint4.jpeg'; // New Image 1
import paint5 from '../paint5.jpeg'; // New Image 2
import mainImage from '../starpaint.jpeg'; // The top image

const images = [
  { src: paint1, alt: 'Painting 1' },
  { src: paint2, alt: 'Painting 2' },
  { src: paint3, alt: 'Painting 3' },
  { src: paint4, alt: 'Painting 4' },
  { src: paint5, alt: 'Painting 5' },
];

const Home = () => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const imageLoadHandlers = images.map((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
      };
    });

    // Cleanup function
    return () => {
      imageLoadHandlers.forEach((img) => (img.onload = null));
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4 sm:p-6 mt-16">
      {/* Centered image at the top */}
      <img
        src={mainImage}
        alt="Main Top Image"
        className="w-full max-w-xs object-contain mb-8"
      />

      {/* Grid for other images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`transition-opacity duration-1000 ${
              loadedImages[index] ? 'opacity-100' : 'opacity-0'
            } w-full object-contain`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;