import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
  <>
  <div className="container-navbar">
    <ul>
      <li><a href="" onClick={()=>navigate("/")} className="text-navbar">Home</a></li>
      <li><a href="" onClick={()=>navigate("/Portfolio")}className="text-navbar">Portfolio</a></li>
      <li><a href="" onClick={()=>navigate("/Services")}className="text-navbar">Services</a></li>
      <li><a href="" onClick={()=>navigate("/Products")}className="text-navbar">Products</a></li>
      <li><a href="" onClick={()=>navigate("/Testimonials")}className="text-navbar">Testimonials</a></li>
    </ul>
  </div>
  </> 
  );
};

export default Navbar