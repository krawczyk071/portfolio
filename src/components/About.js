import React from "react";
import { HashLink } from "react-router-hash-link";
import { icons, skills } from "../utils/data";
import LogoBanner from "./LogoBanner";

const About = () => {
  return (
    <div id="about" className="about main">
      <h1>ABOUT ME</h1>
      <p className="quote">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <h2>Get to know me!</h2>
      <p>
        I'm a Frontend Web Developer building the Front-end of Websites and Web
        Applications that leads to the success of the overall product. Check out
        some of my work in the Projects section. I also like sharing content
        related to the stuff that I have learned over the years in Web
        Development so it can help other people of the Dev Community. Feel free
        to Connect or Follow me on my Linkedin where I post useful content
        related to Web Development and Programming I'm open to Job opportunities
        where I can contribute, learn and grow. If you have a good opportunity
        that matches my skills and experience then don't hesitate to contact me.
      </p>
      <HashLink to="#contact" className="link">
        <div className="link__btn">Contact</div>
      </HashLink>
      <h2>My Skills</h2>
      <div className="about__skills">
        {skills.map((s) => (
          <span className="badge">{s}</span>
        ))}
      </div>
      <h2>Completed Trainings</h2>
      <div className="about__skills__logos">
        <LogoBanner logos={icons} />
      </div>
      <div className="test">
        <img
          src={icons.find((i) => i.name === "Coursera").svg}
          alt=""
          className="modsvg"
        />
      </div>
    </div>
  );
};

export default About;
