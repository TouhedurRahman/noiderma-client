import { Link } from 'react-router-dom';

const HowToUse = ({ product }) => {
    return (
        <div id='use'>
            <div className='bg-[#E6E6E6] py-10'>
                <div className='w-[93%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start space-y-7'>
                        <p
                            className="mb-3 font-bold text-3xl mt-10 md:mt-0"
                            style={{ letterSpacing: '0.2em' }}
                        >
                            HOW TO USE
                        </p>
                        <p className='text-sm text-justify'>
                            {product.use.useDescription}
                        </p>
                        <Link
                            className="W-24 btn py-2 px-6 md:py-3 md:px-10 bg-gradient-to-r from-black via-gray-500 to-black text-white rounded-full"
                            style={{ letterSpacing: "0.1em" }}
                        >
                            GET SKINCARE TIPS
                        </Link>
                    </div>
                    <div className='w-full md:w-1/2 px-10 flex justify-center items-center'>
                        <img
                            src={product.use.useImg}
                            alt="Loading..."
                            className='w-full h-96 rounded-[25px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToUse;