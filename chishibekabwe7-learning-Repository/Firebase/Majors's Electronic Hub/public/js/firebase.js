// Importing SDK Functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCNU0ac2RlXDvvEAI5oFY6KeJQD2tZXlIs",
authDomain: "major-s-electronic-hub.firebaseapp.com",
projectId: "major-s-electronic-hub",
storageBucket: "major-s-electronic-hub.appspot.com",
messagingSenderId: "1094084959124",
appId: "1:1094084959124:web:75783c36caff87f28a4d81",
measurementId: "G-06TG16DRS3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  

logEvent(analytics, 'page_view', {
  page_location: 'https://major-s-electronic-hub.web.app/',
  page_title: "Major's Electronic Hub",
});
logEvent(analytics, 'page_view', {
  page_location: "https://major-s-electronic-hub.web.app/about.html",
  page_title: "Major's Electronic Hub",
});
logEvent(analytics, 'page_view', {
  page_location: 'https://major-s-electronic-hub.web.app/help.html',
  page_title: "Major's Electronic Hub",
});
logEvent(analytics, 'page_view', {
  page_location: 'https://major-s-electronic-hub.web.app/contact.html',
  page_title: "Major's Electronic Hub",
});
logEvent(analytics, 'page_view', {
  page_location: 'https://major-s-electronic-hub.web.app/Projects.html',
  page_title: "Major's Electronic Hub",
});
       
/*================================ Developed by ChishibeKabwe7@Github =============================================================================*/
