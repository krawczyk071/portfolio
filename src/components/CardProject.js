import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { icons } from "../utils/data";
import IconSvg from "./IconSvg";
import { LangContext } from "./context/lang";

const CardProject = ({ project }) => {
  const [lang] = useContext(LangContext);
  // const data = lang ? textEn : textPl;

  return (
    <div className="cardproject" id={project.id}>
      <div className="cardproject__img">
        <img src={project.img_md} alt="" />
      </div>
      <div className="cardproject__txt">
        <h2 className="cardproject__title">{project.title}</h2>
        <div className="cardproject__tech">
          {project.tech.map((t) => (
            <IconSvg
              url={icons.find((i) => i.name === t).isvg}
              alt={t}
              cls="svgiconSm"
              key={t}
            />
          ))}
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: lang ? project.short : project.shortpl,
          }}
        ></p>
        <div className="cardproject__btns">
          <Link
            to={project.live}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link__btn link__btn--sm">Live</div>
          </Link>
          <Link
            to={project.git}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link__btn link__btn--sm">GitHub</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
