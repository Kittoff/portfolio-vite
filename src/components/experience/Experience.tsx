import React, { Fragment, useEffect, useState } from "react";
import "./experience.css";
import { motion as m } from "framer-motion";
import { db } from "../../server/firebase.config";
import { collection, DocumentData } from "firebase/firestore/lite";
import { getProjects } from "../../server/requests.jsx";

const Experience = () => {
  const [projects, setProjects] = useState<DocumentData>([]);
  const projectsCollection = collection(db, "projects");

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
            <h1>{project.name}</h1>
          </Fragment>
        );
      })}
    </m.div>
  );
};

export default Experience;
