import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import NavTop from '../../Pages/Home/NavTop/NavTop';

const Main = () => {
    return (
        <div>
            <NavTop />
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;