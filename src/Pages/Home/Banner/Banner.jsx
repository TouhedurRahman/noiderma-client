import React from 'react';

const Banner = () => {
    return (
        <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: `https://static.vecteezy.com/system/resources/thumbnails/002/292/582/small_2x/elegant-black-and-gold-banner-background-free-vector.jpg` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <div className="text-center px-4">
                    <h1 className="text-4xl font-bold mb-2">Welcome to Our Website</h1>
                    <p className="text-lg">Explore our range of products and services</p>
                    <a href="/contact" className="mt-4 inline-block bg-[#014B88] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;