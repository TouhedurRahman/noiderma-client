import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (index) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const menuItems = [
        // { name: 'PRODUCTS', subOptions: ['Product 1', 'Product 2'] },
        { name: 'PRODUCTS', subOptions: [] },
        { name: 'CONTACT US', subOptions: [] },
        { name: 'FIND A STORE', subOptions: [] }
    ];

    return (
        <nav
            className={`w-full fixed top-0 left-0 right-0 font-bold transition-colors duration-300 z-50 ${isScrolled || isHovered ? 'bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] text-black shadow-lg' : 'bg-transparent text-white'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='w-[93%] lg:w-[85%] mx-auto flex justify-between items-center py-4'>
                {/* Logo */}
                <Link to="/" className='text-2xl font-bold flex justify-center items-center'>
                    <img
                        src={
                            isScrolled || isHovered
                                ? "https://i.ibb.co/Zm5bGzp/noiderma-black-logo.png"
                                : "https://i.ibb.co/8Nmk5NC/noiderma-white-logo.png"
                        }
                        alt="Logo"
                        className='w-[150px] lg:w-[180px] h-[40px]'
                    />
                </Link>

                {/* Menu Items */}
                <ul className='hidden md:flex space-x-4 ml-auto'>
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
                                                className='block px-4 py-2 hover:bg-[#014B88] hover:text-[#FFFFFF] transition duration-300'
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

                {/* Search Icon and Input */}
                <div className='relative flex items-center ml-4'>
                    <div className="flex items-center transition-all duration-500 ease-in-out">
                        <button
                            onClick={toggleSearch}
                            className={`text-xl transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
                            style={{ pointerEvents: isSearchOpen ? 'none' : 'auto' }}
                        >
                            <FaSearch />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`border-2 border-gray-400 text-black px-4 py-2 rounded-lg focus:outline-none ml-2 transition-all duration-500 ease-in-out ${isSearchOpen ? 'w-[150px] opacity-100' : 'w-0 opacity-0'} focus:shadow-lg shadow-gray-900`}
                            style={{ visibility: isSearchOpen ? 'visible' : 'hidden' }}
                        />
                        {isSearchOpen && (
                            <button onClick={toggleSearch} className='text-xl ml-2 transition-opacity duration-300'>
                                <FaTimes />
                            </button>
                        )}
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