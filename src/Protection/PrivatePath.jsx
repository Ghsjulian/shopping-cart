import React, { useState, useEffect } from "react";
import { getInfo } from "../Cookies";
import { useNavigate, useLocation } from "react-router-dom";

const PrivatePath = ({ children }) => {
    const cookies = getInfo();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const isLoggedIn = cookies.token;
        if (!cookies.token && !cookies.userId) {
            navigate("/");
        }
    }, [cookies]);
    return cookies.token && children;
};
export default PrivatePath;
