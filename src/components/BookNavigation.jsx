import { ChevronLeft, ChevronRight } from "lucide-react";

const BookNavigation = ({
  isStarted,
  isGridVisible,
  prevBook,
  nextBook,
  handleStart,
  handleCancel,
}) => {
  if (isGridVisible) return null;

  return (
    <>
      <div className="absolute ml-8 mb-10 flex space-x-80">
        <button
          onClick={prevBook}
          className=" text-white font-bold py-2 px-4 rounded"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextBook}
          className=" text-white font-bold py-2 px-4 rounded"
        >
          <ChevronRight size={48} />
        </button>
      </div>

      <button
        onClick={isStarted ? handleCancel : handleStart}
        className="lg:opacity-100 opacity-0 relative bg-lavender-blue-700 hover:bg-lavender-blue-800 border border-spacing-1 border-lavender-blue-600 bg-gradient-to-t from-lavender-blue-500 text-sm lg:text-lg text-white font-bold italic bottom-[-30px] ml-5 px-3 lg:px-4 rounded-2xl"
      >
        {isStarted ? "Cancel" : "Get Started"}
      </button>
    </>
  );
};

export default BookNavigation;
