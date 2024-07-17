import React, { useState, useEffect } from "react";
import { getInfo } from "../Cookies";
import { useNavigate, useLocation } from "react-router-dom";

const PrivatePath = ({ children }) => {
    const cookies = getInfo();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!cookies.token && !cookies.userId) {
            navigate("/login");
        }
    }, [cookies]);
    return cookies.token && cookies.userId === "669654273140bd66be3b9726" && children;
};
export default PrivatePath;
