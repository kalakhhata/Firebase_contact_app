// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOubcmblsYceAbZu0HsXliE69PnCV0-ag",
  authDomain: "vite-contact-c312a.firebaseapp.com",
  projectId: "vite-contact-c312a",
  storageBucket: "vite-contact-c312a.firebasestorage.app",
  messagingSenderId: "933481547969",
  appId: "1:933481547969:web:6513ee6926737900c82c40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);