// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4b06CQ98i2BrfVIWcAHi4lhulaTIPw4E",
  authDomain: "simple-note-firebase-327ad.firebaseapp.com",
  projectId: "simple-note-firebase-327ad",
  storageBucket: "simple-note-firebase-327ad.appspot.com",
  messagingSenderId: "205824184011",
  appId: "1:205824184011:web:28807b51094e90ac94954e",
  measurementId: "G-XRBBHWH8M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
