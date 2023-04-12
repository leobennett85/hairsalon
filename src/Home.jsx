import React from "react";
import "./Home.css";
import Topbar from "./Topbar/Topbar";
import Logo from "./images/logo.svg";
import Intro from "./Intro/Intro";
import Navbar from "./Navbar/Navbar";
import Bottombar from "./Bottombar/Bottombar";

const Home = () => {
    return (
        <>   
    
        <Topbar />
        <Navbar />
        <Intro />
        <Bottombar />
        <div>
            <img src={Logo} className="logo" />
        </div> 
        </>
    )
}

export default Home