import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const DiscoverHome = () => {
    const categories = [
        {
            _id: 1,
            image: "https://via.placeholder.com/150?text=All+Cleansers", // Replace with actual image URL
            title: "All Cleansers"
        },
        {
            _id: 2,
            image: "https://via.placeholder.com/150?text=All+Moisturizers", // Replace with actual image URL
            title: "All Moisturizers"
        },
        {
            _id: 3,
            image: "https://via.placeholder.com/150?text=Face", // Replace with actual image URL
            title: "Face"
        },
        {
            _id: 4,
            image: "https://via.placeholder.com/150?text=Body", // Replace with actual image URL
            title: "Body"
        },
        {
            _id: 5,
            image: "https://via.placeholder.com/150?text=Baby+Skincare", // Replace with actual image URL
            title: "Baby Skincare"
        },
        {
            _id: 6,
            image: "https://via.placeholder.com/150?text=Sunscreens", // Replace with actual image URL
            title: "Sunscreens"
        }
    ];

    return (
        <div>
            <div className='py-20 text-center'>
                <p className='text-4xl text-[#014B88] font-semibold' style={{ letterSpacing: '0.2em' }} >
                    DISCOVER MORE FROM NOIDERMA
                </p>
                <p className='text-sm font-semibold italic text-[#5E6583] pt-3'>
                    Get the best care for your sensitive skin across all our product ranges.
                </p>
            </div>
            <div className='mb-20 flex justify-center items-center'>
                <div className='mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-10'>
                    {
                        categories.map(category => (
                            <div className="relative group">
                                <Link
                                    to={category.link}
                                    className="block p-4 rounded-lg transition-colors duration-300"
                                >
                                    <img
                                        src={category.image}
                                        alt="Loading..."
                                        className='rounded-lg w-full h-auto'
                                    />
                                    <div className='flex justify-between items-center py-3'>
                                        <p className="text-[#014B88] transition-colors duration-300">
                                            {category.title}
                                        </p>
                                        <div className='icon-section bg-[#a1c3e1] text-[#014B88] rounded-full p-2 transition-colors duration-300 group-hover:bg-[#014B88] group-hover:text-white'>
                                            <FaArrowRight className="text-xl" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DiscoverHome;