import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Qualitiies from "../components/Qualities";
import Menu from "../components/Menu";
import WhoAreWe from "../components/WhoAreWe";
import Team from "../components/Team";


const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Qualitiies />
            <Menu />
            <WhoAreWe />
            <Team />
            
        </>
    )
}

export default Home;