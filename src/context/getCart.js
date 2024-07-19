import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { getInfo } from "../Cookies";

export const getCart = async () => {
    try {
        setIsLoading(true);
        const response = await axios.get(
            `${apiUrl}/products/get-cart/${getInfo().userId}`
        );
        console.log(response);
        if (response.data.type) {
            return response.data.cartList;
        } else {
            return []
        }
    } catch (error) {
        console.log(error);
    }
};

