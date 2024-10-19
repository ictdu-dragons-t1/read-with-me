import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const ConfirmExitModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Initialize useNavigate inside the component

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-[#f1e9d1] rounded-lg p-6 shadow-lg'>
        <h2 className='text-lg text-[#654321] font-semibold mb-4'>
          Confirm Exit
        </h2>
        <p className='text-[#2e2e2e] mb-4'>
          Are you sure you want to exit to the home page?
        </p>
        <div className='flex justify-end space-x-4'>
          <button
            className='px-4 py-2 text-white font-semibold rounded-lg bg-[#7a6543] hover:bg-[#654321] transition-all'
            onClick={() => navigate("/")} // Navigate to home on Yes
          >
            Yes
          </button>
          <button
            className='px-4 py-2 text-white font-semibold rounded-lg bg-[#7a6543] hover:bg-[#654321] transition-all'
            onClick={onClose} // Close the modal without navigating
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmExitModal;
