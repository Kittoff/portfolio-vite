import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import { motion as m } from "framer-motion";
import { onAuthStateChanged, signOut, User } from "@firebase/auth";
import { auth } from "../../server/firebase.config.js";
const Nav = () => {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="nav--container">
      <m.nav className="nav">
        LOGO
        <Link to="/">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </m.nav>
      <div className="signout">
        {user && (
          <>
            {user?.email}
            <input type="submit" value="Logout" onClick={logout} />
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
