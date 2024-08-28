import React from 'react';
import { Link } from 'react-router-dom';

const ContactHome = () => {
    return (
        <div
            className="hero mt-20"
            style={{
                backgroundImage: "url(https://i.ibb.co/3BpNPnK/contact-home.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-white text-center py-20">
                <div className="w-[80%]">
                    <h1 className="mb-5 text-5xl font-bold">Skin Rejuvenation with Aromatherapy</h1>
                    <p className="py-10">
                        Embrace holistic self-care with the nurturing power of natural ingredients for your skin and the soothing essence of essential oils for your mind.
                    </p>
                    <div className='pt-5'>
                        <Link
                            to=""
                            className="bg-black text-white font-bold px-24 py-3 rounded-lg"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;