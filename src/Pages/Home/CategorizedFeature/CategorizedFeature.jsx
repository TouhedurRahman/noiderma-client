import React from 'react';
import { Link } from 'react-router-dom';

const CategorizedFeature = () => {
    const contents = [
        {
            _id: 1,
            image: "https://via.placeholder.com/150?text=Skin", // Replace with an actual image URL
            title: "There's Science to Sensitive Skin",
            description: "Our cleansers and moisturizers are backed by scientific research and clinical studies to ensure the most effective blend of ingredients for your sensitive skin. We draw from the latest scientific research to develop our sensitive skincare products, making them a top choice recommended by dermatologists.",
            gototext: "The Science of Sensitive Skin",
            link: "https://example.com/science-sensitive-skin", // Replace with an actual link
            flexprop: "no-reverse"
        },
        {
            _id: 2,
            image: "https://via.placeholder.com/150?text=Beauty", // Replace with an actual image URL
            title: "Beauty is More Than Skin Deep",
            description: "Our gentle skin cleansers and moisturizers hydrate and strengthen the skin barrier, making them the perfect first step of your daily routine, whether you’re going barefaced or full glam.",
            gototext: "Beautiful Skin Begins with Care",
            link: "https://example.com/beauty-more-than-skin-deep", // Replace with an actual link
            flexprop: "reverse"
        },
        {
            _id: 3,
            image: "https://via.placeholder.com/150?text=Hydration", // Replace with an actual image URL
            title: "Hydration Never Goes Out of Style",
            description: "Dare to wear any fabric, any time of year. With our dermatologist-recommended moisturizers, you can embrace any style and own every season, even if you have sensitive skin.",
            gototext: "Hydration, but Make it Fashion",
            link: "https://example.com/hydration-style", // Replace with an actual link
            flexprop: "no-reverse"
        },
    ]

    return (
        <div className='w-[93%] md:w-[85%] mx-auto pt-20'>
            <div>
                {
                    contents.map(content => (
                        <>
                            <div className={`m-5 my-10 flex flex-col ${(content?.flexprop) === 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row'} lg:justify-between items-center rounded-lg`}>
                                <div className="w-full md:w-1/2 lg:rounded-lg">
                                    <img
                                        src={content.image}
                                        className="w-full h-full rounded-lg"
                                        alt="Loading..."
                                    />
                                </div>
                                <div className={`w-full space-y-8 md:w-1/2 pt-5 md:pt-0 ${(content?.flexprop) === 'reverse' ? 'md:me-20' : 'md:ms-20'} flex flex-col justify-center items-start`}>
                                    <p
                                        className="mb-3 font-bold text-3xl text-[#004987]"
                                        style={{ letterSpacing: '0.2em' }}
                                    >
                                        {content.title.toUpperCase()}
                                    </p>
                                    <p
                                        className="mb-3 text-justify text-[#5E656B] text-sm leading-relaxed"
                                    >
                                        {content.description}
                                    </p>
                                    <Link
                                        to={content.link}
                                        className='link text-[#38AACF]'
                                    >
                                        {content.gototext}
                                    </Link>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default CategorizedFeature;