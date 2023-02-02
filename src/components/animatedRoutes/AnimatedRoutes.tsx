import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../about/About";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import "./animatedRoutes.css";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className="container">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
