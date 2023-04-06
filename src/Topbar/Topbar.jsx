import React from "react";
import "./Topbar.css";
import Booknow from "../Booknow/Booknow";

const Topbar = () => {
  return (
  <>
  <div className="topbar-container">
    <div className="button-container-booknow">
      <Booknow />
    </div>
  </div>
  </>
  );
};

export default Topbar