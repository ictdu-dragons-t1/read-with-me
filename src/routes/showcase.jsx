import BookItem from "../components/BookItem";

const BookShowcase = () => {
  const books = [
    "https://i.imgur.com/SPv9Rg7.png",
    "https://i.imgur.com/UIPQEwk.png",
    "https://i.imgur.com/nwzWCgm.png",
    "https://i.imgur.com/YdfU4Bw.png",
    "https://i.imgur.com/sVNy4Ct.png",
  ];

  return (
    <div className="w-full">
      <div className="w-[900px] p-5 mx-auto font-sans text-center text-white">
        Book Showcase
      </div>
      <div className="w-[900px] relative mx-auto columns-3 gap-3 p-1">
        {books.map((book, index) => (
          <BookItem key={index} imgSrc={book} />
        ))}
      </div>
    </div>
  );
};

export default BookShowcase;
