import React from "react";
import "./Home.css";
import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import Bottombar from "./Bottombar/Bottombar";


const Home = () => {
    return (
        <>
        <Topbar />
        <Navbar />
        <Bottombar />
        </>
    )
}

export default Home