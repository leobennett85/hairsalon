import React from "react";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
  <>
  <div className="container-navbar">
    <ul>
      <li><a href="" onClick={()=>navigate("/")}>Home</a></li>
      <li><a href="" onClick={()=>navigate("/Portfolio")}>Portfolio</a></li>
      <li><a href="" onClick={()=>navigate("/Services")}>Services</a></li>
      <li><a href="" onClick={()=>navigate("/Products")}>Products</a></li>
      <li><a href="" onClick={()=>navigate("/Testimonials")}>Testimonials</a></li>
    </ul>
  </div>
  </> 
  );
};

export default Navbar