import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import './CategorizedProductHome.css';

const CategorizedProductHome = () => {
    const [swiper, setSwiper] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const [products, loading] = useProducts();

    // Get unique categories from products
    const categories = Array.from(new Set(products.map(product => product.category)));

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

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
                            <div className='relative z-10 categorized-swiper'>
                                <Swiper
                                    spaceBetween={2}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true, el: '.custom-scrollbar' }}
                                    onSwiper={setSwiper}
                                    breakpoints={{
                                        640: { slidesPerView: 1, spaceBetween: 20 },
                                        768: { slidesPerView: filteredProducts.length > 1 ? 2 : 1, spaceBetween: 20 },
                                        1024: { slidesPerView: filteredProducts.length > 2 ? 4 : filteredProducts.length, spaceBetween: 30 },
                                    }}
                                >
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map(product => (
                                            <SwiperSlide
                                                key={product._id}
                                                className={`relative py-10 px-2 transition-transform duration-300 ease-in-out ${hoveredProduct && hoveredProduct !== product._id ? 'filter blur-sm' : ''}`}
                                                onMouseEnter={() => setHoveredProduct(product._id)}
                                                onMouseLeave={() => setHoveredProduct(null)}
                                            >
                                                <div className={`categorized-product-card ${hoveredProduct === product._id ? 'scale-110' : ''} shadow-lg rounded-lg overflow-hidden`}>
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className='rounded-t-lg'
                                                    />
                                                    <div className='content'>
                                                        <p className='text-sm text-[#0049A5] mb-2'>
                                                            {product.name}
                                                        </p>
                                                        <p className='text-xs text-gray-600 mb-4'>
                                                            {product.description}
                                                        </p>
                                                        <div className="flex items-center space-x-3 mb-4">
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
                                                            className="w-full btn px-10 bg-gradient-to-r from-[#004987] to-[#2F97BA] text-white rounded-full hover:from-[#38A6C4] hover:to-[#38A6C4]"
                                                            style={{ letterSpacing: "0.1em" }}
                                                        >
                                                            BUY NOW
                                                        </Link>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    ) : (
                                        <SwiperSlide>
                                            <p>No products available for this category.</p>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                                {/* Custom Scrollbar */}
                                <div className="custom-scrollbar swiper-scrollbar"></div>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default CategorizedProductHome;