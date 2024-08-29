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
                <h2 className='text-lg font-bold mt-10 mb-4'>Categories</h2>
                <ul className='space-y-2'>
                    <li>
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`category-button ${selectedCategory === 'all' ? 'selected' : ''}`}
                        >
                            {formatCategoryName('all')}
                        </button>
                    </li>
                    {categories.map(category => (
                        <li key={category}>
                            <button
                                onClick={() => setSelectedCategory(category)}
                                className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
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
                                                    <div className='h-64'>
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className='h-full w-full rounded-t-lg'
                                                        />
                                                    </div>
                                                    <div className='content flex flex-col justify-center items-center'>
                                                        <p className='text-xl text-[#0049A5] mb-10'>
                                                            {product.name}
                                                        </p>
                                                        <p className='text-sm text-[#0049A5]'>
                                                            ৳ 200/-
                                                        </p>
                                                        <div className="flex justify-center items-center space-x-3">
                                                            <Rating
                                                                style={{ maxWidth: 80 }} // Adjusts star size
                                                                value={product.rating}
                                                                readOnly
                                                                className="flex"
                                                            />
                                                            <p>
                                                                {product.rating} ({product.rater})
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='bg-black text-white text-center py-2'>
                                                        <Link to={product.link || '/'}
                                                            className="w-full h-full"
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