import Banner from "../Banner/Banner";
import CategorizedFeature from "../CategorizedFeature/CategorizedFeature";
import DermaRecommended from "../DermaRecommended/DermaRecommended";
import DiscoverHome from "../DiscoverHome/DiscoverHome";

const Home = () => {
    return (
        <div>
            <Banner />
            < DiscoverHome />
            <CategorizedFeature />
            <DermaRecommended />
            <p>Noiderma Loading...</p>
        </div>
    );
};

export default Home;