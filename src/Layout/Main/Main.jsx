import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import NavTop from '../../Pages/Home/NavTop/NavTop';
import Footer from '../../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;