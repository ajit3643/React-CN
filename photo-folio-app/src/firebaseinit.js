// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYeFtYoxMAlRsvMS3SaGcHiMqTTEwPsAs",
  authDomain: "photofolio-79301.firebaseapp.com",
  projectId: "photofolio-79301",
  storageBucket: "photofolio-79301.appspot.com",
  messagingSenderId: "672190561344",
  appId: "1:672190561344:web:4b3c94b8f01be6a60ab3a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);