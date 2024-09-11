import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import SingleProduct from "../Pages/Products/SingleProduct/SingleProduct/SingleProduct";


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
                path: '/products/:id',
                element: <SingleProduct />
            }
        ]
    }
]);

export default router;