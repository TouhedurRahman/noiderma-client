import Banner from "../Banner/Banner";
import CategorizedFeature from "../CategorizedFeature/CategorizedFeature";
import CategorizedProductHome from "../CategorizedProductHome/CategorizedProductHome";
import ContactHome from "../ContactHome/ContactHome";
import DermaRecommended from "../DermaRecommended/DermaRecommended";
import DoctorsRecommended from "../DoctorsRecommended/DoctorsRecommended";
import ProductFeatureHome from "../ProductFeatureHome/ProductFeatureHome";
import SignFaq from "../SignFaq/SignFaq";
import WhyNoiderma from "../WhyNoiderma/WhyNoiderma";

const Home = () => {
    return (
        <div>
            <Banner />
            {/* < DiscoverHome /> */}
            <CategorizedProductHome />
            <WhyNoiderma />
            <CategorizedFeature />
            <DermaRecommended />
            <DoctorsRecommended />
            <SignFaq />
            <ProductFeatureHome />
            {/* <ProductsHome /> */}
            <ContactHome />
        </div>
    );
};

export default Home;