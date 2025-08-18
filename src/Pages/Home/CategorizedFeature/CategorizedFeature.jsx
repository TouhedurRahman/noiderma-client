import { Link } from 'react-router-dom';

const CategorizedFeature = () => {
    const contents = [
        {
            _id: 1,
            image: "https://i.ibb.co.com/sdPfGL5T/Whats-App-Image-2025-08-18-at-12-37-35-PM.jpg",
            title: "There's Science to Sensitive Skin",
            description: "Enriched with clinically proven natural ingredients, this unique formulation is carefully designed to suit even the most delicate and sensitive skin. By bringing together the purity of nature with advanced dermatological science, it ensures maximum safety, effectiveness, and long-lasting results. Gentle yet powerful, it works to soothe irritation, calm redness, restore natural balance, and strengthen the skin’s protective barrier, giving your skin the comfort, it deserves. With every application, you experience safe, effective, and trusted care specially crafted for the needs of sensitive skin.",
            gototext: "The Science of Sensitive Skin",
            link: "https://example.com/science-sensitive-skin",
            flexprop: "no-reverse"
        },
        {
            _id: 2,
            image: "https://i.ibb.co.com/TBMJy581/istockphoto-540568994-2048x2048.jpg",
            title: "Beauty is More Than Skin Deep",
            description: "True beauty reflects inner confidence, vitality, and well-being. At NOIDERMA, we are dedicated to helping you achieve skin that is radiant, healthy, and nourished from within. Our scientifically advanced skincare solutions are carefully formulated to protect, restore, and enhance your skin’s natural barrier, ensuring long-lasting hydration, softness, and a youthful glow. Experience skincare that goes beyond surface-level beauty, empowering you to reveal your authentic and lasting elegance.",
            gototext: "Beautiful Skin Begins with Care",
            link: "https://example.com/beauty-more-than-skin-deep",
            flexprop: "reverse"
        },
        {
            _id: 3,
            image: "https://placehold.co/417x501?text=Hydration",
            title: "Hydration Never Goes Out of Style",
            description: "Dare to wear any fabric, any time of year. With our dermatologist-recommended moisturizers, you can embrace any style and own every season, even if you have sensitive skin.",
            gototext: "Hydration, but Make it Fashion",
            link: "https://example.com/hydration-style",
            flexprop: "no-reverse"
        },
    ]

    return (
        <div className='w-[93%] md:w-[85%] mx-auto pt-20'>
            <div className='grid grid-cols-1 gap-5'>
                {
                    contents.map(content => (
                        <>
                            <div className={`m-5 my-10 flex flex-col ${(content?.flexprop) === 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row'} lg:justify-between items-center rounded-lg`}>
                                <div className="w-full md:w-1/2 lg:rounded-lg flex justify-center items-center">
                                    <img
                                        src={content.image}
                                        className="w-[417px] h-[501px] rounded-[25px]"
                                        alt="Loading..."
                                    />
                                </div>
                                <div className={`w-full space-y-8 md:w-1/2 pt-5 md:pt-0 ${(content?.flexprop) === 'reverse' ? 'md:me-20' : 'md:ms-20'} flex flex-col justify-center items-start`}>
                                    <p
                                        className="mb-3 font-bold text-3xl"
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
                                        className='link'
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