import PropTypes from "prop-types";

const BookItem = ({ imgSrc }) => (
  <div className="relative cursor-default p-4 m-0 grid break-inside-avoid">
    <div className="relative">
      <div className="relative">
        <div className="absolute w-[90%] h-[96%] top-[1%] left-4 border border-gray-400 rounded-[2px_6px_6px_2px] bg-white shadow-[10px_40px_40px_-10px_rgba(0,0,0,0.2),inset_-2px_0_0_gray,inset_-3px_0_0_#dbdbdb,inset_-4px_0_0_white,inset_-5px_0_0_#dbdbdb,inset_-6px_0_0_white,inset_-7px_0_0_#dbdbdb,inset_-8px_0_0_white,inset_-9px_0_0_#dbdbdb]"></div>
        <div className="relative rounded-[2px_6px_6px_2px] shadow-[6px_6px_18px_-2px_rgba(0,0,0,0.2),24px_28px_40px_-6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out transform perspective-[2000px] rotate-y-[-15deg] translate-x-[-10px] scale-x-[0.94] cursor-pointer hover:rotate-y-0 hover:translate-x-0 hover:scale-x-100 hover:shadow-[6px_6px_12px_-1px_rgba(0,0,0,0.1),20px_14px_16px_-6px_rgba(0,0,0,0.1)]">
          <img
            src={imgSrc}
            alt="Book cover"
            className="w-full rounded-[2px_6px_6px_2px]"
          />
          <div className="absolute w-5 h-full ml-4 top-0 border-l-2 border-black/10 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 z-10 group-hover:ml-3.5"></div>
          <div className="absolute w-[90%] h-full rounded opacity-10 bg-gradient-to-r from-transparent to-white/20 top-0 right-0 transition-all duration-500 z-[4]"></div>
        </div>
      </div>
    </div>
  </div>
);

export default BookItem;

BookItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
