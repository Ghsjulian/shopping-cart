import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ghs from "../assets/img/ghs_10.png";

const Header = () => {
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
    return (
        <>
            <header ref={headerRef} className="header" data-aos="zoom-in">
                <div className="nav-menu" data-aos="zoom-in">
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
                        <li>
                            <NavLink
                                onClick={closeHeader}
                                to="/skills"
                                className={path == "/skills" ? "active" : ""}
                            >
                                <i className="ri ri-tools-fill"></i> My Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeHeader}
                                to="/projects"
                                className={path == "/projects" ? "active" : ""}
                            >
                                <i className="ri ri-building-line"></i> Latest
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeHeader}
                                to="/about"
                                className={path == "/about" ? "active" : ""}
                            >
                                <i className="bx bx-user-circle"></i> About
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
                    </ul>
                </div>
            </header>
            <nav className="top-bar">
                <h3>Shopping-Cart</h3>
                <button onClick={openHeader}>
                    <i className={`bx bx-${isOpen ? "x" : "menu"}`}></i>
                </button>
                <div className="top-bar-links">
                <NavLink to="/contact">
                    <i className="bx bxl-whatsapp"></i>
                </NavLink>
                <NavLink to="/contact">
                    <i className="bx bxl-whatsapp"></i>
                </NavLink>
                <NavLink to="/contact">
                    <i className="bx bxl-whatsapp"></i>
                </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Header;
