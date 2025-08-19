import './WhyNoiderma.css';

const WhyNoiderma = () => {
    return (
        <div className="parallax-hero mt-20">
            <div className="parallax-hero-overlay bg-opacity-70"></div>
            <div className="hero-content-parallax text-white text-center py-20">
                <div className="w-[70%] mx-auto">
                    <h1 className="mb-5 text-5xl">
                        Why <span className='font-bold'>NOIDERMA</span>?
                    </h1>
                    <p className="py-5 text-xl">
                        Our aim is to improve skin as naturally as possible. NOIDERMA products’ ingredients are ECOCERT, Halal, GMP, and ISO certified, ensuring quality, safety, and dermatological care for all skin types. Our formulations contain only the most necessary ingredients, completely free of
                    </p>
                    <div className='flex justify-center items-center space-x-4 parallax-images'>
                        <img
                            src="https://i.ibb.co.com/h1RhPfs1/Vegan-Friendly-White.png"
                            alt="Vegan Friendly"
                            className='h-36 w-36 parallax-icon'
                        />

                        <img
                            src="https://i.ibb.co.com/PZmyVyKK/Alcohol-Free-White.png"
                            alt="Alcohol Free"
                            className='h-36 w-36 parallax-icon'
                        />

                        <img
                            src="https://i.ibb.co.com/fdxRMWCx/Paraben-Free-White.png"
                            alt="Paraben Free"
                            className='h-36 w-36 parallax-icon'
                        />

                        <img
                            src="https://i.ibb.co.com/Z1FCryk9/Synthetic-Fragrance-Free-White.png"
                            alt="Synthetic Fragrance Free"
                            className='h-36 w-36 parallax-icon'
                        />

                        <img
                            src="https://i.ibb.co.com/Xk3fdPyQ/Artificial-Colourant-Free-White.png"
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