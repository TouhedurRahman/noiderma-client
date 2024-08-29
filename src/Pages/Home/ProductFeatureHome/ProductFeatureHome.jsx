import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ProductFeatureHome = () => {
    const products = [
        {
            _id: 1,
            name: "Healing Ointment",
            image: "https://via.placeholder.com/150?text=Product",
            rating: 3.7,
            rater: 55,
            link: ""
        }
    ]

    return (
        <div>
            <div className='mt-20'>
                <div className='relative flex items-center'>
                    <div className='bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] w-[75%] rounded-r-[25px] p-40 ps-20 space-y-10 z-10'>
                        <p
                            className='text-black text-4xl font-bold pr-36'
                            style={{ letterSpacing: '0.2em' }}
                        >
                            HEALING OINTMENT FOR DRY, CRACKED SKIN
                        </p>
                        <p className='text-black pr-48'>
                            Noiderma Healing Ointment is specially formulated with a high concentration of the active ingredient, petrolatum, to quickly protect and heal dry, irritated, sensitive skin.
                        </p>
                        <Link
                            className="btn py-3 px-10 bg-white hover:bg-black border-2 border-[black] text-black hover:text-white rounded-full"
                            style={{ letterSpacing: "0.1em" }}
                        >
                            MORE ON DRY SCREEN
                        </Link>
                    </div>
                    <div className='absolute right-0 flex justify-end items-center me-24 z-20'>
                        <img
                            src="https://via.placeholder.com/150?text=Dermatologist+Recommended"
                            alt="Recommended"
                            className='w-[600px] h-[350px] rounded-[25px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatureHome;