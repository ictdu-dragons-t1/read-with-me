const BookDisplay = ({books, currentBookIndex, isGenreSelect, isFading}) => {
	if (!books.length) return null;

	return (
		<div className='relative ml-3 w-80 h-96 mb-16'>
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
						className={
							"absolute top-0 left-0 w-full h-full ${book.color} rounded-lg transition-all duration-300 ease-in-out flex flex-col justify-between p-4"
						}
						style={{
							transform: `translateX(${adjustedPosition * 100}%) scale(${adjustedPosition === 0 ? 1 : 0.8})`,
							opacity: isVisible ? 1 : isHidden ? 0 : 0.5,
							zIndex: adjustedPosition === 0 ? 10 : 0,
							filter: `blur(${calculateBlur(adjustedPosition)}px)`,
							position: "absolute", // Static positioning for grid layout
						}}
					>
						{/* Genre Image that stays visible */}
						<img
							src={book.genreImage}
							alt={`Genre of ${book.title}`}
							className={`fixed left-[11px] w-full h-full object-cover rounded-md transition-opacity duration-300 ${isFading ? "opacity-300" : "opacity-0"}`} // Genre image remains fully visible
						/>
						{/* Cover Image that fades out */}
						<img
							src={book.coverImage}
							alt={`Cover of ${book.title}`}
							className={`fixed w-full h-full object-cover rounded-md transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`} // Fade out coverImage
						/>
					</div>
				);
			})}
		</div>
	);
}

export default BookDisplay;