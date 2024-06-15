// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEgR0sUEH9TUn4GzZGHf7wPRvTUzEWV6Q",
  authDomain: "chishibes-studio-x.firebaseapp.com",
  projectId: "chishibes-studio-x",
  storageBucket: "chishibes-studio-x.appspot.com",
  messagingSenderId: "593455785433",
  appId: "1:593455785433:web:112f6ca30c06472ac965c8",
  measurementId: "G-6D5M8MDBLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);