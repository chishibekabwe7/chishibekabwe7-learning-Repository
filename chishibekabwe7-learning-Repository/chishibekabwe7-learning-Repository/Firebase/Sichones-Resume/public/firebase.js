// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDB8KE83iEYGQC7WoJYuD1F3jmiu6VtyXw",
  authDomain: "sichones-resume.firebaseapp.com",
  projectId: "sichones-resume",
  storageBucket: "sichones-resume.appspot.com",
  messagingSenderId: "948339525010",
  appId: "1:948339525010:web:74caa795ac88aa07e26d4b",
  measurementId: "G-7HR1B0B3FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);