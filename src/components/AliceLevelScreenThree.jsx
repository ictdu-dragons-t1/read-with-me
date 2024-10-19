import React, { useState, useEffect } from "react";
import { ArrowRightCircle } from "lucide-react"; // Import the curved arrow icon
import { useNavigate } from "react-router-dom";
import AliceLevelScreenTwo from "./AliceLevelScreenTwo"; // Import the new level screen
import LoadingScreen from "./LoadingScreen"; // Import the LoadingScreen component
import CheckpointScreen from "./CheckpointScreen"; // Import the CheckpointScreen component

const AliceLevelScreen = ({ setPlay }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [clickCounts, setClickCounts] = useState(Array(7).fill(0)); // State to track click counts
  const [showLoading, setShowLoading] = useState(false);
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [completedCount, setCompletedCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [achievements, setAchievements] = useState([]);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // New state for sidebar expansion
  const [expandedChapters, setExpandedChapters] = useState([]);
  const [level, setLevel] = useState(3); // New state for tracking the current level

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
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = value; // Update the specific answer
      setCompletedCount(newAnswers.filter((answer) => answer !== "").length); // Update the count of completed answers
      return newAnswers; // Return the updated state
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Submitted Answers:", answers);

    // Check if the journal entry is filled
    if (answers[0].trim() !== "") {
      setShowLoading(true); // Show loading screen
      playSound("/sounds/submit.mp3"); // Play a sound when submitting

      // Simulate some loading time (e.g., API call or processing)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setAchievements([...achievements, "Completionist"]); // Add achievement
      setLevel(4); // Set level to 3 when answers are submitted
      setShowLoading(false); // Hide loading screen
    } else {
      alert("Please fill in your journal entry before submitting."); // Alert if the text field is empty
    }
  };

  // Handle hint request
  const handleHint = (index) => {
    if (hintsUsed < 3) {
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

  // Render the appropriate level or loading screen
  if (showLoading) {
    return <LoadingScreen />; // Show LoadingScreen while loading
  }

  // Render the appropriate screen based on the current level
  if (level === 4) {
    return <CheckpointScreen setPlay={setPlay} />; // Show CheckpointScreen after Level 3
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

  // Handle number click
  const handleNumberClick = (index) => {
    setClickCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] % 7) + 1; // Increment the count and reset after 7
      return newCounts;
    });
  };

  return (
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
            <h3 className='text-white text-lg mb-2 font-semibold'>Chapters:</h3>
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
          Level 3
        </h2>

        <div className='novel-text mt-4 text-justify leading-relaxed'>
          <p>
            “Well!” thought Alice to herself, “after such a fall as this, I
            shall think nothing of tumbling down stairs! How brave they’ll all
            think me at home! Why, I wouldn't say anything about it, even if I
            fell off the top of the house!” (Which was very likely true.)
          </p>
          <p>
            Down, down, down. Would the fall never come to an end? “I wonder how
            many miles I’ve fallen by this time?” she said aloud. “I must be
            getting somewhere near the centre of the earth. Let me see: that
            would be four thousand miles down, I think—” (for, you see, Alice
            had learnt several things of this sort in her lessons in the
            schoolroom, and though this was not a very good opportunity for
            showing off her knowledge, as there was no one to listen to her,
            still it was good practice to say it over) “—yes, that’s about the
            right distance—but then I wonder what Latitude or Longitude I’ve got
            to?” (Alice had no idea what Latitude was, or Longitude either, but
            thought they were nice grand words to say.)
          </p>
        </div>
      </div>
      {/* Right Section - Character Reflection Activity */}
      <div className='w-[45%] bg-transparent mt-6 ml-auto mr-auto py-6 rounded-lg flex flex-col items-center'>
        {/* Entire Content in a Card */}
        <div className='bg-[#f1e9d1] w-11/12 p-6 px-5 mr-3 rounded-lg flex flex-col items-center'>
          {/* Header */}
          <h2 className='text-3xl font-semibold text-[#654321] mb-4'>
            Character Reflection Activity
          </h2>

          {/* Prompt Card */}
          <div className='bg-[#b49a68] w-11/12 p-4 rounded-lg shadow-md mb-6'>
            <p className='font-semibold text-lg text-[#ffffff]'>Prompts:</p>
            <ul className='list-disc list-inside text-white pl-5'>
              <li>
                Imagine falling down an endless hole like Alice. How would she
                be feeling in that moment, and why might those feelings arise?
              </li>
              <li>
                As Alice encounters strange, unfamiliar sights during her fall,
                how might her curiosity or confusion shape her reactions?
              </li>
              <li>
                If you were in Alice's shoes, what thoughts might run through
                her mind during such a bizarre and unexpected journey?
              </li>
            </ul>
          </div>

          {/* Journal Entry Input */}
          <textarea
            rows={8}
            placeholder="Write your journal entry from Alice's perspective here..."
            className='w-11/12 p-4 rounded-lg border border-[#b49a68] mb-4 text-[#2e2e2e] focus:outline-none focus:ring-2 focus:ring-[#b49a68] transition duration-200'
            onChange={(e) => handleChange(0, e.target.value)} // Handle change for the journal entry
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmit} // Call handleSubmit when clicked
            className='bg-[#7a6543] text-white rounded-lg py-2 px-6 hover:bg-[#5a4c3a] hover:scale-105 transition-transform duration-200'
          >
            Submit Journal Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default AliceLevelScreen;
