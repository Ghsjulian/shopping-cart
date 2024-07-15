import React from "react";
import Loader from "./Loader";
import product1 from "../assets/products/tshirt_1.png";
import product2 from "../assets/products/tshirt_2.png";
import product3 from "../assets/products/tshirt_3.png";
import product4 from "../assets/products/tshirt_4.png";

const Cart = () => {
    return (
        <section data-aos="zoom-in" id="view" className="page">
           {/* <Loader text={{ msg: "Loading..." }} />*/}
            <h2>
                Your Cart - <span>5</span>
            </h2>
            <div className="cart">
                <div id="cart-col" className="cart-col">
                    <img src={product1} />
                    <div className="price-col">
                        <span>Full Sleeve T-shirt</span>
                        <span>Price : 120TK BDT</span>
                        <span>Your Quantity : 5</span>
                    </div>
                </div>
                <div className="cart-col">
                    <div id="cart-btn">
                        <button>+</button>
                        <button>-</button>
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
            {/*  Example Here  */}
            <div className="cart">
                <div id="cart-col" className="cart-col">
                    <img src={product2} />
                    <div className="price-col">
                        <span>Full Sleeve T-shirt</span>
                        <span>Price : 120TK BDT</span>
                        <span>Your Quantity : 5</span>
                    </div>
                </div>
                <div className="cart-col">
                    <div id="cart-btn">
                        <button>+</button>
                        <button>-</button>
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
            <div className="cart">
                <div id="cart-col" className="cart-col">
                    <img src={product3} />
                    <div className="price-col">
                        <span>Full Sleeve T-shirt</span>
                        <span>Price : 120TK BDT</span>
                        <span>Your Quantity : 5</span>
                    </div>
                </div>
                <div className="cart-col">
                    <div id="cart-btn">
                        <button>+</button>
                        <button>-</button>
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
            <div className="cart">
                <div id="cart-col" className="cart-col">
                    <img src={product4} />
                    <div className="price-col">
                        <span>Full Sleeve T-shirt</span>
                        <span>Price : 120TK BDT</span>
                        <span>Your Quantity : 5</span>
                    </div>
                </div>
                <div className="cart-col">
                    <div id="cart-btn">
                        <button>+</button>
                        <button>-</button>
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
            <div className="cart">
                <div id="cart-col" className="cart-col">
                    <img src={product1} />
                    <div className="price-col">
                        <span>Full Sleeve T-shirt</span>
                        <span>Price : 120TK BDT</span>
                        <span>Your Quantity : 5</span>
                    </div>
                </div>
                <div className="cart-col">
                    <div id="cart-btn">
                        <button>+</button>
                        <button>-</button>
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
