import React, { useState } from "react";
import { Bookmark, ThumbsUp, SquareArrowOutUpRight } from "lucide-react";
import alicePreview from "../assets/images/covers/AlicePreview.jpg";
import AliceLevelScreen from "./AliceLevelScreen"; // Import the AliceLevelScreen component

function Preview() {
  const [play, setPlay] = useState(false); // State to toggle between Preview and AliceLevelScreen

  if (play) {
    return <AliceLevelScreen />;
  }

  return (
    <div className='preview-container max-w-screen-md mx-auto'>
      {" "}
      {/* Centering the container */}
      <div className='relative h-80 bg-black flex items-center justify-center'>
        <img
          src={alicePreview}
          alt='Book Preview'
          className='object-cover rounded-md w-full h-full'
        />
      </div>
      <div className='p-6 md:p-8'>
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
            onClick={() => setPlay(true)}
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
