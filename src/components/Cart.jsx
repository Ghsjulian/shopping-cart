import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import product1 from "../assets/products/tshirt_1.png";
import product2 from "../assets/products/tshirt_2.png";
import product3 from "../assets/products/tshirt_3.png";
import product4 from "../assets/products/tshirt_4.png";
import { useCart } from "../context/useCart";

const Cart = () => {
    const { cart, dispatch } = useCart();
    const handleQuantity = id => {
        dispatch({
            type: "SET_QUANTITY",
            payload: { product_id: id }
        });
    };
    const decreaseQuantity = id => {
        dispatch({
            type: "DECREASE_QUANTITY",
            payload: { id }
        });
    };
    return (
        <section data-aos="zoom-in" id="view" className="page">
            {/* <Loader text={{ msg: "Loading..." }} />*/}
            <h2>
                Your Cart - <span>{cart.length}</span>
            </h2>
            {cart.map((product, index) => {
                return (
                    <div className="cart" key={index}>
                        <div id="cart-col" className="cart-col">
                            <img src={product.product_img} />
                            <div className="price-col">
                                <span>{product.product_title}</span>
                                <span>Price : {product.price}</span>
                                <span>Your Quantity : {product.quantity}</span>
                            </div>
                        </div>
                        <div className="cart-col">
                            <div id="cart-btn">
                                <button
                                    onClick={e => {
                                        e.preventDefault();
                                        handleQuantity(product.product_id);
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    onClick={e => {
                                        e.preventDefault();
                                        decreaseQuantity(product.product_id);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                            <div id="action-btn">
                                <button>
                                    <i className="bx bx-show"></i>
                                </button>
                                <button>
                                    <i className="bx bxs-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="total">
                <h4>
                    Total Price : <span>570 TK BDT</span>
                </h4>
                <button id="order">Place Order</button>
            </div>
        </section>
    );
};

export default Cart;
