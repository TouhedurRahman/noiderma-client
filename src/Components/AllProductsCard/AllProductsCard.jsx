import { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import BuyNowSingleProductModal from "../BuyNowSingleProductModal/BuyNowSingleProductModal";
import OnlyRating from "../OnlyRating/OnlyRating";

const AllProducts = () => {
    const [products, loading] = useProducts();
    const [hovered, setHovered] = useState(null);
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="group relative shadow-md rounded-lg overflow-hidden bg-white"
                        onMouseEnter={() => setHovered(product._id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {/* Product Image */}
                        <Link to={`/products/${product._id}`}>
                            <div className="relative w-full h-56 flex items-center justify-center bg-gray-50">
                                <img
                                    src={
                                        hovered === product._id
                                            ? product.cardImage || product.cardImage
                                            : product.image
                                    }
                                    alt={product.name}
                                    className="object-contain max-h-full transition-opacity duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="p-4 flex flex-col items-center text-center">
                                {/* Name */}
                                <h3 className="font-semibold text-base mb-2 line-clamp-1">
                                    {product.name}
                                </h3>

                                {/* Rating */}
                                <OnlyRating product={product} />

                                {/* Net Weight */}
                                <p className="text-sm text-gray-600 mt-2">
                                    Net Weight:{" "}
                                    <span className="font-medium">{product.netWeight}</span>
                                </p>
                            </div>
                        </Link>
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