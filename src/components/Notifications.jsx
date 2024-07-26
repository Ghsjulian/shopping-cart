import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";
import { useCart } from "../context/useCart";
import { getInfo } from "../Cookies";

const Notifications = () => {
    document.title = "Notifications - User Push Messages | Shopping Cart";
    const apiUrl = import.meta.env.VITE_API_URL;
    const { cart, getCart, dispatch } = useCart();
    const navigate = useNavigate();
    const priceRef = useRef(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const viewProduct = id => {
        navigate(`/view-product/${id}`);
    };
    const fetchOrder = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                apiUrl + "/get-order/" + getInfo().userId
            );
            if (response.data) {
                setData(response.data);
            } else {
                setIsLoading(false);
                console.log("No Products Found");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchOrder();
        if (isLoading) {
            return;
        }
    }, []);

    return (
        <section data-aos="zoom-in" id="view" className="page">
            <div
                className="signup-form"
                style={{
                    width: "90%",
                    maxWidth: "650px",
                    boxShadow: "none"
                }}
            >
                <h2>
                    <i
                        style={{
                            color: "#25d7ff",
                            textAlign: "center",
                            fontSize: "5rem",
                            margin: ".5rem auto"
                        }}
                        className="ri ri-notification-off-line"
                    ></i>
                </h2>
                <h4
                    style={{
                        textAlign: "center",
                        margin: ".5rem auto"
                    }}
                >
                    No Notification Found !
                </h4>
            </div>
            {data && (
                <div className="total">
                    <h4
                        style={{
                            textAlign: "center",
                            margin: ".5rem auto"
                        }}
                    >
                        {data.message}
                    </h4>
                </div>
            )}
        </section>
    );
};

export default Notifications;
