import React, { useEffect, useState } from "react";
import alice from "../assets/images/chars/Alice.png";
import rabbit from "../assets/images/chars/Rabbit.png";
import madHatter from "../assets/images/chars/MadHatter.png";
import cat from "../assets/images/chars/Cat.png";
import queenOfHearts from "../assets/images/chars/QOH.png";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500); // Adjust speed of progress
    return () => clearInterval(timer);
  }, []);

  const images = [alice, rabbit, madHatter, cat, queenOfHearts];

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#dfc495]'>
      {/* Header */}
      <h1 className='text-5xl font-bold text-[#2e2e2e] mb-10 font-[Parisienne]'>
        Alice's Adventures in Wonderland
      </h1>

      {/* Bouncing Cards */}
      <div className='flex space-x-4 mb-10'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-16 h-16 bg-[#7a6543] rounded-lg flex items-center justify-center shadow-md 
            transform transition-transform duration-300 ease-in-out
            ${progress > index * 20 ? "animate-bounce" : ""}`} // Bounce when progress reaches certain points
          >
            <img src={image} alt='Character' className='w-10 h-10' />
          </div>
        ))}
      </div>

      {/* Loading bar */}
      <div className='w-3/4 bg-[#b49a68] rounded-full h-4 overflow-hidden mb-8'>
        <div
          className='bg-[#7a6543] h-full transition-all duration-500 ease-linear'
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Friendly text */}
      <h2 className='text-xl font-bold text-[#2e2e2e] mb-8'>
        ReadWithMe is analyzing your answers and preparing the next challenge...
      </h2>
    </div>
  );
};

export default LoadingScreen;
