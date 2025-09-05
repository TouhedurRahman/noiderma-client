import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import ReactRating from 'react-rating';
import Swal from 'sweetalert2';
import useHosting from '../../Hooks/useHosting';
import OnlyRating from '../OnlyRating/OnlyRating';

const RatingsReviewModal = ({ show, onClose, selectedProduct }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [rating, setRating] = useState(0);
    const [ratingLabel, setRatingLabel] = useState('Click to rate!');
    // const [imagePreviews, setImagePreviews] = useState([]);
    // const [isChecking, setIsChecking] = useState(false);

    const img_hosting_url = useHosting();

    // const zero_bounce_api = import.meta.env.VITE_ZEROBOUNCE_API;
    // console.log(zero_bounce_api);

    /* const checkEmailValidity = async (email) => {
        setIsChecking(true);
        const response = await fetch(`https://api.zerobounce.net/v2/validate?api_key=${zero_bounce_api}&email=${email}`);
        const data = await response.json();
        setIsChecking(false);
        return data.status === 'valid';
    }; */

    /* const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews(previews);
    }; */

    const uploadImages = async (files) => {
        const uploadedImageUrls = [];

        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append('image', files[i]);

            const response = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                uploadedImageUrls.push(result.data.url);
            }
        }
        return uploadedImageUrls;
    };

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

    const onSubmit = async (data) => {
        /* const isValid = checkEmailValidity(data.email);
        if (!isValid) {
            setError('email', { type: 'manual', message: 'Invalid email address or domain' });
        } else {
            console.log('Email is valid');
        } */
        const { title, description, photo, nickname, location, email, mobile, agree, age, gender, skinType, likeMost, primaryReason, usageFrequency, usageDuration, buyAgain } = data;

        // Upload images and get URLs
        const imageFiles = photo.length > 0 ? photo : [];
        const imageUrls = await uploadImages(imageFiles);

        const reviewData = {
            pid: selectedProduct._id,
            pname: selectedProduct.name,
            title,
            description,
            rating,
            ratingLabel,
            photos: photo.length > 0 ? imageUrls : [],
            nickname,
            location,
            email,
            mobile,
            age,
            gender,
            skinType,
            likeMost,
            primaryReason,
            usageFrequency,
            usageDuration,
            buyAgain
        };

        try {
            const response = await axios.post('https://brandapi.noiderma.com/reviews', reviewData);

            if (response.status === 200 || response.status === 201) {
                reset();
                onClose();

                let timerInterval;
                Swal.fire({
                    title: "Review submission processing...",
                    html: "Submitting within <b></b> milliseconds.",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then(() => {
                    window.location.reload();
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error?.response?.data?.message || error.message,
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            });
        }
    };

    if (!show || !selectedProduct) {
        return null;
    }

    return (
        <div className="fixed inset-0 my-auto bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg md:w-[50%] mx-auto h-96 overflow-y-auto max-h-screen">
                <div className='flex flex-col md:flex-row justify-start items-start space-y-10 md:space-y-0'>
                    <div className='w-full md:w-[30%] px-2 px-auto md:sticky top-0'>
                        <div className='flex justify-center items-center'>
                            <img src={selectedProduct.image} alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center mt-5'>
                            <p className='font-bold'>
                                {selectedProduct.name}
                            </p>
                            <OnlyRating
                                product={selectedProduct}
                            />
                            <p className='text-sm font-bold'>
                                ৳ 200/-
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[70%]'>
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
                            <div className='flex flex-col md:flex-row justify-start items-center space-x-2 space-y-2 md:space-y-0'>
                                <label className="text-sm font-medium text-gray-700">
                                    Overall Rating <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <ReactRating
                                        initialRating={rating}
                                        emptySymbol="fa fa-star-o text-gray-300 text-xl"
                                        fullSymbol="fa fa-star text-yellow-500 text-xl"
                                        onChange={handleRatingChange}
                                        fractions={1}
                                        className="text-xl"
                                    />
                                    <span className="md:ml-4 text-sm font-semibold">{ratingLabel}</span>
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
                                <label className="block text-sm font-medium text-gray-700">Upload Review Photos</label>
                                <input
                                    type="file"
                                    {...register('photo')}
                                    className="file-input file-input-bordered w-full mt-1"
                                    multiple
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
                                        {...register('location', { required: 'Location is required' })}
                                        className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                                </div>
                            </div>

                            <div className='w-full flex justify-start items-center space-x-2'>
                                <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email <span className='text-red-600 font-bold'>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: 'Please enter a valid email address',
                                            },
                                            /* validate: async (value) => {
                                                const isValid = await checkEmailValidity(value);
                                                return isValid || 'Invalid email address or domain';
                                            } */
                                        })}
                                        className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    // disabled={isChecking}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                {/* <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                                    {isChecking ? 'Validating...' : 'Submit'}
                                </button> */}

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

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    What is your age? <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <select
                                    {...register('age', { required: 'Please select your age group' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Under 18">Under 18</option>
                                    <option value="18-24">18-24</option>
                                    <option value="25-34">25-34</option>
                                    <option value="35-44">35-44</option>
                                    <option value="45-54">45-54</option>
                                    <option value="55-64">55-64</option>
                                    <option value="65+">65+</option>
                                </select>
                                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    What is your gender? <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <select
                                    {...register('gender', { required: 'Please select your gender' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    What is your skin type? <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <select
                                    {...register('skinType', { required: 'Please select your skin type' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Dry">Dry</option>
                                    <option value="Oily">Oily</option>
                                    <option value="Combination">Combination</option>
                                    <option value="Sensitive">Sensitive</option>
                                </select>
                                {errors.skinType && <p className="text-red-500 text-xs mt-1">{errors.skinType.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    What did you like most about this product? <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <select
                                    {...register('likeMost', { required: 'Please select an option' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Quality">Quality</option>
                                    <option value="Effectiveness">Effectiveness</option>
                                    <option value="Price">Price</option>
                                    <option value="Scent">Scent</option>
                                    <option value="Texture">Texture</option>
                                </select>
                                {errors.likeMost && <p className="text-red-500 text-xs mt-1">{errors.likeMost.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Which of the following was your primary reason for buying? <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <select
                                    {...register('primaryReason', { required: 'Please select a reason' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Recommendation">Recommendation</option>
                                    <option value="Advertising">Advertising</option>
                                    <option value="Review">Review</option>
                                    <option value="Brand Loyalty">Brand Loyalty</option>
                                    <option value="Promotional Offer">Promotional Offer</option>
                                </select>
                                {errors.primaryReason && <p className="text-red-500 text-xs mt-1">{errors.primaryReason.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    How often do you use this product? <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <select
                                    {...register('usageFrequency', { required: 'Please select a frequency' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Rarely">Rarely</option>
                                </select>
                                {errors.usageFrequency && <p className="text-red-500 text-xs mt-1">{errors.usageFrequency.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    How long have you been using this product? <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <select
                                    {...register('usageDuration', { required: 'Please select a duration' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Less than a month">Less than a month</option>
                                    <option value="1-3 months">1-3 months</option>
                                    <option value="3-6 months">3-6 months</option>
                                    <option value="6-12 months">6-12 months</option>
                                    <option value="Over a year">Over a year</option>
                                </select>
                                {errors.usageDuration && <p className="text-red-500 text-xs mt-1">{errors.usageDuration.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Would you buy this product again? <span className='text-red-600 font-bold'>*</span>
                                </label>
                                <select
                                    {...register('buyAgain', { required: 'Please select an option' })}
                                    className="block w-full mt-1 p-2 border border-gray-900 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Not Sure">Not Sure</option>
                                </select>
                                {errors.buyAgain && <p className="text-red-500 text-xs mt-1">{errors.buyAgain.message}</p>}
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
                                    {/* {isChecking ? 'Validating...' : 'Submit Review'} */}
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