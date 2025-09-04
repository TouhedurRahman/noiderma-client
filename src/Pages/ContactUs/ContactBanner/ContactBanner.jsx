import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const ContactBanner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row bg-[#E2E2E2]'>
            <div className='w-full md:w-[40%] flex justify-center items-center'>
                <div className='w-[80%] mx-auto my-5 flex flex-col space-y-3'>
                    {/* <p className='text-4xl font-bold'>
                        Contact Us
                    </p> */}
                    <p className='text-2xl font-medium'>
                        DO YOU HAVE QUESTIONS FOR NOIDERMA? ASK US NOW.
                    </p>
                    <p className='text-sm'>
                        Chat with our NOIDERMA team now or contact us using one of the options below to ask a question or report an Adverse Event (side effect) or Product Quality Complaint.
                    </p>
                    <div className='pt-5'>
                        <div className='flex justify-start items-center space-x-3'>
                            <FaRegCalendarAlt />
                            <p>
                                Monday - Friday
                            </p>
                        </div>
                        <div className='flex justify-start items-center space-x-3'>
                            <FaRegClock />
                            <p>
                                09:00 am - 06:00 pm BST
                            </p>
                        </div>
                        <div className='flex justify-start items-center space-x-3'>
                            <MdOutlineMail />
                            <p>
                                info@noiderma.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[60%]'>
                <img
                    src="https://i.ibb.co.com/LhNw7BZX/Noiderma-Contact-Banner.jpg"
                    alt=""
                    className='w-full h-96'
                />
            </div>
        </div>
    );
};

export default ContactBanner;