import React from 'react';
import { Rating } from '@smastrom/react-rating';
import useReviews from '../../Hooks/useReviews';

const OnlyRating = ({ product }) => {
    const [reviews, reviewsLoading] = useReviews();

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

    const totalRaters = filteredReviews.length;

    const totalScore = ratings.reduce((acc, rating) => acc + (rating.stars * rating.count), 0);
    const overallRating = totalRaters > 0 ? (totalScore / totalRaters).toFixed(1) : 0;

    return (
        <div className="flex justify-center items-center space-x-3">
            <Rating
                style={{ maxWidth: 80 }}
                value={overallRating}
                readOnly
                className="flex"
            />
            <p>
                {overallRating} ({totalRaters})
            </p>
        </div>
    );
};

export default OnlyRating;