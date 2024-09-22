import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ReactRating from 'react-rating';
import { useForm } from 'react-hook-form';
import 'font-awesome/css/font-awesome.min.css';

const RatingsReviewModal = ({ show, onClose, selectedProduct }) => {
    const [rating, setRating] = useState(0);
    const [ratingLabel, setRatingLabel] = useState('Click to rate!');

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleRatingChange = (value) => {
        setRating(value);
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
        const { title, description, photo, nickname, location, email, mobile, agree } = data;

        console.log('Form Data:', {
            title,
            description,
            rating,
            ratingLabel,
            photo: photo.length > 0 ? photo[0].name : 'No photo uploaded',
            nickname,
            location,
            email,
            mobile,
            agree
        });

        reset();
        onClose();
    };

    if (!show || !selectedProduct) {
        return null;
    }

    return (
        <div className="fixed inset-0 my-auto bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-[50%] mx-auto h-96 overflow-y-auto max-h-screen">
                <div className='flex justify-start items-start'>
                    <div className='w-[30%] px-2 px-auto'>
                        <div className='flex justify-center items-center'>
                            <img src={selectedProduct.image} alt="" />
                        </div>
                    </div>
                    <div className='w-[70%]'>
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-800">My Review for {selectedProduct.name}</h2>
                                <button onClick={onClose} className="text-gray-500 hover:text-red-600 transition-colors">
                                    <FaTimes size={20} />
                                </button>
                            </div>
                            <p className='text-sm mb-4'>
                                Required fields are marked with <span className='text-red-600 font-bold'>*</span>
                            </p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className='flex justify-start items-center space-x-2'>
                                <label className="text-sm font-medium text-gray-700">
                                    Overall Rating <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <div className="flex items-center">
                                    <ReactRating
                                        initialRating={rating}
                                        emptySymbol="fa fa-star-o text-gray-300 text-xl"
                                        fullSymbol="fa fa-star text-yellow-500 text-xl"
                                        onChange={handleRatingChange}
                                        fractions={1}
                                        className="text-xl"
                                    />
                                    <span className="ml-4 text-sm font-semibold">{ratingLabel}</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Review Title <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('title', { required: 'Review title is required' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Review Description <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <textarea
                                    {...register('description', { required: 'Review description is required' })}
                                    rows="4"
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Upload Review Photo</label>
                                <input
                                    type="file"
                                    {...register('photo')}
                                    className="file-input file-input-bordered w-full mt-1"
                                />
                            </div>

                            <div className='w-full flex justify-start items-center space-x-2'>
                                <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nickname <span className='text-red-600 font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('nickname', { required: 'Nickname is required' })}
                                        className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.nickname && <p className="text-red-500 text-xs mt-1">{errors.nickname.message}</p>}
                                </div>

                                <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Location <span className='text-red-600 font-bold'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('location')}
                                        className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div className='w-full flex justify-start items-center space-x-2'>
                                <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email <span className='text-red-600 font-bold'>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email', { required: 'Email is required' })}
                                        className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Mobile Number <span className='text-red-600 font-bold'>*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('mobile', { required: 'Mobile number is required' })}
                                        className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5 cursor-pointer">
                                    <input
                                        id="agree"
                                        type="checkbox"
                                        {...register('agree', { required: 'You must agree to the terms' })}
                                        className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-2 text-sm cursor-pointer">
                                    <label htmlFor="agree" className="font-medium text-gray-700">I agree to the terms and conditions</label>
                                </div>
                            </div>
                            {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree.message}</p>}

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingsReviewModal;