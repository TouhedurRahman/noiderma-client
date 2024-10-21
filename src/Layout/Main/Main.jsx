import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import NavTop from '../../Pages/Home/NavTop/NavTop';
import Footer from '../../Pages/Shared/Footer/Footer';
import BuyNow from '../../Pages/Home/BuyNow/BuyNow';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <div>
            {/* <NavTop /> */}
            <Navbar />
            <Outlet />
            <Footer />
            <BuyNow />
            <ScrollToTop />
        </div>
    );
};

export default Main;