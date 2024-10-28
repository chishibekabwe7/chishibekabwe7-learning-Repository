// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkQHmhTtTKnaVfHmH4W0zrDL3OftGgJgc",
  authDomain: "zam-media-slots.firebaseapp.com",
  projectId: "zam-media-slots",
  storageBucket: "zam-media-slots.appspot.com",
  messagingSenderId: "683143386156",
  appId: "1:683143386156:web:35d11418de4a25635e6d89",
  measurementId: "G-Z92XT5GYXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);