import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { DocumentData } from "firebase/firestore/lite";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { auth } from "../../server/firebase.config.js";
import {
  createProject,
  deleteProject,
  getProjects,
} from "../../server/requests.jsx";
import "./admin.css";
import Login from "./Login.js";

const Admin = () => {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<DocumentData>([]);
  const [newProjectName, setnewProjectName] = useState<string>("");
  const [newProjectDescription, setNewProjectDescription] =
    useState<string>("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    getProjects(setProjects);
  }, []);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="admin">
        User logged : {user?.email}
        <button onClick={logout}>Sign out</button>
      </div>
      {!user && (
        <Login
          login={login}
          setLoginEmail={setLoginEmail}
          setLoginPassword={setLoginPassword}
        />
      )}
      {user && (
        <>
          {projects.map((project) => {
            return (
              <Fragment key={project.id}>
                <h1>{project.name}</h1>
                <button onClick={(id) => deleteProject(project.id)}>
                  Delete
                </button>
              </Fragment>
            );
          })}
          <input
            placeholder="Name of the project"
            onChange={(e) => setnewProjectName(e.target.value)}
          />
          <textarea
            placeholder="Description of the project"
            onChange={(e) => setNewProjectDescription(e.target.value)}
          />
          <button
            onClick={() => createProject(newProjectName, newProjectDescription)}
          >
            Create project
          </button>
        </>
      )}
    </>
  );
};

export default Admin;
