const Banner = () => {
    return (
        <div
            className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen bg-cover bg-center"
            style={{ backgroundImage: 'url("https://i.ibb.co.com/5XHq8Cdv/noiderma-banner-5.jpg")' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-start text-black">
                <div className="text-left ml-4 md:ml-32">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">Concentrated Care for <br /> All Skin Types</h1>
                    {/* <p className="text-base md:text-lg">Stand For All Types of Skin</p> */}
                    {/* <a
                        href="/contact"
                        className="mt-4 inline-block bg-[#014B88] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
                    >
                        Get in Touch
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
/* 

https://i.ibb.co.com/spf9jK2V/noiderma-banner-1.jpg
https://i.ibb.co.com/C52Wn2sv/noiderma-banner-2.jpg
https://i.ibb.co.com/KpGTz3RQ/noiderma-banner-3.jpg
https://i.ibb.co.com/MkVHjwnh/noiderma-banner-4.jpg

*/