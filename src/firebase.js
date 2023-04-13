// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv22k0tx8Nl1bRvCkqzIn2sgKtBWdnbnM",
  authDomain: "mypedya.firebaseapp.com",
  projectId: "mypedya",
  storageBucket: "mypedya.appspot.com",
  messagingSenderId: "165837080518",
  appId: "1:165837080518:web:68b75d03a87db02f3154c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
