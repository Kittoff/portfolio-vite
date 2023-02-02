import React from "react";
import "./contact.css";
import { motion as m } from "framer-motion";
const Contact = () => {
  return (
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
  );
};

export default Contact;
