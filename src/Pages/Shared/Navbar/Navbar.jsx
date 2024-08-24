import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (index) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    const menuItems = [
        { name: 'PRODUCTS', subOptions: ['Product 1', 'Product 2'] },
        { name: 'CONTACT US', subOptions: [] }
    ];

    return (
        <nav className='w-full bg-[#FFFFFF] text-[#014B88] font-bold shadow-lg z-50'>
            {/* <nav className='fixed w-full bg-[#FFFFFF] text-[#014B88] shadow-lg z-50'> */}
            <div className='w-[93%] lg:w-[85%] mx-auto flex justify-between items-center py-4'>
                {/* Logo */}
                <div className='text-2xl font-bold flex justify-center items-center'>
                    <img
                        src="https://via.placeholder.com/150?text=Logo"
                        alt="Loading..."
                        className='w-8 h-8 mr-2 rounded-full'
                    />
                    <a href="/" className='cursor-pointer'>
                        NOIDERMA
                    </a>
                </div>

                {/* Menu Items */}
                <ul className='hidden md:flex space-x-8'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='relative group'>
                            <a
                                href={`/${item.name.toLowerCase().replace(' ', '-')}`}
                                className='cursor-pointer transition duration-300 hover:text-[#01305A]'
                            >
                                {item.name}
                            </a>
                            {item.subOptions.length > 0 && (
                                <ul className='absolute left-0 mt-2 bg-[#FFFFFF] text-left py-2 space-y-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-50'>
                                    {item.subOptions.map((subOption, subIndex) => (
                                        <li key={subIndex}>
                                            <a
                                                href={`/${item.name.toLowerCase().replace(' ', '-')}/${subOption.toLowerCase().replace(' ', '-')}`}
                                                className='block  px-4 py-2 hover:bg-[#014B88] hover:text-[#FFFFFF] transition duration-300'
                                            >
                                                {subOption}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Search Bar */}
                <div className='hidden md:flex items-center'>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className=" border-2 border-gray-400 text-[#014B88] px-4 py-2 rounded-lg focus:outline-none"
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#014B88]" />
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} className='text-2xl'>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-[#FFFFFF] text-center overflow-hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className='space-y-4 py-4'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='relative'>
                            <div className='flex justify-between items-center px-4'>
                                <a
                                    href={`/${item.name.toLowerCase().replace(' ', '-')}`}
                                    className='block cursor-pointer transition duration-300 hover:text-[#01305A]'
                                >
                                    {item.name}
                                </a>
                                {item.subOptions.length > 0 && (
                                    <button
                                        onClick={() => toggleSubMenu(index)}
                                        className='text-lg'
                                    >
                                        <FaChevronDown
                                            className={`transition-transform duration-300 ${activeSubMenu === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                )}
                            </div>
                            {item.subOptions.length > 0 && activeSubMenu === index && (
                                <ul className='text-[#014B88] text-left space-y-1 py-2 transition duration-300 w-full'>
                                    {item.subOptions.map((subOption, subIndex) => (
                                        <li key={subIndex}>
                                            <a
                                                href={`/${item.name.toLowerCase().replace(' ', '-')}/${subOption.toLowerCase().replace(' ', '-')}`}
                                                className='block px-4 py-2 hover:bg-[#01305A] hover:text-[#FFFFFF] transition duration-300 w-full'
                                            >
                                                {subOption}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;