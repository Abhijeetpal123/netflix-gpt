// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3I5E5vTbeL5ZGHgThmCr6YUGf6jHMLJ4",
  authDomain: "netflix-gpt-40110.firebaseapp.com",
  projectId: "netflix-gpt-40110",
  storageBucket: "netflix-gpt-40110.firebasestorage.app",
  messagingSenderId: "23910174275",
  appId: "1:23910174275:web:6ab69b21b8b19838054ef6",
  measurementId: "G-EF57TRYELJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();