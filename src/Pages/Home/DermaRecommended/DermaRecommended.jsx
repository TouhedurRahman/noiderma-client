import React from 'react';
import { Link } from 'react-router-dom';

const DermaRecommended = () => {
    return (
        <div className='mt-20'>
            <div className='relative flex items-center'>
                <div className='bg-[#F1F9FC] w-[75%] rounded-r-[25px] p-40 ps-20 space-y-10 z-10'>
                    <p
                        className='text-[#004987] text-4xl font-bold'
                        style={{ letterSpacing: '0.2em' }}
                    >
                        DERMATOLOGIST<br />RECOMMENDED
                    </p>
                    <p>
                        Noiderma is a dermatologist recommended sensitive skincare brand. Choose the <br /> skin expert’s choice for your sensitive skin.
                    </p>
                    <Link
                        className="btn py-3 px-10 bg-white hover:bg-[#38A6C4] border-2 border-[#004987] text-[#004987] hover:text-white rounded-full"
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