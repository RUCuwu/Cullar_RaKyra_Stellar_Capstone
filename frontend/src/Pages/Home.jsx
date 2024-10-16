import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Qualitiies from "../components/Qualities";
import Menu from "../components/Menu";
import WhoAreWe from "../components/WhoAreWe";


const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Qualitiies />
            <Menu />
            <WhoAreWe />
            
        </>
    )
}

export default Home;