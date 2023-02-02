import React from "react";
// import "./contact.css";
import { motion as m } from "framer-motion";
import Wrapper from "../wrapper/Wrapper.js";
const Contact = () => {
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
        className="contact"
      >
        Contact
      </m.div>
    </Wrapper>
  );
};

export default Contact;
