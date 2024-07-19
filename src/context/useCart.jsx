import {
    useState,
    useEffect,
    useRef,
    createContext,
    useContext,
    useReducer
} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { cartReducer } from "../reducer/cartReducer";
import { getInfo } from "../Cookies";
import { getCart } from "../context/getCart.js";

const apiUrl = import.meta.env.VITE_API_URL;
const CartContext = createContext();

const initialstate = {
    cart: getCart() ? getCart() :[]
};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialstate);

    const addToCart = async (products, quantity) => {
        const data = {
            user: getInfo(),
            product_id: products._id,
            product_img: products.product_img,
            product_title: products.product_title,
            price: products.product_desc.price,
            quantity
        };
        const response = await fetch(apiUrl + "/products/add-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (responseData.code == 200) {
            alert("Cart Added!");
        } else {
            alert("This Product Already In Your Cart List");
        }
    };
    useEffect(() => {}, [state.cart]);
    return (
        <CartContext.Provider value={{ ...state, dispatch, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    return useContext(CartContext);
};

export { CartProvider, useCart, CartContext };
