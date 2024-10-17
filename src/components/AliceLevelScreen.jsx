import React, { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react"; // Importing the Lightbulb icon from lucide-react


const AliceLevelScreen = () => {
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [completedCount, setCompletedCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [achievements, setAchievements] = useState([]);
  const [hintsUsed, setHintsUsed] = useState(0);

  // Predefined hints for each question
  const hints = [
    "She was tired of sitting and doing nothing.",
    "Alice thought the book had no pictures or conversations.",
    "She considered making a daisy chain.",
    "The White Rabbit exclaimed 'Oh dear! Oh dear! I shall be late!'",
    "Alice noticed the Rabbit had a watch.",
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle answer change and update completed count
  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    setCompletedCount(newAnswers.filter((answer) => answer !== "").length);
  };

  // Handle form submission (you can add real logic here)
  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    if (completedCount === answers.length) {
      setAchievements([...achievements, "Completionist"]);
    }
    playSound("/sounds/submit.mp3"); // Play a sound when submitting
  };

  // Handle hint request
  const handleHint = (index) => {
    if (hintsUsed < 3) {
      // Limit to 3 hints
      alert(hints[index]);
      setHintsUsed(hintsUsed + 1);
    } else {
      alert("No more hints available!");
    }
  };

  // Play a sound effect
  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className='flex w-screen h-screen bg-[#f7f1e3] text-[#2e2e2e]'>
      {/* Left Section */}
      <div className='w-1/8 bg-[#b49a68] p-4 flex items-center justify-center'>
        <div className='text-2xl mb-6'>
          <button className='text-white'>&#9776;</button> {/* Hamburger menu */}
        </div>
      </div>

      {/* Center Section - Story */}
      <div className='w-1/2 p-6 bg-[#f1e9d1] flex flex-col items-center'>
        {/* Chapter and Level */}
        <h2 className='text-4xl font-bold rabbit-hole-title text-center mb-1 text-[#654321]'>
          Chapter 1: Down the Rabbit Hole
        </h2>
        <h2 className='text-3xl mb-4 text-center text-[#654321] underline'>
          Level 1
        </h2>

        <div className='text-justify text-lg text-[#4b3621]'>
          <p className='mb-4'>
            Alice was beginning to get very tired of sitting by her sister on
            the bank, and of having nothing to do: once or twice she had peeped
            into the book her sister was reading, but it had no pictures or
            conversations in it, “and what is the use of a book,” thought Alice,
            “without pictures or conversations?”
          </p>
          <p className='mb-4'>
            So she was considering in her own mind (as well as she could, for
            the hot day made her feel very sleepy and stupid) whether the
            pleasure of making a daisy-chain would be worth the trouble of
            getting up and picking the daisies, when suddenly a White Rabbit
            with pink eyes ran close by her.
          </p>
          <p className='mb-4'>
            There was nothing so very remarkable in that; nor did Alice think it
            so very much out of the way to hear the Rabbit say to itself, “Oh
            dear! Oh dear! I shall be late!” (when she thought it over
            afterwards, it occurred to her that she ought to have wondered at
            this, but at the time it all seemed quite natural); but when the
            Rabbit actually took a watch out of its waistcoat-pocket, and looked
            at it, and then hurried on, Alice started to her feet, for it
            flashed across her mind that she had never before seen a rabbit with
            either a waistcoat-pocket, or a watch to take out of it, and burning
            with curiosity, she ran across the field after it, and fortunately
            was just in time to see it pop down a large rabbit-hole under the
            hedge.
          </p>
        </div>
      </div>

      {/* Right Section - Questions */}
      <div className='w-3/8 bg-[#dfc495] p-6 flex flex-col items-center'>
        {/* Timer */}
        <div className='text-right text-[#2e2e2e] w-full'>
          <span>Time Left: {formatTime(timeLeft)}</span>
        </div>

        <ul className='list-decimal px-5 text-lg text-[#2e2e2e] w-full'>
          {[
            "What was Alice getting tired of while sitting by her sister?",
            "What did Alice think about the book her sister was reading?",
            "What did Alice consider making during her time by the bank?",
            "What did the White Rabbit exclaim as it ran by Alice?",
            "What unusual item did Alice notice the Rabbit take out of its waistcoat-pocket?",
          ].map((question, index) => (
            <li key={index} className='mb-4'>
              {question} <br />
              <span className='text-black'>Answer:</span>
              <div className='flex items-center'>
                <input
                  type='text'
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className={`bg-[#f1e9d1] text-[#2e2e2e] rounded p-1 mt-1 w-full input-placeholder ${answers[index] !== "" ? "bg-[#7a6543]" : "bg-[#f1e9d1]"}`}
                  placeholder='Type your answer here...'
                />

                <button
                  onClick={() => handleHint(index)}
                  className='ml-2 bg-[#b49a68] text-white rounded px-2 py-1 mt-1 hover:bg-[#9b7f5e] flex items-center justify-center'
                >
                  <Lightbulb className='w-5 h-5 text-[#2e2e2e]' />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Progress Bar */}
        <div className='w-full bg-[#b49a68] rounded mt-4'>
          <div
            className='bg-[#7a6543] h-2 rounded transition-all duration-500 ease-in-out'
            style={{ width: `${(completedCount / answers.length) * 100}%` }}
          ></div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className='bg-[#7a6543] text-white rounded py-2 px-4 mt-4 hover:bg-[#5a4c3a]'
        >
          Submit
        </button>

        {/* Achievement badges */}
        <div className='mt-2 text-center'>
          {achievements.includes("Completionist") && (
            <span className='bg-[#ffcc00] text-black rounded px-2 py-1'>
              Completionist
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AliceLevelScreen;
