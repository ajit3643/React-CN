// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu0ijNRImCMZKiASI7xX8zHkYAmpV81gk",
  authDomain: "busybuy-ii-e3ece.firebaseapp.com",
  projectId: "busybuy-ii-e3ece",
  storageBucket: "busybuy-ii-e3ece.appspot.com",
  messagingSenderId: "737651258762",
  appId: "1:737651258762:web:e25e48350fa2cdd5524473"
};

console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
