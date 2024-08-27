import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import NavTop from '../../Pages/Home/NavTop/NavTop';
import Footer from '../../Pages/Shared/Footer/Footer';
import BuyNow from '../../Pages/Home/BuyNow/BuyNow';

const Main = () => {
    return (
        <div>
            {/* <NavTop /> */}
            <Navbar />
            <Outlet />
            <Footer />
            <BuyNow />
        </div>
    );
};

export default Main;