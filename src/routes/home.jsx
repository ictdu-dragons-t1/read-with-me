import { useEffect, useState } from "react";
import {
  User,
  Users,
  Crosshair,
  Trophy,
  ShoppingBag,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Settings,
  Gift,
  ShoppingCart,
} from "lucide-react";

import alice from "../assets/images/covers/Alice.png";
import thewar from "../assets/images/covers/TheWar.png";
import pride from "../assets/images/covers/Pride.png";
import moby from "../assets/images/covers/Moby.png";
import web from "../assets/images/covers/Web.png";
import alice2 from "../assets/images/covers/Alice2.png";
import thewar2 from "../assets/images/covers/TheWar2.png";
import pride2 from "../assets/images/covers/Pride2.png";
import moby2 from "../assets/images/covers/Moby2.png";
import web2 from "../assets/images/covers/Web2.png";
import shop from "../assets/images/covers/Shop.png";
import book from "../assets/images/covers/Book.png";
import profile from "../assets/images/covers/Profile.png";
import treasure from "../assets/images/covers/Treasure.png";
import jungle from "../assets/images/covers/Jungle.png";
import peter from "../assets/images/covers/Peter.png";
import sawyer from "../assets/images/covers/Sawyer.png";
import wild from "../assets/images/covers/Wild.png";
import robinson from "../assets/images/covers/Robinson.png";
import add from "../assets/images/covers/Add.png";
import RegistrationModal from "../components/RegistrationModal";
import Preview from "../components/Preview";

const Home = () => {
  const [isGridVisible, setIsGridVisible] = useState(false); // For toggling the book grid
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isGenreSelect, setIsGenreSelect] = useState(false);
  const [isShowingGenre, setIsShowingGenre] = useState(false);

  const menuItems = [
    { name: "Solo Play", icon: <User size={24} /> },
    { name: "Team Play", icon: <Users size={24} /> },
    { name: "Time Attack", icon: <Crosshair size={24} /> },
    { name: "Leaderboard", icon: <Trophy size={24} /> },
    { name: "Shop", icon: <ShoppingBag size={24} /> },
  ];

  const books = [
    {
      genreSelect: "Select a Genre",
      genreType: "Choose your adventure!",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      color: "bg-blue-500",
      coverImage: pride,
      genreImage: pride2,
    },
    {
      genreSelect: "Select a Genre",
      genreType: "Choose your adventure!",
      title: "Moby Dick",
      author: "Herman Melville",
      color: "bg-green-500",
      coverImage: moby,
      genreImage: moby2,
    },
    {
      genreSelect: "Select a Genre",
      genreType: "Choose your adventure!",
      title: "Charlotte's Web",
      author: "EB White",
      color: "bg-red-500",
      coverImage: web,
      genreImage: web2,
    },
    {
      genreSelect: "Select a Genre",
      genreType: "Choose your adventure!",
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      color: "bg-yellow-500",
      coverImage: alice,
      genreImage: alice2,
    },
    {
      genreSelect: "Select a Genre",
      genreType: "Choose your adventure!",
      title: "The War of the Worlds",
      author: "H.G. Wells",
      color: "bg-purple-500",
      coverImage: thewar,
      genreImage: thewar2,
    },
  ];

  const footerItems = [
    { name: "Support", icon: <HelpCircle size={16} /> },
    { name: "Settings", icon: <Settings size={16} /> },
    { name: "Gift Cards", icon: <Gift size={16} /> },
    { name: "Merch", icon: <ShoppingCart size={16} /> },
  ];

  const nextBook = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentBookIndex(
      (prevIndex) => (prevIndex - 1 + books.length) % books.length
    );
  };

  const handleStartReading = (clickedImage) => {
    setIsFading(true);

    setTimeout(() => {
      setIsGenreSelect(true);

      setIsShowingGenre(true);

      if (clickedImage === alice2) {
        setIsGridVisible(true);
      }
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextBook, 7000);
    return () => clearInterval(interval);
  }, []);

  const registration = {
    firstName: "asd",
    lastName: "",
    userName: "asdas",
  };

  const [showPreview, setShowPreview] = useState(false);

  const handleCardClick = () => {
    setShowPreview(true); // Show the preview when the card is clicked
  };

  const closePreview = () => {
    setShowPreview(false); // Close the preview
  };

  return (
    <div className='flex flex-col lg:flex-row h-screen w-screen bg-purple-900 text-white bg-[#0f1433] overflow-hidden'>
      <RegistrationModal />
      {/* Floor Effect - Below the books */}
      <div className='fixed w-full h-32 bottom-0 mt-2'>
        {/* Hard line at the top with a fading gradient below */}
        <div className='w-full h-full border-t-2 border-[#7592ba] bg-gradient-to-b from-[#7592ba] via-transparent to-transparent opacity-10'></div>
      </div>
      {/* Side gradients to hide hard line*/}
      <div className='fixed z-20 h-full w-full hidden lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-r from-[#0f1433]'></div>
      <div className='fixed z-20 h-full w-full hidden lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-r from-[#0f1433]'></div>
      <div className='fixed z-20 h-full w-full hidden right-0 lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-l from-[#0f1433]'></div>
      <div className='fixed z-20 h-full w-full hidden right-0 lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-l from-[#0f1433]'></div>
      {/* Mobile Header */}
      <div className='lg:hidden flex justify-between items-center p-4 bg-purple-800'>
        <h1 className='text-xl font-semibold italic'>RW/M</h1>
        <button
          className='text-white'
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
          className='absolute top-4 right-4 text-white'
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>
        <div className='space-y-4'>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className='flex items-center italic font-semibold space-x-2 hover:text-[#e6a33e] text-left p-2 transition-all duration-300 ease-in-out transform hover:scale-110'
            >
              {item.icon}`<span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Left Section - Profile and Menu (Desktop) */}
      <div className='z-20 hidden w-full lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-r from-black ${isGenreSelect ? "lg:w-1/6" : ""}'>
        {/* Profile Section */}
        <div className='p-4 rounded-lg flex items-center justify-between w-full'>
          <img src={profile} alt='' className='absolute w-10 top-6' />
          <div className='bg-gray-700 rounded-full p-1 mr-4'>
            <div className='w-12 h-12 bg-gray-500 rounded-full' />
          </div>

          {/* Username, Level, and EXP Bar */}
          <div className='flex flex-col fixed w-full ml-12'>
            <h2 className='text-white font-semibold uppercase text-sm'>
              RWMDevTeam
            </h2>
            <div className='flex flex-row h-8 items-baseline justify-start'>
              {/* Level */}
              <span className='text-[#e6a33e] mr-2 text-xs font-semibold'>
                LVL1
              </span>
              {/* EXP Bar */}
              <div className='relative w-36 bg-[#696969] rounded-full h-2'>
                <div
                  className='absolute top-0 left-0 h-full bg-[#e6a33e] rounded-full'
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            {/* Currency Section */}
            <div className='flex items-center space-x-2 ml-auto'>
              <div className='flex items-center'>
                <div className='w-4 h-4 bg-purple-600 rounded-full' />
                <span className='text-white text-xs ml-1'>0</span>
              </div>

              {/* Dropdown Arrow */}
              <ChevronDown className='text-white' size={18} />
            </div>
          </div>
        </div>

        {/* Desktop Menu Items */}
        {!isGenreSelect && (
          <div
            className={`fixed z-50 h-5/6 flex flex-col items-center justify-around mt-8 py-32 ${isFading ? "opacity-0" : "opacity-100"}`}
          >
            {menuItems.map((item, index) => (
              <button
                key={index}
                className='flex items-center space-x-2 hover:text-[#e6a33e] w-full text-left p-2 transition-all duration-300 ease-in-out transform hover:scale-110 origin-left'
              >
                {item.icon}
                <span className='italic font-semibold text-xl lg:text-4xl tracking-tight'>
                  {item.name.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Middle Section - Book Carousel with Progressive Blur */}
      <div className='lg:w-1/2 right-4 flex flex-col items-center justify-center p-4 relative'>
        {/* Book Titles and Authors */}
        <div className='ml-10 text-center'>
          {!isShowingGenre ? (
            <>
              <h2
                className={`text-xl font-bold italic text-white transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}
              >
                {books[currentBookIndex].title}
              </h2>
              <p
                className={`text-lg text-[#e6a33e] italic transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}
              >
                {books[currentBookIndex].author}
              </p>
            </>
          ) : (
            !isGridVisible && (
              <>
                <h2
                  className={`text-xl font-bold italic text-white transition-opacity duration-300 ${!isFading ? "opacity-100" : "opacity-100"}`}
                >
                  {books[currentBookIndex].genreSelect}{" "}
                  {/* This should now refer to the correct book's genre */}
                </h2>
                <p
                  className={`text-lg text-[#e6a33e] italic transition-opacity duration-300 ${!isFading ? "opacity-100" : "opacity-100"}`}
                >
                  {books[currentBookIndex].genreType}{" "}
                  {/* This should now refer to the correct book's genre */}
                </p>
              </>
            )
          )}
        </div>

        {/* Books Display */}
        {!isGridVisible && (
          <div className='relative rounded-4xl ml-3 w-[300px] h-96 mb-16'>
            {books.map((book, index) => {
              const totalBooks = books.length;

              // Calculate position relative to currentBookIndex, allowing for infinite looping appearance
              const position =
                (index - currentBookIndex + totalBooks) % totalBooks;

              // Adjust position to move from left to right
              const adjustedPosition =
                position <= 2 ? position : position - totalBooks;

              const calculateBlur = (adjustedPosition) => {
                if (isGenreSelect) return 0; // No blur in grid mode
                if (adjustedPosition === 0) return 0; // No blur for the center book
                return Math.abs(adjustedPosition) === 1 ? 5 : 10; // Blur more for books further away
              };

              const isVisible = adjustedPosition === 0; // Only the center book should be fully visible
              const isHidden = Math.abs(adjustedPosition) >= 2; // Hide books that are two or more positions away

              return (
                <div
                  key={index}
                  className={`
          absolute top-0 left-0 w-full h-full ${book.color} rounded-lg
          transition-all duration-300 ease-in-out flex flex-col justify-between p-4
          ${adjustedPosition === 0 ? "cursor-pointer" : ""}  // Add cursor for the center book
        `}
                  style={{
                    transform: `translateX(${adjustedPosition * 100}%) scale(${
                      adjustedPosition === 0 ? 1 : 0.8
                    })`,
                    opacity: isVisible ? 1 : isHidden ? 0 : 0.5,
                    zIndex: adjustedPosition === 0 ? 10 : 0,
                    filter: `blur(${calculateBlur(adjustedPosition)}px)`,
                  }}
                  onClick={() => handleStartReading(book.genreImage)}
                >
                  {/* Genre Image */}
                  <img
                    src={book.genreImage}
                    alt={`Genre of ${book.title}`}
                    className={`fixed w-full h-full object-cover rounded-md transition-opacity duration-300 ${isFading ? "opacity-300" : "hidden"}`}
                  />

                  {/* Cover Image */}
                  <img
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className={`fixed w-full h-full object-cover rounded-md transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Book Grid - Only visible when isGridVisible is true */}
        {isGridVisible && (
          <div className='fixed ml-10 lg:top-12 md:top-12 top-24 text-xl left-auto right-auto font-bold italic text-white transition-opacity duration-300'>
            Select a Story
          </div>
        )}
        {isGridVisible && (
          <div className='fixed lg:w-full md:w-[600px] w-[450px] max-w-[800px] z-20 transform lg:top-[15%] top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:left-auto lg:translate-x-4 lg:translate-y-0 grid grid-cols-4 gap-y-6 lg:gap-x-8 gap-x-4'>
            {/* Card 1: Alice's Adventures in Wonderland */}
            <img
              src={alice}
              alt="Alice's Adventures in Wonderland"
              className='object-cover rounded-md cursor-pointer'
              onClick={handleCardClick}
            />

            {/* Card 2: The War of the Worlds */}
            <img
              src={add}
              alt='Add'
              className='object-cover rounded-md cursor-pointer'
            />
            {/* Card 3: Treasure Island */}
            <img
              src={treasure}
              alt='Treasure Island'
              className='object-cover rounded-md cursor-pointer'
              onClick={() => handleStorySelect("treasure")}
            />
            {/* Card 4: The Jungle Book */}
            <img
              src={jungle}
              alt='The Jungle Book'
              className='object-cover rounded-md cursor-pointer'
              onClick={() => handleStorySelect("jungle")}
            />
            {/* Card 5: Peter Pan */}
            <img
              src={peter}
              alt='Peter Pan'
              className='object-cover rounded-md cursor-pointer'
              onClick={() => handleStorySelect("peter")}
            />
            {/* Card 6: The Adventures of Tom Sawyer */}
            <img
              src={sawyer}
              alt='The Adventures of Tom Sawyer'
              className='object-cover rounded-md cursor-pointer'
              onClick={() => handleStorySelect("sawyer")}
            />
            {/* Card 7: The Call of the Wild */}
            <img
              src={wild}
              alt='The Call of the Wild'
              className='object-cover rounded-md cursor-pointer'
              onClick={() => handleStorySelect("wild")}
            />
            {/* Card 8: The Swiss Family Robinson */}
            <img
              src={robinson}
              alt='The Swiss Family Robinson'
              className='object-cover rounded-md cursor-pointer'
              onClick={() => handleStorySelect("robinson")}
            />
          </div>
        )}

        {/* Conditionally render the Preview component when showPreview is true */}
        {/* {showPreview && (
              <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex items-center justify-center'>
                <div className='relative bg-gray-900 rounded-lg max-w-4xl w-full p-4 text-white'>
                  <button
                    className='absolute top-4 right-4 text-white text-xl'
                    onClick={closePreview}
                  >
                    &times;
                  </button>
                  <Preview />
                </div>
              </div>
            )} */}

        {/* Navigation and Button */}
        {!isGridVisible && (
          <div className='absolute ml-8 mb-10 flex space-x-80'>
            <button
              onClick={prevBook}
              className=' text-white font-bold py-2 px-4 rounded'
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={nextBook}
              className=' text-white font-bold py-2 px-4 rounded'
            >
              <ChevronRight size={48} />
            </button>
          </div>
        )}

        {!isGridVisible && (
          <button
            onClick={handleStartReading}
            className='lg:opacity-100 opacity-0 relative bg-lavender-blue-700 hover:bg-lavender-blue-800 border border-spacing-1 border-lavender-blue-600 bg-gradient-to-t from-lavender-blue-500 text-sm lg:text-lg text-white font-bold italic bottom-[-30px] ml-8 px-3 lg:px-4 rounded-2xl'
          >
            Quick Play
          </button>
        )}
      </div>

      {/* Conditionally render the Preview component when showPreview is true */}
      {showPreview && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex items-center justify-center'>
          <div className='relative bg-gray-900 rounded-lg w-full p-4 text-white'>
            <button
              className='absolute top-4 right-4 text-white text-xl'
              onClick={closePreview}
            >
              &times;
            </button>
            <Preview />
          </div>
        </div>
      )}

      {/* Right Section - Logo, Upgrade, and Shop */}
      <div className='lg:w-1/4 z-40 flex flex-col items-center lg:items-end justify-between p-4'>
        <div className='hidden lg:flex lg:flex-col items-end mb-4'>
          <h1 className='text-3xl italic font-bold mb-4'>RW/M</h1>
          <button className='flex flex-row border border-spacing-1 border-[#696969] bg-[#0b0c1f] bg-gradient-to-t from-[#193909] rounded-lg shadow-lg font-bold py-2 px-4 mb-4'>
            <div className='text-lg font-semibold italic'>
              Upgrade to Premium
            </div>
          </button>
          <div className='flex flex-row border border-spacing-1 border-[#696969] bg-[#0b0c1f] bg-gradient-to-t from-[#493211] rounded-lg shadow-lg font-bold py-2 px-4 pl-20 mb-4 mt-2.5 text-right'>
            <img src={shop} alt='' className='absolute w-20 right-20 top-32' />
            <p className='italic font-semibold text-lg'>Shop</p>
          </div>
        </div>

        {/* Chapter of the Day Section */}
        <div className='fixed z-50 bottom-4 lg:h-24 lg:w-[410px] left-auto right-auto flex flex-row border border-spacing-1 border-[#696969] bg-[#0b0c1f] bg-gradient-to-t from-[#1f2039] rounded-lg shadow-lg lg:pl-28 p-2 lg:p-4 mb-16 lg:mb-0'>
          <div className='flex flex-col pl-2'>
            <img
              src={book}
              alt=''
              className='lg:opacity-100 opacity-0 fixed w-40 bottom-[-12px] right-[310px]'
            />
            <h3 className='font-bold italic lg:text-lg text-[#e6a33e]'>
              Chapter of the Day
            </h3>
            <p className='text-xs font-bold text-[#696969] mb-2'>
              Discover new adventures daily!
            </p>
          </div>
          <div className='px-2'>
            <button className='bg-lavender-blue-700 hover:bg-lavender-blue-800 border border-spacing-1 border-lavender-blue-600 bg-gradient-to-t from-lavender-blue-500 text-sm lg:text-lg text-white font-bold italic my-3 px-3 lg:px-4 rounded-2xl'>
              Play
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='absolute z-40 bottom-0 left-0 right-0 flex justify-center lg:justify-start gap-4 p-4'>
        {footerItems.map((item, index) => (
          <button
            key={index}
            className='text-gray-400 hover:text-white text-xs flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-110'
          >
            {item.icon}
            <span className='mt-1'>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
