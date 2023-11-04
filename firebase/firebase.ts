// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ1uqwwZnLGBNQ4nv5H1g1TD-mO_6yWak",
  authDomain: "lmsassignment-85e04.firebaseapp.com",
  projectId: "lmsassignment-85e04",
  storageBucket: "lmsassignment-85e04.appspot.com",
  messagingSenderId: "188633365404",
  appId: "1:188633365404:web:d8dd099b776f22b88de659",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
