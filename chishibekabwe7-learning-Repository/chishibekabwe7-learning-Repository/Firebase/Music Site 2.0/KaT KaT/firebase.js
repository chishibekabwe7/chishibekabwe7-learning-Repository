// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Zu2F63o9wa8ikZmB-bcBXC2QfSmkNys",
  authDomain: "kat-kat-5ec4a.firebaseapp.com",
  projectId: "kat-kat-5ec4a",
  storageBucket: "kat-kat-5ec4a.appspot.com",
  messagingSenderId: "140846653654",
  appId: "1:140846653654:web:49a2e3f7c8dc19a2d02977",
  measurementId: "G-5PC5DQ2SFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);