import {useEffect, useState} from "react";
import { User, Users, Crosshair, Trophy, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";

import Registration from "../components/Registration";
import TeamPlay from "../layouts/teamplay/TeamPlay";
import Footer from "../components/Footer";
import Chapter from "../components/Chapter";
import Subscription from "../components/Subscription";
import BookNavigation from "../components/BookNavigation";
import BookDisplay from "../components/BookDisplay";

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


const GameMenu = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [currentBookIndex, setCurrentBookIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);
	const [isGenreSelect, setIsGenreSelect] = useState(false);
	const [isShowingGenre, setIsShowingGenre] = useState(false);
	const [selectedComponent, setSelectedComponent] = useState(null);

	const onChange = (item) => {
		setSelectedComponent(item.component);
	}
	const menuItems = [
		{name: "Solo Play", icon: <User size={24}/>},
		{name: "Team Play", icon: <Users size={24}/>, component: <TeamPlay/> },
		{name: "Battle Royale", icon: <Crosshair size={24}/>},
		{name: "Leaderboard", icon: <Trophy size={24}/>},
		{name: "Shop", icon: <ShoppingBag size={24}/>},
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

	const nextBook = () => {
		setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
	};

	const prevBook = () => {
		setCurrentBookIndex(
			(prevIndex) => (prevIndex - 1 + books.length) % books.length
		);
	};

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
	}, []);


	return (
		<div className='flex flex-col lg:flex-row h-screen w-screen bg-purple-900 text-white bg-[#0f1433] overflow-hidden'>
			<Registration/>
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
					{isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
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
					<X size={24}/>
				</button>
				<div className='space-y-4'>
					{menuItems.map((item, index) => (
						<button
							onClick={item.onClick}
							key={index}
							className='flex items-center italic font-semibold space-x-2 hover:text-[#e6a33e] text-left p-2 transition-all duration-300 ease-in-out transform hover:scale-110'
						>
							{item.icon}`
							<span>{item.name}</span>
						</button>
					))}
				</div>
			</div>

			{/* Left Section - Profile and Menu (Desktop) */}
			<div
				className='z-20 hidden w-full lg:flex lg:w-1/4 flex-col p-4 overflow-y-auto bg-gradient-to-r from-black ${isGenreSelect ? "lg:w-1/6" : ""}'>
				{/* Profile Section */}
				<div className='p-4 rounded-lg flex items-center justify-between w-full'>
					<img src={profile} alt='' className='absolute w-10 top-6'/>
					<div className='bg-gray-700 rounded-full p-1 mr-4'>
						<div className='w-12 h-12 bg-gray-500 rounded-full'/>
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
									style={{width: "40%"}}
								></div>
							</div>
						</div>
						{/* Currency Section */}
						<div className='flex items-center space-x-2 ml-auto'>
							<div className='flex items-center'>
								<div className='w-4 h-4 bg-purple-600 rounded-full'/>
								<span className='text-white text-xs ml-1'>0</span>
							</div>

							{/* Dropdown Arrow */}
							<ChevronDown className='text-white' size={18}/>
						</div>
					</div>
				</div>


				{/* Desktop Menu Items */}
				{!isGenreSelect && (
					<div className='fixed z-50 h-5/6 flex flex-col items-center justify-around mt-8 py-32 '>
						{menuItems.map((item, index) => (
							<button
								onClick={() => onChange(item)}
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
			<div className='lg:w-1/2 right-4 mt-6 lg:mt-6 flex flex-col items-center justify-center p-4 relative'>
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
					)}
				</div>

				{selectedComponent}
				<BookDisplay books={books} currentBookIndex={currentBookIndex} isFading={isFading} isGenreSelect={isGenreSelect}/>
				<BookNavigation nextBook={() => nextBook()} prevBook={() => prevBook()} handleStart={() => handleStartReading()}/>
			</div>

			{/* Right Section - Logo, Upgrade, and Shop */}
			<div className='lg:w-1/4 z-50 flex flex-col items-center lg:items-end justify-between p-4'>
				<Subscription/>
				<Chapter/>
			</div>
			<Footer/>
		</div>
	);
};

export default GameMenu;
