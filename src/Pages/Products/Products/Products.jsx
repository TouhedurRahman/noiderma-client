import { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BuyNowSingleProductModal from '../../../Components/BuyNowSingleProductModal/BuyNowSingleProductModal';
import OnlyRating from '../../../Components/OnlyRating/OnlyRating';
import useProducts from '../../../Hooks/useProducts';

const Products = () => {
    const [products, loading] = useProducts();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expanded, setExpanded] = useState({});

    const formatCategoryName = (category) => {
        const formatted = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return formatted;
    };

    const handleBuy = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div>
            {/* Banner Section */}
            {/* <div className="w-full h-[400px] bg-cover bg-center relative flex items-center justify-center opacity-100" style={{ backgroundImage: "url('https://i.ibb.co.com/pBdT3rGc/our-products-bg-6.jpg')" }}>
                <h1 className="text-4xl md:text-6xl font-bold text-white">Our Products</h1>
            </div> */}
            <div
                className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen bg-cover bg-center"
                style={{ backgroundImage: 'url("https://i.ibb.co.com/cKQZ603v/our-products-banner.jpg")' }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-start text-black">
                    <div className="text-left ml-4 md:ml-32">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">Natural Ingradiants to<br />Glowing Skin</h1>
                        {/* <p className="text-base md:text-lg">Stand For All Types of Skin</p> */}
                        {/* <a
                        href="/contact"
                        className="mt-4 inline-block bg-[#014B88] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
                    >
                        Get in Touch
                    </a> */}
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="py-10 px-5 md:px-20">
                <div className="text-lg breadcrumbs mb-5 text-gray-500 flex items-center">
                    <Link to="/">Home</Link>
                    <MdOutlineKeyboardArrowRight />
                    <span>Products</span>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((product) => {
                            const words = product.typesDescription.split(" ");
                            const shortText = words.slice(0, 16).join(" ");
                            const isExpanded = expanded[product._id];

                            return (
                                <Link
                                    to={`/products/${product._id}`}
                                    key={product._id}
                                    className="group relative shadow-md rounded-lg overflow-hidden bg-white"
                                >
                                    <div className="relative w-full flex items-center justify-center bg-gray-50">
                                        {/* First image */}
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-auto object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                        />
                                        {/* Second image */}
                                        <img
                                            src={product.cardImage || product.image}
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-auto object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                        />
                                    </div>

                                    {/* HR lines */}
                                    <div className="flex justify-between items-center">
                                        <hr className="w-[50%] border-2 border-gray-300 group-hover:border-gray-100 me-1" />
                                        <hr className="w-[50%] border-2 border-gray-100 group-hover:border-gray-300 me-1" />
                                    </div>

                                    <div className="p-5">
                                        <h2 className="text-2xl font-bold text-gray-800">{product.name.toUpperCase()}</h2>
                                        <p className="mt-2 text-gray-600">{formatCategoryName(product.category)}</p>
                                        <div className='flex justify-start my-3'>
                                            <OnlyRating product={product} />
                                        </div>

                                        <p className="text-sm text-gray-600 mt-2 text-justify">
                                            {isExpanded ? product.typesDescription : `${shortText}${words.length > 16 ? "..." : ""}`}{" "}
                                            {words.length > 16 && (
                                                <span
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleExpand(product._id);
                                                    }}
                                                    className="text-blue-500 cursor-pointer font-bold hover:underline"
                                                >
                                                    {isExpanded ? "less" : "more"}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                    <Link
                                        onClick={() => handleBuy(product)}
                                        className="w-full btn bg-gradient-to-r from-black via-gray-700 to-black text-white px-4 py-2 rounded-t-none rounded-b-lg"
                                    >
                                        Buy Now
                                    </Link>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Parallax Section */}
            {/* <div className="h-[400px] bg-fixed bg-cover bg-center relative flex items-center justify-center" style={{ backgroundImage: "url('https://i.ibb.co.com/mChRpkqb/Rejuvenation-Banner.jpg')" }}>
                <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
                    <div className="w-[80%] flex flex-col justify-center items-center space-y-8 text-white">
                        <h1 className="text-5xl font-bold">Skin Rejuvenation with Aromatherapy</h1>
                        <p>
                            Embrace holistic self-care with the nurturing power of natural ingredients for your skin and the soothing essence of essential oils for your mind.
                        </p>
                        <div>
                            <Link
                                to="/contact-us"
                                className="btn border border-black bg-black hover:bg-white text-white hover:text-black  font-bold px-24 py-3 rounded-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
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

export default Products;