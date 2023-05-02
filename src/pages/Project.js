import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../utils/data";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  return (
    <div className="detail main">
      <div className="detail__img">
        <img src={project.img_xl} alt="" />
      </div>
      <h1>Project Overview</h1>
      <p>{project.long}</p>

      <h1>Tools Used</h1>
      <div>
        {project.tech.map((t) => (
          <span className="badge" key={t}>
            {t}
          </span>
        ))}
      </div>
      <h1>See Live</h1>
      <button className="btn">Live</button>
      {/* {project.live}
      {project.git} */}
      <button className="btn">Github</button>
    </div>
  );
};

export default Project;
