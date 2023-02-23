import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { GiJapan } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { auth } from "../../server/firebase.config";
import { onAuthStateChanged, signOut, User } from "@firebase/auth";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiJapan className="navbar-icon" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <div className="signout">
                {user && (
                  <>
                    {user?.email}
                    <input type="submit" value="Logout" onClick={logout} />
                  </>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Nav;
