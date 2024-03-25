// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5vsE893QqV0WMNe6UnVJVEvotj6LbDUw",
  authDomain: "chishibekabwe7-resume.firebaseapp.com",
  projectId: "chishibekabwe7-resume",
  storageBucket: "chishibekabwe7-resume.appspot.com",
  messagingSenderId: "157588992545",
  appId: "1:157588992545:web:c4674cb0ce1e94832b2960",
  measurementId: "G-6C0KZYR13M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// logEvent(analytics, 'page_view', {
//   page_location: 'https://example.com',
//   page_title: 'Example Page',
// });
// logEvent(analytics, 'page_view', {
//   page_location: 'https://example.com',
//   page_title: 'Example Page',
// });
// logEvent(analytics, 'page_view', {
//   page_location: 'https://example.com',
//   page_title: 'Example Page',
// });

// ================================================= Developed at Chishibe's Org ===================================================
