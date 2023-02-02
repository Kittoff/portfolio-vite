import React from "react";
import "./about.css";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div
      transition={{
        delay: 0.5,
        x: { duration: 1 },
        default: { ease: "linear" },
      }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      className="about"
    >
      About
    </m.div>
  );
};

export default About;
