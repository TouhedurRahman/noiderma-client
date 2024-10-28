import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Rating } from '@smastrom/react-rating';
import useProducts from '../../../Hooks/useProducts';

const Products = () => {
    const [products, loading] = useProducts();

    return (
        <div>
            {/* Banner Section */}
            <div className="w-full h-[400px] bg-cover bg-center relative flex items-center justify-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x400?text=Our+Products')" }}>
                <h1 className="text-4xl md:text-6xl font-bold text-white">Our Products</h1>
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
                        {products.map((product) => (
                            <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
                                <div className="p-5">
                                    <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                                    <p className="mt-2 text-gray-600">{product.category}</p>

                                    <Rating
                                        value={parseFloat(product.overallRating || 0)}
                                        readOnly
                                        style={{ maxWidth: 100 }}
                                        className="flex items-center my-3"
                                    />

                                    <p className="text-sm text-gray-600 mt-2">
                                        {product.typesDescription}
                                    </p>

                                    <div className="mt-4 flex space-x-2">
                                        <Link
                                            to={`/products/${product._id}`}
                                            className="btn bg-gradient-to-r from-black via-gray-700 to-black text-white px-4 py-2 rounded-full"
                                        >
                                            View Details
                                        </Link>
                                        <a
                                            href="#"
                                            className="btn bg-black text-white px-4 py-2 rounded-full"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Parallax Section */}
            <div className="h-[400px] bg-fixed bg-cover bg-center relative flex items-center justify-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x400?text=Contact+Us')" }}>
                <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
                    <Link to="/contact-us" className="text-3xl md:text-5xl font-bold text-white hover:underline">
                        Contact Us for More Information
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;