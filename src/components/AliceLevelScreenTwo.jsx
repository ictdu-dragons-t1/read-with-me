import { ActionIcon } from "@mantine/core";
import { ArrowRightCircle, AudioLines } from "lucide-react"; // Import the curved arrow icon
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTTS from "../hooks/useTTS";
import AliceLevelScreenThree from "./AliceLevelScreenThree"; // Import the new level screen
import LoadingScreen from "./LoadingScreen"; // Import the LoadingScreen component

const VOICE_ID = "21m00Tcm4TlvDq8ikWAM";

const AliceLevelScreen = ({ setPlay }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [sequences, setSequences] = useState([
    { id: 1, text: "Alice falls down the rabbit hole." },
    { id: 2, text: "The rabbit-hole goes straight on like a tunnel." },
    { id: 3, text: "Alice dips suddenly down the rabbit hole." },
    { id: 4, text: "Alice wonders what is going to happen next." },
    {
      id: 5,
      text: "Alice notices cupboards and book-shelves on the sides of the well.",
    },
    { id: 6, text: "She takes down a jar labelled 'ORANGE MARMALADE'." },
    { id: 7, text: "Alice finds the jar empty and puts it back." },
  ]);
  const [clickCounts, setClickCounts] = useState(Array(7).fill(0)); // State to track click counts

  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [completedCount, setCompletedCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [achievements, setAchievements] = useState([]);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // New state for sidebar expansion
  const [expandedChapters, setExpandedChapters] = useState([]);
  const [level, setLevel] = useState(2); // New state for tracking the current level
  const [showLoading, setShowLoading] = useState(false); // New state to control the loading screen display

  const { startStreaming } = useTTS();

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

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    playSound("/sounds/submit.mp3");
    setAchievements([...achievements, "Completionist"]);
    setShowLoading(true); // Show loading screen

    // Simulate a delay before transitioning to the next level
    setTimeout(() => {
      setShowLoading(false); // Hide loading screen
      setLevel(3); // Set level to 3 after the loading screen
    }, 6000); // 6-second delay
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

  // Render the appropriate level
  if (level === 3) {
    return <AliceLevelScreenThree setPlay={setPlay} />; // Navigate to Level 3
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

  // Handle number click
  const handleNumberClick = (index) => {
    setClickCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] % 7) + 1; // Increment the count and reset after 7
      return newCounts;
    });
  };

  return (
    <div className="flex w-screen h-screen bg-[#dfc495] text-[#2e2e2e] relative">
      {/* Sidebar - Fixed width initially, expands on click */}
      <div
        className={`${
          isSidebarExpanded ? "w-64" : "w-16"
        } bg-[#b49a68] p-4 flex flex-col transition-all duration-300 fixed top-0 left-0 h-full z-50 shadow-lg rounded-r-lg`}
      >
        <button
          className="text-white text-2xl mb-4 fixed top-4 left-4"
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        >
          &#9776;
        </button>

        {/* Chapter list in the sidebar */}
        {isSidebarExpanded && (
          <div className="mt-16">
            <h3 className="text-white text-lg mb-2 font-semibold">Chapters:</h3>
            <div className="flex flex-col gap-2">
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
                    <h4 className="text-[#654321] font-bold">
                      {chapterInfo.chapter}:
                    </h4>
                    <p className="text-[#2e2e2e]">{chapterInfo.title}</p>
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
                          <p className="text-[#2e2e2e] font-bold">{level}</p>
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
            className="bg-[#7a6543] text-white rounded py-2 mt-auto hover:bg-[#5a4c3a] transition-colors duration-200 flex items-center"
            onClick={() => navigate("/")} // Navigate to Home
          >
            <ArrowRightCircle className="mx-2" /> {/* Curved arrow icon */}
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
      <div className="ml-12 w-1/2 p-6 bg-[#f1e9d1] flex flex-col items-center">
        <div className="flex flex-row mt-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#654321]">
            Chapter 1:
          </h2>
          <h2 className="text-4xl rabbit-hole-title text-center mb-1 text-[#654321]">
            Down the Rabbit Hole
          </h2>
        </div>
        <h2 className="text-2xl mb-4 text-center text-[#654321] underline">
          Level 2
        </h2>

        <div className="novel-text mt-4 text-justify leading-relaxed">
          <ActionIcon
            variant="light"
            color="#b49a68"
            onClick={() =>
              (async () => {
                await startStreaming({
                  voiceId: VOICE_ID,
                  text: `In another moment down went Alice after it, never once considering
            how in the world she was to get out again.`,
                });
              })()
            }
          >
            <AudioLines />
          </ActionIcon>
          <p>
            In another moment down went Alice after it, never once considering
            how in the world she was to get out again.
          </p>
          <ActionIcon
            variant="light"
            color="#b49a68"
            onClick={() =>
              (async () => {
                await startStreaming({
                  voiceId: VOICE_ID,
                  text: `The rabbit-hole went straight on like a tunnel for some way, and
            then dipped suddenly down, so suddenly that Alice had not a moment
            to think about stopping herself before she found herself falling
            down a very deep well.`,
                });
              })()
            }
          >
            <AudioLines />
          </ActionIcon>
          <p>
            The rabbit-hole went straight on like a tunnel for some way, and
            then dipped suddenly down, so suddenly that Alice had not a moment
            to think about stopping herself before she found herself falling
            down a very deep well.
          </p>
          <ActionIcon
            variant="light"
            color="#b49a68"
            onClick={() =>
              (async () => {
                await startStreaming({
                  voiceId: VOICE_ID,
                  text: `Either the well was very deep, or she fell very slowly, for she had
            plenty of time as she went down to look about her and to wonder what
            was going to happen next. First, she tried to look down and make out
            what she was coming to, but it was too dark to see anything; then
            she looked at the sides of the well, and noticed that they were
            filled with cupboards and book-shelves; here and there she saw maps
            and pictures hung upon pegs. She took down a jar from one of the
            shelves as she passed; it was labelled “ORANGE MARMALADE”, but to
            her great disappointment it was empty: she did not like to drop the
            jar for fear of killing somebody underneath, so managed to put it
            into one of the cupboards as she fell past it.`,
                });
              })()
            }
          >
            <AudioLines />
          </ActionIcon>
          <p>
            Either the well was very deep, or she fell very slowly, for she had
            plenty of time as she went down to look about her and to wonder what
            was going to happen next. First, she tried to look down and make out
            what she was coming to, but it was too dark to see anything; then
            she looked at the sides of the well, and noticed that they were
            filled with cupboards and book-shelves; here and there she saw maps
            and pictures hung upon pegs. She took down a jar from one of the
            shelves as she passed; it was labelled “ORANGE MARMALADE”, but to
            her great disappointment it was empty: she did not like to drop the
            jar for fear of killing somebody underneath, so managed to put it
            into one of the cupboards as she fell past it.
          </p>
        </div>
      </div>

      {/* Right Section - Sequencing Cards */}
      <div className="w-3/8 bg-[#dfc495] p-6 flex flex-col items-center">
        <div className="text-left font-bold text-[#2e2e2e] w-full mb-4">
          <span>Arrange the following events:</span>
        </div>

        {/* Number Click Handling */}
        <div className="flex flex-col gap-4 w-full">
          {sequences.map((sequence, index) => (
            <div
              key={sequence.id}
              className="bg-[#f1e9d1] p-4 rounded-lg shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleNumberClick(index)} // Increment count on click
            >
              <span className="text-lg text-[#2e2e2e]">{sequence.text}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from triggering on parent
                  handleNumberClick(index); // Increment count on button click
                }}
                className="text-xl font-bold text-white rounded mx-2 px-3 py-1 bg-[#7a6543] hover:bg-[#5a4c3a] transition-colors duration-200" // Keep buttons brown and darken on hover
              >
                {clickCounts[index]} {/* Display the count */}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#7a6543] text-white rounded py-2 px-4 mt-4 hover:bg-[#5a4c3a] transition-colors duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AliceLevelScreen;
