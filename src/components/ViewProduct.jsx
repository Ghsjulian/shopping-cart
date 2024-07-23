import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { getInfo } from "../Cookies";
import product from "../assets/products/tshirt_1.png";
import FetchProducts from "./FetchProducts";
import { useCart } from "../context/useCart";

const ViewProduct = () => {
    const { state, dispatch, cart, addToCart } = useCart();
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;
    const [products, setProducts] = useState(null);
    const [isProducts, setIsProducts] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantitiy] = useState(1);
    const fetchProduct = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                apiUrl + "/products/view-products/" + id
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
        console.log(cart);
    }, [id]);
    return (
        <>
            {products && (
                <>
                    {
                        (document.title =
                            "View Products - " + products.product_title)
                    }
                    <section data-aos="zoom-in" id="view" className="page">
                        <img
                            id="product-img"
                            src={products.product_img}
                            alt="Product Image"
                        />
                        <h2>{products.product_title}</h2>
                        <h4>
                            Products Price :{" "}
                            <span>{products.product_desc.price}</span>
                        </h4>
                        <div className="product-flex">
                            <div className="flex-col">
                                <h2>Product Descriptions : </h2>
                                <li>
                                    <i className="bx bx-check-circle"></i>
                                    <span>
                                        Price : {products.product_desc.price}
                                    </span>
                                </li>
                                <li>
                                    <i className="bx bx-check-circle"></i>
                                    <span>
                                        Size : {products.product_desc.size}
                                    </span>
                                </li>
                                <li>
                                    <i className="bx bx-check-circle"></i>
                                    <span>
                                        Width : {products.product_desc.width}
                                    </span>
                                </li>
                                <li>
                                    <i className="bx bx-check-circle"></i>
                                    <span>
                                        Color : {products.product_desc.color}
                                    </span>
                                </li>
                            </div>
                            <div className="flex-col">
                                <div className="flex-btn btn-flex">
                                    <button
                                        onClick={() => {
                                            setQuantitiy(quantity + 1);
                                        }}
                                    >
                                        +
                                    </button>
                                    <span>Quantity : {quantity}</span>
                                    <button
                                        onClick={() => {
                                            if (quantity == 1) {
                                                return;
                                            } else {
                                                setQuantitiy(quantity - 1);
                                            }
                                        }}
                                    >
                                        -
                                    </button>
                                </div>
                                <div className="flex-btn">
                                    <a
                                        onClick={() =>
                                            addToCart(products, quantity)
                                        }
                                        id="cart"
                                        href="#"
                                    >
                                        <i className="bx bx-cart-add"></i>
                                        <span>Add Cart</span>
                                    </a>
                                    <a id="fav" href="#">
                                        <i className="bx bx-heart"></i>
                                        <span>Add Favorites</span>
                                    </a>
                                    <a id="call" href="#">
                                        <i className="bx bx-phone"></i>
                                        <span>Contact Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section data-aos="zoom-in" className="page" id="products">
                        <h2>Related Products</h2>
                        <FetchProducts category={products.product_category} />
                    </section>
                </>
            )}
        </>
    );
};

export default ViewProduct;
