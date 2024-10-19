import book from "../assets/images/covers/Book.png";

const Chapter = () => {
	return (
		<div
			className='fixed z-50 bottom-4 lg:h-24 lg:w-[410px] left-auto right-auto flex flex-row border border-spacing-1 border-[#696969] bg-[#0b0c1f] bg-gradient-to-t from-[#1f2039] rounded-lg shadow-lg lg:pl-28 p-2 lg:p-4 mb-16 lg:mb-0'>
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
				<button
					className='bg-lavender-blue-700 hover:bg-lavender-blue-800 border border-spacing-1 border-lavender-blue-600 bg-gradient-to-t from-lavender-blue-500 text-sm lg:text-lg text-white font-bold italic my-3 px-3 lg:px-4 rounded-2xl'>
					Play
				</button>
			</div>
		</div>
	);
}

export default Chapter;