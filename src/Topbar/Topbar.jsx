import React from "react";
import "./Topbar.css";
import Logo from "../images/logo.svg"

const Topbar = () => {
  return (
  <>
  <div className="topbar-container">
    <div className="logo">
      <img src={Logo} />
    </div>
  </div>
  </>
  );
};

export default Topbar