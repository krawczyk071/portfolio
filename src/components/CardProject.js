import React from "react";
import { Link } from "react-router-dom";

const CardProject = ({ project }) => {
  return (
    <div className="projects main">
      <div className="projects__img">
        <img src={project.img_md} alt="" />
      </div>
      <div className="projects__txt">
        <h1>{project.title}</h1>
        <p>{project.short}</p>
        <button className="btn2">Live</button>
        {/* {project.live} */}
        <Link to={`project/${project.id}`}>more</Link>
      </div>
    </div>
  );
};

export default CardProject;
