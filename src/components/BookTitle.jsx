const BookTitle = ({ isShowingGenre, isGridVisible, books, currentBookIndex, isFading }) => {
  if (isGridVisible || !books.length) return null;

  return (
    <div className="ml-10 text-center">
      {isShowingGenre ? (
        <>
          <h2
            className={`text-xl font-bold italic text-white transition-opacity duration-300 ${!isFading ? "opacity-100" : "opacity-100"}`}
          >
            Select a genre
          </h2>
          <p
            className={`text-lg text-[#e6a33e] italic transition-opacity duration-300 ${!isFading ? "opacity-100" : "opacity-100"}`}
          >
            Choose your journey!
          </p>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default BookTitle;
