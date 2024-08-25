import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='pt-20'>
            <div className='bg-[#00396A] h-8'></div>
            <div className='bg-gradient-to-tr from-[#004987] via-[#2F97BA] to-[#004987] text-white pt-10 pb-3'>
                <div className='w-[93%] lg:w-[85%] mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 md:space-y-0'>
                    <div className='w-full lg:w-[50%]'>
                        <p className='text-3xl font-bold'>
                            NOIDERMA
                        </p>
                        <p className='lg:pr-36 text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus non praesentium rerum soluta facilis tenetur labore perspiciatis, earum nostrum!
                        </p>
                    </div>
                    <div className='flex justify-between items-center w-full lg:w-[30%]'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xl font-bold'>
                                Office
                            </p>
                            <p className='address'>
                                59,60 North Rajashon, <br />
                                Birulia Road, Savar, <br />
                                Dhaka-1340, Bangladesh.
                            </p>
                        </div>
                        <div className='w-full lg:w-1/2 pl-10'>
                            <p className='text-xl font-bold'>
                                Quick Links
                            </p>
                            <div className='flex flex-col'>
                                <Link className='hover:link'>Products</Link>
                                <Link className='hover:link'>Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[20%] flex flex-col justify-center items-center lg:items-start lg:pl-20'>
                        <p className='text-xl font-bold'>
                            Social Media
                        </p>
                        <div className='get-touch-icons mt-5 flex justify-start items-center space-x-4' style={{ fontSize: "30px" }}>
                            <FaFacebookSquare style={{ cursor: "pointer" }}></FaFacebookSquare>
                            <AiFillInstagram style={{ cursor: "pointer" }}></AiFillInstagram>
                            <FaTwitterSquare style={{ cursor: "pointer" }}></FaTwitterSquare>
                        </div>
                    </div>
                </div>
                <hr className='border-b border-white w-[85%] mx-auto mt-10' />
                <p className='text-sm text-center mt-3'><small>Copyright © {year} by Navantis Pharma Ltd.</small></p>
            </div>
        </div>
    );
};

export default Footer;