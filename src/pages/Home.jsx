import React from "react";
import "./Home.css";
import Topbar from "../components/Topbar/Topbar";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Bottombar from "../components/Bottombar/Bottombar";

const Home = () => {
    return (
        <>   
    
        <Topbar />
        <Navbar />
        <Intro />
        <Bottombar />
        {/*
        <div>
            <img src={Logo} className="logo" />
        </div> 
    */}
        </>
    )
}

export default Home