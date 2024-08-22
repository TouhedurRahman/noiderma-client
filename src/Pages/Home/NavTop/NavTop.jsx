import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { PiMapPinLineBold } from 'react-icons/pi';

const NavTop = () => {
    return (
        <div className='bg-[#E0EFF9] h-8'>
            <div className="h-full flex justify-end items-center lg:mr-[8%] space-x-2">
                <div className="flex justify-center items-center text-[#014B88] font-bold space-x-2">
                    <PiMapPinLineBold />
                    <p>
                        FIND A STORE
                    </p>
                </div>
                <div className='h-full px-3 flex justify-center items-center text-white font-bold bg-[#014B88] hover:bg-[#38A6C4] space-x-2'>
                    <MdOutlineMail />
                    <p>
                        JOIN THE CLUB
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NavTop;