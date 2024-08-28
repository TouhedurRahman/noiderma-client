import Banner from "../Banner/Banner";
import CategorizedFeature from "../CategorizedFeature/CategorizedFeature";
import CategorizedProductHome from "../CategorizedProductHome/CategorizedProductHome";
import DermaRecommended from "../DermaRecommended/DermaRecommended";
import DiscoverHome from "../DiscoverHome/DiscoverHome";
import DoctorsRecommended from "../DoctorsRecommended/DoctorsRecommended";
import ProductFeatureHome from "../ProductFeatureHome/ProductFeatureHome";
import ProductsHome from "../ProductsHome/ProductsHome";
import SignFaq from "../SignFaq/SignFaq";
import WhyNoiderma from "../WhyNoiderma/WhyNoiderma";

const Home = () => {
    return (
        <div>
            <Banner />
            < DiscoverHome />
            <CategorizedProductHome />
            <WhyNoiderma />
            <CategorizedFeature />
            <DermaRecommended />
            <DoctorsRecommended />
            <SignFaq />
            <ProductFeatureHome />
            <ProductsHome />
        </div>
    );
};

export default Home;