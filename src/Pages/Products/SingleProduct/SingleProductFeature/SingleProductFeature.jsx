import React from 'react';
import { Link } from 'react-router-dom';

const SingleProductFeature = ({ product }) => {
    return (
        <div className='mt-20 bg-[#E6E6E6] py-10'>
            <div className='w-full md:w-[85%] mx-auto flex justify-between items-center'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-start space-y-7'>
                    <p
                        className="mb-3 font-bold text-3xl"
                        style={{ letterSpacing: '0.2em' }}
                    >
                        HOW TO USE
                    </p>
                    <p className='text-sm text-justify'>
                        {product.use}
                    </p>
                    <Link
                        className="W-24 btn py-2 px-6 md:py-3 md:px-10 bg-gradient-to-r from-black via-gray-500 to-black text-white rounded-full"
                        style={{ letterSpacing: "0.1em" }}
                    >
                        GET SKINCARE TIPS
                    </Link>
                </div>
                <div className='w-full md:w-1/2 px-10 flex justify-center items-center'>
                    <img
                        src="https://via.placeholder.com/150?text=Use"
                        alt="Loading..."
                        className='w-full h-96 rounded-[25px]'
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleProductFeature;