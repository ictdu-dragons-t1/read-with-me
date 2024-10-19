import React, { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react"; // Importing the Lightbulb icon from lucide-react
import { ArrowRightCircle } from "lucide-react"; // Import the curved arrow icon
import { useNavigate } from "react-router-dom";
import AliceLevelScreenTwo from "./AliceLevelScreenTwo"; // Import the new level screen
import LoadingScreen from "./LoadingScreen"; // Import the LoadingScreen component

const AliceLevelScreen = ({ setPlay }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [completedCount, setCompletedCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [achievements, setAchievements] = useState([]);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // New state for sidebar expansion
  const [expandedChapters, setExpandedChapters] = useState([]);
  const [level, setLevel] = useState(1); // New state for tracking the current level
  const [showLoading, setShowLoading] = useState(false); // New state to control the loading screen display
  const [isContentVisible, setIsContentVisible] = useState(false); // State to control content visibility

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

  // Fade in effect for content
  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setIsContentVisible(true);
    }, 5000); // 1 second delay before showing the content
    return () => clearTimeout(fadeTimeout);
  }, []);

  // Handle answer change and update completed count
  const handleChange = (index, value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = value; // Update the specific answer
      setCompletedCount(newAnswers.filter((answer) => answer !== "").length); // Update the count of completed answers
      return newAnswers; // Return the updated state
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    setAchievements([...achievements, "Completionist"]);
    playSound("/sounds/submit.mp3"); // Play a sound when submitting

    // Show the loading screen
    setShowLoading(true);

    // Simulate a delay before transitioning to the next level
    setTimeout(() => {
      setShowLoading(false);
      setLevel(2); // Set level to 2 after the loading screen
    }, 6000); // 6-second delay
  };

  // Handle hint request
  const handleHint = (index) => {
    if (hintsUsed < 3) {
      alert(`Hint: ${hints[index]}`); // Change this line to show "Hint: " followed by the actual hint
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

  // Render the appropriate level
  if (level === 2) {
    return <AliceLevelScreenTwo setPlay={setPlay} />; // Navigate to Level 2
  }

  // Render the loading screen when showLoading is true
  if (showLoading) {
    return <LoadingScreen />; // Display the loading screen
  }

  // Toggle chapter expansion
  const toggleChapterExpansion = (index) => {
    setExpandedChapters((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className='flex w-screen h-screen bg-black relative'>
      <div className='flex w-screen h-screen bg-[#dfc495] text-[#2e2e2e] relative'>
        {/* Sidebar - Fixed width initially, expands on click */}
        <div
          className={`${
            isSidebarExpanded ? "w-64" : "w-16"
          } bg-[#b49a68] p-4 flex flex-col transition-all duration-300 fixed top-0 left-0 h-full z-50 shadow-lg rounded-r-lg`}
        >
          <button
            className='text-white text-2xl mb-4 fixed top-4 left-4'
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          >
            &#9776;
          </button>

          {/* Chapter list in the sidebar */}
          {isSidebarExpanded && (
            <div className='mt-16'>
              <h3 className='text-white text-lg mb-2 font-semibold'>
                Chapters:
              </h3>
              <div className='flex flex-col gap-2'>
                {[
                  {
                    title: "Down the Rabbit Hole",
                    chapter: "Chapter 1",
                    isLocked: false,
                  },
                  {
                    title: "The Pool of Tears",
                    chapter: "Chapter 2",
                    isLocked: true,
                  },
                  {
                    title: "A Caucus Race and a Long Tale",
                    chapter: "Chapter 3",
                    isLocked: true,
                  },
                  {
                    title: "The Rabbit Sends in a Little Bill",
                    chapter: "Chapter 4",
                    isLocked: true,
                  }, // New chapter added and locked
                ].map((chapterInfo, index) => (
                  <div key={index}>
                    <div
                      className={`bg-[#f1e9d1] p-3 rounded-lg shadow-md cursor-pointer ${
                        chapterInfo.isLocked ? "opacity-40" : "opacity-100"
                      }`}
                      style={{
                        opacity: `${index === 0 ? 1 : index === 1 ? 0.7 : index === 2 ? 0.5 : 0.3}`,
                      }} // Decreasing opacity
                      onClick={() =>
                        !chapterInfo.isLocked && toggleChapterExpansion(index)
                      } // Toggle level cards on chapter click if not locked
                    >
                      <h4 className='text-[#654321] font-bold'>
                        {chapterInfo.chapter}:
                      </h4>
                      <p className='text-[#2e2e2e]'>{chapterInfo.title}</p>
                    </div>

                    {/* Level Cards Dropdown */}
                    <div
                      className={`flex flex-col pr-4 transition-all duration-300 ${
                        expandedChapters.includes(index)
                          ? "max-h-60 mt-3"
                          : "max-h-0"
                      } overflow-hidden`}
                    >
                      {["Level 1", "Level 2", "Level 3", "Checkpoint"].map(
                        (level, levelIndex) => (
                          <div
                            key={levelIndex}
                            className={`p-2 rounded-lg shadow-md mb-1 ${
                              level === "Checkpoint"
                                ? "bg-[#ffcc00] border-2 border-[#e0b300] font-bold"
                                : "bg-[#d9c39e] font-bold"
                            }`}
                          >
                            <p className='text-[#2e2e2e] font-bold'>{level}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exit button at the bottom of the sidebar */}
          {isSidebarExpanded && (
            <button
              className='bg-[#7a6543] text-white rounded py-2 mt-auto hover:bg-[#5a4c3a] transition-colors duration-200 flex items-center'
              onClick={() => navigate("/")} // Navigate to Home
            >
              <ArrowRightCircle className='mx-2' /> {/* Curved arrow icon */}
              Exit to Home
            </button>
          )}
        </div>

        {isSidebarExpanded ? (
          <div
            className={`absolute inset-0 bg-black ${isSidebarExpanded ? "fade-in show" : "fade-out"} z-40 ${
              isSidebarExpanded ? "" : "pointer-events-none" // Disable pointer events when invisible
            }`}
          ></div>
        ) : (
          <div className={`absolute inset-0 bg-black fade-out -z-40`}></div>
        )}

        {/* Center Section - Story */}
        <div className='ml-12 w-1/2 p-6 bg-[#f1e9d1] flex flex-col items-center'>
          <div className='flex flex-row mt-4'>
            <h2 className='text-4xl font-bold text-center mb-4 text-[#654321]'>
              Chapter 1:
            </h2>
            <h2 className='text-4xl rabbit-hole-title text-center mb-1 text-[#654321]'>
              Down the Rabbit Hole
            </h2>
          </div>
          <h2 className='text-2xl mb-4 text-center text-[#654321] underline'>
            Level 1
          </h2>

          <div className='novel-text mt-4 text-justify leading-relaxed'>
            <p>
              Alice was beginning to get very tired of sitting by her sister on
              the bank, and of having nothing to do: once or twice she had
              peeped into the book her sister was reading, but it had no
              pictures or conversations in it, “and what is the use of a book,”
              thought Alice, “without pictures or conversations?”
            </p>
            <p>
              So she was considering in her own mind (as well as she could, for
              the hot day made her feel very sleepy and stupid) whether the
              pleasure of making a daisy-chain would be worth the trouble of
              getting up and picking the daisies, when suddenly a White Rabbit
              with pink eyes ran close by her.
            </p>
            <p>
              There was nothing so very remarkable in that; nor did Alice think
              it so very much out of the way to hear the Rabbit say to itself,
              “Oh dear! Oh dear! I shall be late!” (when she thought it over
              afterwards, it occurred to her that she ought to have wondered at
              this, but at the time it all seemed quite natural); but when the
              Rabbit actually took a watch out of its waistcoat-pocket, and
              looked at it, and then hurried on, Alice started to her feet, for
              it flashed across her mind that she had never before seen a rabbit
              with either a waistcoat-pocket, or a watch to take out of it, and
              burning with curiosity, she ran across the field after it, and
              fortunately was just in time to see it pop down a large
              rabbit-hole under the hedge.
            </p>
          </div>
        </div>

        {/* Right Section - Questions */}
        <div className='w-3/8 bg-[#dfc495] p-6 flex flex-col items-center'>
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
                    onChange={(e) => handleChange(index, e.target.value)} // Ensure onChange is correct
                    className='bg-[#f1e9d1] text-[#2e2e2e] rounded p-1 mt-1 w-full placeholder:text-[#654321]'
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

          <div className='w-full bg-[#b49a68] rounded mt-4'>
            <div
              className='bg-[#7a6543] h-2 rounded transition-all duration-500 ease-in-out'
              style={{ width: `${(completedCount / answers.length) * 100}%` }}
            ></div>
          </div>

          <button
            onClick={handleSubmit}
            className={`bg-[#7a6543] text-white rounded py-2 px-4 mt-4 hover:bg-[#5a4c3a]`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AliceLevelScreen;
