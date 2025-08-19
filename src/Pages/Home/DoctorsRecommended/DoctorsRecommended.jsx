const DoctorsRecommended = () => {
    return (
        <div className='pt-20'>
            <p className='text-2xl text-center text-black font-semibold' style={{ letterSpacing: '0.2em' }} >
                RECOMMENDED BY DOCTORS, LOVED BY SKIN
            </p>
            <div className='pt-64'>
                <section
                    className='lg:mt-32 h-48 bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] rounded'
                >
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src="https://i.ibb.co.com/HfQrW3kD/RECOMMENDED-BY-DOCTORS-LOVED-BY-SKIN.png"
                                className="-mt-96 w-[901px] h-[507px] hidden lg:block rounded-[25px]"
                                alt='Loading...'
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default DoctorsRecommended;