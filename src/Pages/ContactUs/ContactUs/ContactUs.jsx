import React, { useState } from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import ContactAddress from '../ContactAddress/ContactAddress';
import ContactForm from '../ContactForm/ContactForm';

const ContactUs = () => {
    const categories = [
        {
            title: "I'm a consumer",
            description: "Please note that patients should ask their physician for medical or treatment advice regarding the use of any product. If you are experiencing a Medical Emergency, please dial 911 or visit your nearest Emergency Room for assistance."
        },
        {
            title: "I'm a healthcare professional",
            description: "Please note that patients should ask their physician for medical or treatment advice regarding the use of any product. If you are experiencing a Medical Emergency, please dial 911 or visit your nearest Emergency Room for assistance."
        },
        {
            title: 'Report a side effect',
            description: "Please note that patients should ask their physician for medical or treatment advice regarding the use of any product. If you are experiencing a Medical Emergency, please dial 911 or visit your nearest Emergency Room for assistance."
        },
        {
            title: 'Report a product quality complaint',
            description: "Please note that patients should ask their physician for medical or treatment advice regarding the use of any product. If you are experiencing a Medical Emergency, please dial 911 or visit your nearest Emergency Room for assistance."
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <ContactBanner />
            <div className='my-10'>
                <p className='text-4xl text-center font-bold mb-10'>
                    Complete the relevant form below.
                </p>
                <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 items-center gap-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryClick(category)}
                            className={`bg-[#E2E2E2] p-4 aspect-square w-full h-36 flex items-center justify-center ${selectedCategory.title === category.title ? 'active bg-[#E0E8F8]' : ''}`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
                <hr className='hidden md:block bg-[#E0E8F8] w-[90%] h-[10px] mx-auto' />

                <ContactForm title={selectedCategory.title} description={selectedCategory.description} />
            </div>

            <ContactAddress />
        </div>
    );
};

export default ContactUs;