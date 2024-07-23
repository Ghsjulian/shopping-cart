import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import About from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import LatestProducts from "../components/LatestProducts";
import { getInfo } from "../Cookies";
import { useCart } from "../context/useCart";

const Home = () => {
    document.title =
        "Shopping Cart Official Website - Designed By Web Developer Ghs Julian";
    const { cart, dispatch, getCart } = useCart();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
      /*  dispatch({
            type: "INIT",
            payload: { init: getCart() }
        });
        */
    }, []);

    return (
        <>
            <HeroSection />
            <LatestProducts />
        </>
    );
};

export default Home;
