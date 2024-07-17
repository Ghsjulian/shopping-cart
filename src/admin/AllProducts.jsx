import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import ghs from "../assets/products/tshirt_1.png";
import Loader from "../components/Loader";

const AllProducts = () => {
    const navigate = useNavigate()
    const apiUrl = import.meta.env.VITE_API_URL;
    const [products, setProducts] = useState(null);
    const [isProducts, setIsProducts] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProduct = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(apiUrl + "/admin/fetch-products");
            if (response.data.products) {
                console.log(response.data);
                setProducts(response.data.products);
                setIsLoading(false);
            } else {
                setIsProducts(false);
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
    }, [isLoading]);
    const editProduct = id => {
        navigate(`/admin/edit-product/${id}`)
    };
    const deleteProduct = id => {
        console.log(id);
    };

    return (
        <section data-aos="zoom-in" id="view" className="page">
            {/*isLoading && <Loader text="Loading..." />*/}
            {!isProducts && <h2> No Product Added Yet </h2>}
            {products && (
                <>
                    <h2>Added Products List</h2>
                    {products.map((product, index) => {
                        return (
                            <div className="cart" key={index}>
                                <div id="cart-col" className="cart-col">
                                    <img src={product.product_img} alt="Product Image"/>
                                    <div className="price-col">
                                        <span>{product.product_title}</span>
                                        <span>
                                            Price : {product.product_desc.price}
                                        </span>
                                    </div>
                                </div>
                                <div className="cart-col">
                                    <div id="action-btn">
                                        <button
                                            onClick={() => {
                                                editProduct(product._id);
                                            }}
                                        >
                                            <i className="bx bx-pen"></i>
                                        </button>
                                        <button
                                            onClick={() => {
                                                deleteProduct(product._id);
                                            }}
                                        >
                                            <i className="bx bxs-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </section>
    );
};

export default AllProducts;
