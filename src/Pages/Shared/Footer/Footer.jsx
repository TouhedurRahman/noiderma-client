import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <div className='bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] text-black pt-20 pb-3'>
                <div className='w-[93%] lg:w-[85%] mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 md:space-y-0'>
                    <div className='w-full lg:w-[60%]'>
                        <img
                            src="https://i.ibb.co/Zm5bGzp/noiderma-black-logo.png"
                            alt="Loading..."
                            className='w-[150px] lg:w-[180px] h-[40px]'
                        />
                        <p className='lg:pr-36 text-justify mt-4'>
                            NOIDERMA is a professional-grade dermatological skincare line that rejuvenates the skin from within. It enhances hydration, balances excess oil, prevents acne and brown spots, and helps to maintain a naturally bright and even skin tone.
                        </p>
                    </div>
                    <div className='flex justify-between items-center w-full lg:w-[40%]'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xl font-bold'>
                                Quick Links
                            </p>
                            <div className='flex flex-col mt-2'>
                                <Link className='hover:link'>Products</Link>
                                <Link className='hover:link'>Contacts</Link>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xl font-bold'>
                                Social Media
                            </p>
                            <div className='get-touch-icons mt-5 flex justify-start items-center space-x-4' style={{ fontSize: "30px" }}>
                                <FaFacebookSquare className='hover:link' style={{ cursor: "pointer" }} />
                                <AiFillInstagram className='hover:link' style={{ cursor: "pointer" }} />
                                <FaTwitterSquare className='hover:link' style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-b border-gray-400 w-[85%] mx-auto mt-20' />
                <p className='text-sm text-center mt-3'><small>Copyright © {year} by Navantis Pharma Ltd.</small></p>
            </div>
        </div>
    );
};

export default Footer;