import React from "react";
import "./about.css";
import { motion as m } from "framer-motion";
import Wrapper from "../wrapper/Wrapper.js";

const About = () => {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className="about"
    >
      <div className="about--content">
        <div className="about--presentation">
          <h1>I am Christophe LOZANO</h1>
          <p>A developper that want to be better than yesterday </p>
        </div>
        <div className="about--image">
          <img src="./img.png" alt="me" width={300} />
        </div>
      </div>
    </m.div>
  );
};

export default About;
