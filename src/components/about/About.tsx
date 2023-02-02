import React from "react";
import "./about.css";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="about"
    >
      About
    </m.div>
  );
};

export default About;
