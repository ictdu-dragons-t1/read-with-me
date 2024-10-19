import { useCallback, useEffect, useState } from "react";
import {
  User,
  Users,
  Crosshair,
  Trophy,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import TeamPlay from "../layouts/teamplay/TeamPlay";
import Footer from "../components/Footer";
import Chapter from "../components/Chapter";
import Subscription from "../components/Subscription";
import BookNavigation from "../components/BookNavigation";
import BookDisplay from "../components/BookDisplay";
import BookTitle from "../components/BookTitle.jsx";

import profile from "../assets/images/covers/Profile.png";
import { getBookDocsWithGenres } from "../utils/junoUtils.js";
import RegistrationModal from "../components/RegistrationModal.jsx";

const GameMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isGenreSelect, setIsGenreSelect] = useState(false);
  const [isShowingGenre, setIsShowingGenre] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBookDocsWithGenres().then((data) => setBooks(data));
  }, []);

  const onChange = (item) => {
    setSelectedComponent(item.component);
    setIsGenreSelect(true);
  };

  const menuItems = [
    { name: "Solo Play", icon: <User size={24} /> },
    { name: "Team Play", icon: <Users size={24} />, component: <TeamPlay /> },
    { name: "Battle Royale", icon: <Crosshair size={24} /> },
    { name: "Leaderboard", icon: <Trophy size={24} /> },
    { name: "Shop", icon: <ShoppingBag size={24} /> },
  ];

  const nextBook = useCallback(() => {
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
  }, [books.length])

  const prevBook = useCallback(() => {
    setCurrentBookIndex(
      (prevIndex) => (prevIndex - 1 + books.length) % books.length
    );
  }, [books.length]);

  const handleStartReading = () => {
    setIsFading(true); // Start the fade effect
    setTimeout(() => {
      setIsGenreSelect(true);
      setIsShowingGenre(true); // Show genre image after fade
    }, 300); // Delay to allow fade-out effect
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBook();
    }, 7000);

    return () => clearInterval(interval);
  }, [nextBook]);

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-purple-900 text-white bg-[#0f1433] overflow-hidden">
      <RegistrationModal />
      {/* Floor Effect - Below the books */}
      <div className="fixed w-full h-32 bottom-0 mt-2">
        {/* Hard line at the top with a fading gradient below */}
        <div className="w-full h-full border-t-2 border-[#7592ba] bg-gradient-to-b from-[#7592ba] via-transparent to-transparent opacity-10"></div>
      </div>

      {/* Side gradients to hide hard line*/}
      <div className="fixed z-20 h-full w-full hidden lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-r from-[#0f1433]"></div>
      <div className="fixed z-20 h-full w-full hidden lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-r from-[#0f1433]"></div>
      <div className="fixed z-20 h-full w-full hidden right-0 lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-l from-[#0f1433]"></div>
      <div className="fixed z-20 h-full w-full hidden right-0 lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-l from-[#0f1433]"></div>
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-purple-800">
        <h1 className="text-xl font-semibold italic">RW/M</h1>
        <button
          className="text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay with Blur and Fade Effect */}
      <div
        className={`lg:hidden z-50 fixed inset-0 bg-purple-900 bg-black bg-opacity-60 lg:bg-opacity-90 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backdropFilter: isMobileMenuOpen ? "blur(5px)" : "none",
        }}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <button
              onClick={item.onClick}
              key={index}
              className="flex items-center italic font-semibold space-x-2 hover:text-[#e6a33e] text-left p-2 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              {item.icon}`<span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Left Section - Profile and Menu (Desktop) */}
      <div className='z-20 hidden w-full lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-r from-black ${isGenreSelect ? "lg:w-1/6" : ""}'>
        {/* Profile Section */}
        <div className="p-4 rounded-lg flex items-center justify-between w-full">
          <img src={profile} alt="" className="absolute w-10 top-6" />
          <div className="bg-gray-700 rounded-full p-1 mr-4">
            <div className="w-12 h-12 bg-gray-500 rounded-full" />
          </div>

          {/* Username, Level, and EXP Bar */}
          <div className="flex flex-col fixed w-full ml-12">
            <h2 className="text-white font-semibold uppercase text-sm">
              RWMDevTeam
            </h2>
            <div className="flex flex-row h-8 items-baseline justify-start">
              {/* Level */}
              <span className="text-[#e6a33e] mr-2 text-xs font-semibold">
                LVL1
              </span>
              {/* EXP Bar */}
              <div className="relative w-36 bg-[#696969] rounded-full h-2">
                <div
                  className="absolute top-0 left-0 h-full bg-[#e6a33e] rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            {/* Currency Section */}
            <div className="flex items-center space-x-2 ml-auto">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-600 rounded-full" />
                <span className="text-white text-xs ml-1">0</span>
              </div>

              {/* Dropdown Arrow */}
              <ChevronDown className="text-white" size={18} />
            </div>
          </div>
        </div>

        {/* Desktop Menu Items */}
        {!isGenreSelect && (
          <div className="fixed z-50 h-5/6 flex flex-col items-center justify-around mt-8 py-32 ">
            {menuItems.map((item, index) => (
              <button
                onClick={() => onChange(item)}
                key={index}
                className="flex items-center space-x-2 hover:text-[#e6a33e] w-full text-left p-2 transition-all duration-300 ease-in-out transform hover:scale-110 origin-left"
              >
                {item.icon}
                <span className="italic font-semibold text-xl lg:text-4xl tracking-tight">
                  {item.name.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Middle Section - Book Carousel with Progressive Blur */}
      <div className="lg:w-1/2 right-4 mt-6 lg:mt-6 flex flex-col items-center justify-center p-4 relative">
        {!selectedComponent && (
          <>
            <BookTitle
              isShowingGenre={isShowingGenre}
              books={books}
              currentBookIndex={currentBookIndex}
              isFading={isFading}
            />

            <BookDisplay
              books={books}
              currentBookIndex={currentBookIndex}
              isFading={isFading}
              isGenreSelect={isGenreSelect}
            />
            <BookNavigation
              nextBook={() => nextBook()}
              prevBook={() => prevBook()}
              handleStart={() => handleStartReading()}
            />
          </>
        )}
        {selectedComponent}
      </div>

      {/* Right Section - Logo, Upgrade, and Shop */}
      <div className="lg:w-1/4 z-50 flex flex-col items-center lg:items-end justify-between p-4">
        <Subscription />
        <Chapter />
      </div>
      <Footer />
    </div>
  );
};

export default GameMenu;
