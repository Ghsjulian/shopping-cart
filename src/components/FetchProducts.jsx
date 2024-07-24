import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { useCart } from "../context/useCart";

const FetchProducts = ({ category }) => {
    const navigate = useNavigate();
    const { state, dispatch, cart, addToCart, isCart } = useCart();
    const apiUrl = import.meta.env.VITE_API_URL;
    const [products, setProducts] = useState(null);
    const [isProducts, setIsProducts] = useState(true);
    const [isLoading, setIsLoading] = useState(true);


    const fetchProduct = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                apiUrl + "/products/category-product/" + category
            );
            if (response.data.products) {
                setProducts(response.data.products);
                setIsLoading(false);
            } else {
                setIsProducts(false);
                setIsLoading(false);
                console.log("No Products Found");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProduct();
        if (isLoading) {
            return;
        }
    }, [category]);
    return (
        <>
            <div className="grid-area">
                {isLoading && <Loader text="Loading..." />}
                {!isProducts && <h2> No Product Found </h2>}
                {products &&
                    products.map((product, index) => {
                        return (
                            <div
                                data-aos="zoom-in"
                                className="grid-col"
                                key={index}
                            >
                                <img src={product.product_img} />
                                <span>{product.product_desc.price}</span>
                                <h5>{product.product_title}</h5>
                                <div className="btn-area">
                                    <NavLink
                                        to={`/view-product/${product._id}`}
                                    >
                                        <i className="bx bx-show"></i>
                                        <span>View Product</span>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => addToCart(product, 1)}
                                        to="#"
                                    >
                                        <i className="bx bxs-cart-add"></i>
                                        <span>Add Cart</span>
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default FetchProducts;
