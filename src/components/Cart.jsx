import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useCart } from "../context/useCart";

const Cart = () => {
    document.title = "Your Cart - See Your Cart List | Shopping Cart";
    const { cart, dispatch } = useCart();
    const navigate = useNavigate();
    const priceRef = useRef(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const viewProduct = id => {
        navigate(`/view-product/${id}`);
    };
    const makeCount = str => {
        const position = str.search("TK BDT");
        var newStr = "";
        for (let i = 0; i < position; i++) {
            newStr += str[i];
        }
        return parseInt(newStr);
    };
    const setTotal = () => {
        const localProduct = JSON.parse(localStorage.getItem("cartList"));
        var prices = [];
        var netprice = 0;
        localProduct.forEach(item => {
            prices.push(makeCount(item.price));
        });
        for (let index in prices) {
            netprice += prices[index];
        }
        priceRef.current.textContent = netprice + "TK BDT";
    };
    const handleQuantity = product => {
        const quantity = product.quantity + 1;
        if (product.quantity == 5) {
            return;
        }
        const currentPrice = makeCount(product.current_price);
        var countPrice = makeCount(product.price) + currentPrice + "TK BDT";
        dispatch({
            type: "SET_QUANTITY",
            payload: {
                product_id: product.product_id,
                price: countPrice,
                quantity
            }
        });
        //  setTotal();
    };
    const decreaseQuantity = product => {
        var quantity = product.quantity - 1;
        if (product.quantity == 1) {
            return;
        }
        const currentPrice = makeCount(product.current_price);
        var countPrice = makeCount(product.price) - currentPrice + "TK BDT";
        dispatch({
            type: "DECREASE_QUANTITY",
            payload: {
                product_id: product.product_id,
                price: countPrice,
                quantity
            }
        });
    };
    const removeCart = product => {
        dispatch({
            type: "REMOVE_CART",
            payload: {
                id: product.product_id
            }
        });
    };
    useEffect(() => {
        if (cart) {
            setTotal();
        }
        return;
    }, [cart]);

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
                                <span>
                                    Price :{" "}
                                    <span id="price">{product.price}</span>
                                </span>
                                <span>Your Quantity : {product.quantity}</span>
                            </div>
                        </div>
                        <div className="cart-col">
                            <div id="cart-btn">
                                <button
                                    onClick={e => {
                                        e.preventDefault();
                                        handleQuantity(product);
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    onClick={e => {
                                        e.preventDefault();
                                        decreaseQuantity(product);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                            <div id="action-btn">
                                <button
                                    onClick={() =>
                                        viewProduct(product.product_id)
                                    }
                                >
                                    <i className="bx bx-show"></i>
                                </button>
                                <button
                                    onClick={() => {
                                        removeCart(product);
                                    }}
                                >
                                    <i className="bx bxs-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="total">
                <h4>
                    Total Price : <span ref={priceRef}></span>
                </h4>
                <button id="order">Place Order</button>
            </div>
        </section>
    );
};

export default Cart;
