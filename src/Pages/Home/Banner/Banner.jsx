import React from 'react';

const Banner = () => {
    return (
        <div
            className="relative h-[800px] bg-cover bg-center"
            style={{ backgroundImage: 'url("https://i.ibb.co/k2bw7D6/camille-brodard-Vx-Aw-Teiq-Dao-unsplash.jpg")' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <div className="text-center px-4 pt-16">
                    <h1 className="text-4xl font-bold mb-2">Welcome to Our Website</h1>
                    <p className="text-lg">Explore our range of products and services</p>
                    <a
                        href="/contact"
                        className="mt-4 inline-block bg-[#014B88] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;