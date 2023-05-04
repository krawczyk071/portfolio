import React, { useContext } from "react";
import CardProject from "./CardProject";
import { projects } from "../utils/data";
import { LangContext } from "./context/lang";
import { textEn, textPl } from "../utils/data";

const Projects = () => {
  const [lang] = useContext(LangContext);
  const data = lang ? textEn : textPl;

  return (
    <>
      <div className="divider"></div>
      <div id="projects" className="projects main">
        <h1>{data.projects}</h1>
        <p className="quote">{data.projectsLine}</p>
        {projects.map((project) => (
          <CardProject project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
