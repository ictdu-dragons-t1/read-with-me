import { useState } from 'react';
import { User, Users, Crosshair, Trophy, ShoppingBag, Menu, X, ChevronLeft, ChevronRight, HelpCircle, Settings, Gift, ShoppingCart } from 'lucide-react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const menuItems = [
    { name: 'Solo', icon: <User size={24} /> },
    { name: 'Team', icon: <Users size={24} /> },
    { name: 'Battle Royale', icon: <Crosshair size={24} /> },
    { name: 'Leaderboard', icon: <Trophy size={24} /> },
    { name: 'Shop', icon: <ShoppingBag size={24} /> }
  ];

  const books = [
    { title: "The Great Adventure", author: "J.R. Tolkien", color: "bg-blue-500" },
    { title: "Mystery Island", author: "Agatha Christie", color: "bg-green-500" },
    { title: "Space Odyssey", author: "Arthur C. Clarke", color: "bg-red-500" },
    { title: "The Time Machine", author: "H.G. Wells", color: "bg-yellow-500" },
    { title: "Brave New World", author: "Aldous Huxley", color: "bg-purple-500" },
  ];

  const footerItems = [
    { name: 'Support', icon: <HelpCircle size={16} /> },
    { name: 'Settings', icon: <Settings size={16} /> },
    { name: 'Gift Cards', icon: <Gift size={16} /> },
    { name: 'Merch', icon: <ShoppingCart size={16} /> },
  ];

  const nextBook = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
  };

  // Function to calculate blur amount based on distance from center
  const calculateBlur = (index) => {
    const distance = Math.abs(index - currentBookIndex);
    const maxBlur = 5; // Maximum blur in pixels
    return Math.min(distance * 2, maxBlur); // Increase blur by 2px per position, up to maxBlur
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-purple-900 text-white overflow-hidden">
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-purple-800">
        <h1 className="text-xl font-bold">GEOGUESSR</h1>
        <button 
          className="text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay with Blur and Fade Effect */}
      <div 
        className={`lg:hidden fixed inset-0 bg-purple-900 bg-opacity-90 z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backdropFilter: isMobileMenuOpen ? 'blur(5px)' : 'none',
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
            <button key={index} className="flex items-center space-x-2 hover:text-yellow-400 text-left p-2 transition-all duration-300 ease-in-out transform hover:scale-110">
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Left Section - Profile and Menu (Desktop) */}
      <div className="hidden lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto">
        {/* Profile Section */}
        <div className="flex items-center mb-4">
          <div className="bg-gray-700 rounded-full p-2 mr-4">
            <User size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">Player123</h2>
            <p className="text-xs">Level 10</p>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button key={index} className="flex items-center space-x-2 hover:text-yellow-400 w-full text-left p-2 transition-all duration-300 ease-in-out transform hover:scale-110 origin-left">
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Middle Section - Book Carousel with Progressive Blur */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="relative w-48 h-64 mb-4">
          {books.map((book, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full ${book.color} rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between p-4`}
              style={{
                transform: `translateX(${(index - currentBookIndex) * 120}%) scale(${index === currentBookIndex ? 1 : 0.8})`,
                opacity: index === currentBookIndex ? 1 : 0.5,
                zIndex: index === currentBookIndex ? 10 : 0,
                filter: `blur(${calculateBlur(index)}px)`, // Apply progressive blur
              }}
            >
              <div>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-sm">{book.author}</p>
              </div>
              {/* Replace with actual link of image */}
              <img src={`/api/placeholder/100/150?text=Book ${index + 1}`} alt={`Cover of ${book.title}`} className="w-24 h-36 object-cover mx-auto" />
            </div>
          ))}
        </div>
        <div className="flex space-x-4">
          <button onClick={prevBook} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextBook} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
            <ChevronRight size={24} />
          </button>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 ease-in-out transform hover:scale-110">
          Start Reading
        </button>
      </div>

      {/* Right Section - Logo, Upgrade, and Shop */}
      <div className="lg:w-1/4 flex flex-col items-center lg:items-end justify-between p-4">
        <div className="hidden lg:flex lg:flex-col items-end mb-4">
          <h1 className="text-3xl font-bold mb-4">RW/M</h1>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">
            Upgrade to Premium
          </button>
          <div className="bg-yellow-400 text-black p-2 rounded text-right">
            <p className="text-xs">Visit the shop for cool items!</p>
          </div>
        </div>
        <div className="bg-blue-500 p-4 rounded w-full lg:w-auto">
          <h3 className="font-bold mb-2 text-center lg:text-left text-sm">Chapter of the Day</h3>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-3 rounded w-full text-sm">
            Play
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center lg:justify-start space-x-4 p-2 bg-purple-900">
        {footerItems.map((item, index) => (
          <button key={index} className="text-gray-400 hover:text-white text-xs flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-110">
            {item.icon}
            <span className="mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
