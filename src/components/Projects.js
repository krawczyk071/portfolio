import React from "react";
import CardProject from "./CardProject";
import { projects } from "../utils/data";

const Projects = () => {
  return (
    <>
      <div class="divider"></div>
      <div id="projects" className="projects main">
        <h1>projects</h1>
        <p className="quote">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
        {projects.map((project) => (
          <CardProject project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
