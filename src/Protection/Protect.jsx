import React, { useState, useEffect } from "react";
import { getInfo } from "../Cookies";
import { useNavigate, useLocation } from "react-router-dom";

const protectedRoutes = ["/dashboard", "/profile", "/admin"]; // Your protected routes
const Protect = ({ children }) => {
    const cookies = getInfo();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const isLoggedIn = cookies.token;
        if (cookies.token && cookies.userId) {
            navigate("/"); // Redirect to home if not logged in
            return;
        }
        if (protectedRoutes.includes(location.pathname)) {
            // Check if current route is protected
            return; // Allow access if protected and logged in
        }
        // Not a protected route, allow access
    }, [cookies]);

    return (<>
        {!cookies.token&&children}
</>)
};
export default Protect;
