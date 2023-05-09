import React from "react";
import "./Portfolio.css";
import Topbar from "../components/Topbar/Topbar";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Bottombar from "../components/Bottombar/Bottombar";

const Portfolio = () => {
    return (
        <>   
    
        <Topbar />
        <Navbar />
        <Bottombar />
        {/*
        <div>
            <img src={Logo} className="logo" />
        </div> 
    */}
        </>
    )
}

export default Portfolio