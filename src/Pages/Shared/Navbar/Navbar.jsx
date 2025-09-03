import { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeSearchIndex, setActiveSearchIndex] = useState(-1);

    const [products, loading] = useProducts();
    const navigate = useNavigate();

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

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchTerm('');
        setFilteredProducts([]);
        setActiveSearchIndex(-1);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);

        if (query) {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(query)
            );
            setFilteredProducts(results);
            setActiveSearchIndex(-1);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (productId) => {
        navigate(`/products/${productId}`);
        toggleSearch();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setActiveSearchIndex(prevIndex => (prevIndex + 1) % filteredProducts.length);
        } else if (e.key === 'ArrowUp') {
            setActiveSearchIndex(prevIndex => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
        } else if (e.key === 'Enter' && activeSearchIndex >= 0) {
            handleProductClick(filteredProducts[activeSearchIndex]._id);
        }
    };

    const menuItems = [
        { name: 'PRODUCTS', subOptions: [] },
        { name: 'CONTACT US', subOptions: [] },
        // { name: 'FIND A STORE', subOptions: [] }
    ];

    return (
        <nav
            className={`w-full fixed top-0 left-0 right-0 font-bold transition-colors duration-300 z-50 ${isScrolled || isHovered ? 'bg-gradient-to-tr from-[#f5f5f5] to-[#e0e0e0] text-black shadow-lg' : 'bg-transparent text-black'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='w-[93%] lg:w-[85%] mx-auto flex justify-between items-center py-4'>
                <Link to="/" className='text-2xl font-bold flex justify-center items-center'>
                    {/* <img src={isScrolled || isHovered ? "https://i.ibb.co/Zm5bGzp/noiderma-black-logo.png" : "https://i.ibb.co/8Nmk5NC/noiderma-white-logo.png"} alt="Logo" className='w-[150px] lg:w-[180px] h-[40px]' /> */}
                    <img src={isScrolled || isHovered ? "https://i.ibb.co/Zm5bGzp/noiderma-black-logo.png" : "https://i.ibb.co/Zm5bGzp/noiderma-black-logo.png"} alt="Logo" className='w-[150px] lg:w-[180px] h-[40px]' />
                </Link>

                <ul className='hidden md:flex space-x-4 ml-auto'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='relative group'>
                            <a href={`/${item.name.toLowerCase().replace(' ', '-')}`} className='cursor-pointer transition duration-300 hover:text-[#01305A]'>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Search Icon and Input */}
                <div className='relative flex items-center ml-4'>
                    <div className="flex items-center transition-all duration-500 ease-in-out">
                        <button onClick={toggleSearch} className={`text-xl transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`} style={{ pointerEvents: isSearchOpen ? 'none' : 'auto' }}>
                            <FaSearch />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                            onKeyDown={handleKeyDown}
                            className={`border-2 border-gray-400 text-black px-4 py-2 rounded-lg focus:outline-none ml-2 transition-all duration-500 ease-in-out ${isSearchOpen ? 'w-[150px] opacity-100' : 'w-0 opacity-0'} focus:shadow-lg shadow-gray-900`}
                            style={{ visibility: isSearchOpen ? 'visible' : 'hidden' }}
                        />
                        {isSearchOpen && (
                            <button onClick={toggleSearch} className='text-xl ml-2 transition-opacity duration-300'>
                                <FaTimes />
                            </button>
                        )}
                    </div>
                    {isSearchOpen && filteredProducts.length > 0 && (
                        <div className="absolute top-[60px] left-0 w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            {filteredProducts.map((product, index) => (
                                <div
                                    key={product._id}
                                    onClick={() => handleProductClick(product._id)}
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${index === activeSearchIndex ? 'bg-gray-200' : ''}`}
                                >
                                    {product.name}
                                </div>
                            ))}
                        </div>
                    )}
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
                className={`md:hidden bg-[#FFFFFF] text-center overflow-hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'}`}
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
                                            className={`transition-transform duration-300 ${activeSubMenu === index ? 'rotate-180' : ''}`}
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