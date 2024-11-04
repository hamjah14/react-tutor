// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4b06CQ98i2BrfVIWcAHi4lhulaTIPw4E",
  authDomain: "simple-note-firebase-327ad.firebaseapp.com",
  projectId: "simple-note-firebase-327ad",
  storageBucket: "simple-note-firebase-327ad.appspot.com",
  messagingSenderId: "205824184011",
  appId: "1:205824184011:web:28807b51094e90ac94954e",
  measurementId: "G-XRBBHWH8M2",
  databaseURL: "https://simple-note-firebase-327ad-default-rtdb.asia-southeast1.firebasedatabase.app",  
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);

export default firebaseApp
