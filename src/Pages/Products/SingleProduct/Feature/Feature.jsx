import React from 'react';

const Feature = ({ product }) => {
    return (
        <div id='features'>
            <div className='mt-20'>
                <div className='w-[93%] md:w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center space-y-6'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start space-y-7'>
                        <p
                            className="mb-3 font-bold text-3xl"
                            style={{ letterSpacing: '0.2em' }}
                        >
                            FEATURES
                        </p>
                        <p className='text-sm text-justify'>
                            {product.features.fearutesDescription}
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 md:px-10 flex justify-center items-center'>
                        <div className='flex flex-wrap justify-between gap-4'>
                            {
                                product.features.featuresMore.map((more, index) => (
                                    <div key={index} className='flex w-[48%] justify-start items-center space-x-3'>
                                        <img
                                            src={more.icon}
                                            alt="Loading..."
                                            className='w-16 h-16'
                                        />
                                        <p>
                                            {more.title}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;