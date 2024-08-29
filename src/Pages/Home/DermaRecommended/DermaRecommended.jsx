import React from 'react';
import { Link } from 'react-router-dom';

const DermaRecommended = () => {
    return (
        <div className='mt-20'>
            <div className='relative flex items-center'>
                <div className='bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] w-[75%] rounded-r-[25px] p-40 ps-20 space-y-10 z-10'>
                    <p
                        className='text-black text-4xl font-bold'
                        style={{ letterSpacing: '0.2em' }}
                    >
                        DERMATOLOGIST<br />RECOMMENDED
                    </p>
                    <p>
                        Noiderma is a dermatologist recommended sensitive skincare brand. Choose the <br /> skin expert’s choice for your sensitive skin.
                    </p>
                    <Link
                        className="btn py-3 px-10 bg-white hover:bg-[black] border-2 border-[black] text-black hover:text-white rounded-full"
                        style={{ letterSpacing: "0.1em" }}
                    >
                        FIND OUT MORE
                    </Link>
                </div>
                <div className='absolute right-0 flex justify-end items-center me-24 z-20'>
                    <img
                        src="https://via.placeholder.com/150?text=Dermatologist+Recommended"
                        alt="Recommended"
                        className='w-[600px] h-[350px] rounded-lg'
                    />
                </div>
            </div>
        </div>
    );
};

export default DermaRecommended;