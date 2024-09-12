import React from 'react';

const Ingrediants = ({ product }) => {
    return (
        <div className='mt-20 bg-[#E6E6E6] py-10'>
            <div className='w-full md:w-[85%] mx-auto flex justify-between items-center'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-start space-y-7'>
                    <p
                        className="mb-3 font-bold text-3xl"
                        style={{ letterSpacing: '0.2em' }}
                    >
                        ALL INGREDIANTS
                    </p>
                    {
                        product.ingrediants.activeIngrediants
                        &&
                        <>
                            <p
                                className="font-bold text-xl"
                                style={{ letterSpacing: '0.2em' }}
                            >
                                ACTIVE INGREDIANTS
                            </p>
                            <p className='text-sm text-justify'>
                                {product.ingrediants.activeIngrediants}
                            </p>
                        </>
                    }
                    {
                        product.ingrediants.inActiveIngrediants
                        &&
                        <>
                            <p
                                className="font-bold text-xl"
                                style={{ letterSpacing: '0.2em' }}
                            >
                                INACTIVE INGREDIANTS
                            </p>
                            <p className='text-sm text-justify'>
                                {product.ingrediants.inActiveIngrediants}
                            </p>
                        </>
                    }


                </div>
                <div className='w-full md:w-1/2 px-10 flex justify-center items-center'>
                    <img
                        src={product.ingrediants.ingrediantImg}
                        alt="Loading..."
                        className='w-full h-96 rounded-[25px]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Ingrediants;