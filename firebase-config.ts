// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLTuluF_HckUjjLyuYAKZPgRctmhW6zVg",
  authDomain: "hw2-49017.firebaseapp.com",
  projectId: "hw2-49017",
  storageBucket: "hw2-49017.appspot.com",
  messagingSenderId: "676586281793",
  appId: "1:676586281793:web:11ce0d949df333fb855fc0",
  measurementId: "G-7LX2ENXZE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// const analytics = getAnalytics(app);

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }