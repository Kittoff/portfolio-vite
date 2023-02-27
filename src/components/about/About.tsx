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
          <h1>
            I am Christophe <span>LOZANO</span>
          </h1>
          <p>
            A highly motivated and dedicated retrained developer with a passion
            for continuous learning and improvement. I like to work with React
            and discover new technologies.
          </p>
        </div>
        <div className="about--image">
          <img src="./img.png" alt="me" width={300} />
        </div>
      </div>
    </m.div>
  );
};

export default About;
