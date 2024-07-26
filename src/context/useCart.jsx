import {
    useState,
    useEffect,
    useRef,
    createContext,
    useContext,
    useReducer
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { cartReducer } from "../reducer/cartReducer";
import { getInfo } from "../Cookies";

const apiUrl = import.meta.env.VITE_API_URL;
const CartContext = createContext();

const initialstate = {
    cart: JSON.parse(localStorage.getItem("cartList")) ?? []
};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialstate);
    const getCart = () => {
        const cartList = localStorage.getItem("cartList");
        if (cartList) {
            return JSON.parse(cartList);
        }
    };

    const addToCart = async (products, currentPrice, quantity) => {
        if (getInfo().userId) {
            const data = {
                user: getInfo(),
                product_id: products._id,
                product_img: products.product_img,
                product_title: products.product_title,
                current_price: currentPrice,
                price: products.product_desc.price,
                quantity
            };
            dispatch({
                type: "ADD_TO_CART",
                payload: { product: data }
            });
        }
        const addToFavourite = async (products, currentPrice, quantity) => {
            const data = {
                user: getInfo(),
                product_id: products._id,
                product_img: products.product_img,
                product_title: products.product_title,
                current_price: currentPrice,
                price: products.product_desc.price,
                quantity
            };
            dispatch({
                type: "ADD_TO_CART",
                payload: { product: data }
            });
        };
    };
    const isCart = id => {
        const cartList = localStorage.getItem("cartList");
        const data = JSON.parse(cartList);
        data.map(item => {
            return item.product_id;
        });
    };
    return (
        <CartContext.Provider
            value={{ ...state, dispatch, addToCart, getCart, isCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    return useContext(CartContext);
};

export { CartProvider, useCart, CartContext };
