import React from "react";
import "./Topbar.css";
import Logo from "../images/logo.svg";
import Booknow from "../Booknow/Booknow";

const Topbar = () => {
  return (
  <>
  <div className="topbar-container">
    <div className="logo">
      <img src={Logo} />
    </div>
    <div className="button-container-booknow">
      <Booknow />
    </div>
  </div>
  </>
  );
};

export default Topbar