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
  apiKey: "AIzaSyCT_2KGkXwERzgfsB10yOzp5Qg-NlbpyFk",
  authDomain: "bestbuy1-adb18.firebaseapp.com",
  projectId: "bestbuy1-adb18",
  storageBucket: "bestbuy1-adb18.appspot.com",
  messagingSenderId: "152051881154",
  appId: "1:152051881154:web:6a2398c8312560cada975b",
  measurementId: "G-NLN3KBDHVY"
};

console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
