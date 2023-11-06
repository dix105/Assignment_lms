// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
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

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
