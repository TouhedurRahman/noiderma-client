import React from 'react';
import './WhyNoiderma.css';

const WhyNoiderma = () => {
    return (
        <div className="parallax-hero mt-20">
            <div className="parallax-hero-overlay bg-opacity-70"></div>
            <div className="hero-content-parallax text-white text-center py-20">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl">
                        Why <span className='font-bold'>NoiDerma</span>?
                    </h1>
                    <p className="py-5">
                        With an aim in mind to improve skin whitening and hydration as naturally as possible, our range of customized skincare formulations contains only the most necessary ingredients, completely free of parabens, artificial fragrances and animal testing.
                    </p>
                    <div className='flex justify-center items-center space-x-4 parallax-images'>
                        <img
                            src="https://i.ibb.co/YQM3gvZ/Vegan-Friendly.png"
                            alt="Vegan Friendly"
                            className='h-36 w-36 parallax-icon'
                        />

                        <img
                            src="https://i.ibb.co/WG9cTNj/Alcohol-Free.png"
                            alt="Alcohol Free"
                            className='h-36 w-36 parallax-icon'
                        />

                        <img
                            src="https://i.ibb.co/fx4P1Vj/Paraben-Free.png"
                            alt="Paraben Free"
                            className='h-36 w-36 parallax-icon'
                        />

                        <img
                            src="https://i.ibb.co/tsLCmFq/Synthetic-Fragrance-Free.png"
                            alt="Synthetic Fragrance Free"
                            className='h-36 w-36 parallax-icon'
                        />

                        <img
                            src="https://i.ibb.co/mTWsyTw/Artificial-Colourant-Free.png"
                            alt="Artificial Colourant Free"
                            className='h-36 w-36 parallax-icon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyNoiderma;