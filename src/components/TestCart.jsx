import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { getInfo } from "../Cookies";
import { useCart } from "../context/useCart";

const TestCart = () => {
    const { cart, dispatch } = useCart();
    const apiUrl = import.meta.env.VITE_API_URL;
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProduct] = useState(null);
    const getCart = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${apiUrl}/products/get-cart/${getInfo().userId}`
            );
            if (response.data.type) {
                setProduct(response.data.cartList);
                // dispatch({
                //                     type: "INIT",
                //                     payload: { init: response.data.cartList }
                //                 });
                setIsLoading(false);
            } else {
                setIsLoading(true);
            }
        } catch (error) {
            setIsLoading(true);
            console.log(error);
        }
    };
    useEffect(() => {
        getCart();
        if (isLoading) {
            return;
        }
        if (products) {
            dispatch({ type: "INIT", payload: { init: products } });
        }
    }, [cart]);
    //   return <div>{!isLoading && products && JSON.stringify(cart)}</div>;
};

export default TestCart;
