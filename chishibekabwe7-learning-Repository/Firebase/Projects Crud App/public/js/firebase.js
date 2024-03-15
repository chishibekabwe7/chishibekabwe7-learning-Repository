// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJrCYbw257jSoyoqVs70fN3cz1Ur3nmr4",
  authDomain: "projects-crud-app.firebaseapp.com",
  projectId: "projects-crud-app",
  storageBucket: "projects-crud-app.appspot.com",
  messagingSenderId: "480539120882",
  appId: "1:480539120882:web:74a21100e70b56b9166c6b",
  measurementId: "G-1KZRKYLH0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);