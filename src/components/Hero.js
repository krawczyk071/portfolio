import React from "react";
import LogoBanner from "./LogoBanner";
import { icons } from "../utils/data";

const Hero = () => {
  return (
    <div className="mybg">
      <div className="hero main">
        <h1>Discover my Work</h1>
        <div className="hero__cnt">
          <div className="hero__cnt__img card1">
            <img src="./img/smbikes.png" alt="" />
          </div>
          <div className="hero__cnt__img card2">
            <img src="./img/smhats.png" alt="" />
          </div>
          <div className="hero__cnt__img card3">
            <img src="./img/smmovies.png" alt="" />
          </div>
          <div className="hero__cnt__img card4">
            <img src="./img/smtattoo.png" alt="" />
          </div>
          <div className="hero__cnt__img card5"></div>
        </div>
      </div>
      <LogoBanner logos={icons} />
    </div>
  );
};

export default Hero;
