import React, { useState } from 'react';

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
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Select Product</h2>
                <select
                    className="mb-4 p-2 border rounded"
                    value={selectedProduct._id}
                    onChange={handleChange}
                >
                    {products.map(product => (
                        <option key={product._id} value={product._id}>
                            {product.name}
                        </option>
                    ))}
                </select>
                <div>
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="mb-4" />
                    <p>Category: {selectedProduct.category}</p>
                    <p>Rating: {selectedProduct.rating} ({selectedProduct.rater} ratings)</p>
                    <p>Pharmacies:</p>
                    <ul>
                        {selectedProduct.pharmacy.map(pharmacy => (
                            <li key={pharmacy._id} className="flex items-center mb-2">
                                <img src={pharmacy.pharmacyLogo} alt={pharmacy.pharmacyName} className="w-8 h-8 mr-2" />
                                {pharmacy.pharmacyName}
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    className="mt-4 px-4 py-2 bg-black border border-black text-white hover:bg-white hover:text-black rounded-lg"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BuyNowModal;