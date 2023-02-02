import React from "react";
import "./experience.css";
import { motion as m } from "framer-motion";
const Experience = () => {
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
      Experience
    </m.div>
  );
};

export default Experience;
