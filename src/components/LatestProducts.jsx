import React from "react";
import tshirt_1 from "../assets/products/tshirt_1.png";
import tshirt_2 from "../assets/products/tshirt_2.png";
import tshirt_3 from "../assets/products/tshirt_3.png";
import tshirt_4 from "../assets/products/tshirt_4.png";

const LatestProducts = () => {
    return (
        <section className="page">
            <h2>Our Latest Products</h2>
            <p id="desc">
                Explore our new updated in stock products, Our latest products
                are available in the stock, for more details or buy one please
                order or cart now.
            </p>
            <div className="grid-area">
                <div className="grid-col">
                    <img src={tshirt_1} />
                    <span>Price : 80$</span>
                    <h5>Full Sleeve T-Shirt </h5>
                    <div className="btn-area">
                        <a href="#">View Product</a>
                        <a href="#">
                            <i className="bx bx-cart"></i> Add Cart
                        </a>
                    </div>
                </div>
                <div className="grid-col">
                    <img src={tshirt_2} />
                    <span>Price : 180$</span>
                    <h5>Full Sleeve T-Shirt </h5>
                    <div className="btn-area">
                        <a href="#">View Product</a>
                        <a href="#">
                            <i className="bx bx-cart"></i> Add Cart
                        </a>
                    </div>
                </div>
                <div className="grid-col">
                    <img src={tshirt_3} />
                    <span>Price : 79$</span>
                    <h5>Full Sleeve T-Shirt </h5>
                    <div className="btn-area">
                        <a href="#">View Product</a>
                        <a href="#">
                            <i className="bx bx-cart"></i> Add Cart
                        </a>
                    </div>
                </div>
                <div className="grid-col">
                    <img src={tshirt_4} />
                    <span>Price : 120$</span>
                    <h5>Full Sleeve T-Shirt </h5>
                    <div className="btn-area">
                        <a href="#">View Product</a>
                        <a href="#">
                            <i className="bx bx-cart"></i> Add Cart
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
