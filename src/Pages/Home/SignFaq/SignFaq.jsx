import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SignFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Dryness",
            answer: "Insufficient moisture in the skin, resulting in a rough, flaky, or tight appearance."
        },
        {
            question: "Irritation",
            answer: "Inflammatory response or discomfort in the skin caused by external factors, environmental stressors, or unsuitable products."
        },
        {
            question: "Roughness",
            answer: "Uneven skin texture due to dryness, buildup of dead skin cells, or lack of hydration."
        },
        {
            question: "Tightness",
            answer: "Sensation of tautness in the skin, often caused by dehydration or diminished natural oils."
        },
        {
            question: "Weakened skin barrier",
            answer: "A compromised skin barrier that reduces the skin’s ability to retain moisture and protect against environmental stressors, resulting in increased sensitivity, dryness, and irritation."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className='flex flex-col md:flex-row justify-center py-10 items-center text-white'
            style={{
                backgroundImage: 'url(https://i.ibb.co/Q6wY0gC/sign-Faq-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center space-y-10'>
                <img src="https://i.ibb.co.com/whLj4RZd/Sensitive-Skin-Sings.png"
                    alt=""
                    className='rounded-full h-48'
                />
                <p className='w-[80%] mx-auto text-center'>
                    Approximately 70% of individuals globally report experiencing some degree of skin sensitivity. In consultation with leading dermatologists, we have identified five principal indicators of sensitivity, and our products are clinically validated to provide protection against these indicators while reinforcing the skin’s natural resilience.
                </p>
            </div>
            <div className='w-full md:w-1/2 p-3 lg:pr-10'>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
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