import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ghs from "../assets/products/tshirt_1.png";

const AddProduct = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const messageRef = useRef(null);
    const btnRef = useRef(null);
    const [products, setProduct] = useState({
        product_title: "",
        product_desc: "",
        product_obj: null,
        product_category: "",
        product_img : ""
    });
    const createObject = string => {
        const strings = string.split(",");
        const obj = {};
        for (let i = 0; i < strings.length; i++) {
            let [key, value] = strings[i].split(":");
            key = key.trim();
            value = value.trim();
            obj[key] = value;
        }
        return obj;
    };
    const handleChange = event => {
        setProduct({ ...products, [event.target.name]: event.target.value });
    };
    const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProduct({ ...products, product_img: file });
    products.product_img = file;
  };
  
    const AddProduct = async () => {
        const obj = createObject(products.product_desc);
        products.product_obj = obj
        try {
        const response = await fetch(apiUrl+"/admin/add-product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(products)
        });
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error("Error:", error);
    }
    };
    
    return (
        <section data-aos="zoom-in" id="view" className="page one-page">
            <h2>Add Products</h2>
            <div id="add-product" className="signup-form">
                <img src={ghs} />
                <label htmlFor="product_img">Upload Product Image</label>
                <input type="file" id="product_img" hidden={true} onChange={handleFileChange}/>
                <input
                    name="product_title"
                    type="text"
                    placeholder="Enter Product Title"
                    onChange={handleChange}
                    value={products.product_title}
                />
                <input
                    name="product_category"
                    type="text"
                    placeholder="Enter Product Category"
                    onChange={handleChange}
                    value={products.product_category}
                />
                <textarea
                    name="product_desc"
                    placeholder="Enter Products Descriptions"
                    onChange={handleChange}
                    value={products.product_desc}
                ></textarea>
                <button onClick={AddProduct} className="submit">
                    Add Product
                </button>
            </div>
        </section>
    );
};

export default AddProduct;
