import { Link } from 'react-router-dom';

const DermaRecommended = () => {
    return (
        <div className='mt-20'>
            <div className='relative flex flex-col-reverse lg:flex-row items-center'>

                <div className='bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] w-full lg:w-[75%] lg:rounded-r-[25px] p-8 md:p-20 lg:p-40 lg:ps-20 space-y-4 md:space-y-10 z-10 text-center lg:text-left'>
                    <p
                        className='text-black text-2xl md:text-3xl lg:text-4xl font-bold'
                        style={{ letterSpacing: '0.2em' }}
                    >
                        DERMATOLOGIST<br />RECOMMENDED
                    </p>
                    <p>
                        Noiderma is a dermatologist recommended sensitive skincare brand. Choose the <br className='hidden md:inline' /> skin expert’s choice for your sensitive skin.
                    </p>
                    <Link
                        className="btn py-2 px-6 md:py-3 md:px-10 bg-white hover:bg-[black] border-2 border-[black] text-black hover:text-white rounded-full"
                        style={{ letterSpacing: "0.1em" }}
                    >
                        FIND OUT MORE
                    </Link>
                </div>

                <div className='flex justify-center lg:absolute right-0 lg:justify-end items-center lg:me-24 z-20 mb-8 lg:mb-0'>
                    <img
                        src="https://placehold.co/600x350?text=Dermatologist+Recommended"
                        alt="Recommended"
                        className='w-[300px] h-[175px] md:w-[450px] md:h-[250px] lg:w-[600px] lg:h-[350px] rounded-[25px]'
                    />
                </div>
            </div>
        </div>
    );
};

export default DermaRecommended;