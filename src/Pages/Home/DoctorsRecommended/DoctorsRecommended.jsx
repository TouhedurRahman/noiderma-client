import React from 'react';

const DoctorsRecommended = () => {
    return (
        <div className='pt-20'>
            <p className='text-2xl text-center text-[#004987] font-semibold' style={{ letterSpacing: '0.2em' }} >
                RECOMMENDED BY DOCTORS, LOVED BY SKIN
            </p>
            <div className='pt-64'>
                <section
                    className='lg:mt-32 h-48 rounded'
                    style={{
                        background: '#F1F9FC'
                    }}
                >
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src="https://via.placeholder.com/150?text=Doctor's+Recommended"
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