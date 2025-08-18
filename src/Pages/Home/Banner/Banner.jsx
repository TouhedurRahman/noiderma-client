const Banner = () => {
    return (
        <div
            className="relative h-[800px] bg-cover bg-center"
            style={{ backgroundImage: 'url("https://i.ibb.co.com/6RwT1bhV/noiderma-banner.jpg")' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <div className="text-center px-4 pt-16">
                    <h1 className="text-4xl font-bold mb-2">One Nature's Touch For Every Day</h1>
                    <p className="text-lg">Stand For All Tipes of Skin</p>
                    <a
                        href="/contact"
                        className="mt-4 inline-block bg-[#014B88] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;