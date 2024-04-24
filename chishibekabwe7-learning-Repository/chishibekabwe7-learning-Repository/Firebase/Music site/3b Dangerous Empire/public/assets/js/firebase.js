// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBVxkIu2ryjXbVClr72LVRKKrQy7tR6apQ",
  authDomain: "b-dangerous-empire-414b1.firebaseapp.com",
  projectId: "b-dangerous-empire-414b1",
  storageBucket: "b-dangerous-empire-414b1.appspot.com",
  messagingSenderId: "469073125253",
  appId: "1:469073125253:web:e801af3181ff4e780baeec",
  measurementId: "G-6EYTQY0XZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);