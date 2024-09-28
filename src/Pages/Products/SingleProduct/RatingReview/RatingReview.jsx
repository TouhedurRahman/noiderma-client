import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import RatingsReviewModal from '../../../../Components/RatingsReviewModal/RatingsReviewModal';
import useReviews from '../../../../Hooks/useReviews';

const RatingReview = ({ product, loading }) => {
    const [reviews, reviewsloading] = useReviews();
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const url = location.pathname;

    const filteredReviews = reviews.filter(review => review.pid === product._id);

    const ratings = [
        { stars: 5, count: 0 },
        { stars: 4, count: 0 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
    ];

    filteredReviews.forEach(item => {
        const rating = item.rating;
        const ratingObj = ratings.find(r => r.stars === rating);
        if (ratingObj) {
            ratingObj.count += 1;
        }
    });

    // calculate total raters
    const totalRaters = filteredReviews.length;

    // Calculate overall rating
    const totalScore = ratings.reduce((acc, rating) => acc + (rating.stars * rating.count), 0);
    const overallRating = totalRaters > 0 ? (totalScore / totalRaters).toFixed(1) : 0;

    const handleReview = () => {
        setIsReviewModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsReviewModalOpen(false);
        setSelectedProduct(null);
    };

    const totalRatings = ratings.reduce((sum, rating) => sum + rating.count, 0);

    return (
        <>
            <div id='reviews'>
                <div className='mt-20 w-[93%] md:w-[85%] lg:w-[65%] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <p className='text-2xl font-bold'>Reviews</p>
                        <div className='flex justify-end items-center'>
                            <div
                                className='flex justify-center items-center w-48 px-6 py-3 bg-black text-white cursor-pointer'
                                onClick={handleReview}
                            >
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
                                {/*
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
                            */}
                                {/* 
                            {ratings.map((rating, index) => {
                                const percentage = Math.round((rating.count / totalRatings) * 100);
                                return (
                                    <div key={index} className="flex items-center space-x-4 mb-2">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <AiFillStar
                                                    key={starIndex}
                                                    className={starIndex < rating.stars ? "text-yellow-500" : "text-gray-300"}
                                                />
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
                             */}
                                {ratings.map((rating, index) => {
                                    const percentage = Math.round((rating.count / totalRatings) * 100);
                                    return (
                                        <div key={index} className="flex items-center space-x-4 mb-2">
                                            <div className='flex justify-start items-center'>
                                                <span className="w-4 text-gray-700">{rating.stars}</span>
                                                <AiFillStar className="text-gray-600" />
                                            </div>
                                            <div className="w-full bg-gray-300 rounded-[2px] h-4">
                                                <div
                                                    className="bg-yellow-500 h-4 rounded-[2px]"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                            <span className="ml-2 text-gray-700 text-center">{rating.count}</span>
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
                                        value={overallRating}
                                        readOnly
                                        className="flex"
                                    />
                                    <p>{overallRating} ({totalRaters})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            filteredReviews.map(review => (
                                <div className='flex flex-col space-y-4'>
                                    <div className='flex justify-start items-center space-x-3'>
                                        <div className="flex justify-start items-center space-x-10">
                                            <Rating
                                                style={{ maxWidth: 80 }}
                                                value={review.rating}
                                                readOnly
                                                className="flex"
                                            />
                                            <p>{review.rating.toFixed(1)}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <p className='font-bold'>
                                            {review.title}
                                        </p>
                                        <p>
                                            {review.description}
                                        </p>
                                        <div className='flex flex-wrap items-center space-x-2'>
                                            {review.img.map(singleImg => (
                                                <>
                                                    <img src={singleImg} alt="" />
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                    <hr className='my-5' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    loading
                        ?
                        "Loading..."
                        :
                        <RatingsReviewModal
                            show={isReviewModalOpen}
                            onClose={handleCloseModal}
                            // products={products}
                            selectedProduct={product}
                        />
                }
            </div>
        </>
    );
};

export default RatingReview;