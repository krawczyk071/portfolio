import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Slider from "../components/Slider";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Slider />
    </>
  );
};

export default Homepage;
