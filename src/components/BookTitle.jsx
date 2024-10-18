const BookTitle = ({ isShowingGenre, books, currentBookIndex, isFading }) => {
	if (!books.length) return null;

	return (
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
					</h2>
					<p
						className={`text-lg text-[#e6a33e] italic transition-opacity duration-300 ${!isFading ? "opacity-100" : "opacity-100"}`}
					>
						{books[currentBookIndex].genreType}{" "}
					</p>
				</>
			)}
		</div>
	)
}

export default BookTitle;