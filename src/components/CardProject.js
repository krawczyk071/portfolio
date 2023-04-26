import React from "react";
import { Link } from "react-router-dom";

const CardProject = ({ project }) => {
  return (
    <div className="cardproject" id={project.id}>
      <div className="cardproject__img">
        <img src={project.img_md} alt="" />
      </div>
      <div className="cardproject__txt">
        <h2>{project.title}</h2>
        <p>{project.short}</p>

        <Link to={project.live} className="link">
          <div className="link__btn">Live</div>
        </Link>
        <Link to={`project/${project.id}`} className="link">
          <div className="link__btn">More</div>
        </Link>
      </div>
    </div>
  );
};

export default CardProject;
