import React, { Fragment, useEffect, useState } from "react";
import "./experience.css";
import { motion as m } from "framer-motion";
import { DocumentData } from "firebase/firestore/lite";
import { getProjects } from "../../server/requests.jsx";

const Experience = () => {
  const [projects, setProjects] = useState<DocumentData>([]);

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
              <h1>{project.name}</h1>
            </div>
          </Fragment>
        );
      })}
    </m.div>
  );
};

export default Experience;
