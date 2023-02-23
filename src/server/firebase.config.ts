import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "@firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: (import.meta as any).env.VITE_APP_API_KEY,
  authDomain: (import.meta as any).env.VITE_APP_AUTH_DOMAIN,
  projectId: (import.meta as any).env.VITE_APP_PROJECT_ID,
  storageBucket: (import.meta as any).env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: (import.meta as any).env.VITE_APP_MESSAGING_SENDER_ID,
  appId: (import.meta as any).env.VITE_APP_ID,
  measurementId: (import.meta as any).env.VITE_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage();

export const auth = getAuth(app);
