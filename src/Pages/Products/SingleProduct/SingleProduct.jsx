import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [products, loading] = useProducts();
    const { id } = useParams();
    const product = products.find(product => product._id == id);

    return (
        <div className='mt-24'>
            This is {product.name}
        </div>
    );
};

export default SingleProduct;