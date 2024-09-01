import React from 'react';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css';

const ProductFeatureHome = () => {
    return (
        <div>
            <div className='mt-20'>
                <div className='relative flex items-center justify-end'>
                    <div className='absolute left-0 flex justify-start items-center ms-24 z-20'>
                        <img
                            src="https://via.placeholder.com/150?text=Dermatologist+Recommended"
                            alt="Recommended"
                            className='w-[600px] h-[350px] rounded-[25px]'
                        />
                    </div>
                    <div className='bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] w-[75%] rounded-l-[25px] p-40 pe-20 space-y-10 z-10 text-right'>
                        <p
                            className='text-black text-4xl font-bold pl-52'
                            style={{ letterSpacing: '0.2em' }}
                        >
                            HEALING OINTMENT FOR DRY, CRACKED SKIN
                        </p>
                        <p className='text-black pl-48'>
                            Noiderma Healing Ointment is specially formulated with a high concentration of the active ingredient, petrolatum, to quickly protect and heal dry, irritated, sensitive skin.
                        </p>
                        <Link
                            className="btn py-3 px-10 bg-white hover:bg-black border-2 border-[black] text-black hover:text-white rounded-full"
                            style={{ letterSpacing: "0.1em" }}
                        >
                            MORE ON DRY SCREEN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatureHome;