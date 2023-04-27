import React from "react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className="mybg">
      <div className="hero main">
        <h1>Discover my Work</h1>
        <div className="hero__cnt">
          <HashLink smooth to="#rental" className="hero__cnt__img card1">
            <img src="./img/smbikes.png" alt="" />
          </HashLink>
          <HashLink smooth to="#shop" className="hero__cnt__img card2">
            <img src="./img/smhats.png" alt="" />
          </HashLink>
          <HashLink smooth to="#movies" className="hero__cnt__img card3">
            <img src="./img/smmovies.png" alt="" />
          </HashLink>
          <HashLink smooth to="#tattoo" className="hero__cnt__img card4">
            <img src="./img/smtattoo.png" alt="" />
          </HashLink>
          <div className="hero__cnt__img card5"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
