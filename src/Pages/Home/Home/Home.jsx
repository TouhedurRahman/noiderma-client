import Banner from "../Banner/Banner";
import CategorizedFeature from "../CategorizedFeature/CategorizedFeature";
import DermaRecommended from "../DermaRecommended/DermaRecommended";
import DiscoverHome from "../DiscoverHome/DiscoverHome";
import DoctorsRecommended from "../DoctorsRecommended/DoctorsRecommended";
import ProductFeatureHome from "../ProductFeatureHome/ProductFeatureHome";
import SignFaq from "../SignFaq/SignFaq";

const Home = () => {
    return (
        <div>
            <Banner />
            < DiscoverHome />
            <CategorizedFeature />
            <DermaRecommended />
            <DoctorsRecommended />
            <SignFaq />
            <ProductFeatureHome />
            <p>Noiderma Loading...</p>
        </div>
    );
};

export default Home;