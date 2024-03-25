// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdq42oq-cBbEh6bhuwVHV1Tqmu464Zk5c",
  authDomain: "chishibes-resume.firebaseapp.com",
  projectId: "chishibes-resume",
  storageBucket: "chishibes-resume.appspot.com",
  messagingSenderId: "844625933827",
  appId: "1:844625933827:web:89e428a4a14289faad4036",
  measurementId: "G-XT1975EW5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// ================================================= Developed at Chishibe's Org ===================================================