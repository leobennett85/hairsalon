import React from "react";
import "./Home.css";
import Topbar from "./Topbar/Topbar";
import Logo from "./images/logo.svg";
import Navbar from "./Navbar/Navbar";
import Bottombar from "./Bottombar/Bottombar";

const Portfolio = () => {
    return (
            <>        
        <Topbar />
        <Navbar />
        <Bottombar />
        <div className="logo">
            <img src={Logo} />
        </div>
        </>)
}

export default Portfolio