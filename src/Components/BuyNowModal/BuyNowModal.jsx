import React, { useState } from 'react';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';

const BuyNowModal = ({ show, onClose, products }) => {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const handleChange = (event) => {
        const selectedProductId = parseInt(event.target.value, 10);
        const product = products.find(p => p._id === selectedProductId);
        setSelectedProduct(product);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300">
                <div className='flex justify-end items-center space-x-4 mb-4'>
                    <h2 className="text-2xl font-bold text-gray-800">SELECT PRODUCT</h2>
                    <select
                        className="p-2 w-72 border-2 border-gray-700 rounded text-gray-700 focus:outline-none cursor-pointer"
                        value={selectedProduct._id}
                        onChange={handleChange}
                    >
                        {products.map(product => (
                            <option key={product._id} value={product._id}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-600 transition-colors">
                        <FaTimes size={20} />
                    </button>
                </div>
                <div className='flex justify-between items-start space-x-6'>
                    <div className='flex flex-col justify-start items-center'>
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="mb-4 w-72 h-84 object-cover rounded-lg shadow-md"
                        />
                        <p className="text-xl font-semibold text-gray-800">{selectedProduct.name}</p>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full bg-white border-collapse">
                            <caption className="text-lg font-medium text-gray-700 mb-4">Available at</caption>
                            <tbody>
                                {selectedProduct.pharmacy.map(pharmacy => (
                                    <tr key={pharmacy._id} className="border-b border-gray-200">
                                        <td className="px-4 py-2 flex items-center space-x-3">
                                            <img
                                                src={pharmacy.pharmacyLogo}
                                                alt={pharmacy.pharmacyName}
                                                className="w-10 h-10 object-cover rounded-full shadow-sm"
                                            />
                                            <span className="text-gray-800">{pharmacy.pharmacyName}</span>
                                        </td>
                                        <td className="px-4 py-2">
                                            {pharmacy.stock ? (
                                                <span className="text-green-500 font-bold">✓ In Stock</span>
                                            ) : (
                                                <span className="text-red-500 font-bold">✘ Out of Stock</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                            <button
                                                className={`px-4 py-2 text-white font-semibold rounded-full transition-colors ${pharmacy.stock ? 'border border-black bg-black hover:bg-white text-white hover:text-black' : 'bg-gray-400 cursor-not-allowed'
                                                    }`}
                                                disabled={!pharmacy.stock}
                                            >
                                                <FaShoppingCart className="inline-block mr-2" />
                                                Buy Now
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <button
                    className="mt-6 px-4 py-2 bg-yellow-500 border border-yellow-500 text-white hover:bg-yellow-600 rounded-lg shadow-lg transition-all duration-300"
                    onClick={onClose}
                >
                    Close
                </button> */}
            </div>
        </div>
    );
};

export default BuyNowModal;