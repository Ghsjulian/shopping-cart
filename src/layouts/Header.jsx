import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ghs from "../assets/img/ghs_10.png";
import { getInfo, deleteCookie } from "../Cookies";

const Header = () => {
    const navigate = useNavigate();
    const flashRef = useRef(null);
    const flashMessage = useRef(null);
    const headerRef = useRef(null);
    const [isOpen, setisOpen] = useState(false);
    const openHeader = () => {
        headerRef.current.classList.toggle("show-header");
        setisOpen(!isOpen);
    };
    const closeHeader = () => {
        headerRef.current.classList.remove("show-header");
        setisOpen(!isOpen);
    };
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    const logout = async () => {
        closeHeader();
        const info = getInfo();
        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            flashRef.current.classList.add("flash");
            const response = await fetch(apiUrl + "/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(info)
            });
            const responseData = await response.json();
            if (responseData.type) {
                flashMessage.current.textContent = responseData.success;
                if (deleteCookie("e-comUser")) {
                    navigate("/login");
                }
            } else {
                flashMessage.current.textContent = responseData.error;
            }
        } catch (error) {
            flashMessage.current.textContent = error;
        }
    };

    return (
        <>
            <header ref={headerRef} className="header" data-aos="zoom-in">
                <div className="nav-menu" data-aos="zoom-in">
                    <h2>Main Menu </h2>
                    <ul>
                        <li>
                            <NavLink
                                onClick={closeHeader}
                                to="/"
                                className={path == "/" ? "active" : ""}
                            >
                                <i className="bx bx-home"></i>Home
                            </NavLink>
                        </li>
                        {getInfo().token && (
                            <>
                                <li>
                                    <NavLink
                                        onClick={closeHeader}
                                        to="/profile"
                                        className={
                                            path == "/profile" ? "active" : ""
                                        }
                                    >
                                        <i className="bx bx-user-circle"></i>
                                        Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={closeHeader}
                                        to="/notification"
                                        className={
                                            path == "/notification"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <i className="bx bx-bell"></i>
                                        Notifications
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={closeHeader}
                                        to="/cart"
                                        className={
                                            path == "/cart" ? "active" : ""
                                        }
                                    >
                                        <i className="bx bx-cart"></i> Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={closeHeader}
                                        to="/orders"
                                        className={
                                            path == "/orders" ? "active" : ""
                                        }
                                    >
                                        <i className="bx bx-shopping-bag"></i>
                                        Orders
                                    </NavLink>
                                </li>
                            </>
                        )}
                        <li>
                            <NavLink
                                onClick={closeHeader}
                                to="/categories"
                                className={
                                    path == "/categories" ? "active" : ""
                                }
                            >
                                <i className="bx bx-sitemap"></i>
                                Categories
                            </NavLink>
                        </li>

                        {/* If User Not Login */}
                        {!getInfo().token && (
                            <>
                                <li>
                                    <NavLink
                                        onClick={closeHeader}
                                        to="/login"
                                        className={
                                            path == "/login" ? "active" : ""
                                        }
                                    >
                                        <i className="bx bx-log-in-circle"></i>
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={closeHeader}
                                        to="/signup"
                                        className={
                                            path == "/signup" ? "active" : ""
                                        }
                                    >
                                        <i className="bx bx-user-plus"></i>
                                        Signup
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {/* If User Not Login */}

                        <li>
                            <NavLink
                                onClick={closeHeader}
                                to="/about"
                                className={path == "/about" ? "active" : ""}
                            >
                                <i className="bx bx-info-circle"></i> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeHeader}
                                to="/contact"
                                className={path == "/contact" ? "active" : ""}
                            >
                                <i className="bx  bxl-whatsapp"></i> Contact
                            </NavLink>
                        </li>
                        {/*If User Logged In */}
                        {getInfo().token && (
                            <li>
                                <NavLink
                                    style={{ backgroundColor: "transparent" }}
                                    onClick={() => {
                                        logout();
                                    }}
                                    to="#"
                                    className={
                                        path == "/logout" ? "active" : ""
                                    }
                                >
                                    <i className="bx bx-log-out-circle"></i>
                                    Logout
                                </NavLink>
                            </li>
                        )}
                        {/*If User Logged In */}
                    </ul>
                </div>
            </header>
            <nav className="top-bar">
                <h3>Shopping-Cart</h3>
                <button onClick={openHeader}>
                    <i className={`bx bx-${isOpen ? "x" : "menu"}`}></i>
                </button>
                <div className="top-bar-links">
                    <NavLink to="#">
                        <i className="bx bx-search-alt-2"></i>
                    </NavLink>
                    <NavLink to="/notification">
                        <i className="bx bx-bell"></i>
                    </NavLink>
                    <NavLink to="/cart">
                        <i className="bx bx-cart"></i>
                    </NavLink>
                </div>
            </nav>
            <div ref={flashRef}>
                <h2 ref={flashMessage}>Please Wait...</h2>
            </div>
        </>
    );
};

export default Header;
