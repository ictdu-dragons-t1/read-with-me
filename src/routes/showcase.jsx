import BookItem from "../components/BookItem";

const BookShowcase = () => {
  const books = [
    "https://i.imgur.com/SPv9Rg7.png",
    "https://i.imgur.com/nwzWCgm.png",
    "https://i.imgur.com/YdfU4Bw.png",
    "https://i.imgur.com/UIPQEwk.png",
    "https://i.imgur.com/sVNy4Ct.png",
  ];

  return (
    <div className="flex flex-col h-screen">
      <h2 className="text-2xl font-bold text-center text-white py-4">
        Book Showcase
      </h2>
      <div className="flex-grow overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {books.map((book, index) => (
            <BookItem key={index} imgSrc={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookShowcase;
