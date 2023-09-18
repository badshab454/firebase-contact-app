// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAitW0sD_WhaP5nNQv6twQLBjcnvC5zumk",
  authDomain: "fir-contact-app-d72aa.firebaseapp.com",
  projectId: "fir-contact-app-d72aa",
  storageBucket: "fir-contact-app-d72aa.appspot.com",
  messagingSenderId: "745207093655",
  appId: "1:745207093655:web:cd61c3c197e3af960eccd2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);