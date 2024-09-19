import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ReactRating from 'react-rating';
import { useForm } from 'react-hook-form';
import 'font-awesome/css/font-awesome.min.css'; // Ensure FontAwesome CSS is imported

const RatingsReviewModal = ({ show, onClose, products, selectedProduct: initialSelectedProduct }) => {
    const [selectedProduct, setSelectedProduct] = useState(initialSelectedProduct || products[0]);
    const [ratingLabel, setRatingLabel] = useState('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

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

    const handleRatingChange = (value) => {
        setRatingLabel(getRatingLabel(value));
    };

    const getRatingLabel = (rating) => {
        switch (rating) {
            case 1: return 'Poor';
            case 2: return 'Fair';
            case 3: return 'Average';
            case 4: return 'Good';
            case 5: return 'Excellent';
            default: return '';
        }
    };

    const onSubmit = (data) => {
        console.log(data); // Handle form submission
        reset();
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 h-96 my-auto bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-xl w-full overflow-y-auto max-h-screen">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Write a Review</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-600 transition-colors">
                        <FaTimes size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Select Product */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Product</label>
                        <select
                            value={selectedProduct?._id || ""}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {products.map(product => (
                                <option key={product._id} value={product._id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Overall Rating with Star Hover */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Overall Rating</label>
                        <div className="flex items-center mt-2">
                            <ReactRating
                                initialRating={0}
                                emptySymbol="fa fa-star-o text-gray-300 text-xl"
                                fullSymbol="fa fa-star text-yellow-500 text-xl"
                                onChange={handleRatingChange}
                                onHover={handleRatingChange}
                                fractions={2}
                                className="text-xl"
                            />
                            <span className="ml-4 text-lg font-semibold">{ratingLabel}</span>
                        </div>
                    </div>

                    {/* Review Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Review Title</label>
                        <input
                            type="text"
                            {...register('title', { required: 'Review title is required' })}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                    </div>

                    {/* Review Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Review Description</label>
                        <textarea
                            {...register('description', { required: 'Review description is required' })}
                            rows="4"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Upload Review Photo */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Review Photo</label>
                        <input
                            type="file"
                            {...register('photo')}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Nickname */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nickname</label>
                        <input
                            type="text"
                            {...register('nickname', { required: 'Nickname is required' })}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.nickname && <p className="text-red-500 text-xs mt-1">{errors.nickname.message}</p>}
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            {...register('location')}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            {...register('mobile', { required: 'Mobile number is required' })}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                    </div>

                    {/* Agreement */}
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="agree"
                                type="checkbox"
                                {...register('agree', { required: 'You must agree to the terms' })}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-2 text-sm">
                            <label htmlFor="agree" className="font-medium text-gray-700">I agree to the terms and conditions</label>
                        </div>
                    </div>
                    {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree.message}</p>}

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RatingsReviewModal;