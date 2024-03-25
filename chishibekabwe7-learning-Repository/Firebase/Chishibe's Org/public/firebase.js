// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjZo4aknKjxw5_QJAo3bDm-nxRYgbWZ6E",
  authDomain: "chishibes-org.firebaseapp.com",
  projectId: "chishibes-org",
  storageBucket: "chishibes-org.appspot.com",
  messagingSenderId: "581162477318",
  appId: "1:581162477318:web:5c5cf6c6e2bf1a0dcae087",
  measurementId: "G-1VZRH2NGPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ================================================= Developed at Chishibe's Org =================================================== -