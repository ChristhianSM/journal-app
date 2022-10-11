// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_vSnt0d3inPSrklhTP-ZGRl0BiaEjPAw",
  authDomain: "jornual-app.firebaseapp.com",
  databaseURL: "https://jornual-app-default-rtdb.firebaseio.com",
  projectId: "jornual-app",
  storageBucket: "jornual-app.appspot.com",
  messagingSenderId: "518374614404",
  appId: "1:518374614404:web:d2537669fecc86eebca9d1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);