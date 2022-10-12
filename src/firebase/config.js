// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlG_Y95gocbn9N7mFtz90Kcu45vRamdsQ",
  authDomain: "react-cursos-1cc7a.firebaseapp.com",
  projectId: "react-cursos-1cc7a",
  storageBucket: "react-cursos-1cc7a.appspot.com",
  messagingSenderId: "309013544896",
  appId: "1:309013544896:web:43a7f8aef2ebfc07d31225"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);