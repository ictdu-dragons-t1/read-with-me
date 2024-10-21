import React, { useEffect, useState } from "react";
import { ArrowRightCircle } from "lucide-react"; // Import the curved arrow icon
import { useNavigate } from "react-router-dom";
import avatar from "../assets/images/AvatarMain.png";
import ConfirmExitModal from "./ConfirmExitModal"; // Adjust the import based on your file structure

const CheckpointScreen = ({}) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // State for sidebar expansion
  const [expandedChapters, setExpandedChapters] = useState([]); // State for expanded chapters
  const [setMessages] = useState([]); // State for chat messages
  const [fadeIndex, setFadeIndex] = useState(0); // Track which message to fade in
  const [xp, setXp] = useState(0); // State for XP
  const maxExp = 50; // EXP needed to level up
  const [setLevel] = useState(1); // Initial level
  const [setChatbotText] = useState("");
  const [setSuggestionText] = useState("");

  const [message, setMessage] = useState("");
  const [visibleBubbles, setVisibleBubbles] = useState([
    "Welcome to the chat!",
    // Add initial messages if necessary
  ]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setVisibleBubbles([...visibleBubbles, message]);
      setMessage(""); // Clear the input field
    }
  };

  const chatbotMessage = `Your understanding of the key themes is commendable, especially regarding the significance of curiosity and adventure in Alice's journey. 🌟`;
  const suggestionMessage = `Consider elaborating more on how Alice's interactions with other characters influence her perception of the world. This can deepen your analysis and highlight the complexity of her character.`;

  const [progress, setProgress] = useState(0);

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("feedback1");

  // Function to show the selected tab
  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleExitClick = () => {
    setModalOpen(true); // Open the modal instead of navigating
  };

  const handleConfirmExit = () => {
    navigate("/home"); // Navigate to home page on confirmation
    setModalOpen(false); // Close the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal without exiting
  };

  // Progress bar counts up to 40% and stays there without resetting
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 40) {
          return prev + 10; // Increase progress up to 40%
        } else {
          clearInterval(interval); // Stop the interval when reaching 40%
          return prev; // Do not reset progress
        }
      });
    }, 300); // Adjust duration for speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Effect to fade in messages one by one
  useEffect(() => {
    if (fadeIndex < chatMessages.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, chatMessages[fadeIndex]]);
        setFadeIndex((prev) => prev + 1);
      }, 1000); // Adjust the timing as needed for the delay between messages
      return () => clearTimeout(timer);
    }
  }, [fadeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setExp((prevExp) => {
        if (prevExp < maxExp) {
          return prevExp + 1; // Increase EXP gradually
        } else {
          clearInterval(timer);
          setLevel((prevLevel) => prevLevel + 1); // Level up when max EXP is reached
          return prevExp; // Stop increasing EXP once max is reached
        }
      });
    }, 100); // Adjust speed of EXP gain
    return () => clearInterval(timer);
  }, []);

  // XP counts up to 20 and stays there without resetting
  useEffect(() => {
    const xpInterval = setInterval(() => {
      setXp((prev) => {
        if (prev < 20) {
          return prev + 5; // Increase XP by 5 up to 20
        } else {
          clearInterval(xpInterval); // Stop counting at 20
          return prev; // Do not reset XP
        }
      });
    }, 300); // Adjust duration for speed

    return () => clearInterval(xpInterval); // Cleanup on unmount
  }, []);

  // Typing effect for Chatbot message
  useEffect(() => {
    let chatbotIndex = 0;
    const chatbotTyping = () => {
      if (chatbotIndex < chatbotMessage.length) {
        setChatbotText((prev) => prev + chatbotMessage[chatbotIndex]);
        chatbotIndex++;
        setTimeout(chatbotTyping, 50); // Same typing speed
      }
    };

    setTimeout(chatbotTyping, 1500); // Faster delay (1.5s)
  }, []);

  // Typing effect for Suggestion message
  useEffect(() => {
    let suggestionIndex = 0;
    const suggestionTyping = () => {
      if (suggestionIndex < suggestionMessage.length) {
        setSuggestionText((prev) => prev + suggestionMessage[suggestionIndex]);
        suggestionIndex++;
        setTimeout(suggestionTyping, 50); // Same typing speed
      }
    };

    setTimeout(suggestionTyping, 3000); // Faster delay (3s)
  }, []);

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
                },
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
                    } // Toggle expansion if not locked
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
          onClick={handleExitClick} // Trigger modal to open
        >
          <ArrowRightCircle className='mx-2' /> {/* Curved arrow icon */}
          Exit to Home
        </button>
      )}

      {/* Modal for confirmation */}
      <ConfirmExitModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmExit}
      />
      </div>
      {/* Overlay for sidebar */}
      {isSidebarExpanded ? (
        <div
          className={`absolute inset-0 bg-black ${
            isSidebarExpanded ? "fade-in show" : "fade-out"
          } z-40 ${
            isSidebarExpanded ? "" : "pointer-events-none" // Disable pointer events when invisible
          }`}
        ></div>
      ) : (
        <div className={`absolute inset-0 bg-black fade-out -z-40`}></div>
      )}
      {/* Center Section - Chat with User */}
      <div className='ml-12 w-1/2 p-6 bg-[#f1e9d1] flex flex-col items-center'>
        <div className='flex flex-row mt-4'>
          <h2 className='text-4xl font-bold text-center mb-4 text-[#654321]'>
            CHECKPOINT
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className='p-2 rounded-t-lg'>
          <div className='flex ml-0 justify-start space-x-4'>
            <button
              className={`px-4 py-2 text-white font-semibold rounded-lg border-b-4 ${activeTab === "feedback1" ? "border-[#654321]" : "border-transparent"} bg-[#7a6543] hover:bg-[#654321] focus:outline-none`}
              onClick={() => showTab("feedback1")}
            >
              Level 1
            </button>
            <button
              className={`px-4 py-2 text-white font-semibold rounded-lg border-b-4 ${activeTab === "feedback2" ? "border-[#654321]" : "border-transparent"} bg-[#7a6543] hover:bg-[#654321] focus:outline-none`}
              onClick={() => showTab("feedback2")}
            >
              Level 2
            </button>
            <button
              className={`px-4 py-2 text-white font-semibold rounded-lg border-b-4 ${activeTab === "feedback3" ? "border-[#654321]" : "border-transparent"} bg-[#7a6543] hover:bg-[#654321] focus:outline-none`}
              onClick={() => showTab("feedback3")}
            >
              Level 3
            </button>
          </div>
        </div>

        {/* Chat Container */}
        <div
          className='chat-containerw-full overflow-y-auto max-h-[600px] p-4 border border-[#d9c39e] rounded-lg shadow-lg bg-white'
          style={{
            height: "800px", // Set a constant height
          }}
        >
          {/* Feedback messages with animated pop-up */}
          <div id='chatMessages'>
            {activeTab === "feedback1" && (
              <div>
                <div
                  className='chat-bubble mb-4 p-3 rounded-lg shadow-md bg-[#d9c39e] text-[#2e2e2e] self-start fade-up'
                  style={{ animationDelay: "1s" }}
                >
                  <strong>Chatbot:</strong> Your understanding of the key themes
                  is commendable, especially regarding the significance of
                  curiosity and adventure in Alice's journey. 🌟
                </div>
                <div
                  className='chat-bubble mb-4 p-3 rounded-lg shadow-md bg-[#d9c39e] text-[#2e2e2e] self-start fade-up'
                  style={{ animationDelay: "2s" }}
                >
                  <strong>Suggestion:</strong> Consider elaborating more on how
                  Alice's interactions with other characters influence her
                  perception of the world. This can deepen your analysis and
                  highlight the complexity of her character.
                </div>
                <div
                  className='chat-bubble p-3 rounded-lg shadow-md bg-[#d9c39e] text-[#2e2e2e] self-start fade-up'
                  style={{ animationDelay: "3s" }}
                >
                  <strong>Insight:</strong> You could explore the theme of
                  identity in more depth. Alice often questions her own identity
                  throughout the story, such as when she forgets her name or
                  tries to recall who she is. This could add an interesting
                  layer to your analysis, connecting her personal confusion to
                  the unpredictable world around her.
                </div>
              </div>
            )}

            {/* Feedback 2 */}
            {activeTab === "feedback2" && (
              <div>
                <div
                  className='chat-bubble mb-4 p-3 rounded-lg shadow-md bg-[#654321] text-white self-end fade-in'
                  style={{ animationDelay: "1s" }}
                >
                  <strong>Chatbot:</strong> Here’s your feedback regarding your
                  answers for Level 2:
                  <br />
                  <strong>You answered the following correctly:</strong>
                  <ul className='list-disc pl-5'>
                    <li>1. Alice falls down the rabbit hole.</li>
                    <li>2. The rabbit-hole goes straight on like a tunnel.</li>
                    <li>4. Alice wonders what is going to happen next.</li>
                    <li>
                      5. Alice notices cupboards and book-shelves on the sides
                      of the well.
                    </li>
                    <li>6. Alice finds the jar empty and puts it back.</li>
                    <li>
                      7. She takes down a jar labelled 'ORANGE MARMALADE.'
                    </li>
                  </ul>
                </div>

                <div
                  className='chat-bubble mb-4 p-3 rounded-lg shadow-md bg-[#654321] text-white self-end fade-in'
                  style={{ animationDelay: "2s" }}
                >
                  <strong>
                    However, you made mistakes with the following:
                  </strong>
                  <ul className='list-disc pl-5'>
                    <li>
                      Answer 2: (The rabbit-hole goes straight on like a tunnel)
                      - This answer is out of order and should be 2 instead of
                      3.
                    </li>
                    <li>
                      Answer 5: (Alice takes down a jar labelled 'ORANGE
                      MARMALADE') - This answer is out of order and should be 6
                      instead of 5.
                    </li>
                  </ul>
                </div>

                <div
                  className='chat-bubble p-3 rounded-lg shadow-md bg-[#654321] text-white self-end fade-in'
                  style={{ animationDelay: "3s" }}
                >
                  <strong>Difficulty Adjustment:</strong> Based on your
                  performance, I will adjust the difficulty of future levels.
                  Here are a few changes I’ll implement:
                  <ul className='list-disc pl-5'>
                    <li>
                      Fewer Events: I’ll reduce the number of events you need to
                      arrange in the next level to make it less overwhelming.
                    </li>
                    <li>
                      Hints: I might introduce a limited hint system that
                      provides contextual clues without giving away the answers
                      outright.
                    </li>
                    <li>
                      Clarified Instructions: I’ll ensure that the instructions
                      for the tasks are clearer, helping you understand the
                      expectations better.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Feedback 3 */}
            {activeTab === "feedback3" && (
              <div>
                <div
                  className='chat-bubble mb-4 p-3 rounded-lg shadow-md bg-[#d9c39e] text-[#2e2e2e] self-start fade-in'
                  style={{ animationDelay: "1s" }} // Adjust delay as needed
                >
                  <strong>Chatbot:</strong> Overall, your journal entry captures
                  the essence of Alice's experience while falling down the
                  rabbit hole. You’ve effectively conveyed her mixed emotions of
                  fear and curiosity, which adds depth to the reflection. Great
                  job! 🎉
                  <br />
                  <strong>Strengths:</strong>
                  <ul className='list-disc pl-5'>
                    <li>
                      Emotional Range: You describe Alice's emotions well,
                      portraying both fear and excitement.
                    </li>
                    <li>
                      Imagery: The mention of floating objects like books and
                      jars of marmalade helps visualize the scene, enriching the
                      narrative.
                    </li>
                  </ul>
                </div>
                <div
                  className='chat-bubble mb-4 p-3 rounded-lg shadow-md bg-[#d9c39e] text-[#2e2e2e] self-start fade-in'
                  style={{ animationDelay: "2s" }} // Adjust delay as needed
                >
                  <strong>Areas for Improvement:</strong>
                  <ul className='list-disc pl-5'>
                    <li>
                      Sentence Structure: Some sentences are a bit long and
                      could be more impactful if broken into shorter ones.{" "}
                      <br />
                      <strong>Suggestion:</strong> “I saw peculiar objects float
                      by me, like books and jars of marmalade. It was a bizarre
                      situation!”
                    </li>
                    <li>
                      Clarification: While you mentioned that Alice wanted to
                      scream but couldn’t find her voice, it could be more
                      engaging to explore why she feels voiceless in this
                      situation. <br />
                      <strong>Suggestion:</strong> “I wanted to scream, but the
                      overwhelming feelings choked my voice. Would anyone even
                      hear me if I did?”
                    </li>
                    <li>
                      Consistent Tone: Ensure that the tone remains consistent
                      throughout. In the latter part of the entry, the
                      anticipation of meeting talking animals could tie back to
                      her earlier emotions to maintain cohesion.
                    </li>
                  </ul>
                </div>
                <div
                  className='chat-bubble p-3 rounded-lg shadow-md bg-[#d9c39e] text-[#2e2e2e] self-start fade-in'
                  style={{ animationDelay: "3s" }} // Adjust delay as needed
                >
                  <strong>Difficulty Adjustment:</strong> Since this is a
                  complex reflective task, if you find the prompts too
                  challenging, you could focus on one emotion at a time, like
                  fear or curiosity, and describe it in detail. This approach
                  might help you delve deeper into Alice's thoughts without
                  feeling overwhelmed.
                </div>
              </div>
            )}

            <div className='chat-container  max-h-[200px] mt-4 w-full overflow-y-auto p-4 border border-[#d9c39e] rounded-lg bg-[#f7f3eb]'>
              {/* Chat Bubbles */}
              {visibleBubbles.map((bubble, index) => (
                <div
                  key={index}
                  className='chat-bubble mb-4 p-3 rounded-lg shadow-md bg-[#d9c39e] text-[#2e2e2e] self-start fade-in'
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {bubble}
                  <span className='timestamp p-2'>
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
              ))}

              {/* Typing Indicator */}
              <div className='typing-indicator'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>

              {/* Input Field and Send Button */}
              <div className='chat-footer max-h-[100px] mt-2 flex items-center justify-between p-2 border-t border-[#d9c39e]'>
                <input
                  type='text'
                  className='input-field w-full p-2 border border-[#d9c39e] rounded-md bg-white text-[#2e2e2e] focus:outline-none'
                  placeholder='Type a message...'
                />
                <button className='send-button ml-2 p-2 bg-[#654321] text-white rounded-lg hover:bg-[#4d3017] transition-colors'>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div class='min-w-[35rem] mb-10 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-10 bg-[#f1e9d1] shadow-xl rounded-lg text-gray-900'>
        <div class='rounded-t-lg h-48 overflow-hidden'>
          <img
            class='object-cover object-top w-full'
            src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
            alt='Mountain'
          />
        </div>
        <div class='mx-auto w-64 h-64 relative -mt-24 border-4 border-[#f1e9d1] rounded-full overflow-hidden'>
          <img
            class='object-cover object-center h-64'
            src={avatar}
            alt='Woman looking front'
          />
        </div>
        <div class='text-center mt-6'>
          <h2 class='text-xl font-semibold'>RWMDEVTEAM</h2>
          <p class='text-[#654321]'>Systems Plus College Foundation</p>
        </div>

        {/* Loading Bar Section */}
        <div className='mx-6 p-4'>
          {/* XP Counter */}
          <div className='flex items-center justify-between mb-2'>
            <span className='text-lg font-semibold'>XP: {xp}/50</span>
            <span className='text-lg font-semibold'>LVL 1</span>{" "}
            {/* Added Level 1 to the right */}
          </div>
          <div className='bg-[#d9c39e] h-4 rounded-lg overflow-hidden'>
            <div
              className='bg-[#654321] h-full transition-all duration-300 ease-in-out'
              style={{ width: `${progress}%` }} // Dynamic width based on progress
            ></div>
          </div>
        </div>

        {/* Button Section */}
        <div className='flex mt-[75px] justify-end p-4 space-x-4'>
          <button className='px-4 py-2 text-white font-semibold rounded-lg bg-[#7a6543] hover:bg-[#654321] transition-all shadow-md'>
            Replay
          </button>
          <button className='px-4 py-2 text-white font-semibold rounded-lg bg-[#654321] hover:bg-[#4d3017] transition-all shadow-md'>
            Continue
          </button>
        </div>
      </div>

      {/* CSS for fade-up effect */}
      <style>{`
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .chat-bubble {
    animation: fadeUp 0.5s ease-out forwards;
  }
`}</style>
    </div>
  );
};

export default CheckpointScreen;
