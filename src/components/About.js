import React from "react";
import { HashLink } from "react-router-hash-link";
import { eduLogos, icons, skills, skillsSM } from "../utils/data";
import LogoBanner from "./LogoBanner";
import EduBanner from "./EduBanner";

const About = () => {
  const edus = eduLogos.map((e) => icons.find((i) => i.name === e));
  const allSkills = [...skills, ...skillsSM];
  const topSkills = skills.map((s) => icons.find((i) => i.name === s));
  // console.log(skil);
  return (
    <>
      <div id="about" className="about main">
        <h1>ABOUT ME</h1>
        <p className="quote">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>

        <h2>My Skills</h2>
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

        <h2>Get to know me!</h2>
        <p>
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section. I also like sharing
          content related to the stuff that I have learned over the years in Web
          Development so it can help other people of the Dev Community. Feel
          free to Connect or Follow me on my Linkedin where I post useful
          content related to Web Development and Programming I'm open to Job
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills and experience then don't
          hesitate to contact me.(110)
        </p>
        <HashLink smooth to="#contact" className="link about__link">
          <div className="link__btn">Contact</div>
        </HashLink>

        <h2>Completed Trainings</h2>
        <EduBanner logos={edus} />
      </div>
    </>
  );
};

export default About;
