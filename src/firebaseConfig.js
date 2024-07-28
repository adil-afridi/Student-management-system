// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFbG9IQwhQ3F7O7AquGi_47aW6iM_1w48",
  authDomain: "student-management-syste-3020d.firebaseapp.com",
  projectId: "student-management-syste-3020d",
  storageBucket: "student-management-syste-3020d.appspot.com",
  messagingSenderId: "729613896236",
  appId: "1:729613896236:web:dafdad9387112cd8c49f89",
  measurementId: "G-WEGDDTZWPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firebase

const db = getFirestore(app)

export {db}