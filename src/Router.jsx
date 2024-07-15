import Layouts from "./layouts/Layouts";
import Protect from "./Protection/Protect";
import PrivatePath from "./Protection/PrivatePath";
import Home from "./pages/Home";
import About from "./components/AboutSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/404";
import LatestProducts from "./components/LatestProducts";
import Profile from "./components/Profile";
import ViewProduct from "./components/ViewProduct";
import Cart from "./components/Cart";
/* Admin Components Here */
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
/* Admin Components Here */

const MyRoutes = [
    {
        path: "/",
        index: true,
        element: (
            <Layouts>
                <Home />
            </Layouts>
        )
    },
    {
        path: "/about",
        element: (
            <Layouts>
                <About isTrue={true} />
            </Layouts>
        )
    },
    {
        path: "/signup",
        element: (
            <Protect>
                <Layouts>
                    <Signup />
                </Layouts>
            </Protect>
        )
    },
    {
        path: "/login",
        element: (
            <Protect>
                <Layouts>
                    <Login />
                </Layouts>
            </Protect>
        )
    },
    {
        path: "/view-product/:product-id",
        element: (
            <Layouts>
                <ViewProduct />
            </Layouts>
        )
    },
    {
        path: "/cart",
        element: (
            <PrivatePath>
                <Layouts>
                    <Cart />
                </Layouts>
            </PrivatePath>
        )
    },
    {
        path: "/profile",
        element: (
            <PrivatePath>
                <Layouts>
                    <Profile />
                </Layouts>
            </PrivatePath>
        )
    },
    {
        path: "/admin/dashboard",
        element: (
            <PrivatePath>
                <Layouts>
                    <Dashboard />
                </Layouts>
            </PrivatePath>
        )
    },
    {
        path: "/admin/add-product",
        element: (
                <Layouts>
                    <AddProduct />
                </Layouts>
        )
    },
    {
        path: "/latest-products",
        element: (
            <Layouts>
                <LatestProducts />
            </Layouts>
        )
    },
    {
        path: "*",
        element: <NotFound />
    }
];

export default MyRoutes;
