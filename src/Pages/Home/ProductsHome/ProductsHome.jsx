import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const ProductsHome = () => {
    const [swiper, setSwiper] = useState(null);

    const products = [
        {
            _id: 1,
            name: "Healing Ointment",
            image: "https://via.placeholder.com/150?text=Product",
            rating: 3.4,
            rater: 55,
            link: ""
        },
        {
            _id: 2,
            name: "Healing Ointment",
            image: "https://via.placeholder.com/150?text=Product",
            rating: 4.8,
            rater: 1000,
            link: ""
        },
        {
            _id: 3,
            name: "Healing Ointment",
            image: "https://via.placeholder.com/150?text=Product",
            rating: 4.2,
            rater: 555,
            link: ""
        },
        {
            _id: 4,
            name: "Healing Ointment",
            image: "https://via.placeholder.com/150?text=Product",
            rating: 3.1,
            rater: 205,
            link: ""
        },
        {
            _id: 5,
            name: "Healing Ointment",
            image: "https://via.placeholder.com/150?text=Product",
            rating: 3.8,
            rater: 55,
            link: ""
        },
        {
            _id: 6,
            name: "Healing Ointment",
            image: "https://via.placeholder.com/150?text=Product",
            rating: 2.5,
            rater: 305,
            link: ""
        },
        {
            _id: 7,
            name: "Healing Ointment",
            image: "https://via.placeholder.com/150?text=Product",
            rating: 5,
            rater: 5005,
            link: ""
        },
    ];

    const goNext = () => {
        if (swiper) swiper.slideNext();
    };

    const goPrev = () => {
        if (swiper) swiper.slidePrev();
    };

    return (
        <div className='pt-10'>
            <div className='w-[85%] mx-auto'>
                <div className='flex justify-end items-center mb-5'>
                    <button
                        onClick={goPrev}
                        className="mr-4 text-[#080567] border border-[#4077A5] p-5 rounded-full"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={goNext}
                        className="ml-4 text-[#080567] border border-[#4077A5] p-5 rounded-full"
                    >
                        <FaChevronRight />
                    </button>
                </div>
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    // modules={[Pagination]}
                    className="mySwiper"
                    onSwiper={setSwiper}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: products.length > 1 ? 2 : 1,
                        },
                        1024: {
                            slidesPerView: products.length > 2 ? 4 : products.length,
                        },
                    }}
                >
                    <div className='mx-2 mb-10'>
                        {products.map(product => (
                            <SwiperSlide key={product._id}>
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
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default ProductsHome;