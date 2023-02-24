// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "linkedin-clone-6ca61.firebaseapp.com",
  projectId: "linkedin-clone-6ca61",
  storageBucket: "linkedin-clone-6ca61.appspot.com",
  messagingSenderId: "1097784013904",
  appId: "1:1097784013904:web:d6f8d2d245b4a506b88d55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)
export { db, auth, storage};