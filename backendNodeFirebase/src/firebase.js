// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4Wk5U74bK3_xHXmET1Z07KSZ-OiYdGM",
  authDomain: "projetocrudnodejs.firebaseapp.com",
  projectId: "projetocrudnodejs",
  storageBucket: "projetocrudnodejs.appspot.com",
  messagingSenderId: "396323468370",
  appId: "1:396323468370:web:0b53c0c0da39c6532a5b8b",
  measurementId: "G-NRCPQQG607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);