import React from 'react';

const Feature = ({ product }) => {
    return (
        <div className='mt-20'>
            <div className='w-full md:w-[85%] mx-auto flex justify-between items-center'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-start space-y-7'>
                    <p
                        className="mb-3 font-bold text-3xl"
                        style={{ letterSpacing: '0.2em' }}
                    >
                        FEATURES
                    </p>
                    <p className='text-sm text-justify'>
                        {product.features}
                    </p>
                </div>
                <div className='w-full md:w-1/2 px-10 flex justify-center items-center'>
                    <img
                        src="https://via.placeholder.com/150?text=Features"
                        alt="Loading..."
                        className='w-full h-96 rounded-[25px]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Feature;