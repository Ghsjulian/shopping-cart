import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import LatestProducts from "../components/LatestProducts"
const Home = () => {
   // document.title = "Ghs Julian - Official Portfolio Web Developer ";
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });

    return (
        <>
            <HeroSection />
           <LatestProducts/>
           {/* <About isTrue={false} />
            <Skills isTrue={false} />
            <Projects isTrue={false} />
            <Contact isTrue={false} />
            */}
        </>
    );
};

export default Home;
