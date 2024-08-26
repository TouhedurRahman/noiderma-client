import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';

const CategorizedProductHome = () => {
    const [swiper, setSwiper] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const [products, loading] = useProducts();

    // Ensure products is an array
    const validProducts = Array.isArray(products) ? products : [];

    // Get unique categories from products
    const categories = Array.from(new Set(validProducts.map(product => product.category))) || [];

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'all'
        ? validProducts
        : validProducts.filter(product => product.category === selectedCategory);

    // Format category names for display
    const formatCategoryName = (category) => {
        const formatted = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return selectedCategory === category ? `_ ${formatted}` : formatted;
    };

    return (
        <div className='relative pt-20 flex lg:w-[85%] mx-auto'>
            <div className='w-1/4'>
                <h2 className='text-lg font-bold mb-4'>Categories</h2>
                <ul className='space-y-2'>
                    <li>
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`w-full p-2 text-left ${selectedCategory === 'all' && 'font-bold'}`}
                        >
                            {formatCategoryName('all')}
                        </button>
                    </li>
                    {categories.map(category => (
                        <li key={category}>
                            <button
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full p-2 text-left ${selectedCategory === category && 'font-bold'}`}
                            >
                                {formatCategoryName(category)}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-3/4 relative'>
                {
                    loading
                        ? <p>Loading...</p>
                        : (
                            <div className='relative z-10'>
                                <Swiper
                                    spaceBetween={10}
                                    pagination={{ clickable: true }}
                                    onSwiper={setSwiper}
                                    breakpoints={{
                                        640: { slidesPerView: 1 },
                                        768: { slidesPerView: filteredProducts.length > 1 ? 2 : 1 },
                                        1024: { slidesPerView: filteredProducts.length > 2 ? 4 : filteredProducts.length },
                                    }}
                                >
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map(product => (
                                            <SwiperSlide key={product._id}>
                                                <div>
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
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
                                                        BUY NOW
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    ) : (
                                        <SwiperSlide>
                                            <p>No products available for this category.</p>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default CategorizedProductHome;