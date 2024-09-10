import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import { useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Rating } from '@smastrom/react-rating';

const SingleProduct = () => {
    const [products, loading] = useProducts();
    const { id } = useParams();
    const product = products.find(product => product._id == id);

    return (
        <div className='my-20 lg:w-[85%] mx-auto'>
            <p className='flex items-center space-x-4'>
                Home <MdOutlineKeyboardArrowRight />
                Product
            </p>
            <div className='mt-5 flex justify-between items-start'>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <img
                        src={product.image}
                        alt="Loading..." />
                </div>
                <div className='w-full md:w-1/2'>
                    <p
                        style={{ letterSpacing: "0.2em" }}
                        className='text-4xl font-bold'
                    >
                        {product.name.toUpperCase()}
                    </p>
                    <div className="mt-3 flex justify-start items-center space-x-3">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={product.rating}
                            readOnly
                            className="flex"
                        />
                        <p>
                            {product.rating} ({product.rater})
                        </p>
                        <p className='hover:link'>
                            write a review
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;