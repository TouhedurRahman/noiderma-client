import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { PiMapPinLineBold } from 'react-icons/pi';
import { Link, useParams } from 'react-router-dom';
import BuyNowSingleProductModal from '../../../../Components/BuyNowSingleProductModal/BuyNowSingleProductModal';
import RatingsReviewModal from '../../../../Components/RatingsReviewModal/RatingsReviewModal';
import ShareOnSocialMedia from '../../../../Components/ShareOnSocialMedia/ShareOnSocialMedia';
import useProducts from '../../../../Hooks/useProducts';
import useReviews from '../../../../Hooks/useReviews';
import Feature from '../Feature/Feature';
import HowToUse from '../HowToUse/HowToUse';
import Ingrediants from '../Ingrediants/Ingrediants';
import ProductScrollNav from '../ProductScrollNav/ProductScrollNav';
import RatingReview from '../RatingReview/RatingReview';

const SingleProduct = () => {
    const [products, loading] = useProducts();
    const [reviews, reviewsloading] = useReviews();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const url = location.pathname;

    const { id } = useParams();
    const product = products.find(product => product._id == id);

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

    const handleBuy = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleReview = (product) => {
        setSelectedProduct(product);
        setIsReviewModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsReviewModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <>
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
                                        className='w-full h-[500px] w-auto  rounded-lg'
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
                                            value={overallRating}
                                            readOnly
                                            className="flex"
                                        />
                                        <p>
                                            {overallRating} ({totalRaters})
                                        </p>
                                        <p
                                            className='hover:link'
                                            onClick={() => handleReview(product)}
                                        >
                                            Write a Review
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
                                            onClick={() => handleBuy(product)}
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
                            <ProductScrollNav />
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
                                loading={loading}
                            />
                        </>
                }
            </div >
            <div>
                {
                    loading
                        ?
                        "Loading..."
                        :
                        <BuyNowSingleProductModal
                            show={isModalOpen}
                            onClose={handleCloseModal}
                            products={products}
                            selectedProduct={selectedProduct}
                        />
                }
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
                            products={products}
                            selectedProduct={selectedProduct}
                        />
                }
            </div>
        </>
    );
};

export default SingleProduct;