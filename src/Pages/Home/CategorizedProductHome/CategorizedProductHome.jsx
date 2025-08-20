import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import BuyNowSingleProductModal from '../../../Components/BuyNowSingleProductModal/BuyNowSingleProductModal';
import OnlyRating from '../../../Components/OnlyRating/OnlyRating';
import useProducts from '../../../Hooks/useProducts';
import './CategorizedProductHome.css';

const CategorizedProductHome = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [products, loading] = useProducts();

    const categories = Array.from(new Set(products.map(product => product.category)));

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const formatCategoryName = (category) => {
        const formatted = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return selectedCategory === category ? `_ ${formatted}` : formatted;
    };

    const handleBuy = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className='relative pt-20 flex lg:w-[85%] mx-auto'>
            <div className='w-1/4 hidden md:block'>
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
            <div className='w-full md:w-3/4 relative'>
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
                                                    <Link
                                                        to={`/products/${product._id}`}
                                                    >
                                                        <div className="w-[150px] h-auto flex mx-auto bg-white">
                                                            <img
                                                                src={product.cardImage}
                                                                alt={product.name}
                                                                className=""
                                                            />
                                                        </div>
                                                        <div className='content flex flex-col justify-center items-center'>
                                                            <p className='font-bold mb-10 text-center h-8'>
                                                                {product.name.toUpperCase()}
                                                            </p>
                                                            <p className='text-sm font-bold'>
                                                                ৳ {product.price}/-
                                                            </p>
                                                            <OnlyRating
                                                                product={product}
                                                            />
                                                            {/* <div className="flex justify-center items-center space-x-3">
                                                                <Rating
                                                                    style={{ maxWidth: 80 }}
                                                                    value={product.rating}
                                                                    readOnly
                                                                    className="flex"
                                                                />
                                                                <p>
                                                                    {product.rating} ({product.rater})
                                                                </p>
                                                            </div> */}
                                                        </div>
                                                    </Link>
                                                    {/* <Link to={product.link || '/'}> */}
                                                    <div
                                                        className='bg-black text-white text-center py-2 cursor-pointer'
                                                    >
                                                        <div
                                                            className="w-full h-full"
                                                            style={{ letterSpacing: "0.1em" }}
                                                            onClick={() => handleBuy(product)}
                                                        >
                                                            BUY NOW
                                                        </div>
                                                    </div>
                                                    {/* </Link> */}
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
        </div>
    );
};

export default CategorizedProductHome;