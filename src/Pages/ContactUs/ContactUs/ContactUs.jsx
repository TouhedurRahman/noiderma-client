import React, { useState } from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import ContactAddress from '../ContactAddress/ContactAddress';
import ContactForm from '../ContactForm/ContactForm';
import { FaUser, FaStethoscope, FaBoxOpen } from 'react-icons/fa';
import { MdWarning } from 'react-icons/md';

const ContactUs = () => {
    const categories = [
        {
            role: "Consumer",
            title: "I'm a consumer",
            subtitle: "Ask a Question or Provide Feedback​",
            description: "If you are a consumer seeking information about our products, please contact us directly for inquiries or visit our FAQ section. We are here to assist with any general questions or concerns about product usage.",
            icon: <FaUser />
        },
        {
            role: "Doctor",
            title: "I'm a healthcare professional",
            subtitle: "Ask a Medical Information Question",
            description: "For healthcare professionals looking for more detailed product information, clinical data, or collaboration opportunities, please reach out to our medical affairs team for assistance.",
            icon: <FaStethoscope />
        },
        {
            role: "Side Effect",
            title: "",
            subtitle: "Report a side effect",
            description: "If you or someone you know has experienced a side effect from one of our products, please report it immediately. Your safety is our priority, and your report helps us ensure the highest standards of product quality and safety.",
            icon: <MdWarning />
        },
        {
            role: "Product Quality",
            title: "",
            subtitle: "Report a product quality complaint",
            description: "If you have encountered a quality issue with one of our products, please let us know. We take every product quality complaint seriously and will work to resolve any issues you have experienced.",
            icon: <FaBoxOpen />
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
                            className={`bg-[#E2E2E2] p-4 aspect-square w-full h-36 flex flex-col items-center justify-center ${selectedCategory.role === category.role ? 'active bg-[#E0E8F8]' : ''}`}
                        >
                            <span className='text-2xl mb-3'>
                                {category.icon}
                            </span>
                            <span className='italic'>
                                {category.title}
                            </span>
                            <span>
                                {category.subtitle}
                            </span>
                        </button>
                    ))}
                </div>
                <hr className='hidden md:block bg-[#E0E8F8] w-[90%] h-[10px] mx-auto' />

                <ContactForm
                    title={selectedCategory.title}
                    subtitle={selectedCategory.subtitle}
                    description={selectedCategory.description} />
            </div>

            <ContactAddress />
        </div>
    );
};

export default ContactUs;