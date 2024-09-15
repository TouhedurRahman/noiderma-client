import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const RatingReview = ({ product }) => {
    const ratings = [
        { stars: 5, count: 99 },
        { stars: 4, count: 80 },
        { stars: 3, count: 60 },
        { stars: 2, count: 30 },
        { stars: 1, count: 10 },
    ];

    const totalRatings = ratings.reduce((sum, rating) => sum + rating.count, 0);

    return (
        <div className='mt-20 w-[93%] md:w-[85%] lg:w-[65%] mx-auto'>
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-bold'>Reviews</p>
                <div className='flex justify-end items-center'>
                    <div className='flex justify-center items-center w-48 px-6 py-3 bg-black text-white cursor-pointer'>
                        Write a review
                    </div>
                </div>
            </div>

            <div className='mt-10 flex flex-col md:flex-row justify-start items-start space-y-6 md:space-y-0'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col justify-start items-start space-y-6'>
                        <p>Rating Snapshot</p>
                        <p>Select a row below to filter reviews.</p>
                    </div>
                    <div className="mt-4 w-full md:w-[80%]">
                        {ratings.map((rating, index) => {
                            const percentage = Math.round((rating.count / totalRatings) * 100);
                            return (
                                <div key={index} className="flex items-center space-x-4 mb-2">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(rating.stars)].map((_, starIndex) => (
                                            <AiFillStar key={starIndex} className="text-yellow-500" />
                                        ))}
                                    </div>
                                    <div className="w-full bg-gray-300 rounded-full h-4">
                                        <div
                                            className="bg-yellow-500 h-4 rounded-full"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <span className="ml-2 text-gray-700">{rating.count}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col space-y-6'>
                    <p>Average Customer Ratings</p>
                    <div className='flex justify-start items-center space-x-3'>
                        <p>Overall</p>
                        <div className="flex justify-start items-center space-x-10">
                            <Rating
                                style={{ maxWidth: 80 }}
                                value={product.rating}
                                readOnly
                                className="flex"
                            />
                            <p>{product.rating.toFixed(1)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingReview;