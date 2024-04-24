// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcaaHkk0-x9PAub7DswTrgVN14fHHb3TE",
  authDomain: "chishibes-organization.firebaseapp.com",
  projectId: "chishibes-organization",
  storageBucket: "chishibes-organization.appspot.com",
  messagingSenderId: "572110336083",
  appId: "1:572110336083:web:f8e6dd8af16a28fef0d6a6",
  measurementId: "G-G7GH24TW8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// ================================================= Developed at Chishibe's Org =================================================== -