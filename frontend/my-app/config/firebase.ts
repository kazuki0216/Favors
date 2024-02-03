// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_APIKEY } from "@env";
import { API_KEY, API_SECRET, MERCHANT_ID } from "@env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: "favors-73102.firebaseapp.com",
  projectId: "favors-73102",
  storageBucket: "favors-73102.appspot.com",
  messagingSenderId: "612302916982",
  appId: "1:612302916982:web:0c4b7694696138c277be57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
