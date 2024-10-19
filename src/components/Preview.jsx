import React, { useState, useEffect } from "react";
import { Bookmark, ThumbsUp, SquareArrowOutUpRight } from "lucide-react";
import alicePreview from "../assets/images/covers/AlicePreview.jpg";
import AliceLevelScreen from "./AliceLevelScreen"; // Import the AliceLevelScreen component

function Preview() {
  const [play, setPlay] = useState(false); // State to toggle between Preview and AliceLevelScreen
  const [fadeOut, setFadeOut] = useState(false); // State to control the fade-out effect
  const [fadeIn, setFadeIn] = useState(false); // State to control the fade-in effect

  // Effect to handle fade-in on component mount
  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setFadeIn(true); // Trigger fade-in after component mounts
    }, 100); // Short delay before starting the fade-in

    return () => clearTimeout(fadeInTimeout); // Cleanup timeout on unmount
  }, []);

  // Function to start the game and fade out
  const startGame = () => {
    setFadeOut(true); // Trigger fade-out
    setTimeout(() => {
      setPlay(true); // Transition to the game after the fade-out
    }, 2000); // Duration for the fade-out (2 seconds)
  };

  // If play is true, render the AliceLevelScreen
  if (play) {
    return <AliceLevelScreen setPlay={setPlay} />; // Pass setPlay to AliceLevelScreen
  }

  return (
    <div className='preview-container max-w-screen-md mx-auto'>
      {/* Fade-in and Fade-out effects on the main container */}
      <div
        className={`relative h-80 bg-black flex items-center justify-center transition-opacity duration-3000 ${fadeOut ? "opacity-0" : fadeIn ? "opacity-100" : "opacity-0"}`}
      >
        <img
          src={alicePreview}
          alt='Book Preview'
          className='object-cover rounded-md w-full h-full'
        />
      </div>
      <div
        className={`p-6 md:p-8 transition-opacity duration-3000 ${fadeOut ? "opacity-0" : fadeIn ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className='text-4xl font-bold'>Alice's Adventures in Wonderland</h1>
        <p className='text-lg text-gray-400 mb-2'>Lewis Carroll 1865</p>
        <p className='mt-4 text-justify text-gray-300'>
          "Alice's Adventures in Wonderland" by Lewis Carroll is a classic 1865
          novel that follows a young girl named Alice, who falls down a rabbit
          hole into a fantastical world filled with peculiar creatures, absurd
          logic, and whimsical adventures...
        </p>

        <div className='mt-4 space-x-2'>
          <button
            className='bg-lavender-blue-700 hover:bg-lavender-blue-800 border border-spacing-1 border-lavender-blue-600 bg-gradient-to-t from-lavender-blue-500 text-lg text-white font-bold italic px-4 rounded-2xl'
            onClick={startGame} // Start the game and show loading
          >
            Play
          </button>
          <button className='bg-gray-800 text-white px-6 py-2 rounded-lg'>
            Download
          </button>
        </div>

        <div className='flex items-center space-x-4 mt-6'>
          <button className='flex items-center text-white'>
            <Bookmark />
          </button>
          <button className='flex items-center text-white'>
            <ThumbsUp />
          </button>
          <button className='flex items-center text-white'>
            <SquareArrowOutUpRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
