// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAS9njQ_LZTADgeLEYz9hIcW4v6ZhZizps",
authDomain: "kay-graphics.firebaseapp.com",
projectId: "kay-graphics",
storageBucket: "kay-graphics.appspot.com",
messagingSenderId: "504454158464",
appId: "1:504454158464:web:491c8acf9dbdb90583ee65",
measurementId: "G-1LW1HJTB2C"
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

/*================================ Developed by ChishibeKabwe7@Github =============================================================================*/

