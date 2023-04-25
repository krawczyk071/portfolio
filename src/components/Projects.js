import React from "react";
import CardProject from "./CardProject";
import { projects } from "../utils/data";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1>projects</h1>
      {projects.map((project) => (
        <CardProject project={project} />
      ))}
    </div>
  );
};

export default Projects;
