import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "./firebase.config";

export const projectsCollection = collection(db, "projects");

export const getProjects = async (
  setProjects: React.Dispatch<
    React.SetStateAction<Array<{ id: string; [key: string]: string }>>
  >
) => {
  const data = await getDocs(projectsCollection);
  setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

export const deleteProject = async (id: string) => {
  const projectDoc = doc(db, "projects", id);
  await deleteDoc(projectDoc);
};

export const createProject = async (
  newProjectName: string,
  newProjectDescription: string
) => {
  await addDoc(projectsCollection, {
    name: newProjectName,
    description: newProjectDescription,
  });
};
