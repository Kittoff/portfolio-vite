import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { DocumentData } from "firebase/firestore";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { auth, storage } from "../../server/firebase.config.js";
import {
  createProject,
  deleteProject,
  getProjects,
} from "../../server/requests.jsx";
import "./admin.css";
import Login from "./Login.js";
import Select from "react-select";
import { v4 } from "uuid";

const Admin = () => {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<DocumentData>([]);
  const [newProjectName, setnewProjectName] = useState<string>("");
  const [newProjectDescription, setNewProjectDescription] =
    useState<string>("");
  const [newProjectClient, setnewProjectClient] = useState<string>("");
  const [newProjectTasks, setNewProjectTasks] = useState<string[]>([]);
  const [newProjectTools, setNewProjectTools] = useState<string[]>([]);
  const [newProjectTechnos, setNewProjectTechnos] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<any>([]);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const imagesListRef = ref(storage, "images/");
  const [options, setOptions] = useState([]);
  // const options = imageUrls.map((image) => {
  //   console.log(image);
  //   return { value: image.value, label: image.label };
  // });
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    getProjects(setProjects);

    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  useEffect(() => {
    const uniqueOptions: any = [];
    const newOptions = imageUrls.map((url) => ({
      value: url,
      label: <img src={url} alt="" height="30" width="30" />,
    }));
    newOptions.forEach((option) => {
      if (
        !uniqueOptions.some(
          (uniqueOptions) => uniqueOptions.value === option.value
        )
      ) {
        uniqueOptions.push(option);
        setOptions(uniqueOptions);
      }
    });
  }, [imageUrls]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setNewProjectTechnos(selectedOption);
  };
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

  return (
    <>
      <div className="admin">
        <div className="admin--container">
          {!user && (
            <Login
              login={login}
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
            />
          )}
          {user && (
            <>
              <div className="projects">
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
              </div>
              <div className="project-add-form">
                <div className="name">
                  <span>Name of the project</span>
                  <input
                    placeholder="Name of the project"
                    onChange={(e) => setnewProjectName(e.target.value)}
                  />
                </div>
                <div className="client">
                  <span>Client of the project</span>
                  <input
                    placeholder="Client of the project"
                    onChange={(e) => setnewProjectClient(e.target.value)}
                  />
                </div>
                <div className="tasks">
                  <span>Tasks of the project</span>
                  <input
                    placeholder="Tasks of the project"
                    onChange={(e) =>
                      setNewProjectTasks(e.target.value.split(","))
                    }
                  />
                </div>
                <div className="tools">
                  <span>Tools of the project</span>
                  <input
                    placeholder="Tools of the project"
                    onChange={(e) =>
                      setNewProjectTools(e.target.value.split(","))
                    }
                  />
                </div>
                <div className="description">
                  <span>Description of the project</span>
                  <textarea
                    placeholder="Description of the project"
                    onChange={(e) => setNewProjectDescription(e.target.value)}
                  />
                </div>
                <div className="technos">
                  <span>Technologies of the project</span>
                  <Select
                    value={selectedOption}
                    options={options}
                    onChange={handleChange}
                    getOptionValue={(option) => {
                      return option.value;
                    }}
                    placeholder="Select an technos"
                    isMulti
                  />
                </div>
                <button
                  onClick={() =>
                    createProject(
                      newProjectName,
                      newProjectDescription,
                      newProjectTasks,
                      newProjectClient,
                      newProjectTools,
                      newProjectTechnos
                    )
                  }
                >
                  Create project
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
