import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BuyNowModal from '../../../Components/BuyNowModal/BuyNowModal';
import useProducts from '../../../Hooks/useProducts';

const BuyNow = () => {
    const [products, loading] = useProducts();
    const [isClicked, setIsClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const buttonRef = useRef(null);

    const handleClick = () => {
        setIsClicked(true);
        setIsModalOpen(true);
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className='fixed -right-14 top-64 md:top-1/2 transform -translate-y-1/2 -rotate-90 z-50'>
                <Link
                    to={'#'}
                    ref={buttonRef}
                    className={`btn my-2 px-10 pt-5 pb-10 text-white rounded-t-lg rounded-b-none transition-all duration-50 ${isClicked ? 'border-2 border-gray-400' : 'border border-transparent'
                        } bg-gradient-to-r from-black via-gray-500 to-black font-bold`}
                    onClick={handleClick}
                    style={{ letterSpacing: "0.1em" }}
                >
                    BUY NOW
                </Link>
            </div>
            <div>
                {
                    loading
                        ?
                        "Loading..."
                        :
                        <BuyNowModal
                            show={isModalOpen}
                            onClose={handleCloseModal}
                            products={products}
                        />
                }
            </div>
        </div>
    );
};

export default BuyNow;