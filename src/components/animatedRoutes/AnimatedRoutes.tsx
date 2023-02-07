import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../about/About";
import Admin from "../admin/Admin.jsx";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import "./animatedRoutes.css";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <div className="container">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
