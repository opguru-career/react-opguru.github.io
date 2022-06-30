import React from "react";
import "./Hero.css";
import Heading from "../../common/heading/Heading";

const Hero = () => {
  return (
    <div>
      <section id="hero">
        <h4>The future lies here</h4>
        <h1>Great Oppurtunities</h1>
        <h2>On your way</h2>
        <p>The future belongs to you.</p>
        <a href="./login.html">
          <button>Visit now</button>
        </a>
      </section>
      {/* <div className="margin"></div> */}
    </div>
  );
};

export default Hero;
