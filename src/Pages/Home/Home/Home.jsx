import Banner from "../Banner/Banner";
import CategorizedFeature from "../CategorizedFeature/CategorizedFeature";
import DermaRecommended from "../DermaRecommended/DermaRecommended";
import DiscoverHome from "../DiscoverHome/DiscoverHome";
import DoctorsRecommended from "../DoctorsRecommended/DoctorsRecommended";

const Home = () => {
    return (
        <div>
            <Banner />
            < DiscoverHome />
            <CategorizedFeature />
            <DermaRecommended />
            <DoctorsRecommended />
            <p>Noiderma Loading...</p>
        </div>
    );
};

export default Home;