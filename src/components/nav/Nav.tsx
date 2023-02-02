import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="nav">
      <Link to="/">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
