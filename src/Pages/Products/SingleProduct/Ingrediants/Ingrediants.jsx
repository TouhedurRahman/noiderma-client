import React from 'react';

const Ingrediants = ({ product }) => {
    return (
        <div id="ingrediants">
            <div className='mt-20 bg-[#E6E6E6] py-10'>
                <div className='w-[93%] md:w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center space-y-6'>
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
                <div className='w-[93%] md:w-[85%] mx-auto mt-10 space-y-6'>
                    <p
                        className="mb-3 font-bold text-3xl"
                        style={{ letterSpacing: '0.2em' }}
                    >
                        FIND OUT MORE ABOUT OUR INGREDIENTS
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            product.ingrediants.moreIngrediants.map(ingrediant => (
                                <div className='flex flex-col space-y-4'>
                                    <img
                                        src={ingrediant.moreIngrediantsImg}
                                        alt="Loading..."
                                        className='w-full h-72 rounded-[25px]'
                                    />
                                    <p className='text-xl font-bold'>
                                        {ingrediant.title}
                                    </p>
                                    <p className='text-sm text-justify'>
                                        {ingrediant.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ingrediants;