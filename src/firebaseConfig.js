// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY5HPaFvpPvMUJWKMgaewO6A65fuRfLns",
  authDomain: "linkedin-clone-93090.firebaseapp.com",
  projectId: "linkedin-clone-93090",
  storageBucket: "linkedin-clone-93090.appspot.com",
  messagingSenderId: "704743285581",
  appId: "1:704743285581:web:efda5cc4d4f35f151d4d04",
  measurementId: "G-B0QNSYFDF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export{auth,app};