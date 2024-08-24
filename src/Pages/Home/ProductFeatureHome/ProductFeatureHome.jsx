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
                    <div className='bg-[#F1F9FC] w-[75%] rounded-r-[25px] p-40 ps-20 space-y-10 z-10'>
                        <p
                            className='text-[#004987] text-4xl font-bold pr-36'
                            style={{ letterSpacing: '0.2em' }}
                        >
                            Healing Ointment for dry, cracked skin
                        </p>
                        <p className='text-[#004987] pr-48'>
                            Cetaphil Healing Ointment is specially formulated with a high concentration of the active ingredient, petrolatum, to quickly protect and heal dry, irritated, sensitive skin.
                        </p>
                        <Link
                            className="btn py-3 px-10 bg-white hover:bg-[#38A6C4] border-2 border-[#004987] text-[#004987] hover:text-white rounded-full"
                            style={{ letterSpacing: "0.1em" }}
                        >
                            MORE ON DRY SCREEN
                        </Link>
                    </div>
                    <div className='absolute right-0 flex justify-end items-center w-[600px] h-[350px] me-24 z-20'>
                        <div>
                            {
                                products.map(product => (
                                    <div>
                                        <img
                                            src={product.image}
                                            alt="Loading..."
                                            className='w-[600px] h-[350px] rounded-[20px]'
                                        />
                                        <p className='text-sm text-[#0049A5] my-5'>
                                            {product.name}
                                        </p>
                                        <div className="flex items-center space-x-3">
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={product.rating}
                                                readOnly
                                                className="flex"
                                            />
                                            <p>
                                                {product.rating} ({product.rater})
                                            </p>
                                        </div>
                                        <Link to={product.link || '/'}
                                            className="w-full btn my-2 px-10 bg-gradient-to-r from-[#004987] to-[#2F97BA] text-white rounded-full hover:from-[#38A6C4] hover:to-[#38A6C4]"
                                            style={{ letterSpacing: "0.1em" }}
                                        >
                                            MORE ON DRY SCREEN
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatureHome;