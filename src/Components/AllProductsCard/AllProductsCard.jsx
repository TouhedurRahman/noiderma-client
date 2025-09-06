import { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import BuyNowSingleProductModal from "../BuyNowSingleProductModal/BuyNowSingleProductModal";
import OnlyRating from "../OnlyRating/OnlyRating";

const AllProducts = () => {
    const [products, loading] = useProducts();
    // const [hovered, setHovered] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (loading) return <p>Loading...</p>;

    const handleBuy = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="pt-20 lg:w-[85%] mx-auto">
            <h2 className="text-xl font-bold text-center mb-6">Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-10 md:mx-0">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="group relative shadow-md rounded-lg overflow-hidden bg-white"
                    >
                        {/* Product Image */}
                        <Link to={`/products/${product._id}`}>
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

                            {/* Product Info */}
                            <div className="p-4">
                                {/* Name */}
                                <h3 className="font-semibold text-base mb-3 text-center">
                                    {product.name}
                                </h3>

                                {/* Rating Row */}
                                <div className="flex justify-center items-center gap-2 mb-3">
                                    <OnlyRating product={product} />
                                    <p className="text-sm font-medium">{product.rating}</p>
                                </div>

                                {/* Net Weight + Price Row */}
                                <div className="flex justify-between items-center">
                                    <span className="bg-black text-white text-xs px-3 py-1 rounded inline-block">
                                        {product.netWeight}
                                    </span>
                                    <p className="text-sm font-semibold">৳ {product.price}/-</p>
                                </div>
                            </div>
                        </Link>

                        {/* Buy Now Button */}
                        <div className="bg-black text-white text-center py-2 cursor-pointer">
                            <div
                                className="w-full h-full"
                                style={{ letterSpacing: "0.1em" }}
                                onClick={() => handleBuy(product)}
                            >
                                BUY NOW
                            </div>
                        </div>
                    </div>
                ))}
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

export default AllProducts;