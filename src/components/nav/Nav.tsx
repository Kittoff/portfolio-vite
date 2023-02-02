import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import { motion as m } from "framer-motion";
const Nav = () => {
  const location = useLocation();
  return (
    <m.nav className="nav">
      <Link to="/">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </m.nav>
  );
};

export default Nav;
