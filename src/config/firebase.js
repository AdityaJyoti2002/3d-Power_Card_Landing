// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUGxppdmOnoDAOgOjHQ4unhgJl0USYgNc",
  authDomain: "power-card-8083d.firebaseapp.com",
  projectId: "power-card-8083d",
  storageBucket: "power-card-8083d.firebasestorage.app",
  messagingSenderId: "289013868299",
  appId: "1:289013868299:web:197b15a58d953fc86c240e",
  measurementId: "G-Q30N0Y10NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const fireDB = getFirestore(app);
const db = getFirestore(app);
export { db, auth, fireDB };