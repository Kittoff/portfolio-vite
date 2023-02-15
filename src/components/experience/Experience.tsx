import React, { Fragment, useEffect, useState } from "react";
import "./experience.css";
import { motion as m } from "framer-motion";
import { DocumentData } from "firebase/firestore/lite";
import { getProjects } from "../../server/requests.jsx";
import ExperienceCard from "./experienceCard/ExperienceCard.js";

const Experience = () => {
  const [projects, setProjects] = useState<DocumentData>([]);
  const [imageUrl, setImageUrl] = useState<any>();

  useEffect(() => {
    getProjects(setProjects);
  }, []);

  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="experience"
    >
      {projects.map((project) => {
        return (
          <Fragment key={project.id}>
            <div>
              <ExperienceCard
                description={project.description}
                name={project.name}
                client={project.client}
                tasks={project.tasks}
                tools={project.tools}
                image={project.image}
                technos={project.technos}
              />
            </div>
          </Fragment>
        );
      })}
    </m.div>
  );
};

export default Experience;
