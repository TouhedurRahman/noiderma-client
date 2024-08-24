import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SignFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Dryness",
            answer: "Dryness occurs when the skin loses moisture and becomes dehydrated. This can be caused by environmental factors, aging, or the use of harsh skincare products. Our products are formulated with hydrating ingredients like hyaluronic acid and glycerin to replenish moisture and restore the skin’s natural balance, leaving it soft and supple."
        },
        {
            question: "Irritation",
            answer: "Skin irritation can result from allergies, harsh ingredients, or environmental stressors. It often manifests as redness, itching, or discomfort. Our dermatologist-recommended products are free from common irritants and are designed to soothe and calm sensitive skin, reducing inflammation and promoting a healthy complexion."
        },
        {
            question: "Roughness",
            answer: "Roughness in the skin texture can be a sign of dryness, dead skin buildup, or a compromised skin barrier. Regular exfoliation and the use of gentle, nourishing moisturizers can help smooth out the skin's surface. Our products contain ingredients like lactic acid and ceramides that gently exfoliate and reinforce the skin’s barrier, improving texture over time."
        },
        {
            question: "Tightness",
            answer: "Tightness is often a sign of dehydration, where the skin feels stretched or uncomfortable. It can occur after cleansing or in response to dry conditions. Our skincare solutions are designed to provide deep hydration and reinforce the skin’s natural moisture barrier, ensuring long-lasting comfort and elasticity."
        },
        {
            question: "Weakened skin barrier",
            answer: "A weakened skin barrier can lead to increased sensitivity, dryness, and a higher risk of irritation. This condition can be caused by over-exfoliation, harsh ingredients, or environmental damage. Our products are formulated with barrier-strengthening ingredients such as niacinamide and ceramides to help restore and protect the skin’s natural defense mechanism, promoting overall skin health."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col md:flex-row justify-center py-10 items-center bg-gradient-to-r from-[#004987] to-[#2F97BA] text-white'>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center space-y-10'>
                <img src="https://via.placeholder.com/150?text=Signs"
                    alt=""
                    className='rounded-full'
                />
                <p className='w-[70%] mx-auto text-center'>
                    70% of people around the world say that they have some degree of skin sensitivity. We've partnered with dermatologists to identify 5 signs of sensitivity, and our products are clinically tested to defend against these 5 signs and improve the resilience of your skin.
                </p>
            </div>
            <div className='w-full md:w-1/2 p-3 lg:pr-10'>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`} // Staggered delay for each FAQ
                            smooth={true}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                            >
                                <span>
                                    <span className="text-lg font-semibold border-2 border-white rounded-badge py-2 px-4 mr-2">{index + 1}</span>
                                    <span className="text-lg font-semibold">{faq.question}</span>
                                </span>
                                <span className="text-2xl ml-5">{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                            >
                                <p className="pt-2 pb-4 text-justify">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SignFaq;
