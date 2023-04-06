import React from "react";
import sample from './vid.mp4';
import "./Intro.css";

const Intro = () => {
  return (
  <>
  <div className="container-banner">
  <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
  </video>
    
  </div>
  </>
  );
};

export default Intro