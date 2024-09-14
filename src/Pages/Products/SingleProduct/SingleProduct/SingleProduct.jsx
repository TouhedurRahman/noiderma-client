import React from 'react';
import useProducts from '../../../../Hooks/useProducts';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Rating } from '@smastrom/react-rating';
import ShareOnSocialMedia from '../../../../Components/ShareOnSocialMedia/ShareOnSocialMedia';
import { PiMapPinLineBold } from 'react-icons/pi';
import HowToUse from '../HowToUse/HowToUse';
import Feature from '../Feature/Feature';
import Ingrediants from '../Ingrediants/Ingrediants';
import RatingReview from '../RatingReview/RatingReview';

const SingleProduct = () => {
    const [products, loading] = useProducts();
    const { id } = useParams();
    const product = products.find(product => product._id == id);

    const url = location.pathname;

    return (
        <div className='my-20'>
            {
                loading
                    ?
                    <>
                        <p>
                            Loading...
                        </p>
                    </>
                    :
                    <>
                        <p className='w-[93%] mx-auto flex items-center space-x-4'>
                            Home <MdOutlineKeyboardArrowRight />
                            Product
                        </p>
                        <div className='w-[93%] md:w-[85%] mx-auto mt-5 flex flex-col md:flex-row md:justify-between items-start space-y-6'>
                            <div
                                className='w-full md:w-1/2 px-10 flex justify-center items-center'
                            >
                                <img
                                    src={product.image}
                                    alt="Loading..."
                                    className='w-full h-96 rounded-lg'
                                />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <p
                                    style={{ letterSpacing: "0.2em" }}
                                    className='text-2xl md:text-4xl font-bold'
                                >
                                    {product.name.toUpperCase()}
                                </p>
                                <div className="mt-10 flex justify-start items-center space-x-3">
                                    <Rating
                                        style={{ maxWidth: 80 }}
                                        value={product.rating}
                                        readOnly
                                        className="flex"
                                    />
                                    <p>
                                        {product.rating} ({product.rater})
                                    </p>
                                    <p className='hover:link'>
                                        write a review
                                    </p>
                                </div>
                                <div>
                                    <ShareOnSocialMedia url={url} />
                                </div>
                                <div className='mt-10'>
                                    <p className='text-xl text-gray-500 font-bold'>
                                        Skin type:  All Skin Types
                                    </p>
                                    <p className='text-justify'>
                                        {product?.typesDescription.split('. ').map((line, index) => (
                                            <p key={index} className="list-disc text-justify">
                                                • {line}{index === product.typesDescription.split('. ').length - 1 ? '' : '.'}
                                            </p>
                                        ))}
                                    </p>
                                </div>
                                <div className='mt-10 flex space-x-3'>
                                    <Link
                                        className="btn py-2 px-6 md:py-3 md:px-10 bg-gradient-to-r from-black via-gray-500 to-black text-white rounded-full"
                                        style={{ letterSpacing: "0.1em" }}
                                    >
                                        BUY NOW
                                    </Link>
                                    <Link
                                        className="btn text-sm py-2 px-6 md:py-3 md:px-10 bg-white hover:bg-[black] border-2 border-[black] text-black hover:text-white rounded-full"
                                        style={{ letterSpacing: "0.1em" }}
                                    >
                                        <PiMapPinLineBold /> FIND IN STORE
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <HowToUse
                            product={product}
                        />
                        <Feature
                            product={product}
                        />
                        <Ingrediants
                            product={product}
                        />
                        <RatingReview
                            product={product}
                        />
                    </>
            }
        </div >
    );
};

export default SingleProduct;