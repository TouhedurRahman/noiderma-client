import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const ProductScrollNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { name: 'How to Use', to: 'use' },
        { name: 'Features', to: 'features' },
        { name: 'All Ingredients', to: 'ingrediants' },
        { name: 'reviews', to: 'reviews' }
    ];

    const navbarHeight = 64;

    return (
        <nav className='w-full mt-20 bg-[#1a1a2e] text-[#e0e0e0] shadow-lg z-50'>
            <div className='w-full px-4 lg:px-0 lg:w-[85%] mx-auto flex justify-center items-center py-4'>
                <ul className='flex justify-center items-center space-x-8'>
                    {menuItems.map(item => (
                        <li key={item.name}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-navbarHeight}
                                spy={true}
                                activeClass="active-link"
                                className='cursor-pointer transition duration-300'
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default ProductScrollNav;