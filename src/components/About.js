import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { eduLogos, icons, skills, skillsSM } from "../utils/data";
import LogoBanner from "./LogoBanner";
import EduBanner from "./EduBanner";
import { LangContext } from "./context/lang";
import { textEn, textPl } from "../utils/data";

const About = () => {
  const [lang] = useContext(LangContext);
  const data = lang ? textEn : textPl;

  const edus = eduLogos.map((e) => icons.find((i) => i.name === e));
  const allSkills = [...skills, ...skillsSM];
  const topSkills = skills.map((s) => icons.find((i) => i.name === s));
  // console.log(skil);
  return (
    <>
      <div id="about" className="about main">
        <h1>{data.about}</h1>
        <p className="quote">{data.aboutLine}</p>

        <h2>{data.aboutSkills}</h2>
        <div className="about__skills__logos">
          <LogoBanner logos={topSkills} />
        </div>

        <div className="about__skills">
          {allSkills.map((s) => (
            <span className="badge" key={s}>
              {s}
            </span>
          ))}
        </div>

        <h2>{data.aboutHi}</h2>
        <p>{data.aboutText}</p>
        <HashLink smooth to="#contact" className="link about__link">
          <div className="link__btn">{data.aboutBtn}</div>
        </HashLink>

        <h2>{data.aboutTrainings}</h2>
        <EduBanner logos={edus} />
      </div>
    </>
  );
};

export default About;
