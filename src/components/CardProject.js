import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../utils/data";

const CardProject = ({ project }) => {
  return (
    <div className="cardproject" id={project.id}>
      <div className="cardproject__img">
        <img src={project.img_md} alt="" />
      </div>
      <div className="cardproject__txt">
        <h2 className="cardproject__title">{project.title}</h2>
        <div className="cardproject__tech">
          {project.tech.map(
            (t) =>
              icons.find((i) => i.name === t)?.icon ||
              icons.find((i) => i.name === t)?.svgicon ||
              "X"
          )}
        </div>
        <p>{project.short}</p>
        <div className="cardproject__btns">
          <Link to={project.live} className="link">
            <div className="link__btn link__btn--sm">Live</div>
          </Link>
          <Link to={`project/${project.id}`} className="link">
            <div className="link__btn link__btn--sm">More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
