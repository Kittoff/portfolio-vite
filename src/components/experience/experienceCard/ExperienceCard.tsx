import React, { useEffect } from "react";
import useMediaQuery from "../../../hooks/useMediaQuerry.js";
import "./experienceCard.css";

const ExperienceCard = ({
  name,
  tasks,
  tools,
  client,
  description,
  image,
  technos,
}) => {
  const isAboveLarge = useMediaQuery("(min-width: 421px)");

  const handleLongClientName = (clientName: string) => {
    if (!isAboveLarge) {
      if (clientName === "Airbus Defense and Space") {
        return "ADS";
      }
    }
    return clientName;
  };
  useEffect(() => {}, []);
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-title">
          <h2>{name}</h2>
          <h3>{handleLongClientName(client)}</h3>
        </div>
        <div className="line" />
        <div className="description">
          <h4>what is it about ?</h4>
          <p>{description}</p>
        </div>
        <div className="tasks">
          <h4>Tasks : </h4>
          <ul>
            {tasks.map((task: string) => {
              return <li key={task}>{task}</li>;
            })}
          </ul>
        </div>
        <div className="tools">
          <h4>Tools</h4>
          <div className="tools-list">
            <p>
              {tools.map((tool: string) => {
                return <span key={tool}>{tool}</span>;
              })}
            </p>
          </div>
        </div>
        <div className="technos">
          {technos.map((techno: string) => {
            return <img key={techno} src={techno} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
