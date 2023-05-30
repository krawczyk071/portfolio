import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { projects } from "../utils/data";
import { LangContext } from "./context/lang";
import { textEn, textPl } from "../utils/data";

const Hero = () => {
  const [lang] = useContext(LangContext);
  const data = lang ? textEn : textPl;

  return (
    <div className="mybg">
      <div className="hero">
        <h1>{data.hero}</h1>
        <div className="hero__cnt">
          <HashLink smooth to="#food" className="hero__cnt__img card1">
            <img src={projects[1].img_cover} alt="" />
          </HashLink>
          <HashLink smooth to="#shop" className="hero__cnt__img card2">
            <img src={projects[3].img_cover} alt="" />
          </HashLink>
          <HashLink smooth to="#tattoo" className="hero__cnt__img card3">
            <img src={projects[5].img_cover} alt="" />
          </HashLink>
          <HashLink smooth to="#watch" className="hero__cnt__img card4">
            <img src={projects[0].img_cover} alt="" />
          </HashLink>{" "}
          <HashLink smooth to="#rental" className="hero__cnt__img card5">
            <img src={projects[2].img_cover} alt="" />
          </HashLink>
          <HashLink smooth to="#movies" className="hero__cnt__img card6">
            <img src={projects[4].img_cover} alt="" />
          </HashLink>
          <HashLink smooth to="#mern" className="hero__cnt__img card7">
            <img src={projects[6].img_cover} alt="" />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
