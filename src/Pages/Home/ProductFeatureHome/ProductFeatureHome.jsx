import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const ProductFeatureHome = () => {
    return (
        <div className='mt-20'>
            <div className='relative flex flex-col lg:flex-row items-center justify-end'>
                {/* Image Section */}
                <div className='lg:absolute left-0 flex justify-center lg:justify-start items-center lg:ms-24 z-20'>
                    <img
                        src="https://i.ibb.co.com/nSbfpwr/ADVANCED-GLOW-WHITENING-NIGHT-CARE.jpg"
                        alt="Recommended"
                        className='w-[300px] h-[175px] md:w-[450px] md:h-[250px] lg:w-[600px] lg:h-[350px] rounded-[25px]'
                    />
                </div>

                {/* Text Section */}
                <div className='bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] w-full lg:w-[75%] lg:rounded-l-[25px] p-8 md:p-20 lg:p-40 lg:pe-20 space-y-4 md:space-y-10 z-10 text-center lg:text-right mt-8 lg:mt-0'>
                    <p
                        className='text-black text-2xl md:text-3xl lg:text-4xl font-bold lg:pl-52'
                        style={{ letterSpacing: '0.2em' }}
                    >
                        ADVANCED GLOW & WHITENING NIGHT CARE
                    </p>
                    <p className='text-black lg:pl-48'>
                        Advanced Glow & Whitening Night Care works overnight to brighten, even, and rejuvenate your skin. Wake up to a smoother, radiant, and naturally glowing complexion every morning.
                    </p>
                    <Link
                        className="btn py-2 px-6 md:py-3 md:px-10 bg-white hover:bg-black border-2 border-[black] text-black hover:text-white rounded-full"
                        style={{ letterSpacing: "0.1em" }}
                    >
                        MORE ON BRIGHTENING SKIN
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatureHome;