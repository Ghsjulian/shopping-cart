import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./components/AboutSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/404";
import LatestProducts from "./components/LatestProducts";

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
            <Layouts>
                <Signup />
            </Layouts>
        )
    },
    {
        path: "/login",
        element: (
            <Layouts>
                <Login />
            </Layouts>
        )
    },
    {
        path: "/skills",
        element: (
            <Layouts>
                <Skills isTrue={true} />
            </Layouts>
        )
    },
    {
        path: "/projects",
        element: (
            <Layouts>
                <Projects isTrue={true} />
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
