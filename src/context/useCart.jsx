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

    const addToCart = async (products, quantity) => {
        // if (!getInfo().userId) {
        //             navigate("/login");
        //         }
        const cartList = localStorage.getItem("cart");
        const data = {
            user: getInfo(),
            product_id: products._id,
            product_img: products.product_img,
            product_title: products.product_title,
            current_price: products.product_desc.price,
            price: products.product_desc.price,
            quantity
        };
        dispatch({
            type: "ADD_TO_CART",
            payload: { product: data }
        });
        localStorage.setItem("cartList", JSON.stringify(state.cart));

        // alert("Cart Added");

        /*
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
        */
    };
    const isCart = (cart, id) => {
        var res;
        cart.filter(item => {
            if (item.product_id === id) {
                res = true;
            } else {
                res = false;
            }
        });
        return res;
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
