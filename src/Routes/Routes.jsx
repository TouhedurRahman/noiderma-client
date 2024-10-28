import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import SingleProduct from "../Pages/Products/SingleProduct/SingleProduct/SingleProduct";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Products from "../Pages/Products/Products/Products";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/products/:id',
                element: <SingleProduct />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            }
        ]
    }
]);

export default router;