import React from 'react';
import { FaTimes } from 'react-icons/fa';

const PhotoModal = ({ isOpen, photo, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
            <div className="relative max-w-full max-h-full flex items-center justify-center">
                {/* Photo Container with Close Button */}
                <div className="relative">
                    {/* Close Button */}
                    {/* <button
                        className="absolute top-2 right-2 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-all duration-200"
                        onClick={onClose}
                        aria-label="Close Modal"
                    >
                        &times;
                    </button> */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-600 transition-colors"
                        aria-label="Close Modal"
                    >
                        <FaTimes size={20} />
                    </button>

                    {/* Image */}
                    <img
                        src={photo}
                        alt="Full view"
                        className="w-full h-full object-contain rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;