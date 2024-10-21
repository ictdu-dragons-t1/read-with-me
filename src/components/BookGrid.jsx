const BookGrid = ({ books, isGridVisible }) => {
  if (!isGridVisible || !books.length) return null;
  
  return (
    <>
      <div className="fixed ml-10 lg:top-12 md:top-12 top-24 text-xl left-auto right-auto font-bold italic text-white transition-opacity duration-300">
        Select a Story
      </div>

      <div className="fixed lg:w-full md:w-[600px] w-[450px] max-w-[800px] z-20 transform lg:top-[15%] top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:left-auto lg:translate-x-4 lg:translate-y-0 grid grid-cols-4 gap-y-6 lg:gap-x-8 gap-x-4">
        {books.map((book, index) => (
          <img
            key={index}
            src={book.coverImageUrl}
            alt={book.title}
            className="object-cover rounded-md cursor-pointer"
          />
        ))}
      </div>
    </>
  );
};

export default BookGrid;
