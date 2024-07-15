import React from "react";
import product from "../assets/products/tshirt_1.png";
import LatestProducts from "./LatestProducts"


const ViewProduct = () => {
    return (<>
        <section data-aos="zoom-in" id="view" className="page">
            <img id="product-img" src={product} alt="Product Image" />
            <h2>Full Sleeve T Shirt</h2>
            <h4>
                Products Price : <span>250TK BDT</span>
            </h4>
            <div className="product-flex">
                <div className="flex-col">
                    <h2>Product Descriptions : </h2>
                    <li>
                        <i className="bx bx-check-circle"></i>
                        <span>Price : 250TK BDT</span>
                    </li>
                    <li>
                        <i className="bx bx-check-circle"></i>
                        <span>Size : 34.5 X 46</span>
                    </li>
                    <li>
                        <i className="bx bx-check-circle"></i>
                        <span>Color : Light Blue</span>
                    </li>
                </div>
                <div className="flex-col">
                    <div className="flex-btn">
                        <a id="cart" href="#">
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
        <LatestProducts/>
        </>
    );
};

export default ViewProduct;
