import React from "react";
// import "./experience.css";
import { motion as m } from "framer-motion";
import Wrapper from "../wrapper/Wrapper.js";
const Experience = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Experience;
