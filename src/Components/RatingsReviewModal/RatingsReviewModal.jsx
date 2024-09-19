import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const RatingsReviewModal = ({ show, onClose, products, selectedProduct: initialSelectedProduct }) => {
    const [selectedProduct, setSelectedProduct] = useState(initialSelectedProduct || products[0]);

    useEffect(() => {
        if (initialSelectedProduct) {
            setSelectedProduct(initialSelectedProduct);
        }
    }, [initialSelectedProduct]);

    const handleChange = (event) => {
        const selectedProductId = parseInt(event.target.value, 10);
        const product = products.find(p => p._id === selectedProductId);
        setSelectedProduct(product);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform transition-all duration-300 w-fullS">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">SELECT PRODUCT</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-600 transition-colors">
                        <FaTimes size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RatingsReviewModal;